/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Fix the quality warning
    qualities: [75, 85],
    
    // Enable modern formats for better compression (AVIF > WebP > fallback)
    formats: ['image/avif', 'image/webp'],

    // Critical: Allow your actual image sources
    // Use remotePatterns (recommended since Next.js 13+) instead of deprecated domains
    remotePatterns: [
      // Your own domain or subdomain (e.g. images.your-site.com)
      {
        protocol: 'https',
        hostname: 'your-site.com',           // Replace with your real domain
        pathname: '/images/**',              // Restrict to /images folder for security
      },
      // Common external hosts for escort sites (CDN, cloud storage)
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',       // If using Cloudinary
      },
      {
        protocol: 'https',
        hostname: 'imgbb.com',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: '**.s3.amazonaws.com',     // AWS S3
      },
      // Keep your existing ones if needed (but they're not useful for real content)
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],

    // Optional: Increase image cache duration (better repeat visits & bandwidth saving)
    // Default is good, but you can extend for static images
    minimumCacheTTL: 60, // in seconds (1 minute minimum)

    // Optional: Device sizes for responsive images (default is good, but customize if needed)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Optional: Enable Turbopack in dev for faster builds (Next.js 14+)
  // experimental: { turbopack: true },
};

module.exports = nextConfig;