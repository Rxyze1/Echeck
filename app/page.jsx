// app/page.jsx

import Hero from '@/app/components/Hero'
import Gallery from '@/app/components/Gallery'
import SEOFaq from '@/app/components/SEOFaq'
import Footer from '@/app/components/Footer'
import SummerLeavesEffect from '@/app/components/SummerLeavesEffect'
import Areainjaipur from '@/app/components/Areasinjaipur'
import HeroActions from '@/app/components/HeroActions'
import Content from '@/app/components/Content'
import TermsCard from '../app/components/MiniCompo/TermsCard'

// ============================================
// 🎯 AGGRESSIVE HOMEPAGE METADATA
// ============================================
export const metadata = {
  // Core SEO - Homepage keywords (most important page)
  title: 'Verified Call Girls in Jaipur 2026 | Real Escorts | Instant Booking | 24/7 Service | NO ADVANCE',
  description: 'Book verified call girls in Jaipur with real photos & instant delivery (20-40 mins). Genuine independent escorts, cash payment, complete privacy. College girls ₹4,500 | VIP escorts ₹10,000+. Available 24/7, no advance payment.',
  keywords: [
    // Primary high-volume keywords
    'call girls in jaipur',
    'verified call girls jaipur',
    'jaipur call girls',
    'jaipur escorts',
    'verified escorts jaipur',
    'independent escorts jaipur',
    'real call girls',
    
    // Service type keywords
    'college call girls jaipur',
    'housewife escorts jaipur',
    'vip escorts jaipur',
    'russian escorts jaipur',
    'model escorts jaipur',
    
    // Benefit keywords
    'instant booking escorts',
    'fast delivery escorts',
    'real photos escorts',
    'verified profiles',
    'discreet escort service',
    'cash payment escorts',
    'no advance payment',
    '24/7 escort service',
    
    // Location-based keywords
    'malviya nagar call girls',
    'c-scheme escorts',
    'vaishali nagar call girls',
    'mansarovar escorts',
    'civil lines call girls',
    
    // Long-tail conversion keywords
    'best call girls in jaipur',
    'genuine escort service jaipur',
    'affordable call girls jaipur',
    'premium escort service jaipur',
    'trusted escort service jaipur',
    'professional companion service',
    'book escort online jaipur',
    'call girl booking jaipur',
  ].join(', '),
  
  // Canonical
  alternates: {
    canonical: 'https://www.escortjaipurall.com',
  },
  
  // Open Graph - Rich sharing
  openGraph: {
    title: 'Verified Call Girls in Jaipur 2026 | Instant Booking | Real Escorts',
    description: 'Book verified call girls with real photos. Fast delivery 20-40 mins, cash payment, 100% privacy. College ₹4,500 | VIP ₹10,000+. 24/7 available.',
    type: 'website',
    url: 'https://www.escortjaipurall.com',
    siteName: 'Jaipur Call Girls Service',
    locale: 'en_IN',
    alternateLocale: 'hi_IN',
    images: [
      {
        url: 'https://www.escortjaipurall.com/og-image-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Verified Call Girls in Jaipur - Real Escorts',
        type: 'image/jpeg',
      },
      {
        url: 'https://www.escortjaipurall.com/og-image-800x600.jpg',
        width: 800,
        height: 600,
        alt: 'Book Verified Escorts in Jaipur - 24/7 Service',
      },
    ],
  },
  
  // Twitter Card - X/Twitter optimization
  twitter: {
    card: 'summary_large_image',
    title: 'Verified Call Girls in Jaipur 2026 | Instant Booking',
    description: 'Real escorts, real photos, fast delivery, cash payment. College ₹4,500 | VIP ₹10,000+. Book now!',
    images: ['https://www.escortjaipurall.com/twitter-image-1200x675.jpg'],
    creator: '@JaipurCallGirls',
    site: '@JaipurCallGirls',
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
    bingbot: {
      index: true,
      follow: true,
    },
  },
  
  // Verification
  verification: {
    google: 'your-google-verification-code',
    msvalidate01: 'your-bing-verification-code',
  },
  
  // Additional meta tags
  applicationName: 'Jaipur Call Girls Service',
  authors: [
    {
      name: 'Jaipur Call Girls Service',
      url: 'https://www.escortjaipurall.com',
    },
  ],
  creator: 'Jaipur Call Girls Service',
  publisher: 'Jaipur Call Girls Service',
  
  // Mobile optimization
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes',
  
  // Cache control
  referrer: 'strict-origin-when-cross-origin',
  
  // Format detection
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

// ============================================
// 📊 6 POWERFUL JSON-LD SCHEMAS
// ============================================

// 1️⃣ LOCAL BUSINESS SCHEMA (Your current one - enhanced)
function LocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.escortjaipurall.com#localbusiness',
    name: 'Jaipur Call Girls Service',
    description: 'Verified independent escort and companion service in Jaipur with real photos, verified profiles, and instant 24/7 booking.',
    url: 'https://www.escortjaipurall.com',
    telephone: '+918058457070',
    email: 'contact@escortjaipurall.com',
    priceRange: '₹4,500 - ₹80,000',
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
      radius: '15000',
    },
    areaServed: {
      '@type': 'City',
      name: 'Jaipur',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+918058457070',
        email: 'contact@escortjaipurall.com',
        areaServed: 'Jaipur',
        availableLanguage: ['en', 'hi'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'WhatsApp Support',
        url: 'https://wa.me/918058457070',
      },
    ],
    serviceType: [
      'Companion Service',
      'Independent Escorts',
      'Call Girls Service',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1500',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '950',
    },
    sameAs: [
      'https://www.facebook.com/escortjaipurall',
      'https://www.instagram.com/escortjaipurall',
      'https://www.whatsapp.com/8058457070',
    ],
    paymentAccepted: 'Cash',
  }
}

