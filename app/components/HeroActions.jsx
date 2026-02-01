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
    <section className="relative min-h-[50vh] sm:min-h-[40vh] py-8 sm:py-12 md:py-16 bg-black flex items-center justify-center">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 sm:gap-8">
          
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 md:px-9 py-2.5 sm:py-3 md:py-3.5 rounded-full bg-gradient-to-r from-red-950/60 to-pink-950/60 border border-red-900/50 backdrop-blur-xl shadow-lg"
          >
            <span className="text-lg sm:text-xl md:text-2xl">✨</span>
            <span className="text-sm sm:text-base md:text-lg font-bold text-white tracking-wider whitespace-nowrap">
              Premium Experience Awaits
            </span>
          </motion.div>

          {/* Buttons Container - Responsive Flex */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6">
            
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
              <div className="px-6 sm:px-7 md:px-8 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center gap-2.5 sm:gap-3 shadow-xl shadow-green-600/40 hover:shadow-green-600/60 active:shadow-green-600/50 transition-all">
                <span className="text-2xl sm:text-2xl md:text-3xl flex-shrink-0">💬</span>
                <span className="text-white font-bold text-base sm:text-lg md:text-xl whitespace-nowrap">
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
              <div className="px-6 sm:px-7 md:px-8 py-4 sm:py-4.5 rounded-full border-2 border-red-500 backdrop-blur-xl flex items-center justify-center gap-2.5 sm:gap-3 hover:bg-red-500/15 active:bg-red-500/25 transition-all shadow-xl shadow-red-500/30 hover:shadow-red-500/50">
                <span className="text-2xl sm:text-2xl md:text-3xl flex-shrink-0">📞</span>
                <span className="text-white font-bold text-base sm:text-lg md:text-xl whitespace-nowrap">
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
            className="mt-4 sm:mt-6 touch-manipulation"
            aria-label="Scroll to explore more"
          >
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <div className="px-7 sm:px-9 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-full bg-gradient-to-r from-red-950/50 to-pink-950/50 border border-red-900/60 backdrop-blur-xl shadow-lg hover:shadow-xl hover:border-red-700/80 transition-all">
                <span className="text-sm sm:text-base md:text-lg tracking-widest font-bold text-white uppercase">
                  Explore More
                </span>
              </div>
              
              <motion.svg
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-400 drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ y: [0, 8, 0] }}
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