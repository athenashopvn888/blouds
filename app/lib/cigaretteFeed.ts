import { cache } from "react";
import {
  cigarettePublicHeaders,
  decideCigaretteGuide,
  decideCigaretteSurface,
  reconcileSurfaceItems,
  type CigaretteSurfaceDecision,
  type CigaretteWording,
} from "./cigDecision.ts";
import { allFlowers, allItems, type ItemProduct } from "./products.ts";
import { SHOW_CIGARETTES, cigaretteEnvHardOff } from "./siteConfig.ts";
import { getCigaretteDataset } from "./tvStock.js";

export type CigaretteSnapshot = {
  web: CigaretteSurfaceDecision & { wording: CigaretteWording };
  tv: CigaretteSurfaceDecision & { wording: CigaretteWording };
  guides: CigaretteSurfaceDecision;
  wording: CigaretteWording;
  live: boolean;
  items: ItemProduct[];
};

export type PublicCigaretteState = {
  web: boolean;
  tv: boolean;
  wording: CigaretteWording;
};

/** Website and guides keep the coded switch when the feed is missing or errors. A real feed flag is webOn / master only. */
function codedWebFallback<T extends { show: boolean; reason: string }>(decision: T): T {
  if (decision.reason === "error" || decision.reason === "missing") {
    return { ...decision, show: SHOW_CIGARETTES };
  }
  return decision;
}

function snapshotFrom(cig: unknown, items: ItemProduct[], live: boolean, errored: boolean): CigaretteSnapshot {
  const web = codedWebFallback(decideCigaretteSurface({ cig, items, surface: "web", errored }));
  const tv = decideCigaretteSurface({ cig, items, surface: "tv", errored });
  const guides = codedWebFallback(decideCigaretteGuide({ cig, items, errored }));
  return { web, tv, guides, wording: web.wording, live, items };
}

export async function readCigaretteFeed(): Promise<CigaretteSnapshot> {
  if (cigaretteEnvHardOff()) return snapshotFrom(null, [], false, false);
  try {
    const dataset = await getCigaretteDataset({
      staticFlowers: allFlowers,
      staticItems: allItems,
    });
    const source = dataset?.source ?? "static-fallback";
    const live = source === "live" || source === "last-good";
    const items = Array.isArray(dataset?.items) && dataset.items.length ? dataset.items as ItemProduct[] : allItems;
    const cig = dataset?.cig ?? null;
    // TV follows tvOn, including cigDecision's miss/error fallback. Web and guides
    // use the coded switch for that miss/error, and the feed flag when one is present.
    return snapshotFrom(cig, items, live, !live && !cig);
  } catch {
    return snapshotFrom(null, allItems, false, true);
  }
}

export const getCigaretteSnapshot = cache(readCigaretteFeed);

export function toPublicCigaretteState(snap: CigaretteSnapshot): PublicCigaretteState {
  return { web: snap.web.show, tv: snap.tv.show, wording: snap.wording };
}

export function snapshotHeaders(snap: CigaretteSnapshot): Record<string, string> {
  return cigarettePublicHeaders({ web: snap.web.show, tv: snap.tv.show, wording: snap.wording });
}

export { reconcileSurfaceItems };
