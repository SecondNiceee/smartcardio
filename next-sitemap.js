module.exports = {
  siteUrl: 'https://smartcardio.ru',
  generateRobotsTxt: false, // Используем встроенный robots.ts
  sitemapSize: 7000,
  exclude: ['/admin/*', '/private/*', '/api/*', '/_next/*'],
  changefreq: 'daily',
  priority: 0.7,
  autoLastmod: true,
  additionalPaths: async () => [
    {
      loc: '/',
      changefreq: 'daily',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/store',
      changefreq: 'daily',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
  ],
};
