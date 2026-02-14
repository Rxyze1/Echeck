// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add this to fix the quality warnings
    qualities: [70, 75, 85],
    
    // Your existing settings
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    
    // Additional optimizations (optional but recommended)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Cache optimized images
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // Performance optimizations
  compress: true,
  swcMinify: true,
  
  // Internationalization (optional)
  i18n: {
    locales: ["en", "hi"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;