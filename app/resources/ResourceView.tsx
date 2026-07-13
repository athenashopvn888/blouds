import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { RESOURCE_HOME_ROUTE, type ResourcePage, getRelatedResources } from "./resourceData";
import styles from "./resources.module.css";

type ResourceViewProps = {
  page: ResourcePage;
};

export default function ResourceView({ page }: ResourceViewProps) {
  const isHome = page.route === RESOURCE_HOME_ROUTE;
  const related = getRelatedResources(page);

  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>{page.eyebrow}</span>
          <h1>{page.h1}</h1>
          <p>{page.summary}</p>
          <div className={styles.heroActions}>
            <Link href="/#menu">Open menu</Link>
            {!isHome && <Link href="/resources">All resources</Link>}
          </div>
        </div>
        <img src={page.heroImage} alt="" className={styles.heroImage} />
      </section>

      {isHome && page.cards && (
        <section className={styles.cardGrid} aria-label="Blouds resource guides">
          {page.cards.map((card) => (
            <Link key={card.href} href={card.href} className={styles.card}>
              <span>{card.category}</span>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </Link>
          ))}
        </section>
      )}

      <article className={styles.article}>
        <div className={styles.articleGrid}>
          <div className={styles.copy}>
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
          <aside className={styles.sideBox}>
            <h2>Useful links</h2>
            {page.quickLinks.map((link) => (
              <Link key={`${link.href}-${link.label}`} href={link.href}>
                <span>{link.label}</span>
                {link.description && <small>{link.description}</small>}
              </Link>
            ))}
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className={styles.related} aria-label="Related Blouds resources">
          <div className={styles.relatedHeader}>
            <span className={styles.eyebrow}>Next reads</span>
            <h2>Keep the Blouds route clean</h2>
          </div>
          <div className={styles.relatedGrid}>
            {related.map((relatedPage) => (
              <Link key={relatedPage.route} href={relatedPage.route} className={styles.relatedCard}>
                <span>{relatedPage.eyebrow}</span>
                <h3>{relatedPage.title}</h3>
                <p>{relatedPage.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
