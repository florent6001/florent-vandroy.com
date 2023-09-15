const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['default', 'fr', 'en'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: true,
}

module.exports = nextConfig
