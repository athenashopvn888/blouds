import { Metadata } from "next";
import { GBPLandingPage } from "@/app/components/GBPLandingPage";
import { gbpLocation, siteUrl } from "@/app/lib/gbp-location";

// Document <title> and og:title only. Schema WebPage name stays gbpLocation.weedOwnerTitle.
const WEED_DOC_TITLE = "Queen Street West Weed Dispensary near me in Downtown Brampton | Blouds";

export const metadata: Metadata = {
  title: { absolute: WEED_DOC_TITLE },
  description: gbpLocation.weedOwnerDescription,
  alternates: {
    canonical: siteUrl(`/${gbpLocation.slug}`),
  },
  openGraph: {
    title: WEED_DOC_TITLE,
    description: gbpLocation.weedOwnerDescription,
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
