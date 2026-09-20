import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import SafeImage from "../../components/SafeImage";
import { getItemPriceDisplay } from "../../lib/itemPricing";
import Footer from "../../components/Footer";
import {
  getItemsByCategory,
  getCategoryFromSlug,
  CATEGORY_CONFIG,
  type ItemProduct,
} from "../../lib/products";
import styles from "./items.module.css";
import { buildCategoryCollectionJsonLd } from "../../lib/categoryStructuredData";
import { serializeJsonLd } from "../../lib/collectionPageSchema";
import seoContent from "../../lib/seoContent.generated.json";

/* ── Generate all category pages ── */
export function generateStaticParams() {
  return Object.values(CATEGORY_CONFIG).map((c) => ({ category: c.slug }));
}

/* ── SEO ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: catSlug } = await params;
  const catInfo = getCategoryFromSlug(catSlug);
  if (!catInfo) return {};
  const items = getItemsByCategory(catInfo.key);

  return {
    title: catInfo.config.seoTitle || `${catInfo.config.name} — ${items.length} Products`,
    description: catInfo.config.seoIntro || `Shop ${items.length} ${catInfo.config.name.toLowerCase()} at Blouds Dispensary.`,
    alternates: {
      canonical: `https://www.bloudsdispensary.ca/items/${catSlug}`,
    },
    openGraph: {
      url: `https://www.bloudsdispensary.ca/items/${catSlug}`,
    },
  };
}

export default async function ItemsCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: catSlug } = await params;
  const catInfo = getCategoryFromSlug(catSlug);
  if (!catInfo) notFound();

  /* Pre-Rolls also shows accessories (ADD ONS) */
  let items = getItemsByCategory(catInfo.key);
  if (catInfo.key === "PREROLLS") {
    const accessories = getItemsByCategory("ADD ONS");
    const existingIds = new Set(items.map(i => i.sku));
    const uniqueAccessories = accessories.filter(a => !existingIds.has(a.sku));
    items = [...items, ...uniqueAccessories];
  }
  const { config } = catInfo;
  const seoKey = config.name.toLowerCase().includes("thc") ? "vape-disposables" : config.name.toLowerCase().includes("nic") ? "vapes" : catSlug;
  const seoCopy = seoContent.categories[seoKey as keyof typeof seoContent.categories];
  const categoryLinkHrefs = [`/items/${catSlug}`, "/weed-dispensary-brampton", "/exotic-weed", "/premium-weed"];
  const categoryJsonLd = buildCategoryCollectionJsonLd({ canonicalPath: `/items/${catSlug}`, name: config.seoTitle || config.name, description: seoCopy?.paragraphs.join(" ") || config.seoDescription || config.seoIntro, items });

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(categoryJsonLd) }} />
    <main className={styles.main}>
      <Navbar />

      {/* Hero Banner */}
      <section style={{ width: "100%", overflow: "hidden", marginTop: "92px", marginBottom: "24px" }}>
        {config.banner ? (
          <>
            <img
              src={config.banner}
              alt={config.name}
              style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
            />
            <div className={styles.heroContent} style={{ background: config.color, padding: "20px 24px", textAlign: "center" }}>
              <h1 className={styles.heroTitle}>
                <span style={{ color: "#fff" }}>{config.name}</span>
              </h1>
            </div>
          </>
        ) : (
          <div className={styles.heroContent} style={{ background: config.color, padding: "60px 24px", textAlign: "center" }}>
            <span className={styles.heroIcon}>{config.icon}</span>
            <h1 className={styles.heroTitle}>
              <span style={{ color: "#fff" }}>{config.name}</span>
            </h1>
            <p className={styles.heroSub} style={{ color: "rgba(255,255,255,0.8)" }}>{items.length} products listed</p>
          </div>
        )}
      </section>

      {/* Product Grid */}
      <section className={styles.products}>
        <div className={styles.container}>
          {items.length > 0 ? (
            <div className={styles.grid}>
              {items.map((item, index) => (
                <ItemCard key={`${item.sku}-${item.slug}-${index}`} item={item} catColor={config.color} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <span className={styles.emptyIcon}>🌱</span>
              <h3>Coming Soon</h3>
              <p>We&apos;re stocking this category. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className={styles.seoSection}>
        <div className={styles.container}>
          <h2 className={styles.seoTitle}>{seoCopy?.heading || config.seoTitle}</h2>
          {seoCopy ? seoCopy.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.seoBody}>{paragraph}</p>
          )) : <p className={styles.seoBody}>{config.seoDescription}</p>}
          {seoCopy?.links.length ? (
            <p className={styles.seoBody}>
              {seoCopy.links.map((label, index) => (
                <span key={label}>{index ? " · " : ""}<Link href={categoryLinkHrefs[index] || "/weed-dispensary-brampton"}>{label}</Link></span>
              ))}
            </p>
          ) : null}

          {/* FAQ */}
          {config.faqs.length > 0 && (
            <div className={styles.faqBlock}>
              <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
              {config.faqs.map((faq, i) => (
                <details key={i} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          )}

          {/* Visit CTA */}
          <div className={styles.visitCta}>
            <h3 className={styles.visitTitle}>Visit Blouds Dispensary</h3>
            <p className={styles.visitText}>
              117 Queen St W, Brampton, ON L6Y 1M3 · Open 24 Hours
            </p>
            {catSlug === "cigarettes" ? (
              <p className={styles.visitText}>
                Queen Street West neighbourhood guide:{" "}
                <Link href="/native-cigarettes-brampton-queen">native cigarettes on Queen Street West</Link>
                . Overnight walk-in notes:{" "}
                <Link href="/24-hour-queen-street-brampton-dispensary">24-hour Queen Street West</Link>.
              </p>
            ) : null}
            {catSlug === "vapes" ? (
              <p className={styles.visitText}>
                Queen Street West neighbourhood guide:{" "}
                <Link href="/nicotine-vape-queen-street-brampton">nicotine vape on Queen Street West</Link>
                . Overnight walk-in notes:{" "}
                <Link href="/24-hour-queen-street-brampton-dispensary">24-hour Queen Street West</Link>.
              </p>
            ) : null}
            {catSlug !== "cigarettes" && catSlug !== "vapes" ? (
              <p className={styles.visitText}>
                Queen Street West neighbourhood weed dispensary:{" "}
                <Link href="/weed-dispensary-brampton">Queen Street West weed hub</Link>
                . Overnight walk-in notes:{" "}
                <Link href="/24-hour-queen-street-brampton-dispensary">24-hour Queen Street West</Link>.
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <Footer />
    </main>
    </>
  );
}

function ItemCard({ item, catColor }: { item: ItemProduct; catColor: string }) {
  const itemPrice = getItemPriceDisplay(item.price, item.sku);

  return (
    <Link href={`/item/${item.slug}`} className={styles.card} style={{ "--cat-color": catColor } as React.CSSProperties}>
      <div className={styles.cardMedia}>
        {item.image ? (
          <SafeImage 
            src={item.image} 
            alt={item.name} 
            loading="lazy" 
            className={styles.cardImg} 
          />
        ) : (
          <div className={styles.cardPlaceholder}>
            {item.name[0]}
          </div>
        )}
        <div className={styles.cardBadges}>
          {item.thc && <span className={styles.badgeThc}>{item.thc}</span>}
          {item.mg && <span className={styles.badgeMg}>{item.mg}</span>}
        </div>
      </div>
      <div className={styles.cardBody}>
        <span className={styles.cardCategory}>{item.category}</span>
        <h3 className={styles.cardName}>{item.name}</h3>
        {item.price && (
          <div className={styles.cardPrice}>
            <span className={styles.priceVal}>{itemPrice.display}</span>
            <span className={styles.priceUnit}>{itemPrice.isMultiple ? "price options" : "each"}</span>
          </div>
        )}
        <span className={styles.skuTag}>SKU {item.sku}</span>
      </div>
    </Link>
  );
}
