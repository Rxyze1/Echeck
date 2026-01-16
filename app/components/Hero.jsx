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

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const placeholders = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200',
    'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200',
  ];

  // Enhanced smoke particles with more variety
  const smokeParticles = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      width: 80 + (i * 12),
      height: 80 + (i * 15),
      left: (i * 4.2) % 100,
      top: (i * 4.5) % 100,
      x: [
        (i % 3) * 25 - 35,
        ((i + 1) % 3) * 30 - 40,
        ((i + 2) % 3) * 25 - 35,
        (i % 3) * 25 - 35
      ],
      y: [
        (i % 4) * 20 - 30,
        ((i + 1) % 4) * 25 - 35,
        ((i + 2) % 4) * 20 - 30,
        (i % 4) * 20 - 30
      ],
      scale: [1, 1.3, 1.1, 1],
      opacity: [0.15, 0.35, 0.2, 0.15],
      duration: 12 + (i % 8),
      delay: i * 0.3,
    }));
  }, []);

  // Ultra smooth slide variants with custom easing
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1,
      rotateY: direction > 0 ? 15 : -15,
      filter: 'blur(10px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: 'blur(0px)',
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? -15 : 15,
      filter: 'blur(10px)',
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

  // Stagger animation for title letters
  const titleText = "Rent A Girlfriend";
  const words = titleText.split(" ");

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      
      {/* Video/Image Carousel with parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ scale }}
      >
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
                mass: 0.8 
              },
              opacity: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
              scale: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
              rotateY: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
              filter: { duration: 0.5 },
            }}
            className="absolute inset-0"
          >
            <Image
              src={placeholders[currentVideo]}
              alt={`Slide ${currentVideo + 1}`}
              fill
              className="object-cover"
              priority
            />
            
            {/* Enhanced gradient overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Radial gradient for spotlight effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Enhanced multi-layer smoke overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-red-950/10 to-transparent pointer-events-none" />
      
      {/* Animated smoke particles with improved motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {smokeParticles.map((particle) => (
          <motion.div
            key={`smoke-${particle.id}`}
            className="absolute rounded-full"
            style={{
              width: particle.width,
              height: particle.height,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              background: `radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, transparent 70%)`,
            }}
            animate={{
              x: particle.x,
              y: particle.y,
              scale: particle.scale,
              opacity: particle.opacity,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Main Content with parallax */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20"
        style={{ y, opacity }}
      >
        
        {/* Animated Title with word-by-word animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="overflow-hidden mb-4">
            <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold flex flex-wrap justify-center gap-4">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block overflow-hidden">
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      initial={{ y: 100, opacity: 0, rotateX: 90 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: (wordIndex * 0.3) + (charIndex * 0.05),
                        ease: [0.43, 0.13, 0.23, 0.96],
                      }}
                      className="inline-block"
                      style={{
                        background: 'linear-gradient(135deg, #fff 0%, #ff0000 50%, #ff6b6b 100%)',
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
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
            transition={{ duration: 0.8, delay: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="text-xl md:text-2xl text-gray-300 mb-4 font-light"
          >
            Premium Companionship Service
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5, ease: "backOut" }}
            className="flex items-center justify-center gap-2 text-red-500"
          >
            <motion.span 
              className="w-12 h-[2px] bg-gradient-to-r from-transparent to-red-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            />
            <motion.span 
              className="text-sm tracking-widest"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              EXCLUSIVE
            </motion.span>
            <motion.span 
              className="w-12 h-[2px] bg-gradient-to-l from-transparent to-red-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            />
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="relative group px-8 py-4 rounded-full font-semibold text-white overflow-hidden"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Animated gradient background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% 100%' }}
              />
              
              {/* Hover glow effect */}
              <motion.div 
                className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-500 blur-xl"
                initial={false}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              
              <span className="relative flex items-center gap-2 z-10">
                <span className="text-xl">💬</span>
                Contact on WhatsApp
              </span>
            </motion.button>
          </a>

          <a href="tel:+1234567890">
            <motion.button
              className="relative px-8 py-4 rounded-full font-semibold text-white border-2 border-red-500/50 hover:border-red-500 backdrop-blur-sm overflow-hidden group"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Hover background */}
              <motion.div 
                className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10"
                transition={{ duration: 0.3 }}
              />
              
              <span className="relative flex items-center gap-2 z-10">
                <span className="text-xl">📞</span>
                Call Now
              </span>
            </motion.button>
          </a>
        </motion.div>

        {/* Enhanced Video indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="flex gap-3"
        >
          {placeholders.map((_, index) => (
            <motion.button
              key={`indicator-${index}`}
              onClick={() => {
                setDirection(index > currentVideo ? 1 : -1);
                setCurrentVideo(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 relative overflow-hidden ${
                index === currentVideo
                  ? 'w-16 bg-red-600'
                  : 'w-8 bg-gray-600/50 hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentVideo && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600"
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              )}
              
              {/* Glow effect */}
              {index === currentVideo && (
                <motion.div
                  className="absolute inset-0 bg-red-500 blur-md"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Navigation Buttons */}
      <motion.button
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        onClick={prevVideo}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 group"
        whileHover={{ scale: 1.15, x: -8 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous slide"
      >
        <div className="relative">
          {/* Glow effect */}
          <motion.div 
            className="absolute inset-0 bg-red-600 blur-2xl opacity-0 group-hover:opacity-70"
            transition={{ duration: 0.3 }}
          />
          
          {/* Button background */}
          <motion.div 
            className="relative bg-black/40 backdrop-blur-xl border-2 border-red-600/20 group-hover:border-red-600 group-hover:bg-black/60 rounded-full p-4 transition-all duration-300"
            whileHover={{ rotate: -5 }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.div>
          
          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 border-2 border-red-600/50 rounded-full"
            initial={{ scale: 1, opacity: 0 }}
            whileHover={{ scale: 1.5, opacity: [0, 0.5, 0] }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        onClick={nextVideo}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 group"
        whileHover={{ scale: 1.15, x: 8 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next slide"
      >
        <div className="relative">
          <motion.div 
            className="absolute inset-0 bg-red-600 blur-2xl opacity-0 group-hover:opacity-70"
            transition={{ duration: 0.3 }}
          />
          
          <motion.div 
            className="relative bg-black/40 backdrop-blur-xl border-2 border-red-600/20 group-hover:border-red-600 group-hover:bg-black/60 rounded-full p-4 transition-all duration-300"
            whileHover={{ rotate: 5 }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
          
          <motion.div
            className="absolute inset-0 border-2 border-red-600/50 rounded-full"
            initial={{ scale: 1, opacity: 0 }}
            whileHover={{ scale: 1.5, opacity: [0, 0.5, 0] }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </motion.button>

      {/* Enhanced Crack Effect at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        {/* Glowing line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent"
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scaleX: [0.8, 1, 0.8]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="crackGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dc2626" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#ef4444" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Main crack shape */}
          <motion.path
            d="M0,10 L100,30 L200,15 L300,35 L400,20 L500,40 L600,25 L700,45 L800,30 L900,50 L1000,35 L1100,55 L1200,40 L1200,100 L0,100 Z"
            fill="url(#crackGradient)"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
            }}
            transition={{ duration: 2.5, delay: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
          />

          {/* Crack lines with stagger */}
          {['M150,0 L150,50', 'M400,0 L400,60', 'M650,0 L650,45', 'M900,0 L900,55', 'M300,0 L300,40', 'M750,0 L750,50'].map((path, i) => (
            <motion.path
              key={`crack-${i}`}
              d={path}
              stroke="#dc2626"
              strokeWidth="2"
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0, 1, 0.6, 0.8, 0.5] 
              }}
              transition={{
                pathLength: { duration: 1.5, delay: 2.2 + i * 0.15, ease: [0.43, 0.13, 0.23, 0.96] },
                opacity: { duration: 3, repeat: Infinity, repeatType: 'reverse', delay: i * 0.2 }
              }}
            />
          ))}
        </svg>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute bottom-0 rounded-full blur-sm"
            style={{ 
              left: `${i * 6.67 + 3}%`,
              width: `${4 + (i % 3)}px`,
              height: `${4 + (i % 3)}px`,
              background: 'radial-gradient(circle, #dc2626, transparent)',
            }}
            animate={{
              y: [0, -120, -100],
              x: [(i % 3 - 1) * 20, (i % 3 - 1) * 30, (i % 3 - 1) * 20],
              opacity: [0.9, 0.6, 0],
              scale: [1, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + (i % 3),
              delay: i * 0.25,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-40 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3 text-gray-400"
        >
          <motion.span 
            className="text-xs tracking-[0.3em] font-light"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SCROLL
          </motion.span>
          
          <motion.div
            className="relative"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 blur-lg"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;