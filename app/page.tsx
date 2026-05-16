import styles from "./page.module.css";

/* ── Tier data (will come from Supabase later) ── */
const TIERS = [
  {
    name: "EXOTIC",
    slug: "exotic",
    tagline: "Ultra-rare, top-shelf genetics",
    thc: "35-39%",
    price: "$40/3g",
    bonus: "Buy 2g Get 1g FREE",
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.2)",
    icon: "🔥",
    count: 42,
    banner: "/banners/exotic_premium_cannabis_with_glowing_accents.webp",
  },
  {
    name: "PREMIUM",
    slug: "premium",
    tagline: "Hand-picked connoisseur grade",
    thc: "32-34%",
    price: "$30/3g",
    bonus: "Buy 2g Get 1g FREE",
    color: "#a78bfa",
    glow: "rgba(167, 139, 250, 0.2)",
    icon: "💎",
    count: 38,
    banner: "/banners/premium_cannabis_with_glowing_accents.webp",
  },
  {
    name: "AAA+",
    slug: "aaa",
    tagline: "Heavy hitters, proven strains",
    thc: "30-32%",
    price: "$20/3g",
    bonus: "Buy 2g Get 1g FREE",
    color: "#22d3ee",
    glow: "rgba(34, 211, 238, 0.2)",
    icon: "⚡",
    count: 55,
    banner: "/banners/electric_neon_cannabis_ad_banner.webp",
  },
  {
    name: "AA",
    slug: "aa",
    tagline: "Quality daily drivers",
    thc: "27-29%",
    price: "$20/5g",
    bonus: "Great value, great smoke",
    color: "#34d399",
    glow: "rgba(52, 211, 153, 0.2)",
    icon: "🌿",
    count: 35,
    banner: "/banners/neon_cannabis_product_showcase.webp",
  },
  {
    name: "BUDGET",
    slug: "budget",
    tagline: "Shreds & value OZs",
    thc: "24-27%",
    price: "From $40/oz",
    bonus: "Stack up, save more",
    color: "#94a3b8",
    glow: "rgba(148, 163, 184, 0.15)",
    icon: "💰",
    count: 18,
    banner: "/banners/premium_budget_cannabis_deal_showcase.webp",
  },
  {
    name: "EDIBLES & MORE",
    slug: "edibles",
    tagline: "Gummies, vapes, pre-rolls, hash",
    thc: "Up to 98%",
    price: "From $3",
    bonus: "100+ products available",
    color: "#fb923c",
    glow: "rgba(251, 146, 60, 0.2)",
    icon: "🍬",
    count: 80,
    banner: "/banners/neon_lit_edible_product_promotion_banner.webp",
  },
];

