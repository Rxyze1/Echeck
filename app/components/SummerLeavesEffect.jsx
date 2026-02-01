'use client';

import { useEffect, useRef } from 'react';

export default function SummerLeavesEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Device detection
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    const isLowEnd = navigator.hardwareConcurrency
      ? navigator.hardwareConcurrency <= 4
      : false;
    const isReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const getParticleCount = () => {
      if (isReducedMotion) return 15;
      if (isMobile || isLowEnd) return 25;
      return 45;
    };

    // Resize canvas (throttled)
    let resizeTimeout;
    const resizeCanvas = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }, 120);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Colors
    const leafColors = [
      'rgba(220, 20, 60, 0.7)',
      'rgba(255, 69, 0, 0.7)',
      'rgba(255, 99, 71, 0.7)',
      'rgba(255, 140, 0, 0.7)',
      'rgba(205, 92, 92, 0.7)',
      'rgba(240, 128, 128, 0.6)',
    ];

    // Fast Leaf class
    class Leaf {
      constructor() {
        this.reset(true);
      }

      reset(first = false) {
        this.x = Math.random() * canvas.width;
        this.y =
          first === true
            ? Math.random() * canvas.height
            : -20;

        this.size = Math.random() * 7 + 4;
        this.speedY = Math.random() * 1.1 + 0.4;
        this.speedX = (Math.random() - 0.5) * 1.2;

        // Precompute swing parameters
        this.swingPhase = Math.random() * Math.PI * 2;
        this.swingSpeed = Math.random() * 0.013 + 0.007;
        this.swingDist = Math.random() * 1.2 + 0.7;

        this.rot = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.065;

        this.color = leafColors[(Math.random() * leafColors.length) | 0];
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        // Precomputed lightweight swing
        this.swingPhase += this.swingSpeed;
        this.x += Math.sin(this.swingPhase) * this.swingDist;

        this.rot += this.rotSpeed;

        if (this.y > canvas.height + 25) this.reset();
        if (this.x > canvas.width + 25) this.x = -20;
        else if (this.x < -25) this.x = canvas.width + 20;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot);
        ctx.fillStyle = this.color;

        // Much lighter path
        const s = this.size;
        ctx.beginPath();
        ctx.moveTo(0, -s * 0.5);
        ctx.quadraticCurveTo(
          s * 0.4,
          -s * 0.2,
          s * 0.25,
          s * 0.45
        );
        ctx.quadraticCurveTo(0, s * 0.3, -s * 0.25, s * 0.45);
        ctx.quadraticCurveTo(
          -s * 0.4,
          -s * 0.2,
          0,
          -s * 0.5
        );
        ctx.fill();

        if (!isMobile) {
          ctx.strokeStyle = 'rgba(0,0,0,0.2)';
          ctx.lineWidth = 0.25;
          ctx.beginPath();
          ctx.moveTo(0, -s * 0.5);
          ctx.lineTo(0, s * 0.45);
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    const leaves = Array.from(
      { length: getParticleCount() },
      () => new Leaf()
    );

    let animationFrameId;
    let lastTime = 0;
    const targetFPS = isMobile ? 30 : 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (t) => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = t - lastTime;
      if (delta < frameInterval) return;

      lastTime = t - (delta % frameInterval);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < leaves.length; i++) {
        const leaf = leaves[i];
        leaf.update();
        leaf.draw();
      }
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
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