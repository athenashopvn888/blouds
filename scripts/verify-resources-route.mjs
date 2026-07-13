import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const exists = (file) => fs.existsSync(path.join(root, file));

const data = read("app/resources/resourceData.ts");
const sitemap = read("app/sitemap.ts");
const nav = read("app/components/Navbar.tsx");
const footer = read("app/components/Footer.tsx");
const infoPage = read("app/info/[seoPage]/page.tsx");
const seoPages = read("app/lib/seoPages.ts");
const tvPage = read("app/tv/page.tsx");
const tv2Page = read("app/tv2/page.tsx");

const routes = [...data.matchAll(/route:\s*"([^"]+)"/g)].map((match) => match[1]);
const uniqueRoutes = new Set(routes);
const bannedPublicPhrases = [
  "keyword coverage",
  "without changing URLs",
  "site strategy",
  "resource hub should support",
  "verified",
  "repository",
  "Mohawk Medicine",
  "2655 Eglinton",
  "Scarborough",
  "mohawkmedicine.com",
];

if (!exists("app/resources/[...slug]/page.tsx")) {
  throw new Error("Resources must use catch-all app/resources/[...slug]/page.tsx");
}

if (exists("app/resources/[slug]/page.tsx")) {
  throw new Error("Remove one-level app/resources/[slug]/page.tsx before build");
}

if (!routes.includes("/resources")) {
  throw new Error("RESOURCE_PAGES must include /resources");
}

if (routes.length !== uniqueRoutes.size) {
  throw new Error("Duplicate resource routes found");
}

if (routes.length < 7) {
  throw new Error(`Expected at least 7 resource routes, found ${routes.length}`);
}

for (const route of routes) {
  if (!route.startsWith("/resources")) {
    throw new Error(`Resource route must start with /resources: ${route}`);
  }
}

for (const phrase of bannedPublicPhrases) {
  const publicCopy = [data, tvPage, tv2Page].join("\n").toLowerCase();
  if (publicCopy.includes(phrase.toLowerCase())) {
    throw new Error(`Public copy contains copied/internal phrase: ${phrase}`);
  }
}

if (!sitemap.includes("RESOURCE_PATHS")) {
  throw new Error("Sitemap must import RESOURCE_PATHS");
}

if (sitemap.includes("`${BASE}/resources`")) {
  throw new Error("Sitemap should not hard-code /resources in staticPages when RESOURCE_PATHS owns it");
}

if (!nav.includes('href: "/resources"')) {
  throw new Error("Navbar is missing /resources");
}

if (!footer.includes('href="/resources"')) {
  throw new Error("Footer is missing /resources");
}

if (!seoPages.includes("getLegacySeoRedirect") || !infoPage.includes("getLegacySeoRedirect")) {
  throw new Error("Info pages must preserve legacy Ottawa slug redirects after Brampton slug cleanup");
}

console.log(`Blouds resources check passed: ${routes.length} routes, catch-all route, nav link, footer link, and sitemap coverage.`);
