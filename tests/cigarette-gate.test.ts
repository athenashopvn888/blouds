import assert from "node:assert/strict";
import test from "node:test";
import { decideCigaretteRequest, isCigaretteRedirectPath } from "../app/lib/cigaretteGate.ts";

test("coded and feed errors keep the redirect, and an explicit web off stays put", () => {
  assert.equal(decideCigaretteRequest({ envRaw: undefined, cig: null, feedErrored: true }), "redirect");
  assert.equal(decideCigaretteRequest({ envRaw: undefined, cig: null, feedErrored: false }), "redirect");
  assert.equal(decideCigaretteRequest({ envRaw: "true", cig: null, feedErrored: true }), "allow");
  assert.equal(decideCigaretteRequest({ envRaw: "false", cig: { webOn: true }, feedErrored: false }), "redirect");
  assert.equal(decideCigaretteRequest({ envRaw: undefined, cig: { webOn: false, on: true }, feedErrored: false }), "unavailable");
  assert.equal(decideCigaretteRequest({ envRaw: undefined, cig: { on: false }, feedErrored: false }), "unavailable");
  assert.equal(decideCigaretteRequest({ envRaw: undefined, cig: { webOn: true }, feedErrored: false }), "allow");
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
