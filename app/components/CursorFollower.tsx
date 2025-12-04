'use client';

import { useEffect, useRef } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  size: number;
  life: number; // remaining life frames
}

export default function CursorFollower() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparklesRef = useRef<Sparkle[]>([]);
  const sparkleIdRef = useRef(0);
  const lastPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    let mouseX = 0;
    let mouseY = 0;
    let animationId: number;

    const spawnSparkle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.6 + 0.1; // a bit slower
      const s: Sparkle = {
        id: sparkleIdRef.current++,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.05, // smaller upward bias
        opacity: 1,
        size: Math.random() * 1.5 + 0.8, // much smaller
        life: Math.floor(Math.random() * 8 + 8), // shorter life
      };
      sparklesRef.current.push(s);
      if (sparklesRef.current.length > 90) sparklesRef.current.shift();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (
        Math.hypot(mouseX - lastPosRef.current.x, mouseY - lastPosRef.current.y) > 6
      ) {
        // spawn a small cluster occasionally
        const count = Math.random() > 0.85 ? 2 : 1;
        for (let i = 0; i < count; i++) {
          spawnSparkle(mouseX + (Math.random() - 0.5) * 4, mouseY + (Math.random() - 0.5) * 4);
        }
        lastPosRef.current = { x: mouseX, y: mouseY };
      }
    };

    const drawSpark = (ctx: CanvasRenderingContext2D, s: Sparkle) => {
      // radial glow (smaller, subtler)
      const glowRadius = s.size * 4;
      const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glowRadius);
      grd.addColorStop(0, `rgba(255,255,255,${s.opacity * 1.0})`);
      grd.addColorStop(0.25, `rgba(255,255,255,${s.opacity * 0.5})`);
      grd.addColorStop(1, `rgba(255,255,255,0)`);
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(s.x, s.y, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      // small bright core
      ctx.fillStyle = `rgba(255,255,255,${Math.min(1, s.opacity * 1.1)})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();

      // sparkle cross (thin lines) with a tiny rotation for variety
      ctx.save();
      ctx.translate(s.x, s.y);
      const rot = (s.id % 4) * (Math.PI / 8);
      ctx.rotate(rot);
      ctx.strokeStyle = `rgba(255,255,255,${s.opacity * 0.95})`;
      ctx.lineWidth = Math.max(0.6, s.size * 0.18);
      ctx.beginPath();
      ctx.moveTo(-s.size * 3, 0);
      ctx.lineTo(s.size * 3, 0);
      ctx.moveTo(0, -s.size * 3);
      ctx.lineTo(0, s.size * 3);
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // update
      for (let i = sparklesRef.current.length - 1; i >= 0; i--) {
        const s = sparklesRef.current[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy -= 0.01; // gentle float
        s.life -= 1;
        s.opacity = Math.max(0, s.life / 12);
        if (s.life <= 0 || s.opacity <= 0) {
          sparklesRef.current.splice(i, 1);
        }
      }

      // draw
      sparklesRef.current.forEach((s) => drawSpark(ctx, s));

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-40"
      style={{ top: 0, left: 0 }}
    />
  );
}
