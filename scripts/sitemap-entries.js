
import fs from 'fs';
import path from 'path';
import product from "../src/data/book.json";

const slugs = product.map(p =>
  p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
);

const entries = slugs.map(slug => ({
  loc: `https://menucha.co.ke/product/${slug}`,
  lastmod: new Date().toISOString(),
}));

fs.writeFileSync(
  path.join(process.cwd(), 'public', 'dynamic-sitemap.json'),
  JSON.stringify(entries, null, 2)
);
