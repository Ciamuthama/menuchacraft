import productData from './src/data/book.js';

/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://menucha.co.ke',
  generateRobotsTxt: true,
  outDir: './public',
  additionalPaths: async () => {
    const paths = productData.map((item) => {
      const slug = item.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
      return {
        loc: `/product/${slug}`,
        lastmod: new Date().toISOString(),
      };
    });
    return paths;
  },
};
