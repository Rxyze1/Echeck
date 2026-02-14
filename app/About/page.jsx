// app/about/page.jsx

// ============================================
// 🎯 AGGRESSIVE ABOUT PAGE METADATA
// ============================================
export const metadata = {
  // Core SEO - About page keywords
  title: 'About Jaipur Call Girls Service | Verified Independent Escorts | Our Story & Mission | Trusted Since 2020',
  description: 'Learn about Jaipur Call Girls Service - Jaipur\'s most trusted verified independent escort service. Our mission: transparent pricing, verified profiles, complete privacy. Real girls, real service, zero brokers. 24/7 discreet companion service.',
  keywords: [
    // Brand keywords
    'jaipur call girls service',
    'verified escort service jaipur',
    'independent escorts jaipur',
    'about jaipur escorts',
    'escort service company',
    'professional escort service',
    
    // Trust & credibility keywords
    'trusted escorts jaipur',
    'verified profiles',
    'real escort service',
    'legitimate escort agency',
    'authentic companion service',
    'discreet escort service',
    
    // Differentiator keywords
    'no broker escorts',
    'independent girls jaipur',
    'transparent pricing escorts',
    'cash after meeting',
    'no advance payment service',
    
    // Company info keywords
    'escort service company jaipur',
    'best escort service',
    'professional companionship',
    ' 24/7 escort booking',
    'affordable verified escorts',
    'luxury companion service',
    'elite escort service jaipur',
    
    // Long-tail keywords
    'why choose our escort service',
    'best verified escort service in jaipur',
    'honest escort service with real photos',
    'how escort booking works',
    'verified independent girls',
  ].join(', '),
  
  // Canonical
  alternates: {
    canonical: 'https://www.escortjaipurall.com/about',
  },
  
  // Open Graph - Rich sharing
  openGraph: {
    title: 'About Jaipur Call Girls Service | Verified Independent Escorts',
    description: 'Jaipur\'s most trusted escort service with verified profiles, transparent pricing, and complete privacy. Real girls, zero brokers, 24/7 booking.',
    type: 'website',
    url: 'https://www.escortjaipurall.com/about',
    siteName: 'Jaipur Call Girls Service',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.escortjaipurall.com/images/about-og-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'About Jaipur Call Girls Service - Verified Escorts',
        type: 'image/jpeg',
      },
      {
        url: 'https://www.escortjaipurall.com/images/about-team-800x600.jpg',
        width: 800,
        height: 600,
        alt: 'Our Team - Jaipur Escort Service',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'About Jaipur Call Girls Service | Verified Escorts',
    description: 'Learn our story: transparent pricing, verified profiles, zero brokers, 24/7 discreet service.',
    images: ['https://www.escortjaipurall.com/images/about-twitter.jpg'],
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
    },
  },
  
  // Article metadata
  authors: [
    {
      name: 'Jaipur Call Girls Service',
      url: 'https://www.escortjaipurall.com',
    },
  ],
  creator: 'Jaipur Call Girls Service Team',
  publisher: 'Jaipur Call Girls Service',
  
  // Additional
  applicationName: 'Jaipur Call Girls Service',
  referrer: 'strict-origin-when-cross-origin',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  
  // Verification
  verification: {
    google: 'your-google-verification-code',
    msvalidate01: 'your-bing-verification-code',
  },
}

// ============================================
// 📊 10 POWERFUL JSON-LD SCHEMAS
// ============================================

// 1️⃣ ORGANIZATION SCHEMA (Main)
function OrganizationAboutSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jaipur Call Girls Service',
    url: 'https://www.escortjaipurall.com',
    logo: 'https://www.escortjaipurall.com/logo.png',
    image: 'https://www.escortjaipurall.com/images/about-team.jpg',
    description: 'Verified independent escort and companion service in Jaipur with transparent pricing, verified profiles, and complete privacy.',
    telephone: '+918058457070',
    email: 'contact@escortjaipurall.com',
    areaServed: {
      '@type': 'City',
      name: 'Jaipur',
      '@id': 'https://en.wikipedia.org/wiki/Jaipur',
    },
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
    foundingDate: '2020',
    foundingLocation: 'Jaipur, Rajasthan, India',
    sameAs: [
      'https://www.facebook.com/escortjaipurall',
      'https://www.instagram.com/escortjaipurall',
      'https://www.twitter.com/escortjaipurall',
      'https://www.whatsapp.com/8058457070',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+918058457070',
        email: 'contact@escortjaipurall.com',
        availableLanguage: ['en', 'hi'],
        areaServed: 'Jaipur',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'WhatsApp Support',
        url: 'https://wa.me/918058457070',
        telephone: '+918058457070',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1500',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '950',
    },
    priceRange: '₹4,500 - ₹80,000',
  }
}

// 2️⃣ LOCAL BUSINESS SCHEMA
function LocalBusinessAboutSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jaipur Call Girls Service',
    description: 'Verified independent escort service providing transparent, discreet companion services across Jaipur.',
    url: 'https://www.escortjaipurall.com',
    telephone: '+918058457070',
    email: 'contact@escortjaipurall.com',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
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
    paymentAccepted: ['Cash'],
    sameAs: [
      'https://www.facebook.com/escortjaipurall',
      'https://www.instagram.com/escortjaipurall',
    ],
  }
}

// 3️⃣ ABOUT PAGE SCHEMA (Article/WebPage)
function AboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Jaipur Call Girls Service',
    description: 'Learn about our verified independent escort service, our mission, values, and commitment to transparency and privacy.',
    url: 'https://www.escortjaipurall.com/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'Jaipur Call Girls Service',
      url: 'https://www.escortjaipurall.com',
    },
    author: {
      '@type': 'Organization',
      name: 'Jaipur Call Girls Service',
    },
    datePublished: '2020-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    image: 'https://www.escortjaipurall.com/images/about-page.jpg',
  }
}

