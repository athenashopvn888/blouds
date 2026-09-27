import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blouds Dispensary In-Store Flower Display",
  description: "Operational in-store flower menu display for Blouds Dispensary.",
  robots: { index: false, follow: false },
};

export default function TvLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
