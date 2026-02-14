// app/page.jsx
import Hero from '@/app/components/Hero'
import Gallery from '@/app/components/Gallery'
import SEOFaq from '@/app/components/SEOFaq'
import Footer from '@/app/components/Footer'
import SummerLeavesEffect from '@/app/components/SummerLeavesEffect'
import Areainjaipur from '@/app/components/Areasinjaipur'
import HeroActions from '@/app/components/HeroActions'
import Content from '@/app/components/Content'

// ============================================
// SEO METADATA
// ============================================
export const metadata = {
  title: 'Verified Call Girls in Jaipur | Real Escorts | 24/7 Service',
  description: 'Book verified call girls in Jaipur with real photos. Genuine independent escorts, fast delivery 20-40 mins, cash payment, complete privacy. Available 24/7.',
  keywords: 'verified call girls jaipur, genuine escorts, real companions, independent call girls, best escort service jaipur',
  
  // Canonical tag
  alternates: {
    canonical: 'https://www.escortjaipurall.com',
  },
  
  // Open Graph
  openGraph: {
    title: 'Verified Call Girls in Jaipur - Real Escorts | 24/7 Service',
    description: 'Book verified call girls in Jaipur. Genuine escorts with real photos, fast delivery, complete privacy.',
    type: 'website',
    url: 'https://www.escortjaipurall.com',
    siteName: 'Jaipur Call Girls Service',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.escortjaipurall.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Verified Call Girls in Jaipur',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Verified Call Girls in Jaipur - Real Escorts',
    description: 'Genuine escorts, real photos, 24/7 available, fast delivery, complete privacy.',
    images: ['https://www.escortjaipurall.com/twitter-image.jpg'],
    creator: '@JaipurCallGirls',
  },
  
  // Robots meta tag
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  
  // Additional meta tags
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
}

// ============================================
// STRUCTURED DATA SCHEMA MARKUP
// ============================================
const generateJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jaipur Call Girls Service',
    description: 'Verified companion service in Jaipur with real photos and verified profiles.',
    url: 'https://www.escortjaipurall.com',
    telephone: '+918058457070',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      postalCode: '302001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.9124,
      longitude: 75.7873,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+918058457070',
      areaServed: 'Jaipur',
    },
    serviceType: 'Companion Service',
    priceRange: '₹3500-₹15000',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  }
}

// ============================================
// HOME PAGE COMPONENT
// ============================================
export default function Page() {
  const jsonLd = generateJsonLd()

  return (
    <div className="relative overflow-hidden">
      {/* Schema Markup - JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />

      {/* Background Effects */}
      <SummerLeavesEffect />

      {/* Main Sections */}
      <header className="relative" role="banner">
        <Hero />
        <HeroActions />
      </header>

      {/* Gallery Section */}
      <section aria-label="Gallery" className="relative">
        <Gallery />
      </section>

      {/* Content Section - SEO Optimized */}
      <section aria-label="Service Information" className="relative">
        <Content />
      </section>

      {/* FAQ Section */}
      <section aria-label="Frequently Asked Questions" className="relative">
        <SEOFaq />
      </section>

      {/* Areas Section - Local SEO */}
      <section aria-label="Service Areas in Jaipur" className="relative">
        <Areainjaipur />
      </section>

      {/* Footer */}
      <footer className="relative" role="contentinfo">
        <Footer />
      </footer>
    </div>
  )
}