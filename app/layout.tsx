import { cigaretteSafeContent } from "./lib/siteConfig";
import FullNameNap from "./components/FullNameNap";
import MobileBottomBar from "./components/MobileBottomBar";
import PinnedNavClearance from "./components/PinnedNavClearance";
import FleetContentProvider from "./components/FleetContentProvider";
import CigaretteStateProvider from "./components/CigaretteStateProvider";
import { getFleetContent } from "./lib/fleetContent";
import { getCigaretteSnapshot, toPublicCigaretteState } from "./lib/cigaretteFeed";
import { CODED_BANNERS } from "./lib/fleet/config";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { SITE_ORIGIN, buildStoreJsonLd, buildWebsiteJsonLd, gbpLocation } from "./lib/gbp-location";
import { SHOW_CIGARETTES } from "./lib/showCigarettes";

const ROOT_METADATA: Metadata = cigaretteSafeContent({
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
    ...(SHOW_CIGARETTES ? ["native cigarettes Brampton"] : []),
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
});

export async function generateMetadata(): Promise<Metadata> {
  const fleet = await getFleetContent();
  if (!fleet.active) return ROOT_METADATA;
  const description = fleet.pages.Home?.metaDescription || "";
  const codedDescription = typeof ROOT_METADATA.description === "string" ? ROOT_METADATA.description : "";
  if (!description || description === codedDescription) return ROOT_METADATA;
  return {
    ...ROOT_METADATA,
    description,
    openGraph: { ...ROOT_METADATA.openGraph, description },
    twitter: { ...ROOT_METADATA.twitter, description },
  };
}

const websiteJsonLd = buildWebsiteJsonLd();

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [fleet, cigaretteSnapshot] = await Promise.all([getFleetContent(), getCigaretteSnapshot()]);
  const cigarettes = toPublicCigaretteState(cigaretteSnapshot);
  const storeJsonLd = buildStoreJsonLd();
  const sheetBanners = fleet.active && fleet.banners.some((banner, index) => banner !== CODED_BANNERS[index]) ? fleet.banners : undefined;
  return (
    <html lang="en">
      <head>
        <meta name="fleet-content-version" content={fleet.version} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cigaretteSafeContent([storeJsonLd, websiteJsonLd])) }}
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
        <FleetContentProvider value={{ active: fleet.active, version: fleet.version, nap: fleet.nap, banners: sheetBanners }}>
          <CigaretteStateProvider value={{ ...cigarettes, web: SHOW_CIGARETTES ? cigarettes.web : false }}>
            {children}
            <FullNameNap />
            <PinnedNavClearance />
            <MobileBottomBar />
          </CigaretteStateProvider>
        </FleetContentProvider>
      </body>
    </html>
  );
}
