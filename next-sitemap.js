module.exports = {
  siteUrl: 'https://teleatele.kz',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/admin/*', '/private'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://teleatele.kz/sitemap.xml',
    ],
  },
};