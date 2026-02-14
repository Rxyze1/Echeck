// app/terms-conditions/page.jsx

export const metadata = {
  title: 'Terms & Conditions | Jaipur Call Girls Service | Legal Agreement',
  description: 'Read our comprehensive Terms & Conditions. Understand booking policies, payment terms, cancellation policy, and legal agreement for our escort services.',
  keywords: 'terms and conditions, terms of service, legal agreement, service terms, booking policy, cancellation policy',
  
  alternates: {
    canonical: 'https://www.escortjaipurall.com/terms-conditions',
  },
  
  openGraph: {
    title: 'Terms & Conditions | Jaipur Call Girls Service',
    description: 'Our comprehensive Terms & Conditions explaining the legal agreement and service policies.',
    url: 'https://www.escortjaipurall.com/terms-conditions',
    type: 'website',
  },
  
  twitter: {
    card: 'summary',
    title: 'Terms & Conditions | Legal Agreement',
    description: 'Understand our terms of service and booking policies.',
  },
  
  robots: {
    index: true,
    follow: true,
  },
}

// ============================================
// 📄 TERMS & CONDITIONS SCHEMA
// ============================================
function TermsSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms and Conditions',
    description: 'Terms and Conditions for Jaipur Call Girls Service',
    url: 'https://www.escortjaipurall.com/terms-conditions',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Jaipur Call Girls Service',
      url: 'https://www.escortjaipurall.com',
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
// 🔗 BREADCRUMB SCHEMA
// ============================================
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
        name: 'Terms & Conditions',
        item: 'https://www.escortjaipurall.com/terms-conditions',
      },
    ],
  }
}

// ============================================
// 🏢 ORGANIZATION SCHEMA
// ============================================
function OrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jaipur Call Girls Service',
    url: 'https://www.escortjaipurall.com',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Legal Inquiries',
      telephone: '+918058457070',
      email: 'legal@escortjaipurall.com',
    },
  }
}

// ============================================
// ⚖️ LEGAL SERVICE SCHEMA
// ============================================
function LegalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jaipur Call Girls Service',
    description: 'Premium companion and escort service in Jaipur',
    url: 'https://www.escortjaipurall.com',
    serviceType: 'Companion Service',
    areaServed: {
      '@type': 'City',
      name: 'Jaipur',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Companion Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Companion Service',
          },
          priceCurrency: 'INR',
          price: '4500-80000',
          description: 'Professional companion services for adults 18+',
        },
      ],
    },
    termsOfService: 'https://www.escortjaipurall.com/terms-conditions',
    privacyPolicy: 'https://www.escortjaipurall.com/privacy-policy',
  }
}

import TermsConditionsContent from './TermsConditionsContent'

export default function TermsConditionsPage() {
  return (
    <>
      {/* ✅ TERMS & CONDITIONS SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TermsSchema()) }}
        suppressHydrationWarning
      />

      {/* ✅ BREADCRUMB SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadcrumbSchema()) }}
        suppressHydrationWarning
      />

      {/* ✅ ORGANIZATION SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema()) }}
        suppressHydrationWarning
      />

      {/* ✅ LEGAL SERVICE SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LegalServiceSchema()) }}
        suppressHydrationWarning
      />

      <TermsConditionsContent />
    </>
  )
}