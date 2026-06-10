import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — Blouds Dispensary | Brampton",
  description: "Get notified when Blouds Dispensary launches same-day weed delivery across Brampton and surrounding areas.",
  alternates: {
    canonical: "https://bloudsdispensary.ca/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
