/* eslint-disable no-unused-vars */
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'export',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/now': { page: '/now' },
      '/mtg': { page: '/mtg' },
      '/privacy': { page: '/privacy' },
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