// 4️⃣ COMPANY VALUES SCHEMA
function CompanyValuesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jaipur Call Girls Service',
    url: 'https://www.escortjaipurall.com',
    description: 'Our core values: Transparency, Privacy, Authenticity, Professionalism, and Trust',
    knowsAbout: [
      'Verified Independent Escorts',
      'Transparent Pricing',
      'Complete Privacy',
      'Professional Service',
      'Discreet Companion Service',
      'Real Profiles with Real Photos',
      '24/7 Availability',
      'Zero Broker Involvement',
    ],
  }
}

// 5️⃣ FAQ SCHEMA - ABOUT
function AboutFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Jaipur Call Girls Service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Jaipur Call Girls Service is a verified independent escort and companion service operating in Jaipur since 2020. We connect clients with real, verified independent escorts who offer discreet professional companionship with complete transparency and privacy.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are all profiles verified?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100% of our profiles are personally verified including ID verification, photo verification, and health checks. We ensure authenticity and safety for both clients and escorts.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes us different from other services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We operate on principles of complete transparency: no hidden charges, no advance payments, zero broker involvement, real photos only, verified profiles, cash after meeting, and 100% privacy guaranteed.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long have you been in business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Jaipur Call Girls Service has been operating since 2020, building trust and reputation as the most reliable verified escort service in Jaipur.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you have a physical office?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We operate as a verified network of independent escorts across Jaipur. We don\'t maintain a physical office to maintain complete privacy and discretion for our clients and companions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it safe to use your service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All profiles are verified, all communications are secure and confidential, payment is made after meeting in person, and we maintain 100% privacy. Your safety is our priority.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is your commitment to privacy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Privacy is our top priority. Your personal information is never shared, no data leaks, confidential communication channels, and complete discretion guaranteed in all interactions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact you?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact us 24/7 via WhatsApp (+918058457070), phone call (+91-8058457070), or email (contact@escortjaipurall.com). We respond within minutes.',
        },
      },
    ],
  }
}

// 6️⃣ BREADCRUMB SCHEMA
function BreadcrumbAboutSchema() {
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
        name: 'About Us',
        item: 'https://www.escortjaipurall.com/about',
      },
    ],
  }
}

// 7️⃣ REVIEWS AGGREGATE SCHEMA
function ReviewsAggregateSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    name: 'Jaipur Call Girls Service Reviews',
    ratingValue: '4.9',
    ratingCount: '1500',
    reviewCount: '950',
    bestRating: '5',
    worstRating: '1',
    url: 'https://www.escortjaipurall.com/about',
  }
}

// 8️⃣ WEBSITE SCHEMA
function WebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Jaipur Call Girls Service',
    url: 'https://www.escortjaipurall.com',
    description: 'Verified independent escort and companion service in Jaipur',
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

// 9️⃣ PERSON SCHEMA (Founder/Team)
function PersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jaipur Call Girls Service Team',
    url: 'https://www.escortjaipurall.com',
    description: 'Professional team committed to providing verified, transparent, and discreet escort services',
    organization: {
      '@type': 'Organization',
      name: 'Jaipur Call Girls Service',
      url: 'https://www.escortjaipurall.com',
    },
    sameAs: [
      'https://www.facebook.com/escortjaipurall',
      'https://www.instagram.com/escortjaipurall',
    ],
  }
}

// 🔟 SOCIAL MEDIA LINKS SCHEMA
function SocialMediaSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jaipur Call Girls Service',
    url: 'https://www.escortjaipurall.com',
    sameAs: [
      'https://www.facebook.com/escortjaipurall',
      'https://www.instagram.com/escortjaipurall',
      'https://www.twitter.com/escortjaipurall',
      'https://www.whatsapp.com/8058457070',
      'https://www.telegram.org/escortjaipurall',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: '+918058457070',
      email: 'contact@escortjaipurall.com',
    },
  }
}

// ============================================
// IMPORT CLIENT COMPONENT
// ============================================
import AboutContent from './AboutContent'

// ============================================
// SERVER COMPONENT - MAXIMUM SEO
// ============================================
export default function AboutPage() {
  return (
    <>
      {/* 1️⃣ ORGANIZATION SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationAboutSchema()) }}
        suppressHydrationWarning
      />

      {/* 2️⃣ LOCAL BUSINESS SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusinessAboutSchema()) }}
        suppressHydrationWarning
      />

      {/* 3️⃣ ABOUT PAGE SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(AboutPageSchema()) }}
        suppressHydrationWarning
      />

      {/* 4️⃣ COMPANY VALUES SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CompanyValuesSchema()) }}
        suppressHydrationWarning
      />

      {/* 5️⃣ FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(AboutFAQSchema()) }}
        suppressHydrationWarning
      />

      {/* 6️⃣ BREADCRUMB SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadcrumbAboutSchema()) }}
        suppressHydrationWarning
      />

      {/* 7️⃣ REVIEWS AGGREGATE SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ReviewsAggregateSchema()) }}
        suppressHydrationWarning
      />

      {/* 8️⃣ WEBSITE SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WebsiteSchema()) }}
        suppressHydrationWarning
      />

      {/* 9️⃣ PERSON SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PersonSchema()) }}
        suppressHydrationWarning
      />

      {/* 🔟 SOCIAL MEDIA LINKS SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SocialMediaSchema()) }}
        suppressHydrationWarning
      />

      {/* RENDER CLIENT COMPONENT */}
      <AboutContent />
    </>
  )
}