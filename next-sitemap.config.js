const SITE = require('./src/config.js').SITE;

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `${SITE.origin}${SITE.basePathname}`,
  generateRobotsTxt: true,
  exclude: ['/blog', '/pricing', '/services'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
    ],
  },
};
