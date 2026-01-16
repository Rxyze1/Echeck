'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Gallery = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // 10 Dummy Profiles with multiple images and videos
  const profiles = [
    {
      id: 1,
      name: "Sakura Tanaka",
      age: 23,
      skills: ["Conversation", "Dancing", "Cooking", "Gaming"],
      tags: ["Sweet", "Energetic", "Anime Lover"],
      description: "A vibrant and cheerful companion who loves anime, gaming, and trying new cuisines. Always ready to make your day brighter!",
      images: [
        { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800", public_id: "img1" },
        { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800", public_id: "img2" },
        { url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800", public_id: "img3" },
        { url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800", public_id: "img4" },
      ],
      videos: [
        { url: "https://player.vimeo.com/video/76979871", public_id: "vid1" },
      ]
    },
    {
      id: 2,
      name: "Yuki Matsumoto",
      age: 25,
      skills: ["Photography", "Art", "Yoga", "Travel"],
      tags: ["Artistic", "Calm", "Nature Lover"],
      description: "An artistic soul who finds beauty in everything. Perfect companion for museum visits, nature walks, and deep conversations.",
      images: [
        { url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800", public_id: "img1" },
        { url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800", public_id: "img2" },
        { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800", public_id: "img3" },
        { url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800", public_id: "img4" },
        { url: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800", public_id: "img5" },
      ],
      videos: [
        { url: "https://player.vimeo.com/video/76979871", public_id: "vid1" },
      ]
    },
    {
      id: 3,
      name: "Aiko Nakamura",
      age: 22,
      skills: ["Music", "Singing", "Fashion", "Shopping"],
      tags: ["Fashionista", "Singer", "Trendy"],
      description: "A music enthusiast with a passion for fashion. Love concerts, karaoke nights, and exploring the latest trends together!",
      images: [
        { url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800", public_id: "img1" },
        { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800", public_id: "img2" },
        { url: "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?w=800", public_id: "img3" },
        { url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800", public_id: "img4" },
      ],
      videos: [
        { url: "https://player.vimeo.com/video/76979871", public_id: "vid1" },
      ]
    },
    {
      id: 4,
      name: "Hana Kimura",
      age: 24,
      skills: ["Fitness", "Sports", "Nutrition", "Motivation"],
      tags: ["Athletic", "Healthy", "Motivational"],
      description: "A fitness enthusiast who believes in a healthy lifestyle. Perfect gym buddy and motivational companion for your wellness journey!",
      images: [
        { url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800", public_id: "img1" },
        { url: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800", public_id: "img2" },
        { url: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800", public_id: "img3" },
        { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800", public_id: "img4" },
        { url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800", public_id: "img5" },
      ],
      videos: [
        { url: "https://player.vimeo.com/video/76979871", public_id: "vid1" },
      ]
    },
    {
      id: 5,
      name: "Mio Takahashi",
      age: 26,
      skills: ["Business", "Wine Tasting", "Fine Dining", "Languages"],
      tags: ["Sophisticated", "Elegant", "Professional"],
      description: "An elegant and sophisticated companion for business events, fine dining, and cultural experiences. Fluent in multiple languages.",
      images: [
        { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800", public_id: "img1" },
        { url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800", public_id: "img2" },
        { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800", public_id: "img3" },
        { url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800", public_id: "img4" },
      ],
      videos: [
        { url: "https://player.vimeo.com/video/76979871", public_id: "vid1" },
      ]
    },
    {
      id: 6,
      name: "Rina Kobayashi",
      age: 21,
      skills: ["Cosplay", "Gaming", "Streaming", "Tech"],
      tags: ["Gamer Girl", "Tech Savvy", "Cute"],
      description: "A tech-savvy gamer who loves cosplay and streaming. Perfect companion for gaming sessions, conventions, and tech events!",
      images: [
        { url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800", public_id: "img1" },
        { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800", public_id: "img2" },
        { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800", public_id: "img3" },
        { url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800", public_id: "img4" },
        { url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800", public_id: "img5" },
        { url: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800", public_id: "img6" },
      ],
      videos: [
        { url: "https://player.vimeo.com/video/76979871", public_id: "vid1" },
      ]
    },
    {
      id: 7,
      name: "Emiko Sato",
      age: 27,
      skills: ["Literature", "Writing", "Tea Ceremony", "Philosophy"],
      tags: ["Intellectual", "Traditional", "Gentle"],
      description: "A gentle soul with a love for literature and traditional arts. Perfect for quiet cafes, bookstores, and meaningful conversations.",
      images: [
        { url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800", public_id: "img1" },
        { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800", public_id: "img2" },
        { url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800", public_id: "img3" },
        { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800", public_id: "img4" },
      ],
      videos: [
        { url: "https://player.vimeo.com/video/76979871", public_id: "vid1" },
      ]
    },
    {
      id: 8,
      name: "Nana Yamamoto",
      age: 23,
      skills: ["Baking", "Desserts", "Cafe Hopping", "Cute Culture"],
      tags: ["Sweet", "Baker", "Kawaii"],
      description: "A sweet baker who creates delicious treats and loves exploring cute cafes. Perfect for dessert dates and cozy afternoons!",
      images: [
        { url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800", public_id: "img1" },
        { url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800", public_id: "img2" },
        { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800", public_id: "img3" },
        { url: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800", public_id: "img4" },
        { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800", public_id: "img5" },
      ],
      videos: [
        { url: "https://player.vimeo.com/video/76979871", public_id: "vid1" },
      ]
    },
    {
      id: 9,
      name: "Kana Watanabe",
      age: 25,
      skills: ["Dancing", "Nightlife", "Events", "Social"],
      tags: ["Party Girl", "Social", "Exciting"],
      description: "An outgoing and energetic companion who loves nightlife, parties, and social events. Your perfect plus-one for any occasion!",
      images: [
        { url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800", public_id: "img1" },
        { url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800", public_id: "img2" },
        { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800", public_id: "img3" },
        { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800", public_id: "img4" },
      ],
      videos: [
        { url: "https://player.vimeo.com/video/76979871", public_id: "vid1" },
      ]
    },
    {
      id: 10,
      name: "Mei Fujiwara",
      age: 24,
      skills: ["Movies", "Cinema", "Reviews", "Film Making"],
      tags: ["Cinephile", "Creative", "Artistic"],
      description: "A cinema lover who appreciates all genres of film. Perfect companion for movie marathons, film festivals, and deep film discussions!",
      images: [
        { url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800", public_id: "img1" },
        { url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800", public_id: "img2" },
        { url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800", public_id: "img3" },
        { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800", public_id: "img4" },
        { url: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800", public_id: "img5" },
      ],
      videos: [
        { url: "https://player.vimeo.com/video/76979871", public_id: "vid1" },
      ]
    },
  ];

  // Smoke particles for background
  const smokeParticles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: 60 + (i * 15),
      left: (i * 7) % 100,
      top: (i * 8) % 100,
      duration: 15 + (i % 8),
      delay: i * 0.4,
    }));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="gallery" className="relative min-h-screen py-20 bg-black overflow-hidden">
      
      {/* Background smoke particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {smokeParticles.map((particle) => (
          <motion.div
            key={`smoke-${particle.id}`}
            className="absolute rounded-full bg-red-600/5 blur-3xl"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-red-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-950/30 border border-red-900/50 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm text-gray-400 tracking-widest">EXCLUSIVE COLLECTION</span>
          </motion.div>

          {/* Main title */}
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
            Our Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Discover your perfect companion from our exclusive selection
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-[2px] w-32 mx-auto rounded-full bg-gradient-to-r from-transparent via-red-600 to-transparent"
          />
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(profile.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group cursor-pointer"
              onClick={() => {
                setSelectedProfile(profile);
                setSelectedMediaIndex(0);
              }}
            >
              {/* Card container */}
              <motion.div
                className="relative h-[450px] rounded-3xl overflow-hidden bg-gradient-to-b from-black/50 to-black border-2 border-white/10"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Main image */}
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={profile.images[0].url}
                    alt={profile.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-red-600/30 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.4 }}
                  />

                  {/* Image count badge */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white text-sm font-medium flex items-center gap-1">
                      <span>📸</span>
                      {profile.images.length}
                    </div>
                    {profile.videos.length > 0 && (
                      <div className="px-3 py-1.5 rounded-xl bg-red-600/80 backdrop-blur-md border border-red-500/50 text-white text-sm font-medium flex items-center gap-1">
                        <span>🎥</span>
                        {profile.videos.length}
                      </div>
                    )}
                  </div>

                  {/* Age badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                    {profile.age} years
                  </div>
                </div>

                {/* Card content */}
                <div className="relative p-6">
                  {/* Name */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {profile.name}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {profile.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-red-950/50 border border-red-900/50 text-red-300 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description preview */}
                  <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                    {profile.description}
                  </p>

                  {/* View profile button */}
                  <motion.div
                    className="flex items-center justify-between text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredCard === profile.id ? 1 : 0,
                      y: hoveredCard === profile.id ? 0 : 10
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-red-400 font-medium flex items-center gap-2">
                      View Profile
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </span>
                  </motion.div>
                </div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    boxShadow: '0 0 30px rgba(220, 38, 38, 0.4), inset 0 0 30px rgba(220, 38, 38, 0.1)',
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>

              {/* Floating particles on hover */}
              {hoveredCard === profile.id && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute w-2 h-2 bg-red-500 rounded-full blur-sm pointer-events-none"
                      style={{
                        left: `${25 + i * 25}%`,
                        bottom: 0,
                      }}
                      animate={{
                        y: [0, -100, -80],
                        opacity: [0.8, 0.5, 0],
                        scale: [1, 1.5, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Load more button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            className="relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600" />
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            
            <span className="relative flex items-center gap-2">
              View More Profiles
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </span>
          </motion.button>
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
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50"
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
                    
                    {/* Left: Media Gallery */}
                    <div className="space-y-4">
                      {/* Main media display */}
                      <div className="relative h-[500px] rounded-2xl overflow-hidden bg-black/50">
                        <Image
                          src={selectedProfile.images[selectedMediaIndex]?.url || selectedProfile.images[0].url}
                          alt={selectedProfile.name}
                          fill
                          className="object-cover"
                        />
                        
                        {/* Navigation arrows */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedMediaIndex((prev) => 
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
                            setSelectedMediaIndex((prev) => 
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

                      {/* Thumbnail strip */}
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {selectedProfile.images.map((img, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => setSelectedMediaIndex(idx)}
                            className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 ${
                              selectedMediaIndex === idx
                                ? 'border-red-500'
                                : 'border-white/20'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Image
                              src={img.url}
                              alt={`Thumbnail ${idx + 1}`}
                              fill
                              className="object-cover"
                            />
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
                        <p className="text-xl text-gray-400">{selectedProfile.age} years old</p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {selectedProfile.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 rounded-full bg-red-950/50 border border-red-900/50 text-red-300 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">About</h3>
                        <p className="text-gray-400 leading-relaxed">
                          {selectedProfile.description}
                        </p>
                      </div>

                      {/* Skills */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Skills & Interests</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {selectedProfile.skills.map((skill, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10"
                            >
                              <span className="text-red-500">✓</span>
                              <span className="text-gray-300">{skill}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <a
                          href={`https://wa.me/1234567890?text=Hi! I'm interested in booking ${selectedProfile.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <motion.button
                            className="w-full relative overflow-hidden px-8 py-4 rounded-2xl font-semibold text-white"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500" />
                            <span className="relative flex items-center justify-center gap-2">
                              <span className="text-xl">💬</span>
                              Book via WhatsApp
                            </span>
                          </motion.button>
                        </a>

                        <a href="tel:+1234567890" className="flex-1">
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