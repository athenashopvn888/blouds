import type { Metadata } from "next";
import ResourceView from "./ResourceView";
import { visibleSmokeCopy, visibleSmokeKeywords, visibleSmokeLabel } from "../lib/siteConfig";
import { AUTHORS, RESOURCE_HOME, SITE } from "./resourceData";

export const metadata: Metadata = buildResourceMetadata(RESOURCE_HOME);

export default function ResourcesPage() {
  return <ResourceView page={RESOURCE_HOME} />;
}

function buildResourceMetadata(page: typeof RESOURCE_HOME): Metadata {
  const canonical = `${SITE.baseUrl}${page.path}`;
  const author = AUTHORS[page.author];

  const title = visibleSmokeLabel(page.seoTitle);
  const description = visibleSmokeCopy(page.metaDescription);
  const keywords = visibleSmokeKeywords([page.primaryKeyword, ...page.supportingKeywords]);
  const alt = visibleSmokeLabel(page.image.alt);

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      siteName: SITE.name,
      images: [{ url: `${SITE.baseUrl}${page.image.src}`, width: 1200, height: 630, alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE.baseUrl}${page.image.src}`],
    },
    authors: [{ name: author.name }],
  };
}
