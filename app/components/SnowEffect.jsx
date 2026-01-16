'use client';
import { useEffect, useRef } from 'react';

export default function SnowEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with device pixel ratio for sharper rendering
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };
    window.addEventListener('resize', handleResize);

    // Snowflake class
    class Snowflake {
      constructor() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.x = Math.random() * w;
        this.y = Math.random() * h - h;
        this.radius = Math.random() * 2.5 + 0.5;
        this.speed = Math.random() * 0.8 + 0.3;
        this.wind = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        
        this.y += this.speed;
        this.x += this.wind;

        if (this.y > h + 10) {
          this.y = -10;
          this.x = Math.random() * w;
        }
        if (this.x > w + 10) {
          this.x = -10;
        } else if (this.x < -10) {
          this.x = w + 10;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Create snowflakes - reduced for mobile performance
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const numberOfSnowflakes = isMobile ? 75 : 120;
    
    const snowflakes = [];
    for (let i = 0; i < numberOfSnowflakes; i++) {
      snowflakes.push(new Snowflake());
    }

    // Animation loop with RAF optimization
    let animationId;
    let lastTime = 0;
    const fps = 60;
    const interval = 1000 / fps;

    const animate = (currentTime) => {
      animationId = requestAnimationFrame(animate);
      
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime < interval) return;
      
      lastTime = currentTime - (deltaTime % interval);

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      for (let i = 0; i < snowflakes.length; i++) {
        snowflakes[i].update();
        snowflakes[i].draw();
      }
    };
    
    animationId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        width: '100%',
        height: '100%',
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}
    />
  );
}