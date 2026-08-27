import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { NICOTINE_VAPE_LANDING_CONTENT, SEO_PAGES } from "../app/lib/seoPages.ts";
import { RESOURCE_PAGES } from "../app/resources/resourceData.ts";

const EXPECTED_LIVE_SLUGS = [
  "geek-promax-5-30k-puffs",
  "geek-universe-25k-puffs",
  "level-x-g2-pod",
  "nexa-pix-30k-puffs-many-flavors",
  "ovns-10000-5-10k-puffs",
  "ovns-pioneer-5-22k-puffs",
];

test("nicotine-vape landing is approved for publication", () => {
  assert.equal(NICOTINE_VAPE_LANDING_CONTENT.publicationStatus, "approved");
});

test("nicotine-vape hero uses the six live-verified products", () => {
  const preview = NICOTINE_VAPE_LANDING_CONTENT.heroPreview;
  assert.ok(preview);
  assert.equal(preview.products.length, 6);
  assert.deepEqual(
    preview.products.map((product) => product.sourceSlug),
    EXPECTED_LIVE_SLUGS,
  );
  assert.ok(preview.products.every((product) => product.image.startsWith("https://")));
});

test("nicotine-vape hero keeps the menu destination and approved comparison anchor", () => {
  const preview = NICOTINE_VAPE_LANDING_CONTENT.heroPreview;
  assert.ok(preview);
  assert.equal(preview.menuHref, "/items/vapes");
  assert.equal(preview.secondaryHref, "#featured-vapes");
  assert.equal(preview.theme, "nicotine");
});

test("nicotine-vape payload includes the approved adult warning and category boundary", () => {
  assert.equal(NICOTINE_VAPE_LANDING_CONTENT.warning, "Adults 19+. Nicotine is addictive.");
  assert.match(NICOTINE_VAPE_LANDING_CONTENT.metaDescription, /Nicotine is addictive\./);
  assert.match(NICOTINE_VAPE_LANDING_CONTENT.sections[2].body, /\/items\/vape-disposables/);
});

test("nicotine-vape discovery uses the served www canonical host", () => {
  const infoPageSource = readFileSync(new URL("../app/info/[seoPage]/page.tsx", import.meta.url), "utf8");
  const sitemapSource = readFileSync(new URL("../app/sitemap.ts", import.meta.url), "utf8");
  const footerSource = readFileSync(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");

  assert.match(infoPageSource, /slug === "nicotine-vapes-brampton"[\s\S]*"https:\/\/www\.bloudsdispensary\.ca"/);
  assert.match(sitemapSource, /const BASE = "https:\/\/www\.bloudsdispensary\.ca"/);
  assert.ok(footerSource.includes('href="/info/nicotine-vapes-brampton"'));
});

test("footer SEO and guide links resolve to declared Brampton routes", () => {
  const footerSource = readFileSync(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");
  const seoSlugs = new Set(SEO_PAGES.map((page) => page.slug));
  const resourcePaths = new Set(RESOURCE_PAGES.map((page) => page.path));

  for (const slug of [
    "brampton-weed-dispensary",
    "cheap-weed-brampton",
    "native-cigarettes-brampton",
    "nicotine-vapes-brampton",
    "weed-store-near-mississauga",
  ]) {
    assert.ok(seoSlugs.has(slug));
    assert.match(footerSource, new RegExp(`/info/${slug}`));
  }

  for (const path of [
    "/resources/local-guides/queen-street-brampton-visit-guide",
    "/resources/flower-guides",
  ]) {
    assert.ok(resourcePaths.has(path));
    assert.ok(footerSource.includes(`href="${path}"`));
  }

  assert.doesNotMatch(footerSource, /cheap-weed-ottawa|ottawa-weed-dispensary|queen-street-visit-guide"|blouds-flower-tier-guide/);
});
