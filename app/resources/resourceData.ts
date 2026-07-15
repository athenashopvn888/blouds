export type ResourceAuthorKey = "team" | "menu" | "local";

export interface ResourceAuthor {
  name: string;
  handle: string;
  role: string;
}

export interface ResourceLink {
  label: string;
  href: string;
  description?: string;
}

export interface ResourceSection {
  heading: string;
  body: string[];
  bullets?: string[];
  links?: ResourceLink[];
}

export interface ResourcePage {
  path: string;
  kind: "root" | "category" | "article";
  parent?: string;
  categoryLabel: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  excerpt: string;
  primaryKeyword: string;
  supportingKeywords: string[];
  searchIntent: string;
  author: ResourceAuthorKey;
  datePublished: string;
  dateModified: string;
  image: { src: string; alt: string };
  intro: string[];
  sections: ResourceSection[];
  commercialLinks: ResourceLink[];
  related: string[];
}

export const SITE = {
  name: "Blouds Dispensary",
  domain: "bloudsdispensary.ca",
  baseUrl: "https://www.bloudsdispensary.ca",
  storePage: "/weed-dispensary-brampton",
  address: "117 Queen St W, Brampton, ON L6Y 1M3",
  phone: "(437) 425-0117",
  hours: "Open 24 Hours",
};

export const AUTHORS: Record<ResourceAuthorKey, ResourceAuthor> = {
  team: { name: "Blouds Dispensary Team", handle: "@BloudsDispensary", role: "Store Team" },
  menu: { name: "Blouds Menu Desk", handle: "@BloudsMenu", role: "Menu Guide" },
  local: { name: "Queen Street Desk", handle: "@BloudsBrampton", role: "Local Guide" },
};

