export interface TierSeoData {
  seoTitle: string;
  h1: string;
  catalogHeading: string;
  imageAlt: string;
  seoIntro: string;
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower on Queen Street West | Blouds",
    h1: "Exotic Weed & Cannabis Flower on Queen Street West",
    catalogHeading: "Explore Exotic Weed at the Queen Street West counter",
    imageAlt: "Exotic Weed and Cannabis Flower at Blouds Dispensary on Queen Street West",
    seoIntro:
      "Exotic is the dedicated flower tier at Blouds Dispensary on Queen Street West in downtown Brampton. This page stays on Exotic listings for adults 19+ and does not replace the Queen Street West weed hub or the 24-hour overnight guide.",
    faqs: [
      {
        q: "What does Exotic weed mean at Blouds on Queen Street West?",
        a: "Exotic is one of five flower tiers at the downtown Queen Street West walk-in. The Exotic section keeps that shelf separate from Premium, AAA+, AA, and Budget.",
      },
      {
        q: "Is the Exotic page the main Queen Street West weed page?",
        a: "No. Exotic is a narrow tier route. Broad weed browsing for this downtown door stays on the Queen Street West weed hub at /weed-dispensary-brampton.",
      },
      {
        q: "Which other flower tiers sit next to Exotic at this downtown Brampton door?",
        a: "Blouds also keeps Premium, AAA+, AA, and Budget as their own Queen Street West flower pages. Use the homepage menu if you still need to choose a shelf.",
      },
      {
        q: "Can I walk in overnight for Exotic flower on Queen Street West?",
        a: "Yes. The Queen Street West storefront is listed as open 24 hours. Use the 24-hour Queen Street West page for overnight notes, and call ahead if one Exotic listing is the reason for the trip.",
      },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower on Queen Street West | Blouds",
    h1: "Premium Weed & Cannabis Flower on Queen Street West",
    catalogHeading: "Explore Premium Weed at the Queen Street West counter",
    imageAlt: "Premium Weed and Cannabis Flower at Blouds Dispensary on Queen Street West",
    seoIntro:
      "Premium is its own flower lane at the Queen Street West Blouds counter in downtown Brampton. Shoppers who already want Premium can stay here; general weed intent belongs on the Queen Street West weed hub.",
    faqs: [
      {
        q: "What is Premium weed at the Queen Street West Blouds counter?",
        a: "Premium is a dedicated cannabis flower tier at 117 Queen St W. It is a menu lane, not a government grade, and it sits beside Exotic, AAA+, AA, and Budget.",
      },
      {
        q: "Does Premium replace the downtown Brampton weed hub?",
        a: "No. This page is Premium only. The Queen Street West weed hub remains the broad weed owner for downtown Brampton shoppers.",
      },
      {
        q: "How is Premium different from Exotic and AAA+ on this menu?",
        a: "Each tier has its own Queen Street West route so you can compare shelves without mixing them. Read the current Premium listings on this page, then jump to Exotic or AAA+ if you want a different lane.",
      },
      {
        q: "Is Premium available on a 24-hour Queen Street West walk-in?",
        a: "The downtown door is listed as open 24 hours. Browse Premium here, then use the 24-hour Queen Street West guide if you are coming after midnight.",
      },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower on Queen Street West | Blouds",
    h1: "AAA+ Weed & Cannabis Flower on Queen Street West",
    catalogHeading: "Explore AAA+ Weed at the Queen Street West counter",
    imageAlt: "AAA+ Weed and Cannabis Flower at Blouds Dispensary on Queen Street West",
    seoIntro:
      "AAA+ has a focused flower page for the Queen Street West walk-in in downtown Brampton. AAA+ is familiar retail shorthand on this menu; it is not a universal government grade.",
    faqs: [
      {
        q: "What is the AAA+ flower section at Blouds downtown Brampton?",
        a: "AAA+ is a separate Queen Street West flower tier with its own listings. It sits alongside Exotic, Premium, AA, and Budget at 117 Queen St W.",
      },
      {
        q: "Is AAA+ the same as the Brampton weed dispensary landing?",
        a: "No. AAA+ stays on this tier. The Queen Street West weed hub is the broader weed page for downtown Brampton.",
      },
      {
        q: "Where do AAA+ shoppers go for the other four tiers?",
        a: "Use the sibling Queen Street West routes for Exotic, Premium, AA, and Budget, or start on the homepage menu if you have not picked a shelf yet.",
      },
      {
        q: "Can I browse AAA+ after midnight on Queen Street West?",
        a: "Yes, on the listed 24-hour schedule. The 24-hour Queen Street West page covers overnight walk-in notes for this downtown door.",
      },
    ],
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower on Queen Street West | Blouds",
    h1: "AA Weed & Cannabis Flower on Queen Street West",
    catalogHeading: "Explore AA Weed at the Queen Street West counter",
    imageAlt: "AA Weed and Cannabis Flower at Blouds Dispensary on Queen Street West",
    seoIntro:
      "AA is a distinct flower tier at Blouds on Queen Street West in downtown Brampton. Adults 19+ who want AA can begin here without treating this page as the city-wide weed owner.",
    faqs: [
      {
        q: "What does AA weed mean on the Queen Street West menu?",
        a: "AA is the label for one of five flower tiers at the downtown Blouds door. The AA section keeps that category distinct from Budget, AAA+, Premium, and Exotic.",
      },
      {
        q: "Is AA the broad weed page for downtown Brampton?",
        a: "No. AA is a narrow tier. Broad weed intent for Queen Street West stays on /weed-dispensary-brampton.",
      },
      {
        q: "How does AA sit between Budget and AAA+ at Blouds?",
        a: "Budget, AA, and AAA+ are separate Queen Street West routes. Compare current listings on each page rather than assuming one THC number defines the label.",
      },
      {
        q: "Can I walk in any hour for AA flower at 117 Queen St W?",
        a: "The Queen Street West store is listed as open 24 hours. Use the 24-hour Queen Street West page for overnight arrival notes.",
      },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed & Cannabis Flower on Queen Street West | Blouds",
    h1: "Budget Weed & Cannabis Flower on Queen Street West",
    catalogHeading: "Explore Budget Weed at the Queen Street West counter",
    imageAlt: "Budget Weed and Cannabis Flower at Blouds Dispensary on Queen Street West",
    seoIntro:
      "Budget is the value-oriented flower tier at the Queen Street West walk-in in downtown Brampton. Budget describes this menu lane. It does not by itself promise a current sale, promotion, or one THC range.",
    faqs: [
      {
        q: "What is Budget weed at Blouds on Queen Street West?",
        a: "Budget is Blouds Dispensary’s value-first flower tier at 117 Queen St W. The label describes the shelf, not a guaranteed deal or a government grade.",
      },
      {
        q: "Is Budget the main downtown Brampton weed owner page?",
        a: "No. This page is Budget only. The Queen Street West weed hub remains the broad weed owner for downtown Brampton.",
      },
      {
        q: "Does Budget mean a current sale on Queen Street West?",
        a: "No. Budget is a tier name. Current prices and any posted deals belong on the live listings on this page and the homepage menu.",
      },
      {
        q: "Can I visit 24 hours for Budget flower downtown?",
        a: "Yes, on the listed 24-hour Queen Street West schedule. Overnight shoppers can use the dedicated 24-hour Queen Street West guide before travelling.",
      },
    ],
  },
};
