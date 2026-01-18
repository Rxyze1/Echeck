'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
// import dynamic from 'next/dynamic';

// Lazy-load heavy background for performance
// const FloatingBackground = dynamic(
//   () => import('@/components/FloatingBackground'), 
//   { ssr: false }
// );

const Service = () => {
  const whatsappNumber = '8306433904';
  const phoneNumber = '+91' + whatsappNumber;
  
  // Reduced Motion Preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e, MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // ===================================================================
  // DATA
  // ===================================================================
  
  const serviceCategories = useMemo(() => [
    {
      icon: "🎓",
      title: "College Call Girls (18+)",
      tagline: "Young & Energetic",
      description: "Young, modern, energetic companions popular among tourists & young professionals.",
      areas: "Raja Park, Mansarovar, C-Scheme, Malviya Nagar",
    },
    {
      icon: "👩",
      title: "Housewife Escorts Jaipur",
      tagline: "Mature & Caring",
      description: "Sophisticated, sweet-spoken companions for stress relief & companionship.",
      areas: "Sodala, MI Road, Tonk Road, Civil Lines",
    },
    {
      icon: "✈️",
      title: "Model & Air Hostess Escorts",
      tagline: "High Profile & Elegant",
      description: "Classy, well‑presented companions for elite events, parties & premium time.",
      areas: "Jagatpura, Durgapura, Airport Area, Sanganer",
    },
    {
      icon: "🌍",
      title: "Russian / Foreign Escorts",
      tagline: "Exclusive & Unique",
      description: "Limited‑availability international profiles. Premium experience only.",
      areas: "Premium Jaipur hotels & selected locations",
    },
    {
      icon: "👑",
      title: "VIP High Profile Escorts",
      tagline: "Ultra Premium & Discreet",
      description: "Elite companions for high‑end clientele. Utmost discretion guaranteed.",
      areas: "C-Scheme, Civil Lines, Lal Kothi, Bani Park",
    },
  ], []);

  const serviceAreas = useMemo(() => [
    "C-Scheme", "Malviya Nagar", "Vaishali Nagar", "Mansarovar", 
    "Raja Park", "Jagatpura", "Durgapura", "Civil Lines", 
    "MI Road", "Tonk Road", "Bani Park", "Lal Kothi", 
    "Gopalpura", "Jhotwara", "Sanganer", "Pratap Nagar"
  ], []);

  const pricingPlans = useMemo(() => [
    { duration: "Quick Booking", price: "₹1500", time: "1 Hour" },
    { duration: "Standard", price: "₹2000–₹3000", time: "2 Hours" },
    { duration: "Full Night", price: "₹5000–₹10000", time: "12 Hours" },
  ], []);

  const howToBook = useMemo(() => [
    {
      step: "1",
      title: "Contact Us",
      desc: "WhatsApp/Call with: your area, time, duration & preferred category.",
      icon: "📱"
    },
    {
      step: "2",
      title: "Get Options",
      desc: "We share REAL verified profiles matching your request.",
      icon: "✅"
    },
    {
      step: "3",
      title: "Confirm & Meet",
      desc: "Confirm booking. Cash after meeting — NO ADVANCE!",
      icon: "🔒"
    },
    {
      step: "4",
      title: "Enjoy Discreetly",
      desc: "Girl arrives on time. Complete privacy guaranteed.",
      icon: "🔥"
    }
  ], []);

  const scamWarnings = useMemo(() => [
    "❌ “Send ₹500 for confirmation”",
    "❌ “Pay advance or cancel”",
    "❌ “OTP link for booking”",
    "❌ “Share Aadhaar/ID proof”",
    "❌ “Location changed after payment”",
  ], []);

  const faqs = useMemo(() => [
    {
      q: "Is the service private & secure?",
      a: "✅ 100% discreet. No data leaks. Confidentiality is our top priority."
    },
    {
      q: "Do you serve tourists?",
      a: "✅ Absolutely! Tourists & travelers are most welcome."
    },
    {
      q: "Are profiles verified?",
      a: "✅ Every profile is personally verified (ID, photos, health checks)."
    },
    {
      q: "Best area to book in Jaipur?",
      a: "C‑Scheme, Malviya Nagar, Vaishali Nagar, Civil Lines & Mansarovar are most active."
    },
    {
      q: "Is 24/7 booking available?",
      a: "✅ Yes! Subject to availability & location."
    },
  ], []);

  // ===================================================================
  // ANIMATION VARIANTS
  // ===================================================================
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 12 }
    }
  };

  return (
    <>
      {/* ===================================================================
        SEO & STRUCTURED DATA
      =================================================================== */}
      <Head>
        <title>
          Jaipur Call Girls 2026 | #1 High Profile Independent Escorts in Jaipur | Verified & Discreet Service
        </title>
        <meta 
          name="description" 
          content="Trusted Jaipur call girls & professional companionship service 2026 – high profile independent escorts, verified profiles, complete privacy, NO ADVANCE PAYMENT. 24/7 in Malviya Nagar, C-Scheme & all Jaipur areas. WhatsApp +91-8306433904 now." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/jaipur-call-girls" />

        {/* Open Graph */}
        <meta property="og:title" content="Jaipur Call Girls 2026 | #1 High Profile Escorts in Jaipur" />
        <meta property="og:description" content="Verified independent escorts in Jaipur. 100% discreet, no advance payment. Book now!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/jaipur-call-girls" />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Jaipur Call Girls 2026",
            "description": "Verified high‑profile independent escort service in Jaipur. 24/7 availability, complete discretion, cash‑after‑meeting policy.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Jaipur Professional Companionship Services",
              "telephone": "+918306433904",
              "areaServed": "Jaipur, Rajasthan",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "postalCode": "302001",
                "addressCountry": "IN"
              }
            },
            "serviceType": "Professional Companionship",
            "areaServed": serviceAreas,
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "1500",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "INR",
                "minPrice": 1500,
                "maxPrice": 10000,
                "priceRange": "₹1500 - ₹10000"
              }
            }
          })}
        </script>
      </Head>

      {/* ===================================================================
        MAIN SECTION
      =================================================================== */}
      <section id="services" className="relative min-h-screen py-20 bg-black overflow-hidden">
        {/* Floating Background */}
        {/* <FloatingBackground prefersReducedMotion={prefersReducedMotion} /> */}

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/10 to-black pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-radial from-red-900/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          
          {/* HERO SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-red-950/40 to-pink-950/40 border border-red-900/50 backdrop-blur-sm mb-8 shadow-lg shadow-red-900/20"
            >
              <span className="text-xl">✨</span>
              <span className="text-sm font-semibold text-gray-300 tracking-widest">JAIPUR 2026</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-red-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Jaipur Call Girls 2026 <br/>
              <span className="text-current">#1 High Profile Independent Escorts</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 font-medium"
            >
              Verified Profiles • 100% Discreet • NO ADVANCE PAYMENT • 24/7 Service
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-gray-400 max-w-3xl mx-auto"
            >
              Tired of fake profiles, brokers & advance‑payment scams? We’re Jaipur’s **most trusted** independent escort service — real girls, clear communication, discreet meetings.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="h-1 w-40 mx-auto rounded-full bg-gradient-to-r from-transparent via-red-500 to-transparent mt-8"
            />
          </motion.div>

          {/* WHY WE'RE #1 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">⭐ Why We’re #1 in 2026</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Real profiles. Clear communication. Discreet meetings. No nonsense.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "👤", title: "Independent Profiles", desc: "Our companions are <strong>independent</strong> — no broker control. Better behavior, more privacy, clear communication." },
                { icon: "✅", title: "Verified Profiles", desc: "All profiles are <strong>regularly updated</strong>. No stock photos, no outdated listings." },
                { icon: "💰", title: "Cash After Meeting", desc: "NO ADVANCE PAYMENT! Pay cash after meeting — stress‑free & safe." },
                { icon: "⚡", title: "24/7 Fast Response", desc: "We reply within minutes & confirm availability instantly." },
                { icon: "🛡️", title: "100% Privacy", desc: "Your details never leave our system. Complete discretion guaranteed." },
                { icon: "📍", title: "Citywide Coverage", desc: "Service across <strong>all major Jaipur areas</strong>." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="p-7 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-red-500/50 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <span className="text-4xl text-red-400">{item.icon}</span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed" 
                         dangerouslySetInnerHTML={{ __html: item.desc }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SERVICE CATEGORIES */}
          <motion.div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">🌟 Service Categories</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Choose your perfect companion
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((cat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -12, scale: 1.04 }}
                  className="group relative"
                >
                  <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${cat.gradient} border-2 border-white/10 p-8 h-full flex flex-col backdrop-blur-md transition-all duration-500`}>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-5">
                        <span className="text-5xl">{cat.icon}</span>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/40 border border-white/20 text-gray-200 uppercase tracking-wider">
                          {cat.tagline}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-300">{cat.title}</h3>
                      <p className="text-gray-300 text-base mb-6 flex-grow">{cat.description}</p>

                      <div className="mt-auto pt-4 border-t border-white/10">
                        <span className="text-xs font-semibold text-blue-400 block mb-1 uppercase tracking-wider">SERVICE AREAS</span>
                        <p className="text-gray-300 text-sm">{cat.areas}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* PRICING */}
          <motion.div className="mb-24 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">💰 Jaipur Call Girls Rates (2026)</h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
              Pricing depends on duration, location & category. <strong>No hidden charges!</strong>
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {pricingPlans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="rounded-2xl bg-gradient-to-br from-black/80 to-black border-2 border-red-900/30 p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{plan.duration}</h3>
                  <div className="text-3xl font-extrabold text-red-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.time}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-500 mt-6 text-sm">
              * Prices may vary slightly during peak hours (10 PM – 2 AM).
            </p>
          </motion.div>

          {/* SERVICE AREAS */}
          <motion.div className="mb-24">
            <h2 className="text-3xl font-bold text-center text-white mb-8">📍 Service Across Jaipur</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-red-950/30 border border-red-900/50 rounded-full text-gray-300 text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>

          {/* HOW TO BOOK */}
          <motion.div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">📲 How to Book (4 Simple Steps)</h2>
              <p className="text-gray-400 text-lg">No forms. No advance. Just direct booking.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howToBook.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative group"
                >
                  <div className="rounded-3xl bg-gradient-to-b from-black/80 to-black border-2 border-red-900/30 p-8 text-center h-full">
                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-pink-600 flex items-center justify-center font-bold text-white">
                      {step.step}
                    </div>
                    
                    <motion.div 
                      className="text-6xl mb-6 flex justify-center"
                      animate={prefersReducedMotion ? {} : { scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                    >
                      {step.icon}
                    </motion.div>
                    
                    <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                    <p className="text-gray-300 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SCAM WARNINGS */}
          <motion.div className="mb-24 bg-red-950/20 border-2 border-red-900/50 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-center text-white mb-6">⚠️ Avoid These Scams!</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {scamWarnings.map((scam, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 bg-black/40 p-4 rounded-xl"
                >
                  <span className="text-2xl">❌</span>
                  <p className="text-gray-300">{scam}</p>
                </div>
              ))}
            </div>
            <p className="text-green-400 text-center mt-6 font-medium">
              ✅ We NEVER ask for advance payment or personal documents!
            </p>
          </motion.div>

          {/* FAQ */}
          <motion.div className="mb-24">
            <h2 className="text-4xl font-bold text-center text-white mb-12">❓ Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-black/80 to-black border border-white/10"
                >
                  <h3 className="text-xl font-bold text-red-300 mb-2">{item.q}</h3>
                  <p className="text-gray-300">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FINAL CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="rounded-3xl bg-gradient-to-br from-red-950/40 to-pink-950/20 border-2 border-red-900/50 backdrop-blur-sm p-12">
              <motion.div 
                className="text-7xl mb-8"
                animate={prefersReducedMotion ? {} : { scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✨
              </motion.div>

              <h2 className="text-4xl font-bold text-white mb-6">Ready for a Premium Experience?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Verified • Discreet • 24/7 • Cash After Meeting
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello!%20I%20want%20to%20book%20a%20Jaipur%20call%20girl.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="px-12 py-6 rounded-2xl font-bold text-xl text-white relative overflow-hidden shadow-2xl shadow-green-600/30 min-w-[280px]"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      <span className="text-3xl">💬</span>
                      WhatsApp Now
                    </span>
                  </motion.button>
                </a>

                <a href={`tel:${phoneNumber}`}>
                  <motion.button
                    className="px-12 py-6 rounded-2xl font-bold text-xl text-white border-2 border-red-500 hover:bg-red-600/20 transition-all shadow-2xl shadow-red-600/20 min-w-[280px]"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center justify-center gap-4">
                      <span className="text-3xl">📞</span>
                      Call Now
                    </span>
                  </motion.button>
                </a>
              </div>

              <p className="mt-8 text-sm text-gray-500">
                © 2026 Jaipur Call Girls | All Rights Reserved | 18+ Only • Last Updated: January 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Service;