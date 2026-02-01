'use client';

import { useRef, useCallback, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const [videoState, setVideoState] = useState({
    isLoaded: false,
    isPlayable: false,
    error: false,
  });

  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        const playOnInteraction = () => {
          video.play();
          document.removeEventListener('click', playOnInteraction);
          document.removeEventListener('touchstart', playOnInteraction);
        };
        document.addEventListener('click', playOnInteraction, { once: true });
        document.addEventListener('touchstart', playOnInteraction, { once: true });
      }
    };

    playVideo();

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
      className="relative w-full overflow-hidden bg-black
                 h-[60vh] sm:h-[70vh] md:h-[80vh] lg:min-h-screen
                 p-0 sm:p-2 md:p-4 lg:p-6"
      aria-label="Hero section"
    >
      {/* Video Container - No rounding on mobile */}
      <div 
        className="relative w-full h-full overflow-hidden
                   rounded-none sm:rounded-md md:rounded-lg lg:rounded-xl
                   sm:shadow-2xl sm:shadow-black/50"
      >
        {/* Video */}
        <motion.video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/video-poster.jpg"
          className="absolute inset-0 w-full h-full
                     object-contain md:object-contain lg:object-cover
                     transition-opacity duration-700"
          style={{
            objectPosition: 'center center',
            opacity: videoState.isPlayable && !videoState.error ? 1 : 0,
            y,
          }}
          onCanPlay={handleVideoCanPlay}
          onError={handleVideoError}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source src="/videos/hero-bg.webm" type="video/webm" />
        </motion.video>

        {/* Fallback Background */}
        {videoState.error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-red-900 via-black to-red-950"
          />
        )}

        {/* Shadows - Only when video is ready */}
        {(videoState.isPlayable || videoState.error) && (
          <>
            {/* ============ MOBILE (0-640px) - CLEAN & MINIMAL ============ */}
            <div className="block sm:hidden absolute inset-0">
              {/* Subtle Main Vignette */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 95% 90% at 50% 50%, transparent 0%, transparent 55%, rgba(0, 0, 0, 0.25) 80%, rgba(0, 0, 0, 0.65) 95%, rgba(0, 0, 0, 0.8) 100%)'
                }}
              />
              
              {/* Bottom Shadow - Reduced */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1/4 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.35) 50%, transparent 100%)'
                }}
              />

              {/* Top Shadow - Minimal */}
              <div 
                className="absolute top-0 left-0 right-0 h-[10%] pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%, transparent 100%)'
                }}
              />
            </div>

            {/* ============ TABLET (640-1024px) ============ */}
            <div className="hidden sm:block lg:hidden absolute inset-0">
              {/* Main Vignette */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 85% 75% at 50% 50%, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.3) 65%, rgba(0, 0, 0, 0.65) 88%, rgba(0, 0, 0, 0.88) 100%)'
                }}
              />

              {/* Bottom */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 35%, rgba(0, 0, 0, 0.2) 70%, transparent 100%)'
                }}
              />

              {/* Top */}
              <div 
                className="absolute top-0 left-0 right-0 h-1/4 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%)'
                }}
              />

              {/* Sides */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-1/5 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 60%, transparent 100%)'
                }}
              />
              <div 
                className="absolute right-0 top-0 bottom-0 w-1/5 pointer-events-none"
                style={{
                  background: 'linear-gradient(to left, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 60%, transparent 100%)'
                }}
              />

              {/* Bottom Corners */}
              <div 
                className="absolute bottom-0 left-0 w-1/4 h-1/4 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at bottom left, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 80%)'
                }}
              />
              <div 
                className="absolute bottom-0 right-0 w-1/4 h-1/4 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at bottom right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 80%)'
                }}
              />
            </div>

            {/* ============ DESKTOP (1024px+) ============ */}
            <div className="hidden lg:block absolute inset-0">
              {/* Main Vignette */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, transparent 35%, rgba(0, 0, 0, 0.3) 58%, rgba(0, 0, 0, 0.65) 82%, rgba(0, 0, 0, 0.9) 100%)'
                }}
              />

              {/* Bottom */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 25%, rgba(0, 0, 0, 0.4) 55%, rgba(0, 0, 0, 0.15) 80%, transparent 100%)'
                }}
              />

              {/* Top */}
              <div 
                className="absolute top-0 left-0 right-0 h-1/3 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.35) 50%, transparent 100%)'
                }}
              />

              {/* Sides */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-1/6 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.45) 60%, transparent 100%)'
                }}
              />
              <div 
                className="absolute right-0 top-0 bottom-0 w-1/6 pointer-events-none"
                style={{
                  background: 'linear-gradient(to left, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.45) 60%, transparent 100%)'
                }}
              />

              {/* Bottom Corners */}
              <div 
                className="absolute bottom-0 left-0 w-1/3 h-1/3 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at bottom left, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 45%, transparent 75%)'
                }}
              />
              <div 
                className="absolute bottom-0 right-0 w-1/3 h-1/3 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at bottom right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 45%, transparent 75%)'
                }}
              />

              {/* Cinematic Frame */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 120px 40px rgba(0, 0, 0, 0.7)'
                }}
              />
            </div>
          </>
        )}
      </div>

      {/* Scroll Effect Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ opacity: useTransform(opacity, [1, 0.8], [0, 0.2]) }}
      >
        <div className="w-full h-full bg-black" />
      </motion.div>
    </section>
  );
};

export default Hero;