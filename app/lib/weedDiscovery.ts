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
  ownerPath: "/weed-dispensary-brampton/",
  flowerTiers: [
    { label: "Budget Flower", description: "Explore the Budget flower tier.", href: "/budget" },
    { label: "AA Flower", description: "Explore the AA flower tier.", href: "/aa" },
    { label: "AAA+ Flower", description: "Explore the AAA+ flower tier.", href: "/aaa" },
    { label: "Premium Flower", description: "Explore the Premium flower tier.", href: "/premium" },
    { label: "Exotic Flower", description: "Explore the Exotic flower tier.", href: "/exotic" },
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
    { label: "Flower Guides", description: "Learn more before choosing between Budget, AA, AAA+, Premium and Exotic.", href: "/resources/flower-guides" },
    { label: "Value Guides", description: "Explore value-oriented choices without relying on a current price or promotion.", href: "/resources/value-guides" },
    { label: "Pre-Roll Guides", description: "Focus specifically on pre-rolls.", href: "/resources/pre-roll-guides" },
    { label: "Queen Street Brampton Visit Guide", description: "Find additional store-specific visit information.", href: "/resources/local-guides/queen-street-brampton-visit-guide" },
  ] satisfies WeedDiscoveryLink[],
};
