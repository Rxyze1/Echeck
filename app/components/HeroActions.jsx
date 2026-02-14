'use client';

import { useCallback } from 'react';
import { motion } from 'framer-motion';

const HeroActions = () => {
  const whatsappNumber = '8058457070';
  const phoneNumber = '+91' + whatsappNumber;

  const scrollToNext = useCallback(() => {
    const nextSection = document.querySelector('#gallery') ||
      document.querySelector('#services') ||
      document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.320, 1],
      },
    },
  };

  return (
    <section className="relative py-4 sm:py-5 md:py-6 lg:py-7 bg-gradient-to-b from-black via-black to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-bl from-red-600/15 to-pink-600/8 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-16 -left-16 w-56 h-56 sm:w-64 sm:h-64 bg-gradient-to-tr from-pink-600/12 to-red-600/8 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative w-full px-3 xs:px-4 sm:px-6 md:px-8 z-10">
        <motion.div
          className="max-w-4xl mx-auto flex flex-col items-center gap-2 xs:gap-2.5 sm:gap-3 md:gap-3.5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Premium Badge */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/15 to-pink-600/10 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-500" />
            <div className="relative inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 rounded-full bg-gradient-to-r from-red-950/70 to-pink-950/60 border border-red-900/30 backdrop-blur-lg shadow-md hover:border-red-900/50 transition-all duration-300">
              <motion.span
                className="text-xs xs:text-sm sm:text-base"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.span>
              <span className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-red-300/80 tracking-wide whitespace-nowrap">
                PREMIUM EXPERIENCE
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-2xl"
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 xs:mb-1.5 leading-tight">
              Ready to Experience
              <span className="block mt-0.5 xs:mt-1 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-red-400 animate-pulse">
                Luxury & Comfort?
              </span>
            </h2>
            <p className="text-[10px] xs:text-xs sm:text-sm text-gray-400 leading-relaxed font-light px-2">
              Connect with us for an unforgettable experience
            </p>
          </motion.div>

          {/* Buttons Container */}
          <motion.div
            variants={itemVariants}
            className="w-full flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-2 xs:gap-2.5 sm:gap-3 mt-1 xs:mt-1.5"
          >
            
            {/* WhatsApp Button */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=Hello!%20I%20want%20to%20book%20premium%20service.`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full xs:w-auto touch-manipulation"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600/25 to-emerald-500/15 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-400" />
              <div className="relative px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-green-600/85 to-emerald-500/75 backdrop-blur-md flex items-center justify-center xs:justify-start gap-1.5 xs:gap-2 sm:gap-2.5 shadow-lg hover:shadow-green-600/30 border border-green-500/20 transition-all">
                <motion.span
                  className="text-base xs:text-lg sm:text-xl flex-shrink-0"
                  animate={{ y: [0, -1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💬
                </motion.span>
                <div className="flex flex-col items-start">
                  <span className="text-white font-bold text-[10px] xs:text-xs sm:text-sm whitespace-nowrap">
                    WhatsApp
                  </span>
                  <span className="text-[8px] xs:text-[9px] text-green-100 font-medium">Instant</span>
                </div>
              </div>
            </motion.a>

            {/* Call Button */}
            <motion.a
              href={`tel:${phoneNumber}`}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full xs:w-auto touch-manipulation"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/25 to-pink-500/15 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-400" />
              <div className="relative px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg border border-red-900/40 bg-gradient-to-r from-red-950/75 to-pink-950/65 backdrop-blur-md flex items-center justify-center xs:justify-start gap-1.5 xs:gap-2 sm:gap-2.5 hover:border-red-800/60 transition-all shadow-lg hover:shadow-red-600/20">
                <motion.span
                  className="text-base xs:text-lg sm:text-xl flex-shrink-0"
                  animate={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  📞
                </motion.span>
                <div className="flex flex-col items-start">
                  <span className="text-white font-bold text-[10px] xs:text-xs sm:text-sm whitespace-nowrap">
                    Call Now
                  </span>
                  <span className="text-[8px] xs:text-[9px] text-red-200 font-medium">24/7</span>
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Trust Signals - Compact */}
          <motion.div
            variants={itemVariants}
            className="w-full grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-2.5 mt-1.5 xs:mt-2"
          >
            {[
              { icon: '✓', text: 'Verified' },
              { icon: '🔒', text: 'Private' },
              { icon: '⚡', text: 'Instant' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col items-center gap-0.5 px-2 xs:px-2.5 py-1.5 xs:py-2 rounded-lg bg-gradient-to-br from-red-950/35 to-pink-950/25 border border-red-900/20 backdrop-blur-sm hover:border-red-900/35 transition-all"
              >
                <span className="text-sm xs:text-base sm:text-lg">{item.icon}</span>
                <span className="text-[8px] xs:text-[9px] sm:text-xs font-bold text-white text-center leading-tight">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Explore More Button */}
          <motion.button
            variants={itemVariants}
            onClick={scrollToNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-1.5 xs:mt-2 sm:mt-2.5 group relative touch-manipulation"
            aria-label="Scroll to explore more"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/15 to-pink-600/10 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-400" />
            <div className="relative flex flex-col items-center gap-0.5 xs:gap-1">
              <div className="px-4 xs:px-5 sm:px-6 py-1.5 xs:py-2 rounded-full bg-gradient-to-r from-red-950/65 to-pink-950/55 border border-red-900/30 backdrop-blur-lg shadow-md group-hover:shadow-lg group-hover:border-red-900/50 transition-all">
                <span className="text-[8px] xs:text-[9px] sm:text-xs tracking-wider font-bold text-red-300/70 uppercase">
                  ↓ See Profiles
                </span>
              </div>
              
              <motion.svg
                className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-red-400/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </motion.svg>
            </div>
          </motion.button>

        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/15 to-transparent"
        animate={{ opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
};

export default HeroActions;