export const updated = "2026-07-15";

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    path: "/resources",
    kind: "root",
    categoryLabel: "Resource Centre",
    title: "Blouds Dispensary Resource Centre",
    seoTitle: "Blouds Dispensary Resources | Brampton, Gas Gang, Drizzle, Pouches",
    metaDescription:
      "Blouds Dispensary resources for Queen Street W Brampton shoppers, including Gas Gang, Drizzle, nicotine pouches, Backwoods, grabba, vapes, edibles, pre-rolls, flower, and native smokes.",
    h1: "Blouds Resource Centre",
    excerpt:
      "Queen Street W shopping guides for Gas Gang, Drizzle, ZYN, Velo, Pablo, Killa, Backwoods, grabba, flower, vapes, edibles, pre-rolls, and late-night Brampton visits.",
    primaryKeyword: "Blouds Dispensary resources",
    supportingKeywords: [
      "Brampton cannabis guide",
      "Gas Gang vapes Brampton",
      "Drizzle Switch Brampton",
      "nicotine pouches Brampton",
      "Backwoods and grabba Brampton",
    ],
    searchIntent: "Find Blouds shopping guides and product-brand pages.",
    author: "team",
    datePublished: updated,
    dateModified: updated,
    image: { src: "/banners/Blouds_Welcome_Banner.webp", alt: "Blouds Dispensary resource hub" },
    intro: [
      "Blouds should rank and read beyond flower. The current menu data gives the site real non-flower language: Gas Gang Dispo Vape 1G, 2g Gas Gang Vol.3 Hybrid, Drizzle Switch 3in1 / 2G, ZYN, Velo, Pablo, Killa, Backwoods, grabba, edibles, concentrates, cigarettes, and accessories.",
      "This hub turns those product names into useful Brampton resource sections while keeping the Queen Street W local story clear.",
    ],
    sections: [
      {
        heading: "Browse the Blouds Shelf by What You Need",
        body: [
          "If shoppers search Gas Gang, Drizzle, nicotine pouches, Backwoods, or grabba, the page should answer with those names. Blouds has the product data, so the resource centre can speak directly.",
        ],
      },
      {
        heading: "Brampton Search Needs More Than Flower",
        body: [
          "Flower tiers stay important, but Brampton shoppers also search vapes, pouches, smokes, edibles, accessories, and late-night category sections. This page gives every major section room to breathe.",
        ],
      },
    ],
    commercialLinks: [
      { label: "View the Brampton store page", href: SITE.storePage },
      { label: "Shop Gas Gang and Drizzle vapes", href: "/items/vape-disposables" },
      { label: "Shop cigarettes, pouches, and smokes", href: "/items/cigarettes" },
      { label: "Browse edibles", href: "/items/edibles" },
    ],
    related: [
      "/resources/brand-guides/gas-gang-drizzle-vapes",
      "/resources/nicotine-pouches",
      "/resources/native-smokes/backwoods-grabba-guide",
    ],
  },
  {
    path: "/resources/menu-guide",
    kind: "article",
    parent: "/resources",
    categoryLabel: "Menu Guide",
    title: "Downtown Brampton Menu Guide",
    seoTitle: "Downtown Brampton Cannabis Menu Guide | Blouds Dispensary",
    metaDescription:
      "Blouds Dispensary menu guide for Gas Gang, Drizzle, nicotine pouches, Backwoods, grabba, edibles, vapes, pre-rolls, concentrates, native smokes, and flower tiers.",
    h1: "Blouds Menu Guide: Start With the Shelf",
    excerpt:
      "Choose flower, vapes, edibles, pre-rolls, concentrates, cigarettes, pouches, Backwoods, grabba, or accessories before comparing products.",
    primaryKeyword: "Brampton cannabis menu guide",
    supportingKeywords: ["Blouds menu", "Gas Gang Brampton", "Drizzle vape Brampton", "native smokes Brampton"],
    searchIntent: "Navigate the Blouds menu by category and product name.",
    author: "menu",
    datePublished: updated,
    dateModified: updated,
    image: { src: "/banners/Blouds_Edibles_Concentrates_More.webp", alt: "Blouds menu guide" },
    intro: [
      "A shopper looking for Gas Gang or ZYN is not asking the same question as a shopper comparing Budget flower. The menu guide keeps those sections separate and links each one to the current category.",
    ],
    sections: [
      {
        heading: "Popular Non-Flower Picks to Browse",
        body: [
          "The current data lists Gas Gang Dispo Vape 1G, 2g Gas Gang Vol.3 Hybrid, Drizzle Switch 3in1 / 2G, ZYN nicotine pouches, nicotine pouches with Velo, Pablo, and Killa, Backwoods assorted flavors, new Backwoods flavors, grabba, and grabba shaker.",
        ],
      },
      {
        heading: "Queen Street W Shopping Flow",
        body: [
          "Blouds can guide downtown Brampton shoppers by the real reason for the visit: flower, a branded vape, a pouch tin, Backwoods, grabba, edibles, pre-rolls, concentrates, or accessories.",
        ],
      },
    ],
    commercialLinks: [
      { label: "Vape disposables", href: "/items/vape-disposables" },
      { label: "Cigarettes and pouches", href: "/items/cigarettes" },
      { label: "Edibles", href: "/items/edibles" },
      { label: "Pre-rolls", href: "/items/prerolls" },
    ],
    related: ["/resources/brand-guides/gas-gang-drizzle-vapes", "/resources/nicotine-pouches", "/resources/local-guides/queen-street-brampton-visit-guide"],
  },
  {
    path: "/resources/brand-guides",
    kind: "category",
    parent: "/resources",
    categoryLabel: "Brand Guides",
    title: "Brand and Product Guides",
    seoTitle: "Blouds Brand Guides | Gas Gang, Drizzle, Pouches, Backwoods",
    metaDescription:
      "Blouds Dispensary brand guides for Gas Gang, Drizzle, ZYN, Velo, Pablo, Killa, Backwoods, grabba, and current non-flower product names.",
    h1: "Brand Guides for the Blouds Shelf",
    excerpt:
      "Gas Gang, Drizzle, nicotine pouches, Backwoods, and grabba get direct Brampton guide pages.",
    primaryKeyword: "Blouds brand guides",
    supportingKeywords: ["Gas Gang Brampton", "Drizzle Switch Brampton", "Backwoods Brampton", "grabba Brampton"],
    searchIntent: "Find current Blouds product-brand guide pages.",
    author: "menu",
    datePublished: updated,
    dateModified: updated,
    image: { src: "/banners/Blouds_THC_Vape.webp", alt: "Blouds brand guide" },
    intro: [
      "Brand-led pages make Blouds feel like a real current menu, not a flower-only site. This section is for product names already supported in the data.",
    ],
    sections: [
      {
        heading: "Specific Names Win Specific Searches",
        body: [
          "Gas Gang, Drizzle, ZYN, Velo, Pablo, Killa, Backwoods, and grabba are sharper than plain category copy. The resource centre gives them clean pages without inventing unsupported brands.",
        ],
      },
    ],
    commercialLinks: [
      { label: "Gas Gang and Drizzle vapes", href: "/resources/brand-guides/gas-gang-drizzle-vapes" },
      { label: "Nicotine pouches", href: "/resources/nicotine-pouches" },
      { label: "Backwoods and grabba", href: "/resources/native-smokes/backwoods-grabba-guide" },
    ],
    related: ["/resources/vape-guides", "/resources/native-smokes", "/resources/menu-guide"],
  },
  {
    path: "/resources/brand-guides/gas-gang-drizzle-vapes",
    kind: "article",
    parent: "/resources/brand-guides",
    categoryLabel: "Vape Brands",
    title: "Gas Gang and Drizzle Vape Guide",
    seoTitle: "Gas Gang and Drizzle Vapes | Blouds Dispensary Brampton",
    metaDescription:
      "Blouds Dispensary guide for Gas Gang Dispo Vape 1G, 2g Gas Gang Vol.3 Hybrid, and Drizzle Switch 3in1 / 2G from the current vape disposable shelf.",
    h1: "Gas Gang and Drizzle Vapes at Blouds",
    excerpt:
      "A direct Queen Street W guide for Gas Gang Dispo Vape 1G, 2g Gas Gang Vol.3 Hybrid, and Drizzle Switch 3in1 / 2G.",
    primaryKeyword: "Gas Gang vapes Brampton",
    supportingKeywords: ["Drizzle Switch Brampton", "Gas Gang disposable vape", "Blouds vape disposables"],
    searchIntent: "Compare named vape products at Blouds Dispensary.",
    author: "menu",
    datePublished: updated,
    dateModified: updated,
    image: { src: "/banners/Blouds_THC_Vape.webp", alt: "Gas Gang and Drizzle vapes at Blouds" },
    intro: [
      "The current vape disposable data supports a real brand section: Gas Gang Dispo Vape 1G at $45, 2g Gas Gang Vol.3 Hybrid at $50, and Drizzle Switch 3in1 / 2G at $50.",
    ],
    sections: [
      {
        heading: "Current Listed Vape Names",
        body: ["These names are shopper-facing search terms, not internal tags. They belong in a dedicated Blouds vape guide."],
        bullets: [
          "Gas Gang Dispo Vape 1G - $45",
          "2g Gas Gang Vol.3 Hybrid - $50",
          "Drizzle Switch 3in1 / 2G - $50",
        ],
      },
    ],
    commercialLinks: [{ label: "Shop vape disposables", href: "/items/vape-disposables" }],
    related: ["/resources/vape-guides", "/resources/menu-guide", "/resources/value-guides"],
  },
  {
    path: "/resources/vape-guides",
    kind: "category",
    parent: "/resources",
    categoryLabel: "Vape Guides",
    title: "THC Vape and Disposable Guides",
    seoTitle: "Blouds Vape Guides | Gas Gang, Drizzle, THC Vapes",
    metaDescription:
      "Blouds vape guides for THC vapes, vape disposables, Gas Gang, Drizzle, vape pens, and current Brampton menu browsing.",
    h1: "Vape Guides: Give Gas Gang and Drizzle Room",
    excerpt:
      "Vape shoppers search category and brand. Blouds should answer both.",
    primaryKeyword: "vapes Brampton",
    supportingKeywords: ["THC vapes Brampton", "Gas Gang vapes", "Drizzle vapes"],
    searchIntent: "Browse Blouds vape shopping guidance.",
    author: "menu",
    datePublished: updated,
    dateModified: updated,
    image: { src: "/banners/Blouds_Nic_Vape.webp", alt: "Blouds vape guide" },
    intro: ["The vape section keeps THC vapes, vape disposables, Gas Gang, and Drizzle easy to compare for Brampton shoppers."],
    sections: [{ heading: "Brand Searches Belong Beside Category Searches", body: ["The shopper might type THC vapes, Gas Gang, or Drizzle. Each should land close to the current vape category."] }],
    commercialLinks: [
      { label: "THC vapes", href: "/items/vapes" },
      { label: "Vape disposables", href: "/items/vape-disposables" },
    ],
    related: ["/resources/brand-guides/gas-gang-drizzle-vapes", "/resources/menu-guide"],
  },
  {
    path: "/resources/nicotine-pouches",
    kind: "article",
    parent: "/resources/native-smokes",
    categoryLabel: "Nicotine Pouches",
    title: "Nicotine Pouches Guide",
    seoTitle: "Nicotine Pouches, ZYN, Velo, Pablo, Killa | Blouds Brampton",
    metaDescription:
      "Blouds Dispensary nicotine pouch guide for ZYN and nicotine pouches with Velo, Pablo, and Killa from the current cigarette category.",
    h1: "Nicotine Pouches: ZYN, Velo, Pablo, Killa",
    excerpt:
      "A current Queen Street W pouch guide for ZYN and the Velo, Pablo, Killa pouch listing.",
    primaryKeyword: "nicotine pouches Brampton",
    supportingKeywords: ["ZYN Brampton", "Velo Pablo Killa Brampton", "Blouds nicotine pouches"],
    searchIntent: "Find current nicotine pouch names at Blouds.",
    author: "menu",
    datePublished: updated,
    dateModified: updated,
    image: { src: "/banners/Blouds_Cigarettes.webp", alt: "Blouds nicotine pouch guide" },
    intro: [
      "The current cigarette category includes ZYN nicotine pouches and a nicotine pouch listing naming Velo, Pablo, and Killa at $20.",
    ],
    sections: [
      {
        heading: "Current Listed Pouch Names",
        body: ["Pouch shoppers search brand names. Blouds can answer those names directly and point the click back to cigarettes."],
        bullets: ["ZYN nicotine pouches", "Nicotine pouches, Velo, Pablo, Killa - $20"],
      },
    ],
    commercialLinks: [{ label: "Shop cigarettes and pouches", href: "/items/cigarettes" }],
    related: ["/resources/native-smokes", "/resources/native-smokes/backwoods-grabba-guide"],
  },
  {
    path: "/resources/native-smokes",
    kind: "category",
    parent: "/resources",
    categoryLabel: "Native Smokes",
    title: "Native Smokes and Cigarette Guides",
    seoTitle: "Native Smokes, Cigarettes, Pouches, Backwoods | Blouds Brampton",
    metaDescription:
      "Blouds Dispensary native smokes guide for cigarettes, nicotine pouches, Backwoods, grabba, Canadian, Canadian Goose, Nexus, Putters, Time, and more.",
    h1: "Native Smokes, Cigarettes, Pouches, Backwoods",
    excerpt:
      "Cigarettes, pouches, Backwoods, grabba, and native smoke searches get their own Brampton section.",
    primaryKeyword: "native cigarettes Brampton",
    supportingKeywords: ["Backwoods Brampton", "grabba Brampton", "ZYN Brampton", "Canadian cigarettes Brampton"],
    searchIntent: "Find smoke-shelf product names and current category links.",
    author: "menu",
    datePublished: updated,
    dateModified: updated,
    image: { src: "/banners/Blouds_Cigarettes.webp", alt: "Blouds Native smokes guide" },
    intro: [
      "Blouds can speak to the smoke shelf with real menu language: Canadian, Canadian Classics, Canadian Goose, Nexus, Putters, Time, ZYN, Velo, Pablo, Killa, Backwoods, grabba, and grabba shaker.",
    ],
    sections: [
      {
        heading: "Current Smoke-Shelf Terms",
        body: ["These are product-name and category searches shoppers actually use around Brampton and Queen Street W."],
      },
    ],
    commercialLinks: [
      { label: "Nicotine pouches guide", href: "/resources/nicotine-pouches" },
      { label: "Backwoods and grabba guide", href: "/resources/native-smokes/backwoods-grabba-guide" },
      { label: "Shop cigarettes and pouches", href: "/items/cigarettes" },
    ],
    related: ["/resources/nicotine-pouches", "/resources/native-smokes/backwoods-grabba-guide", "/resources/menu-guide"],
  },
  {
    path: "/resources/native-smokes/backwoods-grabba-guide",
    kind: "article",
    parent: "/resources/native-smokes",
    categoryLabel: "Backwoods and Grabba",
    title: "Backwoods and Grabba Guide",
    seoTitle: "Backwoods and Grabba Guide | Blouds Dispensary Brampton",
    metaDescription:
      "Blouds Dispensary guide for Backwoods assorted flavors, new Backwoods flavors, grabba, and grabba shaker from the current cigarette category.",
    h1: "Backwoods and Grabba at Blouds",
    excerpt:
      "Backwoods assorted flavors, new Backwoods flavors, grabba, and grabba shaker get a direct Brampton guide.",
    primaryKeyword: "Backwoods and grabba Brampton",
    supportingKeywords: ["Backwoods Queen Street", "grabba Brampton", "grabba shaker"],
    searchIntent: "Find current Backwoods and grabba names at Blouds.",
    author: "menu",
    datePublished: updated,
    dateModified: updated,
    image: { src: "/banners/Blouds_Cigarettes.webp", alt: "Blouds Backwoods and grabba guide" },
    intro: [
      "The current smoke shelf lists grabba at $5, grabba shaker at $19, Backwoods assorted flavors at $20, and new Backwoods flavors at $25.",
    ],
    sections: [
      {
        heading: "Current Listed Smoke Add-Ons",
        body: ["Backwoods and grabba deserve product-name copy because that is how shoppers ask for them."],
        bullets: [
          "Grabba - $5",
          "Grabba Shaker RedRose / Red Herring - $19",
          "Backwoods Assorted Flavors - $20",
          "New Backwoods Flavors - $25",
        ],
      },
    ],
    commercialLinks: [{ label: "Shop cigarettes and smoke add-ons", href: "/items/cigarettes" }],
    related: ["/resources/native-smokes", "/resources/nicotine-pouches"],
  },
  {
    path: "/resources/flower-guides",
    kind: "category",
    parent: "/resources",
    categoryLabel: "Flower Guides",
    title: "Brampton Flower Guides",
    seoTitle: "Blouds Flower Guides | Exotic, Premium, AAA+, AA, Budget",
    metaDescription:
      "Blouds Dispensary flower guides for Exotic, Premium, AAA+, AA, Budget, Queen Street W Brampton shoppers, and value menu browsing.",
    h1: "Flower Guides: Keep the Tiers Clean",
    excerpt:
      "Flower tiers stay important while non-flower products get their own sections.",
    primaryKeyword: "Brampton flower guide",
    supportingKeywords: ["Exotic flower Brampton", "Budget flower Brampton", "cheap weed Brampton"],
    searchIntent: "Compare Blouds flower tiers.",
    author: "menu",
    datePublished: updated,
    dateModified: updated,
    image: { src: "/banners/Blouds_Exotic.webp", alt: "Blouds flower guide" },
    intro: ["Use Exotic, Premium, AAA+, AA, and Budget for flower decisions, then use separate sections for Gas Gang, Drizzle, pouches, Backwoods, grabba, edibles, and pre-rolls."],
    sections: [{ heading: "Tier First, Product Second", body: ["A good flower guide helps shoppers choose the spend section before reading individual product cards."] }],
    commercialLinks: [
      { label: "Exotic", href: "/exotic" },
      { label: "Premium", href: "/premium" },
      { label: "AAA+", href: "/aaa" },
      { label: "AA", href: "/aa" },
      { label: "Budget", href: "/budget" },
    ],
    related: ["/resources/value-guides", "/resources/menu-guide"],
  },
  {
    path: "/resources/edibles-guides",
    kind: "category",
    parent: "/resources",
    categoryLabel: "Edibles",
    title: "Edibles Guides",
    seoTitle: "Blouds Edibles Guides | Brampton Cannabis",
    metaDescription:
      "Blouds Dispensary edibles guides for gummies, chocolates, drinks, package details, and current Queen Street W menu browsing.",
    h1: "Edibles Guides for Brampton Shoppers",
    excerpt:
      "Edibles get their own format-first guide, separate from flower and vape language.",
    primaryKeyword: "edibles Brampton",
    supportingKeywords: ["Blouds edibles", "Brampton gummies", "cannabis edibles Queen Street"],
    searchIntent: "Browse edible shopping guidance.",
    author: "menu",
    datePublished: updated,
    dateModified: updated,
    image: { src: "/banners/Blouds_Edibles.webp", alt: "Blouds edibles guide" },
    intro: ["Edible shoppers need package and format language, not flower-tier language."],
    sections: [{ heading: "Format First", body: ["Keep gummies, chocolates, drinks, and other edibles in the edibles section so shoppers can compare similar products."] }],
    commercialLinks: [{ label: "Shop edibles", href: "/items/edibles" }],
    related: ["/resources/menu-guide", "/resources/vape-guides"],
  },
  {
    path: "/resources/pre-roll-guides",
    kind: "category",
    parent: "/resources",
    categoryLabel: "Pre-Rolls",
    title: "Pre-Roll Guides",
    seoTitle: "Blouds Pre-Roll Guides | Brampton Cannabis",
    metaDescription:
      "Blouds Dispensary pre-roll guides for Queen Street W quick trips, pre-roll category browsing, and current menu links.",
    h1: "Pre-Roll Guides for Queen Street Quick Trips",
    excerpt:
      "Pre-rolls are a quick-trip section beside flower, vapes, edibles, cigarettes, and accessories.",
    primaryKeyword: "pre-rolls Brampton",
    supportingKeywords: ["Blouds pre-rolls", "Queen Street pre-rolls", "Brampton cannabis pre-rolls"],
    searchIntent: "Browse pre-roll shopping guidance.",
    author: "menu",
    datePublished: updated,
    dateModified: updated,
    image: { src: "/banners/Blouds_Pre-Rolls.webp", alt: "Blouds pre-roll guide" },
    intro: ["Pre-roll shoppers usually want a faster path than flower shoppers. Keep that section clean and direct."],
    sections: [{ heading: "Ready-To-Smoke Path", body: ["Compare pre-rolls by product name, pack format, and category detail before adding edibles, vapes, or smokes to the same visit."] }],
    commercialLinks: [{ label: "Shop pre-rolls", href: "/items/prerolls" }],
    related: ["/resources/menu-guide", "/resources/flower-guides"],
  },
  {
    path: "/resources/value-guides",
    kind: "category",
    parent: "/resources",
    categoryLabel: "Value Guides",
    title: "Value Guides",
    seoTitle: "Blouds Value Guides | Cheap Weed, Vapes, Pouches, Backwoods",
    metaDescription:
      "Blouds value guides for Budget flower, Gas Gang, Drizzle, nicotine pouches, Backwoods, grabba, and current menu comparisons.",
    h1: "Value Guides: Compare Inside the Right Shelf",
    excerpt:
      "Cheap weed, Gas Gang, Drizzle, pouches, Backwoods, and grabba all have different value logic.",
    primaryKeyword: "cheap weed Brampton",
    supportingKeywords: ["Budget flower Brampton", "Gas Gang price Brampton", "nicotine pouches price Brampton"],
    searchIntent: "Compare value across Blouds product sections.",
    author: "menu",
    datePublished: updated,
    dateModified: updated,
    image: { src: "/banners/Blouds_Budget.webp", alt: "Blouds value guide" },
    intro: ["Value pages work better when they compare inside the right shelf instead of turning every product into flower math."],
    sections: [{ heading: "Product Names Carry Price Intent", body: ["Gas Gang at $45/$50, Drizzle at $50, pouches at $20, grabba at $5, and Backwoods at $20/$25 all support direct value language."] }],
    commercialLinks: [
      { label: "Budget flower", href: "/budget" },
      { label: "Vape disposables", href: "/items/vape-disposables" },
      { label: "Cigarettes and pouches", href: "/items/cigarettes" },
    ],
    related: ["/resources/brand-guides/gas-gang-drizzle-vapes", "/resources/nicotine-pouches"],
  },
  {
    path: "/resources/local-guides",
    kind: "category",
    parent: "/resources",
    categoryLabel: "Local Guides",
    title: "Queen Street W and Brampton Local Guides",
    seoTitle: "Queen Street W Brampton Cannabis Guides | Blouds Dispensary",
    metaDescription:
      "Blouds local cannabis guides for Queen Street W, Downtown Brampton, Main Street, Kennedy Road, Bramalea, Peel Region, and Brampton Transit shoppers.",
    h1: "Queen Street W and Brampton Local Guides",
    excerpt:
      "Local guides for shoppers who start with the area, then need flower, vapes, pouches, Backwoods, grabba, edibles, or pre-rolls.",
    primaryKeyword: "weed dispensary Brampton",
    supportingKeywords: ["Queen Street cannabis", "Downtown Brampton dispensary", "Brampton cannabis store"],
    searchIntent: "Plan a Blouds local visit.",
    author: "local",
    datePublished: updated,
    dateModified: updated,
    image: { src: "/banners/Blouds_Welcome_Banner.webp", alt: "Blouds Brampton local guide" },
    intro: ["Queen Street W, Downtown Brampton, Main Street, Kennedy Road, Bramalea, Peel Region, and Brampton Transit searches need local context plus a clear next shelf."],
    sections: [{ heading: "Local First, Shelf Second", body: ["Use the store page for the location anchor, then the resource hub for the actual shopping section."] }],
    commercialLinks: [
      { label: "Queen Street visit guide", href: "/resources/local-guides/queen-street-brampton-visit-guide" },
      { label: "Store page", href: SITE.storePage },
    ],
    related: ["/resources/menu-guide", "/resources/value-guides"],
  },
  {
    path: "/resources/local-guides/queen-street-brampton-visit-guide",
    kind: "article",
    parent: "/resources/local-guides",
    categoryLabel: "Visit Guide",
    title: "Queen Street W Brampton Visit Guide",
    seoTitle: "Queen Street W Brampton Visit Guide | Blouds Dispensary",
    metaDescription:
      "Visit guide for Blouds Dispensary at 117 Queen St W in Brampton with local menu links for flower, vapes, pouches, Backwoods, grabba, edibles, pre-rolls, and cigarettes.",
    h1: "Queen Street W Brampton Visit Guide",
    excerpt:
      "Start with the Queen Street W location, then pick the shelf that fits the trip.",
    primaryKeyword: "weed dispensary Queen Street Brampton",
    supportingKeywords: ["Blouds Brampton", "117 Queen St W cannabis", "Downtown Brampton weed store"],
    searchIntent: "Plan a local visit to Blouds Dispensary.",
    author: "local",
    datePublished: updated,
    dateModified: updated,
    image: { src: "/banners/Blouds_Welcome_Banner.webp", alt: "Blouds Queen Street visit guide" },
    intro: [
      "Blouds Dispensary is listed at 117 Queen St W in Brampton. Once the local stop is clear, choose the shelf: flower, Gas Gang, Drizzle, ZYN, Velo, Pablo, Killa, Backwoods, grabba, edibles, pre-rolls, concentrates, or accessories.",
    ],
    sections: [
      {
        heading: "Nearby Area Terms",
        body: [
          "The local language around Blouds includes Queen Street W, Downtown Brampton, Main Street, Kennedy Road, Bramalea, Peel Region, and Brampton Transit.",
        ],
      },
    ],
    commercialLinks: [
      { label: "Store page", href: SITE.storePage },
      { label: "Menu guide", href: "/resources/menu-guide" },
    ],
    related: ["/resources/local-guides", "/resources/menu-guide"],
  },
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function normalizeResourcePath(path: string) {
  const clean = path.trim().replace(/^\/+|\/+$/g, "");
  return clean ? `/resources/${clean.replace(/^resources\/?/, "")}` : "/resources";
}

