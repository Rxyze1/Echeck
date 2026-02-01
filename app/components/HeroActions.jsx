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

  return (
    <section className="relative py-6 sm:py-10 md:py-14 lg:py-16 bg-black">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 sm:gap-6 md:gap-7">
          
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full bg-gradient-to-r from-red-950/60 to-pink-950/60 border border-red-900/50 backdrop-blur-xl shadow-lg"
          >
            <span className="text-base sm:text-lg md:text-xl">✨</span>
            <span className="text-xs sm:text-sm md:text-base font-bold text-white tracking-wider whitespace-nowrap">
              Premium Experience Awaits
            </span>
          </motion.div>

          {/* Buttons Container */}
          <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 md:gap-5">
            
            {/* WhatsApp Button */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=Hello!%20I%20want%20to%20book%20premium%20service.`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto sm:flex-1 sm:max-w-xs touch-manipulation"
            >
              <div className="px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center gap-2 sm:gap-2.5 shadow-xl shadow-green-600/40 hover:shadow-green-600/60 active:shadow-green-600/50 transition-all">
                <span className="text-xl sm:text-2xl md:text-2xl flex-shrink-0">💬</span>
                <span className="text-white font-bold text-sm sm:text-base md:text-lg whitespace-nowrap">
                  WhatsApp
                </span>
              </div>
            </motion.a>

            {/* Call Button */}
            <motion.a
              href={`tel:${phoneNumber}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto sm:flex-1 sm:max-w-xs touch-manipulation"
            >
              <div className="px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 rounded-full border-2 border-red-500 backdrop-blur-xl flex items-center justify-center gap-2 sm:gap-2.5 hover:bg-red-500/15 active:bg-red-500/25 transition-all shadow-xl shadow-red-500/30 hover:shadow-red-500/50">
                <span className="text-xl sm:text-2xl md:text-2xl flex-shrink-0">📞</span>
                <span className="text-white font-bold text-sm sm:text-base md:text-lg whitespace-nowrap">
                  Call Now
                </span>
              </div>
            </motion.a>
          </div>

          {/* Explore More Button */}
          <motion.button
            onClick={scrollToNext}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 sm:mt-4 md:mt-5 touch-manipulation"
            aria-label="Scroll to explore more"
          >
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="px-5 sm:px-7 md:px-9 py-2 sm:py-2.5 md:py-3 rounded-full bg-gradient-to-r from-red-950/50 to-pink-950/50 border border-red-900/60 backdrop-blur-xl shadow-lg hover:shadow-xl hover:border-red-700/80 transition-all">
                <span className="text-xs sm:text-sm md:text-base tracking-widest font-bold text-white uppercase">
                  Explore More
                </span>
              </div>
              
              <motion.svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-red-400 drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </div>
          </motion.button>

        </div>
      </div>
    </section>
  );
};

export default HeroActions;