import type { Metadata } from "next";
import { AreaIntentPage } from "../../../components/AreaIntentPage";

export const metadata: Metadata = { title: "North Mississauga to Blouds Dispensary | Route Guide", description: "Plan a trip from North Mississauga to Blouds Dispensary at 117 Queen St W in Brampton. This is a route guide, not a Mississauga store claim. Adults 19+.", alternates: { canonical: "https://www.bloudsdispensary.ca/resources/local-guides/how-to-reach-blouds-from-north-mississauga" } };

export default function Page() {
  return <AreaIntentPage eyebrow="Brampton commuter guide" h1="How to Reach Blouds Dispensary on Queen St W From North Mississauga" addressLine="Destination: 117 Queen St W, Brampton" storeHref="/weed-dispensary-brampton" storeLabel="Queen Street Walk-In Store" intro={[
    "Blouds Dispensary is a Brampton Queen Street West store. This page explains how adults travelling from the North Mississauga and Hurontario edge can plan a visit; it does not claim a Blouds storefront in Mississauga.",
    "Enter 117 Queen St W, Brampton into a live navigation or transit service and check the current route before leaving. Traffic, road work, and transit schedules can change, so the website does not promise a fixed travel time.",
  ]} sections={[
    { heading: "Check the Menu Before Travelling", paragraphs: ["Use the current flower tier and category pages to review posted choices before making the trip. Product listings, sizes, and prices can change.", "If one specific item determines the visit, call the store using the current number shown on the Brampton store page."] },
    { heading: "One Queen Street West Store", paragraphs: ["The destination is Blouds Dispensary at 117 Queen St W, Brampton, ON L6Y 1M3. Enter that exact Queen Street West address in maps or transit directions before you leave."] },
  ]} />;
}
