/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/peptide-site',
  assetPrefix: '/peptide-site/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.peptidesciences.com',
        pathname: '/media/**',
      },
    ],
  },
  trailingSlash: true,
}

module.exports = nextConfig
