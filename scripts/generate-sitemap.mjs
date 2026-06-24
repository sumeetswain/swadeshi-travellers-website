import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appDir = path.join(repoRoot, "src", "app");
const srcDir = path.join(repoRoot, "src");
const publicDir = path.join(repoRoot, "public");
const existingSitemapPath = path.join(publicDir, "sitemap-0.xml");
const outputSitemapPath = path.join(publicDir, "sitemap.xml");
const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://swadeshitraveller.com",
);

const pageFilePattern = /^page\.(tsx|ts|jsx|js)$/;
const codeFilePattern = /\.(tsx|ts|jsx|js)$/;

async function main() {
  const [staticRoutes, tourRoutes, existingSitemapRoutes] = await Promise.all([
    collectStaticRoutes(),
    collectTourRoutes(),
    collectExistingSitemapRoutes(),
  ]);

  const allRoutes = new Set([...staticRoutes, ...tourRoutes]);
  const sitemapRoutes = [...allRoutes]
    .filter((route) => !existingSitemapRoutes.has(route))
    .sort(sortRoutes);

  await mkdir(publicDir, { recursive: true });
  await writeFile(outputSitemapPath, createSitemapXml(sitemapRoutes), "utf8");

  console.log(
    `Generated public/sitemap.xml with ${sitemapRoutes.length} URL(s)` +
      ` (${existingSitemapRoutes.size} already in sitemap-0.xml).`,
  );
}

async function collectStaticRoutes() {
  if (!existsSync(appDir)) {
    return [];
  }

  const files = await walk(appDir);

  return files
    .filter((file) => pageFilePattern.test(path.basename(file)))
    .map(pageFileToRoute)
    .filter(Boolean);
}

function pageFileToRoute(file) {
  const relativeDirectory = path.relative(appDir, path.dirname(file));
  const routeSegments =
    relativeDirectory === ""
      ? []
      : relativeDirectory
          .split(path.sep)
          .filter((segment) => segment && !isRouteGroup(segment));

  if (routeSegments.some((segment) => segment.includes("[") || segment.startsWith("@"))) {
    return null;
  }

  return normalizeRoute(`/${routeSegments.join("/")}`);
}

async function collectTourRoutes() {
  if (!existsSync(srcDir)) {
    return [];
  }

  const files = (await walk(srcDir)).filter((file) => codeFilePattern.test(file));
  const routes = new Set();

  await Promise.all(
    files.map(async (file) => {
      const source = await readFile(file, "utf8");

      for (const match of source.matchAll(/["'`]\/tour\/([^"'`?#\s{}]+)["'`]/g)) {
        routes.add(normalizeRoute(`/tour/${match[1]}`));
      }

      for (const match of source.matchAll(/\bslug\s*:\s*["'`]([^"'`?#\s{}]+)["'`]/g)) {
        routes.add(normalizeRoute(`/tour/${match[1]}`));
      }
    }),
  );

  return [...routes];
}

async function collectExistingSitemapRoutes() {
  if (!existsSync(existingSitemapPath)) {
    return new Set();
  }

  const sitemap = await readFile(existingSitemapPath, "utf8");
  const routes = new Set();

  for (const match of sitemap.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)) {
    routes.add(normalizeRoute(new URL(match[1]).pathname));
  }

  return routes;
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return walk(entryPath);
      }

      return entry.isFile() ? entryPath : [];
    }),
  );

  return files.flat();
}

function createSitemapXml(routes) {
  const lastmod = new Date().toISOString();
  const urlEntries = routes
    .map((route) => {
      const loc = xmlEscape(new URL(route, siteUrl).toString());

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
}

function normalizeSiteUrl(value) {
  return value.endsWith("/") ? value : `${value}/`;
}

function normalizeRoute(route) {
  const normalized = route.replace(/\/+/g, "/").replace(/\/$/, "");

  return normalized || "/";
}

function isRouteGroup(segment) {
  return segment.startsWith("(") && segment.endsWith(")");
}

function sortRoutes(a, b) {
  if (a === "/") {
    return -1;
  }

  if (b === "/") {
    return 1;
  }

  return a.localeCompare(b);
}

function xmlEscape(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
