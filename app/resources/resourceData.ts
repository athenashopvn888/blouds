export type ResourceLink = {
  label: string;
  href: string;
  description?: string;
};

export type ResourceCard = {
  title: string;
  href: string;
  description: string;
  category: string;
};

export type ResourceSection = {
  heading: string;
  body: string[];
};

export type ResourcePage = {
  route: string;
  parentRoute?: string;
  eyebrow: string;
  title: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  summary: string;
  heroImage: string;
  sections: ResourceSection[];
  quickLinks: ResourceLink[];
  cards?: ResourceCard[];
  relatedRoutes?: string[];
};

export const RESOURCE_BASE_URL = "https://www.bloudsdispensary.ca";
export const RESOURCE_HOME_ROUTE = "/resources";
export const RESOURCE_BANNER = "/banners/Blouds_Welcome_Banner.webp";

const menuLinks: ResourceLink[] = [
  { label: "Flower tiers", href: "/#menu", description: "Start with Exotic, Premium, AAA+, AA, or Budget." },
  { label: "Edibles", href: "/items/edibles", description: "Open current edible listings." },
  { label: "THC vapes", href: "/items/vapes", description: "Browse the THC vape category." },
  { label: "Nic vapes", href: "/items/vape-disposables", description: "Check the nic vape category where listed." },
  { label: "Cigarettes", href: "/items/cigarettes", description: "Review current cigarette and tobacco listings." },
  { label: "Magic Stuff", href: "/items/magic", description: "Open current specialty-product listings." },
];

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    route: "/resources",
    eyebrow: "Blouds resources",
    title: "Blouds Resource Lounge",
    h1: "Queen Street W Resource Lounge",
    seoTitle: "Blouds Resource Lounge | Brampton Cannabis Guides",
    metaDescription:
      "Blouds Dispensary resources for Queen Street W visits, flower tiers, edibles, vapes, native smokes, Magic Stuff, and 24-hour Brampton shopping.",
    summary:
      "A compact guide set for adults 19+ planning a Blouds visit at 117 Queen St W in downtown Brampton.",
    heroImage: RESOURCE_BANNER,
    sections: [
      {
        heading: "Built around the Queen Street W stop",
        body: [
          "Blouds is not a generic cannabis menu floating in Brampton. The useful starting point is the real visit: 117 Queen St W, downtown Brampton, open 24 hours, with flower tiers and specialty categories that shoppers often compare before walking in.",
          "These resources keep the permanent guidance separate from current inventory. The guides explain how to use the menu; the live category pages carry the product names, prices, and availability that can move.",
        ],
      },
      {
        heading: "Choose the lane before the counter",
        body: [
          "Some shoppers want top-shelf flower. Some want a value ounce. Some are looking for edibles, THC vapes, nic vapes, native smokes, Magic Stuff, or a fast late-night visit. This Resource Lounge gives each lane a clear place to start.",
        ],
      },
    ],
    quickLinks: menuLinks,
    cards: [
      {
        title: "Queen Street W Visit Guide",
        href: "/resources/queen-street-w-visit-guide",
        description: "Address, ID, menu prep, and downtown Brampton visit notes.",
        category: "Visit planning",
      },
      {
        title: "Downtown Brampton Menu Map",
        href: "/resources/downtown-brampton-menu-map",
        description: "A fast map of flower, edibles, vapes, pre-rolls, concentrates, cigarettes, and Magic Stuff.",
        category: "Menu map",
      },
      {
        title: "Blouds Flower Tier Guide",
        href: "/resources/blouds-flower-tier-guide",
        description: "How Exotic, Premium, AAA+, AA, and Budget fit different flower trips.",
        category: "Flower",
      },
      {
        title: "24-Hour Brampton Shopping Guide",
        href: "/resources/24-hour-brampton-dispensary-guide",
        description: "Late-night and early-morning menu planning without guessing current stock.",
        category: "Open 24 hours",
      },
      {
        title: "Edibles and Vape Guide",
        href: "/resources/edibles-vapes-guide",
        description: "Separate edibles, THC vape, nic vape, and support-gear decisions.",
        category: "Formats",
      },
      {
        title: "Native Smokes Brampton Guide",
        href: "/resources/native-smokes-brampton-guide",
        description: "Current cigarette, pouch, Grabba, and Backwoods menu notes from the Blouds data.",
        category: "Cigarettes",
      },
      {
        title: "Magic Stuff Menu Guide",
        href: "/resources/magic-stuff-menu-guide",
        description: "A menu-only guide to specialty-product formats and label checks.",
        category: "Specialty",
      },
    ],
    relatedRoutes: [
      "/resources/queen-street-w-visit-guide",
      "/resources/downtown-brampton-menu-map",
      "/resources/blouds-flower-tier-guide",
    ],
  },
  {
    route: "/resources/queen-street-w-visit-guide",
    parentRoute: "/resources",
    eyebrow: "Visit planning",
    title: "Queen Street W Visit Guide",
    h1: "Queen Street W Cannabis Visit Guide",
    seoTitle: "Queen Street W Cannabis Visit Guide | Blouds Dispensary",
    metaDescription:
      "Plan a Blouds Dispensary visit at 117 Queen St W in Brampton with menu links, ID reminders, 24-hour visit notes, and category shortcuts.",
    summary:
      "Use this before a Blouds trip: address, timing, ID, category shortcuts, and the cleanest path into the current menu.",
    heroImage: "/banners/Blouds_Contact_Us.webp",
    sections: [
      {
        heading: "Start with the real address",
        body: [
          "Blouds Dispensary is at 117 Queen St W in Brampton. If the trip is about a specific item, open the category page first, then use the contact page or staff for anything that could change before you arrive.",
          "Bring valid government ID. The 24-hour schedule makes timing flexible, but it does not change the adult-use rules.",
        ],
      },
      {
        heading: "Pick one main lane and one backup",
        body: [
          "Flower shoppers usually start with a tier: Exotic, Premium, AAA+, AA, or Budget. Format shoppers usually start with edibles, THC vapes, nic vapes, pre-rolls, concentrates, cigarettes, accessories, or Magic Stuff.",
          "A backup lane helps when a specific strain, flavour, brand, or format rotates. Current product details should always come from the live menu.",
        ],
      },
      {
        heading: "Downtown Brampton rhythm",
        body: [
          "Queen Street W is a practical local anchor for quick stops, late-night runs, and shoppers coming from nearby Brampton or Peel routes. This guide keeps the trip simple instead of turning every visit into a full-menu scroll.",
        ],
      },
    ],
    quickLinks: [
      { label: "Store page", href: "/weed-dispensary-brampton/", description: "Location and store details." },
      { label: "Contact", href: "/contact", description: "Phone and contact options." },
      { label: "Menu", href: "/#menu", description: "Start with flower tiers and category banners." },
    ],
    relatedRoutes: [
      "/resources/24-hour-brampton-dispensary-guide",
      "/resources/downtown-brampton-menu-map",
      "/resources/native-smokes-brampton-guide",
    ],
  },
  {
    route: "/resources/downtown-brampton-menu-map",
    parentRoute: "/resources",
    eyebrow: "Menu map",
    title: "Downtown Brampton Menu Map",
    h1: "Downtown Brampton Cannabis Menu Map",
    seoTitle: "Downtown Brampton Cannabis Menu Map | Blouds",
    metaDescription:
      "Use the Blouds Dispensary menu map to compare flower tiers, edibles, THC vapes, nic vapes, pre-rolls, concentrates, native smokes, and Magic Stuff.",
    summary:
      "A plain-language map for deciding where to click first on the Blouds menu.",
    heroImage: "/banners/Blouds_Edibles_Concentrates_More.webp",
    sections: [
      {
        heading: "Flower is tiered on purpose",
        body: [
          "Blouds separates flower into Exotic, Premium, AAA+, AA, and Budget. That structure helps shoppers compare price lane, potency range, and trip intent before opening product details.",
          "The tier name is a menu lane, not a promise that every product will feel the same. Use the product page for the strain, type, image, and current price.",
        ],
      },
      {
        heading: "Formats deserve their own shortcuts",
        body: [
          "Edibles, THC vapes, nic vapes, pre-rolls, concentrates, accessories, cigarettes, and Magic Stuff are different shopping decisions. Keeping them separate makes the Blouds menu faster for adults who already know the format they want.",
        ],
      },
      {
        heading: "Current pages carry current facts",
        body: [
          "Use resources for orientation. Use category pages for current product names, prices, and availability. When one item decides the trip, contact the store before leaving.",
        ],
      },
    ],
    quickLinks: menuLinks,
    relatedRoutes: [
      "/resources/blouds-flower-tier-guide",
      "/resources/edibles-vapes-guide",
      "/resources/magic-stuff-menu-guide",
    ],
  },
  {
    route: "/resources/blouds-flower-tier-guide",
    parentRoute: "/resources",
    eyebrow: "Flower tiers",
    title: "Blouds Flower Tier Guide",
    h1: "Blouds Brampton Flower Tier Guide",
    seoTitle: "Blouds Flower Tier Guide | Brampton Cannabis",
    metaDescription:
      "Compare Blouds Dispensary flower tiers in Brampton, including Exotic, Premium, AAA+, AA, and Budget cannabis flower menu paths.",
    summary:
      "A tier-by-tier guide for deciding whether the visit is about premium flower, balanced value, or the lowest-price lane.",
    heroImage: "/banners/Blouds_Feature_Products.webp",
    sections: [
      {
        heading: "Exotic and Premium",
        body: [
          "Exotic and Premium are the quality-first lanes. Use them when the trip is about top-shelf flower, stronger shelf presence, and a more selective browse.",
          "The current product page still matters. Strain names, type labels, images, and prices can rotate.",
        ],
      },
      {
        heading: "AAA+ and AA",
        body: [
          "AAA+ and AA sit in the practical middle: shoppers can compare price, tier, and type without jumping straight from premium flower to budget flower.",
          "These lanes are useful when the visit needs a balance between price and menu strength.",
        ],
      },
      {
        heading: "Budget",
        body: [
          "Budget is the value lane for shoppers who want the lowest-price flower path first. Open the Budget page for current strain names and posted menu pricing.",
        ],
      },
    ],
    quickLinks: [
      { label: "Exotic", href: "/exotic", description: "Quality-first flower lane." },
      { label: "Premium", href: "/premium", description: "Premium flower lane." },
      { label: "AAA+", href: "/aaa", description: "Balanced higher-tier lane." },
      { label: "AA", href: "/aa", description: "Daily-driver lane." },
      { label: "Budget", href: "/budget", description: "Value flower lane." },
    ],
    relatedRoutes: [
      "/resources/downtown-brampton-menu-map",
      "/resources/24-hour-brampton-dispensary-guide",
      "/resources/queen-street-w-visit-guide",
    ],
  },
  {
    route: "/resources/24-hour-brampton-dispensary-guide",
    parentRoute: "/resources",
    eyebrow: "Open 24 hours",
    title: "24-Hour Brampton Dispensary Guide",
    h1: "24-Hour Brampton Dispensary Guide",
    seoTitle: "24-Hour Brampton Dispensary Guide | Blouds",
    metaDescription:
      "Plan a late-night or early-morning Blouds Dispensary visit in Brampton with category shortcuts, ID reminders, and current-menu checks.",
    summary:
      "For late-night and early-morning visits, keep the decision tight: category first, current page second, store confirmation when needed.",
    heroImage: "/banners/Blouds_Daily_Deals.webp",
    sections: [
      {
        heading: "Late-night visits need fewer tabs",
        body: [
          "When the visit happens outside normal retail hours, the useful move is choosing the category before you leave: flower tier, edibles, THC vape, nic vape, pre-rolls, concentrates, cigarettes, accessories, or Magic Stuff.",
        ],
      },
      {
        heading: "Use the live menu for anything specific",
        body: [
          "A guide can explain the route. It should not promise a specific strain, brand, flavour, or price will still be there. Open the live category and contact the store when one product decides the trip.",
        ],
      },
      {
        heading: "Still bring ID",
        body: [
          "Open 24 hours means the timing is flexible. It does not remove the need for valid government ID and adult 19+ shopping rules.",
        ],
      },
    ],
    quickLinks: [
      { label: "Menu", href: "/#menu", description: "Start with the main category flow." },
      { label: "FAQ", href: "/faq", description: "Common store questions." },
      { label: "Contact", href: "/contact", description: "Confirm details before visiting." },
    ],
    relatedRoutes: [
      "/resources/queen-street-w-visit-guide",
      "/resources/edibles-vapes-guide",
      "/resources/native-smokes-brampton-guide",
    ],
  },
  {
    route: "/resources/edibles-vapes-guide",
    parentRoute: "/resources",
    eyebrow: "Formats",
    title: "Edibles and Vape Guide",
    h1: "Brampton Edibles and Vape Guide at Blouds",
    seoTitle: "Brampton Edibles and Vape Guide | Blouds",
    metaDescription:
      "Compare Blouds Dispensary edibles, THC vapes, nic vapes, pre-rolls, accessories, and Queen Street W menu paths before visiting in Brampton.",
    summary:
      "A format-first guide for shoppers who want edibles, THC vapes, nic vapes, or support gear without starting from flower.",
    heroImage: "/banners/Blouds_THC_Vape.webp",
    sections: [
      {
        heading: "Edibles are a label-first category",
        body: [
          "The edibles category can include gummies, chocolates, drinks, and other packaged formats. Use the live product page for package size, listed amount, current price, and availability.",
          "This guide does not give dosing or consumption instructions. It is only a menu-navigation guide.",
        ],
      },
      {
        heading: "THC vapes and nic vapes are different lanes",
        body: [
          "THC vapes belong on the cannabis vape route. Nic vapes and nicotine products should be checked through the nic vape or cigarette-related menu lanes where they are listed.",
          "Keeping those lanes separate helps shoppers avoid mixing two different intents.",
        ],
      },
      {
        heading: "Accessories finish the trip",
        body: [
          "Papers, lighters, batteries, and other add-ons can be part of the same visit. If a format needs support gear, check the accessories page before heading to Queen Street W.",
        ],
      },
    ],
    quickLinks: [
      { label: "Edibles", href: "/items/edibles", description: "Gummies, chocolates, drinks, and packaged formats." },
      { label: "THC vapes", href: "/items/vapes", description: "Cannabis vape category." },
      { label: "Nic vapes", href: "/items/vape-disposables", description: "Nic vape category where listed." },
      { label: "Accessories", href: "/items/add-ons", description: "Support gear and add-ons." },
    ],
    relatedRoutes: [
      "/resources/downtown-brampton-menu-map",
      "/resources/24-hour-brampton-dispensary-guide",
      "/resources/magic-stuff-menu-guide",
    ],
  },
  {
    route: "/resources/native-smokes-brampton-guide",
    parentRoute: "/resources",
    eyebrow: "Cigarettes",
    title: "Native Smokes Brampton Guide",
    h1: "Native Smokes and Cigarette Guide in Brampton",
    seoTitle: "Native Smokes Brampton Guide | Blouds",
    metaDescription:
      "Review Blouds Dispensary cigarette, native smoke, nicotine pouch, Grabba, and Backwoods menu notes for adults 19+ in Brampton.",
    summary:
      "A Blouds-specific tobacco menu guide built from the current cigarette and nicotine-related product data.",
    heroImage: "/banners/Blouds_Cigarettes.webp",
    sections: [
      {
        heading: "Current cigarette brands in the menu data",
        body: [
          "The Blouds cigarette category lists Canadian Lights, Canadian Full, Canadian Menthol, Canadian Goose Full, Canadian Goose Lights, Canadian Classics Original, Canadian Classics Silver, Putters, Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full at $25 in the current data.",
          "The menu also lists 10 x Premium Mix Cigarettes at $3. Brand mix, pack/carton wording, and price can change, so use the live cigarette category before visiting.",
        ],
      },
      {
        heading: "Pouches, Grabba, and Backwoods",
        body: [
          "Current data includes nicotine pouches from Velo, Pablo, Killa, and Zyn, plus Grabba, Grabba Shaker, and Backwoods options. These are nicotine/tobacco-related products, so check the current category and ask staff when one item decides the trip.",
        ],
      },
      {
        heading: "Health boundary",
        body: [
          "Smoking and nicotine use carry serious health risks. This page is only for adult 19+ menu clarity and store navigation; it does not make health or safety claims.",
        ],
      },
    ],
    quickLinks: [
      { label: "Cigarettes", href: "/items/cigarettes", description: "Current cigarette and tobacco listings." },
      { label: "Accessories", href: "/items/add-ons", description: "Papers, lighters, and add-ons." },
      { label: "Contact", href: "/contact", description: "Ask before visiting for one specific product." },
    ],
    relatedRoutes: [
      "/resources/24-hour-brampton-dispensary-guide",
      "/resources/queen-street-w-visit-guide",
      "/resources/downtown-brampton-menu-map",
    ],
  },
  {
    route: "/resources/magic-stuff-menu-guide",
    parentRoute: "/resources",
    eyebrow: "Specialty",
    title: "Magic Stuff Menu Guide",
    h1: "Magic Stuff Menu Guide at Blouds",
    seoTitle: "Magic Stuff Menu Guide | Blouds Brampton",
    metaDescription:
      "A menu-navigation guide for Blouds Magic Stuff listings, specialty-product formats, package notes, and current category checks.",
    summary:
      "A careful guide to reading Magic Stuff and specialty-product listings by format, package, and current menu detail.",
    heroImage: "/banners/Blouds_Magic_Stuff.webp",
    sections: [
      {
        heading: "Use format first",
        body: [
          "The Magic Stuff category can include specialty products in formats such as chocolate, gummies, capsules, dried products, or other packaged items. The format tells you how the product is listed; it does not answer every question about the item.",
        ],
      },
      {
        heading: "Read the listing in layers",
        body: [
          "Check the product name, package amount, count, listed strength notation, image, and current price. If a number in the title is unclear, do not guess what it means. Use the product page and ask a direct question.",
        ],
      },
      {
        heading: "Important boundary",
        body: [
          "This page is menu-navigation information only. It does not provide dosing, consumption, medical, therapeutic, effect, safety, or legal advice.",
        ],
      },
    ],
    quickLinks: [
      { label: "Magic Stuff", href: "/items/magic", description: "Open current specialty-product listings." },
      { label: "Menu map", href: "/resources/downtown-brampton-menu-map", description: "Return to the category overview." },
      { label: "Contact", href: "/contact", description: "Ask when a listing is unclear." },
    ],
    relatedRoutes: [
      "/resources/downtown-brampton-menu-map",
      "/resources/edibles-vapes-guide",
      "/resources/queen-street-w-visit-guide",
    ],
  },
];

export const RESOURCE_PATHS = RESOURCE_PAGES.map((page) => page.route);

export function getResourceByRoute(route: string): ResourcePage | undefined {
  const normalized = route.replace(/\/$/, "") || RESOURCE_HOME_ROUTE;
  return RESOURCE_PAGES.find((page) => page.route === normalized);
}

export function getResourceBySlug(slug?: string[]): ResourcePage | undefined {
  if (!slug || slug.length === 0) return getResourceByRoute(RESOURCE_HOME_ROUTE);
  return getResourceByRoute(`/resources/${slug.join("/")}`);
}

export function getRelatedResources(page: ResourcePage): ResourcePage[] {
  return (page.relatedRoutes || [])
    .map((route) => getResourceByRoute(route))
    .filter((related): related is ResourcePage => Boolean(related));
}
