/* -- Product & Item Types -- */
export interface FlowerProduct {
  sku: string;
  name: string;
  slug: string;
  tier: string;
  type: "indica" | "sativa" | "hybrid";
  isHot: boolean;
  isSale: boolean;
  thc: string;
  price3g: PricePoint | null;
  price5g: PricePoint | null;
  price14g: PricePoint | null;
  price28g: PricePoint | null;
  image: string;
}

export interface PricePoint {
  regular: number;
  sale: number | null;
}

export interface ItemProduct {
  sku: string;
  name: string;
  slug: string;
  category: string;
  type: string;
  thc: string;
  mg: string;
  price: string;
  image: string;
  promoImage: string | null;
}

/* ── Data imports (static fallback) ── */
import flowersJson from "./flowers.json";
import itemsJson from "./items.json";

export const allFlowers: FlowerProduct[] = flowersJson as FlowerProduct[];
export const allItems: ItemProduct[] = itemsJson as ItemProduct[];

/* ── Live stock fetch from Apps Script ── */
const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || "";

interface LiveStockResponse {
  flowers: FlowerProduct[];
  items: ItemProduct[];
  storeCode?: string;
  stockDate?: string;
}

/**
 * Fetch live stock-filtered products from Apps Script endpoint.
 * Used at build time (getStaticProps / generateStaticParams).
 * Falls back to static JSON if endpoint not configured.
 */
