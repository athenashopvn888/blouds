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
    title: "Queen Street W Visit Guide",
    metaDescription: "Plan a Blouds Dispensary visit at 117 Queen St W in Brampton with route, menu, and walk-in notes.",
    eyebrow: "Visit guide",
    summary: "A clean local guide for downtown Brampton shoppers heading to Blouds on Queen Street W.",
    sections: [
      { heading: "Know The Lane Before You Arrive", body: "Start with flower tiers if you are shopping by quality and budget. Use category pages when you already know the format: edibles, vapes, pre-rolls, concentrates, cigarettes, or accessories." },
      { heading: "Downtown Brampton Rhythm", body: "Queen Street W visits are usually quick and practical. Keep your ID ready, skim the menu before leaving, and arrive with a backup category in case a product rotates." },
      { heading: "Open 24 Hours", body: "Blouds is listed as open 24 hours, so the website should work like a late-night menu lounge: simple paths, clear category doors, and no guessing." },
    ],
    quickLinks: [
      { label: "Menu Hub", href: "/#menu" },
      { label: "GBP Landing Page", href: "/weed-dispensary-brampton/" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    slug: "downtown-brampton-menu-guide",
    title: "Downtown Brampton Menu Guide",
    metaDescription: "Use the Blouds Dispensary menu guide to compare flower tiers, edibles, vapes, pre-rolls, and concentrates in Brampton.",
    eyebrow: "Menu guide",
    summary: "A soft landing for shoppers who want the useful menu paths without digging through every page.",
    sections: [
      { heading: "Shop By Tier", body: "Exotic, Premium, AAA+, AA, and Budget are the main flower paths. This lets shoppers decide by spend and quality before looking at individual strains." },
      { heading: "Shop By Format", body: "Edibles, THC vapes, nic vapes, pre-rolls, concentrates, accessories, and cigarettes are separated so shoppers can move straight to the shelf they came for." },
      { heading: "Use Resources As A Map", body: "The resource pages are built as a menu map for Blouds, not a replacement for the actual live menu or in-store product rotation." },
    ],
    quickLinks: [
      { label: "Edibles", href: "/items/edibles" },
      { label: "THC Vapes", href: "/items/vapes" },
      { label: "Pre-Rolls", href: "/items/prerolls" },
    ],
  },
  {
    slug: "blouds-flower-tier-guide",
    title: "Blouds Flower Tier Guide",
    metaDescription: "Learn the Blouds flower tier structure from Exotic and Premium to AAA+, AA, and Budget.",
    eyebrow: "Flower tiers",
    summary: "A calm, practical explanation of the flower ladder for Queen Street W shoppers.",
    sections: [
      { heading: "Premium Shelf", body: "Exotic and Premium are the richer flower lanes for shoppers who want the stronger shelf presence and are less focused on the lowest spend." },
      { heading: "Middle Shelf", body: "AAA+ and AA are the comparison lanes. They help shoppers balance potency, quality, and price without making the visit complicated." },
      { heading: "Budget Shelf", body: "Budget keeps the value lane visible. It is useful when the plan is simple: stretch the spend and keep the menu easy." },
    ],
    quickLinks: [
      { label: "Exotic", href: "/exotic" },
      { label: "AA", href: "/aa" },
      { label: "Budget", href: "/budget" },
    ],
  },
  {
    slug: "late-night-queen-street-shopping",
    title: "Late-Night Queen Street Shopping",
    metaDescription: "A late-night Blouds Dispensary guide for Queen Street W cannabis shoppers in Brampton.",
    eyebrow: "Late night",
    summary: "A short guide for shoppers checking the menu after regular retail hours.",
    sections: [
      { heading: "Fast Category Choices", body: "Late-night visits work best when the menu is already narrowed down. Flower tier, vape, pre-roll, or edible is usually enough to start." },
      { heading: "Keep A Backup", body: "Menu rotation is normal. Pick one main category and one backup category so the visit still moves quickly if the exact item is not available." },
      { heading: "Bring Valid ID", body: "Open 24 hours does not change the adult-use basics. Bring valid government ID and expect normal verification." },
    ],
    quickLinks: [
      { label: "Open Page", href: "/weed-dispensary-brampton/" },
      { label: "FAQ", href: "/faq" },
      { label: "Menu", href: "/#menu" },
    ],
  },
  {
    slug: "native-smokes-guide",
    title: "Native Smokes Category Guide",
    metaDescription: "Find the Blouds Dispensary cigarette category and native smoke planning links before visiting Queen Street W.",
    eyebrow: "Cigarettes",
    summary: "A resource page for shoppers who want cigarette category links beside the cannabis menu.",
    sections: [
      { heading: "Use The Cigarette Category", body: "The cigarette category keeps native smoke shoppers from hunting through unrelated cannabis pages. Availability and selection should still be confirmed in store." },
      { heading: "Pair With Essentials", body: "Accessories often belong in the same trip: papers, lighters, tools, and add-ons are a practical second stop." },
      { heading: "Stay Menu-First", body: "The website keeps the path clear, but the counter confirms the current product mix on the day you visit." },
    ],
    quickLinks: [
      { label: "Cigarettes", href: "/items/cigarettes" },
      { label: "Accessories", href: "/items/add-ons" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    slug: "edibles-and-vapes-guide",
    title: "Edibles And Vapes Guide",
    metaDescription: "Compare Blouds edibles, THC vapes, nic vapes, and accessories before visiting in Brampton.",
    eyebrow: "Format guide",
    summary: "A smoother path for shoppers who want measured formats or vape-first browsing.",
    sections: [
      { heading: "Edibles", body: "Edibles are best browsed by format and dose preference. Use the category page to narrow gummies, chocolates, drinks, and other edible options when carried." },
      { heading: "Vape Paths", body: "THC vapes and nic vapes sit in separate paths so shoppers can avoid mixing up the two categories. The nav labels now match those routes." },
      { heading: "Add The Support Gear", body: "If your visit needs batteries, papers, or small add-ons, check accessories before heading over." },
    ],
    quickLinks: [
      { label: "Edibles", href: "/items/edibles" },
      { label: "THC Vapes", href: "/items/vapes" },
      { label: "Nic Vapes", href: "/items/vape-disposables" },
    ],
  },
];

export function getResourceBySlug(slug: string) {
  return RESOURCE_PAGES.find((page) => page.slug === slug);
}
