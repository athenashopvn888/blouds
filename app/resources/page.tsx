import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { RESOURCE_BANNER, RESOURCE_CANONICAL, RESOURCE_PAGES } from "./resourceData";
import styles from "./resources.module.css";

export const metadata: Metadata = {
  title: "Blouds Dispensary Resources | Queen Street W Brampton Guides",
  description: "Blouds Dispensary resources for Queen Street W visits, flower tiers, edibles, vapes, cigarettes, and downtown Brampton menu planning.",
  alternates: { canonical: RESOURCE_CANONICAL },
};

export default function ResourcesPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Blouds resource lounge</span>
          <h1>Queen Street W Menu Resources</h1>
          <p>Useful Blouds guides for downtown Brampton shoppers: visit planning, flower tiers, vapes, edibles, cigarettes, and late-night menu shortcuts.</p>
        </div>
        <img src={RESOURCE_BANNER} alt="Blouds Dispensary resource hub" className={styles.heroImage} />
      </section>
      <section className={styles.grid}>
        {RESOURCE_PAGES.map((page) => (
          <Link key={page.slug} href={`/resources/${page.slug}`} className={styles.card}>
            <span>{page.eyebrow}</span>
            <h2>{page.title}</h2>
            <p>{page.summary}</p>
          </Link>
        ))}
      </section>
      <Footer />
    </main>
  );
}
