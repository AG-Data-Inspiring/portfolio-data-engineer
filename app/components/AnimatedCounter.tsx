'use client';

import { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
}

export default function AnimatedCounter({ end, duration = 2000, suffix = '' }: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function (easeOutExpo)
            const easeOutExpo = (x: number): number => {
                return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
            };

            const currentCount = Math.floor(easeOutExpo(percentage) * end);
            setCount(currentCount);

            if (progress < duration) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(end);
                setIsFinished(true);
                triggerConfetti();
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isVisible, end, duration]);

    const triggerConfetti = () => {
        if (countRef.current) {
            const rect = countRef.current.getBoundingClientRect();
            const x = (rect.left + rect.width / 2) / window.innerWidth;
            const y = (rect.top + rect.height / 2) / window.innerHeight;

            confetti({
                particleCount: 20,
                spread: 30,
                startVelocity: 15,
                scalar: 0.8,
                origin: { x, y },
                colors: ['#FFD700', '#FFA500', '#FFFFFF'], // Gold, Orange, White
                disableForReducedMotion: true,
                zIndex: 1000,
            });
        }
    };

    return (
        <span ref={countRef} className="relative inline-block">
            <span className={`inline-block ${isFinished ? 'animate-pop' : ''}`}>
                {count}{suffix}
            </span>

            <style jsx>{`
        @keyframes pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .animate-pop {
          animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
        </span>
    );
}
