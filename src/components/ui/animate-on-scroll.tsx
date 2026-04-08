"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

type AnimationType =
    | "fadeInUp"
    | "fadeInLeft"
    | "fadeInRight"
    | "fadeInScale"
    | "fadeIn";

interface AnimateOnScrollProps {
    children: React.ReactNode;
    animation?: AnimationType;
    delay?: number;
    duration?: number;
    className?: string;
    as?: keyof React.JSX.IntrinsicElements;
    threshold?: number;
}

export function AnimateOnScroll({
    children,
    animation = "fadeInUp",
    delay = 0,
    duration = 600,
    className = "",
    as: Tag = "div",
    threshold = 0.15,
}: AnimateOnScrollProps) {
    const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold });

    const animationClass = isVisible ? `animate-${animation}` : "";

    const Component = Tag as React.ElementType;

    return (
        <Component
            ref={ref}
            className={`${className} ${animationClass}`}
            style={{
                opacity: isVisible ? undefined : 0,
                animationDelay: `${delay}ms`,
                animationDuration: `${duration}ms`,
                animationFillMode: "forwards",
            }}
        >
            {children}
        </Component>
    );
}

/* Staggered children wrapper — each direct child gets increasing delay */
interface StaggerContainerProps {
    children: React.ReactNode;
    staggerDelay?: number;
    animation?: AnimationType;
    duration?: number;
    className?: string;
    threshold?: number;
}

export function StaggerContainer({
    children,
    staggerDelay = 80,
    animation = "fadeInUp",
    duration = 500,
    className = "",
    threshold = 0.1,
}: StaggerContainerProps) {
    const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold });

    const childArray = Array.isArray(children) ? children : [children];

    return (
        <div ref={ref} className={className}>
            {childArray.map((child, i) => (
                <div
                    key={i}
                    className={isVisible ? `animate-${animation}` : ""}
                    style={{
                        opacity: isVisible ? undefined : 0,
                        animationDelay: `${i * staggerDelay}ms`,
                        animationDuration: `${duration}ms`,
                        animationFillMode: "forwards",
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
}
