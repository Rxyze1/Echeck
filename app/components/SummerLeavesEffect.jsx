'use client';

import { useEffect, useRef } from 'react';

export default function SummerLeavesEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Detect mobile/low-end devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowEnd = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Adjust particle count based on device
    const getParticleCount = () => {
      if (isReducedMotion) return 20;
      if (isMobile || isLowEnd) return 30;
      return 50; // Desktop
    };

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Reddish/Autumn colors
    const leafColors = [
      'rgba(220, 20, 60, 0.7)',    // Crimson
      'rgba(255, 69, 0, 0.7)',     // Red-orange
      'rgba(255, 99, 71, 0.7)',    // Tomato
      'rgba(255, 140, 0, 0.7)',    // Dark orange
      'rgba(205, 92, 92, 0.7)',    // Indian red
      'rgba(240, 128, 128, 0.6)',  // Light coral
    ];

    // Optimized Leaf class
    class Leaf {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 8 + 4; // Smaller: 4-12px (was 8-23px)
        this.speedY = Math.random() * 1.2 + 0.4; // Slightly slower for smooth animation
        this.speedX = Math.random() * 1.5 - 0.75;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.08; // Slightly slower rotation
        this.swingSpeed = Math.random() * 0.015 + 0.008;
        this.swingDistance = Math.random() * 1.5 + 0.8;
        this.color = leafColors[Math.floor(Math.random() * leafColors.length)];
      }

      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.y * this.swingSpeed) * this.swingDistance;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;

        if (this.y > canvas.height + 20) {
          this.y = -20;
          this.x = Math.random() * canvas.width;
        }

        if (this.x > canvas.width + 20) {
          this.x = -20;
        } else if (this.x < -20) {
          this.x = canvas.width + 20;
        }
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // Simplified leaf shape for better performance
        ctx.beginPath();
        ctx.moveTo(0, -this.size / 2);
        
        // Right side
        ctx.quadraticCurveTo(
          this.size / 2, 
          -this.size / 4, 
          this.size / 3, 
          this.size / 2
        );
        
        // Bottom
        ctx.quadraticCurveTo(0, this.size / 3, 0, this.size / 2);
        
        // Left side
        ctx.quadraticCurveTo(
          -this.size / 3, 
          this.size / 2, 
          -this.size / 3, 
          this.size / 2
        );
        
        ctx.quadraticCurveTo(
          -this.size / 2, 
          -this.size / 4, 
          0, 
          -this.size / 2
        );

        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Skip vein drawing on mobile for better performance
        if (!isMobile) {
          ctx.strokeStyle = `rgba(0, 0, 0, 0.2)`;
          ctx.lineWidth = 0.3;
          ctx.beginPath();
          ctx.moveTo(0, -this.size / 2);
          ctx.lineTo(0, this.size / 2);
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    // Create leaves with optimized count
    const leaves = [];
    const numberOfLeaves = getParticleCount();

    for (let i = 0; i < numberOfLeaves; i++) {
      leaves.push(new Leaf());
    }

    // Optimized animation loop
    let animationFrameId;
    let lastTime = 0;
    const targetFPS = isMobile ? 30 : 60; // Lower FPS on mobile
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime) => {
      animationFrameId = requestAnimationFrame(animate);

      const deltaTime = currentTime - lastTime;

      // Throttle frame rate for mobile
      if (deltaTime < frameInterval) {
        return;
      }

      lastTime = currentTime - (deltaTime % frameInterval);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      leaves.forEach((leaf) => {
        leaf.update();
        leaf.draw();
      });
    };

    animate(0);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]"
      style={{ mixBlendMode: 'normal' }}
      aria-hidden="true"
    />
  );
}