export function slugFromPath(path: string) {
  return path.replace(/^\/resources\/?/, "");
}

export function getResourcePageBySlug(slug?: string[] | string) {
  const slugPath = Array.isArray(slug) ? slug.join("/") : slug || "";
  const path = normalizeResourcePath(slugPath);
  return RESOURCE_PAGES.find((page) => page.path === path);
}

export function getStaticResourceParams() {
  return RESOURCE_PAGES.filter((page) => page.path !== "/resources").map((page) => ({
    slug: slugFromPath(page.path).split("/"),
  }));
}

export function getCategoryPages() {
  return RESOURCE_PAGES.filter((page) => page.parent === "/resources");
}

export function getChildPages(parentPath: string) {
  return RESOURCE_PAGES.filter((page) => page.parent === parentPath);
}

export function getFeaturedPages() {
  const featured = [
    "/resources/brand-guides/gas-gang-drizzle-vapes",
    "/resources/nicotine-pouches",
    "/resources/native-smokes/backwoods-grabba-guide",
    "/resources/menu-guide",
    "/resources/local-guides/queen-street-brampton-visit-guide",
    "/resources/value-guides",
  ];
  return featured.map((path) => RESOURCE_PAGES.find((page) => page.path === path)).filter(Boolean) as ResourcePage[];
}

export function getRelatedPages(page: ResourcePage) {
  return page.related.map((path) => RESOURCE_PAGES.find((item) => item.path === path)).filter(Boolean) as ResourcePage[];
}
