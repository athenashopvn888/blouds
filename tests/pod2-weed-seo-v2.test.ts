import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (file: string) => fs.readFileSync(path.join(root, file), "utf8");

const routes = [
  ["exotic", "exotic-weed", "Exotic"],
  ["premium", "premium-weed", "Premium"],
  ["aaa", "aaa-weed", "AAA+"],
  ["aa", "aa-weed", "AA"],
  ["budget", "budget-weed", "Budget"],
] as const;

test("BLS01 V2.1 tiers have tier-first Weed labels and compliant canonical slugs", () => {
  const products = read("app/lib/products.ts");
  const tierSeo = read("app/lib/tierSeoContent.ts");
  for (const [, slug, name] of routes) {
    assert.match(products, new RegExp(`name: \"${name.replace("+", "\\+")}\",\\s+slug: \"${slug}\"`));
    assert.ok(tierSeo.includes(`seoTitle: \`\${name} Weed & Cannabis Flower in Brampton | Blouds\``));
    assert.ok(tierSeo.includes(`h1: \`\${name} Weed & Cannabis Flower in Brampton\``));
  }
});

test("BLS01 V2 legacy routes redirect directly to their sole new owners", () => {
  const config = read("next.config.ts");
  for (const [oldSlug, newSlug] of routes) {
    assert.match(config, new RegExp(`source: \"/${oldSlug}\", destination: \"/${newSlug}\", permanent: true`));
  }
  assert.match(config, /source: "\/resources\/flower-guides", destination: "\/resources\/weed-flower-guides", permanent: true/);
});

test("BLS01 V2 internal links and resource owner use only new tier routes", () => {
  const sources = [
    "app/[tier]/page.tsx",
    "app/components/Navbar.tsx",
    "app/components/Footer.tsx",
    "app/components/GBPLandingPage.tsx",
    "app/components/WeedDiscoveryModule.tsx",
    "app/lib/weedDiscovery.ts",
    "app/resources/resourceData.ts",
  ].map(read).join("\n");
  for (const [, newSlug, name] of routes) {
    assert.ok(sources.includes(`/${newSlug}`));
    assert.ok(sources.includes(`${name} Weed`));
    assert.ok(!sources.includes(`Weed ${name}`));
  }
  assert.ok(sources.includes("/resources/weed-flower-guides"));
  for (const [oldSlug] of routes) {
    assert.doesNotMatch(sources, new RegExp(`href=[{]?\"/${oldSlug}\"`));
  }
  assert.doesNotMatch(sources, /\/resources\/flower-guides/);

  const resources = read("app/resources/resourceData.ts");
  assert.match(resources, /path: "\/resources\/weed-flower-guides"/);
  assert.match(resources, /seoTitle: "Weed & Flower Guides Brampton \| Blouds"/);
  assert.match(resources, /h1: "Weed & Flower Guides"/);
});

test("BLS01 held Delivery and compliant Nicotine Vape remain unchanged by V2", () => {
  const navbar = read("app/components/Navbar.tsx");
  assert.match(navbar, /href: "\/delivery", label: "DELIVERY MENU"/);
  assert.match(navbar, /href: "\/items\/vapes", label: "Nicotine Vape"/);
  assert.match(navbar, /href: "\/items\/vape-disposables", label: "THC Vape"/);
  const config = read("next.config.ts");
  assert.doesNotMatch(config, /weed-delivery/);
});
