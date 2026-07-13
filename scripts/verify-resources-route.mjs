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

const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".css"]);
const mojibakePatterns = [
  new RegExp("\\u00e2", "u"),
  new RegExp("\\u00c2", "u"),
  new RegExp("\\u00f0\\u0178", "u"),
  new RegExp("\\u00ef\\u00b8", "u"),
  new RegExp("\\ufffd", "u"),
];

function collectSourceFiles(dir) {
  const fullDir = path.join(root, dir);
  if (!fs.existsSync(fullDir)) return [];

  return fs.readdirSync(fullDir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(fullDir, entry.name);
    if (entry.isDirectory()) {
      if (["node_modules", ".next", ".git"].includes(entry.name)) return [];
      return collectSourceFiles(path.relative(root, fullPath));
    }
    return sourceExtensions.has(path.extname(entry.name)) ? [fullPath] : [];
  });
}

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

for (const file of [...collectSourceFiles("app"), ...collectSourceFiles("scripts")]) {
  const text = fs.readFileSync(file, "utf8");
  const rel = path.relative(root, file).replaceAll("\\", "/");
  for (const pattern of mojibakePatterns) {
    if (pattern.test(text)) {
      throw new Error(`Source contains mojibake (${pattern}) in ${rel}`);
    }
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
