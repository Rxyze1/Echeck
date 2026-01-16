// app/call-girls-in-jaipur/page.tsx
import type { Metadata } from 'next';
import Pricing from '../Pricing/page'; // Import your existing Pricing component
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Call Girls in Jaipur ₹3000 Cash Payment | Verified Independent Escorts 2026',
  description: 'Book genuine call girls in Jaipur with real photos, cash payment, no advance. Independent & VIP escorts available in Malviya Nagar, Vaishali Nagar, Mansarovar, Jagatpura & all areas. Discreet 24/7 WhatsApp booking, 100% privacy guaranteed.',
  keywords: 'call girls in jaipur, independent call girls jaipur, escort service jaipur, vip call girls jaipur, jaipur call girls whatsapp number, genuine call girls jaipur cash payment, high profile escorts jaipur, russian call girls jaipur, college call girls jaipur, housewife escorts jaipur, call girls near me jaipur, call girls malviya nagar jaipur, call girls vaishali nagar jaipur, call girls mansarovar jaipur',
  openGraph: {
    title: 'Call Girls in Jaipur – Verified Escorts & Discreet Services 2026',
    description: 'Premium independent & VIP call girls in Jaipur. Cash payment, fast delivery, real profiles, complete privacy.',
    images: '/images/jaipur-call-girls-hub-hero.webp',
  },
 
};

export default function JaipurHubPage() {
  return (
    <main className="min-h-screen bg-black text-gray-200">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 text-center bg-gradient-to-b from-black via-red-950/20 to-black">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
          Call Girls in Jaipur ₹3000 Cash Payment | Verified Independent Escorts 2026
        </h1>

        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 text-gray-300">
          Looking for trusted <strong>call girls in Jaipur</strong>? We provide genuine independent & VIP escorts with real photos, cash payment (no advance), and 100% privacy. Available 24/7 across Malviya Nagar, Vaishali Nagar, Mansarovar, Jagatpura, Tonk Road, C-Scheme, Raja Park & all Jaipur areas. Fast discreet delivery (20–40 mins).
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="https://wa.me/1234567890?text=Hi! Interested in call girls in Jaipur discreet service"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-gradient-to-r from-red-600 to-pink-600 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition"
          >
            WhatsApp Now 💬
          </a>
          <a
            href="tel:+911234567890"
            className="px-10 py-5 border-2 border-red-500 rounded-full font-bold text-lg hover:bg-red-900/30 transition"
          >
            Call Now 📞
          </a>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-red-500">
          Premium Companionship Packages in Jaipur
        </h2>
        <Pricing />
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-gradient-to-b from-gray-900/50 to-black">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Our <span className="text-red-500">Jaipur Call Girls</span> Service?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: '100% Verified Real Profiles', desc: 'Every companion is personally verified with genuine photos.' },
            { title: 'Complete Privacy & Discretion', desc: 'Your identity & meeting details are 100% protected.' },
            { title: 'Cash Payment – No Advance', desc: 'Pay only on arrival – safe & convenient.' },
            { title: 'Fast Delivery (20–40 mins)', desc: 'Quick response across all Jaipur areas.' },
            { title: 'Wide Variety of Companions', desc: 'College girls, housewives, Russian, VIP high-profile models.' },
            { title: '24/7 Availability', desc: 'Day or night – always ready for you.' },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-gray-900/70 rounded-2xl border border-red-900/50 text-center">
              <h3 className="text-xl font-bold mb-4 text-red-400">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Areas Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Call Girls Available in All Major Jaipur Areas
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: 'Malviya Nagar', slug: 'malviya-nagar' },
            { name: 'Vaishali Nagar', slug: 'vaishali-nagar' },
            { name: 'Mansarovar', slug: 'mansarovar' },
            { name: 'Jagatpura', slug: 'jagatpura' },
            { name: 'Tonk Road', slug: 'tonk-road' },
            { name: 'C-Scheme', slug: 'c-scheme' },
            { name: 'Raja Park', slug: 'raja-park' },
            { name: 'Bani Park', slug: 'bani-park' },
            { name: 'Civil Lines', slug: 'civil-lines' },
            { name: 'Ajmer Road', slug: 'ajmer-road' },
            { name: 'Pratap Nagar', slug: 'pratap-nagar' },
            { name: 'Gopalpura', slug: 'gopalpura' },
            { name: 'Durgapura', slug: 'durgapura' },
            { name: 'Sanganer', slug: 'sanganer' },
          ].map((area) => (
            <Link
              key={area.slug}
              href={`/call-girls-in-${area.slug}-jaipur`}
              className="p-6 bg-red-950/30 rounded-xl text-center hover:bg-red-900/50 transition border border-red-900/40"
            >
              Call Girls in {area.name} Jaipur
            </Link>
          ))}
        </div>
        <p className="text-center mt-10 text-gray-400">
          Also serving: Jhotwara, Vidhyadhar Nagar, Ambabari, Sodala, Shastri Nagar, Sindhi Camp & more.
        </p>
      </section>

      {/* Booking Guide */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">
          How to Book Call Girls in Jaipur – Simple & Safe Process
        </h2>
        <div className="max-w-4xl mx-auto space-y-8 text-lg">
          <div className="flex items-start gap-6">
            <div className="text-4xl font-bold text-red-500">1</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
              <p>Send WhatsApp message or call with your preferred area, time & type of companion.</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="text-4xl font-bold text-red-500">2</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Choose Profile</h3>
              <p>Get shortlisted verified profiles with real photos within minutes.</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="text-4xl font-bold text-red-500">3</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Meet & Enjoy</h3>
              <p>Confirm & meet – cash payment on arrival, full privacy assured.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-red-500">Safety & Privacy – Our Top Priority</h2>
        <p className="text-xl max-w-4xl mx-auto">
          All our Jaipur call girls are 100% verified, health-checked & professional. We maintain complete confidentiality – no personal details are stored or shared. Safe practices are mandatory. Only 18+ serious clients welcome.
        </p>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center bg-gradient-to-t from-black via-red-950/30 to-transparent">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready for Premium Companionship in Jaipur?
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://wa.me/1234567890?text=Hi! I want to book call girls in Jaipur"
            target="_blank"
            className="px-12 py-6 bg-gradient-to-r from-red-600 to-pink-600 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition"
          >
            WhatsApp Booking Now 💬🔥
          </a>
          <a
            href="tel:+911234567890"
            className="px-12 py-6 border-2 border-red-500 rounded-full text-xl font-bold hover:bg-red-900/30 transition"
          >
            Call Now 📞
          </a>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Jaipur Call Girls Service",
            "description": "Verified independent call girls & escorts in Jaipur with discreet cash payment service across all areas.",
            "url": "https://your-site.com/call-girls-in-jaipur",
            "telephone": "+911234567890",
            "priceRange": "₹3000-₹15000",
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
            "sameAs": ["https://wa.me/1234567890"],
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How to book call girls in Jaipur?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Contact via WhatsApp or call, get verified profiles, confirm & pay cash on arrival."
                }
              },
              {
                "@type": "Question",
                "name": "Are the call girls in Jaipur genuine & verified?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all profiles are 100% verified with real photos."
                }
              },
              {
                "@type": "Question",
                "name": "Is cash payment available for Jaipur escorts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, no advance – full cash payment on arrival."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}