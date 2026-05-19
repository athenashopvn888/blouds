import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bloudsdispensary.ca"),
  title: {
    default: "Blouds Dispensary — Premium Cannabis Dispensary, Brampton",
    template: "%s | Blouds Dispensary",
  },
  description:
    "Shop 200+ premium cannabis strains at Blouds Dispensary. Exotic, Premium, AAA+, AA & Budget flower from $3/g. Brampton's uplifting dispensary at 117 Queen St W. Open 24 Hours.",
  keywords: [
    "cannabis dispensary Brampton",
    "weed store Brampton",
    "exotic flower Brampton",
    "premium cannabis",
    "Blouds Dispensary",
    "cheap weed Brampton",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles Brampton",
    "vapes",
    "pre-rolls",
    "native cigarettes Brampton",
    "weed store Gatineau",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://bloudsdispensary.ca",
    siteName: "Blouds Dispensary",
    title: "Blouds Dispensary — Premium Brampton Cannabis Dispensary",
    description:
      "200+ strains from $3/g. Exotic to Budget. Brampton's uplifting dispensary at 117 Queen St W. Open 24 Hours.",
    images: [
      {
        url: "/banners/spirit_corner_cannabis_showcase.webp",
        width: 1200,
        height: 630,
        alt: "Blouds Dispensary — Premium Cannabis Dispensary Brampton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blouds Dispensary — Brampton's Uplifting Dispensary",
    description: "200+ strains from $3/g. Open 24 Hours at 117 Queen St W, Brampton.",
    images: ["/banners/spirit_corner_cannabis_showcase.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://bloudsdispensary.ca",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://bloudsdispensary.ca",
  name: "Blouds Dispensary",
  description: "Cannabis dispensary at 117 Queen St W in Brampton, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open 24 Hours.",
  url: "https://bloudsdispensary.ca",
  telephone: "+14374250117",
  image: "https://bloudsdispensary.ca/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "117 Queen St W",
    addressLocality: "Brampton",
    addressRegion: "ON",
    postalCode: "L6Y 1M3",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.4292,
    longitude: -75.6928,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [
    "https://maps.app.goo.gl/yVDY1PZ8qSwAjQ6s6",
    "https://www.google.com/maps/place/?q=place_id:ChIJm9VGUowFzkwRl2QzOCSoNlg",
  ],
  hasMap: "https://maps.app.goo.gl/yVDY1PZ8qSwAjQ6s6",
  areaServed: {
    "@type": "City",
    name: "Brampton",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "15",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
