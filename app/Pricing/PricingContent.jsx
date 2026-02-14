'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SocialProofNotifications from '../components/SocialProofNotifications';
import SummerLeavesEffect from '../components/SummerLeavesEffect';

const PricingContent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const whatsappNumber = '8058457070'; // Change to real number
  const phoneNumber = '+91' + whatsappNumber;

  // Horny Escort Packages - Jaipur Full Service
  const pricingPlans = [
    {
      id: 1,
      name: "Regular Horny Sex",
      nameHindi: "नॉर्मल सेक्स पैकेज",
      price: "₹6000",
      duration: "/ hour",
      icon: "🍆💦",
      popular: false,
      gradient: "from-pink-600 to-rose-600",
      tagline: "Basic wild sex to satisfy your daily urge",
      features: [
        { text: "Full horny blowjob (with deep throat)", emoji: "👅" },
        { text: "Missionary + Cowgirl riding hard", emoji: "🐮" },
        { text: "Doggy style deep pounding", emoji: "🐕" },
        { text: "Cum on body/face (COB/COF)", emoji: "💦" },
        { text: "Condom mandatory + quick 69 tease", emoji: "69" },
      ],
      notIncluded: [
        "No anal, no raw",
        "No extra shots without extra payment"
      ]
    },
    {
      id: 2,
      name: "Premium Wild Sex",
      nameHindi: "प्रीमियम चुदाई पैकेज",
      price: "₹10000",
      duration: "/ hour",
      icon: "🔥🍑",
      popular: true,
      gradient: "from-red-600 to-pink-600",
      badge: "Most Demanded",
      tagline: "Super horny non-stop fucking with extra pleasure",
      features: [
        { text: "Deep throat blowjob + ball sucking", emoji: "👄" },
        { text: "All positions: Reverse cowgirl, spooning, standing fuck", emoji: "🔄" },
        { text: "Intense doggy + hair pulling", emoji: "💥" },
        { text: "Multiple orgasms + squirting attempt", emoji: "💦💦" },
        { text: "Erotic body to body massage + 69 full", emoji: "🫂" },
        { text: "Cum wherever you want (inside with condom)", emoji: "🎯" },
      ],
      notIncluded: [
        "Anal extra charges apply",
        "Overnight not included"
      ]
    },
    {
      id: 3,
      name: "VIP Ultimate Sex",
      nameHindi: "वीआईपी अनलिमिटेड चुदाई",
      price: "Let's Talk",
      duration: "/ session",
      icon: "👑🍆",
      popular: false,
      gradient: "from-purple-600 to-pink-600",
      badge: "Elite & Wild",
      tagline: "No limits filthy experience – total satisfaction",
      features: [
        { text: "Unlimited shots (2–4 rounds)", emoji: "♾️" },
        { text: "Anal sex (if girl comfortable)", emoji: "🍑🔥" },
        { text: "Dirty talk + roleplay (teacher/student, boss, etc.)", emoji: "🎭" },
        { text: "All wild positions + Kamasutra style", emoji: "📖" },
        { text: "Full body worship + golden shower option", emoji: "👅💛" },
        { text: "Overnight / full day / weekend fuck possible", emoji: "🌙" },
        { text: "Raw (with test reports) on special request", emoji: "⚠️" },
        { text: "Cum inside + creampie fantasy", emoji: "💉" },
      ],
      notIncluded: []
    },
    {
      id: 4,
      name: "Custom Horny Plan",
      nameHindi: "कस्टम सेक्स प्लान",
      price: "Custom",
      duration: "/ your fantasy",
      icon: "😈💞",
      popular: false,
      gradient: "from-fuchsia-600 to-pink-600",
      tagline: "Your darkest & horniest desire – we make it real",
      features: [
        { text: "Any fetish/kink you crave", emoji: "🖤" },
        { text: "Group/duo with another hot girl", emoji: "👭" },
        { text: "Long term fuck buddy arrangement", emoji: "📅" },
        { text: "Travel companion with non-stop sex", emoji: "✈️🍆" },
        { text: "Special requests (BDSM light, toys, etc.)", emoji: "⛓️" },
      ],
      notIncluded: [
        "Price depends on your wild demands"
      ]
    },
  ];

  // Floating cum/drool emojis background (more horny feel)
  const floatingElements = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: (i * 6) % 100,
      delay: i * 0.4,
      duration: 7 + (i % 6),
      scale: 0.6 + (i % 4) * 0.3,
      type: i % 3 === 0 ? '💦' : i % 2 === 0 ? '🍆' : '🔥',
    }));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2 
      } 
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: 'spring', 
        stiffness: 100,
        damping: 15 
      } 
    },
  };

  return (
    <section id="pricing" className="relative min-h-screen py-20 bg-black overflow-hidden" >
      <SummerLeavesEffect />

      <SocialProofNotifications />
      
      {/* Floating horny elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((el) => (
          <motion.div
            key={`float-${el.id}`}
            className="absolute text-red-500/20"
            style={{ 
              left: `${el.left}%`, 
              fontSize: `${24 * el.scale}px`, 
              bottom: -60 
            }}
            animate={{
              y: [-60, -1100],
              x: [0, Math.sin(el.id) * 120, 0],
              rotate: [0, 720],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: el.delay,
            }}
          >
            {el.type}
          </motion.div>
        ))}
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-red-900/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 mt-20">
        
        {/* Header - Very explicit */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-red-950/40 border-2 border-red-800/60 backdrop-blur-sm mb-8"
          >
            <motion.span 
              className="text-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              😈
            </motion.span>
            <span className="text-base font-bold text-red-300 tracking-widest">
              JAIPUR ESCORT SERVICES
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
            style={{
              background: 'linear-gradient(135deg, #ff0044 0%, #ff3366 50%, #ff0066 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Horny Sex Escort Packages
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed"
          >
            Jaipur ki sabse <span className="text-red-500 font-bold">hot & wild call girls</span> ready hain aapko non-stop fuck karne ke liye! 💦🍆
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-sm text-gray-500"
          >
            All girls verified • 100% privacy • Full horny satisfaction guaranteed 😈
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="h-[2px] w-32 mx-auto mt-8 rounded-full bg-gradient-to-r from-transparent via-red-600 to-transparent"
          />
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(plan.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`relative group ${
                plan.popular ? 'lg:scale-105' : ''
              }`}
            >
              <motion.div
                className="relative h-full rounded-3xl overflow-hidden bg-black/90 border-2 border-red-900/30"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute top-6 right-6 z-20">
                    <motion.div
                      className={`px-4 py-2 rounded-full bg-gradient-to-r ${plan.gradient} text-white text-xs font-bold shadow-2xl border border-white/20`}
                      animate={{ 
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          '0 0 20px rgba(220, 38, 38, 0.5)',
                          '0 0 40px rgba(220, 38, 38, 0.8)',
                          '0 0 20px rgba(220, 38, 38, 0.5)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {plan.badge}
                    </motion.div>
                  </div>
                )}

                {/* Gradient Background Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                  style={{
                    boxShadow: '0 0 50px rgba(220, 38, 38, 0.6), inset 0 0 50px rgba(220, 38, 38, 0.1)',
                  }}
                />

                <div className="relative p-8">
                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-6 text-center"
                    animate={{
                      scale: hoveredCard === plan.id ? [1, 1.15, 1] : 1,
                      rotate: hoveredCard === plan.id ? [0, 5, -5, 0] : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {plan.icon}
                  </motion.div>

                  {/* Plan Names */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 text-center group-hover:text-red-400 transition-colors">
                      {plan.name}
                    </h3>
                    <p className="text-pink-400 text-center text-sm font-semibold tracking-wide">
                      {plan.nameHindi}
                    </p>
                  </div>

                  {/* Tagline */}
                  <p className="text-center text-gray-400 italic mb-6 text-base leading-relaxed px-2">
                    {plan.tagline}
                  </p>

                  {/* Divider */}
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-600/30 to-transparent mb-6" />

                  {/* Price */}
                  <div className="text-center mb-8">
                    <motion.span 
                      className={`text-5xl font-extrabold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent block mb-1`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {plan.price}
                    </motion.span>
                    <span className="text-gray-500 text-base">{plan.duration}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((f, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-start gap-3 group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-xl flex-shrink-0 mt-0.5">{f.emoji}</span>
                        <span className="text-gray-300 text-sm leading-relaxed group-hover/item:text-white transition-colors">
                          {f.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Not Included */}
                  {plan.notIncluded?.length > 0 && (
                    <>
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-4" />
                      <div className="space-y-2 mb-6">
                        {plan.notIncluded.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="text-red-600/70 text-sm mt-0.5">✕</span>
                            <span className="text-gray-600 text-xs leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* CTA Buttons */}
                  <div className="space-y-3 mt-8">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hi! Mujhe ${plan.name} package chahiye, details batao 😈`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <motion.button
                        className={`w-full relative overflow-hidden py-4 px-6 rounded-2xl font-bold text-base text-white`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient}`} />
                        
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          initial={{ x: '-100%' }}
                          animate={{ x: hoveredCard === plan.id ? '200%' : '-100%' }}
                          transition={{ duration: 0.8 }}
                        />

                        <span className="relative flex items-center justify-center gap-2">
                          WhatsApp pe Horny Baat Karo 💬🔥
                        </span>
                      </motion.button>
                    </a>

                    <a href={`tel:${phoneNumber}`} className="block">
                      <motion.button
                        className="w-full py-3.5 px-6 rounded-2xl border-2 border-red-600/50 text-white hover:border-red-500 hover:bg-red-900/20 transition-all font-semibold text-sm"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Abhi Call Karo 📞🍆
                      </motion.button>
                    </a>
                  </div>
                </div>

                {/* Floating particles on hover */}
                {hoveredCard === plan.id && (
                  <>
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={`particle-${i}`}
                        className="absolute text-2xl pointer-events-none"
                        style={{
                          left: `${20 + i * 20}%`,
                          bottom: 0,
                        }}
                        animate={{
                          y: [0, -150],
                          opacity: [1, 0],
                          scale: [1, 1.5],
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      >
                        💦
                      </motion.div>
                    ))}
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Warning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-3xl bg-gradient-to-br from-red-950/20 to-pink-950/20 border-2 border-red-900/30 backdrop-blur-sm p-8 md:p-10">
            <div className="text-center space-y-4">
              <motion.div
                className="text-4xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚠️
              </motion.div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-red-500 font-bold">Important:</span> Yeh pure adult sexual service hai. Safe sex, respect aur discretion compulsory hai.
              </p>
              
              <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
              
              <p className="text-gray-500 text-sm">
                Only 18+ serious clients contact karen. No timepass.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
    </section>
  );
};

export default PricingContent;