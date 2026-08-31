import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (relativePath) => fs.readFileSync(new URL(`../${relativePath}`, import.meta.url), "utf8");

test("protected tier pages emit a self-referencing www canonical", () => {
  const source = read("app/[tier]/page.tsx");
  assert.match(source, /canonical: `https:\/\/www\.bloudsdispensary\.ca\/\$\{tierSlug\}`/);
  assert.match(source, /url: `https:\/\/www\.bloudsdispensary\.ca\/\$\{tierSlug\}`/);
});

test("protected flower pages emit a self-referencing www canonical", () => {
  const source = read("app/flower/[slug]/page.tsx");
  assert.match(source, /canonical: `https:\/\/www\.bloudsdispensary\.ca\/flower\/\$\{slug\}`/);
  assert.match(source, /url: `https:\/\/www\.bloudsdispensary\.ca\/flower\/\$\{slug\}`/);
});

test("category pages keep a self-canonical and an H1 when a banner exists", () => {
  const source = read("app/items/[category]/page.tsx");
  assert.match(source, /canonical: `https:\/\/www\.bloudsdispensary\.ca\/items\/\$\{catSlug\}`/);
  assert.match(source, /config\.banner[\s\S]*?<img[\s\S]*?<h1 className=\{styles\.heroTitle\}/);
});
