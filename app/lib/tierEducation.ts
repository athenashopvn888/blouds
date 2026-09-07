export type TierEducation = {
  heading: string;
  intro: string;
  details: { heading: string; body: string }[];
  links: { label: string; href: string }[];
};

export const TIER_EDUCATION: Record<string, TierEducation> = {
  EXOTIC: {
    heading: "What “Exotic Weed” Means at Blouds Dispensary",
    intro: "Exotic Weed is an established Blouds Dispensary flower category. The label helps adults narrow the current menu. It is not a universal Canadian government grade and it does not guarantee one THC range.",
    details: [
      { heading: "Compare the Product", body: "Use the current listing for producer, cultivar, THC/CBD, package details, price and availability. Aroma, trim, trichomes, cure and freshness can differ from one product to another." },
      { heading: "Exotic Is Not One Guaranteed Effect", body: "Exotic can describe premium positioning, distinctive genetics, aroma, rarity or presentation. It does not guarantee one effect." },
    ],
    links: [
      { label: "Weed & Flower Guides", href: "/resources/weed-flower-guides" },
      { label: "Top Shelf, Mids & Quads", href: "/resources/weed-flower-guides/top-shelf-mids-quads" },
      { label: "Gas, Loud & Terpy", href: "/resources/weed-flower-guides/terpenes-gas-loud-aroma" },
      { label: "THC vs Weed Quality", href: "/resources/weed-flower-guides/thc-vs-weed-quality" },
    ],
  },
  PREMIUM: {
    heading: "What “Premium Weed” Means at Blouds Dispensary",
    intro: "Premium Weed is an established Blouds Dispensary flower category. It helps adults browse a higher-positioned menu lane without treating Premium as one regulated national grade.",
    details: [
      { heading: "Compare More Than the Category Name", body: "Use the current listing for producer, cultivar, THC/CBD, package details and current price. The educational guides explain aroma, trichomes, cure and freshness separately." },
      { heading: "Premium Does Not Automatically Mean Higher THC", body: "A larger THC number does not automatically determine the flower category." },
    ],
    links: [
      { label: "Weed & Flower Guides", href: "/resources/weed-flower-guides" },
      { label: "What Does Good Weed Mean?", href: "/resources/weed-flower-guides/what-does-good-weed-mean" },
      { label: "THC vs Weed Quality", href: "/resources/weed-flower-guides/thc-vs-weed-quality" },
      { label: "Drying, Curing & Freshness", href: "/resources/weed-flower-guides/drying-curing-freshness" },
    ],
  },
  "AAA+": {
    heading: "AAA+ Weed: Familiar Retail Shorthand",
    intro: "AAA+ Weed is Blouds Dispensary's established category name. AAA and AAA+ are familiar cannabis retail terms, but they are not one universal government grading system.",
    details: [
      { heading: "AAA+ vs Quads / AAAA", body: "Quads is common Canadian slang for AAAA and generally signals premium positioning. Do not assume one fixed THC threshold separates the terms." },
      { heading: "Read the Current Listing", body: "Use the current product page for producer, cultivar, THC/CBD, package details, price and availability." },
    ],
    links: [
      { label: "Top Shelf, Mids & Quads", href: "/resources/weed-flower-guides/top-shelf-mids-quads" },
      { label: "Weed & Flower Guides", href: "/resources/weed-flower-guides" },
      { label: "THC vs Weed Quality", href: "/resources/weed-flower-guides/thc-vs-weed-quality" },
      { label: "Weed Slang Glossary", href: "/resources/cannabis-101/weed-slang-glossary" },
    ],
  },
  AA: {
    heading: "AA Weed as a Clear Menu Category",
    intro: "AA Weed is one of Blouds Dispensary's five established flower categories. The label makes the menu easier to scan. It does not define one mandatory THC level, aroma profile or bud size.",
    details: [
      { heading: "Value and Quality Are Separate Questions", body: "AA Weed can be part of a value-first browse. A lower price does not automatically prove that flower is weak or stale." },
      { heading: "Compare Current Product Information", body: "Use the current listing for changing price, stock, package and product-specific details." },
    ],
    links: [
      { label: "Value Guides", href: "/resources/value-guides" },
      { label: "Weed & Flower Guides", href: "/resources/weed-flower-guides" },
      { label: "What Does Good Weed Mean?", href: "/resources/weed-flower-guides/what-does-good-weed-mean" },
      { label: "Smalls vs Big Buds", href: "/resources/weed-flower-guides/smalls-vs-big-buds" },
    ],
  },
  BUDGET: {
    heading: "Budget Weed Means Value-First Browsing",
    intro: "Budget Weed is Blouds Dispensary's value-first flower category. Budget describes price positioning on the menu. It does not automatically mean unsafe, stale, weak or low THC.",
    details: [
      { heading: "Do Not Judge the Product From the Category Alone", body: "Adults can still compare producer, cultivar, THC/CBD, package details, aroma information where provided and the actual flower characteristics." },
      { heading: "Current Price Belongs on the Current Page", body: "Prices and deals can change. Use the live category for current pricing, product details and availability." },
    ],
    links: [
      { label: "Value Guides", href: "/resources/value-guides" },
      { label: "Weed & Flower Guides", href: "/resources/weed-flower-guides" },
      { label: "THC vs Weed Quality", href: "/resources/weed-flower-guides/thc-vs-weed-quality" },
      { label: "What Does Good Weed Mean?", href: "/resources/weed-flower-guides/what-does-good-weed-mean" },
    ],
  },
};
