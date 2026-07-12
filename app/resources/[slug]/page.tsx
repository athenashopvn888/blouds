import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { RESOURCE_BANNER, RESOURCE_CANONICAL, RESOURCE_PAGES, getResourceBySlug } from "../resourceData";
import styles from "../resources.module.css";

export function generateStaticParams() {
  return RESOURCE_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getResourceBySlug(slug);
  if (!page) return {};
  return {
    title: `${page.title} | Blouds Dispensary`,
    description: page.metaDescription,
    alternates: { canonical: `${RESOURCE_CANONICAL}/${slug}` },
  };
}

export default async function ResourceArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getResourceBySlug(slug);
  if (!page) notFound();

  return (
    <main className={styles.main}>
      <Navbar />
      <article className={styles.article}>
        <img src={RESOURCE_BANNER} alt="" className={styles.articleImage} />
        <span className={styles.eyebrow}>{page.eyebrow}</span>
        <h1>{page.title}</h1>
        <p className={styles.summary}>{page.summary}</p>
        <div className={styles.articleGrid}>
          <div className={styles.copy}>
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
          <aside className={styles.sideBox}>
            <h2>Next stops</h2>
            {page.quickLinks.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
            <Link href="/resources">All resources</Link>
          </aside>
        </div>
      </article>
      <Footer />
    </main>
  );
}
