'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';

// ✅ NEXT.JS METADATA - Not Head component
export const metadata: Metadata = {
  title: 'Jaipur Call Girls FAQ 2026 | Rates, Booking, Safety & Best Escorts Guide',
  description: 'Complete FAQ for verified call girls in Jaipur 2026 – Independent escorts, rates ₹1500-10000, 24/7 booking, cash payment, safe service in Malviya Nagar, C-Scheme, all areas. Avoid scams.',
  keywords: 'jaipur call girls faq, call girls rates jaipur, book escorts jaipur, independent escorts jaipur, jaipur escort service, verified call girls, safe booking jaipur',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  
  openGraph: {
    title: 'Jaipur Call Girls FAQ 2026 | Complete Rates & Booking Guide',
    description: 'All questions answered – verified escorts, rates, areas, payment, safety. Fast booking in Jaipur.',
    url: 'https://www.escortjaipurall.com/faq',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jaipur Call Girls FAQ'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Jaipur Call Girls FAQ 2026',
    description: 'Verified escorts, rates, safe booking guide'
  },

  alternates: {
    canonical: 'https://www.escortjaipurall.com/faq',
  },
};

const SEOFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ AGGRESSIVE KEYWORD INTEGRATION - 50+ FAQs with target keywords
  const faqs = useMemo(() => [
    // ===== BOOKING & RATES =====
    {
      q: "What are the exact rates for call girls in Jaipur 2026?",
      a: "Current rates for verified call girls in Jaipur 2026: Quick 30-min bookings ₹1500-2000 | 2-hour service ₹2000-3500 | 4-hour package ₹4000-6000 | Full night (8-12 hours) ₹6000-12000 | Overnight ₹10000-15000. Premium independent escorts in C-Scheme, Malviya Nagar, Vaishali Nagar charge ₹3000-5000/hour. VIP high-profile call girls ₹8000-20000/hour. No hidden charges, transparent pricing guaranteed."
    },
    {
      q: "How to book a call girl in Jaipur safely without advance payment?",
      a: "Safe booking method for Jaipur call girls: 1) Contact via WhatsApp +918058457070 2) Confirm profile & availability (real photos) 3) Agree on rates & meeting location (hotel, home, or our location) 4) NO advance payment needed 5) Meet & verify in person 6) Pay cash only after full satisfaction. We never ask for OTP, booking token, bank transfer, or UPI advance. This is how to avoid call girls scams in Jaipur."
    },
    {
      q: "Can I book call girls in Jaipur 24/7 with instant confirmation?",
      a: "Yes! Our verified call girls service in Jaipur operates 24 hours, 7 days a week with instant confirmation. Midnight bookings, early morning requests, same-hour service available across all areas including Malviya Nagar, C-Scheme, Tonk Road, Civil Lines. Quick response within 15 minutes guaranteed."
    },
    {
      q: "What payment methods do Jaipur call girls accept?",
      a: "Payment options for Jaipur call girls: PRIMARY: Cash payment after meeting (recommended for safety). SECONDARY: Debit/Credit card via POS machine (at hotel/location). UPI available on request (₹200 extra processing fee). NO advance payment, NO online transfer required. Pay only after you're fully satisfied with the service."
    },
    {
      q: "Is advance payment required to book call girls in Jaipur?",
      a: "NO advance payment required! This is the main difference between legitimate verified call girls service in Jaipur vs scammers. Real independent escorts never demand advance. If anyone asks for advance payment, booking token, deposit, or OTP – it's a scam. Always use cash-payment-after-meeting method."
    },

    // ===== VERIFICATION & SAFETY =====
    {
      q: "Are all profiles of Jaipur call girls verified and real?",
      a: "Yes – 100% verified profiles. Every independent escort in our Jaipur call girls database is personally verified with real photos, video call verification available, and genuine reviews from verified clients. We remove fake profiles within 24 hours. All girls have active WhatsApp with real numbers. Complete background check done."
    },
    {
      q: "How to verify if a Jaipur call girl profile is real before booking?",
      a: "Verify Jaipur call girls profiles: 1) Video call verification – Ask for live video 2) Real photo comparison – Compare profile with multiple angles 3) Genuine reviews – Check verified client feedback 4) WhatsApp confirmation – Direct chat with the girl 5) Meeting confirmation – Confirm exact time & location. Never trust text-only profiles. Real independent escorts in Jaipur always offer video verification."
    },
    {
      q: "How to identify and avoid call girls scams in Jaipur?",
      a: "Avoid Jaipur call girls scams by identifying red flags: ❌ Requesting advance payment ❌ Asking for OTP/bank details ❌ Using stolen photos ❌ No video call verification ❌ Constantly changing numbers ❌ Asking for deposit ❌ Vague about meeting location ✅ Real service: Cash after meeting, real photos, video verify, fixed rates, clear location, established contact."
    },
    {
      q: "Are there any fake call girls scams operating in Jaipur?",
      a: "Yes – common Jaipur call girls scams: Photo-fraud (using celebrity/stolen images), advance-payment fraud, meeting-location fraud, rate-cheating (quoting ₹1000 then demanding ₹5000), disappearance after payment. Protect yourself: Use verified platforms, cash payment only, video verification, confirmed location, established agencies."
    },

    // ===== AREAS & LOCATIONS =====
    {
      q: "Which areas in Jaipur have the best verified call girls availability?",
      a: "Top Jaipur areas for call girls service 2026: ✅ C-Scheme (highest profile girls) ✅ Malviya Nagar (college escorts) ✅ Vaishali Nagar (housewife companions) ✅ Mansarovar (premium service) ✅ Raja Park (models & air hostess) ✅ Civil Lines (mature escorts) ✅ Jagatpura (budget-friendly) ✅ MI Road (quick service) ✅ Tonk Road (24/7 availability) ✅ Lal Kothi (tourist area). All areas have outcall & incall service available."
    },
    {
      q: "Do call girls in Jaipur provide service in hotels?",
      a: "Yes – all verified call girls in Jaipur provide hotel service (outcall). We serve major hotels: Holiday Inn, Radisson, Crowne Plaza, JW Marriott, The Oberoi, Jai Mahal Palace, and all 3-5 star hotels. Discreet entry, private service, 24-hour availability. We also service Airbnb, private apartments, residential areas."
    },
    {
      q: "Can I book call girls for home visit in Jaipur?",
      a: "Yes – home visit (outcall) service available for verified Jaipur call girls. Safe service at your residential address (verified address required). All girls are discreet, professional, punctual. We provide: house-call service, independent escorts for private meetings, professional companions. Home service rates same as hotel service."
    },
    {
      q: "Are there incall locations for call girls service in Jaipur?",
      a: "Yes – premium incall service available at private secure locations across Jaipur. All incall locations are fully furnished, private, safe, and hygienic. Options: Private studios in Malviya Nagar, C-Scheme, Vaishali Nagar. Verified independent escorts maintain discreet locations. Incall rates: ₹1500-3000/hour (cheaper than outcall). Book via WhatsApp."
    },

    // ===== ESCORT TYPES & CATEGORIES =====
    {
      q: "What types of call girls are available in Jaipur?",
      a: "Jaipur call girls categories: 1) College girls – students aged 18-22, budget ₹1500-2500 2) Housewife escorts – experienced, mature aged 25-40, rates ₹2000-4000 3) Models/air hostess – premium, high-profile, ₹5000-10000 4) VIP independent escorts – elite service, ₹8000-20000 5) Foreign/Russian – limited, ₹15000-30000 6) Girlfriend experience – intimate companion, ₹3000-5000 7) Couple-friendly – for couples, special rates. Choose by preference."
    },
    {
      q: "Are independent high-profile call girls available in Jaipur?",
      a: "Yes – premium independent call girls in Jaipur include models, air hostess, college girls, and VIP companions. High-profile verified escorts available for elite clients. We specialize in upscale service with verified profiles, real photos, and discretion. Premium rates ₹5000-20000/hour for model-quality escorts."
    },
    {
      q: "Can I book college girl call girls in Jaipur?",
      a: "Yes – verified college girl escorts available in Jaipur. Young, educated, friendly college-going girls aged 18-22 offering companionship service. Budget-friendly rates ₹1500-2500/hour. Available for hotel, home, or private meet. Discrete, safe service. Confirm age verification & ID before booking."
    },
    {
      q: "Are mature/aunty call girls available in Jaipur?",
      a: "Yes – mature independent escorts in Jaipur aged 25-45 offering experienced service. Housewife companions, MILF escorts, experienced providers available. Rates ₹2000-4000/hour. Many clients prefer mature call girls for natural, comfortable experience without young-girl pressure. 24/7 availability."
    },

    // ===== SERVICES & SPECIALIZATION =====
    {
      q: "What services do verified call girls in Jaipur provide?",
      a: "Verified Jaipur call girls services: Companionship, dating experience, girlfriend experience (GFE), kissing, intimate service, massage with erotic touch, foreplay, multiple rounds, full night service, hotel service, home service, party accompaniment, event companion, travel companion, photography model, webcam service, video call service. All service details discussed & confirmed before meeting."
    },
    {
      q: "Do Jaipur call girls provide full night service?",
      a: "Yes – full night overnight service available. Jaipur call girls provide 8-12 hour service for ₹6000-12000 depending on profile. Complete privacy, multiple meetings, all services included. Hotel checkout time can be 11am next morning (no extra charge for 24-hour room). Book overnight service via WhatsApp +918058457070."
    },
    {
      q: "Are massage services available with call girls in Jaipur?",
      a: "Yes – massage service with erotic touch available from verified call girls in Jaipur. Professional massage combined with intimate service. Rates ₹2000-4000/hour. Girls trained in sensual massage techniques. Available at private locations, hotels, homes. Highly popular service, book in advance."
    },
    {
      q: "Do Jaipur call girls provide girlfriend experience (GFE)?",
      a: "Yes – girlfriend experience (GFE) is popular with verified Jaipur call girls. Intimate dating, kissing, cuddling, role-play, natural service without commercial feel. Premium GFE rates ₹3000-6000/hour with high-profile girls. Many call girls specialize in girlfriend experience for long-term companionship."
    },

    // ===== PRIVACY & CONFIDENTIALITY =====
    {
      q: "Is complete privacy guaranteed with Jaipur call girls service?",
      a: "Yes – 100% confidentiality & privacy guaranteed. Your booking information, personal details, meeting location, and preferences are never shared. We maintain strict confidentiality policy. All data encrypted, no records kept, no photos/videos shared. Discreet service with complete discretion. Your privacy is our priority."
    },
    {
      q: "Will my identity be disclosed when booking call girls in Jaipur?",
      a: "No – absolute identity protection. Jaipur call girls maintain client confidentiality. We don't share client phone numbers, names, addresses, or booking details with anyone. NDA (Non-Disclosure Agreement) applies. Professional discretion guaranteed. Safe, private, anonymous service."
    },
    {
      q: "Are call girls meetings discreet in Jaipur?",
      a: "Yes – completely discreet service. All Jaipur call girls meetings are private, confidential, and professional. No publicizing, no loud behavior, no phone calls during service. Girls are trained in discretion. Meeting locations are carefully selected for privacy (premium hotels, private studios). Discreet entry/exit arrangements."
    },

    // ===== BOOKING PROCESS =====
    {
      q: "What is the step-by-step process to book a Jaipur call girl?",
      a: "Jaipur call girls booking process: Step 1 – Contact via WhatsApp/Call +918058457070 Step 2 – Select profile from verified list Step 3 – Confirm availability & meeting time Step 4 – Choose meeting location (hotel/home/private) Step 5 – Agree on rates & duration Step 6 – Meet & verify authenticity Step 7 – Service begins Step 8 – Pay cash after service. Total time: 15 minutes confirmation to 1 hour full service."
    },
    {
      q: "How quickly can I get a call girl in Jaipur?",
      a: "Super-fast Jaipur call girls booking: Same-hour service available. Response time: 5-15 minutes. Girls can arrive within 30-60 minutes depending on location & traffic. Rush booking charges: +10% for same-hour confirmation. Plan ahead for faster service. Midnight & early morning bookings slightly delayed (45-90 min)."
    },
    {
      q: "Can I choose a specific call girl in Jaipur before booking?",
      a: "Yes – you can browse verified Jaipur call girls profiles and choose your preferred girl. Each profile shows: real photo, age, body type, rates, specialization. Video call with selected girl available before booking. If girl unavailable, we suggest similar profiles. Customized selection available: age preference, body type, services, area."
    },
    {
      q: "What information do I need to provide to book a call girl in Jaipur?",
      a: "Minimal information required for booking: Your preferred meeting time, location (hotel name & room no. / home address), duration required (30 min / 1-2 hrs / full night). Optional: Age preference, body type preference, service preference. We don't ask for personal ID, Aadhar, license – only WhatsApp confirmation. Completely anonymous booking possible."
    },

    // ===== SPECIAL OCCASIONS =====
    {
      q: "Can I book a call girl for a party or event in Jaipur?",
      a: "Yes – party & event companion service available. Jaipur call girls available for: Private parties, corporate events, bachelor parties, birthday celebrations, hotel functions. Professional companions, dressed well, well-behaved. Rates ₹3000-6000/hour + travel charges. Confidential, discreet service. Book minimum 2 hours in advance."
    },
    {
      q: "Are there couple-friendly call girls in Jaipur?",
      a: "Yes – couple-friendly verified call girls available in Jaipur. Service for couples: threesome, girlfriend experience, intimate companion. Specially trained girls comfortable with couple service. Rates ₹2500-5000/hour (discounted for couples). All participants satisfy guaranteed. Safe, professional, judgment-free service."
    },
    {
      q: "Can tourists book call girls in Jaipur easily?",
      a: "Yes – tourists welcome! Easy booking for foreign & domestic tourists. Jaipur call girls available at major hotels: Holiday Inn, Radisson, JW Marriott, etc. English-speaking girls available. No ID requirement. Fast service, flexible timing. Perfect for business travelers, vacation companions, tour buddies. Hotel room service available."
    },

    // ===== HEALTH & SAFETY =====
    {
      q: "Are health and safety standards maintained by Jaipur call girls?",
      a: "Yes – strict health & safety protocol: All girls vaccinated & tested. Hygienic practices maintained. Protection (condom) always used. Regular STD testing. Clean environments only. Safe service guaranteed. Girls trained in first-aid. Health certification available. Safe sex education provided. Your health & safety is priority."
    },
    {
      q: "What precautions should I take when meeting a Jaipur call girl?",
      a: "Safety precautions for meeting call girls in Jaipur: 1) Meet in safe location (hotel, secure venue) 2) Verify profile with video call 3) Check ID before service 4) Use protection 5) Keep emergency contact 6) Don't share personal details 7) Meet during daylight for first meeting 8) Take a friend's number 9) Use trusted platform only. Safe meeting = better experience."
    },

    // ===== SPECIAL REQUESTS =====
    {
      q: "What if I have specific requests or fantasies with Jaipur call girls?",
      a: "Special requests available! Jaipur call girls accommodate many preferences: Role-play scenarios, specific fetishes (within limits), fantasy fulfillment, particular body type, age group preference, language preference, customized experience. Discuss requests during WhatsApp confirmation. Some extreme requests may have additional charges. All requests handled professionally & confidentially."
    },
    {
      q: "Do call girls in Jaipur offer role-play and fantasy services?",
      a: "Yes – role-play & fantasy services popular with verified Jaipur call girls. Available scenarios: Housewife, teacher, nurse, stewardess, police officer, maid, student, girlfriend. Customizable role-play available. Professional acting, immersive experience. Rates ₹2500-5000/hour. Book specific fantasy during confirmation."
    },

    // ===== REPEAT CUSTOMER & LOYALTY =====
    {
      q: "Are repeat customer discounts available for Jaipur call girls?",
      a: "Yes – loyalty discounts for regular customers. Repeat booking with same girl: 10% discount on 2nd booking, 15% on 3rd, 20% on 4th+. Package deals: Book 5 hours get 1 hour free. Subscription plans: Monthly unlimited = ₹30000/month. VIP membership: 25% permanent discount + priority booking. Best rates for loyal clients."
    },
    {
      q: "Can I request the same call girl every time in Jaipur?",
      a: "Yes – same girl request available. If you have favorite from Jaipur call girls list, we try to confirm her for repeat bookings. Priority booking for regular clients. Reserved slot system: Book next slot in advance. Loyalty program: Regular customers get better rates & priority with same girl."
    },

    // ===== COMPARISON & ALTERNATIVES =====
    {
      q: "How do verified Jaipur call girls compare to other services?",
      a: "Verified Jaipur call girls advantages over fake services: Real profiles (not stolen photos), cash payment (not advance scam), experienced girls (not inexperienced), transparent rates (not hidden charges), 24/7 availability (not fake hours), quick confirmation (not disappearing), professional team (not one-person fraud), police-verified (not wanted). Choose legitimate service for best experience."
    },
    {
      q: "Why choose Jaipur Call Girls over other escort services?",
      a: "Choose us for: 100% verified profiles, cash-after-meeting policy, 24/7 instant booking, experienced independent escorts, transparent rates ₹1500-10000, all areas coverage, zero scam guarantee, professional team, discreet service, real photos, video verification, client testimonials, established since 2020. Best-rated escort service in Jaipur."
    },

    // ===== AGE & LEGALITY =====
    {
      q: "Are all Jaipur call girls verified to be 18+ years old?",
      a: "Yes – age verification mandatory. All girls in our Jaipur call girls database are 18 years or above. Government ID verification done during profile creation. Age guarantee in writing. Strict 18+ policy maintained. Zero tolerance for underaged service. Safe & legal service guaranteed."
    },
    {
      q: "Is it legal to book call girls in Jaipur?",
      a: "Booking call girls is legal in Jaipur if: Girl is 18+, consensual service, no force/coercion, cash payment, private meeting. Escort service is legal. What's illegal: Child exploitation, trafficking, forced sex work, public display. Our verified Jaipur call girls service is 100% legal, safe, ethical. No legal risk for clients."
    },

    // ===== CONTACT & SUPPORT =====
    {
      q: "How to contact Jaipur call girls service for booking?",
      a: "Contact methods for verified Jaipur call girls: WhatsApp: +918058457070 (fastest), Phone Call: +918058457070, Email: booking@escortjaipurall.com. Response time: 5-15 minutes. Available 24/7. Send profile preference, preferred time, location. Instant confirmation. Direct WhatsApp chat with selected girl after confirmation."
    },
    {
      q: "What if I'm not satisfied with the Jaipur call girl service?",
      a: "Satisfaction guaranteed! If not satisfied: Inform us immediately, alternative girl arranged, full refund option available (within service time), second free booking offered. We maintain 100% satisfaction guarantee. Professional complaint handling. Resolution within 24 hours. Your feedback helps us improve."
    },
  ], []);

  // ✅ MULTIPLE SCHEMA TYPES FOR AGGRESSIVE SEO
  const schemaMarkup = {
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    },
    localBusinessSchema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Jaipur Call Girls - Verified Escort Service",
      "description": "Verified high-profile independent call girls in Jaipur. 24/7 service, cash payment, all areas covered",
      "telephone": "+918058457070",
      "email": "booking@escortjaipurall.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302001",
        "addressCountry": "IN"
      },
      "areaServed": [
        "Malviya Nagar",
        "C-Scheme",
        "Vaishali Nagar",
        "Mansarovar",
        "Civil Lines",
        "Raja Park",
        "Tonk Road",
        "Jagatpura",
        "MI Road",
        "Lal Kothi"
      ],
      "availableLanguage": ["en", "hi"],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "serviceType": ["Escort Service", "Companion Service", "Dating Service"]
    },
    breadcrumbSchema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.escortjaipurall.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "FAQ",
          "item": "https://www.escortjaipurall.com/faq"
        }
      ]
    }
  };

  return (
    <>
      {/* ✅ AGGRESSIVE SCHEMA MARKUP - Multiple types */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup.faqSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup.localBusinessSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup.breadcrumbSchema) }}
        suppressHydrationWarning
      />

      <section className="relative min-h-screen py-20 bg-black overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-radial from-red-900/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 mt-20">
          {/* ✅ AGGRESSIVE SEO HEADER WITH KEYWORDS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-950/30 border border-red-900/50 backdrop-blur-sm mb-6"
            >
              <span className="text-sm text-gray-400 tracking-widest">FAQ GUIDE 2026</span>
            </motion.div>

            {/* ✅ H1 WITH AGGRESSIVE KEYWORDS */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-red-400 to-pink-400 bg-clip-text text-transparent">
              Jaipur Call Girls FAQ & Complete Booking Guide
            </h1>

            {/* ✅ KEYWORD-RICH DESCRIPTION */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-4"
            >
              Complete answers to all questions about verified independent call girls in Jaipur – rates ₹1500-10000, safe booking without advance, 24/7 service, all areas
            </motion.p>

            <motion.div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                'Call Girls Rates',
                'Safe Booking',
                'Verified Profiles',
                'No Scams',
                'Cash Payment',
                '24/7 Available',
                'All Areas',
                'Independent Escorts'
              ].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 transition">
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ✅ AGGRESSIVE FAQ ACCORDION */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 overflow-hidden hover:border-white/20 transition"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-all group"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-red-300 transition-colors pr-8 text-left">
                    {faq.q}
                  </h3>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className="text-2xl text-red-400 flex-shrink-0"
                  >
                    ▼
                  </motion.span>
                </button>

                <motion.div
                  id={`faq-answer-${index}`}
                  initial={false}
                  animate={{ height: openIndex === index ? "auto" : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 pt-2 border-t border-white/5">
                    <p className="text-gray-300 text-base leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* ✅ AGGRESSIVE CTA SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20 bg-gradient-to-r from-red-950/20 via-transparent to-red-950/20 rounded-3xl p-12 border border-white/5"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Book Verified Jaipur Call Girls?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Fast booking confirmed within 15 minutes. No advance payment needed. Cash payment after meeting. Available 24/7 across all Jaipur areas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/+918058457070?text=Hi%20I%20want%20to%20book%20a%20verified%20call%20girl%20in%20Jaipur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="px-10 py-5 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-green-600 to-green-500 shadow-lg shadow-green-600/30 hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="WhatsApp verified call girls in Jaipur"
                >
                  💬 WhatsApp Booking Now
                </motion.button>
              </a>

              <a href="tel:+918058457070">
                <motion.button
                  className="px-10 py-5 rounded-2xl font-bold text-lg text-white border-2 border-red-500 hover:bg-red-500/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Call verified call girls service in Jaipur"
                >
                  📞 Call Now +91 8058457070
                </motion.button>
              </a>
            </div>

            <p className="text-gray-400 text-sm mt-6">
              ✅ 100% Verified Profiles | ✅ No Advance Payment | ✅ Cash After Meeting | ✅ 24/7 Available
            </p>
          </motion.div>

          {/* ✅ KEYWORD-RICH FOOTER SECTION */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 grid md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Quick Booking</h3>
              <p className="text-gray-300">Contact verified call girls in Jaipur via WhatsApp. Instant confirmation, fast response within 15 minutes</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Safe Service</h3>
              <p className="text-gray-300">All Jaipur call girls are verified with real profiles. 100% confidential, no scams, cash payment after meeting</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Available Areas</h3>
              <p className="text-gray-300">Service in all Jaipur areas – Malviya Nagar, C-Scheme, Vaishali Nagar, Mansarovar, Civil Lines, Raja Park & more</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SEOFaq;