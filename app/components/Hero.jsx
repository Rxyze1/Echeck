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

    const particles = Array.from({ length: 5 }, (_, i) => {
      const seed = i * 12.9898 + 78.233;
      return {
        id: i,
        width: 200 + i * 30,
        height: 200 + i * 30,
        left: seededRandom(seed * 1.2) * 100,
        top: seededRandom(seed * 2.3) * 60,
        duration: 25 + (i % 3) * 8,
        delay: i * 1.2,
      };
    });

    setSmokeParticles(particles);
  }, [seededRandom]);

  // ============ SCROLL ANIMATIONS ============
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

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
      {/* ============ VIDEO BACKGROUND ============ */}
      <div className="absolute inset-0 z-0">
        {/* Video */}
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
        </video>

        {/* Fallback Background */}
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
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,black_85%)] pointer-events-none z-[2]" />

        {/* Bottom Shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-full pointer-events-none z-[3]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-black/95 to-transparent" />
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at bottom, rgba(0,0,0,0.9) 0%, transparent 65%)',
            }}
          />
        </div>
      </div>

      {/* ============ SMOKE PARTICLES ============ */}
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
                background: `radial-gradient(circle, rgba(220, 38, 38, 0.08) 0%, transparent 70%)`,
                filter: 'blur(80px)',
                willChange: 'transform',
              }}
              animate={{
                y: [-40, -200],
                x: [0, 50],
                opacity: [0.2, 0.7, 0.05],
                scale: [0.8, 1.3, 0.6],
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
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20 sm:pt-32"
        style={{ y, opacity }}
      >
        {/* TITLE */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 leading-tight">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block overflow-hidden">
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      initial={{ y: 120, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: wordIndex * 0.12 + charIndex * 0.03,
                        ease: [0.33, 1, 0.68, 1],
                      }}
                      className="inline-block bg-gradient-to-r from-white via-red-300 to-white bg-clip-text text-transparent"
                      style={{
                        backgroundSize: '200% auto',
                        filter: 'drop-shadow(0 0 25px rgba(220, 38, 38, 0.6))',
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
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-xl text-white mb-4 font-light tracking-wide"
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.95)',
            }}
          >
            Premium Companionship Service
          </motion.p>

          {/* Animated Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}
            className="flex items-center justify-center gap-4"
          >
            <motion.span
              className="h-[2px] bg-gradient-to-r from-transparent to-red-500"
              style={{ width: 40 }}
              animate={{ scaleX: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              className="text-xs sm:text-sm text-red-400 tracking-widest font-bold whitespace-nowrap"
              style={{
                textShadow: '0 0 20px rgba(220, 38, 38, 0.9)',
              }}
              animate={{
                textShadow: [
                  '0 0 15px rgba(220, 38, 38, 0.5)',
                  '0 0 25px rgba(220, 38, 38, 1)',
                  '0 0 15px rgba(220, 38, 38, 0.5)',
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              EXCLUSIVE • 24/7 • VERIFIED
            </motion.span>
            <motion.span
              className="h-[2px] bg-gradient-to-l from-transparent to-red-500"
              style={{ width: 40 }}
              animate={{ scaleX: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>

        {/* CTA BUTTONS - PILL SHAPED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-5 justify-center mb-8 w-full max-w-2xl"
        >
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918058457070"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-xs"
            aria-label="Contact via WhatsApp"
          >
            <motion.button
              className="w-full relative px-8 py-4 rounded-full font-bold text-white text-sm sm:text-base overflow-hidden bg-gradient-to-r from-green-600 to-green-500 shadow-2xl shadow-green-500/60 border-2 border-green-400/50 group"
              whileHover={{
                scale: 1.08,
                y: -4,
                boxShadow: '0 20px 40px rgba(34, 197, 94, 0.8)',
              }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300 -z-10" />

              <span className="relative flex items-center justify-center gap-2 z-10">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💬
                </motion.span>
                <span>WhatsApp Now</span>
              </span>
            </motion.button>
          </a>

          {/* Call Button */}
          <a href="tel:+918058457070" className="flex-1 max-w-xs" aria-label="Call us">
            <motion.button
              className="w-full relative px-8 py-4 rounded-full font-bold text-white text-sm sm:text-base border-2 border-red-500/70 backdrop-blur-xl bg-black/50 hover:bg-red-600/30 transition-all shadow-2xl shadow-red-600/40 group overflow-hidden"
              whileHover={{
                scale: 1.08,
                y: -4,
                boxShadow: '0 20px 40px rgba(239, 68, 68, 0.8)',
              }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300 -z-10" />

              <span className="relative flex items-center justify-center gap-2 z-10">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                >
                  📞
                </motion.span>
                <span className="hidden sm:inline">Call: 8058457070</span>
                <span className="sm:hidden">Call Now</span>
              </span>
            </motion.button>
          </a>
        </motion.div>

        {/* Stats Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex items-center justify-center gap-8 mt-6 text-center flex-wrap"
        >
          <div className="group">
            <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              88+
            </p>
            <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition">Areas</p>
          </div>
          <div className="w-px h-10 bg-red-500/30" />
          <div className="group">
            <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              24/7
            </p>
            <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition">Available</p>
          </div>
          <div className="w-px h-10 bg-red-500/30" />
          <div className="group">
            <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              100%
            </p>
            <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition">Verified</p>
          </div>
        </motion.div>
      </motion.div>

      {/* ============ SCROLL BUTTON ============ */}
      <motion.button
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        onClick={scrollToNext}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        whileHover={{ scale: 1.2, y: 8 }}
        whileTap={{ scale: 0.85 }}
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center gap-3">
          {/* Button */}
          <motion.div
            className="px-7 py-3 rounded-full bg-black/90 backdrop-blur-xl border-2 border-red-500/70 hover:border-red-400 transition-all shadow-2xl shadow-red-500/40 group"
            animate={{
              boxShadow: [
                '0 0 10px rgba(220, 38, 38, 0.3)',
                '0 0 40px rgba(220, 38, 38, 0.8)',
                '0 0 10px rgba(220, 38, 38, 0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300 -z-10" />

            <span className="text-xs tracking-widest font-bold text-white">EXPLORE</span>
          </motion.div>

          {/* Arrow */}
          <motion.svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 0 10px rgba(220, 38, 38, 0.9))' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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