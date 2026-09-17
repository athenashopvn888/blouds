import { Metadata } from "next";
import { GBPLandingPage } from "@/app/components/GBPLandingPage";
import { gbpLocation, siteUrl } from "@/app/lib/gbp-location";

export const metadata: Metadata = {
  title: { absolute: gbpLocation.seoTitle },
  description: gbpLocation.metaDescription,
  alternates: {
    canonical: siteUrl(`/${gbpLocation.slug}`),
  },
  openGraph: {
    title: gbpLocation.seoTitle,
    description: gbpLocation.metaDescription,
    url: siteUrl(`/${gbpLocation.slug}`),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <GBPLandingPage />;
}

