'use client';

import { useRef, useCallback, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  // ============ STATE MANAGEMENT ============
  const [videoState, setVideoState] = useState({
    isLoaded: false,
    isPlayable: false,
    error: false,
  });

  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // ============ SCROLL ANIMATIONS ============
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

  // ============ VIDEO LOADING HANDLER ============
  const handleVideoCanPlay = useCallback(() => {
    setVideoState({
      isPlayable: true,
      isLoaded: true,
      error: false,
    });
  }, []);

  const handleVideoError = useCallback(() => {
    setVideoState({
      error: true,
      isPlayable: false,
      isLoaded: false,
    });
  }, []);

  // ============ VIDEO LIFECYCLE ============
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => {
      const playOnClick = () => {
        video.play();
        document.removeEventListener('click', playOnClick);
        document.removeEventListener('touchstart', playOnClick);
      };
      document.addEventListener('click', playOnClick, { once: true });
      document.addEventListener('touchstart', playOnClick, { once: true });
    });

    video.addEventListener('canplay', handleVideoCanPlay);
    video.addEventListener('error', handleVideoError);

    return () => {
      video.removeEventListener('canplay', handleVideoCanPlay);
      video.removeEventListener('error', handleVideoError);
    };
  }, [handleVideoCanPlay, handleVideoError]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: '#0a0a0a' }}
      aria-label="Hero section"
    >
      {/* ============ VIDEO BACKGROUND - CRYSTAL CLEAR ============ */}
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
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            videoState.isPlayable && !videoState.error ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
          onCanPlay={handleVideoCanPlay}
          onError={handleVideoError}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source src="/videos/hero-bg.webm" type="video/webm" />
        </video>

        {/* Fallback Background - Only if video fails */}
        {videoState.error && (
          <div
            className="absolute inset-0"
            style={{ 
              background: 'radial-gradient(circle at center, #f26a8d 0%, #880d1e 50%, #0a0a0a 100%)' 
            }}
          />
        )}

        {/* Full Vignette Effect - Creates frame around video, crystal clear center */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(
                ellipse 80% 70% at 50% 50%, 
                transparent 0%, 
                transparent 30%,
                rgba(0, 0, 0, 0.3) 60%,
                rgba(0, 0, 0, 0.7) 85%,
                rgba(0, 0, 0, 0.9) 100%
              )
            `
          }}
        />

        {/* Bottom Vignette - Extra emphasis on bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.2) 60%, transparent 100%)'
          }}
        />

        {/* Subtle Top Vignette */}
        <div 
          className="absolute top-0 left-0 right-0 h-1/4 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, transparent 100%)'
          }}
        />

        {/* Side Vignettes - Subtle */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-1/6 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, transparent 100%)'
          }}
        />

        <div 
          className="absolute right-0 top-0 bottom-0 w-1/6 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, rgba(0, 0, 0, 0.6) 0%, transparent 100%)'
          }}
        />
      </div>

      {/* Empty content div for scroll effect */}
      <motion.div
        className="relative z-10 min-h-screen"
        style={{ y, opacity }}
      />
    </section>
  );
};

export default Hero;