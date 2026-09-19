import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";
import { gbpLocation, SITE_ORIGIN } from "../app/lib/gbp-location.ts";
import { SCC_TIER_ROUTES, SCC_WAVE1_HUBS } from "../app/lib/sccHubLinks.ts";

const read = (path: string) => readFileSync(path, "utf8");

const NATIVE_PATH = "/native-cigarettes-brampton-queen";
const NATIVE_FILE = "app/native-cigarettes-brampton-queen/page.tsx";
const VAPE_PATH = "/nicotine-vape-queen-street-brampton";
const VAPE_FILE = "app/nicotine-vape-queen-street-brampton/page.tsx";
const HOURS_PATH = "/24-hour-queen-street-brampton-dispensary";
const HOURS_FILE = "app/24-hour-queen-street-brampton-dispensary/page.tsx";
const DELIVERY_PATH = "/cannabis-delivery-queen-street-brampton";
const DELIVERY_FILE = "app/cannabis-delivery-queen-street-brampton/page.tsx";

const WAVE3_VERTICALS = [
  [NATIVE_PATH, NATIVE_FILE],
  [VAPE_PATH, VAPE_FILE],
  [HOURS_PATH, HOURS_FILE],
] as const;

const MENU_SWIMLANE = [
  "app/lib/flowers.json",
  "app/lib/items.json",
  "scripts/prebuild-stock.js",
] as const;

const PUBLIC_SOURCES = [
  NATIVE_FILE,
  VAPE_FILE,
  HOURS_FILE,
  DELIVERY_FILE,
  "app/page.tsx",
  "app/visit/page.tsx",
  "app/brampton-walk-in-checklist/page.tsx",
  "app/dispensary-brampton/page.tsx",
  "app/components/GBPLandingPage.tsx",
  "app/components/Footer.tsx",
  "app/lib/sccHubLinks.ts",
  "app/items/[category]/page.tsx",
].map(read).join("\n");

test("Wave 3 ships Queen Street West native cigarettes and nicotine vape LPs with locked BLS01 NAP", () => {
  const native = read(NATIVE_FILE);
  const vape = read(VAPE_FILE);
  const sitemap = read("app/sitemap.ts");
  const footer = read("app/components/Footer.tsx");

  assert.equal(existsSync(NATIVE_FILE), true);
  assert.equal(existsSync(VAPE_FILE), true);
  assert.match(native, /const PAGE_PATH = "\/native-cigarettes-brampton-queen"/);
  assert.match(vape, /const PAGE_PATH = "\/nicotine-vape-queen-street-brampton"/);
  assert.match(native, /title: \{ absolute: title \}/);
  assert.match(vape, /title: \{ absolute: title \}/);
  assert.match(native, /Native Cigarettes Queen Street West Brampton \| Blouds/);
  assert.match(vape, /Nicotine Vape Queen Street West Brampton \| Blouds/);
  assert.match(
    native,
    /<h1 className=\{styles\.pageTitle\}>Native Cigarettes on Queen Street West in Downtown Brampton<\/h1>/,
  );
  assert.match(
    vape,
    /<h1 className=\{styles\.pageTitle\}>Nicotine Vape on Queen Street West in Downtown Brampton<\/h1>/,
  );
  assert.match(native, /canonical: PAGE_URL/);
  assert.match(vape, /canonical: PAGE_URL/);

  for (const source of [native, vape]) {
    assert.match(source, /117 Queen St W, Brampton, ON L6Y 1M3/);
    assert.match(source, /\+1 \(437\) 371-5377/);
    assert.match(source, /Adults 19\+/);
    assert.match(source, /"@type": "FAQPage"/);
    assert.match(source, /SccHubLinks/);
    assert.match(source, /href="\/cannabis-delivery-queen-street-brampton"/);
    assert.match(source, /href="\/24-hour-queen-street-brampton-dispensary"/);
  }

  assert.equal(gbpLocation.address, "117 Queen St W, Brampton, ON L6Y 1M3");
  assert.equal(gbpLocation.phone, "+1 (437) 371-5377");
  assert.equal(SITE_ORIGIN, "https://www.bloudsdispensary.ca");

  assert.match(sitemap, /\$\{BASE\}\/native-cigarettes-brampton-queen`/);
  assert.match(sitemap, /\$\{BASE\}\/nicotine-vape-queen-street-brampton`/);
  assert.match(footer, /href="\/native-cigarettes-brampton-queen"/);
  assert.match(footer, /href="\/nicotine-vape-queen-street-brampton"/);
});

