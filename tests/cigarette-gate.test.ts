import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { codedOffRedirect, decideCigaretteRequest, isCigaretteRedirectPath } from "../app/lib/cigaretteGate.ts";

test("coded and feed errors keep the redirect, and an explicit web off stays put", () => {
  assert.equal(decideCigaretteRequest({ envRaw: undefined, cig: null, feedErrored: true }), "redirect");
  assert.equal(decideCigaretteRequest({ envRaw: undefined, cig: null, feedErrored: false }), "redirect");
  assert.equal(decideCigaretteRequest({ envRaw: "true", cig: null, feedErrored: true }), "allow");
  assert.equal(decideCigaretteRequest({ envRaw: "false", cig: { webOn: true }, feedErrored: false }), "redirect");
  assert.equal(decideCigaretteRequest({ envRaw: undefined, cig: { webOn: false, on: true }, feedErrored: false }), "unavailable");
  assert.equal(decideCigaretteRequest({ envRaw: undefined, cig: { on: false }, feedErrored: false }), "unavailable");
  assert.equal(decideCigaretteRequest({ envRaw: undefined, cig: { webOn: true }, feedErrored: false }), "allow");
});

test("the four pre-merge URLs stay on the coded 302 while the switch is off", () => {
  for (const path of ["/items/cigarettes", "/cigarettes", "/native-cigarettes-brampton-queen", "/guides/grabba"]) {
    assert.equal(codedOffRedirect(path), "/items/vapes");
    assert.equal(codedOffRedirect(`${path}/`), "/items/vapes");
  }
  assert.equal(codedOffRedirect("/guides/bb-cigarettes"), null);
  assert.equal(codedOffRedirect("/items/vapes"), null);
  const middleware = readFileSync(new URL("../middleware.ts", import.meta.url), "utf8");
  assert.ok(middleware.indexOf("codedOffRedirect") < middleware.indexOf("readFeedCig"));
  assert.match(middleware, /NEXT_PUBLIC_SHOW_CIGARETTES/);
  assert.match(middleware, /NextResponse\.redirect\(new URL\("\/items\/vapes", request\.url\), 302\)/);
});

test("only the coded cigarette URLs are gated", () => {
  assert.equal(isCigaretteRedirectPath("/items/cigarettes"), true);
  assert.equal(isCigaretteRedirectPath("/cigarettes"), true);
  assert.equal(isCigaretteRedirectPath("/native-cigarettes-brampton-queen"), true);
  assert.equal(isCigaretteRedirectPath("/guides/grabba"), true);
  assert.equal(isCigaretteRedirectPath("/item/grabba-shaker"), true);
  assert.equal(isCigaretteRedirectPath("/guides/blue-dream"), false);
  assert.equal(isCigaretteRedirectPath("/items/vapes"), false);
  assert.equal(isCigaretteRedirectPath("/"), false);
});
