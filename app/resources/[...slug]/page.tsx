import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourceView from "../ResourceView";
import { RESOURCE_BASE_URL, RESOURCE_PAGES, getResourceBySlug } from "../resourceData";

export function generateStaticParams() {
  return RESOURCE_PAGES
    .filter((page) => page.route !== "/resources")
    .map((page) => ({
      slug: page.route.replace(/^\/resources\//, "").split("/"),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getResourceBySlug(slug);
  if (!page) return {};

  return {
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: { canonical: `${RESOURCE_BASE_URL}${page.route}` },
  };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = getResourceBySlug(slug);
  if (!page) notFound();

  return <ResourceView page={page} />;
}
