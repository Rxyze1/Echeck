'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Areasinjaipur = () => {
  const allAreas = useMemo(() => [
    // Central Jaipur
    'C-Scheme',
    'Civil Lines',
    'MI Road',
    'Ashok Nagar',
    'Bani Park',
    'Station Road',
    'Sindhi Camp',
    'Sansar Chandra Road',
    'Ajmer Road (Central)',
    'Shyam Nagar',
    // East Jaipur
    'Raja Park',
    'Adarsh Nagar',
    'Jawahar Nagar',
    'Tilak Nagar',
    'Malviya Nagar',
    'Jagatpura',
    'Pratap Nagar',
    'Durgapura',
    'Goner Road',
    'Ram Ganj',
    'Sanganeri Gate',
    'Transport Nagar',
    // West Jaipur
    'Vaishali Nagar',
    'Nirman Nagar',
    'Sodala',
    'Shyam Nagar',
    'Ajmer Road',
    'Heerapura',
    'Kamla Nehru Nagar',
    'Panchyawala',
    'Karni Vihar',
    'Queens Road',
    // South Jaipur
    'Mansarovar',
    'Mansarovar Extension',
    'Gopalpura',
    'Gopalpura Bypass',
    'Triveni Nagar',
    'Mahesh Nagar',
    'Kartarpura',
    'Muhana',
    'ISI Colony',
    'Shipra Path',
    'Patrakar Colony',
    // North Jaipur
    'Jhotwara',
    'Vidhyadhar Nagar',
    'Murlipura',
    'Ambabari',
    'Shastri Nagar',
    'Baniyawas',
    'Nindar Mod',
    'Harmada',
    'VKI Area',
    'Chandpol',
    // Old City
    'Johari Bazaar',
    'Bapu Bazaar',
    'Tripolia Bazaar',
    'Chandpole Bazaar',
    'Kishanpole Bazaar',
    'Ramganj Bazaar',
    'Subhash Chowk',
    'Choti Chaupar',
    'Badi Chaupar',
    'Galta Gate',
    // New Areas
    'Jagatpura Extension',
    'Mahindra SEZ',
    'Ring Road Area',
    'Kalwar Road',
    'Sirsi Road',
    'Benad Road',
    'Jaisinghpura',
    'Hathoj',
    'Bad Ke Balaji',
    'Bhankrota',
    'Narayan Vihar',
  ], []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.012,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.6, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen py-28 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-red-900/15 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated Background Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-900/30 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-900/25 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-900/10 rounded-full mix-blend-overlay filter blur-3xl opacity-10" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-4"
          >
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Service Areas
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Available Across All Zones
          </motion.p>
        </motion.div>

        {/* AREAS GRID - GLASS MORPHISM */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5"
        >
          {allAreas.map((area, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.18, y: -6 }}
              whileTap={{ scale: 0.88 }}
              className="relative group cursor-pointer"
            >
              {/* Outer Glow - Red */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 group-hover:blur-lg" />

              {/* Inner Shadow Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-500 rounded-full blur opacity-0 group-hover:opacity-80 transition-all duration-400 -z-10" />
              
              {/* Button with Glass Effect */}
              <button className="relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden group/btn transition-all duration-300">
                
                {/* Base Background - Dark with transparency */}
                <div className="absolute inset-0 rounded-full bg-black/40 backdrop-blur-lg border-2 border-red-500/60 group-hover/btn:border-red-400/100 transition-all duration-300" />
                
                {/* Hover Glass Effect - Red tinted */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600/40 to-red-500/20 opacity-0 group-hover/btn:opacity-100 backdrop-blur-xl transition-all duration-300 mix-blend-overlay" />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/btn:opacity-60 transform -translate-x-full group-hover/btn:translate-x-full transition-all duration-700" />
                
                {/* Text with Gradient */}
                <span className="relative flex items-center justify-center bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent group-hover/btn:from-white group-hover/btn:to-white group-hover/btn:text-white transition-all">
                  {area}
                </span>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section - Glass Morphism */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 flex justify-center"
        >
          <div className="relative group">
            {/* Glow Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
            
            <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-10 px-8 sm:px-12 py-6 sm:py-8 rounded-2xl bg-black/50 backdrop-blur-2xl border-2 border-red-500/50 group-hover:border-red-400/80 transition-all duration-300">
              {/* Stat 1 */}
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
                  88+
                </p>
                <p className="text-sm md:text-base text-gray-300 font-semibold mt-1 tracking-wide">Areas Covered</p>
              </motion.div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-red-600/30 via-red-500/60 to-red-600/30" />
              <div className="sm:hidden w-24 h-px bg-gradient-to-r from-red-600/30 via-red-500/60 to-red-600/30" />

              {/* Stat 2 */}
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
                  24/7
                </p>
                <p className="text-sm md:text-base text-gray-300 font-semibold mt-1 tracking-wide">Available</p>
              </motion.div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-red-600/30 via-red-500/60 to-red-600/30" />
              <div className="sm:hidden w-24 h-px bg-gradient-to-r from-red-600/30 via-red-500/60 to-red-600/30" />

              {/* Stat 3 */}
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
                  100%
                </p>
                <p className="text-sm md:text-base text-gray-300 font-semibold mt-1 tracking-wide">Verified</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-20"
        >
          <a
            href="https://wa.me/918058457070"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-10 py-4 rounded-full font-bold text-white text-base bg-gradient-to-r from-green-600 to-green-500 border-2 border-green-400/60 hover:border-green-300 shadow-xl shadow-green-600/50 overflow-hidden group"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                <span>💬</span>
                WhatsApp Now
              </span>
            </motion.button>
          </a>

          <a href="tel:+918058457070">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-10 py-4 rounded-full font-bold text-white text-base backdrop-blur-xl bg-black/50 border-2 border-red-500/70 hover:border-red-400 hover:bg-red-600/20 transition-all shadow-xl shadow-red-600/40 overflow-hidden group"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-15 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                <span>📞</span>
                Call: 8058457070
              </span>
            </motion.button>
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Areasinjaipur;