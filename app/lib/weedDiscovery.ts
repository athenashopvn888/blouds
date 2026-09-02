export type WeedDiscoveryLink = { label: string; description: string; href: string };

export const bloudsWeedOwner = {
  storeName: "Blouds Dispensary",
  city: "Brampton",
  address: "117 Queen St W, Brampton, ON L6Y 1M3",
  streetAddress: "117 Queen St W",
  province: "ON",
  postalCode: "L6Y 1M3",
  phoneDisplay: "+1 (437) 371-5377",
  phoneIntl: "+14373715377",
  ownerPath: "/weed-dispensary-brampton",
  flowerTiers: [
    { label: "Budget Weed", description: "Explore Budget Weed at Blouds.", href: "/budget-weed" },
    { label: "AA Weed", description: "Explore AA Weed at Blouds.", href: "/aa-weed" },
    { label: "AAA+ Weed", description: "Explore AAA+ Weed at Blouds.", href: "/aaa-weed" },
    { label: "Premium Weed", description: "Explore Premium Weed at Blouds.", href: "/premium-weed" },
    { label: "Exotic Weed", description: "Explore Exotic Weed at Blouds.", href: "/exotic-weed" },
  ] satisfies WeedDiscoveryLink[],
  categories: [
    { label: "Pre-Rolls", description: "Explore cannabis in pre-roll format.", href: "/items/prerolls" },
    { label: "Edibles", description: "Explore the edibles category.", href: "/items/edibles" },
    { label: "Vapes", description: "Explore cannabis vapes by format.", href: "/items/vapes" },
    { label: "Concentrates", description: "Explore the concentrates category.", href: "/items/concentrates" },
    { label: "Accessories", description: "Explore cannabis accessories.", href: "/items/add-ons" },
  ] satisfies WeedDiscoveryLink[],
  guides: [
    { label: "Menu Guide", description: "Compare the main cannabis formats and decide where you want to begin.", href: "/resources/menu-guide" },
    { label: "Weed & Flower Guides", description: "Learn more before choosing between Budget Weed, AA Weed, AAA+ Weed, Premium Weed and Exotic Weed.", href: "/resources/weed-flower-guides" },
    { label: "Value Guides", description: "Explore value-oriented choices without relying on a current price or promotion.", href: "/resources/value-guides" },
    { label: "Pre-Roll Guides", description: "Focus specifically on pre-rolls.", href: "/resources/pre-roll-guides" },
    { label: "Queen Street Brampton Visit Guide", description: "Find additional store-specific visit information.", href: "/resources/local-guides/queen-street-brampton-visit-guide" },
  ] satisfies WeedDiscoveryLink[],
};

