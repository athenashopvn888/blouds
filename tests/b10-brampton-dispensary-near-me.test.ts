import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { gbpLocation, SITE_ORIGIN } from "../app/lib/gbp-location.ts";

const read = (path: string) => readFileSync(path, "utf8");

test("B10 ships a /dispensary-brampton Queen Street near-me open guide with locked BLS01 NAP", () => {
  const page = read("app/dispensary-brampton/page.tsx");
  const sitemap = read("app/sitemap.ts");
  const footer = read("app/components/Footer.tsx");

  assert.match(page, /title: \{ absolute: title \}/);
  assert.match(page, /Brampton Dispensary Near Me — Downtown Queen Street Open Guide/);
  assert.match(
    page,
    /<h1 className=\{styles\.pageTitle\}>Brampton Dispensary Near Me — Downtown Queen Street Open Guide<\/h1>/,
  );
  assert.match(page, /canonical: PAGE_URL/);
  assert.match(page, /const PAGE_PATH = "\/dispensary-brampton"/);
  assert.match(page, /siteUrl\(PAGE_PATH\)/);

  assert.match(page, /Why downtown Queen St/);
  assert.match(page, /Near-me intent → exact pin/);
  assert.match(page, /<h2>Hours<\/h2>/);
  assert.match(page, /Compare walk-in checklist/);
  assert.match(page, /<h2>FAQ<\/h2>/);

  assert.match(page, /117 Queen St W, Brampton, ON L6Y 1M3/);
  assert.match(page, /\+1 \(437\) 371-5377/);
  assert.match(page, /gbpLocation\.hoursDisplay/);
  assert.match(page, /open 24 hours a day/i);
  assert.equal(gbpLocation.address, "117 Queen St W, Brampton, ON L6Y 1M3");
  assert.equal(gbpLocation.phone, "+1 (437) 371-5377");
  assert.equal(SITE_ORIGIN, "https://www.bloudsdispensary.ca");

  for (const href of [
    'href="/"',
    'href="/weed-dispensary-brampton"',
    'href="/visit"',
    'href="/contact"',
    'href="/faq"',
  ]) {
    assert.ok(page.includes(href), `Missing internal link: ${href}`);
  }

  assert.match(sitemap, /\$\{BASE\}\/dispensary-brampton`/);
  assert.match(footer, /href="\/dispensary-brampton"/);
  assert.match(read("app/page.tsx"), /href="\/dispensary-brampton"/);
  assert.match(read("app/faq/page.tsx"), /href="\/dispensary-brampton"/);
  assert.match(read("app/contact/page.tsx"), /href="\/dispensary-brampton"/);
  assert.match(read("app/visit/page.tsx"), /href="\/dispensary-brampton"/);
  assert.match(read("app/components/GBPLandingPage.tsx"), /href="\/dispensary-brampton"/);
});

test("B10 comparison checklist does not fake reviews", () => {
  const page = read("app/dispensary-brampton/page.tsx");

  assert.match(page, /does not invent ratings, quotes, or competitor hours/);
  assert.match(page, /does not publish ratings or reviews/);
  assert.doesNotMatch(page, /\d(?:\.\d)?\s*\/\s*5|\b\d(?:\.\d)?\s*stars?\b|\bgoogle review says\b/i);
});

test("B10 does not revive B Loud Kennedy or send GBP website off the homepage", () => {
  const page = read("app/dispensary-brampton/page.tsx");
  const schema = read("app/lib/gbp-location.ts");

  assert.doesNotMatch(page, /B Loud Kennedy|BLoud Cannabis|7990 Kennedy|Kennedy Loud|Hillcrest|425-0117/i);
  assert.match(page, /about: \{ "@id": `\$\{SITE_ORIGIN\}\/#store` \}/);
  assert.match(page, /The public website for this store is the homepage/);
  assert.match(schema, /url: SITE_ORIGIN/);
  assert.doesNotMatch(schema, /url: .*\/dispensary-brampton/);
  assert.doesNotMatch(schema, /url: .*\/visit/);
});

test("B10 FAQPage schema stays on the near-me open guide", () => {
  const page = read("app/dispensary-brampton/page.tsx");
  assert.match(page, /"@type": "FAQPage"/);
  assert.match(page, /"@type": "Question"/);
  assert.match(page, /"@type": "Answer"/);
  assert.match(page, /"@type": "BreadcrumbList"/);
});
