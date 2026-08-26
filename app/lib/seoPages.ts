const NATIVE_HERO_DISCLOSURE = "Brand preview only. Selection varies by store; check the current cigarette menu before visiting.";
const NATIVE_HERO_PRODUCTS = [
  { name: "BB Lights", image: "/products/1001-BB-LIGHTS-CARTONS.webp" },
  { name: "BB Full", image: "/products/1003-BB-FULL-CARTON.webp" },
  { name: "Canadian Lights", image: "/products/1005-CANADIAN-LIGHTS.webp" },
  { name: "Canadian Full", image: "/products/1006-CANADIAN-FULL.webp" },
  { name: "Canadian Classics Silver", image: "/products/1015-CANADIAN-CLASSICS-SILVER.webp" },
  { name: "Canadian Menthol", image: "/products/1013-CANADIAN-MENTHOL.webp" },
] as const;

const NICOTINE_VAPE_HERO_PRODUCTS = [
  {
    name: "Geek Promax 5% — 30K Puffs",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEK-PROMAX.jpg",
    sourceSlug: "geek-promax-5-30k-puffs",
  },
  {
    name: "Geek Universe — 25K Puffs",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/geek_universe_pulse_x_25k.webp",
    sourceSlug: "geek-universe-25k-puffs",
  },
  {
    name: "Level X G2 Pod",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1086-Level-X-G2-pod.webp",
    sourceSlug: "level-x-g2-pod",
  },
  {
    name: "NEXA PIX — 30K Puffs — Many Flavors",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/nexa_showcase_600x600.webp",
    sourceSlug: "nexa-pix-30k-puffs-many-flavors",
  },
  {
    name: "OVNS 10000 5% — 10K Puffs",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg",
    sourceSlug: "ovns-10000-5-10k-puffs",
  },
  {
    name: "OVNS Pioneer 5% — 22K Puffs",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS_PIONEER_5_22K_PUFFS.webp",
    sourceSlug: "ovns-pioneer-5-22k-puffs",
  },
] as const;

export interface HeroPreviewProduct {
  name: string;
  image: string;
  sourceSlug?: string;
}

export interface SeoPageData {
  slug: string;
  title: string;
  absoluteTitle?: boolean;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  publicationStatus?: "draft" | "approved";
  heroPreview?: {
    eyebrow: string;
    intro: string;
    products: readonly HeroPreviewProduct[];
    disclosure: string;
    menuHref: string;
    primaryLabel: string;
    secondaryLabel: string;
    secondaryHref?: string;
    theme: "cigarettes" | "nicotine";
    identityStrip?: string;
    featuredHeading?: string;
    featuredIntro?: string;
  };
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  warning?: string;
}

