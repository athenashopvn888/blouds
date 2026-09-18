import { Metadata } from "next";
import { GBPLandingPage } from "@/app/components/GBPLandingPage";
import { gbpLocation, siteUrl } from "@/app/lib/gbp-location";

export const metadata: Metadata = {
  title: { absolute: gbpLocation.weedOwnerTitle },
  description: gbpLocation.weedOwnerDescription,
  alternates: {
    canonical: siteUrl(`/${gbpLocation.slug}`),
  },
  openGraph: {
    title: gbpLocation.weedOwnerTitle,
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
