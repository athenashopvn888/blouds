import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import {
  CIG_WORDING_FALLBACK,
  cigarettePublicHeaders,
  decideCigaretteSurface,
  readCigaretteTvHeader,
  reconcileSurfaceItems,
} from "../app/lib/cigDecision.ts";
import { isRealCigaretteItem } from "../app/lib/cigMarkers.ts";
import { isCigaretteFlashWindow } from "../app/tv/flashMessages.ts";
import { tv2BoardCards } from "../app/tv2/tv2Board.ts";

const carton = { category: "CIGARETTES", name: "BB FULL CARTON", slug: "bb-full-carton" };
const vape = { category: "VAPE PENS", name: "Mango Ice", slug: "mango-ice" };
const kept = [
  { category: "CIGARETTES", name: "BACKWOOD HONEY", slug: "backwood-honey" },
  { category: "CIGARETTES", name: "GRAPE CIGARILLO", slug: "grape-cigarillo" },
  { category: "CIGARETTES", name: "RAW PAPER", slug: "raw-paper" },
  { category: "CIGARETTES", name: "ZYN POUCH", slug: "zyn-pouch" },
  { category: "CIGARETTES", name: "VELO", slug: "velo" },
  { category: "CIGARETTES", name: "HEMP WRAP", slug: "hemp-wrap" },
];

const cards = [{ id: "VAPES" }, { id: "CIGARETTES" }, { id: "MAGIC" }];

test("a true TV flag shows the cigarette card and real cigarette items", () => {
  assert.deepEqual(tv2BoardCards(cards, true).map((card) => card.id), ["VAPES", "CIGARETTES", "MAGIC"]);
  const menu = [vape, ...kept];
  const shown = reconcileSurfaceItems(menu, [...menu, carton], true);
  assert.ok(shown.some((item) => item.slug === carton.slug));
  for (const item of kept) assert.ok(shown.some((entry) => entry.slug === item.slug), item.slug);
});

test("a false TV flag hides the cigarette card and real cigarettes, and keeps wraps and pouches", () => {
  assert.deepEqual(tv2BoardCards(cards, false).map((card) => card.id), ["VAPES", "MAGIC"]);
  const hidden = reconcileSurfaceItems([vape, carton, ...kept], [carton, ...kept], false);
  assert.equal(hidden.some((item) => item.slug === carton.slug), false);
  for (const item of kept) {
    assert.equal(isRealCigaretteItem(item), false, item.slug);
    assert.ok(hidden.some((entry) => entry.slug === item.slug), item.slug);
  }
});

test("the website stays hidden when the TV flag is on", () => {
  const cig = { on: true, webOn: false, tvOn: true };
  const items = [carton, ...kept];
  assert.equal(decideCigaretteSurface({ cig, items, surface: "web" }).show, false);
  assert.equal(decideCigaretteSurface({ cig, items, surface: "tv" }).show, true);
  assert.equal(decideCigaretteSurface({ cig, items, surface: "web", envRaw: "false" }).reason, "env");
  for (const file of ["app/page.tsx", "app/sitemap.ts", "app/components/Footer.tsx", "app/faq/page.tsx"]) {
    assert.match(readFileSync(new URL(`../${file}`, import.meta.url), "utf8"), /SHOW_CIGARETTES/);
  }
  assert.match(readFileSync(new URL("../app/components/Navbar.tsx", import.meta.url), "utf8"), /filterCigaretteEntries\(ALL_LINKS_RAW\)/);
  const banner = readFileSync(new URL("../app/components/fleet/FleetAnnouncementBanner.tsx", import.meta.url), "utf8");
  assert.match(banner, /const showCigarettes = cigarettes\.web/);
});

test("TV boards read the live header and do not build the card list from the coded switch", () => {
  const tv2 = readFileSync(new URL("../app/tv2/page.tsx", import.meta.url), "utf8");
  const tv = readFileSync(new URL("../app/tv/page.tsx", import.meta.url), "utf8");
  const route = readFileSync(new URL("../app/api/tv-data/route.ts", import.meta.url), "utf8");
  const feed = readFileSync(new URL("../app/lib/cigaretteFeed.ts", import.meta.url), "utf8");
  assert.match(tv2, /tv2BoardCards\(CARD_CONFIG, tvCig\.show\)/);
  assert.match(tv2, /readCigaretteTvHeader\(res\.headers\)/);
  assert.match(tv, /readCigaretteTvHeader\(iRes\.headers\)/);
  assert.doesNotMatch(tv2, /SHOW_CIGARETTES/);
  assert.doesNotMatch(tv, /SHOW_CIGARETTES/);
  assert.match(route, /reconcileSurfaceItems\(body, snap\.items, snap\.tv\.show\)/);
  assert.doesNotMatch(route, /SHOW_CIGARETTES/);
  assert.match(feed, /const tv = decideCigaretteSurface\(\{ cig, items, surface: "tv", errored \}\)/);
  assert.doesNotMatch(feed, /tv = codedWebFallback/);
  assert.doesNotMatch(feed, /tv = codedGuideFallback/);
  assert.match(feed, /source === "live" \|\| source === "last-good"/);
  assert.match(feed, /snapshotFrom\(cig, items, live, !live && !cig\)/);
  assert.match(feed, /publicWebsiteCigaretteFlag\(snap\.web, SHOW_CIGARETTES\)/);
  assert.match(feed, /return cigarettePublicHeaders\(\{ web: state\.web, tv: state\.tv, wording: state\.wording \}\)/);
  const layout = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
  assert.match(layout, /web: SHOW_CIGARETTES \? cigarettes\.web : false/);
});

test("tv-data cigarette headers follow the TV flag and the page can read them", () => {
  const headers = cigarettePublicHeaders({
    web: false,
    tv: true,
    wording: { ...CIG_WORDING_FALLBACK, tv2BoardTitle: "FEED BOARD" },
  });
  assert.equal(headers["x-tv-data-cig-tv"], "1");
  assert.equal(headers["x-tv-data-cig-web"], "0");
  const open = readCigaretteTvHeader({ get: (name: string) => headers[name] ?? null });
  assert.equal(open.show, true);
  assert.equal(open.wording.tv2BoardTitle, "FEED BOARD");
  const closed = readCigaretteTvHeader({ get: (name: string) => (name === "x-tv-data-cig-tv" ? "0" : null) });
  assert.equal(closed.show, false);
});

test("the cigarette ticker window is the Toronto clock, not the coded website switch", () => {
  assert.equal(process.env.NEXT_PUBLIC_SHOW_CIGARETTES, undefined);
  assert.equal(isCigaretteFlashWindow(new Date("2026-10-07T21:30:00.000Z")), true);
  assert.equal(isCigaretteFlashWindow(new Date("2026-10-07T15:00:00.000Z")), false);
});
