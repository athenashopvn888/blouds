import { cache } from "react";
import {
  CIG_WORDING_FALLBACK,
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

function codedSurface(reason: "error" | "missing"): CigaretteSurfaceDecision & { wording: CigaretteWording } {
  return { show: SHOW_CIGARETTES, reason, wording: { ...CIG_WORDING_FALLBACK } };
}

export async function readCigaretteFeed(): Promise<CigaretteSnapshot> {
  if (cigaretteEnvHardOff()) {
    const hidden = decideCigaretteSurface({ cig: null, items: [], surface: "web", envRaw: "false" });
    return {
      web: hidden,
      tv: hidden,
      guides: { show: false, reason: "env" },
      wording: hidden.wording,
      live: false,
      items: allItems,
    };
  }
  try {
    const dataset = await getCigaretteDataset({
      staticFlowers: allFlowers,
      staticItems: allItems,
    });
    const source = dataset?.source ?? "static-fallback";
    const live = source === "live" || source === "last-good";
    const items = Array.isArray(dataset?.items) && dataset.items.length ? dataset.items as ItemProduct[] : allItems;
    const cig = dataset?.cig ?? null;
    if (!cig) {
      const surface = codedSurface(source === "static-fallback" ? "error" : "missing");
      return {
        web: surface,
        tv: { ...surface },
        guides: { show: SHOW_CIGARETTES, reason: surface.reason },
        wording: surface.wording,
        live: false,
        items,
      };
    }
    const web = decideCigaretteSurface({ cig, items, surface: "web" });
    const tv = decideCigaretteSurface({ cig, items, surface: "tv" });
    const guides = decideCigaretteGuide({ cig, items });
    return { web, tv, guides, wording: web.wording, live, items };
  } catch {
    const surface = codedSurface("error");
    return {
      web: surface,
      tv: { ...surface },
      guides: { show: SHOW_CIGARETTES, reason: "error" },
      wording: surface.wording,
      live: false,
      items: allItems,
    };
  }
}

export const getCigaretteSnapshot = cache(readCigaretteFeed);

export function toPublicCigaretteState(snap: CigaretteSnapshot): PublicCigaretteState {
  return { web: snap.web.show, tv: snap.tv.show, wording: snap.wording };
}

export function snapshotHeaders(snap: CigaretteSnapshot): Record<string, string> {
  return {
    "x-tv-data-cig-tv": snap.tv.show ? "1" : "0",
    "x-tv-data-cig-web": snap.web.show ? "1" : "0",
  };
}

export { reconcileSurfaceItems };
