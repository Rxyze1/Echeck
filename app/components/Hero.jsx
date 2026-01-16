'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Reduced transform calculations
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  const placeholders = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80',
    'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80',
  ];

  // DRASTICALLY reduced particles (from 25 to 8)
  const smokeParticles = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      width: 100 + (i * 15),
      height: 100 + (i * 15),
      left: (i * 12.5) % 100,
      top: (i * 12) % 100,
      duration: 15 + (i % 4),
      delay: i * 0.5,
    }));
  }, []);

  // Simplified slide variants - removed blur and 3D transforms
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const nextVideo = () => {
    setDirection(1);
    setCurrentVideo((prev) => (prev + 1) % placeholders.length);
  };

  const prevVideo = () => {
    setDirection(-1);
    setCurrentVideo((prev) => (prev - 1 + placeholders.length) % placeholders.length);
  };

  useEffect(() => {
    if (isHovering) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentVideo((prev) => (prev + 1) % placeholders.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [placeholders.length, isHovering]);

  const titleText = "Rent A Girlfriend";
  const words = titleText.split(" ");

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
      style={{ willChange: 'transform' }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      
      {/* Optimized Image Carousel - removed parallax scale */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentVideo}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { 
                type: 'spring', 
                stiffness: 150, 
                damping: 30,
              },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0"
            style={{ willChange: 'transform, opacity' }}
          >
            <Image
              src={placeholders[currentVideo]}
              alt={`Slide ${currentVideo + 1}`}
              fill
              className="object-cover"
              priority={currentVideo === 0}
              quality={85}
              sizes="100vw"
            />
            
            {/* Simplified gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Simplified overlays - removed extra gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />
      
      {/* Optimized smoke particles with CSS animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {smokeParticles.map((particle) => (
          <div
            key={`smoke-${particle.id}`}
            className="absolute rounded-full animate-float-slow"
            style={{
              width: particle.width,
              height: particle.height,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              background: `radial-gradient(circle, rgba(220, 38, 38, 0.12) 0%, transparent 70%)`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              willChange: 'transform',
            }}
          />
        ))}
      </div>

      {/* Main Content with optimized parallax */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20"
        style={{ y, opacity, willChange: 'transform, opacity' }}
      >
        
        {/* Optimized Title Animation */}
        <div className="text-center mb-8">
          <div className="overflow-hidden mb-4">
            <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold flex flex-wrap justify-center gap-4">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block overflow-hidden">
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: (wordIndex * 0.2) + (charIndex * 0.03),
                        ease: [0.43, 0.13, 0.23, 0.96],
                      }}
                      className="inline-block"
                      style={{
                        background: 'linear-gradient(135deg, #fff 0%, #ff0000 50%, #ff6b6b 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        willChange: 'transform',
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-4 font-light"
          >
            Premium Companionship Service
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center justify-center gap-2 text-red-500"
          >
            <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-red-500" />
            <span className="text-sm tracking-widest animate-pulse-slow">EXCLUSIVE</span>
            <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-red-500" />
          </motion.div>
        </div>

        {/* Simplified CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="relative group px-8 py-4 rounded-full font-semibold text-white overflow-hidden bg-gradient-to-r from-red-600 to-red-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative flex items-center gap-2 z-10">
                <span className="text-xl">💬</span>
                Contact on WhatsApp
              </span>
            </motion.button>
          </a>

          <a href="tel:+1234567890">
            <motion.button
              className="relative px-8 py-4 rounded-full font-semibold text-white border-2 border-red-500/50 hover:border-red-500 backdrop-blur-sm bg-black/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative flex items-center gap-2 z-10">
                <span className="text-xl">📞</span>
                Call Now
              </span>
            </motion.button>
          </a>
        </motion.div>

        {/* Optimized indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="flex gap-3"
        >
          {placeholders.map((_, index) => (
            <button
              key={`indicator-${index}`}
              onClick={() => {
                setDirection(index > currentVideo ? 1 : -1);
                setCurrentVideo(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentVideo
                  ? 'w-16 bg-red-600'
                  : 'w-8 bg-gray-600/50 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Simplified Navigation Buttons */}
      <motion.button
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        onClick={prevVideo}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-sm border border-red-600/30 hover:border-red-600 rounded-full p-4 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        onClick={nextVideo}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-sm border border-red-600/30 hover:border-red-600 rounded-full p-4 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Simplified Bottom Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600/50 to-transparent animate-pulse-slow" />

        <svg className="absolute top-0 left-0 w-full h-full opacity-70" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="crackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dc2626" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,10 L100,30 L200,15 L300,35 L400,20 L500,40 L600,25 L700,45 L800,30 L900,50 L1000,35 L1100,55 L1200,40 L1200,100 L0,100 Z"
            fill="url(#crackGrad)"
          />
        </svg>

        {/* Reduced particles (from 15 to 6) */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute bottom-0 rounded-full animate-float-up"
            style={{ 
              left: `${i * 16 + 8}%`,
              width: '4px',
              height: '4px',
              background: 'radial-gradient(circle, #dc2626, transparent)',
              animationDelay: `${i * 0.5}s`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>

      {/* Simplified Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-40 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-3 text-gray-400 animate-bounce-slow">
          <span className="text-xs tracking-[0.3em] font-light">SCROLL</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;