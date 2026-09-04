import assert from "node:assert/strict";
import test from "node:test";
import { getResourcePageBySlug, getStaticResourceParams } from "../app/resources/resourceData.ts";

test("BLS01 dispensary authority page is indexable resource content with the approved local handoff", () => {
  const page = getResourcePageBySlug(["cannabis-dispensary-vs-weed-dispensary"]);
  assert.ok(page);
  assert.equal(page.path, "/resources/cannabis-dispensary-vs-weed-dispensary");
  assert.equal(page.seoTitle, "Cannabis Dispensary vs Weed Dispensary | Blouds Brampton");
  assert.equal(page.h1, "Cannabis Dispensary vs. Weed Dispensary: What's the Difference?");
  assert.match(page.metaDescription, /dispensary near me/i);
  assert.ok(page.commercialLinks.some((link) =>
    link.label === "Cannabis Dispensary Near Me in Brampton" &&
    link.href === "/info/dispensary-near-me-brampton"
  ));
  assert.ok(getStaticResourceParams().some(({ slug }) => slug.join("/") === "cannabis-dispensary-vs-weed-dispensary"));
});
