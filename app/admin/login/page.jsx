'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

// ============================================
// CONFIGURATION
// ============================================
const ANIMATION_CONFIG = {
  particles: 15,
  shapes: 5,
  bottomParticles: 6,
};

// ============================================
// SUB-COMPONENTS
// ============================================

// Particles Generator
const BackgroundParticles = ({ count = 15 }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      width: 40 + (i * 5),
      height: 40 + (i * 7),
      left: (i * 6) % 100,
      top: (i * 5.5) % 100,
      x: [(i % 3) * 12 - 15, ((i + 1) % 3) * 16 - 20, (i % 3) * 12 - 15],
      y: [(i % 4) * 10 - 14, ((i + 1) % 4) * 13 - 18, (i % 4) * 10 - 14],
      scale: [1, 1.25, 1],
      opacity: [0.08, 0.2, 0.08],
      duration: 10 + (i % 7),
      delay: i * 0.18,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={`particle-${p.id}`}
          className="absolute rounded-full"
          style={{
            width: p.width,
            height: p.height,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.18) 0%, transparent 70%)',
          }}
          animate={{
            x: p.x,
            y: p.y,
            scale: p.scale,
            opacity: p.opacity,
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

// Geometric Shapes
const GeometricShapes = ({ count = 5 }) => (
  <>
    {[...Array(count)].map((_, i) => (
      <motion.div
        key={`shape-${i}`}
        className="absolute border-2 border-red-500/15 backdrop-blur-sm hidden lg:block"
        style={{
          width: 70 + i * 22,
          height: 70 + i * 22,
          left: `${(i * 19) % 82}%`,
          top: `${(i * 23) % 72}%`,
          borderRadius: i % 2 === 0 ? '50%' : '18%',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.12, 1],
          opacity: [0.08, 0.22, 0.08],
        }}
        transition={{
          duration: 16 + i * 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    ))}
  </>
);

// Lock Icon Component
const LockIcon = () => (
  <motion.div
    initial={{ scale: 0, rotate: -120 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ duration: 0.9, type: 'spring', stiffness: 180, delay: 0.2 }}
    className="relative"
  >
    {/* Rotating glow */}
    <motion.div
      animate={{ rotate: 360, opacity: [0.3, 0.55, 0.3] }}
      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      className="absolute -inset-3 blur-2xl"
    >
      <div className="w-full h-full bg-gradient-to-r from-red-600 to-rose-600 rounded-full" />
    </motion.div>

    {/* Icon container */}
    <div className="relative bg-gradient-to-br from-red-700 via-red-600 to-rose-600 p-4 md:p-5 rounded-2xl shadow-2xl shadow-red-900/40 border border-red-500/30">
      <svg
        className="w-10 h-10 md:w-12 md:h-12 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    </div>
  </motion.div>
);

// Animated Title
const AnimatedTitle = ({ text }) => {
  const letters = text.split('');
  
  return (
    <div className="overflow-hidden">
      <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold flex flex-wrap justify-center gap-1 md:gap-1.5 leading-tight">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: 80, opacity: 0, rotateX: 90 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3 + index * 0.04,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #f43f5e 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

// Progress Bar
const ProgressBar = ({ progress = 68 }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.6, duration: 0.7 }}
    className="w-full max-w-sm"
  >
    <div className="flex justify-between text-xs md:text-sm text-gray-500 mb-2">
      <span className="font-semibold">Development Progress</span>
      <motion.span
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="font-bold text-red-400"
      >
        {progress}%
      </motion.span>
    </div>
    <div className="h-2 md:h-2.5 bg-gray-900/50 backdrop-blur-sm rounded-full overflow-hidden border border-gray-800/50">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ delay: 1.9, duration: 1.8, ease: 'easeOut' }}
        className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 rounded-full relative"
      >
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
      </motion.div>
    </div>
  </motion.div>
);

// Feature Card
const FeatureCard = ({ icon, text, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.9 + index * 0.08 }}
    whileHover={{ scale: 1.05, y: -3 }}
    className="bg-gray-900/25 backdrop-blur-sm border border-red-900/25 rounded-xl md:rounded-2xl p-3 md:p-4 text-center group cursor-default"
  >
    <motion.div
      className="text-2xl md:text-3xl mb-1"
      animate={{ rotateY: [0, 360] }}
      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
    >
      {icon}
    </motion.div>
    <div className="text-xs md:text-sm text-gray-400 group-hover:text-red-400 transition-colors font-medium">
      {text}
    </div>
  </motion.div>
);

