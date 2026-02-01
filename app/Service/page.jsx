'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import ServicetextCard from '../components/MiniCompo/ServicetextCard';

const Page = () => {

  const whatsappNumber = '8058457070';
  const phoneNumber = '+91' + whatsappNumber;
  
  // States
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
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
      image: "/images/college-girls.jpg",
      features: [
        "Age: 18-24 years",
        "Fresh & Trendy personalities",
        "Great for parties & hangouts",
        "Modern & open-minded",
        "Fluent English communication"
      ],
      priceRange: "₹4,500 - ₹7,000",
      availability: "Evening & Night preferred"
    },
    {
      icon: "👩",
      title: "Housewife Escorts Jaipur",
      tagline: "Mature & Caring",
      description: "Sophisticated, sweet-spoken companions for stress relief & companionship.",
      areas: "Sodala, MI Road, Tonk Road, Civil Lines",
      image: "/images/housewife.jpg",
      features: [
        "Age: 25-35 years",
        "Mature & understanding nature",
        "Excellent conversation skills",
        "Homely & caring approach",
        "Perfect for relaxation & comfort"
      ],
      priceRange: "₹5000 - ₹10,000",
      availability: "Afternoon & Evening"
    },
    {
      icon: "✈️",
      title: "Model & Air Hostess Escorts",
      tagline: "High Profile & Elegant",
      description: "Classy, well‑presented companions for elite events, parties & premium time.",
      areas: "Jagatpura, Durgapura, Airport Area, Sanganer",
      image: "/images/models.jpg",
      features: [
        "Professional models & air hostesses",
        "Height: 5'5\" and above",
        "Elegant & sophisticated",
        "Perfect for corporate events",
        "International etiquette"
      ],
      priceRange: "₹8,000 - ₹12,000",
      availability: "Pre-booking recommended"
    },
    {
      icon: "🌍",
      title: "Russian / Foreign Escorts",
      tagline: "Exclusive & Unique",
      description: "Limited‑availability international profiles. Premium experience only.",
      areas: "Premium Jaipur hotels & selected locations",
      image: "/images/foreign.jpg",
      features: [
        "Russian, European & Asian companions",
        "Exotic & unique experience",
        "Highly educated & well-traveled",
        "Limited availability",
        "Premium service only"
      ],
      priceRange: "₹10,000 - ₹25,000",
      availability: "Advance booking required"
    },
    {
      icon: "👑",
      title: "VIP High Profile Escorts",
      tagline: "Ultra Premium & Discreet",
      description: "Elite companions for high‑end clientele. Utmost discretion guaranteed.",
      areas: "C-Scheme, Civil Lines, Lal Kothi, Bani Park",
      image: "/images/vip.jpg",
      features: [
        "Elite social status",
        "Business professionals & celebrities",
        "Maximum discretion & privacy",
        "High-class events & meetings",
        "Exceptional beauty & intelligence"
      ],
      priceRange: "₹10,000 - ₹20,000",
      availability: "24/7 with advance notice"
    },
  ], []);

  const vvipModels = useMemo(() => [
    {
      icon: "👑",
      title: "VVIP Diamond Elite",
      tagline: "Ultra Luxury",
      age: "21-28 Years",
      image: "/images/vvip-1.jpg",
      features: [
        "Exceptional beauty & sophistication",
        "Multi-lingual (English, Hindi, French)",
        "Elite education & worldly knowledge",
        "Perfect for high-profile events",
        "International travel companion"
      ],
      priceRange: "₹25,000 - ₹50,000+",
      availability: "72-hour advance booking",
      areas: "5-Star Hotels, Private Villas",
      badge: "MOST POPULAR"
    },
    {
      icon: "💫",
      title: "Celebrity Model Escorts",
      tagline: "Red Carpet Ready",
      age: "22-30 Years",
      image: "/images/vvip-2.jpg",
      features: [
        "Professional runway models",
        "Height: 5'7\" - 5'11\"",
        "Fashion week experience",
        "Elite social circle",
        "Perfect for galas & premieres"
      ],
      priceRange: "₹30,000 - ₹60,000+",
      availability: "1-week advance booking",
      areas: "Premium Locations Only",
      badge: "EXCLUSIVE"
    },
    {
      icon: "✨",
      title: "International VVIP",
      tagline: "Global Elite",
      age: "23-32 Years",
      image: "/images/vvip-3.jpg",
      features: [
        "European & Russian beauties",
        "Worldly & cultured personalities",
        "Business travel companions",
        "Fluent in multiple languages",
        "Highest discretion protocols"
      ],
      priceRange: "₹40,000 - ₹80,000+",
      availability: "2-week advance booking",
      areas: "International & Domestic",
      badge: "PREMIUM"
    },
    {
      icon: "🌟",
      title: "Luxury Lifestyle Companions",
      tagline: "Your Personal Muse",
      age: "24-29 Years",
      image: "/images/vvip-4.jpg",
      features: [
        "Personal shopper available",
        "Lifestyle consultant services",
        "Fine dining & wine connoisseur",
        "Art & culture enthusiast",
        "Extended companionship packages"
      ],
      priceRange: "₹35,000 - ₹70,000+",
      availability: "5-day advance booking",
      areas: "Luxury Hotels & Resorts",
      badge: "NEW"
    },
    {
      icon: "💎",
      title: "Diamond VIP Package",
      tagline: "Complete Experience",
      age: "22-28 Years",
      image: "/images/vvip-5.jpg",
      features: [
        "Weekend getaway companion",
        "Personal photographer included",
        "Luxury car service available",
        "Spa & wellness packages",
        "Customized experience planning"
      ],
      priceRange: "₹50,000 - ₹1,50,000+",
      availability: "10-day advance booking",
      areas: "Jaipur & Nearby Destinations",
      badge: "PACKAGE"
    },
    {
      icon: "🔥",
      title: "VIP Overnight Experience",
      tagline: "Extended Luxury",
      age: "21-30 Years",
      image: "/images/vvip-6.jpg",
      features: [
        "12-24 hour companionship",
        "Dinner date included",
        "Overnight stay available",
        "Breakfast & activities",
        "Complete girlfriend experience"
      ],
      priceRange: "₹45,000 - ₹90,000+",
      availability: "1-week advance booking",
      areas: "Premium Hotels & Villas",
      badge: "TRENDING"
    }
  ], []);

  const jaipurAreas = useMemo(() => ({
    "Central Jaipur": {
      icon: "🟣",
      areas: ["C-Scheme", "Civil Lines", "MI Road", "Ashok Nagar", "Bani Park", "Station Road", "Sindhi Camp", "Sansar Chandra Road", "Ajmer Road (Central)", "Shyam Nagar"]
    },
    "East Jaipur": {
      icon: "🟢",
      areas: ["Raja Park", "Adarsh Nagar", "Jawahar Nagar", "Tilak Nagar", "Malviya Nagar", "Jagatpura", "Pratap Nagar", "Durgapura", "Goner Road", "Ram Ganj", "Sanganeri Gate", "Transport Nagar"]
    },
    "West Jaipur": {
      icon: "🔵",
      areas: ["Vaishali Nagar", "Nirman Nagar", "Sodala", "Shyam Nagar", "Ajmer Road", "Heerapura", "Kamla Nehru Nagar", "Panchyawala", "Karni Vihar", "Queens Road"]
    },
    "South Jaipur": {
      icon: "🟡",
      areas: ["Mansarovar", "Mansarovar Extension", "Gopalpura", "Gopalpura Bypass", "Triveni Nagar", "Mahesh Nagar", "Kartarpura", "Muhana", "ISI Colony", "Shipra Path", "Patrakar Colony"]
    },
    "North Jaipur": {
      icon: "🔴",
      areas: ["Jhotwara", "Vidhyadhar Nagar", "Murlipura", "Ambabari", "Shastri Nagar", "Baniyawas", "Nindar Mod", "Harmada", "VKI Area", "Chandpol"]
    },
    "Old City (Walled City)": {
      icon: "🟤",
      areas: ["Johari Bazaar", "Bapu Bazaar", "Tripolia Bazaar", "Chandpole Bazaar", "Kishanpole Bazaar", "Ramganj Bazaar", "Subhash Chowk", "Choti Chaupar", "Badi Chaupar", "Galta Gate"]
    },
    "Newly Developed Areas": {
      icon: "🟠",
      areas: ["Jagatpura Extension", "Mahindra SEZ", "Ring Road Area", "Kalwar Road", "Sirsi Road", "Benad Road", "Jaisinghpura", "Hathoj", "Bad Ke Balaji", "Bhankrota", "Narayan Vihar"]
    }
  }), []);

  const premiumServices = useMemo(() => [
    { icon: "⭐", service: "A-Level Premium Experience", category: "5 Star Service" },
    { icon: "💃", service: "Entertainment & Performance", category: "Special Shows" },
    { icon: "🎭", service: "Role Play & Fantasy", category: "Custom Experience" },
    { icon: "💆", service: "Full Body Relaxation", category: "Massage Services" },
    { icon: "🍷", service: "Dinner Date Companion", category: "Social Events" },
    { icon: "🌙", service: "Overnight Stay", category: "Extended Booking" },
    { icon: "👫", service: "Couple Services", category: "Duo Experience" },
    { icon: "💕", service: "Girlfriend Experience (GFE)", category: "Premium Package" },
    { icon: "🎉", service: "Party Companion", category: "Events" },
    { icon: "✈️", service: "Travel Companion", category: "Outstation" },
    { icon: "🏨", service: "Hotel Visit", category: "Incall/Outcall" },
    { icon: "🌟", service: "Special Custom Requests", category: "Personalized" }
  ], []);

  const pricingPlans = useMemo(() => [
    { duration: "Quick Booking", price: "₹6000", time: "1 Hour" },
    { duration: "Standard", price: "₹11000+", time: "2 Hours" },
    { duration: "Full Night", price: "₹15000+", time: "12 Hours" },
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
    "❌ Send ₹500 for confirmation",
    "❌ Pay advance or cancel",
    "❌ OTP link for booking",
    "❌ Share Aadhaar/ID proof",
    "❌ Location changed after payment",
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
          content="Trusted Jaipur call girls & professional companionship service 2026 – high profile independent escorts, verified profiles, complete privacy, NO ADVANCE PAYMENT. 24/7 in Malviya Nagar, C-Scheme & all Jaipur areas." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/jaipur-call-girls" />

        {/* Open Graph */}
        <meta property="og:title" content="Jaipur Call Girls 2026 | #1 High Profile Escorts in Jaipur" />
        <meta property="og:description" content="Verified independent escorts in Jaipur. 100% discreet, no advance payment. Book now!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/jaipur-call-girls" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      {/* ===================================================================
        MAIN SECTION
      =================================================================== */}
      <section id="services" className="relative min-h-screen py-20  bg-black overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/10 to-black pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-radial from-red-900/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 mt-24">
          
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
              Tired of fake profiles, brokers & advance‑payment scams? We're Jaipur's **most trusted** independent escort service — real girls, clear communication, discreet meetings.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="h-1 w-40 mx-auto rounded-full bg-gradient-to-r from-transparent via-red-500 to-transparent mt-8"
            />
          </motion.div>

          <motion.div>
            {/* VVIP MODELS GRID */}
            < ServicetextCard />
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
              <h2 className="text-4xl font-bold text-white mb-4">⭐ Why We&apos;re #1 in 2026</h2>
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
                  className="group relative cursor-pointer"
                >
                  <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-red-950/30 to-pink-950/20 border-2 border-white/10 p-8 h-full flex flex-col backdrop-blur-md transition-all duration-500 group-hover:border-red-500/50">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-5">
                        <span className="text-5xl">{cat.icon}</span>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/40 border border-white/20 text-gray-200 uppercase tracking-wider">
                          {cat.tagline}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-300">{cat.title}</h3>
                      <p className="text-gray-300 text-base mb-6">{cat.description}</p>

                      {/* Features */}
                      <div className="mb-6 space-y-2">
                        {cat.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <span className="text-red-400 mt-1">✓</span>
                            <span className="text-gray-400 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price & Availability */}
                      <div className="mt-auto space-y-3">
                        <div className="pt-4 border-t border-white/10">
                          <span className="text-xs font-semibold text-green-400 block mb-1 uppercase tracking-wider">Price Range</span>
                          <p className="text-white text-lg font-bold">{cat.priceRange}</p>
                        </div>

                        <div className="pt-2">
                          <span className="text-xs font-semibold text-blue-400 block mb-1 uppercase tracking-wider">Availability</span>
                          <p className="text-gray-300 text-sm">{cat.availability}</p>
                        </div>

                        <div className="pt-2 border-t border-white/10">
                          <span className="text-xs font-semibold text-purple-400 block mb-1 uppercase tracking-wider">Service Areas</span>
                          <p className="text-gray-300 text-sm">{cat.areas}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ===================================================================
            VVIP DIAMOND MODELS SECTION
          =================================================================== */}
          <motion.div className="mb-24">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-yellow-900/40 to-amber-900/40 border border-yellow-600/50 backdrop-blur-sm mb-6"
              >
                <span className="text-2xl">💎</span>
                <span className="text-sm font-bold text-yellow-300 tracking-widest">ULTRA EXCLUSIVE</span>
              </motion.div>

              <h2 className="text-5xl font-extrabold text-white mb-4">
                <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                  VVIP Diamond Models
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                The pinnacle of luxury companionship. Elite selection for distinguished guests only.
              </p>
              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                  Limited Availability
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Advance Pre-Booking Required
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vvipModels.map((model, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -12, scale: 1.03 }}
                  className="group relative cursor-pointer"
                >
                  <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-900/30 via-amber-900/20 to-orange-900/20 border-2 border-yellow-600/40 backdrop-blur-lg transition-all duration-500 group-hover:border-yellow-500/80 group-hover:shadow-2xl group-hover:shadow-yellow-600/20">
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-100%] group-hover:translate-x-[100%] duration-1000" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-600 to-amber-600 text-white text-xs font-bold rounded-full shadow-lg">
                        {model.badge}
                      </span>
                    </div>

                    <div className="relative z-10 p-8 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-5">
                        <span className="text-5xl drop-shadow-lg">{model.icon}</span>
                        <div className="text-right">
                          <span className="block text-xs font-bold text-yellow-300 mb-1">AGE</span>
                          <span className="text-sm text-gray-300">{model.age}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                        {model.title}
                      </h3>
                      <p className="text-yellow-400 text-sm font-semibold mb-6 uppercase tracking-wider">
                        {model.tagline}
                      </p>

                      {/* Features */}
                      <div className="mb-6 space-y-2 flex-grow">
                        {model.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <span className="text-yellow-400 mt-0.5 text-sm">✦</span>
                            <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price & Details */}
                      <div className="mt-auto space-y-4 pt-4 border-t border-yellow-600/30">
                        {/* Price */}
                        <div className="bg-gradient-to-r from-yellow-900/40 to-amber-900/30 rounded-xl p-4 border border-yellow-600/30">
                          <span className="text-xs font-bold text-yellow-300 block mb-1 uppercase tracking-wider">
                            Price Range
                          </span>
                          <p className="text-white text-xl font-extrabold">{model.priceRange}</p>
                        </div>

                        {/* Availability */}
                        <div>
                          <span className="text-xs font-bold text-green-400 block mb-1 uppercase tracking-wider">
                            Booking Required
                          </span>
                          <p className="text-gray-300 text-sm flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            {model.availability}
                          </p>
                        </div>

                        {/* Areas */}
                        <div>
                          <span className="text-xs font-bold text-purple-400 block mb-1 uppercase tracking-wider">
                            Service Areas
                          </span>
                          <p className="text-gray-300 text-sm">{model.areas}</p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.a
                        href={`https://wa.me/${whatsappNumber}?text=Hello!%20I%20want%20to%20book%20${encodeURIComponent(model.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg transition-all text-center"
                      >
                        Book Now
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* VVIP Info Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 max-w-4xl mx-auto"
            >
              <div className="rounded-3xl bg-gradient-to-r from-yellow-900/30 via-amber-900/20 to-orange-900/30 border-2 border-yellow-600/50 p-8 backdrop-blur-lg">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="text-6xl">🏆</div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Premium VVIP Experience Guarantee
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      All VVIP models undergo extensive verification • Professional behavior guaranteed • 
                      Complete privacy & discretion • Personal assistant available 24/7 • 
                      Custom packages available for extended bookings • 100% satisfaction guaranteed
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-yellow-600/30">
                  {[
                    { icon: "✅", text: "Background Verified" },
                    { icon: "🔒", text: "Extreme Privacy" },
                    { icon: "💳", text: "Flexible Payment" },
                    { icon: "🌍", text: "Travel Available" }
                  ].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <p className="text-gray-300 text-xs font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Important Note */}
            <div className="mt-8 text-center">
              <p className="text-yellow-400 text-sm font-semibold mb-2">
                ⚠️ VVIP Services Require Advanced Booking
              </p>
              <p className="text-gray-500 text-xs max-w-2xl mx-auto">
                Due to high demand and limited availability, all VVIP bookings must be made in advance. 
                Only for serious & verified clients. Contact us for availability.
              </p>
            </div>
          </motion.div>

          {/* PREMIUM SERVICES AVAILABLE */}
          <motion.div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">💫 Premium Services Available</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Customized experiences tailored to your preferences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {premiumServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="rounded-2xl bg-gradient-to-br from-purple-950/30 to-pink-950/20 border-2 border-purple-900/30 p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-4xl">{service.icon}</span>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-sm">{service.service}</h4>
                        <span className="text-purple-400 text-xs">{service.category}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block bg-gradient-to-r from-red-950/40 to-pink-950/40 border border-red-900/50 rounded-2xl p-6 backdrop-blur-sm">
                <p className="text-yellow-300 text-lg font-bold mb-2">
                  ✣ ✤ ✥ ✦ IMPORTANT NOTICE ✦ ✥ ✤ ✣
                </p>
                <p className="text-gray-300 text-sm max-w-3xl">
                  Time wasters and bargainers please excuse. We respect your safety and privacy 
                  and expect the same from you. All services are for consenting adults 18+ only. 
                  Mutual respect and discretion are our priorities.
                </p>
              </div>
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
              * Prices may vary slightly during peak hours (10 PM – 2 AM) • VVIP services have premium pricing
            </p>
          </motion.div>

          {/* SERVICE AREAS - EXPANDED */}
          <motion.div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                🏙️ ALL URBAN AREAS / LOCALITIES OF JAIPUR
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Complete coverage across all zones of Jaipur • 24/7 availability in most areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(jaipurAreas).map(([zone, data], idx) => (
                <motion.div
                  key={zone}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-3xl bg-gradient-to-br from-gray-900/50 to-black border-2 border-gray-800/50 p-8 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{data.icon}</span>
                    <h3 className="text-2xl font-bold text-white">{zone}</h3>
                  </div>

                  <div className="space-y-2">
                    {data.areas.map((area, aIdx) => (
                      <motion.div
                        key={aIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (idx * 0.1) + (aIdx * 0.03) }}
                        className="flex items-center gap-2 text-gray-300 text-sm py-2 px-3 rounded-lg bg-black/30 hover:bg-red-950/20 transition-all"
                      >
                        <span className="text-red-400">📍</span>
                        <span>{area}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="inline-block rounded-2xl bg-gradient-to-r from-red-950/40 to-pink-950/40 border border-red-900/50 backdrop-blur-sm p-6">
                <p className="text-white text-lg font-semibold mb-2">
                  🚗 Fast Delivery Across All Zones
                </p>
                <p className="text-gray-400 text-sm max-w-2xl">
                  Average arrival time: 30-45 minutes from confirmation • 
                  Same-day booking available for most areas • 
                  Contact us to check immediate availability in your location
                </p>
              </div>
            </motion.div>
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
              <p className="text-xl text-gray-300 mb-4">
                Verified • Discreet • 24/7 • Cash After Meeting
              </p>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                Contact us now via WhatsApp or Call for instant booking confirmation
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
                      Call Now: {whatsappNumber}
                    </span>
                  </motion.button>
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-red-900/30">
                <p className="text-sm text-gray-400 mb-3">
                  📱 Available on WhatsApp 24/7 • 📞 Direct Call Support • 
                  🔒 100% Confidential • ✅ Verified Profiles Only
                </p>
                <p className="text-xs text-gray-500">
                  © 2026 Jaipur Call Girls Services | All Rights Reserved | 18+ Only • 
                  Professional Companionship Services • Last Updated: January 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );

};

export default Page;