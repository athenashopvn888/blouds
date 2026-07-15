export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

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
