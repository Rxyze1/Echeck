'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image'; 
import personsData from '../../public/Images/images.js';


const page = () => {
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
    <section id="gallery" className="relative min-h-screen py-12 sm:py-16 md:py-20 bg-black overflow-hidden">
      
      {/* Background particles */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {smokeParticles.map((particle) => (
            <div
              key={`smoke-${particle.id}`}
              className="absolute rounded-full bg-red-600/5 animate-float"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
                filter: 'blur(40px)',
                willChange: 'transform',
              }}
            />
          ))}
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-red-950/30 border border-red-900/50 mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs sm:text-sm text-gray-400 tracking-widest">EXCLUSIVE COLLECTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-4 bg-gradient-to-r from-white via-red-500 to-red-400 bg-clip-text text-transparent animate-gradient">
            Our Gallery
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Discover your perfect companion from our exclusive selection
          </p>

          <div className="h-[2px] w-24 sm:w-32 mx-auto rounded-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
        >
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(profile.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group cursor-pointer"
              style={{ willChange: 'transform' }}
              onClick={() => {
                setSelectedProfile(profile);
                setSelectedMediaIndex(0);
              }}
            >
              <div className="card-container relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-black/50 to-black border-2 border-white/10 transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.01]">
                
                {/* Card Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={profile.images[0]?.url || '/placeholder.jpg'}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={index < 4}
                    loading={index >= 4 ? 'lazy' : undefined}
                    quality={85}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/0 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

                  {/* Badges */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2">
                    <div className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-black/70 border border-white/20 text-white text-xs sm:text-sm font-medium flex items-center gap-1 backdrop-blur-sm">
                      <span>📸</span>
                      <span>{profile.images.length}</span>
                    </div>
                  </div>

                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-medium backdrop-blur-sm">
                    {profile.age}y
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300 truncate">
                    {profile.name}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    {profile.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-red-950/50 border border-red-900/50 text-red-300 text-[10px] sm:text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 mb-2 sm:mb-3">
                    {profile.description}
                  </p>

                  <div className={`text-red-400 font-medium text-xs sm:text-sm flex items-center gap-1 sm:gap-2 transition-opacity duration-300 ${
                    hoveredCard === profile.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    View Profile
                    <span className="inline-block animate-bounce-x">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <button className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-white text-sm sm:text-base overflow-hidden bg-gradient-to-r from-red-600 to-pink-600 hover:scale-105 active:scale-95 transition-transform duration-200">
            <span className="relative flex items-center gap-2">
              View More Profiles
              <span className="inline-block group-hover:translate-y-1 transition-transform duration-300">↓</span>
            </span>
          </button>
        </div>
      </div>

      {/* Profile Detail Modal */}
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
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setSelectedProfile(null);
                }
              }}
            >
              <div className="relative w-full h-full sm:h-auto sm:max-h-[95vh] max-w-6xl rounded-none sm:rounded-2xl md:rounded-3xl bg-gradient-to-b from-zinc-900 to-black border-0 sm:border-2 border-red-900/30 overflow-hidden flex flex-col shadow-2xl">
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProfile(null)}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 z-30 p-2 sm:p-2.5 rounded-full bg-black/90 border border-white/20 text-white hover:bg-red-600 hover:rotate-90 transition-all duration-300 active:scale-90 shadow-lg"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Scrollable Content */}
                <div className="h-full overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-zinc-900">
                  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
                    
                    {/* Left: Image Gallery */}
                    <div className="space-y-3 sm:space-y-4 lg:sticky lg:top-0">
                      
                      {/* Main Image Display */}
                      <div className="relative w-full aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-950 border border-white/10">
                        <Image
                          src={selectedProfile.images[selectedMediaIndex]?.url || selectedProfile.images[0]?.url}
                          alt={`${selectedProfile.name} - Image ${selectedMediaIndex + 1}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-contain"
                          priority
                          quality={95}
                        />
                        
                        {/* Navigation Arrows */}
                        {selectedProfile.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedMediaIndex((prev) => 
                                  prev > 0 ? prev - 1 : selectedProfile.images.length - 1
                                );
                              }}
                              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/80 border border-white/30 text-white hover:bg-red-600 hover:scale-110 transition-all duration-200 active:scale-95 shadow-lg z-10"
                            >
                              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedMediaIndex((prev) => 
                                  (prev + 1) % selectedProfile.images.length
                                );
                              }}
                              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/80 border border-white/30 text-white hover:bg-red-600 hover:scale-110 transition-all duration-200 active:scale-95 shadow-lg z-10"
                            >
                              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </>
                        )}

                        {/* Image Counter */}
                        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-black/80 border border-white/30 text-white text-xs sm:text-sm font-semibold shadow-lg backdrop-blur-sm">
                          {selectedMediaIndex + 1} / {selectedProfile.images.length}
                        </div>
                      </div>

                      {/* Thumbnails */}
                      {selectedProfile.images.length > 1 && (
                        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-zinc-900">
                          {selectedProfile.images.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setSelectedMediaIndex(idx)}
                              className={`relative flex-shrink-0 w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 rounded-lg sm:rounded-xl overflow-hidden border-2 snap-start transition-all duration-200 hover:scale-105 ${
                                selectedMediaIndex === idx
                                  ? 'border-red-500 ring-2 ring-red-500/50 scale-105'
                                  : 'border-white/20 opacity-60 hover:opacity-100'
                              }`}
                            >
                              <Image
                                src={img.url}
                                alt={`Thumbnail ${idx + 1}`}
                                fill
                                sizes="120px"
                                className="object-cover"
                                loading="lazy"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right: Profile Details */}
                    <div className="space-y-4 sm:space-y-5 md:space-y-6 pb-4 lg:pb-0">
                      
                      {/* Name & Age */}
                      <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
                          {selectedProfile.name}
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400">{selectedProfile.age} years old</p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {selectedProfile.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-950/50 border border-red-900/50 text-red-300 text-xs sm:text-sm font-medium hover:bg-red-900/50 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                          <span className="text-red-500">✨</span>
                          About
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                          {selectedProfile.description}
                        </p>
                      </div>

                      {/* Skills */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                          <span className="text-red-500">💎</span>
                          Skills & Interests
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {selectedProfile.skills.map((skill, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-500/50 transition-all"
                            >
                              <span className="text-red-500 text-base sm:text-lg">✓</span>
                              <span className="text-gray-300 text-xs sm:text-sm font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col gap-3 sm:gap-4 pt-4 sm:pt-6 sticky bottom-0 bg-gradient-to-t from-black via-black to-transparent pb-4 sm:pb-0">
                        
                        {/* WhatsApp Button */}
                        <a
                          href={`https://wa.me/918058457070?text=Hi! I'm interested in booking ${selectedProfile.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <button className="w-full relative overflow-hidden px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-white text-sm sm:text-base bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-lg hover:shadow-green-500/50">
                            <span className="relative flex items-center justify-center gap-2">
                              <span className="text-lg sm:text-xl">💬</span>
                              Book via WhatsApp
                            </span>
                          </button>
                        </a>

                        {/* Call Button */}
                        <a href="tel:+918058457070" className="w-full">
                          <button className="w-full px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-white text-sm sm:text-base border-2 border-red-500 hover:bg-red-500/10 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-lg hover:shadow-red-500/50">
                            <span className="flex items-center justify-center gap-2">
                              <span className="text-lg sm:text-xl">📞</span>
                              Call Now: +91 805-845-7070
                            </span>
                          </button>
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

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-10px, -15px) scale(1.1); }
          50% { transform: translate(10px, -25px) scale(1.2); }
          75% { transform: translate(-5px, -15px) scale(1.1); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 5s ease infinite;
        }
        
        .animate-bounce-x {
          animation: bounce-x 1.5s ease-in-out infinite;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Custom Scrollbar */
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgb(220 38 38 / 0.5);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgb(220 38 38 / 0.8);
        }
        
        /* GPU Acceleration */
        .card-container {
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-font-smoothing: subpixel-antialiased;
        }
      `}</style>
    </section>
  );
};

export default page;