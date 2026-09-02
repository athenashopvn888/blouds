import assert from "node:assert/strict";
import test from "node:test";
import { getResourcePageBySlug } from "../app/resources/resourceData.ts";

test("BLS01 Flower Guides support existing Weed owners without creating a new owner", () => {
  const page = getResourcePageBySlug("flower-guides");
  assert.ok(page);
  assert.equal(page.path, "/resources/flower-guides");
  assert.equal(page.seoTitle, "Weed & Flower Guides | Blouds Dispensary Brampton");
  assert.equal(page.h1, "Weed & Flower Guides");

  const links = page.sections.flatMap((section) => section.links ?? []);
  assert.deepEqual(
    links.map(({ label, href }) => ({ label, href })),
    [
      { label: "Exotic Weed & Flower", href: "/exotic" },
      { label: "Premium Weed & Flower", href: "/premium" },
      { label: "AAA+ Weed & Flower", href: "/aaa" },
      { label: "AA Weed & Flower", href: "/aa" },
      { label: "Budget Weed & Flower", href: "/budget" },
      { label: "Blouds Weed Dispensary in Brampton", href: "/weed-dispensary-brampton" },
      { label: "Blouds Dispensary", href: "/" },
    ],
  );
});

test("BLS01 intelligence delta preserves protected and held surfaces", () => {
  const page = getResourcePageBySlug("flower-guides");
  assert.ok(page);
  const changedCopy = JSON.stringify(page).toLowerCase();

  for (const prohibited of [
    "open 24",
    "delivery",
    "available in store",
    "in stock",
    "best",
    "cheapest",
    "parking",
  ]) {
    assert.ok(!changedCopy.includes(prohibited), `Unexpected protected or unsupported phrase: ${prohibited}`);
  }
});
