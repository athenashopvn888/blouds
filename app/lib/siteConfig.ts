const cigaretteSwitch = process.env.NEXT_PUBLIC_SHOW_CIGARETTES?.trim().toLowerCase();
export const SHOW_CIGARETTES = cigaretteSwitch === "true";
export const isCigaretteCategory = (value: string | null | undefined) => ["cigarettes", "tobacco"].includes(value?.trim().toLowerCase() ?? "");
export const isCigarettePath = (value: string | null | undefined) => { const path = value?.trim().toLowerCase() ?? ""; return path === "cigarettes" || path.startsWith("cigarettes/") || path.includes("/cigarettes") ||
    path === "tobacco" ||
    path.startsWith("tobacco/") ||
    path.includes("/tobacco") || path.includes("native-cigarette") || path.includes("grabba") || path.includes("native-smokes/native-cigarettes-guide"); };
const isPreservedSmokeAccessory = (values: Array<string | null | undefined>) =>
  values.some((value) => /(?:backwoods|cigarillos?|rolling[- ]?papers?)/i.test(value ?? ""));
const isPreservedSmokeAccessoryEntry = (value: Record<string, unknown>) =>
  isPreservedSmokeAccessory(Object.values(value).filter((entry): entry is string => typeof entry === "string"));
export const isCigaretteGuide = (value: { lane?: string; slug?: string; preferredCategoryPath?: string }) => {
  const candidates = [value.slug, value.preferredCategoryPath];
  if (isPreservedSmokeAccessory(candidates)) return false;
  return value.lane === "native_cig" || candidates.some(isCigarettePath);
};
export const isCigaretteEntry = (value: Record<string, unknown>) => {
  const category = typeof value.category === "string" ? value.category : undefined;
  const lane = typeof value.lane === "string" ? value.lane : undefined;
  const candidates = [value.slug, value.href, value.path, value.url, value.key, value.name, value.label, value.q, value.question, value.heading, value.eyebrow]
    .filter((entry): entry is string => typeof entry === "string");
  if (isPreservedSmokeAccessory(candidates)) return false;
  return lane === "native_cig" || isCigaretteCategory(category) || candidates.some(isCigarettePath);
};

export const filterCigaretteItems = <T extends { category?: string }>(items: readonly T[]): T[] =>
  SHOW_CIGARETTES ? [...items] : items.filter((item) => !isCigaretteEntry(item as Record<string, unknown>));

export const filterCigaretteEntries = <T extends Record<string, unknown>>(entries: readonly T[]): T[] =>
  SHOW_CIGARETTES ? [...entries] : entries.filter((entry) => !isCigaretteEntry(entry));
function stripCigaretteMentions(value: string) {
  return value
    .replace(/(?:(?:native\s+)?(?:cigarettes?|tobacco)|grabba(?:\s+shaker)?)\s*,\s*/gi, "")
    .replace(/\s*,\s*(?:and\s+)?(?:(?:native\s+)?(?:cigarettes?|tobacco)|grabba(?:\s+shaker)?)/gi, "")
    .replace(/\s+(?:and|or)\s+(?:(?:native\s+)?(?:cigarettes?|tobacco)|grabba(?:\s+shaker)?)/gi, "")
    .replace(/(?:(?:native\s+)?(?:cigarettes?|tobacco)|grabba(?:\s+shaker)?)/gi, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();
}

export function cigaretteSafeContent<T>(value: T): T {
  if (SHOW_CIGARETTES) return value;
  if (typeof value === "string") return stripCigaretteMentions(value) as T;
  if (Array.isArray(value)) {
    const visibleEntries = value.filter((entry) =>
      !(entry && typeof entry === "object" && isCigaretteEntry(entry as Record<string, unknown>)),
    );
    return visibleEntries.map((entry) =>
      entry && typeof entry === "object" && isPreservedSmokeAccessoryEntry(entry as Record<string, unknown>)
        ? entry
        : cigaretteSafeContent(entry),
    ) as T;
  }
  if (value && typeof value === "object") {
    const prototype = Object.getPrototypeOf(value);
    if (prototype !== Object.prototype && prototype !== null) return value;
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, entry]) => [key, cigaretteSafeContent(entry)]),
    ) as T;
  }
  return value;
}

const GRABBA = /grabba/i;
const NATIVE_CIGARETTE = /native[-\s]+cigarettes?/i;
const PRESERVED_SMOKE = /(?:backwoods|cigarillos?|rolling[- ]?papers?)/i;

