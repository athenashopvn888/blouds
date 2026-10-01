import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { formatAsLowAsAfterPromos, formatPayEquals, formatPerGram, formatSitewideBogoStrip } from "../app/lib/flowerDeals.ts";

const read = (relativePath: string) => fs.readFileSync(path.join(process.cwd(), relativePath), "utf8");

test("Dual-Frame totals and floors match the board", () => {
  for (const [price, grams, expected] of [[20,3,"Pay $20 = 3g"],[30,6,"Pay $30 = 6g"],[30,3,"Pay $30 = 3g"],[45,6,"Pay $45 = 6g"],[40,3,"Pay $40 = 3g"],[60,6,"Pay $60 = 6g"]] as const) assert.equal(formatPayEquals(price, grams), expected);
  assert.equal(formatAsLowAsAfterPromos(30, 6), "As low as $5/g after promos");
  assert.equal(formatAsLowAsAfterPromos(45, 6), "As low as $7.50/g after promos");
  assert.equal(formatAsLowAsAfterPromos(60, 6), "As low as $10/g after promos");
  assert.equal(formatPerGram(20, 3), "~$6.67/g");
});

test("BOGO belongs to the top three tiers and AA has none", () => {
  const products = read("app/lib/products.ts");
  for (const fragment of ['price: 40, grams: 3, equals: "2g=3g"','price: 60, grams: 6, equals: "3g=6g"','price: 30, grams: 3, equals: "2g=3g"','price: 45, grams: 6, equals: "3g=6g"','price: 20, grams: 3, equals: "2g=3g"','price: 30, grams: 6, equals: "3g=6g"']) assert.ok(products.includes(fragment), fragment);
  const aaBlock = products.match(/AA: \{[\s\S]*?\n  \},/u)?.[0] ?? "";
  assert.match(aaBlock, /deal3g: null/); assert.match(aaBlock, /deal6g: null/);
});

test("exact strip and BLS01 homepage stack are installed", () => {
  assert.equal(formatSitewideBogoStrip(), "TOP WEED TIER SPECIAL · Buy 2g Get 1g FREE  Buy 3g Get 3g FREE *");
  const banner = read("app/components/FleetAnnouncementBanner.tsx");
  const sequence = ["data-thanksgiving-hours-notice","<FlowerBogoStrip hero","data-exotic-tier-banner","data-cigarette-deal","data-bb-light-deal","data-cig-mix-banner","data-bb-premium-banner"];
  let cursor=-1; for(const item of sequence){const next=banner.indexOf(item); assert.ok(next>cursor,item); cursor=next;}
  assert.match(banner,/top-weed-tier-bls01\.webp/); assert.match(banner,/2pack5cig\.webp/); assert.match(banner,/Blouds Dispensary/);
  for(const file of ["public/banners/top-weed-tier-bls01.webp","public/banners/2pack5cig.webp","public/banners/bb-premium-grade-full-lights.webp"]) assert.ok(fs.statSync(file).size>1000,file);
});

test("mobile one-bar CSS and protected surfaces remain scoped out", () => {
  const css=read("app/globals.css");
  assert.match(css,/\[data-flower-bogo-strip\][\s\S]*background:#c5161d/);
  assert.match(css,/@media \(max-width:720px\)[\s\S]*\[data-bogo-strip-copy\][\s\S]*flex-direction:column/);
  assert.match(read("app/components/Navbar.tsx"),/pathname !== "\/" \? <FlowerBogoStrip \/>/);
  assert.doesNotMatch(read("app/tv/page.tsx"),/FlowerBogoStrip|top-weed-tier-bls01/);
  assert.doesNotMatch(read("app/delivery/page.tsx"),/FlowerBogoStrip|top-weed-tier-bls01/);
});
