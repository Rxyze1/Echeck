// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

/* ========== COMPREHENSIVE AGGRESSIVE SEO METADATA ========== */
export const metadata: Metadata = {
  // Title with keyword
  title: {
    template: "%s | Jaipur Call Girls - Verified Independent Escorts 2026 | 24/7 VIP Service",
    default: "Jaipur Call Girls 2026 | Verified High-Profile Independent Escorts | Premium VIP Companion Service Available 24/7 | Discreet & Confidential",
  },

  // Long-tail description with keywords
  description:
    "🔥 Verified Jaipur call girls service 2026 - Trusted independent escorts in Malviya Nagar, C-Scheme, Tonk Road & all areas. High-profile female escorts, college girls, housewife escorts. Safe, discreet, confidential booking. Cash-after-meeting. No advance payment. Instant booking. 24/7 availability. VIP companion service for special occasions. Professional & verified call girls. Book now!",

  // Aggressive keyword targeting
  keywords: [
    // Tier 1: High-Priority Keywords
    "jaipur call girls",
    "call girls in jaipur",
    "jaipur escorts",
    "escorts in jaipur",
    "independent escorts jaipur",
    "verified call girls jaipur",
    "call girls service jaipur",
    
    // Tier 2: Area-Specific (Local SEO)
    "call girls malviya nagar",
    "escorts c scheme jaipur",
    "call girls tonk road",
    "escorts civil lines jaipur",
    "call girls bani park",
    "escorts adarsh nagar",
    "call girls near me jaipur",
    
    // Tier 3: Long-Tail Keywords
    "verified call girls in jaipur 2026",
    "genuine independent escorts jaipur",
    "real call girls in jaipur",
    "best call girls in jaipur",
    "top rated escorts jaipur",
    "luxury escorts jaipur",
    "premium call girls jaipur",
    "high profile escorts jaipur",
    
    // Tier 4: Type-Specific
    "college girl escorts jaipur",
    "housewife escorts jaipur",
    "model escorts jaipur",
    "air hostess escorts jaipur",
    "actress escorts jaipur",
    "young call girls jaipur",
    
    // Tier 5: Booking/Payment Keywords
    "cash after meeting escorts jaipur",
    "no advance call girls",
    "instant booking escorts",
    "24/7 escort booking jaipur",
    "urgent call girls available",
    "same day booking escorts",
    
    // Tier 6: Safety & Trust Keywords
    "safe escorts jaipur",
    "confidential escort service",
    "discreet call girls",
    "verified profiles",
    "trusted escort agency",
    "secure booking",
    
    // Tier 7: Service Keywords
    "vip companion service",
    "premium companion service",
    "escort for events",
    "date escort jaipur",
    "travel escort jaipur",
    
    // Tier 8: Question Keywords (Featured Snippets)
    "how to book call girl jaipur",
    "where to find escorts in jaipur",
    "best time to book escorts",
    "how much do escorts cost in jaipur",
    "are escorts safe in jaipur",
    
    // Tier 9: Competitor & Comparison Keywords
    "call girls jaipur vs other cities",
    "best escort service in jaipur",
    "affordable escorts jaipur",
    
    // Tier 10: Additional Long-Tail
    "video call girls jaipur",
    "personal escort service jaipur",
    "private escort jaipur",
    "adult escorts jaipur",
    "dating escort service",
  ],

  metadataBase: new URL("https://www.escortjaipurall.com"),

  alternates: {
    canonical: "https://www.escortjaipurall.com/",
    languages: {
      "en-IN": "https://www.escortjaipurall.com/",
      "hi-IN": "https://www.escortjaipurall.com/hi",
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },

  manifest: "/site.webmanifest",

  // Open Graph - Multi-platform
  openGraph: {
    title: "Jaipur Call Girls 2026 | Verified High-Profile Independent Escorts | Premium VIP Service",
    description:
      "Verified independent call girls in Jaipur 2026. Premium escorts service across all areas. Safe, discreet, confidential. Cash payment accepted. 24/7 available. Top-rated escort agency.",
    url: "https://www.escortjaipurall.com/",
    siteName: "Jaipur Call Girls - Verified Escorts Service",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jaipur Call Girls - Verified Escorts Service 2026",
        type: "image/jpeg",
      },
      {
        url: "/images/square-image.jpg",
        width: 1200,
        height: 1200,
        alt: "Jaipur Call Girls - Premium Service",
        type: "image/jpeg",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Jaipur Call Girls 2026 | Verified High-Profile Independent Escorts",
    description:
      "Premium verified call girls in Jaipur. Independent escorts in all areas. Discreet, safe, 24/7 available. Book now!",
    images: ["/images/og-image.jpg"],
    creator: "@JaipurCallGirls",
    site: "@JaipurCallGirls",
  },

  // Robots and Indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    bingbot: {
      index: true,
      follow: true,
    },
  },

  // Verification
  verification: {
    google: "EKSfvZ33e5L4FbUOKWrIS8x7_Hztwk14gPs-BnWKJJ4",
    other: {
      "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
      "yandex-verification": "YOUR_YANDEX_CODE",
    },
  },

  authors: [{ name: "Jaipur Call Girls Team", url: "https://www.escortjaipurall.com/" }],
  creator: "Jaipur Call Girls Service",
  publisher: "Jaipur Call Girls - Verified Escort Service",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Jaipur Call Girls",
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
    date: true,
    url: true,
  },

  category: "service",
  classification: "Escort Service | Companion Service | Adult Services",
};

