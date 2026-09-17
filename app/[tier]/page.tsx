import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlowerCard from "../components/FlowerCard";
import {
  getFlowersByTier,
  getTierFromSlug,
  TIER_CONFIG,
} from "../lib/products";
import { TIER_SEO } from "../lib/tierSeoContent";
import { TIER_EDUCATION } from "../lib/tierEducation";
import { buildTierCollectionJsonLd } from "../lib/tierStructuredData";
import seoContent from "../lib/seoContent.generated.json";
import styles from "./tier.module.css";

/* -- Generate all tier pages at build -- */
export function generateStaticParams() {
  return Object.values(TIER_CONFIG).map((t) => ({ tier: t.slug }));
}

/* -- Dynamic SEO metadata -- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ tier: string }>;
}): Promise<Metadata> {
  const { tier: tierSlug } = await params;
  const tierInfo = getTierFromSlug(tierSlug);
  if (!tierInfo) return {};
  const flowers = getFlowersByTier(tierInfo.key);
  const seo = TIER_SEO[tierInfo.key];

  return {
    title: seo ? { absolute: seo.seoTitle } : `${tierInfo.config.name} Cannabis Flower - ${flowers.length} Strains`,
    description: seo?.seoIntro || `Shop ${flowers.length} ${tierInfo.config.name.toLowerCase()} cannabis strains at Blouds Dispensary.`,
    alternates: {
      canonical: `https://www.bloudsdispensary.ca/${tierSlug}`,
    },
    openGraph: {
      title: seo?.seoTitle || `${tierInfo.config.name} Flower | Blouds Dispensary`,
      description: seo?.seoIntro || `Browse the ${tierInfo.config.name.toLowerCase()} flower section at Blouds Dispensary.`,
      url: `https://www.bloudsdispensary.ca/${tierSlug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.seoTitle || `${tierInfo.config.name} Flower | Blouds Dispensary`,
      description: seo?.seoIntro || `Browse the ${tierInfo.config.name.toLowerCase()} flower section at Blouds Dispensary.`,
    },
  };
}

/* -- Page component -- */
export default async function TierPage({
  params,
}: {
  params: Promise<{ tier: string }>;
}) {
  const { tier: tierSlug } = await params;
  const tierInfo = getTierFromSlug(tierSlug);
  if (!tierInfo) notFound();

  const flowers = getFlowersByTier(tierInfo.key);
  const { config } = tierInfo;
  const seo = TIER_SEO[tierInfo.key];
  const education = TIER_EDUCATION[tierInfo.key];
  const flowerCopy = seoContent.flowerTiers;
  const tierLinks = Object.values(TIER_CONFIG);

  const saleFlowers = flowers.filter((f) => f.isSale);
  const regularFlowers = flowers.filter((f) => !f.isSale);
  const hotFlowers = flowers.filter((f) => f.isHot);
  const displayFlowers = [...saleFlowers, ...regularFlowers];
  const tierJsonLd = buildTierCollectionJsonLd({
    canonicalPath: `/${tierSlug}`,
    name: seo?.h1 || config.name,
    description: seo?.seoIntro || `${config.name} cannabis flower at Blouds Dispensary in Brampton.`,
    flowers: displayFlowers,
  });

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tierJsonLd) }} />
    <main className={styles.main}>
      <Navbar />

      {/* Banner Image (standalone, no overlay text) */}
      <section className={styles.bannerSection}>
        <img
          src={config.banner}
          alt={seo?.imageAlt || `${config.name} Cannabis Flower - ${config.tagline}`}
          className={styles.bannerImg}
        />
      </section>

      {/* Hero Content BELOW banner */}
      <section
        className={styles.heroInfo}
        style={{ "--tier-color": config.color } as React.CSSProperties}
      >
        <div className={styles.heroInfoInner}>
          <div className={styles.heroLeft}>
            <div className={styles.heroTitleRow}>
              <span className={styles.heroIcon}>{config.icon}</span>
              <h1 className={styles.heroTitle}>
                <span style={{ color: config.color }}>{seo?.h1 || config.name}</span>
              </h1>
            </div>
            <p className={styles.heroTagline}>{config.tagline}</p>
            <div className={styles.heroStats}>
              <span className={styles.stat}>
                <strong>{flowers.length}</strong> strains
              </span>
              {saleFlowers.length > 0 && (
                <span className={styles.statSale}>
                  Sale: {saleFlowers.length} on sale
                </span>
              )}
              {hotFlowers.length > 0 && (
                <span className={styles.statHot}>
                  Hot: {hotFlowers.length} hot picks
                </span>
              )}
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.unitPriceBox}>
              <span className={styles.unitPriceLabel}>Starting at</span>
              <span className={styles.unitPriceValue}>${config.unitPrice}/g</span>
            </div>

            {(config.deal3g || config.deal6g) && (
            <div className={styles.dealRow}>
              {config.deal3g && (
              <div className={styles.dealBox}>
                <div className={styles.dealLabel}>{config.deal3g.label}</div>
                <div className={styles.dealPrice}>
                  = <strong>${config.deal3g.price}</strong> / {config.deal3g.total}
                </div>
              </div>
              )}
              {config.deal6g && (
                <div className={styles.dealBox}>
                  <div className={styles.dealLabel}>{config.deal6g.label}</div>
                  <div className={styles.dealPrice}>
                    = <strong>${config.deal6g.price}</strong> / {config.deal6g.total}
                  </div>
                </div>
              )}
            </div>
            )}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className={styles.products}>
        <div className={styles.container}>
          {saleFlowers.length > 0 && (
            <>
              <h2 className={styles.sectionTitle}>
                <span style={{ color: "#f43f5e" }}>On Sale</span>
              </h2>
              <div className={styles.grid}>
                {saleFlowers.map((f) => (
                  <FlowerCard
                    key={`${f.sku}-${f.slug}`}
                    flower={f}
                    tierKey={tierInfo.key}
                  />
                ))}
              </div>
            </>
          )}

          <h2 className={styles.sectionTitle} style={{ color: config.color }}>
            {seo?.catalogHeading || `All ${config.name} Strains`}
          </h2>
          <div className={styles.grid}>
            {regularFlowers.map((f) => (
              <FlowerCard
                key={`${f.sku}-${f.slug}`}
                flower={f}
                tierKey={tierInfo.key}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      {seo && (
        <section className={styles.seoSection}>
          <div className={styles.container}>
            <h2 className={styles.seoMainTitle}>About the {config.name} Flower Tier</h2>
            <p className={styles.seoIntro}>{seo.seoIntro}</p>

            <div className={styles.compareBlock}>
              <h3 className={styles.seoHeading}>Compare Blouds Weed &amp; Flower Tiers</h3>
              <nav className={styles.tierLinks} aria-label="Compare Blouds flower tiers">
                <Link href="/exotic-weed">Exotic Weed</Link>
                <Link href="/premium-weed">Premium Weed</Link>
                <Link href="/aaa-weed">AAA+ Weed</Link>
                <Link href="/aa-weed">AA Weed</Link>
                <Link href="/budget-weed">Budget Weed</Link>
              </nav>
              <p className={styles.seoBody}>
                Looking for the broader store overview instead of one flower tier? Explore Blouds Dispensary —{" "}
                <Link href="/weed-dispensary-brampton">Weed Dispensary in Brampton</Link>{" "}
                for store information and additional cannabis categories.
              </p>
            </div>

            {education && (
              <section className={styles.educationBlock}>
                <h2 className={styles.seoMainTitle}>{education.heading}</h2>
                <p className={styles.seoBody}>{education.intro}</p>
                <div className={styles.educationGrid}>
                  {education.details.map((detail) => (
                    <div key={detail.heading} className={styles.educationDetail}>
                      <h3 className={styles.seoHeading}>{detail.heading}</h3>
                      <p className={styles.seoBody}>{detail.body}</p>
                    </div>
                  ))}
                </div>
                <nav className={styles.educationLinks} aria-label={`${config.name} Weed education`}>
                  {education.links.map((link) => (
                    <Link href={link.href} key={link.href}>{link.label}</Link>
                  ))}
                </nav>
              </section>
            )}

            <div className={styles.seoBlock}>
              <h3 className={styles.seoHeading}>{config.name} at Blouds Dispensary</h3>
              {flowerCopy.paragraphs.map((paragraph) => <p key={paragraph} className={styles.seoBody}>{paragraph}</p>)}
              <p className={styles.seoBody}>{flowerCopy.links.map((label, index) => {
                const destination = tierLinks[index]?.slug || tierSlug;
                return <span key={label}>{index ? " · " : ""}<Link href={`/${destination}`}>{label}</Link></span>;
              })}</p>
            </div>

            {/* FAQ Accordion */}
            {seo.faqs.length > 0 && (
              <div className={styles.faqSection}>
                <h3 className={styles.seoHeading}>Frequently Asked Questions</h3>
                {seo.faqs.map((faq, i) => (
                  <details key={i} className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>{faq.q}</summary>
                    <p className={styles.faqAnswer}>{faq.a}</p>
                  </details>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <Footer />
    </main>
    </>
  );
}

