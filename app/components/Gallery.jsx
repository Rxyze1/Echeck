'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image'; 
import personsData from '../../public/Images/images.js';


const Gallery = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const prefersReducedMotion = useReducedMotion();

  // Profile data with imported images
 const profiles = [
  {
    id: 1,
    name: "Priya Sharma",
    age: 21,
    skills: ["Deep French Kissing", "Sensual Dance", "Erotic Massage", "GFE + Intimate Play"],
    tags: ["Sweet & Naughty", "Energetic", "Seductive", "Submissive Vibes"],
    description: "I'm Priya, 21, and I fucking love cock. My tight pussy gets dripping wet the second I think about you pounding me. I deepthroat you balls-deep, gag on it, drool all over your shaft, then beg you to fuck my face harder. I grind my wet cunt on your dick during lap dances, then spread my legs so you can slam into me doggy style and cum deep inside. I swallow every load or let you paint my tits. Book me — I want your cock stretching my holes right now. 💦",
    services: [
      "GFE", "S-GFE", "BBBJ", "BJ", "69", "DATY", "COF", "COB", "HJ", "Strip-tease",
      "Special Massage", "Doggie", "Extraball", "O-Level", "Completion", "Spending time in my rooms"
    ],
    images: personsData[0].images,
    videos: []
  },
  {
    id: 2,
    name: "Ananya Kapoor",
    age: 22,
    skills: ["Erotic Photography", "Tantric Touch", "Sensual Yoga", "Body Worship"],
    tags: ["Artistic Seductress", "Calm yet Wild", "Sensual", "Nature Lover"],
    description: "Ananya, 22 . My flexible body is made for fucking in every position. I suck your cock slow and deep while you watch me in yoga poses with my ass up. I love 69 — eat my soaked pussy while I deepthroat you until you cum down my throat. Ride me hard, slap my ass, pull my hair, fill my cunt with cum. I worship your dick with my tongue and lips, then beg you to pound me until I squirt. Message me — my pussy is throbbing for your cock. 🔥",
    services: [
      "GFE", "S-GFE", "Special Massage", "Strip-tease", "BBBJ", "69", "DATY", "COB",
      "HJ", "O-Level", "Doggie", "Extraball", "Spending time in my rooms"
    ],
    images: personsData[1].images,
    videos: []
  },
  {
    id: 3,
    name: "Isha Patel",
    age: 22,
    skills: ["Erotic Singing", "Striptease", "Fashion Play", "Naughty Roleplay"],
    tags: ["Fashionista Slut", "Vocal Seductress", "Modern & Dirty"],
    description: "Isha, 22 — I fucking love sucking dick. I strip naked, put on slutty outfits, then drop to my knees and deepthroat your cock while moaning like a whore. I let you face-fuck me until tears run down my face, then ride you reverse so you can watch my ass bounce while your dick stretches my tight pussy. Cum on my face, in my mouth, wherever — I swallow it all and beg for more. Fuck me hard, I'm your dirty little fashion slut. 😈",
    services: [
      "Strip-tease", "BBBJ", "BJ", "69", "COF", "COB", "GFE", "HJ", "O-Level",
      "Doggie", "Extraball", "S-GFE", "Spending time in my rooms", "DT", "DSL"
    ],
    images: personsData[2].images,
    videos: []
  },
  {
    id: 4,
    name: "Kavya Reddy",
    age: 20,
    skills: ["Athletic Sex", "Sweaty Play", "Body Worship", "Endurance Sessions"],
    tags: ["Fit & Filthy", "Gym Bunny", "Motivational & Naughty"],
    description: "Kavya, 20. My tight athletic body can take a hard pounding for hours. I deepthroat your cock after a sweaty workout, then bend over so you can fuck my pussy and ass from behind. I ride you like a machine, squeezing your dick with my cunt until you explode inside me. Multiple rounds — cum in my mouth, then fuck me again. I'm your gym slut who loves getting railed until we both collapse. Come drain your balls in me. 💦",
    services: [
      "GFE", "BBBJ", "69", "Doggie", "Extraball", "COB", "HJ", "DATY", "O-Level",
      "Special Massage", "S-GFE", "Spending time in my rooms", "Completion"
    ],
    images: personsData[3].images,
    videos: []
  },
  {
    id: 5,
    name: "Meera Singh",
    age: 19,
    skills: ["Luxury GFE", "Fine Dining Seduction", "Multi-language Dirty Talk", "Elite Companionship"],
    tags: ["Sophisticated Slut", "Elegant", "High-Class Whore"],
    description: "Meera, 19. Classy by day, filthy whore by night. I deepthroat your cock under the table at dinner, then take you to the hotel to get fucked hard in every hole. I love cum on my face, tits, inside my pussy — no limits. Pound me doggy, make me scream while I beg for your load. I'm your high-class cum dump who craves raw dick. Book me now. ✨🍆",
    services: [
      "GFE", "S-GFE", "BBBJ", "BJ", "69", "COF", "COB", "HJ", "O-Level",
      "Special Massage", "Strip-tease", "Doggie", "Extraball", "Spending time in my rooms"
    ],
    images: personsData[4].images,
    videos: []
  },
  {
    id: 6,
    name: "Riya Malhotra",
    age: 23,
    skills: ["Naughty Content Creation", "Tech Roleplay", "Social Media Tease", "Cyber + Real Play"],
    tags: ["Tech-Savvy Slut", "Modern", "Creative & Dirty"],
    description: "Riya, 23. I love filming myself getting fucked. I deepthroat your cock on camera, ride you reverse while moaning \"fuck my tight pussy daddy\", then let you cum all over my face for the video. I sext you dirty pics all day, then meet to get railed hard. My young cunt grips your dick so tight — cum inside or on me, I don't care. I'm your digital fucktoy. 📱🍆",
    services: [
      "GFE", "BBBJ", "69", "COF", "COB", "Strip-tease", "HJ", "O-Level",
      "Doggie", "Extraball", "S-GFE", "Spending time in my rooms", "DT"
    ],
    images: personsData[5].images,
    videos: []
  },
  {
    id: 7,
    name: "Sanya Gupta",
    age: 27,
    skills: ["Erotic Storytelling", "Sensual Poetry", "Slow Tease", "Intimate GFE"],
    tags: ["Intellectual Seductress", "Gentle yet Filthy", "Romantic Whore"],
    description: "Sanya, 27. I talk dirty while I suck your cock slow and deep. Then I spread my legs and beg you to fuck my wet pussy hard. I love getting pounded doggy, feeling your balls slap against me, then swallowing your cum or letting you fill my cunt. Gentle in public, total whore in bed — use my holes however you want. Come fuck me senseless. 📖🍆",
    services: [
      "GFE", "S-GFE", "BBBJ", "69", "DATY", "COB", "HJ", "Special Massage",
      "O-Level", "Strip-tease", "Doggie", "Spending time in my rooms", "Completion"
    ],
    images: personsData[6].images,
    videos: []
  },
  {
    id: 8,
    name: "Naina Shingh",
    age: 23,
    skills: ["Erotic Baking", "Food Play", "Sensual Dining", "Messy Fun"],
    tags: ["Sweet & Dirty", "Naughty Chef", "Cum Play Vibes"],
    description: "Naina, 23. I lick whipped cream off your cock, then deepthroat you until you cum down my throat. Smear chocolate on my tits and fuck them, then pound my pussy while I moan like a slut. I love messy sex — cum on my face, in my mouth, inside me. My tight cunt is always ready for hard fucking. Come get sticky with me. 🍰🍆",
    services: [
      "GFE", "BBBJ", "69", "COF", "COB", "HJ", "DATY", "O-Level",
      "Special Massage", "Doggie", "Extraball", "S-GFE", "Spending time in my rooms"
    ],
    images: personsData[7].images,
    videos: []
  },
  {
    id: 9,
    name: "Diya Khanna",
    age: 21,
    skills: ["Party Girl", "Group Play Fantasy", "Wild Nights", "Dance Floor Seduction"],
    tags: ["Outgoing Slut", "Party Animal", "Fun & Filthy"],
    description: "Diya, 21. I grind my wet pussy on you at parties, no panties, then drag you to fuck me hard in the bathroom. I deepthroat you in risky places, take it doggy while music blasts, and love duos — two sluts sucking and riding your cock together. Cum on our faces, in our pussies, anywhere. I'm your party fucktoy — stamina required. 🎉🍆",
    services: [
      "GFE", "BBBJ", "Strip-tease", "69", "COF", "COB", "HJ", "O-Level",
      "Doggie", "Extraball", "Duo Sandwich", "S-GFE", "Spending time in my rooms", "ANAL"
    ],
    images: personsData[8].images,
    videos: []
  },

  {
    id: 10,
    name: "Mayra Choudhary",
    age: 22,
    skills: ["Party Girl", "Group Play Fantasy", "Wild Nights", "Dance Floor Seduction"],
    tags: ["Outgoing Slut", "Party Animal", "Fun & Filthy"],
    description: "Mayra, 22. I grind my wet pussy on you at parties, no panties, then drag you to fuck me hard in the bathroom. I deepthroat you in risky places, take it doggy while music blasts, and love duos — two sluts sucking and riding your cock together. Cum on our faces, in our pussies, anywhere. I'm your party fucktoy — stamina required. 🎉🍆",
    services: [
      "GFE", "BBBJ", "Strip-tease", "69", "COF", "COB", "HJ", "O-Level",
      "Doggie", "Extraball", "Duo Sandwich", "S-GFE", "Spending time in my rooms", "ANAL"
    ],
    images: personsData[9].images,
    videos: []
  },

   {
    id: 11,
    name: "Miss Rupa Jain -(House Wife)",
    age: 27,
    skills: ["Erotic Baking", "Food Play", "Sensual Dining", "Messy Fun"],
    tags: ["Sweet & Dirty", "Naughty Chef", "Cum Play Vibes"],
    description: "Rupa, 27. I lick whipped cream off your cock, then deepthroat you until you cum down my throat. Smear chocolate on my tits and fuck them, then pound my pussy while I moan like a slut. I love messy sex — cum on my face, in my mouth, inside me. My tight cunt is always ready for hard fucking. Come get sticky with me. 🍰🍆",
    services: [
      "GFE", "BBBJ", "69", "COF", "COB", "HJ", "DATY", "O-Level",
      "Special Massage", "Doggie", "Extraball", "S-GFE", "Spending time in my rooms"
    ],
    images: personsData[10].images,
    videos: []
  },

   {
    id: 12,
    name: "Miss Shalini Sharma -(House Wife)",
    age: 28,
    skills: ["Erotic Baking", "Food Play", "Sensual Dining", "Messy Fun"],
    tags: ["Sweet & Dirty", "Naughty Chef", "Cum Play Vibes"],
    description: "Shalini, 28. I lick whipped cream off your cock, then deepthroat you until you cum down my throat. Smear chocolate on my tits and fuck them, then pound my pussy while I moan like a slut. I love messy sex — cum on my face, in my mouth, inside me. My tight cunt is always ready for hard fucking. Come get sticky with me. 🍰🍆",
    services: [
      "GFE", "BBBJ", "69", "COF", "COB", "HJ", "DATY", "O-Level",
      "Special Massage", "Doggie", "Extraball", "S-GFE", "Spending time in my rooms"
    ],
    images: personsData[11].images,
    videos: []
  },

];

  // Smoke particles for background animation
  const smokeParticles = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: 80 + (i * 20),
      left: (i * 16.5) % 100,
      top: (i * 18) % 100,
      duration: 20 + (i % 5),
      delay: i * 0.8,
    }));
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
        delayChildren: 0.1 
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
  <section id="gallery" className="relative min-h-screen py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 bg-black overflow-hidden">
      
  {/* Background particles - Enhanced */}
  {!prefersReducedMotion && (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {smokeParticles.map((particle) => (
        <div
          key={`smoke-${particle.id}`}
          className="absolute rounded-full bg-gradient-to-br from-red-600/10 to-red-400/5 animate-float"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            filter: 'blur(50px)',
            willChange: 'transform',
            boxShadow: '0 0 60px rgba(220, 38, 38, 0.1)',
          }}
        />
      ))}
    </div>
  )}

  {/* Enhanced Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 via-75% to-black pointer-events-none" />
  
  {/* Radial glow effect */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-96 sm:w-[600px] md:w-[800px] h-96 sm:h-[600px] md:h-[800px] bg-red-600/15 rounded-full blur-3xl opacity-40 pointer-events-none animate-pulse" />

  <div className="relative z-10 w-full px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10">
    <div className="max-w-7xl mx-auto">
      
      {/* Enhanced Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20"
      >
        {/* Badge with enhanced design */}
        <div className="inline-flex items-center gap-2 px-3 xs:px-4 sm:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-gradient-to-r from-red-950/50 to-red-900/30 border border-red-900/60 mb-4 sm:mb-6 md:mb-8 backdrop-blur-md hover:border-red-800 transition-all duration-300 shadow-lg shadow-red-900/20">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-900 animate-pulse shadow-lg shadow-red-500/50" />
          <span className="text-[10px] xs:text-xs sm:text-sm text-gray-300 tracking-widest font-bold">✨ EXCLUSIVE COLLECTION</span>
        </div>

        {/* Main Heading - Improved responsiveness */}
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 md:mb-8 px-2 leading-tight">
          <span className="bg-gradient-to-r from-white via-red-300 to-red-500 bg-clip-text text-transparent animate-gradient drop-shadow-lg">
            Our Gallery
          </span>
        </h2>

        {/* Subtitle - Better typography */}
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2 leading-relaxed font-light tracking-wide">
          Discover your perfect companion from our exclusive and carefully curated selection
        </p>

        {/* Decorative line - Enhanced */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <div className="h-[1px] w-6 xs:w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent to-red-600" />
          <div className="w-2 h-2 rounded-full bg-red-500 shadow-lg shadow-red-500/60 animate-pulse" />
          <div className="h-[1px] w-6 xs:w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent to-red-600" />
        </div>
      </motion.div>

      {/* Gallery Grid - Improved with better responsive behavior */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 auto-rows-max"
      >
        {profiles.map((profile, index) => (
          <motion.div
            key={profile.id}
            variants={cardVariants}
            onMouseEnter={() => setHoveredCard(profile.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group h-full"
            style={{ willChange: 'transform' }}
          >
            <button
              onClick={() => {
                setSelectedProfile(profile);
                setSelectedMediaIndex(0);
              }}
              className="w-full h-full relative rounded-2xl xs:rounded-2xl sm:rounded-3xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2 focus:ring-offset-black transition-all active:scale-95"
            >
              {/* Card wrapper with gradient border effect */}
              <div className="relative w-full h-full rounded-2xl xs:rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-black/60 to-black/80 border-2 border-white/10 group-hover:border-red-500/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/20">
                
                {/* Shimmer overlay on hover */}
                <div className="absolute -inset-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500 pointer-events-none" />

                {/* Image container - Better aspect ratio handling */}
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 h-full">
                  <Image
                    src={profile.images[0]?.url || '/placeholder.jpg'}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 375px) 50vw, (max-width: 480px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index < 4}
                    loading={index >= 4 ? 'lazy' : undefined}
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect fill='%23111'/%3E%3C/svg%3E"
                  />
                  
                  {/* Gradient overlays - Enhanced */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/0 group-hover:from-red-600/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Dark corner overlays for better text readability */}
                  <div className="absolute top-0 left-0 right-0 h-20 sm:h-24 bg-gradient-to-b from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                </div>

                {/* Badge section - Top */}
                <div className="absolute top-3 xs:top-3 sm:top-4 left-3 xs:left-3 sm:left-4 right-3 xs:right-3 sm:right-4 z-20">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                      {/* Age Badge */}
                      <div className="px-2 xs:px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-black/70 backdrop-blur-md border border-white/40 text-white text-[10px] xs:text-xs sm:text-sm font-bold hover:border-red-500/70 transition-all shadow-lg hover:shadow-red-500/40">
                        {profile.age}y
                      </div>
                    </div>

                    {/* Image count Badge */}
                    <div className="px-2 xs:px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-black/70 backdrop-blur-md border border-white/40 text-white text-[10px] xs:text-xs sm:text-sm font-bold hover:border-red-500/70 transition-all shadow-lg hover:shadow-red-500/40 flex items-center gap-1">
                      <span>📸</span>
                      <span>{profile.images.length}</span>
                    </div>
                  </div>
                </div>

                {/* Content section - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 xs:p-3.5 sm:p-4 md:p-5 z-20 space-y-2 sm:space-y-3">
                  
                  {/* Name */}
                  <div className="min-h-[2.5rem] sm:min-h-[3rem]">
                    <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-black text-white leading-tight truncate group-hover:text-red-300 transition-colors duration-300 line-clamp-2">
                      {profile.name}
                    </h3>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-1 sm:gap-1.5 flex-wrap">
                    {profile.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="px-1.5 xs:px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-red-900/70 border border-red-700/60 text-red-100 text-[9px] xs:text-[10px] sm:text-xs font-bold hover:bg-red-800/90 transition-all shadow-md hover:shadow-red-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description - Hidden on mobile */}
                  <p className="text-gray-200 text-[11px] xs:text-[12px] sm:text-xs line-clamp-2 leading-snug hidden xs:block font-light">
                    {profile.description}
                  </p>

                  {/* CTA - Appears on hover */}
                  <div className={`flex items-center gap-1 sm:gap-2 text-red-300 font-bold text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-1`}>
                    <span>View Profile</span>
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-300 text-sm">→</span>
                  </div>
                </div>
              </div>
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More Button - Enhanced */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center mt-10 xs:mt-12 sm:mt-14 md:mt-16 lg:mt-20"
      >
        
      </motion.div>
    </div>
  </div>

{/* Compact Profile Detail Modal */}
<AnimatePresence mode="wait">
  {selectedProfile && (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => setSelectedProfile(null)}
        className="fixed inset-0 bg-black/97 backdrop-blur-xl z-50"
      />

      {/* Compact Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setSelectedProfile(null);
          }
        }}
      >
        <motion.div
          className="relative w-full max-w-2xl rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col bg-gradient-to-b from-zinc-900 via-zinc-900 to-black border border-red-900/40 shadow-2xl shadow-black/80 max-h-[90vh]"
        >
          
          {/* Close Button */}
          <motion.button
            whileHover={{ rotate: 90, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedProfile(null)}
            className="absolute top-2.5 right-2.5 z-40 p-1.5 sm:p-2 rounded-full bg-black/70 border border-red-600/50 text-white hover:bg-red-600 hover:border-red-500 transition-all duration-300 shadow-lg"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Content */}
          <div className="overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-red-600/70 scrollbar-track-zinc-900 flex-1">
            
            {/* Grid Layout - Compact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-3 xs:p-4 sm:p-5">
              
              {/* Gallery - Left */}
              <div className="space-y-2 sm:space-y-3 flex flex-col">
                
                {/* Main Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-red-900/50 shadow-lg flex-shrink-0"
                  style={{ aspectRatio: '3/4' }}
                >
                  <Image
                    src={selectedProfile.images[selectedMediaIndex]?.url || selectedProfile.images[0]?.url}
                    alt={`${selectedProfile.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 40vw"
                    className="object-cover"
                    priority
                    quality={90}
                  />
                  
                  {/* Navigation */}
                  {selectedProfile.images.length > 1 && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedMediaIndex((prev) => 
                            prev > 0 ? prev - 1 : selectedProfile.images.length - 1
                          );
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/70 border border-white/40 text-white hover:bg-red-600 transition-all shadow-lg z-10"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedMediaIndex((prev) => 
                            (prev + 1) % selectedProfile.images.length
                          );
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/70 border border-white/40 text-white hover:bg-red-600 transition-all shadow-lg z-10"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </>
                  )}

                  {/* Counter */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 xs:px-3 py-1 rounded-full bg-black/80 border border-red-600/60 text-white text-[10px] xs:text-xs font-bold">
                    {selectedMediaIndex + 1} / {selectedProfile.images.length}
                  </div>
                </motion.div>

                {/* Thumbnails */}
                {selectedProfile.images.length > 1 && (
                  <div className="flex gap-1.5 overflow-x-auto pb-1 scroll-smooth scrollbar-thin scrollbar-thumb-red-600/70 scrollbar-track-zinc-900">
                    {selectedProfile.images.map((img, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedMediaIndex(idx)}
                        className={`relative flex-shrink-0 rounded-lg overflow-hidden border snap-start transition-all ${
                          selectedMediaIndex === idx
                            ? 'border-red-500 ring-1 ring-red-500/60 scale-105'
                            : 'border-white/25 opacity-50 hover:opacity-80'
                        }`}
                        style={{ width: '50px', height: '65px' }}
                      >
                        <Image
                          src={img.url}
                          alt={`Thumb ${idx + 1}`}
                          fill
                          sizes="60px"
                          className="object-cover"
                          loading="lazy"
                        />
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>

              {/* Details - Right */}
              <div className="space-y-2.5 sm:space-y-3 flex flex-col min-h-full">
                
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-white leading-tight line-clamp-2">
                    {selectedProfile.name}
                  </h2>
                  <p className="text-xs xs:text-sm text-gray-400 font-light">
                    {selectedProfile.age} years old
                  </p>
                </motion.div>

                {/* Tags - Compact */}
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-wrap gap-1"
                >
                  {selectedProfile.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-full bg-red-950/60 border border-red-800/50 text-red-200 text-[10px] xs:text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent" />

                {/* About */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <h3 className="text-xs xs:text-sm sm:text-base font-bold text-white mb-1 flex items-center gap-1.5">
                    <span className="text-sm xs:text-base">✨</span>
                    About
                  </h3>
                  <p className="text-[11px] xs:text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3">
                    {selectedProfile.description}
                  </p>
                </motion.div>

                {/* Skills - Compact Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xs xs:text-sm sm:text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
                    <span className="text-sm xs:text-base">💎</span>
                    Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-1">
                    {selectedProfile.skills.slice(0, 4).map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5 border border-white/10 hover:border-red-500/40 transition-all"
                      >
                        <span className="text-red-400 text-xs flex-shrink-0">✓</span>
                        <span className="text-gray-300 text-[10px] xs:text-xs font-medium line-clamp-1">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Action Buttons - Compact */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="flex gap-2 pt-2"
                >
                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/918058457070?text=Hi! I'm interested in booking ${selectedProfile.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-2.5 xs:px-3 py-2 xs:py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold text-white text-xs xs:text-sm bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 hover:shadow-lg hover:shadow-green-500/50 active:scale-95 transition-all shadow-md"
                    >
                      <span className="flex items-center justify-center gap-1">
                        <span className="text-sm xs:text-base">💬</span>
                        <span className="hidden xs:inline">WhatsApp</span>
                        <span className="inline xs:hidden">Chat</span>
                      </span>
                    </motion.button>
                  </a>

                  {/* Call */}
                  <a href="tel:+918058457070" className="flex-1">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-2.5 xs:px-3 py-2 xs:py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold text-white text-xs xs:text-sm bg-red-950/30 border border-red-500 hover:bg-red-500/20 hover:shadow-lg hover:shadow-red-500/50 active:scale-95 transition-all shadow-md"
                    >
                      <span className="flex items-center justify-center gap-1">
                        <span className="text-sm xs:text-base">📞</span>
                        <span className="hidden xs:inline">Call</span>
                        <span className="inline xs:hidden">Call</span>
                      </span>
                    </motion.button>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )}
</AnimatePresence>

  {/* CSS Animations - Enhanced */}
  <style jsx global>{`
    @keyframes float {
      0%, 100% { 
        transform: translate(0, 0) scale(1);
        opacity: 0.3;
      }
      25% { 
        transform: translate(-15px, -25px) scale(1.15);
        opacity: 0.4;
      }
      50% { 
        transform: translate(18px, -35px) scale(1.3);
        opacity: 0.35;
      }
      75% { 
        transform: translate(-10px, -20px) scale(1.1);
        opacity: 0.38;
      }
    }
    
    @keyframes gradient {
      0%, 100% { 
        background-position: 0% 50%;
      }
      50% { 
        background-position: 100% 50%;
      }
    }
    
    @keyframes bounce-x {
      0%, 100% { 
        transform: translateX(0);
      }
      50% { 
        transform: translateX(6px);
      }
    }

    @keyframes shimmer {
      0% { 
        transform: translateX(-100%);
      }
      100% { 
        transform: translateX(100%);
      }
    }
    
    .animate-float {
      animation: float 20s linear infinite;
    }
    
    .animate-gradient {
      background-size: 200% auto;
      animation: gradient 6s ease infinite;
    }
    
    .animate-bounce-x {
      animation: bounce-x 1.5s ease-in-out infinite;
    }

    .animate-shimmer {
      animation: shimmer 2.5s infinite;
    }
    
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    /* Custom Scrollbar - Enhanced */
    .scrollbar-thin::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .scrollbar-thin::-webkit-scrollbar-track {
      background: rgb(24 24 27 / 0.6);
      border-radius: 3px;
    }
    .scrollbar-thin::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, rgb(220 38 38 / 0.7), rgb(220 38 38 / 0.4));
      border-radius: 3px;
    }
    .scrollbar-thin::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(to bottom, rgb(220 38 38 / 0.9), rgb(220 38 38 / 0.6));
    }

    /* Firefox Scrollbar */
    * {
      scrollbar-width: thin;
      scrollbar-color: rgb(220 38 38 / 0.6) rgb(24 24 27 / 0.6);
    }
    
    /* GPU Acceleration */
    .card-container {
      transform: translateZ(0);
      backface-visibility: hidden;
      -webkit-font-smoothing: subpixel-antialiased;
    }

    button {
      -webkit-tap-highlight-color: transparent;
    }

    /* Mobile Performance */
    @media (max-width: 640px) {
      body {
        -webkit-font-smoothing: antialiased;
      }
      
      * {
        -webkit-touch-callout: none;
      }
    }

    /* Prevent layout shift */
    html {
      scroll-behavior: smooth;
    }
  `}</style>
</section>
  );
};

export default Gallery;