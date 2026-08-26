import assert from "node:assert/strict";
import test from "node:test";
import { NICOTINE_VAPE_LANDING_CONTENT } from "../app/lib/seoPages.ts";

const EXPECTED_LIVE_SLUGS = [
  "geek-promax-5-30k-puffs",
  "geek-universe-25k-puffs",
  "level-x-g2-pod",
  "nexa-pix-30k-puffs-many-flavors",
  "ovns-10000-5-10k-puffs",
  "ovns-pioneer-5-22k-puffs",
];

test("nicotine-vape landing remains draft until GPT copy approval", () => {
  assert.equal(NICOTINE_VAPE_LANDING_CONTENT.publicationStatus, "draft");
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
