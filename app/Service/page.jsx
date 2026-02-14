// app/Service/page.jsx

// ============================================
// 🎯 AGGRESSIVE METADATA
// ============================================


// Hey SEO Guys Watch Carefully  👀 this is just a  Server Side page Not Client side becuse it dose not inclute " use client " okay



export const metadata = {
  // Core SEO
  title: 'Verified Escort Services in Jaipur 2026 | High Profile Call Girls | 24/7 Booking | NO ADVANCE',
  description: 'Verified independent escort services in Jaipur 2026. High-profile call girls, real photos, instant booking, 24/7 availability. College escorts, VIP escorts, housewife escorts, Russian escorts. 100% discreet, cash after meeting, no advance payment.',
  keywords: [
    'escort services jaipur',
    'jaipur call girls',
    'verified escorts jaipur',
    'independent escorts jaipur',
    'college call girls jaipur',
    'housewife escorts jaipur',
    'vip escorts jaipur',
    'russian escorts jaipur',
    'call girls in jaipur',
    'jaipur escorts',
    'malviya nagar escorts',
    'c-scheme escorts',
    'vaishali nagar escorts',
    'mansarovar escorts',
    '24/7 escort service',
    'verified call girls',
    'real photos escorts',
    'discreet escorts',
    'independent girls jaipur',
  ].join(', '),
  
  // Canonical URL
  alternates: {
    canonical: 'https://www.escortjaipurall.com/Service',
  },
  
  // Open Graph - Facebook, LinkedIn, etc.
  openGraph: {
    title: 'Verified Escort Services in Jaipur 2026 | High Profile Call Girls | Instant Booking',
    description: 'Discover verified, high-profile independent escorts in Jaipur. Real photos, transparent pricing, instant 24/7 booking. College girls, VIP escorts, Russian companions. Cash after meeting, 100% discrete.',
    type: 'website',
    url: 'https://www.escortjaipurall.com/Service',
    siteName: 'Jaipur Call Girls Service',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.escortjaipurall.com/images/service-og-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Verified Escort Services in Jaipur - High Profile Call Girls',
        type: 'image/jpeg',
      },
      {
        url: 'https://www.escortjaipurall.com/images/service-og-800x600.jpg',
        width: 800,
        height: 600,
        alt: 'Independent Escorts Jaipur',
      },
    ],
  },
  
  // Twitter Card - X/Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Verified Escort Services in Jaipur 2026 | Instant Booking',
    description: 'High-profile independent escorts. Real photos, verified profiles, 24/7. Cash after meeting. No advance.',
    images: ['https://www.escortjaipurall.com/images/service-twitter.jpg'],
    creator: '@EscortJaipurAll',
    site: '@EscortJaipurAll',
  },
  
  // Robots meta
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  
  // Additional meta tags
  verification: {
    google: 'your-google-verification-code',
  },
  
  // Geo targeting
  authors: [
    {
      name: 'Jaipur Call Girls Service',
      url: 'https://www.escortjaipurall.com',
    },
  ],
  
  applicationName: 'Jaipur Call Girls Service',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Jaipur Call Girls Service',
  },
  
  formatDetection: {
    telephone: true,
  },
  
  referrer: 'strict-origin-when-cross-origin',
}

// ============================================
// 📍 MULTIPLE JSON-LD SCHEMAS FOR AGGRESSIVE SEO
// ============================================

