'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  // ============ STATE MANAGEMENT ============
  const [videoState, setVideoState] = useState({
    isLoaded: false,
    isPlayable: false,
    error: false,
    retries: 0,
  });

  const [isClient, setIsClient] = useState(false);

  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const retryTimeoutRef = useRef(null);

  const MAX_RETRIES = 3;
  const RETRY_DELAY = 1000;

  // ============ INITIALIZE CLIENT ============
  useEffect(() => {
    setIsClient(true);
  }, []);

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
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: '#0a0a0a' }}
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
          style={{ 
            background: 'radial-gradient(circle at top right, #f26a8d 0%, #880d1e 50%, #0a0a0a 100%)' 
          }}
        />

        {/* Premium Gradient Overlays */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            background: 'linear-gradient(135deg, rgba(136, 13, 30, 0.4) 0%, rgba(10, 10, 10, 0.6) 50%, rgba(136, 13, 30, 0.4) 100%)' 
          }} 
        />
        
        {/* Vignette Effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 10, 0.4) 70%, rgba(10, 10, 10, 0.8) 100%)'
          }}
        />
      </div>

      {/* ============ MAIN CONTENT ============ */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20 sm:pt-32"
        style={{ y, opacity }}
      >
        {/* TITLE */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-10">
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 leading-tight"
              style={{
                letterSpacing: '-0.02em',
              }}
            >
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
                      className="inline-block text-white"
                      style={{
                        textShadow: '0 2px 20px rgba(242, 106, 141, 0.3), 0 0 60px rgba(136, 13, 30, 0.2)',
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
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 font-light"
            style={{
              letterSpacing: '0.05em',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            }}
          >
            Premium Companionship Service
          </motion.p>

          {/* Elegant Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}
            className="flex items-center justify-center gap-4"
          >
            <motion.div 
              className="h-[1px]"
              style={{ 
                width: 50,
                background: 'linear-gradient(to right, transparent, #f26a8d, transparent)',
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span 
              className="text-xs sm:text-sm tracking-[0.3em] font-semibold whitespace-nowrap uppercase" 
              style={{ 
                color: '#f26a8d',
                textShadow: '0 0 20px rgba(242, 106, 141, 0.5)',
              }}
            >
              Exclusive • 24/7 • Verified
            </span>
            <motion.div 
              className="h-[1px]"
              style={{ 
                width: 50,
                background: 'linear-gradient(to left, transparent, #f26a8d, transparent)',
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>

        {/* PREMIUM CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-5 justify-center mb-10 w-full max-w-2xl"
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
              className="w-full px-8 py-4 rounded-full font-bold text-white text-sm sm:text-base relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -3,
                boxShadow: '0 12px 40px rgba(37, 211, 102, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <span className="relative flex items-center justify-center gap-2" style={{ letterSpacing: '0.05em' }}>
                <span>💬</span>
                <span>WhatsApp Now</span>
              </span>
            </motion.button>
          </a>

          {/* Call Button */}
          <a href="tel:+918058457070" className="flex-1 max-w-xs" aria-label="Call us">
            <motion.button
              className="w-full px-8 py-4 rounded-full font-bold text-white text-sm sm:text-base relative overflow-hidden backdrop-blur-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(242, 106, 141, 0.25) 0%, rgba(136, 13, 30, 0.25) 100%)',
                border: '1px solid rgba(242, 106, 141, 0.5)',
                boxShadow: '0 8px 32px rgba(242, 106, 141, 0.2), 0 2px 8px rgba(0, 0, 0, 0.2)',
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -3,
                background: 'linear-gradient(135deg, rgba(242, 106, 141, 0.35) 0%, rgba(136, 13, 30, 0.35) 100%)',
                boxShadow: '0 12px 40px rgba(242, 106, 141, 0.35), 0 4px 12px rgba(0, 0, 0, 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <span className="relative flex items-center justify-center gap-2" style={{ letterSpacing: '0.05em' }}>
                <span>📞</span>
                <span className="hidden sm:inline">Call: 8058457070</span>
                <span className="sm:hidden">Call Now</span>
              </span>
            </motion.button>
          </a>
        </motion.div>

        {/* PREMIUM STATS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex items-center justify-center gap-8 sm:gap-12 mt-8 text-center flex-wrap"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <p 
              className="text-3xl md:text-4xl font-black mb-1" 
              style={{ 
                color: '#f26a8d',
                textShadow: '0 0 30px rgba(242, 106, 141, 0.4)',
                letterSpacing: '-0.02em',
              }}
            >
              88+
            </p>
            <p 
              className="text-xs md:text-sm text-white/70 font-medium"
              style={{ letterSpacing: '0.1em' }}
            >
              AREAS
            </p>
          </motion.div>
          
          <div 
            className="w-[1px] h-12" 
            style={{ 
              background: 'linear-gradient(to bottom, transparent, rgba(242, 106, 141, 0.5), transparent)' 
            }} 
          />
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <p 
              className="text-3xl md:text-4xl font-black mb-1" 
              style={{ 
                color: '#f26a8d',
                textShadow: '0 0 30px rgba(242, 106, 141, 0.4)',
                letterSpacing: '-0.02em',
              }}
            >
              24/7
            </p>
            <p 
              className="text-xs md:text-sm text-white/70 font-medium"
              style={{ letterSpacing: '0.1em' }}
            >
              AVAILABLE
            </p>
          </motion.div>
          
          <div 
            className="w-[1px] h-12" 
            style={{ 
              background: 'linear-gradient(to bottom, transparent, rgba(242, 106, 141, 0.5), transparent)' 
            }} 
          />
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <p 
              className="text-3xl md:text-4xl font-black mb-1" 
              style={{ 
                color: '#f26a8d',
                textShadow: '0 0 30px rgba(242, 106, 141, 0.4)',
                letterSpacing: '-0.02em',
              }}
            >
              100%
            </p>
            <p 
              className="text-xs md:text-sm text-white/70 font-medium"
              style={{ letterSpacing: '0.1em' }}
            >
              VERIFIED
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ============ PREMIUM SCROLL BUTTON ============ */}
      <motion.button
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        onClick={scrollToNext}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 cursor-pointer group"
        whileHover={{ scale: 1.1, y: 5 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center gap-4">
          <motion.div
            className="px-8 py-3 rounded-full backdrop-blur-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(242, 106, 141, 0.15) 0%, rgba(136, 13, 30, 0.15) 100%)',
              border: '1px solid rgba(242, 106, 141, 0.3)',
              boxShadow: '0 4px 24px rgba(242, 106, 141, 0.15)',
            }}
            animate={{
              boxShadow: [
                '0 4px 24px rgba(242, 106, 141, 0.15)',
                '0 6px 32px rgba(242, 106, 141, 0.3)',
                '0 4px 24px rgba(242, 106, 141, 0.15)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span 
              className="text-xs tracking-[0.2em] font-bold text-white uppercase"
              style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
            >
              Explore
            </span>
          </motion.div>

          <motion.svg
            className="w-6 h-6"
            style={{ 
              color: '#f26a8d',
              filter: 'drop-shadow(0 2px 8px rgba(242, 106, 141, 0.4))',
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;