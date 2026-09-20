import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";
import { gbpLocation, SITE_ORIGIN } from "../app/lib/gbp-location.ts";
import { SEO_PAGES } from "../app/lib/seoPages.ts";
import { SCC_TIER_ROUTES, SCC_WAVE1_HUBS } from "../app/lib/sccHubLinks.ts";

const read = (path: string) => readFileSync(path, "utf8");

const PAGE_PATH = "/weed-dispensary-brampton";
const PAGE_FILE = "app/weed-dispensary-brampton/page.tsx";
const LANDING_FILE = "app/components/GBPLandingPage.tsx";

const PILLAR_LINKS = [
  "/visit",
  "/24-hour-queen-street-brampton-dispensary",
  "/cannabis-delivery-queen-street-brampton",
  "/native-cigarettes-brampton-queen",
  "/nicotine-vape-queen-street-brampton",
] as const;

const MENU_SWIMLANE = [
  "app/lib/flowers.json",
  "app/lib/items.json",
  "scripts/prebuild-stock.js",
] as const;

const PUBLIC_SOURCES = [
  LANDING_FILE,
  PAGE_FILE,
  "app/page.tsx",
  "app/visit/page.tsx",
  "app/lib/sccHubLinks.ts",
  "app/lib/seoPages.ts",
  "app/lib/weedDiscovery.ts",
  "app/items/[category]/page.tsx",
].map(read).join("\n");

const UNIQUE_FAQ = [
  "Is this the Queen Street West weed dispensary in downtown Brampton?",
  "Is this page a city-wide Brampton weed dispensary roundup?",
  "How is this Queen Street West weed page different from the walk-in guide?",
  "How is this different from the 24-hour Queen Street West page?",
  "Does this Queen Street West weed dispensary page include cannabis delivery?",
  "Can I start with flower tiers from this downtown Queen Street West page?",
  "Does this weed dispensary page cover native cigarettes or nicotine vape?",
  "What is the exact Queen Street West pin for this weed dispensary?",
  "Do I need to be 19+ to shop weed on Queen Street West?",
  "Where should I browse the current Queen Street West menu from this page?",
] as const;

