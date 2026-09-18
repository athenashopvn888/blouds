import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { SITE_ORIGIN, buildStoreJsonLd, buildWebsiteJsonLd, gbpLocation } from "./lib/gbp-location";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: gbpLocation.seoTitle,
    template: "%s | Blouds Dispensary",
  },
  description: gbpLocation.metaDescription,
  keywords: [
    "weed dispensary Brampton",
    "cannabis dispensary Brampton",
    "weed store Brampton",
    "24 hour dispensary Brampton",
    "Queen Street West dispensary",
    "117 Queen St W",
    "Blouds Dispensary",
    "cheap weed Brampton",
    "dispensary near me Brampton",
    "edibles Brampton",
    "pre-rolls Brampton",
    "native cigarettes Brampton",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_ORIGIN,
    siteName: gbpLocation.storeName,
    title: gbpLocation.seoTitle,
    description: gbpLocation.metaDescription,
    images: [
      {
        url: "/banners/Blouds_Welcome_Banner.webp",
        width: 1200,
        height: 630,
        alt: "Blouds Dispensary — 24-hour weed dispensary at 117 Queen St W, Brampton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: gbpLocation.seoTitle,
    description: gbpLocation.metaDescription,
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
};

const storeJsonLd = buildStoreJsonLd();
const websiteJsonLd = buildWebsiteJsonLd();

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify([storeJsonLd, websiteJsonLd]) }}
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
      <body>
        <Link className="deliveryAnnouncement" href="/delivery">
          NEW DELIVERY MENU IS HERE — CLICK TO EXPLORE
        </Link>
        {children}
      </body>
    </html>
  );
}