test("Wave 3 keeps and deepens the live Queen Street West 24-hour LP without inventing hours", () => {
  const page = read(HOURS_FILE);
  const sitemap = read("app/sitemap.ts");

  assert.match(page, /const PAGE_PATH = "\/24-hour-queen-street-brampton-dispensary"/);
  assert.match(page, /24-Hour Queen Street West Brampton Dispensary \| Blouds/);
  assert.match(
    page,
    /<h1 className=\{styles\.pageTitle\}>24-Hour Dispensary on Queen Street West in Downtown Brampton<\/h1>/,
  );
  assert.match(page, /Overnight walk-in on Queen Street West/);
  assert.match(page, /Dispensary open now on Queen Street West/);
  assert.match(page, /What the listed 24-hour schedule covers/);
  assert.match(page, /Is Blouds open now on Queen Street West\?/);
  assert.match(page, /Can I walk in at 3 a\.m\. on Queen Street West\?/);
  assert.match(page, /Is Queen Street West cannabis delivery available 24 hours\?/);
  assert.match(page, /Does the 24-hour listing apply to another Brampton address\?/);
  assert.match(page, /listed as open 24 hours/);
  assert.match(page, /does not invent 24-hour/);
  assert.match(page, /href="\/dispensary-brampton"/);
  assert.match(page, /href="\/brampton-walk-in-checklist"/);
  assert.match(page, /href="\/cannabis-delivery-queen-street-brampton"/);
  assert.match(sitemap, /\$\{BASE\}\/24-hour-queen-street-brampton-dispensary`/);

  assert.doesNotMatch(page, /delivery is 24 hours|24-hour delivery|delivery is open 24/i);
  assert.doesNotMatch(page, /native-cigarettes|nicotine pouches|grabba/i);
});

test("Wave 3 nicotine vape stays sold-on-site and separate from THC vape", () => {
  const vape = read(VAPE_FILE);
  const native = read(NATIVE_FILE);

  assert.match(vape, /const NICOTINE_MENU = "\/items\/vapes"/);
  assert.match(vape, /const THC_VAPE_MENU = "\/items\/vape-disposables"/);
  assert.match(vape, /href=\{NICOTINE_MENU\}/);
  assert.match(vape, /href=\{THC_VAPE_MENU\}/);
  assert.match(vape, /Nicotine is addictive/);
  assert.match(vape, /Are nicotine vapes the same as THC vapes at this store\?/);
  assert.match(vape, /No\. Nicotine vape is a separate category from THC vape/);
  assert.doesNotMatch(vape, /\bNic Vape\b|\bnic vapes\b/);

  assert.match(native, /const CIGARETTE_MENU = "\/items\/cigarettes"/);
  assert.match(native, /href=\{CIGARETTE_MENU\}/);
  assert.match(native, /Tobacco and nicotine are addictive/);
  assert.match(native, /Are Native cigarettes tax-free at this store\?/);
  assert.match(native, /does not claim tax-exempt sales, Nation affiliation/);
});

test("Wave 3 weights 24-hour, native cigarettes, and nicotine vape equally on hubs", () => {
  const hubLib = read("app/lib/sccHubLinks.ts");
  const homepage = read("app/page.tsx");
  const footer = read("app/components/Footer.tsx");
  const category = read("app/items/[category]/page.tsx");

  for (const [path] of WAVE3_VERTICALS) {
    assert.ok(hubLib.includes(`href: "${path}"`), `Hub graph missing ${path}`);
    assert.match(footer, new RegExp(`href="${path}"`));
    assert.match(homepage, new RegExp(`href="${path}"`));
    assert.ok(
      homepage.includes(`href: "${path}"`) || homepage.includes(`href="${path}"`),
      `Homepage missing ${path}`,
    );
  }

  assert.match(category, /href="\/native-cigarettes-brampton-queen"/);
  assert.match(category, /href="\/nicotine-vape-queen-street-brampton"/);
  assert.match(category, /catSlug === "cigarettes"/);
  assert.match(category, /catSlug === "vapes"/);

  for (const [path, file] of WAVE3_VERTICALS) {
    const source = read(file);
    assert.match(source, /SccHubLinks/, `${path} must mount Queen Street hub links`);
    for (const hub of SCC_WAVE1_HUBS) {
      if (hub.href === path) continue;
      const hasExact = source.includes(`href="${hub.href}"`) || source.includes(`href: "${hub.href}"`);
      assert.ok(hasExact || source.includes("SccHubLinks"), `${path} missing ${hub.href}`);
    }
    for (const tier of SCC_TIER_ROUTES) {
      assert.ok(source.includes("SccHubLinks") || source.includes(`href="${tier.href}"`), `${path} missing ${tier.href}`);
    }
  }
});

test("Wave 3 keeps delivery LP and MUST KEEP routes", () => {
  assert.equal(existsSync(DELIVERY_FILE), true);
  assert.match(read(DELIVERY_FILE), /const PAGE_PATH = "\/cannabis-delivery-queen-street-brampton"/);
  assert.match(read("app/sitemap.ts"), /\$\{BASE\}\/cannabis-delivery-queen-street-brampton`/);
  assert.match(read("app/lib/sccHubLinks.ts"), /href: "\/cannabis-delivery-queen-street-brampton"/);

  for (const path of [
    "app/page.tsx",
    "app/visit/page.tsx",
    "app/brampton-walk-in-checklist/page.tsx",
    "app/dispensary-brampton/page.tsx",
    "app/weed-dispensary-brampton/page.tsx",
    HOURS_FILE,
    DELIVERY_FILE,
  ]) {
    assert.equal(existsSync(path), true, `MUST KEEP missing ${path}`);
  }
});

