// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Script from 'next/script';

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

/* ========== ULTRA-AGGRESSIVE SEO METADATA FOR ESCORT SERVICES ========== */
export const metadata: Metadata = {
  // Title with maximum keyword density
  title: {
    template: "%s | Jaipur Call Girls - Real Verified Escorts 2026 | 24/7 Independent VIP Service",
    default: "Jaipur Call Girls 2026 | Real Verified High-Profile Independent Escorts | Instant Booking 24/7 | Cash Payment | Discreet | Confidential | Premium VIP Companion Service",
  },

  // Ultra-optimized description with all keywords
  description:
    "🔥 Verified Jaipur call girls 2026 - Real independent escorts in Malviya Nagar, C-Scheme, Tonk Road, Civil Lines, Bani Park. High-profile female escorts, college girl escorts, housewife escorts, model escorts. Safe, secure, verified, discreet, confidential booking. Cash-after-meeting policy. No advance payment required. Instant same-day booking. 24/7 availability. VIP premium companion service. Professional verified call girls with real photos. Book now via WhatsApp!",

  // Aggressive keyword targeting with local modifiers
  keywords: [
    // PRIMARY TIER 1: Core High-Volume Keywords
    "jaipur call girls",
    "call girls in jaipur",
    "jaipur escorts",
    "escorts in jaipur",
    "independent escorts jaipur",
    "verified call girls jaipur",
    "call girls service jaipur",
    "escort service jaipur",
    "call girl jaipur",
    "jaipur escort service",
    "female escorts jaipur",
    "real call girls jaipur",
    "genuine escorts jaipur",
    
    // TIER 2: Location-Based Local SEO Keywords
    "call girls malviya nagar",
    "escorts c scheme jaipur",
    "call girls tonk road jaipur",
    "escorts civil lines jaipur",
    "call girls bani park",
    "escorts adarsh nagar jaipur",
    "call girls near me jaipur",
    "jaipur call girls malviya nagar",
    "tonk road escorts",
    "c scheme call girls",
    "civil lines escorts jaipur",
    "call girls jawahar nagar",
    "escorts sanganeri gate",
    "call girls vidhyadhar nagar",
    
    // TIER 3: Premium Long-Tail Keywords
    "verified call girls in jaipur 2026",
    "genuine independent escorts jaipur",
    "real call girls in jaipur",
    "best call girls in jaipur",
    "top rated escorts jaipur",
    "luxury escorts jaipur",
    "premium call girls jaipur",
    "high profile escorts jaipur",
    "verified profiles call girls",
    "certified escorts jaipur",
    "professional call girls jaipur",
    
    // TIER 4: Type & Profile-Specific Keywords
    "college girl escorts jaipur",
    "housewife escorts jaipur",
    "model escorts jaipur",
    "air hostess escorts jaipur",
    "actress escorts jaipur",
    "young call girls jaipur",
    "hot call girls jaipur",
    "sexy escorts jaipur",
    "independent girl escorts",
    "call girl service independent",
    
    // TIER 5: Payment & Booking Keywords
    "cash after meeting escorts jaipur",
    "no advance call girls jaipur",
    "instant booking escorts jaipur",
    "same day booking call girls",
    "24/7 escort booking jaipur",
    "urgent call girls available",
    "emergency booking escorts",
    "cash payment escorts",
    "upi payment call girls",
    "affordable escorts jaipur",
    
    // TIER 6: Trust & Safety Keywords
    "safe escorts jaipur",
    "verified escorts jaipur",
    "confidential escort service",
    "discreet call girls jaipur",
    "secure booking escorts",
    "trusted escort agency jaipur",
    "safe call girls service",
    "private escorts jaipur",
    "confidential call girls",
    "100% safe escorts",
    
    // TIER 7: Service & Experience Keywords
    "vip companion service jaipur",
    "premium companion service",
    "escort for events jaipur",
    "date escort jaipur",
    "travel escort jaipur",
    "dinner date escorts",
    "hotel call girls jaipur",
    "home service escorts",
    "outcall escorts jaipur",
    
    // TIER 8: Question-Based Keywords (Featured Snippets)
    "how to book call girl jaipur",
    "where to find escorts in jaipur",
    "best call girls jaipur",
    "how much do escorts cost jaipur",
    "are escorts safe in jaipur",
    "what is call girl service",
    "how to contact call girls",
    "call girl booking process",
    "escort service cost",
    "how to find verified escorts",
    
    // TIER 9: Comparative & Review Keywords
    "best escort service in jaipur",
    "top escort agencies jaipur",
    "jaipur escort reviews",
    "real vs fake escorts jaipur",
    "escort comparison jaipur",
    "high class escorts jaipur",
    
    // TIER 10: Extended Long-Tail Variations
    "video call girls jaipur",
    "personal escort service jaipur",
    "private escort jaipur",
    "adult escort service",
    "dating escort service jaipur",
    "escort girl jaipur",
    "girl escort jaipur",
    "professional escorts jaipur",
    "real escorts jaipur online",
    "WhatsApp call girls jaipur",
    "call girls phone number jaipur",
    
    // TIER 11: Additional Long-Tail Phrases
    "jaipur call girls with real photos",
    "verified call girls whatsapp",
    "instant call girls availability",
    "call girl service 24 hours",
    "premium call girls service",
    "vip call girls jaipur",
    "elite escorts jaipur",
    "luxury call girls service",
  ],

  metadataBase: new URL("https://www.escortjaipurall.com"),

  alternates: {
    canonical: "https://www.escortjaipurall.com/",
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

  // Ultra-optimized Open Graph
  openGraph: {
    title: "Jaipur Call Girls 2026 | Real Verified High-Profile Independent Escorts | Premium VIP Companion Service 24/7",
    description:
      "🔥 Real verified call girls in Jaipur 2026. Independent escorts in all areas - Malviya Nagar, C-Scheme, Tonk Road. High-profile, certified, safe. Cash payment, instant booking, 24/7 available. Discreet & confidential. Premium VIP companion service. Book now!",
    url: "https://www.escortjaipurall.com/",
    siteName: "Jaipur Call Girls - Real Verified Escorts Service 2026",
    images: [
      {
        url: "https://www.escortjaipurall.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jaipur Call Girls - Real Verified Escorts Service 2026",
        type: "image/jpeg",
        secureUrl: "https://www.escortjaipurall.com/images/og-image.jpg",
      },
      {
        url: "https://www.escortjaipurall.com/images/square-image.jpg",
        width: 1200,
        height: 1200,
        alt: "Real Verified Call Girls - Premium Escort Service Jaipur",
        type: "image/jpeg",
        secureUrl: "https://www.escortjaipurall.com/images/square-image.jpg",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Ultra-optimized Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Jaipur Call Girls 2026 | Real Verified High-Profile Independent Escorts | 24/7 VIP Service",
    description:
      "Real verified call girls in Jaipur. Independent escorts, instant booking, cash payment, 24/7 available. Discreet & safe. Premium VIP companion service. Book now via WhatsApp!",
    images: ["https://www.escortjaipurall.com/images/og-image.jpg"],
    creator: "@JaipurCallGirls",
    site: "@JaipurCallGirls",
  },

  // Option 1: Simple & Clean (RECOMMENDED)
robots: {
  index: true,
  follow: true,
  nocache: false,
  nosnippet: false,
  noimageindex: false,
  noarchive: false,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},

  // Verification tags
  verification: {
    google: "EKSfvZ33e5L4FbUOKWrIS8x7_Hztwk14gPs-BnWKJJ4",
    other: {
      "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
      "yandex-verification": "YOUR_YANDEX_CODE",
    },
  },

  authors: [
    { name: "Jaipur Call Girls Team", url: "https://www.escortjaipurall.com/" }
  ],
  creator: "Jaipur Call Girls - Verified Escorts Service",
  publisher: "Jaipur Call Girls - Real Verified Escorts Service 2026",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Jaipur Call Girls - Real Verified Escorts",
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
    date: true,
    url: true,
  },

  category: "service",
  classification: "Escort Service | Companion Service | Adult Entertainment Services",
};

/* ========== VIEWPORT SETTINGS ========== */
export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark",
  viewportFit: "cover",
};

/* ========== AGGRESSIVE JSON-LD STRUCTURED DATA ========== */

// LOCAL BUSINESS SCHEMA - Ultra-Optimized for Escorts
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.escortjaipurall.com/",
  name: "Jaipur Call Girls - Real Verified Independent Escorts Service 2026",
  alternateName: [
    "Jaipur Escorts Service",
    "Independent Escorts Jaipur",
    "Call Girls in Jaipur",
    "Premium Escorts Jaipur",
    "VIP Companion Service Jaipur",
    "Real Verified Call Girls",
    "High Profile Escorts Jaipur",
  ],
  description:
    "Real verified high-profile independent escorts in Jaipur 2026. Premium companion service with certified call girls. Discreet, safe, confidential booking. Cash-after-meeting. No advance. Instant booking. 24/7 availability. VIP entertainment service.",
  url: "https://www.escortjaipurall.com/",
  image: [
    "https://www.escortjaipurall.com/images/square-image.jpg",
    "https://www.escortjaipurall.com/images/og-image.jpg",
  ],
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
  priceRange: "₹5000 - ₹50000",
  paymentAccepted: ["Cash", "UPI"],
  areaServed: [
    {
      "@type": "City",
      name: "Jaipur",
      "@id": "https://en.wikipedia.org/wiki/Jaipur",
    },
    {
      "@type": "AdministrativeArea",
      name: "Rajasthan",
    },
    {
      "@type": "Country",
      name: "India",
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
      description: "Real verified high-profile independent escorts in Jaipur with instant availability",
      provider: {
        "@type": "LocalBusiness",
        name: "Jaipur Call Girls",
      },
    },
    {
      "@type": "Service",
      name: "VIP Companion Service",
      description: "Premium companionship for events, dates, and special occasions",
      provider: {
        "@type": "LocalBusiness",
        name: "Jaipur Call Girls",
      },
    },
    {
      "@type": "Service",
      name: "24/7 Instant Booking",
      description: "Round-the-clock escort booking with same-day availability",
      provider: {
        "@type": "LocalBusiness",
        name: "Jaipur Call Girls",
      },
    },
    {
      "@type": "Service",
      name: "Discreet & Confidential Service",
      description: "Completely safe and confidential escort service with verified profiles",
      provider: {
        "@type": "LocalBusiness",
        name: "Jaipur Call Girls",
      },
    },
  ],
  sameAs: ["https://www.escortjaipurall.com/"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "500",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "500",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Verified Client",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: "Real verified escorts with excellent service. Highly recommended!",
      datePublished: "2024-01-15",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Booking Support",
    telephone: "+918058457070",
    email: "booking@escortjaipurall.com",
    availableLanguage: ["en", "hi"],
  },
};

