import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourceView from "../ResourceView";
import { visibleSmokeCopy, visibleSmokeKeywords, visibleSmokeLabel } from "../../lib/siteConfig";
import {
  AUTHORS,
  SITE,
  getResourcePageBySlug,
  getStaticResourceParams,
  type ResourcePage,
} from "../resourceData";

type PageParams = Promise<{ slug?: string[] }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return getStaticResourceParams();
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const page = getResourcePageBySlug(slug);
  if (!page) return {};
  return buildResourceMetadata(page);
}

export default async function ResourceRoute({ params }: { params: PageParams }) {
  const { slug } = await params;
  const page = getResourcePageBySlug(slug);
  if (!page) notFound();
  const schema = buildSchema(page);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <ResourceView page={page} />
    </>
  );
}

function buildResourceMetadata(page: ResourcePage): Metadata {
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
      type: page.kind === "article" ? "article" : "website",
      title,
      description,
      url: canonical,
      siteName: SITE.name,
      images: [{ url: `${SITE.baseUrl}${page.image.src}`, width: 1200, height: 630, alt }],
      ...(page.kind === "article"
        ? {
            publishedTime: page.datePublished,
            modifiedTime: page.dateModified,
            authors: [author.name],
          }
        : {}),
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

function buildSchema(page: ResourcePage) {
  const canonical = `${SITE.baseUrl}${page.path}`;
  const author = AUTHORS[page.author];

  const faqs = (page.faqs ?? [])
    .map((faq) => ({ question: visibleSmokeCopy(faq.question), answer: visibleSmokeCopy(faq.answer) }))
    .filter((faq) => faq.question && faq.answer);
  const graph = [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.baseUrl },
          { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE.baseUrl}/resources` },
          { "@type": "ListItem", position: 3, name: visibleSmokeLabel(page.title), item: canonical },
        ],
      },
      {
        "@type": page.kind === "article" ? "Article" : "CollectionPage",
        "@id": canonical,
        url: canonical,
        name: visibleSmokeLabel(page.seoTitle),
        headline: visibleSmokeLabel(page.h1),
        description: visibleSmokeCopy(page.metaDescription),
        image: `${SITE.baseUrl}${page.image.src}`,
        author: { "@type": "Person", name: author.name, alternateName: author.handle },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/banners/blouds_favicon.webp` },
        },
        datePublished: page.datePublished,
        dateModified: page.dateModified,
        mainEntityOfPage: canonical,
      },
      ...(faqs.length > 0
        ? [{
            "@type": "FAQPage",
            "@id": `${canonical}#faq`,
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }]
        : []),
    ];

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