test("Wave 3 stays on Queen Street West NAP and never claims Hillcrest, sister stores, Ottawa, #1, or medical", () => {
  assert.doesNotMatch(
    PUBLIC_SOURCES,
    /Hillcrest|Unit 104|Kennedy Loud|B Loud Kennedy|7990 Kennedy|sister store|our other location|ByWard|Gatineau|Dalhousie|Ottawa/i,
  );
  assert.doesNotMatch(PUBLIC_SOURCES, /(?:ranked\s*)?#1\b|number one|best dispensary|best cigarettes|best vape|5-star review|fake review/i);
  assert.doesNotMatch(PUBLIC_SOURCES, /\b(cures?|diagnos(?:e|is|ed)|prescription|medical cannabis|medicinal)\b/i);
  assert.doesNotMatch(read(NATIVE_FILE), /bloudsdispensary\.ca\/#store/);
  assert.doesNotMatch(read(VAPE_FILE), /bloudsdispensary\.ca\/#store/);
  assert.match(read("app/lib/gbp-location.ts"), /url: SITE_ORIGIN/);
});

test("Master GO: four Queen St pillars, FAQ on each LP, hub cards, supporting articles tied, Updates stay homepage", () => {
  const pillars = [
    [HOURS_PATH, HOURS_FILE],
    [DELIVERY_PATH, DELIVERY_FILE],
    [NATIVE_PATH, NATIVE_FILE],
    [VAPE_PATH, VAPE_FILE],
  ] as const;

  const homepage = read("app/page.tsx");
  const hubLib = read("app/lib/sccHubLinks.ts");
  const seoPages = read("app/lib/seoPages.ts");
  const infoPage = read("app/info/[seoPage]/page.tsx");
  const resourceGuide = read("app/resources/adcV2ResourceData.ts");
  const gbp = read("app/lib/gbp-location.ts");

  for (const [path, file] of pillars) {
    const source = read(file);
    assert.equal(existsSync(file), true, path);
    assert.match(source, /"@type": "FAQPage"/);
    assert.match(source, /faqItems/);
    assert.match(source, /117 Queen St W/);
    assert.match(source, /Adults 19\+/);
    assert.match(source, /the homepage/);
    assert.ok(hubLib.includes(`href: "${path}"`), `Hub missing ${path}`);
    assert.ok(
      homepage.includes(`href: "${path}"`) || homepage.includes(`href="${path}"`),
      `Homepage hub card missing ${path}`,
    );
    assert.doesNotMatch(source, /Hillcrest|Kennedy Loud|Ottawa|sister store/i);
  }

  assert.match(read(DELIVERY_FILE), /const PAGE_PATH = "\/cannabis-delivery-queen-street-brampton"/);
  assert.match(read(NATIVE_FILE), /href="\/cannabis-delivery-queen-street-brampton"/);
  assert.match(read(VAPE_FILE), /href="\/cannabis-delivery-queen-street-brampton"/);
  assert.match(read(HOURS_FILE), /href="\/cannabis-delivery-queen-street-brampton"/);

  assert.match(seoPages, /href: "\/native-cigarettes-brampton-queen"/);
  assert.match(seoPages, /href: "\/nicotine-vape-queen-street-brampton"/);
  assert.match(infoPage, /page\.neighbourhoodLp\.href/);
  assert.match(resourceGuide, /\/native-cigarettes-brampton-queen/);
  assert.equal(resourceGuide.match(/\barticle\(\{/g)?.length, 16);

  assert.match(gbp, /url: SITE_ORIGIN/);
  assert.doesNotMatch(homepage + hubLib + seoPages + infoPage, /LEARN_MORE/);
  assert.doesNotMatch(read(NATIVE_FILE) + read(VAPE_FILE) + read(HOURS_FILE) + read(DELIVERY_FILE), /LEARN_MORE/);
});

test("Wave 3 does not touch the menu swimlane", () => {
  for (const file of MENU_SWIMLANE) {
    assert.equal(existsSync(file), true, file);
    assert.doesNotMatch(read(NATIVE_FILE), /flowers\.json|items\.json|prebuild-stock|adcInventory|APPS_SCRIPT_URL/);
    assert.doesNotMatch(read(VAPE_FILE), /flowers\.json|items\.json|prebuild-stock|adcInventory|APPS_SCRIPT_URL/);
    assert.doesNotMatch(read(HOURS_FILE), /flowers\.json|items\.json|prebuild-stock|adcInventory|APPS_SCRIPT_URL/);
  }
  assert.doesNotMatch(read("scripts/prebuild-stock.js"), /native-cigarettes-brampton-queen|nicotine-vape-queen-street-brampton/);
});
