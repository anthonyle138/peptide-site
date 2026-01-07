/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.peptidesciences.com',
        pathname: '/media/**',
      },
    ],
  },
}

module.exports = nextConfig
