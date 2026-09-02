import assert from "node:assert/strict";
import test from "node:test";
import { getResourcePageBySlug } from "../app/resources/resourceData.ts";

test("BLS01 Flower Guides support existing Weed owners without creating a new owner", () => {
  const page = getResourcePageBySlug("weed-flower-guides");
  assert.ok(page);
  assert.equal(page.path, "/resources/weed-flower-guides");
  assert.equal(page.seoTitle, "Weed & Flower Guides Brampton | Blouds");
  assert.equal(page.h1, "Weed & Flower Guides");

  const links = page.sections.flatMap((section) => section.links ?? []);
  assert.deepEqual(
    links.map(({ label, href }) => ({ label, href })),
    [
      { label: "Exotic Weed", href: "/exotic-weed" },
      { label: "Premium Weed", href: "/premium-weed" },
      { label: "AAA+ Weed", href: "/aaa-weed" },
      { label: "AA Weed", href: "/aa-weed" },
      { label: "Budget Weed", href: "/budget-weed" },
      { label: "Blouds Weed Dispensary in Brampton", href: "/weed-dispensary-brampton" },
      { label: "Blouds Dispensary", href: "/" },
    ],
  );
});

test("BLS01 intelligence delta preserves protected and held surfaces", () => {
  const page = getResourcePageBySlug("weed-flower-guides");
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