// ORGANIZATION SCHEMA
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.escortjaipurall.com/",
  name: "Jaipur Call Girls - Real Verified Independent Escorts Service 2026",
  url: "https://www.escortjaipurall.com/",
  logo: "https://www.escortjaipurall.com/images/square-image.jpg",
  description: "Premium real verified independent escorts service in Jaipur 2026. High-profile call girls with instant booking and 24/7 availability.",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "500",
  },
};

// ULTRA-AGGRESSIVE FAQ SCHEMA
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How to book real verified call girls in Jaipur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact us via WhatsApp at +918058457070 or call directly. Share your location and preferences. We provide instant booking with verified profiles. No advance payment required. Cash-after-meeting policy. Same-day booking available 24/7.",
      },
    },
    {
      "@type": "Question",
      name: "Are the call girls in Jaipur verified and safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! All escort girls are 100% verified, certified, and safe. We maintain strict background checks and regular health certifications. Complete confidentiality and discretion guaranteed. Your privacy is our priority.",
      },
    },
    {
      "@type": "Question",
      name: "What is your payment method for call girls service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer cash-after-meeting policy - no advance payment required. You can also pay via UPI for your convenience. Complete payment options available. Secure and confidential transactions guaranteed.",
      },
    },
    {
      "@type": "Question",
      name: "Are you available 24/7 for escort booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We operate 24 hours a day, 7 days a week. Instant booking available anytime. Same-day service for urgent requests. Contact us via WhatsApp for immediate availability.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas in Jaipur do you cover for escort service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide escort services across all major Jaipur areas: Malviya Nagar, C-Scheme, Tonk Road, Civil Lines, Bani Park, Adarsh Nagar, Jawahar Nagar, and surrounding areas. Home service and hotel service available.",
      },
    },
    {
      "@type": "Question",
      name: "How much do verified escorts cost in Jaipur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing is negotiable based on escort profile, duration, and services. High-profile escorts range from ₹5000-₹50000. Contact us for customized quotes. Premium companions available for special occasions.",
      },
    },
    {
      "@type": "Question",
      name: "Is booking with Jaipur call girls completely confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Complete confidentiality guaranteed! We never share client information. Verified profiles maintained with strict privacy standards. Your identity and service details are 100% safe and secure.",
      },
    },
    {
      "@type": "Question",
      name: "Can I trust the real photos of call girls on your website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! All photos are real and verified. Actual appearance matches the photos. We maintain strict authenticity standards. You can book with complete confidence.",
      },
    },
    {
      "@type": "Question",
      name: "What types of call girls do you have available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have high-profile escorts including college girls, housewife escorts, model escorts, air hostess escorts, actress escorts, and young call girls. Premium companions for all preferences.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide VIP companion service for events?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We provide premium VIP companion service for events, dinner dates, travel, and special occasions. Professional escorts trained in etiquette and discretion.",
      },
    },
  ],
};

