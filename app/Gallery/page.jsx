// app/gallery/page.jsx (Server Component)

// ✅ METADATA
export const metadata = {
  title: 'Verified Companion Gallery | Real Photos | Jaipur Call Girls | 24/7',
  description: 'Browse verified companion gallery with real photos. View genuine escorts in Jaipur with 100% verified profiles, transparent pricing, no advance payment.',
  keywords: 'verified call girls gallery jaipur, real escort photos, genuine companion photos, jaipur escorts gallery, verified profiles',
  
  alternates: {
    canonical: 'https://www.escortjaipurall.com/gallery',
  },
  
  openGraph: {
    title: 'Verified Companion Gallery - Real Photos | Jaipur',
    description: 'View verified escorts with real photos and verified profiles. Transparent pricing, 24/7 availability.',
    type: 'website',
    url: 'https://www.escortjaipurall.com/gallery',
    siteName: 'Jaipur Call Girls Service',
    images: [
      {
        url: 'https://www.escortjaipurall.com/gallery-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Verified Companion Gallery',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Verified Companion Gallery',
    description: 'Real photos of verified escorts in Jaipur',
    images: ['https://www.escortjaipurall.com/gallery-twitter.jpg'],
  },
  
  robots: 'index, follow, max-image-preview:large',
}

// ✅ JSON-LD SCHEMA
function GallerySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Verified Companions Gallery',
    description: 'Gallery of verified escorts in Jaipur with real photos',
    url: 'https://www.escortjaipurall.com/gallery',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Jaipur Call Girls Service',
      telephone: '+918058457070',
    },
    image: [
      'https://www.escortjaipurall.com/gallery-1.jpg',
      'https://www.escortjaipurall.com/gallery-2.jpg',
      'https://www.escortjaipurall.com/gallery-3.jpg',
    ],
  }
}

// ✅ IMPORT CLIENT COMPONENT
import GalleryContent from './GalleryContent'

export default function GalleryPage() {
  return (
    <>
      {/* ✅ JSON-LD SCHEMA SCRIPT */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(GallerySchema()) }}
        suppressHydrationWarning
      />

      {/* ✅ CLIENT COMPONENT */}
      <GalleryContent />
    </>
  )
}