const FEATURED_STRAINS = [
  { name: "PINK GODFATHER", sku: "500", tier: "EXOTIC", thc: "36%", type: "IH", price3g: "$40", image: "https://afterdarkcannabis.com/wp-content/uploads/2025/11/500-Pink-Godfather-500.jpg" },
  { name: "HAN SOLO", sku: "522", tier: "EXOTIC", thc: "39%", type: "IH", price3g: "$40", image: "https://afterdarkcannabis.com/wp-content/uploads/2025/06/522-Han-Solo.jpeg" },
  { name: "PINK VELVET", sku: "542", tier: "EXOTIC", thc: "39%", type: "IH", price3g: "$40", image: "https://kennedyloudcannabis.com/wp-content/uploads/2026/03/505-542PINK-VELVET.webp" },
  { name: "TOASTED STRUDEL", sku: "412", tier: "PREMIUM", thc: "33%", type: "IH", price3g: "$30", image: "https://afterdarkcannabis.com/wp-content/uploads/2025/11/412-Toasted-Strudel-Sativa.jpg" },
  { name: "PINK TOM GAS", sku: "374", tier: "AAA+", thc: "31%", type: "IH", price3g: "$20", image: "https://afterdarkcannabis.com/wp-content/uploads/2025/11/374-PINK-TOM-GAS-99144.jpg" },
  { name: "PINEAPPLE EXPRESS", sku: "300", tier: "AAA+", thc: "30%", type: "SH", price3g: "$20", image: "https://afterdarkcannabis.com/wp-content/uploads/2025/05/300-PINEAPPLE-EXPRESS-SATIVA.jpg" },
  { name: "PINK GODZILLA", sku: "466", tier: "PREMIUM", thc: "34%", type: "IH", price3g: "$30", image: "https://kennedyloudcannabis.com/wp-content/uploads/2025/12/461__466__PINK_GODZILLA.webp" },
  { name: "BRUCE BANNER", sku: "541", tier: "EXOTIC", thc: "38%", type: "SH", price3g: "$40", image: "https://kennedyloudcannabis.com/wp-content/uploads/2026/03/501-541-BRUCE-BANNER.webp" },
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
      {/* ── NAVBAR ── */}
      <nav className={styles.navbar} id="main-nav">
        <div className={styles.navInner}>
          <a href="/" className={styles.navLogo}>
            <img
              src="/banners/logo.jpg"
              alt="Always Lit Cannabis"
              className={styles.navLogoImg}
            />
            <span className={styles.navBrand}>
              ALWAYS<span className={styles.navBrandFire}>🔥</span>LIT
            </span>
          </a>
          <div className={styles.navLinks}>
            <a href="#menu" className={styles.navLink}>
              Menu
            </a>
            <a href="/games" className={styles.navLink}>
              Games
            </a>
            <a href="/contact" className={styles.navLink}>
              Contact
            </a>
          </div>
          <div className={styles.navActions}>
            <span className={styles.navOpen}>
              <span className={styles.navOpenDot}></span>
              Open Now
            </span>
          </div>
        </div>
      </nav>

      {/* ── HERO BANNER ── */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBanner}>
          <img
            src="/banners/always_lit_premium_cannabis_showcase.webp"
            alt="Always Lit Cannabis — Premium Cannabis, Always Fire"
            className={styles.heroBannerImg}
          />
          <div className={styles.heroBannerOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            TORONTO&apos;S MOST FIRE DISPENSARY
          </div>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleLine1}>Premium Cannabis.</span>
            <span className={styles.heroTitleLine2}>
              Always <span className={styles.heroFire}>Fire.</span>
            </span>
            <span className={styles.heroTitleLine3}>
              Always <span className={styles.heroLit}>Lit.</span>
            </span>
          </h1>
          <p className={styles.heroSubtitle}>
            200+ hand-picked strains · Exotic to Budget · THC up to 39% ·
            Real-time inventory · No BS
          </p>
          <div className={styles.heroButtons}>
            <a href="#menu" className={styles.heroBtn}>
              Browse Menu
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <a href="/games" className={styles.heroBtnGhost}>
              🎮 Play Games
            </a>
          </div>

          {/* Stats bar */}
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>200+</span>
              <span className={styles.heroStatLabel}>Strains</span>
            </div>
            <div className={styles.heroStatDivider}></div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>39%</span>
              <span className={styles.heroStatLabel}>Max THC</span>
            </div>
            <div className={styles.heroStatDivider}></div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>$5</span>
              <span className={styles.heroStatLabel}>From /g</span>
            </div>
            <div className={styles.heroStatDivider}></div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>24/7</span>
              <span className={styles.heroStatLabel}>Open</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOP BY TIER BANNER ── */}
      <section className={styles.tierSection} id="menu">
        <div className={styles.container}>
          <div className={styles.sectionBanner}>
            <img
              src="/banners/neon_crafted_cannabis_tier_shop_banner.webp"
              alt="Shop by Tier — From exotic craft flower to value budget OZs"
              className={styles.sectionBannerImg}
            />
          </div>

          <div className={styles.tierGrid}>
            {TIERS.map((tier, i) => (
              <a
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
                    <span className={styles.tierCardPriceMain}>
                      {tier.price}
                    </span>
                    <span className={styles.tierCardBonus}>{tier.bonus}</span>
                  </div>
                </div>
                <div className={styles.tierCardArrow}>→</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOT RIGHT NOW ── */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sectionBanner}>
            <img
              src="/banners/hot_right_now_in_neon_glow.webp"
              alt="Hot Right Now — Staff picks and top sellers"
              className={styles.sectionBannerImg}
            />
          </div>

          <div className={styles.featuredGrid}>
            {FEATURED_STRAINS.map((strain, i) => (
              <a
                key={strain.sku}
                href={`/flower/${strain.name.toLowerCase().replace(/\s+/g, "-")}`}
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
                      {strain.tier}
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── GAMES ARCADE BANNER ── */}
      <section className={styles.promoSection}>
        <a href="/games" className={styles.promoBannerLink}>
          <img
            src="/banners/neon_arcade_gaming_promotion_banner.webp"
            alt="Games Arcade — Flappy Bud, Snake Munchies, Brick Breaker 420"
            className={styles.promoBannerImg}
          />
        </a>
      </section>

      {/* ── STORE INFO ── */}
      <section className={styles.storeSection} id="contact">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Visit <span className="text-gradient-neon">Always Lit</span>
            </h2>
          </div>
          <div className={styles.storeGrid}>
            <div className={styles.storeCard}>
              <div className={styles.storeIcon}>📍</div>
              <h3 className={styles.storeCardTitle}>Location</h3>
              <p className={styles.storeCardText}>
                644 Queen St W
                <br />
                Toronto, ON M6J 1E4
                <br />
                <a
                  href="https://maps.app.goo.gl/YFPDuRCjwiuZL4J86"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.storeLink}
                >
                  Get Directions →
                </a>
              </p>
            </div>
            <div className={styles.storeCard}>
              <div className={styles.storeIcon}>🕒</div>
              <h3 className={styles.storeCardTitle}>Hours</h3>
              <p className={styles.storeCardText}>
                Open 7 Days a Week
                <br />
                <span className={styles.storeHighlight}>10 AM – 3 AM Daily</span>
              </p>
            </div>
            <div className={styles.storeCard}>
              <div className={styles.storeIcon}>🔥</div>
              <h3 className={styles.storeCardTitle}>Walk In</h3>
              <p className={styles.storeCardText}>
                No appointment needed
                <br />
                <span className={styles.storeHighlight}>
                  Queen West &amp; Bathurst
                </span>
              </p>
            </div>
          </div>

          {/* Embedded map */}
          <div className={styles.mapWrap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0!2d-79.4028!3d43.6483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34de48e69e9d%3A0x0!2s644+Queen+St+W%2C+Toronto%2C+ON+M6J+1E4!5e0!3m2!1sen!2sca!4v1"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "var(--radius-lg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Always Lit Cannabis — 644 Queen St W, Toronto"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            ALWAYS<span style={{ color: "var(--fire-orange)" }}>🔥</span>LIT
          </div>
          <p className={styles.footerText}>
            644 Queen St W, Toronto, ON M6J 1E4 · Open Daily 10AM–3AM
          </p>
          <p className={styles.footerText}>
            Premium Cannabis · Always Fire · Always Lit
          </p>
          <p className={styles.footerLegal}>
            © {new Date().getFullYear()} Always Lit Cannabis. Must be 19+ to
            enter. Please consume responsibly.
          </p>
        </div>
      </footer>
    </main>
  );
}
