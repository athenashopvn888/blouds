import assert from "node:assert/strict";
import test from "node:test";
import { AUTHORS, SITE, getResourcePageBySlug, getStaticResourceParams } from "../app/resources/resourceData.ts";

const H1 = "What Is a Doob Tube? The Little Tube That Keeps Your Pre-Roll in One Piece";
const PATH = "/resources/what-is-a-doob-tube";

test("BLS01 doob tube article is an additive indexable resource page", () => {
  const page = getResourcePageBySlug(["what-is-a-doob-tube"]);
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
  assert.equal(page.datePublished, "2026-11-24");
  assert.equal(page.dateModified, "2026-11-24");
  assert.equal(AUTHORS[page.author].name, "Blouds Dispensary");
  assert.equal(SITE.name, "Blouds Dispensary");
  assert.equal(`${SITE.baseUrl}${page.path}`, `https://www.bloudsdispensary.ca${PATH}`);

  const body = page.bodyMarkdown ?? "";
  assert.match(body, /^# What Is a Doob Tube\? The Little Tube That Keeps Your Pre-Roll in One Piece\n/);
  assert.match(body, /\n\nLast checked: November 17, 2026\n/);
  assert.match(body, /\n\| \| Original pre-roll package \| A doob tube \|\n/);
  assert.deepEqual(
    [...body.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1]),
    ["/resources/how-often-to-change-bong-water", "/resources/why-is-some-weed-purple"],
  );
  assert.equal(page.metaDescription.length <= 155, true);
  assert.equal((page.metaDescription.match(/\./g) ?? []).length, 1);
  assert.match(body, /A pre-roll lives a rough life\./);
  assert.match(body, /bent, cracked or spilling/);
  const blob = [page.h1, page.seoTitle, page.metaDescription, page.primaryKeyword, ...page.supportingKeywords, body].join("\n");
  assert.equal(blob.includes("3.5"), false);
  assert.doesNotMatch(blob, /\$|\bdeal\b|\bpromo\b|\bcoupon\b|Farmers Link|tel:/i);
  assert.doesNotMatch(blob, /\bhours\b|\bdelivery window\b|\bphone\b/i);
  assert.ok(getStaticResourceParams().some(({ slug }) => slug.join("/") === "what-is-a-doob-tube"));
});
