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

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const placeholders = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80',
    'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80',
  ];

  // Reduced particles
  const smokeParticles = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      width: 120 + (i * 20),
      height: 120 + (i * 20),
      left: (i * 16) % 100,
      top: (i * 15) % 100,
      duration: 18 + (i % 4),
      delay: i * 0.8,
    }));
  }, []);

  // Smooth slide variants
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

  // ✅ SCROLL FUNCTION - Smooth scroll to next section
  const scrollToNext = () => {
    const nextSection = document.querySelector('#gallery') || document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    if (isHovering) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentVideo((prev) => (prev + 1) % placeholders.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [placeholders.length, isHovering]);

  const titleText = "Jaipur Call Girls";
  const words = titleText.split(" ");

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
      style={{ willChange: 'transform' }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      
      {/* Optimized Image Carousel */}
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
                stiffness: 200, 
                damping: 35,
                mass: 0.8,
              },
              opacity: { duration: 0.4, ease: "easeOut" },
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
            
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Base overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />
      
      {/* CSS-animated smoke particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {smokeParticles.map((particle) => (
          <div
            key={`smoke-${particle.id}`}
            className="absolute rounded-full animate-float-smooth"
            style={{
              width: particle.width,
              height: particle.height,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              background: `radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, transparent 70%)`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              willChange: 'transform',
              filter: 'blur(40px)',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20"
        style={{ y, opacity, willChange: 'transform, opacity' }}
      >
        
        {/* Smooth Title Animation */}
        <div className="text-center mb-8">
          <div className="overflow-hidden mb-4">
            <motion.h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold flex flex-wrap justify-center gap-2 md:gap-4">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block overflow-hidden">
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: (wordIndex * 0.15) + (charIndex * 0.025),
                        ease: [0.33, 1, 0.68, 1], // Smoother easing
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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 font-light"
          >
            Premium Companionship Service
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.9, ease: "easeOut" }}
            className="flex items-center justify-center gap-2 text-red-500"
          >
            <span className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-transparent to-red-500" />
            <span className="text-xs sm:text-sm tracking-widest animate-pulse-slow">EXCLUSIVE</span>
            <span className="w-8 sm:w-12 h-[2px] bg-gradient-to-l from-transparent to-red-500" />
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
          className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-10 sm:mb-12"
        >
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="relative group px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white text-sm sm:text-base overflow-hidden bg-gradient-to-r from-red-600 to-red-500 shadow-lg shadow-red-500/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <span className="relative flex items-center gap-2 z-10">
                <span className="text-lg sm:text-xl">💬</span>
                <span className="hidden xs:inline">Contact on WhatsApp</span>
                <span className="xs:hidden">WhatsApp</span>
              </span>
            </motion.button>
          </a>

          <a href="tel:+1234567890">
            <motion.button
              className="relative px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white text-sm sm:text-base border-2 border-red-500/50 hover:border-red-500 backdrop-blur-sm bg-black/30 hover:bg-black/50 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <span className="relative flex items-center gap-2 z-10">
                <span className="text-lg sm:text-xl">📞</span>
                Call Now
              </span>
            </motion.button>
          </a>
        </motion.div>

        {/* Progress indicators */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.4, ease: "easeOut" }}
          className="flex gap-2 sm:gap-3"
        >
          {placeholders.map((_, index) => (
            <motion.button
              key={`indicator-${index}`}
              onClick={() => {
                setDirection(index > currentVideo ? 1 : -1);
                setCurrentVideo(index);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ${
                index === currentVideo
                  ? 'w-12 sm:w-16 bg-red-600 shadow-lg shadow-red-500/50'
                  : 'w-6 sm:w-8 bg-gray-600/50 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Navigation Buttons */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.4, ease: "easeOut" }}
        onClick={prevVideo}
        className="absolute left-3 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 backdrop-blur-sm border border-red-600/30 hover:border-red-600 hover:bg-black/70 rounded-full p-3 sm:p-4 transition-all active:scale-90"
        whileHover={{ scale: 1.1, x: -3 }}
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.4, ease: "easeOut" }}
        onClick={nextVideo}
        className="absolute right-3 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 backdrop-blur-sm border border-red-600/30 hover:border-red-600 hover:bg-black/70 rounded-full p-3 sm:p-4 transition-all active:scale-90"
        whileHover={{ scale: 1.1, x: 3 }}
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Bottom Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 pointer-events-none">
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

        {/* Reduced particles */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute bottom-0 w-1 h-1 rounded-full animate-float-up"
            style={{ 
              left: `${i * 20 + 10}%`,
              background: 'radial-gradient(circle, #dc2626, transparent)',
              animationDelay: `${i * 0.6}s`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>

      {/* ✅ WORKING SCROLL BUTTON */}
      <motion.button
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
        onClick={scrollToNext}
        className="absolute bottom-32 sm:bottom-40 left-1/2 -translate-x-1/2 z-10 group cursor-pointer"
        whileHover={{ scale: 1.1, y: 5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center gap-2 sm:gap-3 text-gray-400 group-hover:text-white transition-colors">
          <motion.div
            className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-black/50 backdrop-blur-sm border border-red-500/30 group-hover:border-red-500 transition-all"
            animate={{ 
              boxShadow: [
                '0 0 0px rgba(220, 38, 38, 0)',
                '0 0 20px rgba(220, 38, 38, 0.4)',
                '0 0 0px rgba(220, 38, 38, 0)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-[10px] sm:text-xs tracking-[0.3em] font-medium">SCROLL</span>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.button>

      {/* Optimized CSS Animations */}
      <style jsx global>{`
        @keyframes float-smooth {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-8px, -12px) scale(1.05); }
          50% { transform: translate(8px, -20px) scale(1.1); }
          75% { transform: translate(-4px, -12px) scale(1.05); }
        }
        
        @keyframes float-up {
          0% { 
            transform: translateY(0) scale(1); 
            opacity: 1; 
          }
          100% { 
            transform: translateY(-120px) scale(0.3); 
            opacity: 0; 
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .animate-float-smooth {
          animation: float-smooth linear infinite;
        }
        
        .animate-float-up {
          animation: float-up 4s ease-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* GPU acceleration */
        .will-change {
          will-change: transform, opacity;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default Hero;