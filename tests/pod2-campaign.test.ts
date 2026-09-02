import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { TIER_SEO } from "../app/lib/tierSeoContent.ts";

const read = (path: string) => readFileSync(new URL(path, import.meta.url), "utf8");

test("five Blouds tier routes carry distinct Weed and Flower signals", () => {
  const expected = ["Exotic", "Premium", "AAA+", "AA", "Budget"];
  assert.deepEqual(Object.values(TIER_SEO).map((tier) => tier.h1.split(" Weed")[0]), expected);

  for (const tier of Object.values(TIER_SEO)) {
    assert.match(tier.seoTitle, / Weed & Cannabis Flower in Brampton \| Blouds$/);
    assert.match(tier.h1, / Weed & Cannabis Flower in Brampton$/);
    assert.match(tier.catalogHeading, /^Explore .* Weed & Flower$/);
    assert.match(tier.imageAlt, / Weed and Cannabis Flower at Blouds Dispensary$/);
    assert.equal(tier.faqs.length, 1);
  }
});

test("tier template preserves canonical routes and links all tier owners to the broad owner", () => {
  const source = read("../app/[tier]/page.tsx");
  assert.match(source, /title: seo \? \{ absolute: seo\.seoTitle \}/);
  assert.match(source, /canonical: `https:\/\/www\.bloudsdispensary\.ca\/\$\{tierSlug\}`/);
  for (const route of ["exotic-weed", "premium-weed", "aaa-weed", "aa-weed", "budget-weed"]) {
    assert.ok(source.includes(`href="/${route}"`));
  }
  assert.ok(source.includes('href="/weed-dispensary-brampton"'));
  assert.ok(source.includes("Compare Blouds Weed &amp; Flower Tiers"));
});

test("nicotine category uses full public terminology and stays separate from THC Vape", () => {
  const products = read("../app/lib/products.ts");
  assert.match(products, /"VAPE PENS": \{[\s\S]*name: "Nicotine Vape"/);
  assert.match(products, /seoTitle: "Nicotine Vape in Brampton"/);
  assert.match(products, /separate from THC Vape/);
  assert.match(products, /"VAPE DISPOSABLE": \{[\s\S]*name: "THC Vape"/);

  for (const path of [
    "../app/components/Navbar.tsx",
    "../app/components/Footer.tsx",
    "../app/lib/products.ts",
    "../app/page.tsx",
    "../app/resources/resourceData.ts",
  ]) {
    const source = read(path);
    assert.doesNotMatch(source, /\bNic Vape\b|\bnic vapes\b/);
  }
});

test("delivery behavior and store-truth conflict remain unchanged and held", () => {
  const delivery = read("../app/delivery/DeliveryContent.tsx");
  const faq = read("../app/faq/page.tsx");
  assert.match(delivery, /script\.google\.com/);
  assert.match(faq, /Delivery is coming soon!/);
});

test("nicotine banner is a real WebP asset", () => {
  const banner = readFileSync(new URL("../public/banners/Blouds_Nic_Vape.webp", import.meta.url));
  assert.equal(banner.subarray(0, 4).toString("ascii"), "RIFF");
  assert.equal(banner.subarray(8, 12).toString("ascii"), "WEBP");
});

