'use client';

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  // ============ STATE MANAGEMENT ============
  const [videoState, setVideoState] = useState({
    isLoaded: false,
    isPlayable: false,
    error: false,
    retries: 0,
  });

  const [smokeParticles, setSmokeParticles] = useState([]);
  const [isClient, setIsClient] = useState(false);

  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const retryTimeoutRef = useRef(null);

  const MAX_RETRIES = 3;
  const RETRY_DELAY = 1000;

  // ============ DETERMINISTIC RANDOM (SEED-BASED) ============
  const seededRandom = useCallback((seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }, []);

  // ============ INITIALIZE PARTICLES ON CLIENT ONLY ============
  useEffect(() => {
    setIsClient(true);

    const particles = Array.from({ length: 3 }, (_, i) => {
      const seed = i * 12.9898 + 78.233;
      return {
        id: i,
        width: 150 + i * 20,
        height: 150 + i * 20,
        left: seededRandom(seed * 1.2) * 100,
        top: seededRandom(seed * 2.3) * 50,
        duration: 20 + (i % 3) * 5,
        delay: i * 1.5,
      };
    });

    setSmokeParticles(particles);
  }, [seededRandom]);

  // ============ SCROLL ANIMATIONS ============
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // ============ VIDEO LOADING HANDLER ============
  const handleVideoCanPlay = useCallback(() => {
    console.log('✅ Video ready to play');
    setVideoState(prev => ({
      ...prev,
      isPlayable: true,
      isLoaded: true,
      error: false,
      retries: 0,
    }));

    if (retryTimeoutRef.current) {
      clearTimeout(retryTimeoutRef.current);
    }
  }, []);

  const handleVideoError = useCallback((error) => {
    console.error('❌ Video error:', error?.target?.error?.code);
    setVideoState(prev => ({
      ...prev,
      error: true,
      isPlayable: false,
    }));

    if (videoState.retries < MAX_RETRIES) {
      retryTimeoutRef.current = setTimeout(() => {
        console.log(`🔄 Retrying video... (${videoState.retries + 1}/${MAX_RETRIES})`);
        if (videoRef.current) {
          videoRef.current.load();
          setVideoState(prev => ({
            ...prev,
            retries: prev.retries + 1,
          }));
        }
      }, RETRY_DELAY);
    }
  }, [videoState.retries]);

  const attemptVideoPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('▶️ Video playing');
        })
        .catch(error => {
          console.warn('⚠️ Autoplay blocked:', error.name);
          const playOnClick = () => {
            video.play().catch(e => console.log('Manual play failed:', e));
            document.removeEventListener('click', playOnClick);
            document.removeEventListener('touchstart', playOnClick);
          };
          document.addEventListener('click', playOnClick, { once: true });
          document.addEventListener('touchstart', playOnClick, { once: true });
        });
    }
  }, []);

  // ============ VIDEO LIFECYCLE ============
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.addEventListener('canplay', handleVideoCanPlay);
    video.addEventListener('error', handleVideoError);

    attemptVideoPlay();

    return () => {
      video.removeEventListener('canplay', handleVideoCanPlay);
      video.removeEventListener('error', handleVideoError);
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
    };
  }, [handleVideoCanPlay, handleVideoError, attemptVideoPlay]);

  // ============ SCROLL TO NEXT SECTION ============
  const scrollToNext = useCallback(() => {
    const nextSection = document.querySelector('#gallery') ||
      document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // ============ TITLE ANIMATION DATA ============
  const titleText = "Escort Jaipur All";
  const words = titleText.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
      aria-label="Hero section"
    >
      {/* ============ VIDEO BACKGROUND - FAST LOADING ============ */}
      <div className="absolute inset-0 z-0">
        {/* Fast loading video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/video-poster.jpg"
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-out ${
            videoState.isPlayable && !videoState.error ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            WebkitTransform: 'translate3d(0, 0, 0)',
          }}
          onLoadedMetadata={() => console.log('Metadata loaded')}
          onCanPlay={handleVideoCanPlay}
          onError={handleVideoError}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source src="/videos/hero-bg.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Fallback Animated Background */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            videoState.isPlayable && !videoState.error ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black to-red-950">
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(45deg, #000 0%, #500 25%, #000 50%, #500 75%, #000 100%)',
                backgroundSize: '400% 400%',
              }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {videoState.error && videoState.retries >= MAX_RETRIES && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
              <div className="text-center text-white/60 px-4">
                <p className="text-xs font-light">Using animated background</p>
              </div>
            </div>
          )}
        </div>

        {/* Top Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/40 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,black_80%)] pointer-events-none z-[2]" />

        {/* ============ BOTTOM SHADOW - STRONG ============ */}
        <div className="absolute bottom-0 left-0 right-0 h-full pointer-events-none z-[3]">
          {/* Main shadow gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
          
          {/* Enhanced bottom shadow */}
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent" />
          
          {/* Extra dark shadow layer */}
          <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-black/95 to-transparent" />
          
          {/* Vignette shadow */}
          <div className="absolute inset-0 bg-radial-gradient(circle at bottom, rgba(0,0,0,0.8) 0%, transparent 60%)" style={{
            background: 'radial-gradient(ellipse at bottom, rgba(0,0,0,0.8) 0%, transparent 60%)'
          }} />
        </div>
      </div>

      {/* ============ SMOKE PARTICLES - HYDRATION SAFE ============ */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[4]">
          {smokeParticles.map((particle) => (
            <motion.div
              key={`smoke-${particle.id}`}
              className="absolute rounded-full"
              style={{
                width: particle.width,
                height: particle.height,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                background: `radial-gradient(circle, rgba(220, 38, 38, 0.05) 0%, transparent 70%)`,
                filter: 'blur(60px)',
                willChange: 'transform',
              }}
              animate={{
                y: [-30, -150],
                x: [0, 30],
                opacity: [0.3, 0.6, 0.1],
                scale: [1, 1.2, 0.8],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}

      {/* ============ MAIN CONTENT ============ */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-24 sm:pt-32"
        style={{ y, opacity }}
      >
        {/* TITLE */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 leading-tight">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block overflow-hidden">
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: wordIndex * 0.15 + charIndex * 0.02,
                        ease: [0.33, 1, 0.68, 1],
                      }}
                      className="inline-block bg-gradient-to-r from-white via-red-400 to-white bg-clip-text text-transparent"
                      style={{
                        backgroundSize: '200% auto',
                        filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.5))',
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-xl text-white mb-6 font-light tracking-wide"
            style={{
              textShadow: '0 2px 15px rgba(0,0,0,0.9)',
            }}
          >
            Premium Companionship Service
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
            className="flex items-center justify-center gap-3"
          >
            <motion.span
              className="h-[2px] bg-gradient-to-r from-transparent to-red-500"
              style={{ width: 32 }}
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              className="text-xs sm:text-sm text-red-400 tracking-wider font-bold whitespace-nowrap"
              style={{
                textShadow: '0 0 15px rgba(220, 38, 38, 0.8)',
              }}
              animate={{
                textShadow: [
                  '0 0 10px rgba(220, 38, 38, 0.5)',
                  '0 0 20px rgba(220, 38, 38, 0.9)',
                  '0 0 10px rgba(220, 38, 38, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              EXCLUSIVE • 24/7 • VERIFIED
            </motion.span>
            <motion.span
              className="h-[2px] bg-gradient-to-l from-transparent to-red-500"
              style={{ width: 32 }}
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 w-full max-w-2xl"
        >
          <a
            href="https://wa.me/918058457070"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
            aria-label="Contact via WhatsApp"
          >
            <motion.button
              className="w-full relative px-8 py-5 rounded-2xl font-bold text-white text-base overflow-hidden bg-gradient-to-r from-green-600 to-green-500 shadow-2xl shadow-green-500/50 border border-green-400/50 group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2">
                <span>💬</span>
                <span>WhatsApp Now</span>
              </span>
            </motion.button>
          </a>

          <a
            href="tel:+918058457070"
            className="flex-1"
            aria-label="Call us"
          >
            <motion.button
              className="w-full relative px-8 py-5 rounded-2xl font-bold text-white text-base border-2 border-red-500 backdrop-blur-xl bg-black/60 hover:bg-red-600/30 transition-all shadow-2xl hover:shadow-red-500/50 group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <span className="relative flex items-center justify-center gap-2">
                <span>📞</span>
                <span className="hidden sm:inline">Call: 8058457070</span>
                <span className="sm:hidden">Call Now</span>
              </span>
            </motion.button>
          </a>
        </motion.div>

        {/* FEATURES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl"
        >
          {[
            { icon: '✅', text: 'Verified' },
            { icon: '🔒', text: 'Discreet' },
            { icon: '💰', text: 'No Advance' },
            { icon: '⚡', text: 'Quick' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.3 + idx * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-black/80 backdrop-blur-xl border border-white/20 hover:border-red-500/60 transition-all"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-xs font-bold text-white">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ============ SCROLL BUTTON ============ */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={scrollToNext}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        whileHover={{ scale: 1.15, y: 5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center gap-3">
          <motion.div
            className="px-7 py-2.5 rounded-full bg-black/90 backdrop-blur-xl border-2 border-red-500/60 hover:border-red-500 transition-all shadow-2xl shadow-red-500/30"
            animate={{
              boxShadow: [
                '0 0 0px rgba(220, 38, 38, 0)',
                '0 0 30px rgba(220, 38, 38, 0.7)',
                '0 0 0px rgba(220, 38, 38, 0)',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <span className="text-xs tracking-widest font-bold text-white">EXPLORE</span>
          </motion.div>

          <motion.svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 0 8px rgba(220, 38, 38, 0.8))' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </div>
      </motion.button>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;