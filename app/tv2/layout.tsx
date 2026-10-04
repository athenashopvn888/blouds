import type { Metadata } from "next";
import TvReviewQr from "../TvReviewQr";

export const metadata: Metadata = {
  title: "Blouds Dispensary In-Store Accessories Display",
  description: "Operational in-store accessories menu display for Blouds Dispensary.",
  robots: { index: false, follow: false },
};

export default function TvTwoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <TvReviewQr storeName="Blouds Dispensary" />
    </>
  );
}
