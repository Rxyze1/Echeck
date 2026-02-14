// app/pricing/page.jsx

// ============================================
// 🎯 AGGRESSIVE PRICING PAGE METADATA
// ============================================
export const metadata = {
  // Core SEO - Pricing focused keywords
  title: 'Jaipur Escort Rates 2026 | Call Girls Pricing | Transparent Pricing | NO Hidden Charges | Cash After Meeting',
  description: 'Verified Jaipur escort pricing & rates 2026. Transparent pricing, no hidden charges. College escorts ₹4,500-₹7,000 | VIP escorts ₹10,000-₹20,000 | Russian escorts ₹10,000-₹25,000. Cash after meeting, instant booking 24/7.',
  keywords: [
    // Primary keywords
    'jaipur escort rates',
    'jaipur call girls pricing',
    'escort prices jaipur',
    'call girls rates jaipur',
    'jaipur escorts rates 2026',
    'escort service rates',
    'verified escort prices',
    'college girl rates',
    'vip escort rates',
    'housewife escort rates',
    'russian escort rates',
    'escort pricing',
    'affordable escorts jaipur',
    'hourly rates escorts',
    'overnight rates escorts',
    'jaipur call girl charges',
    'transparent pricing escorts',
    'no advance payment',
    'cash after meeting',
    'instant booking rates',
    '₹4500 escorts',
    '₹7000 call girls',
    '₹10000 vip escorts',
    '₹25000 russian escorts',
    'best rates jaipur',
    'cheapest escorts jaipur',
    'premium escorts pricing',
    'luxury escort rates',
    'affordable companion service',
  ].join(', '),
  
  // Canonical
  alternates: {
    canonical: 'https://www.escortjaipurall.com/pricing',
  },
  
  // Open Graph
  openGraph: {
    title: 'Jaipur Escort Rates 2026 | Transparent Pricing | Instant Booking',
    description: 'Verified escort pricing with transparent rates. College escorts ₹4,500-₹7,000 | VIP escorts ₹10,000-₹20,000 | Russian escorts ₹10,000-₹25,000. No advance, cash after meeting.',
    type: 'website',
    url: 'https://www.escortjaipurall.com/pricing',
    siteName: 'Jaipur Call Girls Service',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.escortjaipurall.com/images/pricing-og-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Jaipur Escort Pricing & Rates 2026',
        type: 'image/jpeg',
      },
      {
        url: 'https://www.escortjaipurall.com/images/pricing-comparison-800x600.jpg',
        width: 800,
        height: 600,
        alt: 'Transparent Escort Rates Comparison',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Jaipur Escort Rates 2026 | Transparent Pricing',
    description: 'College ₹4,500 | Housewife ₹5,000 | VIP ₹10,000 | Russian ₹10,000-₹25,000. Cash after meeting, no advance!',
    images: ['https://www.escortjaipurall.com/images/pricing-twitter.jpg'],
    creator: '@EscortJaipurAll',
  },
  
  // Robots
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
  
  // Additional
  applicationName: 'Jaipur Call Girls Service',
  referrer: 'strict-origin-when-cross-origin',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
}

// ============================================
// 📊 7 POWERFUL JSON-LD SCHEMAS
// ============================================

// 1️⃣ AGGREGATE OFFER SCHEMA (Main pricing schema)
function AggregateOfferSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateOffer',
    name: 'Jaipur Escort Services Pricing',
    description: 'Verified escort service pricing in Jaipur',
    url: 'https://www.escortjaipurall.com/pricing',
    priceCurrency: 'INR',
    lowPrice: '4500',
    highPrice: '80000',
    offerCount: '7',
    offers: [
      {
        '@type': 'Offer',
        name: 'Quick Booking - 1 Hour',
        price: '6000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: 'https://www.escortjaipurall.com/pricing#quick-booking',
      },
      {
        '@type': 'Offer',
        name: 'Standard - 2 Hours',
        price: '11000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: 'https://www.escortjaipurall.com/pricing#standard',
      },
      {
        '@type': 'Offer',
        name: 'Full Night - 12 Hours',
        price: '15000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: 'https://www.escortjaipurall.com/pricing#full-night',
      },
      {
        '@type': 'Offer',
        name: 'College Call Girls',
        price: '4500',
        priceCurrency: 'INR',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        url: 'https://www.escortjaipurall.com/pricing#college',
      },
      {
        '@type': 'Offer',
        name: 'Housewife Escorts',
        price: '5000',
        priceCurrency: 'INR',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        url: 'https://www.escortjaipurall.com/pricing#housewife',
      },
      {
        '@type': 'Offer',
        name: 'VIP High Profile Escorts',
        price: '10000',
        priceCurrency: 'INR',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        url: 'https://www.escortjaipurall.com/pricing#vip',
      },
      {
        '@type': 'Offer',
        name: 'Russian / Foreign Escorts',
        price: '10000',
        priceCurrency: 'INR',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        url: 'https://www.escortjaipurall.com/pricing#russian',
      },
    ],
  }
}

