import type { Metadata } from "next";
import ResourceView from "./ResourceView";
import { RESOURCE_BASE_URL, RESOURCE_HOME_ROUTE, getResourceByRoute } from "./resourceData";

const page = getResourceByRoute(RESOURCE_HOME_ROUTE);

export const metadata: Metadata = {
  title: page?.seoTitle || "Blouds Resources",
  description: page?.metaDescription,
  alternates: { canonical: `${RESOURCE_BASE_URL}${RESOURCE_HOME_ROUTE}` },
};

export default function ResourcesPage() {
  if (!page) return null;
  return <ResourceView page={page} />;
}
