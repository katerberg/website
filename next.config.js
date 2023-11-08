/* eslint-disable no-unused-vars */
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/now': { page: '/now' },
      '/mtg': { page: '/mtg' },
      '/web-dev': { page: '/web-dev' },
    };
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stlotus.org',
      },
    ],
  },
};
