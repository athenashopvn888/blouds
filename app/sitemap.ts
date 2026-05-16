import { allFlowers, TIER_CONFIG, CATEGORY_CONFIG } from "./lib/products";
import type { MetadataRoute } from "next";

const BASE = "https://alwayslitcannabis.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  /* ── Static pages ── */
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/games`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];

  /* ── Tier pages ── */
  const tierPages: MetadataRoute.Sitemap = Object.values(TIER_CONFIG).map((t) => ({
    url: `${BASE}/${t.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  /* ── Item category pages ── */
  const catPages: MetadataRoute.Sitemap = Object.values(CATEGORY_CONFIG).map((c) => ({
    url: `${BASE}/items/${c.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  /* ── Individual flower pages (the SEO gold mine) ── */
  const flowerPages: MetadataRoute.Sitemap = allFlowers.map((f) => ({
    url: `${BASE}/flower/${f.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  /* ── Game pages ── */
  const gamePages: MetadataRoute.Sitemap = [
    "flappy-bud", "snake-munchies", "brick-breaker", "memory-match", "2048-strains"
  ].map((g) => ({
    url: `${BASE}/games/${g}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...tierPages, ...catPages, ...flowerPages, ...gamePages];
}