// 2️⃣ SERVICE SCHEMA WITH PRICING
function ServicePricingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Independent Escort Services with Transparent Pricing',
    description: 'Verified independent escort services in Jaipur with transparent pricing, no hidden charges, cash after meeting.',
    url: 'https://www.escortjaipurall.com/pricing',
    serviceType: [
      'College Escorts',
      'Housewife Escorts',
      'VIP Escorts',
      'Russian Escorts',
      'Model Escorts',
      'Air Hostess Escorts',
    ],
    provider: {
      '@type': 'LocalBusiness',
      name: 'Jaipur Call Girls Service',
      url: 'https://www.escortjaipurall.com',
      telephone: '+918058457070',
      priceRange: 'INR 4500-80000',
    },
    priceRange: '₹4,500 - ₹80,000',
    areaServed: {
      '@type': 'City',
      name: 'Jaipur',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1450',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

// 3️⃣ LOCAL BUSINESS SCHEMA
function LocalBusinessPricingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jaipur Call Girls Service',
    description: 'Verified independent escort service with transparent pricing',
    url: 'https://www.escortjaipurall.com',
    telephone: '+918058457070',
    email: 'contact@escortjaipurall.com',
    priceRange: '₹₹₹',
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
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    paymentAccepted: ['Cash'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+918058457070',
      email: 'contact@escortjaipurall.com',
      areaServed: 'Jaipur',
      availableLanguage: ['en', 'hi'],
    },
  }
}

// 4️⃣ FAQ SCHEMA - PRICING FOCUSED
function PricingFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the current escort rates in Jaipur?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our rates vary by category: College escorts ₹4,500-₹7,000, Housewife escorts ₹5,000-₹10,000, VIP escorts ₹10,000-₹20,000, Russian escorts ₹10,000-₹25,000. Quick booking (1 hour) starts at ₹6,000.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there any hidden charges?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, absolutely no hidden charges. What you see is what you pay. We offer transparent pricing with no surprise costs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you charge advance payment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, we never charge advance payment. Payment is made in cash after the meeting starts. This ensures complete safety and transparency for both parties.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in the pricing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pricing includes the escort companionship for the specified duration. Services vary by package and can include dinner dates, entertainment, and intimate companionship. Details are discussed during booking.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there discounts for longer bookings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer special rates for extended bookings. Full night packages (12+ hours) and weekend packages are available at discounted rates. Contact us for custom pricing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer VVIP premium pricing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our VVIP Diamond Elite models are available at premium rates starting from ₹25,000-₹80,000+ depending on the profile and duration. These require advance booking.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment methods do you accept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We accept cash payment after the meeting starts. This is the safest method for both the client and escort.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a price difference for outcall vs incall?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pricing may vary slightly for incall (her location) vs outcall (your location) based on convenience and travel. Contact us for specific pricing.',
        },
      },
    ],
  }
}

// 5️⃣ BREADCRUMB SCHEMA
function BreadcrumbPricingSchema() {
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
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Pricing & Rates',
        item: 'https://www.escortjaipurall.com/pricing',
      },
    ],
  }
}

// 6️⃣ ORGANIZATION SCHEMA
function OrganizationPricingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jaipur Call Girls Service',
    url: 'https://www.escortjaipurall.com',
    logo: 'https://www.escortjaipurall.com/logo.png',
    description: 'Verified independent escort service in Jaipur with transparent pricing',
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
      'https://www.whatsapp.com/8058457070',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: '+918058457070',
      availableLanguage: ['en', 'hi'],
    },
    priceRange: '₹4,500 - ₹80,000',
  }
}

// 7️⃣ TABLE DATA SCHEMA (For price comparison)
function TableDataSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Table',
    name: 'Jaipur Escort Service Rates Comparison',
    description: 'Comprehensive pricing table for different escort categories in Jaipur',
    about: 'Escort Service Rates',
    url: 'https://www.escortjaipurall.com/pricing',
    author: {
      '@type': 'Organization',
      name: 'Jaipur Call Girls Service',
    },
  }
}

// ============================================
// IMPORT CLIENT COMPONENT
// ============================================
import PricingContent from './PricingContent'

// ============================================
// SERVER COMPONENT - MAXIMUM SEO
// ============================================
export default function PricingPage() {
  return (
    <>
      {/* 1️⃣ AGGREGATE OFFER SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(AggregateOfferSchema()) }}
        suppressHydrationWarning
      />

      {/* 2️⃣ SERVICE PRICING SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ServicePricingSchema()) }}
        suppressHydrationWarning
      />

      {/* 3️⃣ LOCAL BUSINESS SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusinessPricingSchema()) }}
        suppressHydrationWarning
      />

      {/* 4️⃣ PRICING FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PricingFAQSchema()) }}
        suppressHydrationWarning
      />

      {/* 5️⃣ BREADCRUMB SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadcrumbPricingSchema()) }}
        suppressHydrationWarning
      />

      {/* 6️⃣ ORGANIZATION SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationPricingSchema()) }}
        suppressHydrationWarning
      />

      {/* 7️⃣ TABLE DATA SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TableDataSchema()) }}
        suppressHydrationWarning
      />

      {/* RENDER CLIENT COMPONENT */}
      <PricingContent />
    </>
  )
}