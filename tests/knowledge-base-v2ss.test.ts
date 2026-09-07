import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const data = readFileSync(new URL("../app/resources/adcV2ResourceData.ts", import.meta.url), "utf8");
const resourceData = readFileSync(new URL("../app/resources/resourceData.ts", import.meta.url), "utf8");
const resourceView = readFileSync(new URL("../app/resources/ResourceView.tsx", import.meta.url), "utf8");
const resourceRoute = readFileSync(new URL("../app/resources/[...slug]/page.tsx", import.meta.url), "utf8");
const tierPage = readFileSync(new URL("../app/[tier]/page.tsx", import.meta.url), "utf8");
const tierEducation = readFileSync(new URL("../app/lib/tierEducation.ts", import.meta.url), "utf8");
const localOwner = readFileSync(new URL("../app/components/GBPLandingPage.tsx", import.meta.url), "utf8");

const newRouteFragments = [
  "path: basicsHub",
  "what-does-good-weed-mean",
  "top-shelf-mids-quads",
  "thc-vs-weed-quality",
  "bag-appeal",
  "trichomes-frosty-weed",
  "terpenes-gas-loud-aroma",
  "drying-curing-freshness",
  "smalls-vs-big-buds",
  "bc-grown-indoor-hydro-outdoor",
  "craft-vs-commercial-cannabis",
  "indica-sativa-hybrid",
  "strain-vs-cultivar",
  "landrace-vs-hybrid",
  "weed-slang-glossary",
  "/resources/native-smokes/native-cigarettes-guide",
];

test("installs exactly the 16 approved new resource records", () => {
  assert.equal(data.match(/\barticle\(\{/g)?.length, 16);
  for (const fragment of newRouteFragments) assert.ok(data.includes(fragment), fragment);
  assert.ok(resourceData.includes("...ADC_V2_NEW_PAGES"));
  assert.ok(resourceData.includes("getStaticResourceParams"));
});

test("preserves original publication dates and sets dates for new pages centrally", () => {
  assert.ok(data.includes('const published = "2026-09-07"'));
  assert.ok(data.includes("datePublished: published"));
  assert.ok(data.includes("dateModified: published"));
  assert.ok(data.includes("...page"), "expanded pages retain existing datePublished");
  assert.equal(data.includes('datePublished: "2026-09-07"'), false);
});

test("renders visible FAQs and matching FAQ schema without Product or Offer schema", () => {
  assert.ok(resourceView.includes("page.faqs.map"));
  assert.ok(resourceRoute.includes("page.faqs.map"));
  assert.ok(resourceRoute.includes('"@type": "FAQPage"'));
  assert.ok(resourceRoute.includes('"@type": "Question"'));
  assert.ok(resourceRoute.includes('"@type": "Answer"'));
  assert.equal(resourceRoute.includes('"@type": "Product"'), false);
  assert.equal(resourceRoute.includes('"@type": "Offer"'), false);
  assert.ok(resourceRoute.includes('.replace(/</g, "\\\\u003c")'));
});

test("links new articles into the resource centre and preserves five Weed owners", () => {
  assert.ok(data.includes("hasResourceCentre"));
  assert.ok(data.includes('{ label: "Resource Centre", href: resourcesHub }'));
  for (const route of ["/exotic-weed", "/premium-weed", "/aaa-weed", "/aa-weed", "/budget-weed"]) {
    assert.ok(tierPage.includes(`href=\"${route}\"`), route);
  }
  for (const key of ["EXOTIC", "PREMIUM", '"AAA+"', "AA", "BUDGET"]) assert.ok(tierEducation.includes(`${key}: {`), key);
});

test("adds the exact PINKY-approved local owner learning block", () => {
  assert.ok(localOwner.includes("Learn Before You Browse"));
  assert.ok(localOwner.includes("Want a clearer way to read the Blouds Dispensary menu? Start with Cannabis 101, the Queen Street Visit Guide or the Weed &amp; Flower Guides."));
  for (const route of ["/resources/cannabis-101", "/resources/local-guides/queen-street-brampton-visit-guide", "/resources/weed-flower-guides", "/resources"]) {
    assert.ok(localOwner.includes(`href=\"${route}\"`), route);
  }
});

test("changed public copy contains no internal workflow language or Markdown dividers", () => {
  const publicSources = [data, tierEducation, localOwner].join("\n");
  for (const forbidden of ["PINKY", "Cody", "Agent X", "keyword strategy", "source truth", "current product surfaces", "evergreen authority guide", "observed catalog terminology", "protected owner", "approval process", "---"]) {
    assert.equal(publicSources.includes(forbidden), false, forbidden);
  }
});
