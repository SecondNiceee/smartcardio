import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/congratulation'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/congratulation'],
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow: ['/congratulation'],
      },
    ],
    sitemap: 'https://smartcardio.ru/sitemap.xml',
    host: 'https://smartcardio.ru',
  }
}
