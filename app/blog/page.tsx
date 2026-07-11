import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blouds Dispensary Blog | Cannabis Menu Guides",
  description: "Read Blouds Dispensary cannabis menu guides, flower tier notes, and local store checks for Brampton shoppers.",
  alternates: {
    canonical: "https://www.bloudsdispensary.ca/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
