import assert from "node:assert/strict";
import test from "node:test";
import { AUTHORS, SITE, getResourcePageBySlug, getStaticResourceParams } from "../app/resources/resourceData.ts";

const H1 = "Why Is Some Weed Purple? The Real Story Behind Purple Weed";
const PATH = "/resources/why-is-some-weed-purple";

test("BLS01 purple weed article is an additive indexable resource page", () => {
  const page = getResourcePageBySlug(["why-is-some-weed-purple"]);
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
  assert.equal(page.datePublished, "2026-10-29");
  assert.equal(page.dateModified, "2026-10-29");
  assert.equal(AUTHORS[page.author].name, "Blouds Dispensary");
  assert.equal(SITE.name, "Blouds Dispensary");
  assert.equal(`${SITE.baseUrl}${page.path}`, `https://www.bloudsdispensary.ca${PATH}`);

  const body = page.bodyMarkdown ?? "";
  assert.match(body, /^# Why Is Some Weed Purple\? The Real Story Behind Purple Weed\n/);
  assert.match(body, /\n\nLast checked: October 27, 2026\n/);
  assert.match(body, /\n\| Deep green \| Chlorophyll still dominant \|\n/);
  assert.match(body, /\| What you see \| What's usually going on \|/);
  assert.deepEqual(
    [...body.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1]),
    ["/visit"],
  );
  assert.equal(page.metaDescription.length <= 155, true);
  assert.equal((page.metaDescription.match(/\./g) ?? []).length, 1);
  assert.match(body, page.metaDescription);
  const blob = [page.h1, page.seoTitle, page.metaDescription, page.primaryKeyword, ...page.supportingKeywords, body].join("\n");
  assert.equal(blob.includes("3.5"), false);
  assert.doesNotMatch(blob, /\$|\bdeal\b|\bpromo\b|\bcoupon\b|Farmers Link|tel:/i);
  assert.ok(getStaticResourceParams().some(({ slug }) => slug.join("/") === "why-is-some-weed-purple"));
});
