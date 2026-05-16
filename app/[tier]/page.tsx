import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import {
  getFlowersByTier,
  getTierFromSlug,
  TIER_CONFIG,
  type FlowerProduct,
} from "../lib/products";
import styles from "./tier.module.css";

/* ── Generate all tier pages at build ── */
export function generateStaticParams() {
  return Object.values(TIER_CONFIG).map((t) => ({ tier: t.slug }));
}

/* ── Dynamic SEO metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ tier: string }>;
}): Promise<Metadata> {
  const { tier: tierSlug } = await params;
  const tierInfo = getTierFromSlug(tierSlug);
  if (!tierInfo) return {};
  const flowers = getFlowersByTier(tierInfo.key);

  return {
    title: `${tierInfo.config.name} Cannabis Flower — ${flowers.length} Strains`,
    description: `Shop ${flowers.length} ${tierInfo.config.name.toLowerCase()} cannabis strains at Always Lit Cannabis. ${tierInfo.config.tagline}. Toronto's most fire dispensary.`,
    openGraph: {
      title: `${tierInfo.config.name} Flower | Always Lit Cannabis`,
      description: `${flowers.length} curated ${tierInfo.config.name.toLowerCase()} strains in stock now.`,
    },
  };
}

/* ── Page component ── */
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

  // Separate sale items
  const saleFlowers = flowers.filter((f) => f.isSale);
  const regularFlowers = flowers.filter((f) => !f.isSale);
  const hotFlowers = flowers.filter((f) => f.isHot);

  return (
    <main className={styles.main}>
      <Navbar />

      {/* ── Hero banner ── */}
      <section
        className={styles.hero}
        style={{ "--tier-color": config.color } as React.CSSProperties}
      >
        <div className={styles.heroBannerWrap}>
          <img
            src={config.banner}
            alt={`${config.name} Cannabis Flower — ${config.tagline}`}
            className={styles.heroBannerImg}
          />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroStats}>
            <span className={styles.stat}>
              <strong>{flowers.length}</strong> strains
            </span>
            {saleFlowers.length > 0 && (
              <span className={styles.statSale}>
                🔥 {saleFlowers.length} on sale
              </span>
            )}
            {hotFlowers.length > 0 && (
              <span className={styles.statHot}>
                ⚡ {hotFlowers.length} hot picks
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ── Product grid ── */}
      <section className={styles.products}>
        <div className={styles.container}>
          {/* Sale section */}
          {saleFlowers.length > 0 && (
            <>
              <h2 className={styles.sectionTitle}>
                🔥 <span style={{ color: "#f43f5e" }}>On Sale</span>
              </h2>
              <div className={styles.grid}>
                {saleFlowers.map((f) => (
                  <FlowerCard
                    key={`${f.sku}-${f.slug}`}
                    flower={f}
                    tierColor={config.color}
                  />
                ))}
              </div>
            </>
          )}

          {/* All strains */}
          <h2 className={styles.sectionTitle}>
            All{" "}
            <span style={{ color: config.color }}>{config.name}</span>{" "}
            Strains
          </h2>
          <div className={styles.grid}>
            {regularFlowers.map((f) => (
              <FlowerCard
                key={`${f.sku}-${f.slug}`}
                flower={f}
                tierColor={config.color}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── Flower Card component ── */
function FlowerCard({
  flower,
  tierColor,
}: {
  flower: FlowerProduct;
  tierColor: string;
}) {
  const typeLabel = flower.type === "indica" ? "Indica" : flower.type === "sativa" ? "Sativa" : "Hybrid";
  const typeClass = flower.type === "indica" ? styles.indica : flower.type === "sativa" ? styles.sativa : styles.hybrid;

  // Find the best price to show
  const prices = [
    { label: "3g", p: flower.price3g },
    { label: "5g", p: flower.price5g },
    { label: "14g", p: flower.price14g },
    { label: "28g", p: flower.price28g },
  ].filter((x) => x.p !== null);

  const mainPrice = prices[0];

  return (
    <Link
      href={`/flower/${flower.slug}`}
      className={styles.card}
      style={{ "--tier-color": tierColor } as React.CSSProperties}
    >
      <div className={styles.cardMedia}>
        {flower.image ? (
          <img src={flower.image} alt={flower.name} loading="lazy" className={styles.cardImg} />
        ) : (
          <div className={styles.cardPlaceholder}>{flower.name[0]}</div>
        )}

        <div className={styles.cardBadges}>
          <span className={styles.badgeThc}>THC {flower.thc}</span>
          {flower.isSale && <span className={styles.badgeSale}>SALE</span>}
          {flower.isHot && <span className={styles.badgeHot}>HOT 🔥</span>}
        </div>
      </div>

      <div className={styles.cardBody}>
        <span className={`${styles.typeTag} ${typeClass}`}>{typeLabel}</span>
        <h3 className={styles.cardName}>{flower.name}</h3>

        <div className={styles.cardPricing}>
          {mainPrice && mainPrice.p && (
            <>
              {mainPrice.p.sale !== null ? (
                <div className={styles.salePrice}>
                  <span className={styles.priceOld}>${mainPrice.p.regular}</span>
                  <span className={styles.priceNew}>${mainPrice.p.sale}</span>
                  <span className={styles.priceUnit}>/ {mainPrice.label}</span>
                </div>
              ) : (
                <div className={styles.regularPrice}>
                  <span className={styles.price}>${mainPrice.p.regular}</span>
                  <span className={styles.priceUnit}>/ {mainPrice.label}</span>
                </div>
              )}
            </>
          )}
        </div>

        {/* Weight options */}
        <div className={styles.weights}>
          {prices.map(({ label }) => (
            <span key={label} className={styles.weightPill}>
              {label}
            </span>
          ))}
        </div>

        <div className={styles.cardCta}>View Strain →</div>
      </div>
    </Link>
  );
}
