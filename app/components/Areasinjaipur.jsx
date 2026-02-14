'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const AreaCard = React.memo(({ area, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.3, delay: (index % 10) * 0.02 }}
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="relative group h-12 sm:h-14"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-500 rounded-lg blur opacity-0 group-hover:opacity-80 transition-opacity duration-300 -z-10" />

      {/* Card */}
      <button className="w-full h-full relative px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm whitespace-nowrap overflow-hidden transition-all duration-300">
        
        {/* Background with Glass Effect */}
        <div className="absolute inset-0 rounded-lg bg-black/60 backdrop-blur-md border border-red-500/40 group-hover:border-red-400/80 group-hover:bg-red-600/20 transition-all duration-300" />

        {/* Shimmer */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700" />

        {/* Text */}
        <span className="relative z-10 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent group-hover:to-white transition-all">
          {area}
        </span>
      </button>
    </motion.div>
  );
});

AreaCard.displayName = 'AreaCard';

const Areasinjaipur = () => {
  const [visibleCount, setVisibleCount] = useState(30);

  const allAreas = useMemo(() => [
    'C-Scheme', 'Civil Lines', 'MI Road', 'Ashok Nagar', 'Bani Park',
    'Station Road', 'Sindhi Camp', 'Sansar Chandra Road', 'Ajmer Road', 'Shyam Nagar',
    'Raja Park', 'Adarsh Nagar', 'Jawahar Nagar', 'Tilak Nagar', 'Malviya Nagar',
    'Jagatpura', 'Pratap Nagar', 'Durgapura', 'Goner Road', 'Ram Ganj',
    'Sanganeri Gate', 'Transport Nagar', 'Vaishali Nagar', 'Nirman Nagar', 'Sodala',
    'Heerapura', 'Kamla Nehru Nagar', 'Panchyawala', 'Karni Vihar', 'Queens Road',
    'Mansarovar', 'Mansarovar Ext.', 'Gopalpura', 'Gopalpura Bypass', 'Triveni Nagar',
    'Mahesh Nagar', 'Kartarpura', 'Muhana', 'ISI Colony', 'Shipra Path',
    'Patrakar Colony', 'Jhotwara', 'Vidhyadhar Nagar', 'Murlipura', 'Ambabari',
    'Shastri Nagar', 'Baniyawas', 'Nindar Mod', 'Harmada', 'VKI Area',
    'Chandpol', 'Johari Bazaar', 'Bapu Bazaar', 'Tripolia Bazaar', 'Chandpole Bazaar',
    'Kishanpole Bazaar', 'Ramganj Bazaar', 'Subhash Chowk', 'Choti Chaupar', 'Badi Chaupar',
    'Galta Gate', 'Jagatpura Ext.', 'Mahindra SEZ', 'Ring Road', 'Kalwar Road',
    'Sirsi Road', 'Benad Road', 'Jaisinghpura', 'Hathoj', 'Bad Ke Balaji',
    'Bhankrota', 'Narayan Vihar', 'Pushkar Road', 'Sanganer', 'Tonk Road',
  ], []);

  const displayedAreas = useMemo(() => allAreas.slice(0, visibleCount), [allAreas, visibleCount]);

  return (
    <section className="relative min-h-fit py-20 md:py-28 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-red-900/10 via-transparent to-transparent pointer-events-none" />

      {/* Animated Background Orbs - Optimized */}
      <div className="absolute -top-40 -right-40 w-72 h-72 bg-red-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-72 h-72 bg-red-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4">
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Service Areas
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg">
            Available Across All Zones in Jaipur
          </p>
        </motion.div>

        {/* Areas Grid - Optimized with Smaller Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 mb-12"
        >
          {displayedAreas.map((area, idx) => (
            <AreaCard key={idx} area={area} index={idx} />
          ))}
        </motion.div>

        {/* Load More Button */}
        {visibleCount < allAreas.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(prev => Math.min(prev + 30, allAreas.length))}
              className="px-8 py-3 rounded-full font-bold text-sm md:text-base bg-gradient-to-r from-red-600 to-red-500 border border-red-400/60 hover:border-red-300 text-white shadow-lg shadow-red-600/40 transition-all duration-300 hover:shadow-red-600/60"
            >
              Load More Areas ({visibleCount}/{allAreas.length})
            </motion.button>
          </motion.div>
        )}

        {/* Stats Section - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-4 md:gap-6 mb-16"
        >
          {[
            { number: '88+', label: 'Areas' },
            { number: '24/7', label: 'Available' },
            { number: '100%', label: 'Verified' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-500 rounded-lg blur opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10" />

              <div className="relative p-4 md:p-6 rounded-lg bg-black/50 backdrop-blur-md border border-red-500/30 group-hover:border-red-400/60 transition-all text-center">
                <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-xs md:text-sm text-gray-300 mt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/918058457070"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 rounded-full font-bold text-sm md:text-base bg-gradient-to-r from-green-600 to-green-500 border border-green-400/60 text-white shadow-lg shadow-green-600/40 hover:shadow-green-600/60 transition-all"
            >
              💬 WhatsApp
            </motion.button>
          </a>

          <a href="tel:+918058457070">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 rounded-full font-bold text-sm md:text-base bg-black/50 backdrop-blur-md border border-red-500/60 hover:border-red-400 text-white shadow-lg shadow-red-600/30 transition-all"
            >
              📞 8058457070
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