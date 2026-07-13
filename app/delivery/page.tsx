import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — Blouds Dispensary | Brampton",
  description: "Get notified when Blouds Dispensary prepares delivery updates for Brampton shoppers.",
  alternates: {
    canonical: "https://bloudsdispensary.ca/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