test("5th pillar keeps the live Queen Street West weed-dispensary path and downtown H1/title", () => {
  const page = read(PAGE_FILE);
  const landing = read(LANDING_FILE);
  const sitemap = read("app/sitemap.ts");
  const config = read("next.config.ts");

  assert.equal(existsSync(PAGE_FILE), true);
  assert.equal(existsSync(LANDING_FILE), true);
  assert.match(page, /canonical: siteUrl\(`\/\$\{gbpLocation\.slug\}`\)/);
  assert.match(page, /title: \{ absolute: gbpLocation\.weedOwnerTitle \}/);
  assert.equal(gbpLocation.slug, "weed-dispensary-brampton");
  assert.equal(gbpLocation.weedOwnerTitle, "Queen Street West Weed Dispensary in Downtown Brampton | Blouds");
  assert.equal(gbpLocation.weedOwnerH1, "Queen Street West Weed Dispensary in Downtown Brampton");
  assert.match(gbpLocation.weedOwnerDescription, /Queen Street West/);
  assert.match(gbpLocation.weedOwnerDescription, /117 Queen St W/);
  assert.match(landing, /<h1>\{gbpLocation\.weedOwnerH1\}<\/h1>/);
  assert.match(landing, /Queen Street West \/ downtown weed dispensary/);
  assert.match(landing, /Downtown Queen Street West/);
  assert.match(landing, /const PAGE_PATH = "\/weed-dispensary-brampton"/);
  assert.match(sitemap, /\$\{BASE\}\/weed-dispensary-brampton`/);
  assert.doesNotMatch(config, /source: "\/weed-dispensary-brampton"/);
  assert.doesNotMatch(landing, /Hillcrest|Kennedy Loud|7990 Kennedy/i);
});

test("5th pillar ships unique Queen Street West FAQ + FAQPage", () => {
  const landing = read(LANDING_FILE);
  const visit = read("app/visit/page.tsx");
  const hours = read("app/24-hour-queen-street-brampton-dispensary/page.tsx");
  const delivery = read("app/cannabis-delivery-queen-street-brampton/page.tsx");
  const native = read("app/native-cigarettes-brampton-queen/page.tsx");
  const vape = read("app/nicotine-vape-queen-street-brampton/page.tsx");
  const otherFaqs = [visit, hours, delivery, native, vape].join("\n");

  assert.match(landing, /"@type": "FAQPage"/);
  assert.match(landing, /"@type": "BreadcrumbList"/);
  assert.match(landing, /faqItems/);
  assert.match(landing, /FAQ: Queen Street West weed dispensary/);
  assert.match(landing, /Adults 19\+/);
  assert.match(landing, /the homepage/);

  for (const question of UNIQUE_FAQ) {
    assert.ok(landing.includes(question), `Missing unique FAQ: ${question}`);
    assert.equal(otherFaqs.includes(question), false, `FAQ leaked onto another LP: ${question}`);
  }
});

test("5th pillar hub card and dense links to visit/24h/delivery/cig/nic/tiers", () => {
  const landing = read(LANDING_FILE);
  const homepage = read("app/page.tsx");
  const hubLib = read("app/lib/sccHubLinks.ts");
  const footer = read("app/components/Footer.tsx");
  const category = read("app/items/[category]/page.tsx");

  assert.match(landing, /SccHubLinks/);
  assert.ok(hubLib.includes(`href: "${PAGE_PATH}"`), "Hub graph missing weed dispensary path");
  assert.match(hubLib, /Queen Street West weed dispensary/);
  assert.match(homepage, /href: "\/weed-dispensary-brampton"/);
  assert.match(homepage, /Queen Street West weed dispensary/);
  assert.match(homepage, /tag: "Weed dispensary"/);
  assert.match(footer, /href="\/weed-dispensary-brampton"/);

  for (const href of PILLAR_LINKS) {
    assert.match(landing, new RegExp(`href="${href}"`));
  }
  for (const tier of SCC_TIER_ROUTES) {
    assert.match(landing, new RegExp(`href="${tier.href}"`));
  }
  for (const hub of SCC_WAVE1_HUBS) {
    if (hub.href === PAGE_PATH) continue;
    const hasExact = landing.includes(`href="${hub.href}"`) || landing.includes(`href: "${hub.href}"`);
    assert.ok(hasExact || landing.includes("SccHubLinks"), `Weed LP missing ${hub.href}`);
  }

  assert.match(category, /Queen Street West neighbourhood weed dispensary/);
  assert.match(category, /href="\/weed-dispensary-brampton"/);
});

test("5th pillar ties supporting info pages to the live Queen Street West weed LP", () => {
  const seoPages = read("app/lib/seoPages.ts");
  const infoPage = read("app/info/[seoPage]/page.tsx");
  const tied = SEO_PAGES.filter((page) => page.neighbourhoodLp?.href === PAGE_PATH).map((page) => page.slug);

  assert.match(infoPage, /page\.neighbourhoodLp\.href/);
  assert.match(seoPages, /href: "\/weed-dispensary-brampton"/);
  assert.deepEqual(tied.sort(), [
    "brampton-weed-dispensary",
    "cheap-weed-brampton",
    "dispensary-near-me-brampton",
    "weed-store-near-mississauga",
  ]);
});

test("5th pillar stays on Queen Street West NAP and never claims Hillcrest, sister stores, Ottawa, #1, or medical", () => {
  assert.equal(gbpLocation.address, "117 Queen St W, Brampton, ON L6Y 1M3");
  assert.equal(gbpLocation.phone, "+1 (437) 371-5377");
  assert.equal(SITE_ORIGIN, "https://www.bloudsdispensary.ca");
  assert.match(read(LANDING_FILE), /117 Queen St W, Brampton, ON L6Y 1M3/);
  assert.match(read(LANDING_FILE), /\+1 \(437\) 371-5377/);
  assert.match(read("app/lib/gbp-location.ts"), /url: SITE_ORIGIN/);

  assert.doesNotMatch(
    PUBLIC_SOURCES,
    /Hillcrest|Unit 104|Kennedy Loud|B Loud Kennedy|7990 Kennedy|sister store|our other location|ByWard|Gatineau|Dalhousie|Ottawa/i,
  );
  assert.doesNotMatch(PUBLIC_SOURCES, /(?:ranked\s*)?#1\b|number one|best dispensary|5-star review|fake review/i);
  assert.doesNotMatch(PUBLIC_SOURCES, /\b(cures?|diagnos(?:e|is|ed)|prescription|medical cannabis|medicinal)\b/i);
  assert.doesNotMatch(read(LANDING_FILE), /bloudsdispensary\.ca\/#store/);
  assert.doesNotMatch(read(LANDING_FILE), /LEARN_MORE/);
});

test("5th pillar does not touch the menu swimlane", () => {
  const landing = read(LANDING_FILE);
  const page = read(PAGE_FILE);
  for (const file of MENU_SWIMLANE) {
    assert.equal(existsSync(file), true, file);
  }
  assert.doesNotMatch(landing, /flowers\.json|items\.json|prebuild-stock|adcInventory|APPS_SCRIPT_URL/);
  assert.doesNotMatch(page, /flowers\.json|items\.json|prebuild-stock|adcInventory|APPS_SCRIPT_URL/);
  assert.doesNotMatch(read("scripts/prebuild-stock.js"), /weed-dispensary-brampton/);
});
