import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { gbpLocation, SITE_ORIGIN } from "../app/lib/gbp-location.ts";
import { TIER_SEO } from "../app/lib/tierSeoContent.ts";
import { SCC_TIER_ROUTES, SCC_WAVE1_HUBS } from "../app/lib/sccHubLinks.ts";

const read = (path: string) => readFileSync(path, "utf8");

const WAVE1_PAGES = [
  ["/", "app/page.tsx"],
  ["/visit", "app/visit/page.tsx"],
  ["/brampton-walk-in-checklist", "app/brampton-walk-in-checklist/page.tsx"],
  ["/dispensary-brampton", "app/dispensary-brampton/page.tsx"],
  ["/weed-dispensary-brampton", "app/components/GBPLandingPage.tsx"],
  ["/24-hour-queen-street-brampton-dispensary", "app/24-hour-queen-street-brampton-dispensary/page.tsx"],
] as const;

const PUBLIC_SOURCES = [
  "app/page.tsx",
  "app/visit/page.tsx",
  "app/brampton-walk-in-checklist/page.tsx",
  "app/dispensary-brampton/page.tsx",
  "app/components/GBPLandingPage.tsx",
  "app/weed-dispensary-brampton/page.tsx",
  "app/24-hour-queen-street-brampton-dispensary/page.tsx",
  "app/cannabis-delivery-queen-street-brampton/page.tsx",
  "app/lib/tierSeoContent.ts",
  "app/[tier]/page.tsx",
  "app/components/Footer.tsx",
  "app/lib/gbp-location.ts",
].map(read).join("\n");

test("Wave 1 keeps the live Queen Street West weed owner and splits title/H1/meta from the homepage", () => {
  const ownerPage = read("app/weed-dispensary-brampton/page.tsx");
  const landing = read("app/components/GBPLandingPage.tsx");
  const homepage = read("app/page.tsx");
  const location = read("app/lib/gbp-location.ts");
  const config = read("next.config.ts");

  assert.match(ownerPage, /canonical: siteUrl\(`\/\$\{gbpLocation\.slug\}`\)/);
  assert.match(ownerPage, /title: \{ absolute: gbpLocation\.weedOwnerTitle \}/);
  assert.match(ownerPage, /description: gbpLocation\.weedOwnerDescription/);
  assert.equal(gbpLocation.slug, "weed-dispensary-brampton");
  assert.equal(gbpLocation.weedOwnerTitle, "Queen Street West Weed Dispensary in Downtown Brampton | Blouds");
  assert.equal(gbpLocation.weedOwnerH1, "Queen Street West Weed Dispensary in Downtown Brampton");
  assert.match(gbpLocation.weedOwnerDescription, /Queen Street West/);
  assert.match(gbpLocation.weedOwnerDescription, /117 Queen St W/);
  assert.match(landing, /<h1>\{gbpLocation\.weedOwnerH1\}<\/h1>/);
  assert.match(landing, /Downtown Queen Street West/);

  assert.equal(gbpLocation.seoTitle, "24-Hour Weed Dispensary in Brampton | Blouds Dispensary");
  assert.match(homepage, /title: \{ absolute: gbpLocation\.seoTitle \}/);
  assert.match(homepage, /<h1>24-Hour Weed Dispensary in Brampton<\/h1>/);
  assert.notEqual(gbpLocation.seoTitle, gbpLocation.weedOwnerTitle);
  assert.doesNotMatch(config, /source: "\/weed-dispensary-brampton"/);
});

