// Google Business Profile Local SEO Location Configuration (BLS01 NAP source of truth)
export const SITE_ORIGIN = "https://www.bloudsdispensary.ca";

export const gbpLocation = {
  storeName: "Blouds Dispensary",
  domain: "bloudsdispensary.ca",
  city: "Brampton",
  province: "ON",
  country: "CA",
  slug: "weed-dispensary-brampton",
  address: "117 Queen St W, Brampton, ON L6Y 1M3",
  streetAddress: "117 Queen St W",
  postalCode: "L6Y 1M3",
  phone: "+1 (437) 371-5377",
  phoneIntl: "+14373715377",
  phoneHref: "tel:+14373715377",
  neighborhood: "Downtown Brampton",
  nearbyAreas: ["Brampton", "Downtown Brampton", "Queen Street West", "Main Street", "Bramalea"],
  products: [
    "Flower",
    "Pre-rolls",
    "Edibles",
    "THC vapes",
    "Concentrates",
    "Shatter",
    "CBD oils",
    "Accessories"
  ],
  menuUrl: "/",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=117+Queen+St+W%2C+Brampton%2C+ON+L6Y+1M3",
  mapEmbedUrl: "",
  latitude: "43.683273",
  longitude: "-79.762376",
  hours: ["Open 24 Hours"],
  hoursDisplay: "Open 24 Hours",
  seoTitle: "24-Hour Weed Dispensary in Brampton | Blouds Dispensary",
  metaDescription: "Blouds Dispensary is open 24 hours at 117 Queen St W in Brampton. Call +1 (437) 371-5377. Walk in for flower, pre-rolls, edibles, and vapes. Adults 19+.",
  weedOwnerTitle: "Queen Street West Weed Dispensary in Downtown Brampton | Blouds",
  weedOwnerDescription: "Blouds Dispensary is the downtown Queen Street West walk-in at 117 Queen St W, Brampton. Open 24 hours. Call +1 (437) 371-5377. Flower, pre-rolls, edibles, and vapes. Adults 19+.",
  weedOwnerH1: "Queen Street West Weed Dispensary in Downtown Brampton",
  localLandmarks: ["Brampton", "Downtown Brampton", "Queen Street West"],
  introVariant: "Blouds Dispensary is the Queen Street West walk-in cannabis store at 117 Queen St W in Brampton. Downtown Brampton shoppers use this page to plan a Queen Street visit.",
  neighborhoodDescription: "Located on Queen Street West in downtown Brampton, our cannabis store sits among local retail shops in the city core.",
  parkingNote: "Ample parking spaces are available nearby in Downtown Brampton municipal parking lots",
  transitNote: "Accessible by local Brampton Transit routes serving Downtown Brampton and the Peel Region.",
  sectionTitle: "Serving Customers Near Brampton and Peel Region"
};

export function siteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_ORIGIN;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildStoreJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CannabisStore",
    "@id": `${SITE_ORIGIN}/#store`,
    name: gbpLocation.storeName,
    legalName: gbpLocation.storeName,
    description: "Cannabis dispensary at 117 Queen St W in Brampton, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open 24 Hours.",
    url: SITE_ORIGIN,
    telephone: gbpLocation.phoneIntl,
    image: `${SITE_ORIGIN}/banners/Blouds_Welcome_Banner.webp`,
    priceRange: "$3 - $12/g",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Debit",
    hasMap: gbpLocation.directionsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: gbpLocation.streetAddress,
      addressLocality: gbpLocation.city,
      addressRegion: gbpLocation.province,
      postalCode: gbpLocation.postalCode,
      addressCountry: gbpLocation.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: Number(gbpLocation.latitude),
      longitude: Number(gbpLocation.longitude),
    },
    openingHours: "Mo-Su 00:00-23:59",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: gbpLocation.phoneIntl,
      contactType: "customer service",
      areaServed: "CA",
      availableLanguage: ["English"],
    },
    areaServed: {
      "@type": "City",
      name: gbpLocation.city,
    },
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    name: gbpLocation.storeName,
    url: SITE_ORIGIN,
    publisher: { "@id": `${SITE_ORIGIN}/#store` },
  };
}
