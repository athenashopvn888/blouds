import type { Metadata } from "next";
import Link from "next/link";
import { notFound, unstable_rethrow } from "next/navigation";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { loadFleetArticles, mergeArticleLinks } from "../lib/fleet/articles";
import { FLEET_ARTICLES_PATH, FLEET_ORIGIN, FLEET_STORE_NAME } from "../lib/fleet/config";
import { RESOURCE_PAGES, slugFromPath } from "../resources/resourceData";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Articles",
  description: `Guides and articles from ${FLEET_STORE_NAME}.`,
  alternates: { canonical: `${FLEET_ORIGIN}${FLEET_ARTICLES_PATH}` },
};

function codedLinks() {
  return RESOURCE_PAGES.filter((page) => slugFromPath(page.path)).map((page) => ({
    slug: slugFromPath(page.path),
    title: page.title,
    href: page.path,
  }));
}

async function loadArticleLinks() {
  try {
    const loaded = await loadFleetArticles();
    if (!loaded.ok) notFound();
    return mergeArticleLinks(codedLinks(), loaded.articles);
  } catch (error) {
    unstable_rethrow(error);
    notFound();
  }
}

export default async function ArticlesPage() {
  const links = await loadArticleLinks();
  return (
    <>
      <Navbar />
      <main>
        <h1>Articles</h1>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