test("Wave 1 ships a Queen Street West 24-hour LP without replacing MUST KEEP open-now pages", () => {
  const page = read("app/24-hour-queen-street-brampton-dispensary/page.tsx");
  const sitemap = read("app/sitemap.ts");
  const footer = read("app/components/Footer.tsx");

  assert.match(page, /const PAGE_PATH = "\/24-hour-queen-street-brampton-dispensary"/);
  assert.match(page, /24-Hour Queen Street West Brampton Dispensary \| Blouds/);
  assert.match(page, /<h1 className=\{styles\.pageTitle\}>24-Hour Dispensary on Queen Street West in Downtown Brampton<\/h1>/);
  assert.match(page, /Overnight walk-in on Queen Street West/);
  assert.match(page, /"@type": "FAQPage"/);
  assert.match(page, /117 Queen St W, Brampton, ON L6Y 1M3/);
  assert.match(page, /\+1 \(437\) 371-5377/);
  assert.match(sitemap, /\$\{BASE\}\/24-hour-queen-street-brampton-dispensary`/);
  assert.match(footer, /href="\/24-hour-queen-street-brampton-dispensary"/);
  assert.match(read("app/dispensary-brampton/page.tsx"), /href="\/24-hour-queen-street-brampton-dispensary"/);
  assert.match(read("app/visit/page.tsx"), /href="\/24-hour-queen-street-brampton-dispensary"/);
});

test("Wave 1 dense-links homepage, visit, checklist, near-me, weed hub, 24h, and five tiers", () => {
  const hubLib = read("app/lib/sccHubLinks.ts");
  const hubComponent = read("app/components/SccHubLinks.tsx");
  const footer = read("app/components/Footer.tsx");

  assert.match(hubComponent, /href=\{item\.href\}/);
  for (const hub of SCC_WAVE1_HUBS) {
    assert.ok(hubLib.includes(`href: "${hub.href}"`), `Hub graph missing ${hub.href}`);
    if (hub.href !== "/") {
      assert.ok(footer.includes(`href="${hub.href}"`), `Footer missing ${hub.href}`);
    }
  }
  for (const tier of SCC_TIER_ROUTES) {
    assert.ok(hubLib.includes(`href: "${tier.href}"`), `Hub graph missing ${tier.href}`);
    assert.ok(footer.includes(`href="${tier.href}"`), `Footer missing ${tier.href}`);
  }

  for (const [path, file] of WAVE1_PAGES) {
    const source = read(file);
    assert.match(source, /SccHubLinks/, `${path} must mount the Queen Street hub links`);
    for (const hub of SCC_WAVE1_HUBS) {
      if (hub.href === path) continue;
      const hasExact = source.includes(`href="${hub.href}"`) || source.includes(`href: "${hub.href}"`);
      const usesSharedNav = source.includes("SccHubLinks");
      const hasWeedSlug = hub.href === "/weed-dispensary-brampton" && source.includes("gbpLocation.slug");
      assert.ok(hasExact || usesSharedNav || hasWeedSlug, `Missing ${hub.href} on ${path}`);
    }
  }

  const tierPage = read("app/[tier]/page.tsx");
  assert.match(tierPage, /SccHubLinks/);
  assert.match(tierPage, /href="\/weed-dispensary-brampton"/);
  assert.match(tierPage, /href="\/visit"/);
  assert.match(tierPage, /href="\/24-hour-queen-street-brampton-dispensary"/);
  assert.match(tierPage, /href="\/exotic-weed"/);
});

test("Wave 1 five indexed tier routes keep unique Queen Street West FAQ and short-route 301s", () => {
  const config = read("next.config.ts");
  const questions = new Set<string>();

  for (const [key, seo] of Object.entries(TIER_SEO)) {
    assert.match(seo.seoTitle, /Queen Street West/);
    assert.match(seo.h1, /Queen Street West/);
    assert.match(seo.seoIntro, /Queen Street West|downtown Brampton/);
    assert.ok(seo.faqs.length >= 3, `${key} needs unique FAQ depth`);
    for (const faq of seo.faqs) {
      assert.equal(questions.has(faq.q), false, `Duplicate FAQ: ${faq.q}`);
      questions.add(faq.q);
      assert.match(`${faq.q} ${faq.a}`, /Queen Street West|117 Queen St W|downtown Brampton|Queen Street/);
    }
  }

  for (const route of SCC_TIER_ROUTES) {
    assert.match(config, new RegExp(`source: "${route.short}", destination: "${route.href}", permanent: true`));
  }
});

test("Wave 1 stays on Queen Street West NAP and never claims Hillcrest, sister stores, or Ottawa copy", () => {
  assert.equal(gbpLocation.address, "117 Queen St W, Brampton, ON L6Y 1M3");
  assert.equal(gbpLocation.phone, "+1 (437) 371-5377");
  assert.equal(gbpLocation.hoursDisplay, "Open 24 Hours");
  assert.equal(SITE_ORIGIN, "https://www.bloudsdispensary.ca");
  assert.match(read("app/lib/gbp-location.ts"), /url: SITE_ORIGIN/);

  assert.doesNotMatch(PUBLIC_SOURCES, /Hillcrest|Unit 104|Kennedy Loud|B Loud Kennedy|7990 Kennedy|sister store|our other location|ByWard|Gatineau|Dalhousie|Ottawa/i);
  assert.doesNotMatch(read("app/24-hour-queen-street-brampton-dispensary/page.tsx"), /native-cigarettes|nicotine pouches|grabba/i);
});
