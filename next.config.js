/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'lh3.googleusercontent.com' },
    ],
  },
}

module.exports = nextConfig
