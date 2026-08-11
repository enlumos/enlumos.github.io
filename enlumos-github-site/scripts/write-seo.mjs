import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const siteUrl = (process.env.VITE_SITE_URL || "http://localhost:4173").replace(/\/$/, "");
const output = resolve("dist");

await mkdir(output, { recursive: true });
await writeFile(resolve(output, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`, "utf8");
await writeFile(resolve(output, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`, "utf8");
