// app/privacy-policy/page.jsx

export const metadata = {
  title: 'Privacy Policy | Jaipur Call Girls Service | Data Protection & Privacy',
  description: 'Read our comprehensive Privacy Policy. Learn how we protect your data, maintain confidentiality, and ensure your privacy. Your security is our priority.',
  keywords: 'privacy policy, data protection, confidentiality, privacy guarantee, data security, user privacy',
  
  alternates: {
    canonical: 'https://www.escortjaipurall.com/privacy-policy',
  },
  
  openGraph: {
    title: 'Privacy Policy | Your Data Protection',
    description: 'Our comprehensive privacy policy ensuring complete data protection and confidentiality.',
    url: 'https://www.escortjaipurall.com/privacy-policy',
    type: 'website',
  },
  
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Data Protection',
    description: 'Learn how we protect your data and maintain your privacy.',
  },
  
  robots: {
    index: true,
    follow: true,
  },
}

// 📄 PRIVACY POLICY SCHEMA
function PrivacyPolicySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    description: 'Privacy policy and data protection information for Jaipur Call Girls Service',
    url: 'https://www.escortjaipurall.com/privacy-policy',
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

// BREADCRUMB SCHEMA
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
        name: 'Privacy Policy',
        item: 'https://www.escortjaipurall.com/privacy-policy',
      },
    ],
  }
}

// ORGANIZATION SCHEMA
function OrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jaipur Call Girls Service',
    url: 'https://www.escortjaipurall.com',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Privacy Inquiries',
      email: 'privacy@escortjaipurall.com',
      telephone: '+918058457070',
    },
  }
}

import PrivacyPolicyContent from './PrivacyPolicyContent'

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* PRIVACY POLICY SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PrivacyPolicySchema()) }}
        suppressHydrationWarning
      />

      {/* BREADCRUMB SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadcrumbSchema()) }}
        suppressHydrationWarning
      />

      {/* ORGANIZATION SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema()) }}
        suppressHydrationWarning
      />

      <PrivacyPolicyContent />
    </>
  )
}