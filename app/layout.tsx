import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Always Lit Cannabis — Premium Cannabis, Always Fire",
    template: "%s | Always Lit Cannabis",
  },
  description:
    "Shop 200+ premium cannabis strains at Always Lit Cannabis. Exotic, Premium, AAA+, AA & Budget flower from $5/g. Toronto's most fire dispensary. Visit us today.",
  keywords: [
    "cannabis",
    "dispensary",
    "Toronto",
    "weed",
    "exotic flower",
    "premium cannabis",
    "Always Lit Cannabis",
    "THC",
    "indica",
    "sativa",
    "hybrid",
    "edibles",
    "vapes",
    "pre-rolls",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Always Lit Cannabis",
    title: "Always Lit Cannabis — Premium Cannabis, Always Fire",
    description:
      "200+ strains. Exotic to Budget. Toronto's most fire dispensary.",
  },
  robots: {
    index: true,
    follow: true,
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
      </head>
      <body>{children}</body>
    </html>
  );
}