// BREADCRUMB SCHEMA
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

// PRODUCT SCHEMA - Escort Services as "Products"
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Verified Call Girls Service Jaipur",
  description: "Real verified high-profile independent escort service in Jaipur with instant booking and 24/7 availability",
  brand: {
    "@type": "Brand",
    name: "Jaipur Call Girls - Verified Escorts Service",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "500",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "5000",
    highPrice: "50000",
    offerCount: "50",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* ========== ESSENTIAL META TAGS ========== */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />

        {/* ========== SEO META TAGS ========== */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Jaipur Call Girls Team" />
        <meta name="copyright" content="© 2026 Jaipur Call Girls - Real Verified Escorts. All rights reserved." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, nocache" />
        <meta name="slurp" content="index, follow" />
        <meta name="duckduckbot" content="index, follow" />
        <meta name="yandexbot" content="index, follow" />

        {/* ========== GEO TARGETING ========== */}
        <meta name="geo.position" content="26.9124; 75.7873" />
        <meta name="geo.placename" content="Jaipur, Rajasthan, India" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="ICBM" content="26.9124, 75.7873" />
        <meta name="location" content="Jaipur, Rajasthan, India" />

        {/* ========== MOBILE OPTIMIZATION ========== */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Jaipur Call Girls" />
        <meta name="application-name" content="Jaipur Call Girls - Verified Escorts" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#000000" />

        {/* ========== ADDITIONAL SEO TAGS ========== */}
        <meta name="distribution" content="global" />
        <meta name="rating" content="adult" />
        <meta name="audience" content="adults" />
        <meta name="page-type" content="Business Service" />
        <meta name="document-type" content="Website" />
        <meta name="document-classification" content="Business" />
        <meta name="document-state" content="active" />
        <meta name="document-rating" content="general" />

        {/* ========== PERFORMANCE & SECURITY ========== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.escortjaipurall.com/" />
        <link rel="preload" href="/images/og-image.jpg" as="image" type="image/jpeg" />
        <link rel="prefetch" href="/favicon.ico" />

        {/* ========== FAVICON & ICONS ========== */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ========== CANONICAL & ALTERNATES ========== */}
        <link rel="canonical" href="https://www.escortjaipurall.com/" />
        <link rel="alternate" hrefLang="en-IN" href="https://www.escortjaipurall.com/" />
        <link rel="alternate" hrefLang="en" href="https://www.escortjaipurall.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.escortjaipurall.com/" />

        {/* ========== OPEN SEARCH DESCRIPTION ========== */}
        <link rel="search" type="application/opensearchdescription+xml" title="Jaipur Call Girls" href="/opensearch.xml" />

        {/* ========== GOOGLE SITE VERIFICATION ========== */}


        {/* ========== GOOGLE O-AUTH ========== */}

       
                <Script 
                    src="https://accounts.google.com/gsi/client" 
                    async 
                    defer
                    strategy="beforeInteractive"
                />


      </head>

      <body className="antialiased bg-black min-h-screen">
        {/* ========== JSON-LD STRUCTURED DATA ========== */}
        
        {/* LOCAL BUSINESS SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          suppressHydrationWarning
        />

        {/* ORGANIZATION SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          suppressHydrationWarning
        />

        {/* FAQ SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          suppressHydrationWarning
        />

        {/* BREADCRUMB SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          suppressHydrationWarning
        />

        {/* PRODUCT SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
          suppressHydrationWarning
        />

        {/* ========== ANALYTICS ========== */}
        <Analytics />
        <SpeedInsights />

        {/* ========== NAVBAR ========== */}
        <Navbar />

        {/* ========== PAGE CONTENT ========== */}
        {children}
      </body>
    </html>
  );
}