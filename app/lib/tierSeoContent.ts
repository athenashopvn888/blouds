export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

function tierData(name: string, slug: string): TierSeoData {
  return {
    seoTitle: `${name} Cannabis Flower Brampton | Blouds Dispensary`,
    seoIntro: `Browse the ${name} flower section at Blouds Dispensary in Brampton. Compare current listings, posted weights, prices, and package details.`,
    sections: [
      { heading: `${name} Flower Menu`, body: `The ${name} section gives shoppers a focused place to compare the flower names, types, listed weights, and posted prices currently shown online.` },
      { heading: "Check Current Item Details", body: "Open an item page to review its listed menu details before visiting. A tier label helps organize the menu and is not a product guarantee." },
      { heading: "Visit Blouds Dispensary", body: "Blouds Dispensary is open 24 hours at 117 Queen St W in Brampton. Use the store page for current visit information." },
    ],
    faqs: [
      { q: `Where can I browse ${name} flower?`, a: `Use the /${slug} menu section to compare the ${name} flower listings currently shown online.` },
      { q: "What details are shown?", a: "Menu pages show listed names, types, weights, prices, and package details." },
      { q: "Where is Blouds Dispensary?", a: "Blouds Dispensary is at 117 Queen St W in Brampton and is open 24 hours." },
    ],
  };
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: tierData("Exotic", "exotic"),
  PREMIUM: tierData("Premium", "premium"),
  "AAA+": tierData("AAA+", "aaa"),
  AA: tierData("AA", "aa"),
  BUDGET: tierData("Budget", "budget"),
};
