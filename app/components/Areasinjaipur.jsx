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
        staggerChildren: 0.015,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated Background Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* AREAS GRID - PILL SHAPED BUTTONS */}
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
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-500 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse group-hover:animate-none" />
              
              {/* Button */}
              <button className="relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-xs sm:text-sm md:text-base border-2 border-red-400/60 shadow-xl shadow-red-600/40 hover:shadow-red-500/80 transition-all duration-300 overflow-hidden group/btn whitespace-nowrap">
                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20 transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                
                {/* Background Hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                
                {/* Text */}
                <span className="relative flex items-center justify-center">{area}</span>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full bg-black/80 backdrop-blur-xl border border-red-500/30">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                88+
              </p>
              <p className="text-xs md:text-sm text-gray-400">Areas Covered</p>
            </div>
            <div className="w-px h-8 bg-red-500/30" />
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                24/7
              </p>
              <p className="text-xs md:text-sm text-gray-400">Available</p>
            </div>
            <div className="w-px h-8 bg-red-500/30" />
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                100%
              </p>
              <p className="text-xs md:text-sm text-gray-400">Verified</p>
            </div>
          </div>
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