// Bottom Effect
const BottomEffect = () => (
  <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 pointer-events-none">
    <motion.div
      className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent"
      animate={{
        opacity: [0.2, 0.6, 0.2],
        scaleX: [0.9, 1, 0.9],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    />

    {[...Array(6)].map((_, i) => (
      <motion.div
        key={`bp-${i}`}
        className="absolute bottom-0 rounded-full blur-sm"
        style={{
          left: `${i * 16 + 10}%`,
          width: '3px',
          height: '3px',
          background: 'radial-gradient(circle, #dc2626, transparent)',
        }}
        animate={{
          y: [0, -70],
          x: [(i % 3 - 1) * 12, (i % 3 - 1) * 16],
          opacity: [0.9, 0.4, 0],
        }}
        transition={{
          duration: 3.5 + (i % 2),
          delay: i * 0.35,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />
    ))}
  </div>
);

// ============================================
// MAIN PAGE COMPONENT
// ============================================
const Page = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.7]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { icon: '🔐', text: '2FA Security' },
    { icon: '📊', text: 'Analytics' },
    { icon: '⚙️', text: 'Config Panel' },
    { icon: '👥', text: 'Team Mgmt' },
  ];

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-red-950 via-black to-rose-950"
        animate={{
          background: [
            'linear-gradient(135deg, #7f1d1d 0%, #000000 50%, #881337 100%)',
            'linear-gradient(135deg, #881337 0%, #000000 50%, #7f1d1d 100%)',
            'linear-gradient(135deg, #7f1d1d 0%, #000000 50%, #881337 100%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Overlays */}
      <div className="fixed inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none" />

      {/* Mouse Spotlight */}
      <motion.div
        className="fixed w-48 h-48 md:w-80 md:h-80 rounded-full pointer-events-none opacity-60 z-0"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.12) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 150 }}
      />

      {/* Animated Particles */}
      <div className="fixed inset-0">
        <BackgroundParticles count={ANIMATION_CONFIG.particles} />
      </div>

      {/* Geometric Shapes */}
      <div className="fixed inset-0">
        <GeometricShapes count={ANIMATION_CONFIG.shapes} />
      </div>

      {/* Main Content Container */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-32 md:py-36"
        style={{ y, opacity }}
      >
        <div className="max-w-3xl w-full mx-auto space-y-4 md:space-y-5">
          
          {/* Lock Icon */}
          <div className="flex justify-center mb-2 md:mb-3">
            <LockIcon />
          </div>

          {/* Title */}
          <div className="mb-2">
            <AnimatedTitle text="ADMIN PORTAL" />
          </div>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="text-lg md:text-2xl lg:text-3xl font-bold text-red-400 text-center"
          >
            Under Development
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="text-sm md:text-base text-gray-400 text-center max-w-md mx-auto"
          >
            Building next-generation admin console with advanced security
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex items-center justify-center gap-2 py-3"
          >
            <motion.span
              className="w-10 md:w-12 h-[1.5px] bg-gradient-to-r from-transparent to-red-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 1.5 }}
            />
            <motion.span
              className="text-[10px] md:text-xs tracking-widest text-red-400 font-bold"
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.04, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              COMING SOON
            </motion.span>
            <motion.span
              className="w-10 md:w-12 h-[1.5px] bg-gradient-to-l from-transparent to-rose-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 1.5 }}
            />
          </motion.div>

          {/* Progress Bar */}
          <div className="flex justify-center py-2">
            <ProgressBar progress={68} />
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 max-w-2xl mx-auto py-3"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} text={feature.text} index={index} />
            ))}
          </motion.div>

          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="flex items-center justify-center gap-2 py-2"
          >
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-2 h-2 bg-red-500 rounded-full shadow-lg shadow-red-500/50"
            />
            <span className="text-gray-500 text-xs md:text-sm font-medium">
              System Configuration in Progress
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.7 }}
            className="flex justify-center pt-3"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-7 md:px-9 py-3 md:py-3.5 rounded-full font-bold text-white overflow-hidden text-sm md:text-base shadow-xl shadow-red-900/30"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-700 via-rose-600 to-pink-600"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  style={{ backgroundSize: '200% 100%' }}
                />

                <motion.div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-400 blur-xl" />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />

                <span className="relative flex items-center gap-2 z-10">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Return to Home
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.7 }}
            className="text-center text-gray-700 text-[10px] md:text-xs pt-4"
          >
            Expected Launch: Q2 2026 • For Support Contact Admin
          </motion.p>
        </div>
      </motion.div>

      {/* Bottom Effect */}
      <BottomEffect />
    </div>
  );
};

export default Page;