// 2️⃣ ORGANIZATION SCHEMA
function OrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.escortjaipurall.com#organization',
    name: 'Jaipur Call Girls Service',
    url: 'https://www.escortjaipurall.com',
    logo: 'https://www.escortjaipurall.com/logo.png',
    image: 'https://www.escortjaipurall.com/og-image-1200x630.jpg',
    description: 'Verified independent escort service in Jaipur with transparent pricing and complete privacy.',
    telephone: '+918058457070',
    email: 'contact@escortjaipurall.com',
    foundingDate: '2020',
    foundingLocation: 'Jaipur, Rajasthan, India',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.facebook.com/escortjaipurall',
      'https://www.instagram.com/escortjaipurall',
      'https://www.twitter.com/escortjaipurall',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: '+918058457070',
      email: 'contact@escortjaipurall.com',
      availableLanguage: ['en', 'hi'],
    },
  }
}

// 3️⃣ WEBSITE SCHEMA WITH SEARCH ACTION
function WebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.escortjaipurall.com#website',
    name: 'Jaipur Call Girls Service',
    url: 'https://www.escortjaipurall.com',
    description: 'Verified call girls and independent escorts in Jaipur',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.escortjaipurall.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

// 4️⃣ BREADCRUMB SCHEMA
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
    ],
  }
}

// 5️⃣ AGGREGATE RATING SCHEMA
function AggregateRatingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    '@id': 'https://www.escortjaipurall.com#rating',
    ratingValue: '4.9',
    ratingCount: '1500',
    reviewCount: '950',
    bestRating: '5',
    worstRating: '1',
    name: 'Jaipur Call Girls Service - Customer Ratings',
  }
}

// 6️⃣ HOMEPAGE SCHEMA
function HomepageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.escortjaipurall.com#webpage',
    name: 'Verified Call Girls in Jaipur | Real Escorts | 24/7 Service',
    description: 'Book verified call girls in Jaipur with real photos. Instant booking, fast delivery, cash payment, complete privacy.',
    url: 'https://www.escortjaipurall.com',
    isPartOf: {
      '@id': 'https://www.escortjaipurall.com#website',
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://www.escortjaipurall.com/og-image-1200x630.jpg',
      width: 1200,
      height: 630,
    },
    datePublished: '2020-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: 'Jaipur Call Girls Service',
    },
  }
}

// ============================================
// MAIN HOMEPAGE COMPONENT
// ============================================
export default function Page() {
  // Generate all schemas
  const localBusinessSchema = LocalBusinessSchema()
  const organizationSchema = OrganizationSchema()
  const websiteSchema = WebsiteSchema()
  const breadcrumbSchema = BreadcrumbSchema()
  const aggregateRatingSchema = AggregateRatingSchema()
  const homepageSchema = HomepageSchema()

  return (
    <div className="relative overflow-hidden">
      {/* ✅ 1️⃣ LOCAL BUSINESS SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        suppressHydrationWarning
      />

      {/* ✅ 2️⃣ ORGANIZATION SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        suppressHydrationWarning
      />

      {/* ✅ 3️⃣ WEBSITE SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        suppressHydrationWarning
      />

      {/* ✅ 4️⃣ BREADCRUMB SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />

      {/* ✅ 5️⃣ AGGREGATE RATING SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
        suppressHydrationWarning
      />

      {/* ✅ 6️⃣ HOMEPAGE SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
        suppressHydrationWarning
      />

      {/* Background Effects */}
      <SummerLeavesEffect />

      {/* Term Card */}
      <TermsCard />

      {/* Navigation Bar */}
     

      {/* Main Sections - All Client Components */}
      <header className="relative" role="banner">
        <Hero />
        <HeroActions />
      </header>

      {/* Gallery Section */}
      <section aria-label="Gallery of Verified Escorts" className="relative">
        <Gallery />
      </section>

      {/* Content Section - SEO Optimized */}
      <section aria-label="Service Information and Call Girls Details" className="relative">
        <Content />
      </section>

      {/* FAQ Section - Rich Snippets */}
      <section aria-label="Frequently Asked Questions About Call Girls" className="relative">
        <SEOFaq />
      </section>

      {/* Areas Section - Local SEO */}
      <section aria-label="Call Girls Available in Different Areas of Jaipur" className="relative">
        <Areainjaipur />
      </section>

      {/* Footer */}
      <footer className="relative" role="contentinfo">
        <Footer />
      </footer>
    </div>
  )
}