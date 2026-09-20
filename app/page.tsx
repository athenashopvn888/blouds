import type { Metadata } from "next";
import styles from "./page.module.css";
import FleetAnnouncementBanner from "./components/FleetAnnouncementBanner";
import Link from "next/link";
import Navbar from "./components/Navbar";
import HiringCallout from "./components/HiringCallout";
import Footer from "./components/Footer";
import SccHubLinks from "./components/SccHubLinks";
import { WeedDiscoveryModule } from "./components/WeedDiscoveryModule";
import { allFlowers } from "./lib/products";
import { SITE_ORIGIN, gbpLocation } from "./lib/gbp-location";

export const metadata: Metadata = {
  title: { absolute: gbpLocation.seoTitle },
  description: gbpLocation.metaDescription,
  alternates: {
    canonical: SITE_ORIGIN,
  },
  openGraph: {
    url: SITE_ORIGIN,
    title: gbpLocation.seoTitle,
    description: gbpLocation.metaDescription,
  },
};

/* ── Tier data (will come from Supabase later) ── */
const TIERS = [
  {
    name: "Exotic Weed",
    slug: "exotic-weed",
    tagline: "Browse current Exotic flower listings",
    thc: "35-39%",
    unitPrice: 20,
    deal3g: "3g bundle for $40",
    deal6g: "6g bundle for $60",
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.2)",
    icon: "🔥",
    count: 42,
    banner: "/banners/Blouds_Exotic.webp",
  },
  {
    name: "Premium Weed",
    slug: "premium-weed",
    tagline: "Hand-picked connoisseur grade",
    thc: "32-34%",
    unitPrice: 15,
    deal3g: "3g bundle for $30",
    deal6g: "6g bundle for $45",
    color: "#a78bfa",
    glow: "rgba(167, 139, 250, 0.2)",
    icon: "💎",
    count: 38,
    banner: "/banners/Blouds_Premium.webp",
  },
  {
    name: "AAA+ Weed",
    slug: "aaa-weed",
    tagline: "Heavy hitters, proven strains",
    thc: "30-32%",
    unitPrice: 10,
    deal3g: "3g bundle for $20",
    deal6g: "6g bundle for $30",
    color: "#22d3ee",
    glow: "rgba(34, 211, 238, 0.2)",
    icon: "⚡",
    count: 55,
    banner: "/banners/Blouds_AAAplus.webp",
  },
  {
    name: "AA Weed",
    slug: "aa-weed",
    tagline: "Quality daily drivers",
    thc: "27-29%",
    unitPrice: 4,
    deal3g: null,
    deal6g: null,
    color: "#34d399",
    glow: "rgba(52, 211, 153, 0.2)",
    icon: "✦",
    count: 35,
    banner: "/banners/Blouds_AA.webp",
  },
  {
    name: "Budget Weed",
    slug: "budget-weed",
    tagline: "Shreds & value OZs",
    thc: "24-27%",
    unitPrice: 3,
    deal3g: "3g bundle for $10",
    deal6g: null,
    color: "#94a3b8",
    glow: "rgba(148, 163, 184, 0.15)",
    icon: "💰",
    count: 18,
    banner: "/banners/Blouds_Budget.webp",
  },
  {
    name: "EDIBLES & MORE",
    slug: "items/edibles",
    tagline: "Gummies, vapes, pre-rolls, hash",
    thc: "Up to 98%",
    unitPrice: null,
    deal3g: null,
    deal6g: null,
    color: "#fb923c",
    glow: "rgba(251, 146, 60, 0.2)",
    icon: "🍬",
    count: 80,
    banner: "/banners/Blouds_Edibles.webp",
  },
];

/* ── Build featured strains dynamically from real inventory ── */
function buildFeatured() {
  const pool = [...allFlowers].filter(f => f.image);
  
  // Shuffle pool securely
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  
  const picked: typeof pool = [];
  const tierCounts: Record<string, number> = {};
  
  for (const f of pool) {
    if (picked.length >= 8) break;
    const tc = tierCounts[f.tier] || 0;
    if (tc >= 2) continue; // max 2 per tier
    // Prevent duplicate strains with the same name
    if (picked.some(p => p.name === f.name)) continue;
    picked.push(f);
    tierCounts[f.tier] = tc + 1;
  }
  
  return picked.map((f) => ({
    name: f.name,
    slug: f.slug,
    sku: f.sku,
    tier: f.tier.toUpperCase(),
    thc: f.thc,
    type: f.type === "indica" ? "IH" : f.type === "sativa" ? "SH" : "H",
    price3g: f.price3g ? `$${f.price3g.sale ?? f.price3g.regular}` : "—",
    image: f.image,
  }));
}

