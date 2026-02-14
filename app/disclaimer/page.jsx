// app/disclaimer/page.jsx

export const metadata = {
  title: 'Disclaimer | Jaipur Call Girls Service | Important Legal Notice',
  description: 'Important legal disclaimer for Jaipur Call Girls Service. Read before using our website and services. Understand limitations and responsibilities.',
  keywords: 'disclaimer, legal notice, service disclaimer, limitation of liability, user agreement',
  
  alternates: {
    canonical: 'https://www.escortjaipurall.com/disclaimer',
  },
  
  openGraph: {
    title: 'Disclaimer | Important Legal Notice',
    description: 'Legal disclaimer and important notices for Jaipur Call Girls Service.',
    url: 'https://www.escortjaipurall.com/disclaimer',
    type: 'website',
  },
  
  twitter: {
    card: 'summary',
    title: 'Disclaimer | Legal Notice',
    description: 'Important disclaimer and legal notices.',
  },
  
  robots: {
    index: true,
    follow: true,
  },
}

// ============================================
// 📄 DISCLAIMER SCHEMA
// ============================================
function DisclaimerSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Disclaimer',
    description: 'Legal disclaimer and important notices for Jaipur Call Girls Service',
    url: 'https://www.escortjaipurall.com/disclaimer',
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
        name: 'Disclaimer',
        item: 'https://www.escortjaipurall.com/disclaimer',
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
      contactType: 'Legal Information',
      telephone: '+918058457070',
      email: 'legal@escortjaipurall.com',
    },
  }
}

import DisclaimerContent from './DisclaimerContent'

export default function DisclaimerPage() {
  return (
    <>
      {/* ✅ DISCLAIMER SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DisclaimerSchema()) }}
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

      <DisclaimerContent />
    </>
  )
}