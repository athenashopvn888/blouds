import assert from "node:assert/strict";
import test from "node:test";
import { AUTHORS, SITE, getResourcePageBySlug, getStaticResourceParams } from "../app/resources/resourceData.ts";

const H1 = "How Often to Change Bong Water: The Short, Honest Checklist";
const PATH = "/resources/how-often-to-change-bong-water";

test("BLS01 bong water article is an additive indexable resource page", () => {
  const page = getResourcePageBySlug(["how-often-to-change-bong-water"]);
  assert.ok(page);
  assert.equal(page.path, PATH);
  assert.equal(page.kind, "article");
  assert.equal(page.h1, H1);
  assert.equal(page.title, H1);
  assert.equal(page.seoTitle, H1);
  assert.equal(page.parent, undefined);
  assert.equal(page.commercialLinks.length, 0);
  assert.equal(page.related.length, 0);
  assert.equal(page.faqs, undefined);
  assert.equal(page.datePublished, "2026-11-05");
  assert.equal(page.dateModified, "2026-11-05");
  assert.equal(AUTHORS[page.author].name, "Blouds Dispensary");
  assert.equal(SITE.name, "Blouds Dispensary");
  assert.equal(`${SITE.baseUrl}${page.path}`, `https://www.bloudsdispensary.ca${PATH}`);

  const body = page.bodyMarkdown ?? "";
  assert.match(body, /^# How Often to Change Bong Water: The Short, Honest Checklist\n/);
  assert.match(body, /\n\nLast checked: October 30, 2026\n/);
  assert.deepEqual(
    [...body.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1]),
    ["/resources/why-is-some-weed-purple", "/resources/cannabis-legalization-canada-timeline"],
  );
  assert.equal(page.metaDescription.length <= 155, true);
  assert.equal((page.metaDescription.match(/\./g) ?? []).length, 1);
  assert.equal(body.includes(page.metaDescription), true);
  const blob = [page.h1, page.seoTitle, page.metaDescription, page.primaryKeyword, ...page.supportingKeywords, body].join("\n");
  assert.equal(blob.includes("3.5"), false);
  assert.doesNotMatch(blob, /\$|\bdeal\b|\bpromo\b|\bcoupon\b|Farmers Link|tel:/i);
  assert.ok(getStaticResourceParams().some(({ slug }) => slug.join("/") === "how-often-to-change-bong-water"));
});
