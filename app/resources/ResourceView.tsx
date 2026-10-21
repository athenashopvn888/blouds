import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./resources.module.css";
import ResourceMarkdown from "./ResourceMarkdown";
import {
  AUTHORS,
  SITE,
  getCategoryPages,
  getChildPages,
  getFeaturedPages,
  getRelatedPages,
  type ResourcePage,
} from "./resourceData";
import { isHiddenCigaretteHref, visibleSmokeCopy, visibleSmokeLabel, visibleSmokeMarkdown } from "../lib/siteConfig";
import { SHOW_CIGARETTES } from "../lib/showCigarettes";

type ResourceViewProps = {
  page: ResourcePage;
};

export default function ResourceView({ page }: ResourceViewProps) {
  const author = AUTHORS[page.author];
  const children = page.kind === "root" ? getCategoryPages() : getChildPages(page.path);
  const featured = page.kind === "root" ? getFeaturedPages() : children;
  const related = getRelatedPages(page);

  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <img src={page.image.src} alt={visibleSmokeLabel(page.image.alt)} className={styles.heroImage} />
          <div className={styles.heroShade} />
        </div>
        <div className={styles.heroContent}>
          <Breadcrumbs page={page} />
          <p className={styles.kicker}>{visibleSmokeLabel(page.categoryLabel)}</p>
          <h1 className={page.bodyMarkdown ? styles.articleTitle : undefined}>{visibleSmokeLabel(page.h1)}</h1>
          {visibleSmokeCopy(page.excerpt) ? <p className={styles.heroText}>{visibleSmokeCopy(page.excerpt)}</p> : null}
          <div className={styles.metaRow}>
            <span>{author.name}</span>
            <span>{author.role}</span>
            <span>Updated {formatDate(page.dateModified)}</span>
          </div>
        </div>
      </section>

      <section className={styles.bodyWrap}>
        <article className={styles.article}>
          {page.bodyMarkdown ? (
            <ResourceMarkdown markdown={visibleSmokeMarkdown(page.bodyMarkdown)} />
          ) : (
            <>
              <div className={styles.introBlock}>
                {page.intro.map((paragraph) => visibleSmokeCopy(paragraph)).filter(Boolean).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {children.length > 0 && (
                <ResourceCards
                  title={page.kind === "root" ? "Choose a Resource Section" : "Guides in This Section"}
                  pages={children}
                  leadLink={page.kind === "root" ? page.guidesCard : undefined}
                />
              )}

              {page.kind === "root" && featured.length > 0 && (
                <ResourceCards title="Featured Blouds Reads" pages={featured} compact />
              )}

              {page.sections.map((section) => {
                const heading = visibleSmokeLabel(section.heading);
                return (
                <section key={section.heading} className={styles.contentSection}>
                  {heading ? <h2>{heading}</h2> : null}
                  {section.body.map((paragraph) => visibleSmokeCopy(paragraph)).filter(Boolean).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => visibleSmokeCopy(bullet)).filter(Boolean).map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {section.links && <LinkList links={section.links} />}
                </section>
              );})}
            </>
          )}

          {page.faqs && page.faqs.length > 0 && (
            <section className={styles.contentSection} aria-labelledby="resource-faq-heading">
              <h2 id="resource-faq-heading">Frequently Asked Questions</h2>
              <div className={styles.faqList}>
                {page.faqs.map((faq) => ({ question: visibleSmokeCopy(faq.question), answer: visibleSmokeCopy(faq.answer) })).filter((faq) => faq.question && faq.answer).map((faq) => (
                  <article className={styles.faqItem} key={faq.question}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {page.commercialLinks.length > 0 && (
            <section className={styles.linkPanel}>
              <h2>Current Blouds Links</h2>
              <LinkList links={page.commercialLinks} />
            </section>
          )}

          {related.length > 0 && <ResourceCards title="Related Resources" pages={related} compact />}
        </article>

        <aside className={styles.sideRail}>
          <div className={styles.authorCard}>
            <p className={styles.railLabel}>Guide</p>
            <strong>{author.name}</strong>
            <span>{author.handle}</span>
            <span>{author.role}</span>
          </div>
          <div className={styles.storeCard}>
            <p className={styles.railLabel}>Blouds Dispensary</p>
            <span>{SITE.address}</span>
            <span>{SITE.hours}</span>
            <Link href={SITE.storePage}>View store page</Link>
          </div>
          <div className={styles.keywordCard}>
            <p className={styles.railLabel}>Shopping Sections</p>
            <span>Gas Gang</span>
            <span>Drizzle Switch</span>
            <span>ZYN, Velo, Pablo, Killa</span>
            <span>{SHOW_CIGARETTES ? "Backwoods and grabba" : "Backwoods"}</span>
          </div>
        </aside>
      </section>
      <Footer />
    </main>
  );
}

function Breadcrumbs({ page }: { page: ResourcePage }) {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span>/</span>
      <Link href="/resources">Resources</Link>
      {page.path !== "/resources" && (
        <>
          <span>/</span>
          <span>{visibleSmokeLabel(page.title)}</span>
        </>
      )}
    </nav>
  );
}

function ResourceCards({ title, pages, compact = false, leadLink }: { title: string; pages: ResourcePage[]; compact?: boolean; leadLink?: { label: string; href: string; description?: string } }) {
  return (
    <section className={styles.cardsSection}>
      <h2>{title}</h2>
      <div className={compact ? styles.cardGridCompact : styles.cardGrid}>
        {leadLink && (
          <Link href={leadLink.href} className={styles.resourceCard}>
            <span className={styles.cardKicker}>Name Guides</span>
            <h3>{visibleSmokeLabel(leadLink.label)}</h3>
            {visibleSmokeCopy(leadLink.description || "") ? <p>{visibleSmokeCopy(leadLink.description || "")}</p> : null}
          </Link>
        )}
        {pages.filter((page) => !isHiddenCigaretteHref(page.path)).map((page) => {
          const author = AUTHORS[page.author];
          const title = visibleSmokeLabel(page.title);
          const excerpt = visibleSmokeCopy(page.excerpt);
          if (!title) return null;
          return (
            <Link href={page.path} key={page.path} className={styles.resourceCard}>
              <span className={styles.cardKicker}>{visibleSmokeLabel(page.categoryLabel)}</span>
              <h3>{title}</h3>
              {excerpt ? <p>{excerpt}</p> : null}
              <div className={styles.cardMeta}>
                <span>{author.name}</span>
                <span>Updated {formatDate(page.dateModified)}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function LinkList({ links }: { links: { label: string; href: string; description?: string }[] }) {
  return (
    <div className={styles.linkList}>
      {links.filter((link) => !isHiddenCigaretteHref(link.href)).map((link) => (
        <Link href={link.href} key={`${link.href}-${link.label}`}>
          <span>{visibleSmokeLabel(link.label)}</span>
          {visibleSmokeCopy(link.description || "") ? <small>{visibleSmokeCopy(link.description || "")}</small> : null}
        </Link>
      ))}
    </div>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}