// GPT-reviewed store payload. Keep this page noindex until Tri approves the
// exact page for publication and publicationStatus is changed.
export const NICOTINE_VAPE_LANDING_CONTENT: SeoPageData = {
  slug: "nicotine-vapes-brampton",
  title: "Nicotine Vapes in Brampton | Blouds Dispensary",
  absoluteTitle: true,
  metaDescription: "Adults 19+: review six verified nicotine vape product pages from Blouds Dispensary in Brampton. Check /items/vapes for the current selection. Nicotine is addictive.",
  h1: "Nicotine Vapes at Blouds Dispensary in Brampton",
  icon: "NV",
  heroTagline: "Adults 19+ · Nicotine is addictive.",
  publicationStatus: "draft",
  heroPreview: {
    eyebrow: "BLOUDS DISPENSARY • BRAMPTON • ADULTS 19+",
    intro: "Searching for nicotine vapes near me in Brampton? This Blouds Dispensary guide features six verified nicotine vape product pages and directs adults to /items/vapes for the current selection. Product details can change, so open the individual item page before choosing. Nicotine is addictive.",
    products: NICOTINE_VAPE_HERO_PRODUCTS,
    disclosure: "The featured cards are not a guarantee of current stock, price or availability.",
    menuHref: "/items/vapes",
    primaryLabel: "Browse Nicotine Vapes",
    secondaryLabel: "Compare the Six Featured Items",
    secondaryHref: "#featured-vapes",
    theme: "nicotine",
    identityStrip: "Blouds Dispensary | Brampton | Adults 19+ | Nicotine is addictive.",
    featuredHeading: "Start With Six Verified Blouds Vape Cards",
    featuredIntro: "The featured set includes verified Geek, Level X, NEXA and OVNS product pages. Use each card for its exact supported display details, then rely on /items/vapes for the current Blouds Dispensary listing. The featured cards are not a guarantee of current stock, price or availability.",
  },
  sections: [
    { heading: "Pods and Puff-Count Listings in One Shortlist", body: "Blouds’ verified set includes a Level X G2 Pod alongside item pages whose names identify 10K, 22K, 25K or 30K puff counts. Use those numbers only to distinguish the verified listings. They are not guarantees of duration, performance or product superiority." },
    { heading: "How to Read a Blouds Product Card", body: "Check whether the item page identifies a pod, device or another format, and keep every specification attached to the correct product. A disposable nicotine vape should be described as disposable only when its own current item record verifies that format. None of the six approved display names should be relabelled by assumption." },
    { heading: "A Brampton Nicotine Category With a Clear Boundary", body: "This Blouds Dispensary guide is limited to nicotine products sourced from the VAPE PENS category and linked through /items/vapes. Products under /items/vape-disposables are THC or cannabis vape products and must not be presented as nicotine vapes on this page." },
    { heading: "Visit Blouds Dispensary in Brampton", body: "Before visiting Blouds Dispensary in Brampton, check the storefront’s current details and open /items/vapes to review the latest nicotine vape shop listing. This page does not claim unverified hours, address, prices or guaranteed availability." },
  ],
  faqs: [
    { q: "Where should I check Blouds Dispensary’s current nicotine selection?", a: "Use /items/vapes. The six featured cards are verified starting points, while the current category listing should control selection information." },
    { q: "Does every featured Blouds item use the same format?", a: "No format should be assumed. The supplied evidence explicitly identifies the Level X G2 Pod. Read each remaining product page for its exact verified format and details." },
    { q: "Does this Blouds page include cannabis vapes?", a: "No. This page covers nicotine products from the VAPE PENS category for adults 19+. THC and cannabis vape products under /items/vape-disposables are excluded." },
  ],
  warning: "Adults 19+. Nicotine is addictive.",
};

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "brampton-weed-dispensary",
    title: "Brampton Weed Dispensary — Blouds Dispensary | Open 24 Hours",
    metaDescription: "Blouds Dispensary is open 24 hours at 117 Queen St W in Brampton. Browse flower tiers and other menu categories online.",
    h1: "Brampton Weed Dispensary — Blouds Dispensary",
    icon: "✨",
    heroTagline: "117 Queen St W · Open 24 Hours · Walk-In Welcome",
    banner: "/banners/Blouds_Welcome.webp",
    sections: [
      { heading: "A 24-Hour Store on Queen Street West", body: "Blouds Dispensary is located at 117 Queen St W in Brampton and is open 24 hours. Use the store page for visit information and the menu for current item details." },
      { heading: "Browse Flower Tiers", body: "The flower menu is organized into Exotic, Premium, AAA+, AA, and Budget sections. Compare the names, listed weights, posted prices, and package details shown in each section." },
      { heading: "Browse More Menu Categories", body: "The menu also includes edibles, vapes, concentrates, pre-rolls, cigarettes, and accessories. Check a current category page for listed details." },
    ],
    faqs: [
      { q: "Where is Blouds Dispensary?", a: "Blouds Dispensary is at 117 Queen St W, Brampton, ON." },
      { q: "What are the store hours?", a: "Blouds Dispensary is open 24 hours a day, seven days a week." },
      { q: "What can I check before visiting?", a: "Browse the current flower tiers and product categories online for listed menu details." },
    ],
  },
  {
    slug: "cheap-weed-brampton",
    title: "Cheap Weed Brampton — Budget Cannabis Menu | Blouds Dispensary",
    metaDescription: "Browse the Budget and AA flower sections at Blouds Dispensary, 117 Queen St W in Brampton. Open 24 hours.",
    h1: "Cheap Weed Brampton — Budget Cannabis Menu",
    icon: "💰",
    heroTagline: "Compare Budget and AA Flower · Open 24 Hours",
    banner: "/banners/Blouds_Budget.webp",
    sections: [
      { heading: "Compare Budget and AA Flower", body: "Use the Budget and AA menu sections to compare the names, listed weights, posted prices, and package details currently shown online." },
      { heading: "Clear Menu Pricing", body: "Each flower page presents its listed price and weight options in one place. Review the current item page when a particular listing matters to your visit." },
      { heading: "Visit on Queen Street West", body: "Blouds Dispensary is open 24 hours at 117 Queen St W in Brampton. Walk-in shopping is welcome." },
    ],
    faqs: [
      { q: "Where can I browse value-priced flower?", a: "Use the Budget and AA menu sections to compare current listings and posted prices." },
      { q: "Can I check item details before visiting?", a: "Yes. Current menu pages show the names, weights, prices, and package details listed online." },
      { q: "When is the store open?", a: "Blouds Dispensary is open 24 hours a day." },
    ],
  },
  {
    slug: "native-cigarettes-brampton",
    title: "Native Cigarettes Brampton — Current Menu | Blouds Dispensary",
    metaDescription: "Browse the current native cigarette category at Blouds Dispensary, 117 Queen St W in Brampton. Open 24/7.",
    h1: "Native Cigarettes Brampton",
    icon: "🏷️",
    heroTagline: "Current Brands and Prices · Open 24 Hours",
    heroPreview: {
      eyebrow: "Blouds Dispensary · 117 Queen St W, Brampton",
      intro: "Cigarette category and visit information",
      products: NATIVE_HERO_PRODUCTS,
      disclosure: NATIVE_HERO_DISCLOSURE,
      menuHref: "/items/cigarettes",
      primaryLabel: "Check the cigarette menu",
      secondaryLabel: "See the current selection",
      theme: "cigarettes",
    },
    banner: "/banners/Blouds_Cigarettes.webp",
    sections: [
      { heading: "Browse the Current Cigarette Category", body: "Use the cigarette menu page to review the brand names, varieties, and prices currently listed by Blouds Dispensary." },
      { heading: "One Menu for Visit Planning", body: "The website separates cigarettes, flower tiers, and other product categories so shoppers can compare listed details before travelling." },
      { heading: "Open 24 Hours", body: "Blouds Dispensary is open 24 hours at 117 Queen St W in Brampton." },
    ],
    faqs: [
      { q: "Where can I browse cigarette brands?", a: "Check the current cigarette category page for the brands and prices listed online." },
      { q: "Where is Blouds Dispensary?", a: "The store is at 117 Queen St W in Brampton." },
      { q: "Is the store open late?", a: "Yes. Blouds Dispensary is open 24 hours a day." },
    ],
  },
  NICOTINE_VAPE_LANDING_CONTENT,
  {
    slug: "weed-store-near-mississauga",
    title: "Weed Store Near Mississauga — Blouds Dispensary",
    metaDescription: "Plan a visit from Mississauga to Blouds Dispensary at 117 Queen St W in Brampton. Browse current menu categories online. Open 24 hours.",
    h1: "Weed Store Near Mississauga — Blouds Dispensary",
    icon: "🚗",
    heroTagline: "Browse Before Travelling · Open 24 Hours",
    banner: "/banners/Blouds_Welcome.webp",
    sections: [
      { heading: "Plan a Visit From Mississauga", body: "Blouds Dispensary is located at 117 Queen St W in Brampton. Confirm your route and review the store page before travelling." },
      { heading: "Check the Menu Before You Leave", body: "Browse flower tiers, edibles, vapes, concentrates, pre-rolls, cigarettes, and accessories for current menu details." },
      { heading: "Open 24 Hours", body: "Blouds Dispensary is open 24 hours a day, seven days a week, so shoppers can plan a visit around their schedule." },
    ],
    faqs: [
      { q: "Where can I check the menu before travelling?", a: "Browse the current flower tiers and product category pages online." },
      { q: "Is Blouds Dispensary open late?", a: "Blouds Dispensary is open 24 hours a day." },
      { q: "What is the store address?", a: "Blouds Dispensary is at 117 Queen St W in Brampton." },
    ],
  },
  {
    slug: "dispensary-near-me-brampton",
    title: "Cannabis Dispensary Near Me Brampton — Blouds Dispensary",
    metaDescription: "Find Blouds Dispensary at 117 Queen St W in Brampton. Browse flower tiers and product categories online. Open 24 hours.",
    h1: "Cannabis Dispensary Near Me — Brampton",
    icon: "🗺️",
    heroTagline: "117 Queen St W · Open 24 Hours · Browse the Menu",
    banner: "/banners/Blouds_Welcome.webp",
    sections: [
      { heading: "Find Blouds Dispensary in Brampton", body: "Blouds Dispensary is located at 117 Queen St W in Brampton. Use the store page for current visit information." },
      { heading: "Browse Before You Visit", body: "The menu organizes flower into five tiers and provides separate pages for edibles, vapes, concentrates, pre-rolls, cigarettes, and accessories." },
      { heading: "Open Around the Clock", body: "The store is open 24 hours a day, seven days a week. Walk-in shopping is welcome." },
    ],
    faqs: [
      { q: "Where is the store?", a: "Blouds Dispensary is at 117 Queen St W in Brampton." },
      { q: "What are the hours?", a: "The store is open 24 hours a day." },
      { q: "Can I browse online first?", a: "Yes. Use the current menu pages to compare categories and listed item details." },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((page) => page.slug === slug);
}
