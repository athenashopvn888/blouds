import type { Nap, ResolvedBanner, ResolvedPage } from "./types.ts";
import { FULL_NAME_NAP } from "../fullNameNap.ts";
import { SITE_ORIGIN, gbpLocation } from "../gbp-location.ts";

/**
 * The only store-specific fleet file. Other stores replace this module
 * and leave the rest of app/lib/fleet and app/components/fleet as-is.
 */
export const FLEET_STORE_CODE = "BLS01";
export const FLEET_STORE_NAME = gbpLocation.storeName;
export const FLEET_AREA = gbpLocation.city;
export const FLEET_DOMAIN = "www.bloudsdispensary.ca";
export const FLEET_DOMAINS = ["www.bloudsdispensary.ca", "bloudsdispensary.ca"] as const;
export const FLEET_ORIGIN = SITE_ORIGIN;

/** Public blob origin. Objects live at /{storeCode}/manifest.json and /{storeCode}/articles/. */
export const FLEET_BLOB_ORIGIN = "https://dhaah0upvlpukv56.public.blob.vercel-storage.com";

export const FLEET_COLORS = {
  banner: "#111827",
  bannerText: "#ffffff",
} as const;

/** Digits or formatted numbers. An article containing any of these is dropped. */
export const FLEET_BLOCKED_PHONES: readonly string[] = [];

export const FLEET_ARTICLES_PATH = "/articles";

/** Page and spot names for the six TV2 category cards. Spot is the card name. */
export const TV2_PAGE = "TV2";
export const TV2_CARDS = [
  "PREROLLS_ADDONS",
  "VAPES",
  "EDIBLES",
  "CONCENTRATES",
  "CIGARETTES",
  "MAGIC",
] as const;

export const TV_PAGE = "TV";
export const TV_FULLSCREEN_SPOTS = [
  "Fullscreen promo 1",
  "Fullscreen promo 2",
  "Fullscreen promo 3",
] as const;

/** Fort York Cannabis takeover defaults: 5s on screen, once a minute, 5s first preview, 650ms slide. */
export const TV_PROMO_SHOW_SECONDS = 5;
export const TV_PROMO_EVERY_MINUTES = 1;
export const TV_PROMO_INITIAL_DELAY_MS = 5_000;
export const TV_PROMO_SLIDE_MS = 650;

export function defaultManifestUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/manifest.json`;
}

export function articlesIndexUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/index.json`;
}

export function articleBodyUrl(slug: string, storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/${encodeURIComponent(slug)}.json`;
}

export const CODED_NAP: Nap = {
  name: gbpLocation.storeName,
  street: gbpLocation.streetAddress,
  city: gbpLocation.city,
  province: gbpLocation.province,
  postalCode: gbpLocation.postalCode,
  cityLine: `${gbpLocation.city}, ${gbpLocation.province} ${gbpLocation.postalCode}`,
  area: gbpLocation.neighborhood,
  intersection: FULL_NAME_NAP.intersection,
  areaLine: `${FULL_NAME_NAP.intersection}, ${gbpLocation.neighborhood}`,
  phoneDisplay: gbpLocation.phone,
  phoneTel: gbpLocation.phoneIntl,
  hours: gbpLocation.hoursDisplay,
  mapsSearchUrl: gbpLocation.directionsUrl,
  mapsEmbedUrl: gbpLocation.mapEmbedUrl,
  lat: gbpLocation.latitude,
  lng: gbpLocation.longitude,
  schemaName: FULL_NAME_NAP.fullName,
  website: SITE_ORIGIN,
};

const STORE_NAME = FLEET_STORE_NAME;
const STORE_AREA = FLEET_AREA;

export const CODED_BANNERS: ResolvedBanner[] = [
  {
    id: "weed",
    page: "Home",
    spot: "Top banner",
    href: "/exotic-weed",
    categoryName: "Exotic Weed",
    hidden: false,
    render: "image",
    image: "/banners/top-weed-tier-bls01.webp",
    codedImage: "/banners/top-weed-tier-bls01.webp",
    alt: `${STORE_NAME} in ${STORE_AREA} — Exotic, Premium and AAA+ top weed tiers`,
    title: `${STORE_NAME} top weed tiers — Exotic, Premium and AAA+`,
    textBar: "Buy 2g Get 1g FREE · Buy 3g Get 3g FREE",
    caption: "Buy 2g Get 1g FREE · Buy 3g Get 3g FREE",
  },
  {
    id: "vapes",
    page: "Home",
    spot: "Promo banner 2",
    href: "/items/vapes",
    categoryName: "Nicotine Vapes",
    hidden: false,
    render: "image",
    image: "/banners/core-vapes-nicotine-thc.webp",
    codedImage: "/banners/core-vapes-nicotine-thc.webp",
    alt: `${STORE_NAME} in ${STORE_AREA} — nicotine vapes and THC vapes`,
    title: `${STORE_NAME} nicotine vapes and THC vapes`,
    textBar: "Nicotine vapes + THC vapes",
    caption: "Nicotine vapes + THC vapes",
  },
  {
    id: "cigarettes",
    page: "Home",
    spot: "Promo banner 3",
    href: "/items/cigarettes",
    categoryName: "Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/2pack5cig.webp",
    codedImage: "/banners/2pack5cig.webp",
    alt: `${STORE_NAME} in ${STORE_AREA} — 2 packs for $5 mix and match and $25 carton cigarette offer`,
    title: `${STORE_NAME} cigarette offer — 2 packs $5 mix and match, $25 carton`,
    textBar: "2 packs $5 mix & match · $25 carton",
    caption: "2 packs $5 mix & match · $25 carton",
  },
  {
    id: "premium-cigarettes",
    page: "Home",
    spot: "Promo banner 4",
    href: "/items/cigarettes",
    categoryName: "Premium Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/core-premium-bb-marlboro-belmont.webp",
    codedImage: "/banners/core-premium-bb-marlboro-belmont.webp",
    alt: `${STORE_NAME} in ${STORE_AREA} — BB Full Flavor and Lights 2 packs for $5, Marlboro and Belmont $10 per pack`,
    title: `${STORE_NAME} premium cigarettes — BB 2 packs $5, Marlboro and Belmont $10 per pack`,
    textBar: "BB Full Flavor + Lights — 2 packs $5 · Marlboro & Belmont — $10/pack",
    caption: "BB Full Flavor + Lights — 2 packs $5 · Marlboro & Belmont — $10/pack",
  },
];

export const CODED_PAGES: Record<string, ResolvedPage> = {
  Home: {
    description: gbpLocation.metaDescription,
    metaTitle: "",
    metaDescription: gbpLocation.metaDescription,
  },
  Contact: {
    description: `Visit ${gbpLocation.storeName} at ${gbpLocation.address}. ${gbpLocation.hoursDisplay} a day, 7 days a week. Call ${gbpLocation.phone}. Walk-ins welcome.`,
    metaTitle: `Contact ${gbpLocation.storeName} | ${gbpLocation.streetAddress}, ${gbpLocation.city}`,
    metaDescription: `Visit ${gbpLocation.storeName} at ${gbpLocation.address}. ${gbpLocation.hoursDisplay} a day, 7 days a week. Call ${gbpLocation.phone}. Walk-ins welcome.`,
  },
};
