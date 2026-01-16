// app/college-call-girls-jaipur/page.tsx
import type { Metadata } from 'next';
import Pricing from '../Pricing/page'; // Your existing Pricing component
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'College Call Girls in Jaipur ₹3500+ | Young Student Escorts 2026 | Real Photos',
  description: 'Genuine college call girls in Jaipur – young, fresh & beautiful student escorts with real photos, cash payment, no advance. Discreet service in Malviya Nagar, Vaishali Nagar, Mansarovar & all areas. 24/7 WhatsApp booking, 100% verified & private.',
  keywords: 'college call girls jaipur, college call girls in jaipur, young college girls jaipur, student call girls jaipur whatsapp number, genuine college call girls jaipur cash payment, college student escorts jaipur, fresh college call girls jaipur, college girl escorts malviya nagar jaipur, college call girls vaishali nagar jaipur, college call girls mansarovar jaipur',
  openGraph: {
    title: 'College Call Girls in Jaipur – Young & Fresh Student Escorts 2026',
    description: 'Book verified young college call girls in Jaipur with real photos & cash payment. Discreet, private & fast service across all areas.',
    images: '/images/college-call-girls-jaipur-hero.webp',
  },
  
};

export default function CollegeCallGirlsJaipurPage() {
  return (
    <main className="min-h-screen bg-black text-gray-200">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 text-center bg-gradient-to-b from-black via-red-950/30 to-black">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-rose-600 bg-clip-text text-transparent">
          College Call Girls in Jaipur ₹3500+ | Young Student Escorts 2026 | Real Photos
        </h1>

        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 text-gray-300">
          Looking for <strong>young college call girls in Jaipur</strong>? We offer genuine, fresh & beautiful student escorts – verified with real photos, cash payment (no advance), and complete privacy. Perfect for those who prefer youthful energy and natural charm. Available 24/7 in Malviya Nagar, Vaishali Nagar, Mansarovar, Jagatpura, Tonk Road & across Jaipur. Fast discreet delivery (20–40 mins).
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="https://wa.me/1234567890?text=Hi! Interested in young college call girls in Jaipur"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-gradient-to-r from-pink-600 to-red-600 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition"
          >
            WhatsApp Now 💬
          </a>
          <a
            href="tel:+911234567890"
            className="px-10 py-5 border-2 border-pink-500 rounded-full font-bold text-lg hover:bg-pink-900/30 transition"
          >
            Call Now 📞
          </a>
        </div>
      </section>

      {/* Why College Girls Category */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-pink-500">
          Why Choose College Call Girls in Jaipur?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Young & Energetic', desc: 'Fresh college students with natural charm & youthful vibe' },
            { title: '100% Verified Real Photos', desc: 'Every profile is personally checked – no fake pics' },
            { title: 'Discreet & Confidential', desc: 'Complete privacy – no questions, no records' },
            { title: 'Cash Payment – No Advance', desc: 'Pay only on arrival – safe & trusted' },
            { title: 'Fast Delivery Across Jaipur', desc: '20–40 min response in Malviya Nagar, Vaishali Nagar & more' },
            { title: '24/7 Availability', desc: 'Day or night – perfect for students flexible schedules' },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-gray-900/70 rounded-2xl border border-pink-900/50 text-center">
              <h3 className="text-xl font-bold mb-4 text-pink-400">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Integration */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">
          Pricing for College Call Girls in Jaipur
        </h2>
        <Pricing />
        <p className="text-center mt-8 text-gray-400">
          College packages usually start from ₹3500/hr (regular) – ₹7000+/hr (premium/VIP). Custom rates for longer sessions.
        </p>
      </section>

      {/* Areas Coverage */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Where You Can Meet College Call Girls in Jaipur
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { name: 'Malviya Nagar', slug: 'malviya-nagar' },
            { name: 'Vaishali Nagar', slug: 'vaishali-nagar' },
            { name: 'Mansarovar', slug: 'mansarovar' },
            { name: 'Jagatpura', slug: 'jagatpura' },
            { name: 'Tonk Road', slug: 'tonk-road' },
            { name: 'C-Scheme', slug: 'c-scheme' },
            { name: 'Raja Park', slug: 'raja-park' },
            { name: 'Bani Park', slug: 'bani-park' },
          ].map((area) => (
            <Link
              key={area.slug}
              href={`/call-girls-in-${area.slug}-jaipur`}
              className="p-6 bg-pink-950/30 rounded-xl hover:bg-pink-900/50 transition border border-pink-900/40"
            >
              College Call Girls in {area.name}
            </Link>
          ))}
        </div>
        <p className="text-center mt-10 text-gray-400">
          Also available in Civil Lines, Ajmer Road, Pratap Nagar, Gopalpura, Durgapura, Sanganer & all Jaipur areas.
        </p>
      </section>

      {/* Booking Process */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-gradient-to-b from-gray-900/50 to-black">
        <h2 className="text-4xl font-bold text-center mb-12">
          How to Book Young College Call Girls in Jaipur
        </h2>
        <div className="max-w-4xl mx-auto space-y-8 text-lg">
          <div className="flex items-start gap-6">
            <div className="text-4xl font-bold text-pink-500">1</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Message or Call</h3>
              <p>WhatsApp or call us with your preferred area & time.</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="text-4xl font-bold text-pink-500">2</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Choose Profile</h3>
              <p>Get 4–6 fresh college girl profiles with real photos instantly.</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="text-4xl font-bold text-pink-500">3</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Meet & Enjoy</h3>
              <p>Confirm – meet discreetly – cash payment on arrival.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Trust */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-pink-500">
          Safety, Privacy & Verification – 100% Guaranteed
        </h2>
        <p className="text-xl max-w-4xl mx-auto mb-8">
          All our college call girls in Jaipur are 18+, verified, and come with real recent photos. We never store personal data. Complete discretion & safe practices are mandatory. Only serious clients 18+.
        </p>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center bg-gradient-to-t from-black via-pink-950/30 to-transparent">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to Meet Young College Call Girls in Jaipur?
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
         
        <a
  href="https://wa.me/1234567890?text=Hi%21%20I%20want%20young%20college%20call%20girls%20in%20Jaipur"
  target="_blank"
  rel="noopener noreferrer"
  className="px-12 py-6 bg-gradient-to-r from-pink-600 to-red-600 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition"
>
  WhatsApp Now 💬🔥
</a>

          <a
            href="tel:+911234567890"
            className="px-12 py-6 border-2 border-pink-500 rounded-full text-xl font-bold hover:bg-pink-900/30 transition"
          >
            Call Now 📞
          </a>
        </div>
      </section>

      {/* Schema Markup – Very Important for Rich Results */}
      {/* Recommended: Place these two script tags at the bottom of your page component (e.g. in CollegeCallGirlsJaipurPage) */}

{/* 1. LocalBusiness + Service Schema */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "College Call Girls Jaipur Service",
      "description": "Verified young college student escorts and companionship services in Jaipur with real photos, cash payment, and complete discretion.",
      "url": "https://your-site.com/college-call-girls-jaipur",
      "telephone": "+911234567890",
      "priceRange": "₹3500-₹12000",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://wa.me/1234567890"
      ],
      "makesOffer": {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Young College Student Companionship Services",
          "serviceType": "Discreet Companionship",
          "areaServed": {
            "@type": "Place",
            "name": "Jaipur, Rajasthan, India"
          },
          "provider": {
            "@type": "LocalBusiness",
            "name": "College Call Girls Jaipur Service"
          }
        }
      }
    })
  }}
/>

{/* 2. Separate FAQPage Schema – required for FAQ rich results */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How to book college call girls in Jaipur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply contact us via WhatsApp or phone. We'll share verified student profiles with real photos, confirm your booking, and arrange a discreet meeting. Payment is cash on arrival – no advance required."
          }
        },
        {
          "@type": "Question",
          "name": "Are the college call girls in Jaipur real and verified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, every profile is 100% verified by our team with recent genuine photos. We personally check each companion to ensure authenticity and quality."
          }
        },
        {
          "@type": "Question",
          "name": "What is the price for young college escorts in Jaipur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Regular sessions start from ₹3500 per hour. Premium and VIP college girls are priced higher (₹6000+), depending on duration and special requests."
          }
        },
        {
          "@type": "Question",
          "name": "Is cash payment available for college call girls in Jaipur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we accept full cash payment on arrival. No advance payment is needed, making it safe and convenient for all clients."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide college call girls in specific areas of Jaipur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer fast service across all major areas including Malviya Nagar, Vaishali Nagar, Mansarovar, Jagatpura, Tonk Road, C-Scheme, Raja Park, and more."
          }
        }
      ]
    })
  }}
/>
    </main>
    );
}

