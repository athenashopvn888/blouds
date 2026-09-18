import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { gbpLocation, SITE_ORIGIN } from "../app/lib/gbp-location.ts";

const read = (path: string) => readFileSync(path, "utf8");

test("BLS01 keeps the protected owner and exact metadata", () => {
  const page = read("app/weed-dispensary-brampton/page.tsx");
  const location = read("app/lib/gbp-location.ts");
  const sitemap = read("app/sitemap.ts");
  assert.match(location, /Weed Dispensary in Brampton \| Blouds Dispensary/);
  assert.match(location, /Blouds Dispensary is open 24 hours at 117 Queen St W/);
  assert.match(sitemap, /weed-dispensary-brampton`/);
  assert.match(page, /title: \{ absolute: gbpLocation\.seoTitle \}/);
  assert.match(page, /canonical:.*gbpLocation\.slug/s);
});

test("BLS01 static discovery uses only approved destinations", () => {
  const sources = [read("app/lib/weedDiscovery.ts"), read("app/components/WeedDiscoveryModule.tsx")].join("\n");
  for (const href of ["/budget-weed", "/aa-weed", "/aaa-weed", "/premium-weed", "/exotic-weed", "/items/prerolls", "/items/edibles", "/items/vapes", "/items/concentrates", "/items/add-ons", "/weed-dispensary-brampton", "/resources/weed-flower-guides", "/resources/local-guides/queen-street-brampton-visit-guide"]) {
    assert.ok(sources.includes(href), `Missing approved link: ${href}`);
  }
});

test("BLS01 exact FMD identity is consistent", () => {
  const sources = [read("app/lib/weedDiscovery.ts"), read("app/lib/gbp-location.ts"), read("app/components/GBPLandingPage.tsx")].join("\n");
  assert.match(sources, /117 Queen St W/);
  assert.match(sources, /\+14373715377/);
  assert.match(sources, /\+1 \(437\) 371-5377/);
});

test("BLS01 shopper copy avoids workflow and unsupported claims", () => {
  const sources = [read("app/components/GBPLandingPage.tsx"), read("app/components/WeedDiscoveryModule.tsx")].join("\n").toLowerCase();
  for (const blocked of ["homepage remains", "search intent", "page role", "gsc", "peel region", "parking", "transit", "delivery", "best seller", "bestseller", "trending", "fully licensed"]) {
    assert.ok(!sources.includes(blocked), `Blocked shopper-copy phrase: ${blocked}`);
  }
});

test("BLS01 locks Queen St NAP across schema, footer, contact, and delivery", () => {
  assert.equal(gbpLocation.storeName, "Blouds Dispensary");
  assert.equal(gbpLocation.address, "117 Queen St W, Brampton, ON L6Y 1M3");
  assert.equal(gbpLocation.streetAddress, "117 Queen St W");
  assert.equal(gbpLocation.postalCode, "L6Y 1M3");
  assert.equal(gbpLocation.phone, "+1 (437) 371-5377");
  assert.equal(gbpLocation.phoneIntl, "+14373715377");
  assert.equal(gbpLocation.hoursDisplay, "Open 24 Hours");
  assert.equal(SITE_ORIGIN, "https://www.bloudsdispensary.ca");

  const consumers = [
    "app/lib/weedDiscovery.ts",
    "app/layout.tsx",
    "app/page.tsx",
    "app/contact/page.tsx",
    "app/components/Footer.tsx",
    "app/components/Navbar.tsx",
    "app/components/GBPLandingPage.tsx",
    "app/visit/page.tsx",
  ];
  for (const path of consumers) {
    assert.match(read(path), /gbpLocation|buildStoreJsonLd/, path);
  }

  const delivery = read("app/delivery/DeliveryContent.tsx");
  assert.match(delivery, /117 Queen St W, Brampton, ON L6Y 1M3/);
  assert.match(delivery, /\(437\) 371-5377/);
  assert.doesNotMatch(delivery, /425-0117|4250117/);

  const publicSources = [
    read("app/lib/gbp-location.ts"),
    read("app/page.tsx"),
    read("app/contact/page.tsx"),
    read("app/components/Footer.tsx"),
    read("app/components/GBPLandingPage.tsx"),
    read("app/delivery/DeliveryContent.tsx"),
    read("app/lib/seoContent.generated.json"),
    read("app/visit/page.tsx"),
  ].join("\n");
  assert.doesNotMatch(publicSources, /B Loud Kennedy|BLoud Cannabis|7990 Kennedy|Kennedy Loud|425-0117/i);

  const schema = read("app/lib/gbp-location.ts");
  assert.match(schema, /url: SITE_ORIGIN/);
  assert.match(schema, /telephone: gbpLocation\.phoneIntl/);
  assert.match(schema, /postalCode: gbpLocation\.postalCode/);
  assert.match(schema, /Blouds_Welcome_Banner\.webp/);
  assert.doesNotMatch(schema, /wp-content/);
});

test("BLS01 prefers the www host for local landing canonicals and shop recovery", () => {
  const homepage = read("app/page.tsx");
  const contact = read("app/contact/page.tsx");
  const faq = read("app/faq/page.tsx");
  const config = read("next.config.ts");
  const layout = read("app/layout.tsx");

  assert.match(homepage, /canonical: SITE_ORIGIN/);
  assert.match(contact, /canonical: `\$\{SITE_ORIGIN\}\/contact`/);
  assert.match(faq, /canonical: "https:\/\/www\.bloudsdispensary\.ca\/faq"/);
  assert.match(config, /source: "\/shop"/);
  assert.match(config, /destination: "\/"/);
  assert.doesNotMatch(layout, /alternates:\s*\{\s*canonical:/);
});

test("homepage and Brampton landing keep a visible Queen Street H1", () => {
  const homepage = read("app/page.tsx");
  const landing = read("app/components/GBPLandingPage.tsx");
  assert.match(homepage, /<h1>24-Hour Weed Dispensary in Brampton<\/h1>/);
  assert.doesNotMatch(homepage, /clip: "rect\(0, 0, 0, 0\)"/);
  assert.match(landing, /<h1>Weed Dispensary in Brampton on Queen Street West<\/h1>/);
  assert.match(landing, /Call <a href=\{`tel:\$\{store\.phoneIntl\}`\}>\{store\.phoneDisplay\}<\/a>/);
  assert.match(homepage, /href="\/visit"/);
  assert.match(landing, /href="\/visit"/);
});
