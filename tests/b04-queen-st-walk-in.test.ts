import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { gbpLocation, SITE_ORIGIN } from "../app/lib/gbp-location.ts";

const read = (path: string) => readFileSync(path, "utf8");

test("B04 ships a /visit Queen Street West walk-in guide with locked BLS01 NAP", () => {
  const page = read("app/visit/page.tsx");
  const sitemap = read("app/sitemap.ts");
  const footer = read("app/components/Footer.tsx");

  assert.match(page, /title: \{ absolute: title \}/);
  assert.match(page, /Bloud Brampton Walk-In — Queen Street West Storefront Guide/);
  assert.match(page, /<h1 className=\{styles\.pageTitle\}>Queen Street West Brampton Dispensary Walk-In<\/h1>/);
  assert.match(page, /canonical: PAGE_URL/);
  assert.match(page, /const PAGE_PATH = "\/visit"/);
  assert.match(page, /siteUrl\(PAGE_PATH\)/);

  assert.match(page, /117 Queen St W, Brampton, ON L6Y 1M3/);
  assert.match(page, /\+1 \(437\) 371-5377/);
  assert.match(page, /Open 24 Hours/);
  assert.equal(gbpLocation.address, "117 Queen St W, Brampton, ON L6Y 1M3");
  assert.equal(gbpLocation.phone, "+1 (437) 371-5377");
  assert.equal(SITE_ORIGIN, "https://www.bloudsdispensary.ca");

  for (const href of ["href=\"/\"", "href=\"/weed-dispensary-brampton\"", "href=\"/contact\"", "href=\"/faq\""]) {
    assert.ok(page.includes(href), `Missing internal link: ${href}`);
  }

  assert.match(sitemap, /\$\{BASE\}\/visit`/);
  assert.match(footer, /href="\/visit"/);
  assert.match(read("app/page.tsx"), /href="\/visit"/);
  assert.match(read("app/faq/page.tsx"), /href="\/visit"/);
  assert.match(read("app/contact/page.tsx"), /href="\/visit"/);
});

test("B04 Value Buds intercept stays a checklist and does not fake reviews", () => {
  const page = read("app/visit/page.tsx");

  assert.match(page, /Is Blouds the same store as Value Buds\?/);
  assert.match(page, /Value Buds is a separate licensed chain/);
  assert.match(page, /does not publish ratings or reviews/);
  assert.match(page, /does not invent ratings, quotes, or competitor hours/);
  assert.doesNotMatch(page, /\d(?:\.\d)?\s*\/\s*5|\bstars?\b|\bgoogle review/i);
});

test("B04 does not revive B Loud Kennedy or send GBP website off the homepage", () => {
  const page = read("app/visit/page.tsx");
  const schema = read("app/lib/gbp-location.ts");

  assert.doesNotMatch(page, /B Loud Kennedy|BLoud Cannabis|7990 Kennedy|Kennedy Loud|Hillcrest|425-0117/i);
  assert.match(page, /about: \{ "@id": `\$\{SITE_ORIGIN\}\/#store` \}/);
  assert.match(schema, /url: SITE_ORIGIN/);
  assert.doesNotMatch(schema, /url: .*\/visit/);
});

test("B04 FAQPage schema stays on the walk-in article", () => {
  const page = read("app/visit/page.tsx");
  assert.match(page, /"@type": "FAQPage"/);
  assert.match(page, /"@type": "Question"/);
  assert.match(page, /"@type": "Answer"/);
  assert.match(page, /"@type": "BreadcrumbList"/);
});