const FEATURED_STRAINS = buildFeatured();

const RESOURCE_LINKS = [
  {
    href: "/visit",
    tag: "Walk-in",
    title: "Queen Street West storefront",
    body: "How the downtown door looks, how to arrive, and what to bring for a Queen Street West walk-in.",
  },
  {
    href: "/brampton-walk-in-checklist",
    tag: "Walk-in checklist",
    title: "Choosing a Brampton walk-in",
    body: "Confirm hours, address, and phone before you travel — a practical checklist, not a review roundup.",
  },
  {
    href: "/dispensary-brampton",
    tag: "Near me",
    title: "Downtown Queen Street pin",
    body: "Turn a Brampton near-me search into the exact 117 Queen St W storefront, hours, and phone.",
  },
  {
    href: "/weed-dispensary-brampton",
    tag: "Weed dispensary",
    title: "Queen Street West weed dispensary",
    body: "Neighbourhood weed dispensary for Queen Street West / downtown at 117 Queen St W. Flower tiers, formats, and store facts — not a city-wide Brampton roundup.",
  },
  {
    href: "/cannabis-delivery-queen-street-brampton",
    tag: "Delivery",
    title: "Queen Street West delivery",
    body: "Neighbourhood cannabis delivery from 117 Queen St W. Dispatcher-confirmed hours — not the 24-hour walk-in.",
  },
  {
    href: "/24-hour-queen-street-brampton-dispensary",
    tag: "Open 24 hours",
    title: "Overnight Queen Street West",
    body: "Late-night and open-now notes for the 24-hour Queen Street West door — not a city-wide hours list.",
  },
  {
    href: "/native-cigarettes-brampton-queen",
    tag: "Native cigarettes",
    title: "Queen Street West native cigarettes",
    body: "Cigarette category at 117 Queen St W. Check the current cigarette menu. Adults 19+.",
  },
  {
    href: "/nicotine-vape-queen-street-brampton",
    tag: "Nicotine vape",
    title: "Queen Street West nicotine vape",
    body: "Nicotine vape at the downtown Queen Street West door — separate from THC vape. Adults 19+.",
  },
  {
    href: "/resources/menu-guide",
    tag: "Menu guide",
    title: "Downtown Brampton menu map",
    body: "Flower tiers, edibles, vapes, pre-rolls, concentrates, cigarettes, and accessories in one useful flow.",
  },
];

function getTypeLabel(type: string) {
  if (type.startsWith("IH")) return "Indica";
  if (type.startsWith("SH")) return "Sativa";
  return "Hybrid";
}

function getTypeClass(type: string) {
  if (type.startsWith("IH")) return styles.badgeIndica;
  if (type.startsWith("SH")) return styles.badgeSativa;
  return styles.badgeHybrid;
}

function getTierColor(tier: string) {
  const t = TIERS.find((t) => t.name === tier);
  return t?.color || "#94a3b8";
}

