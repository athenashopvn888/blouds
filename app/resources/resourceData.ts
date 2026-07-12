export type ResourceArticle = {
  slug: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  summary: string;
  sections: { heading: string; body: string }[];
  quickLinks: { label: string; href: string }[];
};

export const RESOURCE_BANNER = "/banners/Blouds_Welcome_Banner.webp";
export const RESOURCE_CANONICAL = "https://www.bloudsdispensary.ca/resources";

export const RESOURCE_PAGES: ResourceArticle[] = [
  {
    slug: "queen-street-visit-guide",
    title: "Queen Street W Cannabis Visit Guide",
    metaDescription: "Plan a Blouds Dispensary visit at 117 Queen St W in downtown Brampton with cannabis menu, flower tiers, edibles, vapes, pre-rolls, cigarettes, and 24-hour shopping notes.",
    eyebrow: "Queen Street W",
    summary: "A downtown Brampton visit guide for shoppers heading to Blouds Dispensary at 117 Queen St W.",
    sections: [
      { heading: "Start With The Queen Street W Location", body: "Blouds Dispensary has a downtown Brampton address, so the resources should speak to Queen Street W shoppers, not generic cannabis traffic. This guide helps people check the menu, understand the category lanes, and arrive with valid 19+ ID." },
      { heading: "Use The Menu Before The Visit", body: "The fastest path is to decide whether the trip is about flower, edibles, vapes, pre-rolls, concentrates, cigarettes, or accessories. The resource hub gives Blouds a local menu map while the live category pages handle current stock." },
      { heading: "Built For 24-Hour Shopping", body: "Blouds is positioned as open 24 hours, which matters for downtown Brampton shoppers outside normal retail hours. The guide keeps late-night and early-morning visits easy to plan." },
      { heading: "Keep A Backup Lane", body: "Menu rotation is normal. Pick one primary lane and one backup before heading to Queen Street W, such as Premium flower plus pre-rolls, edibles plus vapes, or cigarettes plus accessories." },
    ],
    quickLinks: [
      { label: "Brampton visit page", href: "/weed-dispensary-brampton/" },
      { label: "Menu hub", href: "/#menu" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    slug: "downtown-brampton-menu-guide",
    title: "Downtown Brampton Cannabis Menu Guide",
    metaDescription: "Use the Blouds Dispensary downtown Brampton menu guide to compare flower tiers, edibles, THC vapes, pre-rolls, concentrates, native cigarettes, and accessories.",
    eyebrow: "Downtown menu",
    summary: "A local menu map for Blouds shoppers searching cannabis categories around downtown Brampton and Queen Street W.",
    sections: [
      { heading: "Group The Menu By Intent", body: "Some shoppers want exotic flower, some want cheap weed, some want edibles, and some are only looking for native cigarettes in Brampton. This guide groups the paths by intent so Blouds feels like a useful local menu hub." },
      { heading: "Flower Tiers Stay Clear", body: "Exotic, Premium, AAA+, AA, and Budget are stronger as separate lanes because each tier serves a different shopper. That helps visitors compare quality and price before choosing a flower page." },
      { heading: "Formats Stay Fast", body: "Edibles, THC vapes, nic vapes, pre-rolls, concentrates, accessories, and cigarettes are separate lanes. A shopper who searches for edibles in Brampton should not have to scroll through every flower section first." },
      { heading: "Local Detail Without Guesswork", body: "The guide can support downtown Brampton cannabis menu searches without inventing awards, fixed brands, or live inventory claims. It explains the path and sends shoppers to the right live page." },
    ],
    quickLinks: [
      { label: "Edibles", href: "/items/edibles" },
      { label: "THC vapes", href: "/items/vapes" },
      { label: "Pre-rolls", href: "/items/prerolls" },
    ],
  },
  {
    slug: "blouds-flower-tier-guide",
    title: "Blouds Brampton Flower Tier Guide",
    metaDescription: "Compare Blouds Dispensary flower tiers in Brampton, including Exotic, Premium, AAA+, AA, and Budget cannabis flower menu paths.",
    eyebrow: "Flower tiers",
    summary: "A Queen Street W flower guide for shoppers comparing top-shelf, middle-tier, and value cannabis flower at Blouds.",
    sections: [
      { heading: "Exotic And Premium Flower", body: "Exotic and Premium should speak to shoppers searching top-shelf cannabis flower in Brampton. These lanes are about quality-first browsing, stronger shelf presence, and a more premium menu experience." },
      { heading: "AAA+ And AA Flower", body: "AAA+ and AA are the comparison lanes for shoppers who want value and quality balanced together. They help the Blouds menu feel organized instead of forcing every flower option into one long list." },
      { heading: "Budget Flower", body: "Budget is the practical value lane for shoppers searching cheap weed in Brampton. It points to current Budget flower options while avoiding fixed product promises that could go stale." },
      { heading: "Why It Helps The Store", body: "A tier guide gives Blouds better keyword coverage for Brampton flower searches and gives visitors a cleaner way to choose before walking into the Queen Street W store." },
    ],
    quickLinks: [
      { label: "Exotic", href: "/exotic" },
      { label: "AA", href: "/aa" },
      { label: "Budget", href: "/budget" },
    ],
  },
  {
    slug: "late-night-queen-street-shopping",
    title: "Late-Night Queen Street W Cannabis Guide",
    metaDescription: "A late-night Blouds Dispensary guide for downtown Brampton cannabis shoppers looking for 24-hour flower, edibles, vapes, pre-rolls, cigarettes, and accessories.",
    eyebrow: "Late night",
    summary: "A night-shopping guide for Blouds visitors checking the Queen Street W menu outside regular retail hours.",
    sections: [
      { heading: "Decide The Category First", body: "Late-night shoppers usually want a clean decision. Flower tiers, pre-rolls, THC vapes, edibles, concentrates, cigarettes, and accessories should all be one click away from the resource hub." },
      { heading: "Useful For Downtown Brampton", body: "Queen Street W is a practical local anchor. The guide helps people searching late-night cannabis in Brampton or a 24-hour dispensary near downtown Brampton choose a menu path quickly." },
      { heading: "Keep One Backup", body: "If a specific strain, edible, vape, or cigarette option rotates, a backup lane keeps the visit from stalling. Choose one main category and one backup before heading over." },
      { heading: "Bring ID", body: "The 24-hour schedule does not change adult-use rules. Bring valid government ID and use the live menu pages for current product details." },
    ],
    quickLinks: [
      { label: "Visit page", href: "/weed-dispensary-brampton/" },
      { label: "FAQ", href: "/faq" },
      { label: "Menu", href: "/#menu" },
    ],
  },
  {
    slug: "native-smokes-guide",
    title: "Native Cigarettes Brampton Guide",
    metaDescription: "Find Blouds Dispensary native cigarettes in Brampton with brands and prices including Canadian, Canadian Goose, Canadian Classics, Putters, Nexus, Time, Backwoods, Grabba, and 10 x Premium Mix.",
    eyebrow: "Cigarettes",
    summary: "A dedicated native cigarettes Brampton resource with real cigarette brands, listed prices, and tobacco add-ons for Queen Street W shoppers.",
    sections: [
      { heading: "Cigarette Brands On The Menu", body: "The Blouds cigarette lane lists Canadian Lights, Canadian Full, Canadian Menthol, Canadian Goose Full, Canadian Goose Lights, Canadian Classics Original, Canadian Classics Silver, Putters, Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full." },
      { heading: "Listed Cigarette Prices", body: "Most native cigarette packs in the current menu are listed at $25 each. The 10 x Premium Mix Cigarettes item is listed at $3, giving downtown Brampton and Queen Street W shoppers a low-cost quick-pick option." },
      { heading: "Pouches, Grabba, And Backwoods", body: "The tobacco section also includes nicotine pouches from Velo, Pablo, and Killa listed at $20, Grabba listed at $5, Grabba Shaker in RedRose or Red Herring listed at $19, Backwoods assorted flavours listed from $20-$25, and new Backwoods flavours listed at $25." },
      { heading: "Check Current Stock", body: "Brand mix, flavour mix, carton availability, and prices can rotate. Use /items/cigarettes for the current Blouds cigarette menu before visiting, then pair the stop with accessories, flower, pre-rolls, edibles, or THC vapes if needed." },
    ],
    quickLinks: [
      { label: "Cigarettes", href: "/items/cigarettes" },
      { label: "Accessories", href: "/items/add-ons" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    slug: "edibles-and-vapes-guide",
    title: "Brampton Edibles And Vape Guide At Blouds",
    metaDescription: "Compare Blouds Dispensary edibles, THC vapes, nic vapes, pre-rolls, accessories, and Queen Street W menu paths before visiting in Brampton.",
    eyebrow: "Edibles and vapes",
    summary: "A format-first guide for Blouds shoppers who want gummies, chocolates, THC vapes, nic vapes, or support gear without starting from flower.",
    sections: [
      { heading: "Edibles For Measured Formats", body: "Edibles deserve their own path because shoppers looking for gummies, chocolates, drinks, or other measured formats are not making the same decision as flower buyers. Use the guide to reach the live edibles category quickly." },
      { heading: "THC Vapes Stay Separate", body: "THC vapes are cannabis products and should sit in their own lane for vape pens, cartridges, and vape-first menu browsing when listed. This avoids mixing cannabis vape intent with the nic vape route." },
      { heading: "Nic Vapes Stay Separate Too", body: "Nic vapes can serve a different shopper intent than cannabis. Keeping that page separate makes the Blouds navigation clearer and gives the site more precise category coverage." },
      { heading: "Add The Small Stuff", body: "Accessories, papers, lighters, and add-ons often complete the trip. The resource hub should help shoppers combine those links before heading to Queen Street W." },
    ],
    quickLinks: [
      { label: "Edibles", href: "/items/edibles" },
      { label: "THC vapes", href: "/items/vapes" },
      { label: "Nic vapes", href: "/items/vape-disposables" },
    ],
  },
];

export function getResourceBySlug(slug: string) {
  return RESOURCE_PAGES.find((page) => page.slug === slug);
}
