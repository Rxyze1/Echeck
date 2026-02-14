// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ IMAGE OPTIMIZATION (Valid config)
  images: {
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
    
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Cache optimized images for 1 year
    minimumCacheTTL: 60 * 60 * 24 * 365,
    
    // Disable static imports if needed
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ✅ PERFORMANCE OPTIMIZATIONS
  compress: true,
  // ❌ REMOVED: swcMinify is deprecated in Next.js 13+ and removed in 16
  // swcMinify: true,

  // ✅ TURBOPACK CONFIGURATION (Next.js 16)
  experimental: {
    turbopack: {
      resolveAlias: {
        canvas: false,
      },
    },
  },

  // ✅ HEADERS FOR SECURITY & PERFORMANCE
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
        ],
      },
      // Cache static assets for 1 year
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache images for 30 days
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, must-revalidate",
          },
        ],
      },
    ];
  },

  // ✅ REDIRECTS
  redirects: async () => {
    return [
      // Redirect old URLs if needed
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true,
      },
    ];
  },

  // ✅ REWRITES
  rewrites: async () => {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    };
  },

  // ✅ WEBPACK CONFIGURATION
  webpack: (config: { optimization: { minimize: boolean; }; }, { }: any) => {
    config.optimization.minimize = true;
    return config;
  },

  // ✅ TYPESCRIPT
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },

  // ✅ ESLINT
  eslint: {
    dirs: ["app", "pages", "components", "lib", "utils"],
  },

  // ✅ REACT STRICT MODE
  reactStrictMode: true,

  // ✅ PRODUCTION BROWSER SOURCE MAPS (optional)
  productionBrowserSourceMaps: false,

  // ✅ TRAILING SLASH
  trailingSlash: false,

  // ✅ BASE PATH (if needed)
  // basePath: "/app",

  // ✅ INTERNATIONALIZATION - NOT SUPPORTED IN APP ROUTER
  // ❌ REMOVED: i18n is not supported with App Router in Next.js 13+
  // For i18n support, use next-intl or similar package instead
};

module.exports = nextConfig;