export function isHiddenCigaretteItem(item: { name?: string; slug?: string; category?: string }): boolean {
  return !SHOW_CIGARETTES && isCigaretteEntry(item as Record<string, unknown>);
}

export function isHiddenCigaretteGuide(slug: string, lane?: string): boolean {
  return !SHOW_CIGARETTES && isCigaretteGuide({ slug, lane });
}

export function isHiddenCigaretteHref(href: string): boolean {
  if (SHOW_CIGARETTES) return false;
  const path = (href.split("#")[0]?.split("?")[0] || "").replace(/\/+$/, "") || "/";
  if (path.startsWith("/guides/")) return isHiddenCigaretteGuide(decodeURIComponent(path.slice("/guides/".length)));
  if (path.startsWith("/item/")) {
    const slug = decodeURIComponent(path.slice("/item/".length));
    return isHiddenCigaretteItem({ slug, name: slug });
  }
  return isCigarettePath(path);
}

function stripSmokeTerm(text: string, term: string): string {
  const token = `(?:\\*{1,2})?${term}(?:\\*{1,2})?`;
  return text
    .replace(new RegExp(`\\s*(?:\\+|\\/|&|,|and|or)\\s*${token}`, "gi"), "")
    .replace(new RegExp(`${token}\\s*(?:\\+|\\/|&|,|and|or)\\s*`, "gi"), "")
    .replace(new RegExp(token, "gi"), "");
}

/** Drop Grabba and "native cigarettes" from a kept Backwoods label. Source text stays. */
export function visibleSmokeLabel(label: string, showCigarettes = SHOW_CIGARETTES): string {
  if (showCigarettes || !label || (!GRABBA.test(label) && !NATIVE_CIGARETTE.test(label))) return label;
  const cleaned = stripSmokeTerm(stripSmokeTerm(label, "grabba(?:\\s+shaker)?(?:\\s+at\\s+\\$\\d+)?"), "native[-\\s]+cigarettes?")
    .replace(/\s+\/\s+/g, " ")
    .replace(/\s+,/g, ",")
    .replace(/,\s*,+/g, ",")
    .replace(/,\s+(get|stay)\b/gi, " $1")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\s+([.!?])/g, "$1")
    .trim()
    .replace(/^[,.\-–—/]+\s*/, "")
    .replace(/^(?:or|and)\s+/i, "")
    .replace(/\s+(?:and|or)\s*$/i, "")
    .replace(/,\s*$/, "")
    .trim();
  if (/^(brampton|blouds)$/i.test(cleaned)) return "";
  return /[a-z]/i.test(cleaned) ? cleaned : "";
}

/** Keep Backwoods sentences. Drop Grabba-only sentences. Source text is unchanged. */
export function visibleSmokeCopy(text: string, showCigarettes = SHOW_CIGARETTES): string {
  if (showCigarettes || !text || (!GRABBA.test(text) && !NATIVE_CIGARETTE.test(text))) return text;
  if (GRABBA.test(text) && !PRESERVED_SMOKE.test(text)) return "";
  const cleaned = visibleSmokeLabel(text, showCigarettes)
    .split(/(?<=[.!?])\s+/)
    .filter((sentence) => sentence && !/“\s*”|“\s*,|use the in\b/i.test(sentence))
    .join(" ")
    .trim();
  if (NATIVE_CIGARETTE.test(text) && !PRESERVED_SMOKE.test(text) && cleaned.split(/\s+/).filter(Boolean).length < 4) return "";
  return /[a-z]/i.test(cleaned) ? cleaned : "";
}

export function visibleSmokeKeywords(keywords: string[], showCigarettes = SHOW_CIGARETTES): string[] {
  if (showCigarettes) return keywords;
  return keywords.map((keyword) => visibleSmokeLabel(keyword, showCigarettes)).filter(Boolean);
}

export function visibleSmokeMarkdown(markdown: string, showCigarettes = SHOW_CIGARETTES): string {
  if (showCigarettes || !markdown || (!GRABBA.test(markdown) && !NATIVE_CIGARETTE.test(markdown))) return markdown;
  return markdown
    .split("\n")
    .filter((line) => !GRABBA.test(line) || PRESERVED_SMOKE.test(line))
    .map((line) => (GRABBA.test(line) || NATIVE_CIGARETTE.test(line) ? visibleSmokeLabel(line, showCigarettes) : line))
    .filter((line) => line.trim() === "" || /[a-z]/i.test(line))
    .join("\n");
}

export function visibleGuideTitle(title: string, showCigarettes = SHOW_CIGARETTES): string {
  return visibleSmokeLabel(title, showCigarettes);
}
