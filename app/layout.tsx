import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bloudsdispensary.ca"),
  title: {
    default: "Blouds Dispensary | Brampton Cannabis Store",
    template: "%s | Blouds Dispensary",
  },
  description:
    "Blouds Dispensary is a Brampton cannabis store on Queen St W with adult 19+ store info and category browsing for flower, pre-rolls, vapes, edibles, concentrates, and accessories. Open 24 Hours.",
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
    "weed store Mississauga",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.bloudsdispensary.ca",
    siteName: "Blouds Dispensary",
    title: "Blouds Dispensary — Premium Brampton Cannabis Dispensary",
    description:
      "200+ strains from $3/g. Exotic to Budget. Brampton's uplifting dispensary at 117 Queen St W. Open 24 Hours.",
    images: [
      {
        url: "/banners/Blouds_Welcome_Banner.webp",
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
    images: ["/banners/Blouds_Welcome_Banner.webp"],
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
    canonical: "https://www.bloudsdispensary.ca",
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
  "@id": "https://www.bloudsdispensary.ca",
  name: "Blouds Dispensary",
  description: "Cannabis dispensary at 117 Queen St W in Brampton, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open 24 Hours.",
  url: "https://www.bloudsdispensary.ca",
  telephone: "+14374250117",
  image: "https://www.bloudsdispensary.ca/wp-content/uploads/2026/04/7Clmh.jpg",
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
    latitude: 43.6894,
    longitude: -79.7516,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Brampton",
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D2SNLR6G0H"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D2SNLR6G0H');
            `
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
