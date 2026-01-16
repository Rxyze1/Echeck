'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Gallery = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const whatsappNumber = '1234567890';
  const phoneNumber = '+91' + whatsappNumber;

  // 10 Indian Girls Profiles with detailed info
  const profiles = [
    {
      id: 1,
      name: "Priya Sharma",
      nameHindi: "प्रिया शर्मा",
      age: 23,
      location: "Jaipur",
      height: "5'5\"",
      figure: "34-28-36",
      category: "girlfriend",
      sexStyles: ["Missionary", "Cowgirl", "Doggy", "69", "Blowjob"],
      specialties: ["Deep throat", "Multiple positions", "Romantic GFE"],
      description: "Sweet aur sexy college graduate jo tumhe genuine girlfriend experience degi. Bahut romantic aur passionate hai. First-timers ke liye perfect choice!",
      personality: "Bubbly, friendly, talkative",
      available: "24/7",
      images: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
      ]
    },
    {
      id: 2,
      name: "Neha Patel",
      nameHindi: "नेहा पटेल",
      age: 25,
      location: "Jaipur",
      height: "5'6\"",
      figure: "36-30-38",
      category: "wild",
      sexStyles: ["Reverse Cowgirl", "Standing", "Rough Doggy", "Anal (extra)", "Deepthroat"],
      specialties: ["Wild & rough sex", "Dirty talk", "Role play", "BDSM light"],
      description: "Bohot wild aur adventurous girl! Agar rough aur intense sex chahiye toh ye perfect hai. No limits attitude aur full energy!",
      personality: "Bold, dominant, experimental",
      available: "Evening & Night",
      images: [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800",
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800",
        "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800",
      ]
    },
    {
      id: 3,
      name: "Anjali Singh",
      nameHindi: "अंजलि सिंह",
      age: 22,
      location: "Jaipur",
      height: "5'4\"",
      figure: "32-26-34",
      category: "innocent",
      sexStyles: ["Slow & romantic", "Missionary", "Side position", "Soft BJ", "Cuddles"],
      specialties: ["Virgin fantasy", "Innocent roleplay", "First time experience"],
      description: "Bohot innocent aur shy type ki ladki hai. Agar tum virgin fantasy ya innocent girl experience chahte ho toh perfect! Dheere dheere responsive banti hai.",
      personality: "Shy, submissive, sweet",
      available: "Daytime preferred",
      images: [
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
        "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?w=800",
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800",
      ]
    },
    {
      id: 4,
      name: "Kavya Reddy",
      nameHindi: "काव्या रेड्डी",
      age: 26,
      location: "Jaipur",
      height: "5'7\"",
      figure: "36-28-36",
      category: "milf",
      sexStyles: ["All positions", "Threesome", "Lesbian show", "Squirting", "Multiple rounds"],
      specialties: ["Experienced & skilled", "Teaches positions", "Stamina queen"],
      description: "Mature aur bohot experienced hai. Sab kuch sikhayegi tumhe! Perfect body aur amazing skills. Multiple rounds mein expert hai.",
      personality: "Confident, experienced, seductive",
      available: "Flexible timing",
      images: [
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800",
        "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
      ]
    },
    {
      id: 5,
      name: "Riya Kapoor",
      nameHindi: "रिया कपूर",
      age: 24,
      location: "Jaipur",
      height: "5'5\"",
      figure: "34-26-36",
      category: "model",
      sexStyles: ["Sensual", "Erotic massage", "Striptease", "Lap dance", "Passionate sex"],
      specialties: ["Professional model", "Photo shoots", "High class events"],
      description: "Professional model hai toh bohot photogenic aur hot hai! High class events ke liye bhi available. Sex bhi bohot passionate aur sensual karti hai.",
      personality: "Classy, elegant, sensual",
      available: "By appointment",
      images: [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800",
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800",
      ]
    },
    {
      id: 6,
      name: "Simran Kaur",
      nameHindi: "सिमरन कौर",
      age: 21,
      location: "Jaipur",
      height: "5'3\"",
      figure: "32-24-34",
      category: "petite",
      sexStyles: ["Tight & petite", "All holes", "Rough handling", "Spanking", "Choking safe"],
      specialties: ["Small & tight body", "Flexible", "Submissive"],
      description: "Chhoti aur cute hai but sex mein bohot wild! Body tight hai toh feeling alag level ki hai. Rough treatment ko enjoy karti hai.",
      personality: "Cute, playful, submissive",
      available: "Evening onwards",
      images: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
        "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800",
      ]
    },
    {
      id: 7,
      name: "Tanvi Desai",
      nameHindi: "तन्वी देसाई",
      age: 27,
      location: "Jaipur",
      height: "5'6\"",
      figure: "38-30-40",
      category: "busty",
      sexStyles: ["Titty fuck", "Boob play", "Doggy (loves it)", "Cowgirl", "Oral both ways"],
      specialties: ["Big natural boobs", "Boob worship", "Lactation play"],
      description: "Bohot badi aur natural boobs hain! Agar tum boob lover ho toh perfect choice. Titty fuck ka maza hi alag hai iske saath!",
      personality: "Friendly, open-minded, fun",
      available: "Most days",
      images: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800",
      ]
    },
    {
      id: 8,
      name: "Isha Verma",
      nameHindi: "ईशा वर्मा",
      age: 23,
      location: "Jaipur",
      height: "5'5\"",
      figure: "34-28-38",
      category: "kinky",
      sexStyles: ["BDSM", "Bondage", "Roleplay", "Fetish friendly", "Toys"],
      specialties: ["Kink expert", "Dom/Sub", "Fantasy fulfillment"],
      description: "Bohot kinky aur experimental! Tumhari sab fantasies fulfill karegi - BDSM, roleplay, toys sab. Open minded aur judgement free!",
      personality: "Adventurous, kinky, non-judgmental",
      available: "Pre-booking required",
      images: [
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
        "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?w=800",
      ]
    },
    {
      id: 9,
      name: "Divya Malhotra",
      nameHindi: "दिव्या मल्होत्रा",
      age: 25,
      location: "Jaipur",
      height: "5'4\"",
      figure: "34-26-36",
      category: "party",
      sexStyles: ["Party girl", "Group fun", "Drunk sex", "Public teasing", "Spontaneous"],
      specialties: ["Party companion", "Social events", "Fun personality"],
      description: "Party girl hai toh events aur parties mein sath degi. Bohot fun aur energetic! After party sex bhi mind-blowing hai!",
      personality: "Outgoing, fun, energetic",
      available: "Weekends mainly",
      images: [
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
        "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800",
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800",
      ]
    },
    {
      id: 10,
      name: "Pooja Nair",
      nameHindi: "पूजा नायर",
      age: 24,
      location: "Jaipur",
      height: "5'6\"",
      figure: "36-28-38",
      category: "pornstar",
      sexStyles: ["All hardcore", "Anal expert", "Deepthroat pro", "Squirting", "Double penetration"],
      specialties: ["Pornstar experience", "No limits", "Professional performer"],
      description: "Iska experience pornstar level ka hai! Koi bhi position, koi bhi style - sab perfectly karti hai. Agar ultimate experience chahiye toh book karo!",
      personality: "Professional, skilled, no-limits",
      available: "Premium booking",
      images: [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800",
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
        "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800",
      ]
    },
  ];

  // Filtered profiles
  const filteredProfiles = filter === 'all' 
    ? profiles 
    : profiles.filter(p => p.category === filter);

  // Floating elements
  const floatingElements = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: (i * 8.5) % 100,
      delay: i * 0.4,
      duration: 10 + (i % 6),
      scale: 0.5 + (i % 3) * 0.15,
    }));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 120, damping: 18 }
    }
  };

  return (
    <section id="gallery" className="relative min-h-screen py-12 sm:py-16 md:py-20 bg-black overflow-hidden">
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((el) => (
          <motion.div
            key={`float-${el.id}`}
            className="absolute text-red-500/10"
            style={{
              left: `${el.left}%`,
              fontSize: `${24 * el.scale}px`,
              bottom: -50,
            }}
            animate={{
              y: [-50, -800],
              x: [0, Math.sin(el.id) * 80, 0],
              rotate: [0, 360],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: el.delay,
            }}
          >
            💖
          </motion.div>
        ))}
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        
        {/* Section Header - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-red-950/30 border border-red-900/50 backdrop-blur-sm mb-4 sm:mb-6"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-lg sm:text-xl"
            >
              👸
            </motion.span>
            <span className="text-xs sm:text-sm text-gray-400 tracking-widest">OUR HOT GIRLS</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-4"
            style={{
              background: 'linear-gradient(135deg, #fff 0%, #ff0000 50%, #ff6b6b 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            Jaipur Ki Sabse Hot Girls
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4"
          >
            Real photos • Verified profiles • <span className="text-red-400 font-semibold">100% satisfaction</span> 🔥
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="h-[2px] w-24 sm:w-32 mx-auto mt-4 sm:mt-6 rounded-full bg-gradient-to-r from-transparent via-red-600 to-transparent"
          />
        </motion.div>

        {/* Gallery Grid - Fully Responsive */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16"
        >
          {filteredProfiles.map((profile) => (
            <motion.div
              key={profile.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(profile.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => {
                setSelectedProfile(profile);
                setSelectedImageIndex(0);
              }}
              className="relative group cursor-pointer"
            >
              <motion.div
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-black/50 to-black border-2 border-white/10"
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Main image - Responsive aspect ratio */}
                <div className="relative aspect-[3/4] sm:aspect-[3/4.2] overflow-hidden">
                  <Image
                    src={profile.images[0]}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={profile.id <= 4}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-red-600/30 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.4 }}
                  />

                  {/* Photo count */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <div className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium flex items-center gap-1">
                      <span>📸</span> 
                      <span className="hidden xs:inline">{profile.images.length}</span>
                    </div>
                  </div>

                  {/* Age badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <div className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-red-600/80 backdrop-blur-md border border-red-500/50 text-white text-xs sm:text-sm font-medium">
                      {profile.age}y
                    </div>
                  </div>

                  {/* Available badge */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <motion.div
                      className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-green-600/80 backdrop-blur-md border border-green-500/50 text-white text-[10px] sm:text-xs font-medium flex items-center gap-1.5 sm:gap-2"
                      animate={{ scale: [1, 1.03, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-300 animate-pulse" />
                      <span className="hidden xs:inline">Available</span>
                      <span className="xs:hidden">✓</span>
                    </motion.div>
                  </div>
                </div>

                {/* Card content - Responsive padding */}
                <div className="relative p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors truncate">
                    {profile.name}
                  </h3>
                  <p className="text-pink-400 text-xs sm:text-sm mb-2 sm:mb-3 truncate">{profile.nameHindi}</p>

                  {/* Quick stats - Scrollable on mobile */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <span className="px-2 py-0.5 sm:py-1 rounded-lg bg-red-950/50 border border-red-900/50 text-red-300 text-[10px] sm:text-xs whitespace-nowrap">
                      {profile.height}
                    </span>
                    <span className="px-2 py-0.5 sm:py-1 rounded-lg bg-red-950/50 border border-red-900/50 text-red-300 text-[10px] sm:text-xs whitespace-nowrap">
                      {profile.figure}
                    </span>
                    <span className="px-2 py-0.5 sm:py-1 rounded-lg bg-red-950/50 border border-red-900/50 text-red-300 text-[10px] sm:text-xs capitalize whitespace-nowrap">
                      {profile.category}
                    </span>
                  </div>

                  {/* Description preview */}
                  <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 mb-2 sm:mb-3">
                    {profile.description}
                  </p>

                  {/* View profile hint */}
                  <motion.div
                    className="text-red-400 font-medium text-xs sm:text-sm flex items-center gap-1 sm:gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredCard === profile.id ? 1 : 0,
                      y: hoveredCard === profile.id ? 0 : 10
                    }}
                  >
                    <span className="hidden sm:inline">Click to view</span>
                    <span className="sm:hidden">Tap to view</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    boxShadow: '0 0 30px rgba(220, 38, 38, 0.4)',
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom info - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-block p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-red-950/20 border border-red-900/30 backdrop-blur-sm">
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              ⚠️ All girls are <span className="text-red-400 font-semibold">18+ verified</span> • 
              Photos are <span className="text-pink-400 font-semibold">100% real</span> • 
              <span className="block sm:inline mt-1 sm:mt-0"> Click any profile for details</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Profile Detail Modal - Mobile Optimized */}
      <AnimatePresence>
        {selectedProfile && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProfile(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50"
            />

            {/* Modal - Full screen on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-0 sm:inset-4 md:inset-8 lg:inset-12 xl:inset-20 z-50 flex items-center justify-center p-0 sm:p-4"
            >
              <div className="relative w-full h-full max-w-7xl rounded-none sm:rounded-2xl md:rounded-3xl bg-black border-0 sm:border-2 border-red-900/30 overflow-hidden flex flex-col">
                
                {/* Close button */}
                <motion.button
                  onClick={() => setSelectedProfile(null)}
                  className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 p-2 sm:p-3 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white hover:bg-red-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Scrollable content */}
                <div className="h-full overflow-y-auto overscroll-contain">
                  <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
                    
                    {/* Left: Image Gallery */}
                    <div className="space-y-3 sm:space-y-4">
                      {/* Main image */}
                      <div className="relative aspect-[3/4] sm:h-[400px] md:h-[500px] lg:h-[550px] rounded-xl sm:rounded-2xl overflow-hidden bg-black/50">
                        <Image
                          src={selectedProfile.images[selectedImageIndex]}
                          alt={selectedProfile.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                          priority
                        />
                        
                        {/* Navigation */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImageIndex((prev) => 
                              prev > 0 ? prev - 1 : selectedProfile.images.length - 1
                            );
                          }}
                          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-red-600 transition-colors active:scale-95"
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImageIndex((prev) => 
                              (prev + 1) % selectedProfile.images.length
                            );
                          }}
                          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-red-600 transition-colors active:scale-95"
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Image counter */}
                        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium">
                          {selectedImageIndex + 1} / {selectedProfile.images.length}
                        </div>
                      </div>

                      {/* Thumbnails - Scrollable */}
                      <div className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
                        {selectedProfile.images.map((img, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => setSelectedImageIndex(idx)}
                            className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden border-2 snap-start ${
                              selectedImageIndex === idx ? 'border-red-500 ring-2 ring-red-500/50' : 'border-white/20'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Image src={img} alt={`Photo ${idx + 1}`} fill sizes="80px" className="object-cover" />
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Right: Profile Details */}
                    <div className="space-y-4 sm:space-y-5 md:space-y-6">
                      <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                          {selectedProfile.name}
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl text-pink-400 mb-3 sm:mb-4">{selectedProfile.nameHindi}</p>
                        
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-red-950/50 border border-red-900/50 text-red-300 text-xs sm:text-sm font-medium">
                            {selectedProfile.age} years
                          </span>
                          <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-red-950/50 border border-red-900/50 text-red-300 text-xs sm:text-sm font-medium">
                            {selectedProfile.height}
                          </span>
                          <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-red-950/50 border border-red-900/50 text-red-300 text-xs sm:text-sm font-medium">
                            {selectedProfile.figure}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">About</h3>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4">
                          {selectedProfile.description}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Personality: <span className="text-pink-400">{selectedProfile.personality}</span>
                        </p>
                      </div>

                      {/* Sex Styles */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Sex Styles</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProfile.sexStyles.map((style, i) => (
                            <span
                              key={i}
                              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-red-600/20 to-pink-600/20 border border-red-500/30 text-red-300 text-xs sm:text-sm font-medium"
                            >
                              {style}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Specialties */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Special Skills</h3>
                        <div className="space-y-2">
                          {selectedProfile.specialties.map((skill, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="text-red-500 text-sm sm:text-base">🔥</span>
                              <span className="text-gray-300 text-xs sm:text-sm">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Availability */}
                      <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-green-950/30 border border-green-900/50">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-xl sm:text-2xl">✅</span>
                          <div>
                            <h4 className="text-white font-semibold text-sm sm:text-base">Availability</h4>
                            <p className="text-green-400 text-xs sm:text-sm">{selectedProfile.available}</p>
                          </div>
                        </div>
                      </div>

                      {/* CTA Buttons - Sticky on mobile */}
                      <div className="flex flex-col gap-3 sm:gap-4 pt-4 sticky bottom-0 bg-black/90 backdrop-blur-sm pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=Hi! Mujhe ${selectedProfile.name} ko book karna hai`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <motion.button
                            className="w-full relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-white text-sm sm:text-base"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500" />
                            <span className="relative flex items-center justify-center gap-2">
                              <span className="text-xl">💬</span>
                              Book on WhatsApp
                            </span>
                          </motion.button>
                        </a>

                        <a href={`tel:${phoneNumber}`}>
                          <motion.button
                            className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-white text-sm sm:text-base border-2 border-red-500 hover:bg-red-500/10 transition-all"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="flex items-center justify-center gap-2">
                              <span className="text-xl">📞</span>
                              Call Now
                            </span>
                          </motion.button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Gallery;