export default function HomePage() {
  return (
    <main className={styles.main}>
      <FleetAnnouncementBanner />
      {/* ── NAVBAR ── */}
      <Navbar />
      <HiringCallout />

      {/* ── HERO BANNER ── */}
      <section className={styles.hero} id="hero" style={{ paddingTop: "92px", paddingBottom: "24px", minHeight: "auto", display: "block" }}>
        <a href="#menu" className={styles.heroBanner} style={{ display: "block", position: "relative", width: "100%", cursor: "pointer" }}>
          <img
            src="/banners/Blouds_Welcome_Banner.webp"
            alt="Blouds Dispensary — 24-hour weed dispensary at 117 Queen St W, Brampton"
            className={styles.heroBannerImg}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </a>
      </section>

      <section className={styles.localIdentity} aria-label="Blouds Dispensary Brampton location">
        <div className={styles.container}>
          <p className={styles.localKicker}>Open 24 Hours · Adults 19+</p>
          <h1>24-Hour Weed Dispensary in Brampton</h1>
          <p>
            <strong>{gbpLocation.storeName}</strong> is the walk-in cannabis store at{" "}
            <strong>{gbpLocation.address}</strong>. Call{" "}
            <a href={gbpLocation.phoneHref}>{gbpLocation.phone}</a> or browse the current menu before you head to Queen Street West.
          </p>
          <div className={styles.localActions}>
            <Link href="#menu">Browse the menu</Link>
            <Link href={`/${gbpLocation.slug}`}>Queen Street West weed hub</Link>
            <Link href="/visit">Queen Street walk-in</Link>
            <Link href="/brampton-walk-in-checklist">Walk-in checklist</Link>
            <Link href="/dispensary-brampton">Brampton dispensary near me</Link>
            <Link href="/cannabis-delivery-queen-street-brampton">Queen Street West delivery</Link>
            <Link href="/24-hour-queen-street-brampton-dispensary">24-hour Queen Street West</Link>
            <Link href="/native-cigarettes-brampton-queen">Queen Street West native cigarettes</Link>
            <Link href="/nicotine-vape-queen-street-brampton">Queen Street West nicotine vape</Link>
            <a href={gbpLocation.phoneHref}>Call {gbpLocation.phone}</a>
          </div>
        </div>
      </section>

      <div className={`${styles.container} ${styles.hubWrap}`}>
        <SccHubLinks currentPath="/" />
      </div>

      {/* ── SHOP BY TIER BANNER ── */}
      <section className={styles.tierSection} id="menu">
        <div className={styles.container}>
          <div className={styles.tierIntro}>
            <span>Shop by tier</span>
            <h2>Pick the Blouds shelf that fits the visit.</h2>
            <p>
              Explore Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, Budget Weed and edibles from Blouds,
              with clear choices for different kinds of browsing.
            </p>
          </div>

          <div className={styles.tierGrid}>
            {TIERS.map((tier, i) => (
              <Link
                key={tier.slug}
                href={`/${tier.slug}`}
                className={styles.tierCard}
                style={
                  {
                    "--tier-color": tier.color,
                    "--tier-glow": tier.glow,
                    animationDelay: `${i * 0.1}s`,
                  } as React.CSSProperties
                }
              >
                <div className={styles.tierCardBanner}>
                  <img
                    src={tier.banner}
                    alt={`${tier.name} cannabis flower`}
                    className={styles.tierCardBannerImg}
                  />
                </div>
                <div className={styles.tierCardBody}>
                  <h3
                    className={styles.tierCardName}
                    style={{ color: tier.color }}
                  >
                    {tier.icon} {tier.name}
                  </h3>
                  <div className={styles.tierCardMeta}>
                    <span className={styles.tierCardThc}>
                      THC {tier.thc}
                    </span>
                    <span className={styles.tierCardCount}>
                      {tier.count} strains
                    </span>
                  </div>
                  <div className={styles.tierCardPrice}>
                    {tier.unitPrice !== null && (
                      <span className={styles.tierCardUnitPrice}>
                        ${tier.unitPrice}/g
                      </span>
                    )}
                  </div>
                  {tier.deal3g && (
                    <div className={styles.tierCardDeals}>
                      <span className={styles.tierCardDeal}>🎁 {tier.deal3g}</span>
                      {tier.deal6g && <span className={styles.tierCardDeal}>🎁 {tier.deal6g}</span>}
                    </div>
                  )}
                </div>
                <div className={styles.tierCardArrow}>→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WeedDiscoveryModule />

      {/* ── FEATURE PRODUCTS ── */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.featuredGrid}>
            {FEATURED_STRAINS.map((strain, i) => (
              <Link
                key={`${strain.sku}-${i}`}
                href={`/flower/${strain.slug}`}
                className={styles.productCard}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={styles.productMedia}>
                  <img
                    src={strain.image}
                    alt={strain.name}
                    loading="lazy"
                    className={styles.productImg}
                  />
                  <div className={styles.productBadges}>
                    <span className={styles.productBadgeThc}>
                      THC {strain.thc}
                    </span>
                    <span
                      className={`${styles.productBadgeTier}`}
                      style={{
                        background: `linear-gradient(135deg, ${getTierColor(strain.tier)}, ${getTierColor(strain.tier)}dd)`,
                        color: strain.tier === "BUDGET" ? "#1e293b" : "white",
                      }}
                    >
                      {strain.tier} WEED
                    </span>
                  </div>
                </div>
                <div className={styles.productBody}>
                  <span
                    className={`${styles.productType} ${getTypeClass(strain.type)}`}
                  >
                    {getTypeLabel(strain.type)}
                  </span>
                  <h3 className={styles.productName}>{strain.name}</h3>
                  <div className={styles.productPricing}>
                    <span className={styles.productPrice}>
                      {strain.price3g}
                    </span>
                    <span className={styles.productPriceUnit}>/ 3g</span>
                  </div>
                  <div className={styles.productCta}>View Strain →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GAMES ARCADE BANNER ── */}
      {/* ── DEALS & PROMOS BANNER ── */}
      <section className={styles.promoSection}>
        <Link href="/items/edibles" className={styles.promoBannerLink}>
          <img
            src="/banners/Blouds_Edibles.webp"
            alt="High THC Gummies & Edibles — Blouds Dispensary"
            className={styles.promoBannerImg}
          />
        </Link>
      </section>

      {/* ── VAPES & PREROLL DEALS BANNER ── */}
      <section className={styles.promoSection}>
        <Link href="/items/vapes" className={styles.promoBannerLink}>
          <img
            src="/banners/Blouds_Pre-Rolls.webp"
            alt="24 Hour Cannabis Deals — Vapes, Pre-Rolls & More"
            className={styles.promoBannerImg}
          />
        </Link>
      </section>

      {/* Resource lounge */}
      <section className={styles.resourceLounge}>
        <div className={styles.container}>
          <div className={styles.resourceLoungeTop}>
            <span>Blouds resources</span>
            <h2>Useful Queen Street pages, grouped clean.</h2>
            <p>
              Visit planning, downtown Brampton menu sections, flower tiers, Queen Street West delivery,
              late-night shopping, native cigarettes, nicotine vape, and Queen Street West walk-in pages
              without burying the main menu.
            </p>
            <Link href="/resources">Open Resource Lounge</Link>
          </div>
          <div className={styles.resourceLoungeGrid}>
            {RESOURCE_LINKS.map((resource) => (
              <Link key={resource.href} href={resource.href} className={styles.resourceLoungeCard}>
                <span>{resource.tag}</span>
                <h3>{resource.title}</h3>
                <p>{resource.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORE INFO ── */}
      <section className={styles.storeSection} id="contact">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Visit <span className="text-gradient-neon">Blouds Dispensary</span>
            </h2>
          </div>
          <div className={styles.storeGrid}>
            <div className={styles.storeCard}>
              <div className={styles.storeIcon}>📍</div>
              <h3 className={styles.storeCardTitle}>Location</h3>
              <p className={styles.storeCardText}>
                {gbpLocation.streetAddress}
                <br />
                {gbpLocation.city}, {gbpLocation.province} {gbpLocation.postalCode}
              </p>
            </div>
            <div className={styles.storeCard}>
              <div className={styles.storeIcon}>📞</div>
              <h3 className={styles.storeCardTitle}>Phone</h3>
              <p className={styles.storeCardText}>
                <a href={gbpLocation.phoneHref} className={styles.storeLink}>
                  {gbpLocation.phone}
                </a>
                <br />
                <span className={styles.storeHighlight}>Call before a special trip</span>
              </p>
            </div>
            <div className={styles.storeCard}>
              <div className={styles.storeIcon}>🕒</div>
              <h3 className={styles.storeCardTitle}>Hours</h3>
              <p className={styles.storeCardText}>
                Open 7 Days a Week
                <br />
                <span className={styles.storeHighlight}>{gbpLocation.hoursDisplay}</span>
              </p>
            </div>
            <div className={styles.storeCard}>
              <div className={styles.storeIcon}>🔥</div>
              <h3 className={styles.storeCardTitle}>Walk In</h3>
              <p className={styles.storeCardText}>
                No appointment needed
                <br />
                <span className={styles.storeHighlight}>
                  Queen Street W, Brampton
                </span>
              </p>
            </div>
          </div>

          {/* Embedded map */}
          <div className={styles.mapWrap}>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}

