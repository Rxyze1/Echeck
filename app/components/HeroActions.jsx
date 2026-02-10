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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.320, 1],
      },
    },
  };

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-black via-black to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-600/20 to-pink-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-600/20 to-red-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 z-10">
        <motion.div
          className="max-w-5xl mx-auto flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Premium Badge - Enhanced */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse" />
            <div className="relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-7 md:px-9 py-2.5 sm:py-3 md:py-4 rounded-full bg-gradient-to-r from-red-950/80 to-pink-950/80 border border-red-500/40 backdrop-blur-2xl shadow-2xl hover:border-red-500/60 transition-all duration-300">
              <motion.span
                className="text-lg sm:text-xl md:text-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.span>
              <span className="text-xs sm:text-sm md:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-pink-300 tracking-widest whitespace-nowrap">
                PREMIUM EXPERIENCE AWAITS
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 md:mb-5 leading-tight">
              Ready to Experience
              <span className="block mt-2 sm:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-red-400 animate-pulse">
                Luxury & Comfort?
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              Connect with us now for an unforgettable premium service experience
            </p>
          </motion.div>

          {/* Buttons Container - Enhanced */}
          <motion.div
            variants={itemVariants}
            className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-2 sm:mt-4"
          >
            
            {/* WhatsApp Button - Premium */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=Hello!%20I%20want%20to%20book%20premium%20service.`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto touch-manipulation"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative px-6 sm:px-7 md:px-9 py-3.5 sm:py-4 md:py-5 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center gap-3 sm:gap-3 md:gap-4 shadow-2xl shadow-green-600/50 group-hover:shadow-green-600/80 transition-all">
                <motion.span
                  className="text-2xl sm:text-2xl md:text-3xl flex-shrink-0"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💬
                </motion.span>
                <div className="flex flex-col items-start">
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg whitespace-nowrap">
                    Chat on WhatsApp
                  </span>
                  <span className="text-xs text-green-100 font-medium">Usually replies instantly</span>
                </div>
              </div>
            </motion.a>

            {/* Call Button - Premium */}
            <motion.a
              href={`tel:${phoneNumber}`}
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto touch-manipulation"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative px-6 sm:px-7 md:px-9 py-3.5 sm:py-4 md:py-5 rounded-full border-2 border-red-500/60 bg-gradient-to-r from-red-950/60 to-pink-950/60 backdrop-blur-xl flex items-center justify-center gap-3 sm:gap-3 md:gap-4 hover:border-red-400/80 transition-all shadow-2xl shadow-red-600/40 group-hover:shadow-red-600/70">
                <motion.span
                  className="text-2xl sm:text-2xl md:text-3xl flex-shrink-0"
                  animate={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  📞
                </motion.span>
                <div className="flex flex-col items-start">
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg whitespace-nowrap">
                    Call Now
                  </span>
                  <span className="text-xs text-red-200 font-medium">24/7 Available</span>
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            variants={itemVariants}
            className="w-full grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 md:mt-8"
          >
            {[
              { icon: '✓', text: 'Verified', subtext: 'Profiles' },
              { icon: '🔒', text: 'Private', subtext: 'Discreet' },
              { icon: '⚡', text: 'Instant', subtext: 'Response' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-2 px-3 sm:px-4 py-3 sm:py-4 rounded-xl bg-gradient-to-br from-red-950/40 to-pink-950/40 border border-red-900/30 backdrop-blur-sm hover:border-red-700/60 transition-all"
              >
                <span className="text-xl sm:text-2xl md:text-3xl">{item.icon}</span>
                <span className="text-xs sm:text-sm md:text-base font-bold text-white text-center">{item.text}</span>
                <span className="text-xs text-gray-400">{item.subtext}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Explore More Button - Enhanced */}
          <motion.button
            variants={itemVariants}
            onClick={scrollToNext}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 sm:mt-8 md:mt-10 group relative touch-manipulation"
            aria-label="Scroll to explore more"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 to-pink-600/50 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500" />
            <div className="relative flex flex-col items-center gap-3 sm:gap-4">
              <div className="px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full bg-gradient-to-r from-red-950/70 to-pink-950/70 border border-red-900/50 backdrop-blur-xl shadow-lg group-hover:shadow-xl group-hover:border-red-700/80 transition-all">
                <span className="text-xs sm:text-sm md:text-base tracking-widest font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-pink-300 uppercase">
                  ↓ Explore More
                </span>
              </div>
              
              <motion.svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-red-400 drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </motion.svg>
            </div>
          </motion.button>

        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
};

export default HeroActions;