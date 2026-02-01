'use client';

import { useRef, useCallback, useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [videoState, setVideoState] = useState({
    isLoaded: false,
    isPlayable: false,
    error: false,
    aspectRatio: 16 / 9,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [containerHeight, setContainerHeight] = useState('60vh');

  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const mobileOverlayRef = useRef(null);

  // ✅ Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ✅ Handle video metadata
  const handleVideoCanPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoAspectRatio = video.videoWidth / video.videoHeight;
    const screenWidth = Math.min(window.innerWidth - 16, 1920);
    const calculatedHeight = screenWidth / videoAspectRatio;

    let newHeight;
    if (window.innerWidth < 768) {
      newHeight = Math.min(calculatedHeight, window.innerHeight * 0.75);
    } else {
      newHeight = window.innerHeight * 0.8;
    }

    // ✅ GSAP smooth height animation
    gsap.to(containerRef.current, {
      height: newHeight,
      duration: 0.6,
      ease: 'power2.inOut',
      overwrite: 'auto',
    });

    // ✅ Video fade-in animation
    gsap.to(videoRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    });

    // ✅ Overlay fade-in
    const overlayElement = isMobile ? mobileOverlayRef.current : overlayRef.current;
    if (overlayElement) {
      gsap.to(overlayElement, {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
      });
    }

    setVideoState(prev => ({
      ...prev,
      isPlayable: true,
      isLoaded: true,
      error: false,
      aspectRatio: videoAspectRatio,
    }));
  }, [isMobile]);

  const handleVideoError = useCallback(() => {
    setVideoState(prev => ({
      ...prev,
      error: true,
      isPlayable: false,
      isLoaded: false,
    }));

    gsap.to(containerRef.current, {
      height: '60vh',
      duration: 0.6,
      ease: 'power2.inOut',
    });
  }, []);

  // ✅ Video initialization
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        const playOnInteraction = () => {
          video.play().catch(() => {});
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
    video.addEventListener('loadedmetadata', handleVideoCanPlay);

    return () => {
      video.removeEventListener('canplay', handleVideoCanPlay);
      video.removeEventListener('error', handleVideoError);
      video.removeEventListener('loadedmetadata', handleVideoCanPlay);
    };
  }, [handleVideoCanPlay, handleVideoError]);

  // ✅ GSAP Scroll Animation & Parallax
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    if (!container || !video) return;

    // ✅ Parallax effect
    gsap.to(video, {
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
        markers: false,
      },
      y: isMobile ? 0 : 80,
      ease: 'none',
    });

    // ✅ Fade out on scroll
    gsap.to(container, {
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom center',
        scrub: 1,
        markers: false,
      },
      opacity: isMobile ? 1 : 0.9,
      ease: 'power2.inOut',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  // ✅ Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const video = videoRef.current;
      if (!video || !video.videoWidth) return;

      const videoAspectRatio = video.videoWidth / video.videoHeight;
      const screenWidth = Math.min(window.innerWidth - 16, 1920);
      const calculatedHeight = screenWidth / videoAspectRatio;

      let newHeight;
      if (window.innerWidth < 768) {
        newHeight = Math.min(calculatedHeight, window.innerHeight * 0.75);
      } else {
        newHeight = window.innerHeight * 0.8;
      }

      gsap.to(containerRef.current, {
        height: newHeight,
        duration: 0.4,
        ease: 'power2.inOut',
      });

      ScrollTrigger.refresh();
    };

    const resizeTimeout = setTimeout(() => {
      handleResize();
    }, 150);

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-black
                 p-0 sm:p-2 md:p-4 lg:p-6 "
      style={{
        height: '60vh',
      }}
      aria-label="Hero section"
    >
      {/* Video Container */}
      <div 
        className=" relative w-full h-full overflow-hidden 
                   rounded-none sm:rounded-lg md:rounded-xl lg:rounded-2xl
                   sm:shadow-2xl sm:shadow-black/50"
      >
        {/* Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={isMobile ? "/images/video-poster-mobile.jpg" : "/images/video-poster.jpg"}
          className={`absolute inset-0 w-full h-full
                       ${isMobile ? 'object-contain' : 'object-cover'}`}
          style={{
            objectPosition: 'center center',
            opacity: 0, // ✅ Start from 0 - GSAP animates to 1
            backgroundColor: '#000',
          }}
          onCanPlay={handleVideoCanPlay}
          onError={handleVideoError}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source src="/videos/hero-bg.webm" type="video/webm" />
        </video>

        {/* Fallback Background */}
        {videoState.error && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-950" />
        )}

        {/* Overlays - Only render if video is ready */}
        {(videoState.isPlayable || videoState.error) && (
          <>
            {/* MOBILE - Light & Clean */}
            <div
              ref={mobileOverlayRef}
              className="block sm:hidden absolute inset-0 pointer-events-none"
              style={{ opacity: 0 }}
            >
              {/* Subtle Vignette */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse 100% 95% at 50% 50%, transparent 0%, transparent 70%, rgba(0, 0, 0, 0.1) 90%, rgba(0, 0, 0, 0.25) 100%)'
                }}
              />
              
              {/* Bottom Gradient */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1/4"
                style={{
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.1) 70%, transparent 100%)'
                }}
              />
            </div>

            {/* DESKTOP - Darker Shadows */}
            <div
              ref={overlayRef}
              className="hidden sm:block absolute inset-0 pointer-events-none"
              style={{ opacity: 0 }}
            >
              {/* Main Vignette */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse 85% 75% at 50% 50%, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.3) 65%, rgba(0, 0, 0, 0.65) 88%, rgba(0, 0, 0, 0.88) 100%)'
                }}
              />

              {/* Bottom */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1/2"
                style={{
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 35%, rgba(0, 0, 0, 0.2) 70%, transparent 100%)'
                }}
              />

              {/* Top */}
              <div 
                className="absolute top-0 left-0 right-0 h-1/4"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%)'
                }}
              />

              {/* Left Side */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-1/5"
                style={{
                  background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 60%, transparent 100%)'
                }}
              />

              {/* Right Side */}
              <div 
                className="absolute right-0 top-0 bottom-0 w-1/5"
                style={{
                  background: 'linear-gradient(to left, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 60%, transparent 100%)'
                }}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;