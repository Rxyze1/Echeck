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

  // Filter categories
  const filterCategories = [
    { label: 'All Girls', value: 'all', icon: '👸' },
    { label: 'Girlfriend', value: 'girlfriend', icon: '💕' },
    { label: 'Wild', value: 'wild', icon: '🔥' },
    { label: 'Innocent', value: 'innocent', icon: '😇' },
    { label: 'MILF', value: 'milf', icon: '👑' },
    { label: 'Model', value: 'model', icon: '💃' },
    { label: 'Kinky', value: 'kinky', icon: '😈' },
  ];

  // Filtered profiles
  const filteredProfiles = filter === 'all' 
    ? profiles 
    : profiles.filter(p => p.category === filter);

  // Floating elements
  const floatingElements = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: (i * 7) % 100,
      delay: i * 0.3,
      duration: 8 + (i % 6),
      scale: 0.6 + (i % 3) * 0.2,
    }));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="gallery" className="relative min-h-screen py-20 bg-black overflow-hidden">
      
      Floating elements
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((el) => (
          <motion.div
            key={`float-${el.id}`}
            className="absolute text-red-500/10"
            style={{
              left: `${el.left}%`,
              fontSize: `${28 * el.scale}px`,
              bottom: -50,
            }}
            animate={{
              y: [-50, -1000],
              x: [0, Math.sin(el.id) * 100, 0],
              rotate: [0, 360],
              opacity: [0, 0.5, 0],
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
      <div className="absolute inset-0 bg-gradient-radial from-red-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 mt-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-950/30 border border-red-900/50 backdrop-blur-sm mb-6"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              👸
            </motion.span>
            <span className="text-sm text-gray-400 tracking-widest">OUR HOT GIRLS</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
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
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Real photos • Verified profiles • <span className="text-red-400 font-semibold">100% satisfaction guarantee</span> 🔥
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-[2px] w-32 mx-auto mt-6 rounded-full bg-gradient-to-r from-transparent via-red-600 to-transparent"
          />
        </motion.div>

        {/* Filter Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterCategories.map((cat, index) => (
            <motion.button
              key={cat.value}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setFilter(cat.value)}
              className={`
                relative px-6 py-3 rounded-2xl font-medium overflow-hidden transition-all
                ${filter === cat.value ? 'text-white' : 'text-gray-400 hover:text-white'}
              `}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: filter === cat.value ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className={`absolute inset-0 rounded-2xl border-2 ${
                filter === cat.value ? 'border-transparent' : 'border-white/10'
              }`} />
              
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-lg">{cat.icon}</span>
                {cat.label}
              </span>
            </motion.button>
          ))}
        </motion.div> */}

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          {filteredProfiles.map((profile, index) => (
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
                className="relative h-[520px] rounded-3xl overflow-hidden bg-gradient-to-b from-black/50 to-black border-2 border-white/10"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Main image */}
                <div className="relative h-[340px] overflow-hidden">
                  <Image
                    src={profile.images[0]}
                    alt={profile.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-red-600/30 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.4 }}
                  />

                  {/* Photo count */}
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white text-sm font-medium flex items-center gap-1">
                      <span>📸</span> {profile.images.length}
                    </div>
                  </div>

                  {/* Age badge */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1.5 rounded-xl bg-red-600/80 backdrop-blur-md border border-red-500/50 text-white text-sm font-medium">
                      {profile.age} years
                    </div>
                  </div>

                  {/* Available badge */}
                  <div className="absolute bottom-4 left-4">
                    <motion.div
                      className="px-3 py-1.5 rounded-xl bg-green-600/80 backdrop-blur-md border border-green-500/50 text-white text-xs font-medium flex items-center gap-2"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                      Available Now
                    </motion.div>
                  </div>
                </div>

                {/* Card content */}
                <div className="relative p-6">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                    {profile.name}
                  </h3>
                  <p className="text-pink-400 text-sm mb-3">{profile.nameHindi}</p>

                  {/* Quick stats */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 rounded-lg bg-red-950/50 border border-red-900/50 text-red-300 text-xs">
                      {profile.height}
                    </span>
                    <span className="px-2 py-1 rounded-lg bg-red-950/50 border border-red-900/50 text-red-300 text-xs">
                      {profile.figure}
                    </span>
                    <span className="px-2 py-1 rounded-lg bg-red-950/50 border border-red-900/50 text-red-300 text-xs capitalize">
                      {profile.category}
                    </span>
                  </div>

                  {/* Description preview */}
                  <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                    {profile.description}
                  </p>

                  {/* View profile hint */}
                  <motion.div
                    className="text-red-400 font-medium text-sm flex items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredCard === profile.id ? 1 : 0,
                      y: hoveredCard === profile.id ? 0 : 10
                    }}
                  >
                    Click to view full profile
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    boxShadow: '0 0 30px rgba(220, 38, 38, 0.4)',
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>

              {/* Floating hearts on hover */}
              {hoveredCard === profile.id && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`heart-${i}`}
                      className="absolute text-2xl pointer-events-none"
                      style={{
                        left: `${25 + i * 25}%`,
                        bottom: 0,
                      }}
                      animate={{
                        y: [0, -100],
                        opacity: [0.8, 0],
                        scale: [1, 1.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      💖
                    </motion.div>
                  ))}
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block p-6 rounded-2xl bg-red-950/20 border border-red-900/30 backdrop-blur-sm">
            <p className="text-gray-400 text-sm">
              ⚠️ All girls are <span className="text-red-400 font-semibold">18+ verified</span> • 
              Photos are <span className="text-pink-400 font-semibold">100% real</span> • 
              Click on any profile to see more photos & details
            </p>
          </div>
        </motion.div>
      </div>

      {/* Profile Detail Modal */}
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

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
            >
              <div className="relative h-full w-full rounded-3xl bg-black border-2 border-red-900/30 overflow-hidden">
                
                {/* Close button */}
                <motion.button
                  onClick={() => setSelectedProfile(null)}
                  className="absolute top-6 right-6 z-20 p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-red-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                <div className="h-full overflow-y-auto">
                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    
                    {/* Left: Image Gallery */}
                    <div className="space-y-4">
                      {/* Main image */}
                      <div className="relative h-[500px] rounded-2xl overflow-hidden bg-black/50">
                        <Image
                          src={selectedProfile.images[selectedImageIndex]}
                          alt={selectedProfile.name}
                          fill
                          className="object-cover"
                        />
                        
                        {/* Navigation */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImageIndex((prev) => 
                              prev > 0 ? prev - 1 : selectedProfile.images.length - 1
                            );
                          }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-red-600 transition-colors"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-red-600 transition-colors"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>

                      {/* Thumbnails */}
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {selectedProfile.images.map((img, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => setSelectedImageIndex(idx)}
                            className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 ${
                              selectedImageIndex === idx ? 'border-red-500' : 'border-white/20'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Image src={img} alt={`Photo ${idx + 1}`} fill className="object-cover" />
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Right: Profile Details */}
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-4xl font-bold text-white mb-2">
                          {selectedProfile.name}
                        </h2>
                        <p className="text-2xl text-pink-400 mb-4">{selectedProfile.nameHindi}</p>
                        
                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className="px-4 py-2 rounded-xl bg-red-950/50 border border-red-900/50 text-red-300 font-medium">
                            {selectedProfile.age} years
                          </span>
                          <span className="px-4 py-2 rounded-xl bg-red-950/50 border border-red-900/50 text-red-300 font-medium">
                            {selectedProfile.height}
                          </span>
                          <span className="px-4 py-2 rounded-xl bg-red-950/50 border border-red-900/50 text-red-300 font-medium">
                            {selectedProfile.figure}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">About</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          {selectedProfile.description}
                        </p>
                        <p className="text-gray-500 text-sm">
                          Personality: <span className="text-pink-400">{selectedProfile.personality}</span>
                        </p>
                      </div>

                      {/* Sex Styles */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Sex Styles Preferred</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProfile.sexStyles.map((style, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600/20 to-pink-600/20 border border-red-500/30 text-red-300 font-medium"
                            >
                              {style}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Specialties */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Special Skills</h3>
                        <div className="space-y-2">
                          {selectedProfile.specialties.map((skill, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="text-red-500">🔥</span>
                              <span className="text-gray-300">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Availability */}
                      <div className="p-4 rounded-2xl bg-green-950/30 border border-green-900/50">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">✅</span>
                          <div>
                            <h4 className="text-white font-semibold">Availability</h4>
                            <p className="text-green-400">{selectedProfile.available}</p>
                          </div>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col gap-4 pt-4">
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=Hi! Mujhe ${selectedProfile.name} ko book karna hai`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <motion.button
                            className="w-full relative overflow-hidden px-8 py-4 rounded-2xl font-semibold text-white"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
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
                            className="w-full px-8 py-4 rounded-2xl font-semibold text-white border-2 border-red-500 hover:bg-red-500/10 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
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
    </section>
  );
};

export default Gallery;