// 1️⃣ SERVICE SCHEMA
function ServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Verified Independent Escort Services in Jaipur',
    description: 'High-profile verified independent escort and companion services in Jaipur with real photos, instant booking, and 24/7 availability.',
    url: 'https://www.escortjaipurall.com/Service',
    serviceType: [
      'Independent Escorts',
      'College Call Girls',
      'VIP Escorts',
      'Russian Escorts',
      'Housewife Escorts',
      'Model Escorts',
      'Air Hostess Escorts',
    ],
    provider: {
      '@type': 'LocalBusiness',
      name: 'Jaipur Call Girls Service',
      url: 'https://www.escortjaipurall.com',
      telephone: '+918058457070',
      email: 'contact@escortjaipurall.com',
      image: 'https://www.escortjaipurall.com/logo.jpg',
      priceRange: '₹4500-₹80000',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        postalCode: '302001',
        addressCountry: 'IN',
        streetAddress: 'Various locations across Jaipur',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '26.9124',
        longitude: '75.7873',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      sameAs: [
        'https://www.escortjaipurall.com',
        'https://www.facebook.com/escortjaipurall',
        'https://www.instagram.com/escortjaipurall',
      ],
    },
    areaServed: {
      '@type': 'City',
      name: 'Jaipur',
      '@id': 'https://en.wikipedia.org/wiki/Jaipur',
    },
    availableLanguage: ['en', 'hi'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

// 2️⃣ LOCAL BUSINESS SCHEMA
function LocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jaipur Call Girls Service',
    description: 'Professional verified independent escort and companion service in Jaipur',
    url: 'https://www.escortjaipurall.com',
    telephone: '+918058457070',
    email: 'info@escortjaipurall.com',
    priceRange: '₹₹₹',
    image: 'https://www.escortjaipurall.com/images/business-image.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jaipur, Rajasthan',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      postalCode: '302001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '26.9124',
      longitude: '75.7873',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+918058457070',
      email: 'contact@escortjaipurall.com',
      availableLanguage: ['en', 'hi'],
      areaServed: 'Jaipur',
    },
    sameAs: [
      'https://www.facebook.com/escortjaipurall',
      'https://www.instagram.com/escortjaipurall',
      'https://www.whatsapp.com',
    ],
  }
}

// 3️⃣ BREADCRUMB SCHEMA
function BreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.escortjaipurall.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Escort Services',
        item: 'https://www.escortjaipurall.com/Service',
      },
    ],
  }
}

// 4️⃣ FAQ SCHEMA
function FAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Are all escort profiles verified?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all our escort profiles are personally verified including ID verification, photo verification, and health checks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you require advance payment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, we never ask for advance payment. Payment is made in cash after the meeting starts.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are services available 24/7?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, services are available 24/7 subject to availability and location in Jaipur.',
        },
      },
      {
        '@type': 'Question',
        name: 'What areas of Jaipur do you cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We cover all major areas of Jaipur including C-Scheme, Malviya Nagar, Vaishali Nagar, Mansarovar, Civil Lines, and many more.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is complete privacy guaranteed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100% privacy and discretion are guaranteed. Your personal information is never shared.',
        },
      },
    ],
  }
}

// 5️⃣ ORGANIZATION SCHEMA
function OrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jaipur Call Girls Service',
    url: 'https://www.escortjaipurall.com',
    logo: 'https://www.escortjaipurall.com/logo.png',
    description: 'Professional verified independent escort service in Jaipur',
    telephone: '+918058457070',
    email: 'contact@escortjaipurall.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.facebook.com/escortjaipurall',
      'https://www.instagram.com/escortjaipurall',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: '+918058457070',
      contactOption: 'TollFree',
    },
  }
}

// 6️⃣ AGGREGATE RATING SCHEMA
function AggregateRatingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1250',
    reviewCount: '890',
    bestRating: '5',
    worstRating: '1',
  }
}

// ============================================
// IMPORT CLIENT COMPONENT
// ============================================
import ServiceContent from './ServiceContent'

// ============================================
// SERVER COMPONENT - HANDLES ALL SEO
// ============================================
export default function ServicePage() {
  return (
    <>
      {/* 1️⃣ SERVICE SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ServiceSchema()) }}
        suppressHydrationWarning
      />

      {/* 2️⃣ LOCAL BUSINESS SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusinessSchema()) }}
        suppressHydrationWarning
      />

      {/* 3️⃣ BREADCRUMB SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadcrumbSchema()) }}
        suppressHydrationWarning
      />

      {/* 4️⃣ FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQSchema()) }}
        suppressHydrationWarning
      />

      {/* 5️⃣ ORGANIZATION SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema()) }}
        suppressHydrationWarning
      />

      {/* 6️⃣ AGGREGATE RATING SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(AggregateRatingSchema()) }}
        suppressHydrationWarning
      />

      {/* RENDER CLIENT COMPONENT */}
      <ServiceContent />
    </>
  )
}