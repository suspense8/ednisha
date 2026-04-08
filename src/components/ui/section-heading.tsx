"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    light?: boolean;
    className?: string;
}

export function SectionHeading({
    title,
    subtitle,
    centered = true,
    light = false,
    className = "",
}: SectionHeadingProps) {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

    return (
        <div
            ref={ref}
            className={`mb-10 ${centered ? "text-center" : ""} ${className}`}
        >
            <h2
                className={`font-display text-3xl font-semibold sm:text-4xl ${light ? "text-white" : "text-navy dark:text-[#f0f2f5]"
                    } ${isVisible ? "animate-fadeInUp" : ""}`}
                style={{ opacity: isVisible ? undefined : 0, animationFillMode: "forwards" }}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={`mx-auto mt-3 max-w-2xl text-base leading-relaxed sm:text-lg ${light ? "text-white/70" : "text-slate-text dark:text-[#8a9bbd]"
                        } ${isVisible ? "animate-fadeInUp" : ""}`}
                    style={{
                        opacity: isVisible ? undefined : 0,
                        animationDelay: "150ms",
                        animationFillMode: "forwards",
                    }}
                >
                    {subtitle}
                </p>
            )}
            <div
                className={`mx-auto mt-4 h-1 rounded-full bg-gold ${isVisible ? "animate-drawLine" : ""
                    }`}
                style={{
                    width: isVisible ? undefined : 0,
                    animationDelay: "300ms",
                    animationFillMode: "forwards",
                }}
            />
        </div>
    );
}
