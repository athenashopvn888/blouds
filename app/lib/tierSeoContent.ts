export interface TierSeoData {
  seoTitle: string;
  h1: string;
  catalogHeading: string;
  imageAlt: string;
  seoIntro: string;
  faqs: { q: string; a: string }[];
}

function tierData(
  name: string,
  seoIntro: string,
  faq: { q: string; a: string },
): TierSeoData {
  return {
    seoTitle: `${name} Weed & Cannabis Flower in Brampton | Blouds Dispensary`,
    h1: `${name} Weed & Cannabis Flower in Brampton`,
    catalogHeading: `Explore ${name} Weed & Flower`,
    imageAlt: `${name} Weed and Cannabis Flower at Blouds Dispensary`,
    seoIntro,
    faqs: [faq],
  };
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: tierData(
    "Exotic",
    "Blouds Dispensary organizes Exotic as its own cannabis flower tier for adults 19+ who want to focus their browsing on that section. Explore Exotic weed and flower without mixing it into the other Blouds flower tiers.",
    {
      q: "What does Exotic weed mean at Blouds Dispensary?",
      a: "Exotic is the name of one of Blouds Dispensary’s cannabis flower tiers. The Exotic section keeps that tier separate from Premium, AAA+, AA and Budget.",
    },
  ),
  PREMIUM: tierData(
    "Premium",
    "The Premium section gives Blouds shoppers a dedicated place to browse Premium weed and cannabis flower. Use the tier on its own when Premium is the flower category you want to explore.",
    {
      q: "What is Premium weed at Blouds Dispensary?",
      a: "Premium is one of Blouds Dispensary’s dedicated cannabis flower tiers. The Premium section is the focused place for shoppers interested in that tier.",
    },
  ),
  "AAA+": tierData(
    "AAA+",
    "AAA+ has its own flower section at Blouds Dispensary, making it easier to focus on AAA+ weed and cannabis flower without moving through every tier at once.",
    {
      q: "What is the AAA+ weed section?",
      a: "AAA+ is a separate Blouds Dispensary flower tier with its own browsing section alongside Exotic, Premium, AA and Budget.",
    },
  ),
  AA: tierData(
    "AA",
    "The AA section keeps AA weed and cannabis flower together as a distinct Blouds flower tier. It provides adults 19+ with a focused starting point when AA is the category they want to browse.",
    {
      q: "What does AA weed mean on the Blouds menu?",
      a: "AA is the label for one of Blouds Dispensary’s cannabis flower tiers. The AA section keeps that category distinct from the other flower tiers.",
    },
  ),
  BUDGET: tierData(
    "Budget",
    "Budget is Blouds Dispensary’s dedicated value-oriented flower tier. Adults 19+ looking specifically for Budget weed or cannabis flower can begin with this section without implying any current deal, price or promotion.",
    {
      q: "What is Budget weed at Blouds Dispensary?",
      a: "Budget is Blouds Dispensary’s value-oriented cannabis flower tier. The label describes the tier and does not by itself establish a current sale, promotion or specific price.",
    },
  ),
};