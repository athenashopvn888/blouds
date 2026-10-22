/**
 * One cigarette gate for public URLs.
 * A feed error or a missing block keeps today's coded redirect.
 * An explicit web off stays on the same URL and renders the unavailable block,
 * except the four URLs that next.config already 302'd while the coded switch was off.
 */

/** Parent of f565ee1, cigarettes off: these 302 to /items/vapes before any page or feed. */
const CODED_OFF_REDIRECTS: Readonly<Record<string, "/items/vapes">> = {
  "/items/cigarettes": "/items/vapes",
  "/cigarettes": "/items/vapes",
  "/native-cigarettes-brampton-queen": "/items/vapes",
  "/guides/grabba": "/items/vapes",
};

export function codedOffRedirect(pathname: string): "/items/vapes" | null {
  const path = (pathname.split("?")[0]?.split("#")[0] || "/").replace(/\/+$/, "") || "/";
  return CODED_OFF_REDIRECTS[path] ?? null;
}
export type CigaretteRequest = "redirect" | "unavailable" | "allow";

function envHardOff(raw: string | undefined): boolean {
  if (raw == null) return false;
  return /^(0|false|no|off)$/i.test(raw.trim());
}

function envShows(raw: string | undefined): boolean {
  return raw?.trim().toLowerCase() === "true";
}

export function decideCigaretteRequest(input: {
  envRaw: string | undefined;
  cig: unknown;
  feedErrored: boolean;
}): CigaretteRequest {
  if (envHardOff(input.envRaw)) return "redirect";
  if (input.feedErrored || input.cig == null || typeof input.cig !== "object" || Array.isArray(input.cig)) {
    return envShows(input.envRaw) ? "allow" : "redirect";
  }
  const block = input.cig as { webOn?: unknown; on?: unknown };
  if (block.webOn === false) return "unavailable";
  if (typeof block.webOn === "boolean") return "allow";
  if (block.on === false) return "unavailable";
  return "allow";
}

const EXACT = new Set([
  "/items/cigarettes",
  "/cigarettes",
  "/cigarette",
  "/items/tobacco",
  "/tobacco",
  "/resources/native-smokes/native-cigarettes-guide",
  "/resources/native-smokes/backwoods-grabba-guide",
  "/guides/bb-cigarettes",
  "/guides/belmont-king-size",
  "/guides/canadian-cigarettes",
  "/guides/canadian-classics",
  "/guides/canadian-goose",
  "/guides/dks-cigarettes",
  "/guides/nexus-cigarettes",
  "/guides/playfares",
  "/guides/putters",
  "/guides/rolled-gold",
  "/guides/time-cigarettes",
  "/guides/grabba",
  "/guides/grabba-delivery-brampton",
  "/guides/bb-delivery-brampton",
  "/guides/bb-full-delivery-brampton",
  "/guides/bb-light-delivery-brampton",
  "/guides/belmont-delivery-brampton",
  "/guides/canadian-classics-delivery-brampton",
  "/guides/canadian-classics-original-delivery-brampton",
  "/guides/canadian-classics-silver-delivery-brampton",
  "/guides/canadian-delivery-brampton",
  "/guides/canadian-full-delivery-brampton",
  "/guides/canadian-goose-delivery-brampton",
  "/guides/canadian-goose-full-delivery-brampton",
  "/guides/canadian-goose-light-delivery-brampton",
  "/guides/canadian-light-delivery-brampton",
  "/guides/nexus-delivery-brampton",
  "/guides/nexus-full-delivery-brampton",
  "/guides/nexus-light-delivery-brampton",
  "/guides/playfare-delivery-brampton",
  "/guides/playfare-ultra-light-delivery-brampton",
  "/guides/putters-delivery-brampton",
  "/guides/rolled-gold-delivery-brampton",
  "/guides/rolled-gold-full-delivery-brampton",
  "/guides/rolled-gold-light-delivery-brampton",
  "/guides/time-delivery-brampton",
  "/guides/time-full-delivery-brampton",
  "/guides/time-light-delivery-brampton",
]);

/** Paths that redirect to the nicotine vape menu while cigarettes are coded off. */
export function isCigaretteRedirectPath(pathname: string): boolean {
  const path = pathname.split("?")[0]?.split("#")[0] || "/";
  if (EXACT.has(path)) return true;
  if (/^\/(?:items\/)?(?:cigarettes|cigarette|tobacco)(?:\/|$)/.test(path)) return true;
  if (/^\/items\/tobacco(?:\/|$)/.test(path)) return true;
  if (/^\/(?:info\/)?native-cigarettes?-[^/]+$/.test(path)) return true;
  if (/^\/item\/grabba/i.test(path)) return true;
  return false;
}