/* ========== VIEWPORT SETTINGS ========== */
export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark",
};

/* ========== JSON-LD STRUCTURED DATA ========== */

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.escortjaipurall.com/",
  name: "Jaipur Call Girls - Verified Independent Escorts Service 2026",
  alternateName: [
    "Jaipur Escorts Service",
    "Independent Escorts Jaipur",
    "Call Girls in Jaipur",
    "Premium Escorts Jaipur",
    "VIP Companion Service Jaipur",
  ],
  description:
    "Verified high-profile independent escorts in Jaipur 2026. Premium companion service with certified call girls. Discreet, safe, confidential booking. Cash-after-meeting. 24/7 availability.",
  url: "https://www.escortjaipurall.com/",
  image: "/images/square-image.jpg",
  telephone: "+918058457070",
  email: "booking@escortjaipurall.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Malviya Nagar, C-Scheme",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.9124",
    longitude: "75.7873",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Jaipur",
      geo: {
        "@type": "GeoShape",
        box: "26.7 75.7 27.0 75.9",
      },
    },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  service: [
    {
      "@type": "Service",
      name: "Independent Escort Service",
      description: "High-profile verified independent escorts in Jaipur",
      areaServed: "Jaipur, Rajasthan",
    },
    {
      "@type": "Service",
      name: "VIP Companion Service",
      description: "Premium companionship for special occasions and events",
      areaServed: "Jaipur, Rajasthan",
    },
    {
      "@type": "Service",
      name: "24/7 Booking Service",
      description: "Round-the-clock escort booking with instant availability",
      areaServed: "Jaipur, Rajasthan",
    },
    {
      "@type": "Service",
      name: "Discreet & Confidential Service",
      description: "Safe and completely confidential escort service",
      areaServed: "Jaipur, Rajasthan",
    },
  ],
  priceRange: "Negotiable",
  paymentAccepted: ["Cash", "CreditCard", "UPI"],
  sameAs: ["https://www.escortjaipurall.com/"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jaipur Call Girls - Verified Escorts Service",
  url: "https://www.escortjaipurall.com/",
  logo: "/images/square-image.jpg",
  description: "Premium verified independent escorts service in Jaipur 2026",
  telephone: "+918058457070",
  email: "booking@escortjaipurall.com",
  sameAs: ["https://www.escortjaipurall.com/"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: "+918058457070",
    email: "booking@escortjaipurall.com",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I book call girls in Jaipur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book our verified call girls directly through our website. Contact us via WhatsApp or phone call at +918058457070. We offer instant booking with 24/7 availability.",
      },
    },
    {
      "@type": "Question",
      name: "Are the escorts verified and safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our escort girls are verified, certified, and completely safe. We maintain 100% confidentiality and discretion for all our clients.",
      },
    },
    {
      "@type": "Question",
      name: "What is your payment method?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept cash payment after meeting (cash-after-meeting policy). No advance payment required. We also accept digital payments for your convenience.",
      },
    },
    {
      "@type": "Question",
      name: "Are you available 24/7?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we are available 24 hours a day, 7 days a week. You can book our escorts anytime, and we provide instant availability.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you cover in Jaipur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide escort services across all major areas of Jaipur including Malviya Nagar, C-Scheme, Tonk Road, Civil Lines, Bani Park, and all surrounding areas.",
      },
    },
    {
      "@type": "Question",
      name: "How much do escorts cost in Jaipur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing is negotiable based on the escort profile, duration, and services required. Contact us for customized quotes.",
      },
    },
    {
      "@type": "Question",
      name: "Is booking confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Complete confidentiality is guaranteed. We never share client information and maintain strict privacy standards.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.escortjaipurall.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Call Girls Profiles",
      item: "https://www.escortjaipurall.com/#profiles",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Booking",
      item: "https://www.escortjaipurall.com/#booking",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Contact",
      item: "https://www.escortjaipurall.com/contact",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Essential Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="author" content="Jaipur Call Girls Team" />
        <meta name="copyright" content="© 2026 Jaipur Call Girls. All rights reserved." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, nocache" />

        {/* Geo Targeting */}
        <meta name="geo.position" content="26.9124; 75.7873" />
        <meta name="geo.placename" content="Jaipur, Rajasthan, India" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="ICBM" content="26.9124, 75.7873" />

        {/* Mobile Optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Jaipur Call Girls" />

        {/* Additional SEO Tags */}
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="audience" content="all" />
        <meta name="page-type" content="Business" />
        <meta name="document-type" content="Website" />

        {/* Performance & Security */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.escortjaipurall.com/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Canonical & Alternates */}
        <link rel="canonical" href="https://www.escortjaipurall.com/" />
        <link rel="alternate" hrefLang="en-IN" href="https://www.escortjaipurall.com/" />
        <link rel="alternate" hrefLang="hi-IN" href="https://www.escortjaipurall.com/hi" />
      </head>

      <body className="antialiased bg-black min-h-screen">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          suppressHydrationWarning
        />

        {/* Analytics */}
        <Analytics />
        <SpeedInsights />

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        {children}
      </body>
    </html>
  );
}