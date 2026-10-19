import assert from "node:assert/strict";
import test from "node:test";
import { SITE, getResourcePageBySlug, getStaticResourceParams } from "../app/resources/resourceData.ts";

const H1 =
  "Eight years of legal cannabis in Canada: what changed on Oct 17, 2018, what was added in 2019, and what the law still requires";

test("BLS01 legalization timeline is an additive indexable resource page", () => {
  const page = getResourcePageBySlug(["cannabis-legalization-canada-timeline"]);
  assert.ok(page);
  assert.equal(page.path, "/resources/cannabis-legalization-canada-timeline");
  assert.equal(page.kind, "article");
  assert.equal(page.h1, H1);
  assert.equal(page.title, H1);
  assert.equal(page.seoTitle, "Eight years of legal cannabis in Canada: what changed");
  assert.ok(page.seoTitle.length <= 60);
  assert.equal(page.parent, undefined);
  assert.equal(page.commercialLinks.length, 0);
  assert.equal(page.related.length, 0);
  assert.equal(
    `${SITE.baseUrl}${page.path}`,
    "https://www.bloudsdispensary.ca/resources/cannabis-legalization-canada-timeline",
  );

  const body = page.bodyMarkdown ?? "";
  assert.match(body, /^# Eight years of legal cannabis in Canada:/);
  assert.match(body, /Last checked: September 30, 2026/);
  assert.equal(
    page.metaDescription,
    body
      .split("\n")
      .map((line) => line.trim())
      .find((line) => line.startsWith("A common question")),
  );
  assert.match(body, /\[Cannabis 101 hub\]\(\/resources\/cannabis-101\)/);
  assert.match(body, /\[Blouds visit page\]\(\/visit\)/);
  assert.doesNotMatch(body, /\$|\bdeal\b|\bpromo\b|\bcoupon\b|\bdiscount\b|open 24|hours/i);
  assert.ok(
    getStaticResourceParams().some(({ slug }) => slug.join("/") === "cannabis-legalization-canada-timeline"),
  );
});
