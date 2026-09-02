import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

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

