import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import {
  getItemsByCategory,
  getCategoryFromSlug,
  CATEGORY_CONFIG,
  type ItemProduct,
} from "../../lib/products";
import styles from "./items.module.css";

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
    title: `${catInfo.config.name} — ${items.length} Products`,
    description: `Shop ${items.length} ${catInfo.config.name.toLowerCase()} at Always Lit Cannabis. Top brands, best prices. Toronto dispensary.`,
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

  const items = getItemsByCategory(catInfo.key);
  const { config } = catInfo;

  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.hero} style={{ "--cat-color": config.color } as React.CSSProperties}>
        {catSlug === "edibles" && (
          <div className={styles.heroBannerWrap}>
            <img
              src="/banners/neon_lit_edible_product_promotion_banner.webp"
              alt="Edibles & More — Gummies, vapes, pre-rolls, hash"
              className={styles.heroBannerImg}
            />
          </div>
        )}
        <div className={styles.heroContent}>
          {catSlug !== "edibles" && (
            <>
              <span className={styles.heroIcon}>{config.icon}</span>
              <h1 className={styles.heroTitle}>
                <span style={{ color: config.color }}>{config.name}</span>
              </h1>
            </>
          )}
          <p className={styles.heroSub}>{items.length} products available</p>
        </div>
      </section>

      <section className={styles.products}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {items.map((item) => (
              <ItemCard key={item.sku} item={item} catColor={config.color} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ItemCard({ item, catColor }: { item: ItemProduct; catColor: string }) {
  return (
    <div className={styles.card} style={{ "--cat-color": catColor } as React.CSSProperties}>
      <div className={styles.cardMedia}>
        {item.image ? (
          <img src={item.image} alt={item.name} loading="lazy" className={styles.cardImg} />
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
            <span className={styles.priceVal}>{item.price.startsWith('$') ? item.price : `$${item.price}`}</span>
            <span className={styles.priceUnit}>each</span>
          </div>
        )}
        <span className={styles.skuTag}>SKU {item.sku}</span>
      </div>
    </div>
  );
}
