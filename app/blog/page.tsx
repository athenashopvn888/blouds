import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides — Blouds Dispensary | Brampton",
  description: "Read the latest strain reviews, dosing guides, and cannabis news from Blouds Dispensary in Brampton.",
  alternates: {
    canonical: "https://bloudsdispensary.ca/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
