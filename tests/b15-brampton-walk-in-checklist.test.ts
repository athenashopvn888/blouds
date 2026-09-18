import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { gbpLocation, SITE_ORIGIN } from "../app/lib/gbp-location.ts";

const read = (path: string) => readFileSync(path, "utf8");
const PAGE = "app/brampton-walk-in-checklist/page.tsx";

test("B15 ships a /brampton-walk-in-checklist with locked BLS01 NAP", () => {
  const page = read(PAGE);
  const sitemap = read("app/sitemap.ts");
  const footer = read("app/components/Footer.tsx");

  assert.match(page, /title: \{ absolute: title \}/);
  assert.match(page, /Choosing a Brampton Walk-In Dispensary — Practical Checklist \| Blouds/);
  assert.match(page, /<h1 className=\{styles\.pageTitle\}>Choosing a Brampton Walk-In Dispensary<\/h1>/);
  assert.match(page, /canonical: PAGE_URL/);
  assert.match(page, /const PAGE_PATH = "\/brampton-walk-in-checklist"/);
  assert.match(page, /siteUrl\(PAGE_PATH\)/);

  assert.match(page, /117 Queen St W, Brampton, ON L6Y 1M3/);
  assert.match(page, /\+1 \(437\) 371-5377/);
  assert.match(page, /gbpLocation\.hoursDisplay/);
  assert.match(page, /open 24 hours a day/i);
  assert.equal(gbpLocation.address, "117 Queen St W, Brampton, ON L6Y 1M3");
  assert.equal(gbpLocation.phone, "+1 (437) 371-5377");
  assert.equal(gbpLocation.storeName, "Blouds Dispensary");
  assert.equal(SITE_ORIGIN, "https://www.bloudsdispensary.ca");

  for (const href of ["href=\"/\"", "href=\"/faq\"", "href=\"/contact\""]) {
    assert.ok(page.includes(href), `Missing internal link: ${href}`);
  }

  assert.match(page, /<h2>Check GBP hours<\/h2>/);
  assert.match(page, /<h2>Check address match<\/h2>/);
  assert.match(page, /<h2>Check phone<\/h2>/);
  assert.match(page, /<h2>What Blouds offers as Queen St walk-in<\/h2>/);
  assert.match(page, /<h2>Walk in at Blouds on Queen Street West<\/h2>/);

  assert.match(sitemap, /\$\{BASE\}\/brampton-walk-in-checklist`/);
  assert.match(footer, /href="\/brampton-walk-in-checklist"/);
  assert.match(read("app/page.tsx"), /href="\/brampton-walk-in-checklist"/);
  assert.match(read("app/faq/page.tsx"), /href="\/brampton-walk-in-checklist"/);
  assert.match(read("app/contact/page.tsx"), /href="\/brampton-walk-in-checklist"/);
});

test("B15 Value Buds intercept stays a checklist and does not fake reviews", () => {
  const page = read(PAGE);

  assert.match(page, /Value Buds/);
  assert.match(page, /dispensary Brampton/);
  assert.match(page, /cannabis stores Brampton/);
  assert.match(page, /Is Blouds Dispensary the same store as Value Buds\?/);
  assert.match(page, /Value Buds is a separate licensed chain/);
  assert.match(page, /does not publish ratings or reviews/);
  assert.match(page, /does not invent ratings, quotes, or competitor/);
  assert.match(page, /does not invent star ratings/);
  assert.doesNotMatch(page, /\d(?:\.\d)?\s*\/\s*5|\b\d(?:\.\d)?\s*stars?\b|\bgoogle review says\b/i);
});

test("B15 stays Queen Street West and does not send GBP website off the homepage", () => {
  const page = read(PAGE);
  const schema = read("app/lib/gbp-location.ts");

  assert.doesNotMatch(page, /B Loud Kennedy|BLoud Cannabis|7990 Kennedy|Kennedy Loud|Hillcrest|425-0117/i);
  assert.match(page, /Queen Street West/);
  assert.match(page, /about: \{ "@id": `\$\{SITE_ORIGIN\}\/#store` \}/);
  assert.match(schema, /url: SITE_ORIGIN/);
  assert.doesNotMatch(schema, /url: .*\/brampton-walk-in-checklist/);
});

test("B15 FAQPage schema stays on the checklist article", () => {
  const page = read(PAGE);
  assert.match(page, /"@type": "FAQPage"/);
  assert.match(page, /"@type": "Question"/);
  assert.match(page, /"@type": "Answer"/);
  assert.match(page, /"@type": "BreadcrumbList"/);
});
