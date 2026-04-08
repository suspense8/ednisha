"use client";

import { useEffect, useState, useRef } from "react";

export function AnimatedCounter({ target, label }: { target: string; label: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [display, setDisplay] = useState(target);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const numericMatch = target.match(/^(\d+)/);
                    if (numericMatch) {
                        const end = parseInt(numericMatch[1]);
                        const suffix = target.replace(/^\d+/, "");
                        const duration = 1200;
                        const steps = 30;
                        const stepTime = duration / steps;
                        let current = 0;
                        const increment = end / steps;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= end) {
                                clearInterval(timer);
                                setDisplay(target);
                            } else {
                                setDisplay(Math.floor(current) + suffix);
                            }
                        }, stepTime);
                    }
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target, hasAnimated]);

    return (
        <div ref={ref} className="flex items-center gap-3 text-white">
            <span className="font-display text-3xl font-bold text-gold">{display}</span>
            <span className="text-sm text-white/70">{label}</span>
        </div>
    );
}
