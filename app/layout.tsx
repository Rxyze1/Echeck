// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

/* ---------- Fonts ---------- */
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

/* ---------- Aggressive SEO Metadata ---------- */
export const metadata: Metadata = {
  title: {
    template: "%s | Jaipur Call Girls - Verified Independent Escorts 2026 | VIP Service",
    default: "Jaipur Call Girls 2026 | Verified High-Profile Independent Escorts | VIP Companion Service Available 24/7",
  },

  description:
    "Trusted Jaipur call girls service 2026. Verified high-profile independent escorts in Malviya Nagar, C-Scheme, Tonk Road & all areas. Discreet, safe, confidential. Cash-after-meeting. Female escorts, college girls, housewife escorts. 24/7 availability. Book now!",

  keywords: [
    // Primary Keywords
    "jaipur call girls",
    "call girls in jaipur",
    "jaipur escorts",
    "escorts in jaipur",
    "jaipur escort service",
    
    // High-Volume Keywords
    "independent escorts jaipur",
    "female escorts jaipur",
    "vip escorts jaipur",
    "premium escorts jaipur",
    "high profile escorts jaipur",
    
    // Area-Specific Keywords
    "call girls malviya nagar",
    "escorts malviya nagar jaipur",
    "call girls c scheme jaipur",
    "escorts c scheme jaipur",
    "call girls tonk road jaipur",
    "escorts near me jaipur",
    "call girls near jaipur railway station",
    "escorts civil lines jaipur",
    "call girls bani park jaipur",
    "escorts adarsh nagar jaipur",
    
    // Long-Tail Keywords
    "verified call girls in jaipur 2026",
    "genuine independent escorts jaipur",
    "real call girls in jaipur",
    "authentic escorts service jaipur",
    "certified female escorts jaipur",
    
    // Service-Specific Keywords
    "college girl escorts jaipur",
    "housewife escorts jaipur",
    "young call girls jaipur",
    "model escorts jaipur",
    "air hostess escorts jaipur",
    "actress escorts jaipur",
    
    // Payment & Booking Keywords
    "cash after meeting escorts jaipur",
    "no advance call girls jaipur",
    "pay after service escorts",
    "24/7 escort booking jaipur",
    "urgent call girls jaipur",
    
    // Safety & Verification Keywords
    "verified call girls",
    "safe escorts jaipur",
    "confidential escort service",
    "discreet call girls",
    "secure booking escorts",
    "trusted escort agency jaipur",
    
    // Comparison Keywords
    "best call girls in jaipur",
    "top rated escorts jaipur",
    "luxury escorts jaipur",
    "premium companion service",
    
    // Intent-Based Keywords
    "book call girl jaipur",
    "hire escorts jaipur",
    "find call girls near me",
    "independent escort jaipur booking",
    "call girl mobile number jaipur",
    
    // Branded Keywords
    "jaipur call girls 2026",
    "jaipur escort directory",
    "jaipur girls listing",
    "escort profiles jaipur",
    
    // Additional High-Ranking Keywords
    "adult escorts jaipur",
    "dating escort jaipur",
    "companion girls jaipur",
    "call girl service rajasthan",
    "24 hours escorts jaipur",
    "available now escorts",
    "instant booking call girls",
    "video call girls jaipur",
    "personal escort service",
    "private escort jaipur",
  ],

  metadataBase: new URL("https://www.escortjaipurall.com"),

  alternates: {
    canonical: "https://www.escortjaipurall.com/",
    languages: {
      "en-IN": "https://www.escortjaipurall.com/",
      hi: "https://www.escortjaipurall.com/hi",
    },
  },

  // Favicon Configuration
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  // Open Graph - Aggressive
  openGraph: {
    title: "Jaipur Call Girls 2026 | Verified High-Profile Independent Escorts | VIP Companion Service",
    description:
      "Verified independent call girls in Jaipur 2026. Premium escorts service across Malviya Nagar, C-Scheme, Tonk Road. Safe, discreet, confidential. Cash payment accepted. 24/7 available. Book genuine escorts online now!",
    url: "https://www.escortjaipurall.com/",
    siteName: "Jaipur Call Girls - Verified Escorts Service",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Jaipur Call Girls - Verified Escorts Service 2026",
        type: "image/png",
      },
      {
        url: "/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "Jaipur Escorts - Premium Call Girls",
        type: "image/png",
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
      "Premium verified call girls in Jaipur. Independent escorts in Malviya Nagar, C-Scheme. Discreet, safe, cash-after-meeting. 24/7 booking available. Top-rated escort service Jaipur.",
    images: ["/android-chrome-512x512.png"],
    creator: "@JaipurCallGirls",
    site: "@JaipurCallGirls",
  },

  // Robots - Aggressive Indexing
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
    
  },

  // Verification
  verification: {
    google: "EKSfvZ33e5L4FbUOKWrIS8x7_Hztwk14gPs-BnWKJJ4",
    other: {
      "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    },
  },

  // Authors & Publisher
  authors: [{ name: "Jaipur Call Girls Team", url: "https://www.escortjaipurall.com/" }],
  creator: "Jaipur Call Girls Service",
  publisher: "Jaipur Call Girls - Verified Escort Service",

  // Apple Web App
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Jaipur Call Girls",
  },

  // Format Detection
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
    date: true,
    url: true,
  },

  // Category
  category: "service",
  classification: "Escort Service | Companion Service | Dating Service",

  // Theme Color
  themeColor: "#000000",
};

/* ---------- Comprehensive JSON-LD Structured Data ---------- */

// Main LocalBusiness Schema
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
  image: "/android-chrome-512x512.png",
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
  sameAs: [
    "https://www.escortjaipurall.com/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "250",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Anonymous User",
      },
      reviewBody: "Professional and discreet service. Highly recommended!",
    },
  ],
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jaipur Call Girls - Verified Escorts Service",
  url: "https://www.escortjaipurall.com/",
  logo: "/android-chrome-512x512.png",
  description: "Premium verified independent escorts service in Jaipur 2026",
  telephone: "+918058457070",
  email: "booking@escortjaipurall.com",
  sameAs: [
    "https://www.escortjaipurall.com/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: "+918058457070",
    email: "booking@escortjaipurall.com",
    areaServed: "IN",
    availableLanguage: "en",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
};

// FAQ Schema
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
  ],
};

// BreadcrumbList Schema
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
      name: "Call Girls",
      item: "https://www.escortjaipurall.com/#profiles",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Book Escorts",
      item: "https://www.escortjaipurall.com/#booking",
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
        <meta name="language" content="Hindi" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Jaipur Call Girls Team" />
        <meta name="copyright" content="© 2026 Jaipur Call Girls. All rights reserved." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Geo Targeting */}
        <meta name="geo.position" content="26.9124; 75.7873" />
        <meta name="geo.placename" content="Jaipur, Rajasthan, India" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="ICBM" content="26.9124, 75.7873" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        
        {/* Mobile Web App */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Jaipur Call Girls" />
        
        {/* Additional SEO Tags */}
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="audience" content="all" />
        <meta name="page-type" content="Business" />
        <meta name="document-classification" content="Website" />
        
        {/* Preconnect & Performance */}
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
        <link rel="alternate" hrefLang="hi" href="https://www.escortjaipurall.com/#hi" />
      </head>

      <body className="antialiased bg-black min-h-screen">
        {/* Multiple JSON-LD Schemas for Aggressive SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
          suppressHydrationWarning
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
          suppressHydrationWarning
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
          suppressHydrationWarning
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
          suppressHydrationWarning
        />

        {/* Navbar Component */}
        <Navbar />

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}