export async function fetchLiveProducts(): Promise<{
  flowers: FlowerProduct[];
  items: ItemProduct[];
  isLive: boolean;
  stockDate: string | null;
}> {
  if (!APPS_SCRIPT_URL) {
    return { flowers: allFlowers, items: allItems, isLive: false, stockDate: null };
  }

  try {
    const res = await fetch(`${APPS_SCRIPT_URL}?store=BLS01`, {
      next: { revalidate: 300 }, // Cache for 5 min during build
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: LiveStockResponse = await res.json();
    return {
      flowers: data.flowers || allFlowers,
      items: data.items || allItems,
      isLive: true,
      stockDate: data.stockDate || null,
    };
  } catch (err) {
    console.warn("[products] Live fetch failed, using static data:", err);
    return { flowers: allFlowers, items: allItems, isLive: false, stockDate: null };
  }
}

export const TIER_CONFIG: Record<
  string,
  {
    name: string; slug: string; color: string; icon: string; tagline: string; banner: string;
    unitPrice: number; /* $/g */
    deal3g: { label: string; total: string; price: number } | null; /* 3g bundle pricing */
    deal6g: { label: string; total: string; price: number } | null; /* 6g bundle pricing (top 3 only) */
  }
> = {
  EXOTIC: {
    name: "Exotic",
    slug: "exotic",
    color: "#f59e0b",
    icon: "\uD83D\uDD25",
    tagline: "Browse current Exotic flower listings",
    banner: "/banners/Blouds_Exotic.webp",
    unitPrice: 20,
    deal3g: { label: "3g bundle", total: "3G", price: 40 },
    deal6g: { label: "6g bundle", total: "6G", price: 60 },
  },
  PREMIUM: {
    name: "Premium",
    slug: "premium",
    color: "#a78bfa",
    icon: "\uD83D\uDC8E",
    tagline: "Hand-picked connoisseur grade \u00B7 THC 32-34%",
    banner: "/banners/Blouds_Premium.webp",
    unitPrice: 15,
    deal3g: { label: "3g bundle", total: "3G", price: 30 },
    deal6g: { label: "6g bundle", total: "6G", price: 45 },
  },
  "AAA+": {
    name: "AAA+",
    slug: "aaa",
    color: "#22d3ee",
    icon: "\u26A1",
    tagline: "Heavy hitters, proven strains \u00B7 THC 30-32%",
    banner: "/banners/Blouds_AAAplus.webp",
    unitPrice: 10,
    deal3g: { label: "3g bundle", total: "3G", price: 20 },
    deal6g: { label: "6g bundle", total: "6G", price: 30 },
  },
  AA: {
    name: "AA",
    slug: "aa",
    color: "#34d399",
    icon: "\u2726",
    tagline: "Quality daily drivers \u00B7 THC 27-29%",
    banner: "/banners/Blouds_AA.webp",
    unitPrice: 4,
    deal3g: null,
    deal6g: null,
  },
  BUDGET: {
    name: "Budget",
    slug: "budget",
    color: "#94a3b8",
    icon: "\uD83D\uDCB0",
    tagline: "Shreds & value OZs \u00B7 From $40/oz",
    banner: "/banners/Blouds_Budget.webp",
    unitPrice: 3,
    deal3g: { label: "$10 / 3g Special", total: "3G", price: 10 },
    deal6g: null,
  },
};

/* ── Item category config ── */
export interface CategoryInfo {
  name: string; slug: string; color: string; icon: string; banner?: string;
  seoTitle: string; seoIntro: string; seoDescription: string;
  faqs: { q: string; a: string }[];
}

export const CATEGORY_CONFIG: Record<string, CategoryInfo> = {
  EDIBLES: {
      banner: "/banners/Blouds_Edibles.webp",
    name: "Edibles", slug: "edibles", color: "#f97316", icon: "🍬",
    seoTitle: "Cannabis Edibles Brampton — Gummies, Chocolates & Drinks",
    seoIntro: "Browse the current cannabis edibles menu at Blouds Dispensary on Queen Street W, Brampton for listed formats, brands, and package details.",
    seoDescription: "Browse the current edibles category at Blouds Dispensary in Brampton for listed formats, brands, package details, and prices. Visit us at 117 Queen St W — open daily 24 hours.",
    faqs: [
      { q: "What edibles are listed online?", a: "Check the current edibles category for listed formats, brands, package details, and prices." },
      { q: "Where can I review package information?", a: "Open the current item page and review the product label for package information." },
      { q: "Can I buy edibles at Blouds Dispensary?", a: "Yes! Visit us at 117 Queen St W, Brampton. We're open daily 24 hours with a full edibles selection in store." },
    ],
  },
  "VAPE PENS": {
      banner: "/banners/Blouds_THC_Vape.webp",
    name: "THC Vape", slug: "vapes", color: "#8b5cf6", icon: "💨",
    seoTitle: "Vape Pens Brampton — THC & Nicotine Cartridges",
    seoIntro: "Browse the current THC and nicotine vape categories at Blouds Dispensary in Brampton, including listed cartridges, pods, and batteries.",
    seoDescription: "Use the current vape menu to compare listed formats, brands, package details, and prices before visiting Blouds Dispensary at 117 Queen St W.",
    faqs: [
      { q: "What vape pens are listed?", a: "Check the current vape category for listed 510-thread cartridges, nicotine vape pods, disposable vapes, and compatible batteries." },
      { q: "Do you sell vape batteries?", a: "Yes! We stock 510-thread batteries and pod systems that pair with our cartridge selection." },
    ],
  },
  "VAPE DISPOSABLE": {
    banner: "/banners/Blouds_Nic_Vape.webp",
    name: "Nic Vape", slug: "vape-disposables", color: "#a78bfa", icon: "💨",
    seoTitle: "Disposable Vapes Brampton — THC Disposable Pens",
    seoIntro: "Browse the current disposable vape category at Blouds Dispensary in Brampton for listed brands, formats, and package details.",
    seoDescription: "Use the disposable vape menu to compare the item names, package details, and prices currently listed before visiting 117 Queen St W in Brampton.",
    faqs: [
      { q: "How long does a disposable vape last?", a: "Most disposable THC vapes contain 0.5g-1g of distillate and last between 100-300 puffs depending on usage." },
      { q: "Are disposable vapes rechargeable?", a: "Most are designed for single use, but some models include a USB-C charging port to ensure you can use the full cartridge." },
    ],
  },
  CONCENTRATES: {
      banner: "/banners/Blouds_Concentrate.webp",
    name: "Concentrates", slug: "concentrates", color: "#f59e0b", icon: "💎",
    seoTitle: "Cannabis Concentrates in Brampton | Blouds Dispensary",
    seoIntro: "Browse concentrates category information at Blouds Dispensary in Brampton.",
    seoDescription: "Review the current concentrate category at Blouds Dispensary in Brampton for listed item names, package details, and prices before visiting.",
    faqs: [
      { q: "What concentrate information can shoppers review?", a: "Customers can review concentrate-related category information and confirm current menu details before visiting Blouds Dispensary." },
      { q: "Where can I check current concentrate details?", a: "Use the current concentrate category and item pages for listed menu and package details." },
    ],
  },
  PREROLLS: {
    banner: "/banners/Blouds_Pre-Rolls.webp", name: "Pre-Rolls", slug: "prerolls", color: "#22c55e", icon: "🚬",
    seoTitle: "Pre-Rolls Brampton — Ready-to-Smoke Cannabis Joints",
    seoIntro: "Pre-rolled cannabis joints at Blouds Dispensary, Brampton. Singles, multi-packs, and infused pre-rolls — ready to light up.",
    seoDescription: "Skip the rolling and grab a pre-roll from Blouds Dispensary in Brampton. We carry singles, multi-packs, and infused pre-rolls from premium flower. Whether you want a quick smoke or a party pack, our pre-roll selection has something for everyone. Visit us at 117 Queen St W — open daily 24 hours.",
    faqs: [
      { q: "What pre-rolls are listed?", a: "Check the current pre-roll category for listed singles, multi-packs, package details, and prices." },
      { q: "Are your pre-rolls made with quality flower?", a: "Yes! Our pre-rolls are filled with ground flower from our regular menu tiers — not shake or trim." },
    ],
  },
  "ADD ONS": {
      banner: "/banners/Blouds_Accessories.webp",
    name: "Accessories", slug: "add-ons", color: "#34d399", icon: "➕",
    seoTitle: "Cannabis Accessories Brampton — Grinders, Papers, Lighters & More",
    seoIntro: "Essential cannabis accessories at Blouds Dispensary, Brampton. Grinders, rolling papers, lighters, trays, and more.",
    seoDescription: "Browse the current accessories category for listed grinders, rolling papers, lighters, trays, storage items, and prices. Visit Blouds Dispensary at 117 Queen St W in Brampton.",
    faqs: [
      { q: "What accessories do you sell?", a: "We carry grinders, rolling papers, filter tips, lighters, rolling trays, storage jars, and more." },
    ],
  },
  "MAGIC & OTHERS": {
    banner: "/banners/Blouds_Magic_Stuff.webp",
    name: "Magic Stuff", slug: "magic", color: "#64748b", icon: "*",
    seoTitle: "Magic Stuff - Specialty Items",
    seoIntro: "Browse the current specialty category for listed products and package details.",
    seoDescription: "Use the current specialty menu to review listed item names, package details, and prices for this location.",
    faqs: [
      { q: "What specialty items are listed?", a: "Check the current specialty category for the items and package details listed for this location." },
      { q: "Where can I compare specialty items?", a: "Use the current category and item pages to compare listed details and prices." },
    ],
  },
  CIGARETTES: {
      banner: "/banners/Blouds_Cigarettes.webp",
    name: "Cigarettes", slug: "cigarettes", color: "#78716c", icon: "🏷️",
    seoTitle: "Native Cigarettes Brampton - Brands And Prices at Blouds Dispensary",
    seoIntro: "Shop native cigarettes in Brampton at Blouds Dispensary with listed brands like Canadian, Canadian Goose, Canadian Classics, Putters, Rolled Gold, Nexus, Time, Backwoods, Grabba, and nicotine pouches.",
    seoDescription: "Blouds Dispensary lists native cigarette packs at $25 for many brands, plus 10 x Premium Mix Cigarettes at $3, nicotine pouches from Velo, Pablo, and Killa at $20, Grabba at $5, Grabba Shaker at $19, and Backwoods options from $20-$25. Visit 117 Queen St W in Brampton and check the live cigarette menu for current stock.",
    faqs: [
      { q: "Do you sell native cigarettes at Blouds Dispensary?", a: "Yes. The cigarette menu includes brands such as Canadian Lights, Canadian Full, Canadian Menthol, Canadian Goose, Canadian Classics, Putters, Rolled Gold, Nexus, and Time." },
      { q: "How much are cigarettes at Blouds Dispensary?", a: "Many native cigarette packs are listed at $25. The menu also lists 10 x Premium Mix Cigarettes at $3, nicotine pouches at $20, Grabba at $5, Grabba Shaker at $19, and Backwoods options from $20-$25." },
      { q: "Do cigarette brands and prices change?", a: "Yes. Brand mix, flavours, carton options, and prices can rotate, so check the live cigarette category before visiting Queen Street W." },
    ],
  },
};

/* ── Helper functions ── */
export function getFlowersByTier(tier: string): FlowerProduct[] {
  return allFlowers.filter(
    (f) => f.tier.toUpperCase() === tier.toUpperCase()
  );
}

export function getFlowerBySlug(slug: string): FlowerProduct | undefined {
  return allFlowers.find((f) => f.slug === slug);
}

export function getItemsByCategory(category: string): ItemProduct[] {
  return allItems.filter(
    (i) => i.category.toUpperCase() === category.toUpperCase()
  );
}

export function getTierFromSlug(
  slug: string
): { key: string; config: (typeof TIER_CONFIG)[string] } | undefined {
  const entry = Object.entries(TIER_CONFIG).find(
    ([, v]) => v.slug === slug
  );
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getCategoryFromSlug(
  slug: string
): { key: string; config: (typeof CATEGORY_CONFIG)[string] } | undefined {
  const entry = Object.entries(CATEGORY_CONFIG).find(
    ([, v]) => v.slug === slug
  );
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getLowestPrice(flower: FlowerProduct): number | null {
  const prices = [flower.price3g, flower.price5g, flower.price14g, flower.price28g]
    .filter((p): p is PricePoint => p !== null)
    .map((p) => p.sale ?? p.regular);
  return prices.length ? Math.min(...prices) : null;
}

export function formatPrice(p: PricePoint | null): string {
  if (!p) return "—";
  if (p.sale !== null) return `$${p.sale}`;
  return `$${p.regular}`;
}
