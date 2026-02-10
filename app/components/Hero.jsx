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

  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

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
    const screenWidth = Math.min(window.innerWidth - 32, 1920);
    const calculatedHeight = screenWidth / videoAspectRatio;

    let newHeight;
    if (window.innerWidth < 768) {
      newHeight = Math.min(calculatedHeight, window.innerHeight * 0.6);
    } else {
      newHeight = window.innerHeight * 0.7;
    }

    gsap.to(containerRef.current, {
      height: newHeight,
      duration: 0.6,
      ease: 'power2.inOut',
      overwrite: 'auto',
    });

    gsap.to(videoRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    });

    setVideoState(prev => ({
      ...prev,
      isPlayable: true,
      isLoaded: true,
      error: false,
      aspectRatio: videoAspectRatio,
    }));
  }, []);

  const handleVideoError = useCallback(() => {
    setVideoState(prev => ({
      ...prev,
      error: true,
      isPlayable: false,
      isLoaded: false,
    }));

    gsap.to(containerRef.current, {
      height: '50vh',
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
    const overlay = overlayRef.current;

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
      y: isMobile ? 0 : 60,
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
      opacity: 1,
      ease: 'power2.inOut',
    });

    // ✅ Overlay fade animation
    if (overlay) {
      gsap.fromTo(
        overlay,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
        }
      );
    }

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
      const screenWidth = Math.min(window.innerWidth - 32, 1920);
      const calculatedHeight = screenWidth / videoAspectRatio;

      let newHeight;
      if (window.innerWidth < 768) {
        newHeight = Math.min(calculatedHeight, window.innerHeight * 0.6);
      } else {
        newHeight = window.innerHeight * 0.7;
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
      className="relative w-full mt-26 px-4 sm:px-6 md:px-8 lg:px-12"
      aria-label="Hero section"
    >
      {/* Video Card Container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-black rounded-3xl shadow-2xl"
        style={{
          height: '70vh',
        }}
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
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: 'center center',
            opacity: 0,
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

        {/* Simple Premium Overlay - Clean & Minimal */}
        {(videoState.isPlayable || videoState.error) && (
          <div
            ref={overlayRef}
            className="absolute inset-0 pointer-events-none opacity-0"
            style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)',
            }}
          />
        )}

        {/* Pulsing Accent (Optional) */}
        {videoState.isPlayable && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-6xl md:text-8xl text-white/20 animate-pulse">✨</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;