import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getSitemapPaths, SITE } from '../src/config/siteSeo.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const today = new Date().toISOString().slice(0, 10);

const urls = getSitemapPaths()
  .map(
    (route) => `  <url>
    <loc>${SITE.siteUrl}${route === '/' ? '' : route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : route.startsWith('/oferta') || route.startsWith('/tematyka') ? '0.8' : '0.7'}</priority>
  </url>`,
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(path.join(root, 'public', 'sitemap.xml'), xml, 'utf8');
console.log(`Wygenerowano sitemap.xml (${getSitemapPaths().length} URL)`);
