import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { gbpLocation, SITE_ORIGIN } from "../app/lib/gbp-location.ts";
import { SCC_TIER_ROUTES, SCC_WAVE1_HUBS } from "../app/lib/sccHubLinks.ts";

const read = (path: string) => readFileSync(path, "utf8");

const PAGE_PATH = "/cannabis-delivery-queen-street-brampton";
const PAGE_FILE = "app/cannabis-delivery-queen-street-brampton/page.tsx";

const HUB_PAGES = [
  ["/", "app/page.tsx"],
  ["/visit", "app/visit/page.tsx"],
  ["/brampton-walk-in-checklist", "app/brampton-walk-in-checklist/page.tsx"],
  ["/dispensary-brampton", "app/dispensary-brampton/page.tsx"],
  ["/weed-dispensary-brampton", "app/components/GBPLandingPage.tsx"],
  [PAGE_PATH, PAGE_FILE],
  ["/24-hour-queen-street-brampton-dispensary", "app/24-hour-queen-street-brampton-dispensary/page.tsx"],
] as const;

const PUBLIC_SOURCES = [
  PAGE_FILE,
  "app/page.tsx",
  "app/visit/page.tsx",
  "app/brampton-walk-in-checklist/page.tsx",
  "app/dispensary-brampton/page.tsx",
  "app/components/GBPLandingPage.tsx",
  "app/24-hour-queen-street-brampton-dispensary/page.tsx",
  "app/[tier]/page.tsx",
  "app/components/Footer.tsx",
  "app/lib/sccHubLinks.ts",
  "app/delivery/DeliveryContent.tsx",
].map(read).join("\n");

test("Wave 2 ships a Queen Street West cannabis delivery LP with locked BLS01 NAP", () => {
  const page = read(PAGE_FILE);
  const sitemap = read("app/sitemap.ts");
  const footer = read("app/components/Footer.tsx");

  assert.match(page, /const PAGE_PATH = "\/cannabis-delivery-queen-street-brampton"/);
  assert.match(page, /title: \{ absolute: title \}/);
  assert.match(page, /Cannabis Delivery Queen Street West Brampton \| Blouds/);
  assert.match(
    page,
    /<h1 className=\{styles\.pageTitle\}>Cannabis Delivery from Queen Street West in Downtown Brampton<\/h1>/,
  );
  assert.match(page, /canonical: PAGE_URL/);
  assert.match(page, /117 Queen St W, Brampton, ON L6Y 1M3/);
  assert.match(page, /\+1 \(437\) 371-5377/);
  assert.equal(gbpLocation.address, "117 Queen St W, Brampton, ON L6Y 1M3");
  assert.equal(gbpLocation.phone, "+1 (437) 371-5377");
  assert.equal(SITE_ORIGIN, "https://www.bloudsdispensary.ca");

  assert.match(sitemap, /\$\{BASE\}\/cannabis-delivery-queen-street-brampton`/);
  assert.match(footer, /href="\/cannabis-delivery-queen-street-brampton"/);
});

test("Wave 2 keeps delivery hours separate from the 24-hour Queen Street West walk-in", () => {
  const page = read(PAGE_FILE);

  assert.match(page, /Delivery hours are not the 24-hour walk-in/);
  assert.match(page, /dispatcher confirms hours and address — not the 24-hour walk-in/);
  assert.match(page, /Cannabis delivery does not inherit that overnight schedule/);
  assert.match(page, /published delivery menu does not list a clock window/);
  assert.match(page, /Is Queen Street West cannabis delivery available 24 hours\?/);
  assert.match(page, /No\. The storefront at 117 Queen St W is listed as open 24 hours for walk-in/);
  assert.match(page, /\$60 product minimum/);
  assert.match(page, /const DELIVERY_MENU = "\/delivery"/);
  assert.match(page, /const LIVE_ORDER = "\/delivery\?liveOrder=1"/);
  assert.match(page, /href=\{DELIVERY_MENU\}/);
  assert.match(page, /href=\{LIVE_ORDER\}/);
  assert.match(page, /LIVE ORDER/);
  assert.doesNotMatch(page, /delivery is 24 hours|24-hour delivery|delivery is open 24/i);
});

test("Wave 2 delivery LP includes FAQPage, how-to-order, and Queen Street West area voice", () => {
  const page = read(PAGE_FILE);

  assert.match(page, /"@type": "FAQPage"/);
  assert.match(page, /"@type": "Question"/);
  assert.match(page, /"@type": "Answer"/);
  assert.match(page, /"@type": "BreadcrumbList"/);
  assert.match(page, /How to order Queen Street West cannabis delivery/);
  assert.match(page, /Queen Street West \/ downtown delivery area/);
  assert.match(page, /dispatcher confirms whether your address is in range/);
  assert.match(page, /selfie-with-ID/);
  assert.match(page, /Queen Street West/);
  assert.match(page, /downtown Brampton/);
});

test("Wave 2 dense-links homepage, visit, checklist, weed hub, delivery, and five tiers", () => {
  const hubLib = read("app/lib/sccHubLinks.ts");
  const footer = read("app/components/Footer.tsx");
  const deliveryMenu = read("app/delivery/DeliveryContent.tsx");
  const tierPage = read("app/[tier]/page.tsx");

  assert.ok(hubLib.includes(`href: "${PAGE_PATH}"`));
  assert.match(footer, /href="\/cannabis-delivery-queen-street-brampton"/);
  assert.match(deliveryMenu, /href="\/cannabis-delivery-queen-street-brampton"/);
  assert.match(tierPage, /href="\/cannabis-delivery-queen-street-brampton"/);

  for (const [path, file] of HUB_PAGES) {
    const source = read(file);
    assert.match(source, /SccHubLinks/, `${path} must mount the Queen Street hub links`);
    assert.ok(
      source.includes(`href="${PAGE_PATH}"`) || source.includes("SccHubLinks"),
      `${path} must reach the Queen Street West delivery LP`,
    );
  }

  for (const hub of SCC_WAVE1_HUBS) {
    if (hub.href === PAGE_PATH) continue;
    const page = read(PAGE_FILE);
    const hasExact = page.includes(`href="${hub.href}"`) || page.includes(`href: "${hub.href}"`);
    assert.ok(hasExact || page.includes("SccHubLinks"), `Delivery LP missing ${hub.href}`);
  }

  for (const tier of SCC_TIER_ROUTES) {
    assert.match(read(PAGE_FILE), new RegExp(`href="${tier.href}"`));
  }
});

test("Wave 2 stays on Queen Street West NAP and never claims Hillcrest, sister stores, smoke LPs, or Ottawa copy", () => {
  assert.doesNotMatch(
    PUBLIC_SOURCES,
    /Hillcrest|Unit 104|Kennedy Loud|B Loud Kennedy|7990 Kennedy|sister store|our other location|ByWard|Gatineau|Dalhousie|Ottawa/i,
  );
  assert.doesNotMatch(read(PAGE_FILE), /native-cigarettes|nicotine pouches|grabba/i);
  assert.doesNotMatch(read(PAGE_FILE), /bloudsdispensary\.ca\/#store/);
  assert.match(read("app/lib/gbp-location.ts"), /url: SITE_ORIGIN/);
});
