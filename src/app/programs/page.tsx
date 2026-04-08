"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll, StaggerContainer } from "@/components/ui/animate-on-scroll";
import {
    Baby,
    GraduationCap,
    School,
    Music,
    Palette,
    BookOpen,
    Puzzle,
    Users,
    Heart,
    Clock,
    Utensils,
    Moon,
} from "lucide-react";

const programs = [
    {
        icon: Baby,
        title: "Daycare",
        age: "6 months – 2 years",
        image: "/images/classroom-learning-2.jpeg",
        color: "bg-sunshine",
        desc: "A warm, safe space for your youngest ones to explore the world through sensory play, gentle music, and their first social interactions.",
        skills: [
            { icon: Music, label: "Music & Songs" },
            { icon: Puzzle, label: "Sensory Play" },
            { icon: Heart, label: "Social Bonding" },
            { icon: Moon, label: "Nap Routines" },
        ],
    },
    {
        icon: GraduationCap,
        title: "Nursery",
        age: "2 – 4 years",
        image: "/images/classroom-learning-1.jpeg",
        color: "bg-brand-blue",
        desc: "Play-based learning that sparks curiosity. Children explore alphabet, numbers, colors, shapes, and creative arts in a vibrant, supportive setting.",
        skills: [
            { icon: BookOpen, label: "Letters & Numbers" },
            { icon: Palette, label: "Art & Crafts" },
            { icon: Music, label: "Music & Movement" },
            { icon: Users, label: "Group Activities" },
        ],
    },
    {
        icon: School,
        title: "Preparatory",
        age: "4 – 6 years",
        image: "/images/event-party-outdoor.jpeg",
        color: "bg-gold",
        desc: "School readiness program building strong foundations in reading, writing, math, and social skills to ensure a confident transition to primary school.",
        skills: [
            { icon: BookOpen, label: "Reading & Writing" },
            { icon: Puzzle, label: "Math Concepts" },
            { icon: Users, label: "Social Skills" },
            { icon: GraduationCap, label: "School Readiness" },
        ],
    },
];

const schedule = [
    { time: "7:00 AM", activity: "Arrival & Free Play", icon: Clock },
    { time: "8:00 AM", activity: "Morning Circle & Songs", icon: Music },
    { time: "9:00 AM", activity: "Learning Activities", icon: BookOpen },
    { time: "10:00 AM", activity: "Snack Time", icon: Utensils },
    { time: "10:30 AM", activity: "Outdoor Play", icon: Users },
    { time: "11:30 AM", activity: "Creative Arts", icon: Palette },
    { time: "12:30 PM", activity: "Lunch", icon: Utensils },
    { time: "1:00 PM", activity: "Nap / Quiet Time", icon: Moon },
    { time: "2:30 PM", activity: "Afternoon Activities", icon: Puzzle },
    { time: "3:30 PM", activity: "Snack & Story Time", icon: BookOpen },
    { time: "4:00 – 5:00 PM", activity: "Pick-up Time", icon: Heart },
];

export default function ProgramsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative flex min-h-[350px] items-center overflow-hidden bg-navy dark:bg-[#0a0f1a]">
                <Image
                    src="/images/classroom-learning-1.jpeg"
                    alt="Children learning at Ednisha"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-30"
                />
                <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <p
                        className="mb-2 font-display text-sm font-semibold tracking-wider text-gold animate-heroTextReveal"
                        style={{ animationDelay: "200ms", opacity: 0, animationFillMode: "forwards" }}
                    >
                        OUR PROGRAMS
                    </p>
                    <h1
                        className="font-display text-4xl font-bold text-white sm:text-5xl animate-heroTextReveal"
                        style={{ animationDelay: "400ms", opacity: 0, animationFillMode: "forwards" }}
                    >
                        Learning at Every Stage
                    </h1>
                    <p
                        className="mt-3 max-w-xl text-base text-white/70 animate-heroTextReveal"
                        style={{ animationDelay: "600ms", opacity: 0, animationFillMode: "forwards" }}
                    >
                        Tailored programs for children ages 6 months to 6 years.
                    </p>
                </div>
            </section>

            {/* Programs */}
            <section className="bg-cloud dark:bg-[#0f1422] py-16 sm:py-20">
                <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
                    {programs.map((program, i) => (
                        <div
                            key={program.title}
                            className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:direction-rtl" : ""
                                }`}
                        >
                            <AnimateOnScroll
                                animation={i % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                                duration={700}
                                className={i % 2 === 1 ? "lg:order-2" : ""}
                            >
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg group">
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div
                                        className={`absolute left-4 top-4 rounded-full ${program.color} px-4 py-1.5 text-sm font-bold text-navy dark:text-[#f0f2f5]`}
                                    >
                                        {program.age}
                                    </div>
                                </div>
                            </AnimateOnScroll>
                            <AnimateOnScroll
                                animation={i % 2 === 0 ? "fadeInRight" : "fadeInLeft"}
                                duration={700}
                                delay={200}
                                className={i % 2 === 1 ? "lg:order-1" : ""}
                            >
                                <div className="mb-3 flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy dark:bg-[#0a0f1a]/10">
                                        <program.icon className="h-6 w-6 text-navy dark:text-[#f0f2f5]" />
                                    </div>
                                    <h2 className="font-display text-2xl font-bold text-navy dark:text-[#f0f2f5] sm:text-3xl">
                                        {program.title}
                                    </h2>
                                </div>
                                <p className="text-base leading-relaxed text-slate-text dark:text-[#8a9bbd]">
                                    {program.desc}
                                </p>
                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    {program.skills.map((skill, si) => (
                                        <div
                                            key={skill.label}
                                            className="flex items-center gap-2 rounded-lg bg-white dark:bg-[#1a243a] p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md animate-fadeInUp"
                                            style={{
                                                animationDelay: `${400 + si * 100}ms`,
                                                opacity: 0,
                                                animationFillMode: "forwards",
                                            }}
                                        >
                                            <skill.icon className="h-5 w-5 text-gold" />
                                            <span className="text-sm font-medium text-navy dark:text-[#f0f2f5]">
                                                {skill.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </AnimateOnScroll>
                        </div>
                    ))}
                </div>
            </section>

            {/* Daily Schedule */}
            <section className="bg-warm-gray dark:bg-[#151d32] py-16 sm:py-20">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <AnimateOnScroll animation="fadeInUp">
                        <SectionHeading
                            title="A Day at Ednisha"
                            subtitle="A typical day at our daycare is filled with learning, play, and care."
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fadeInUp" delay={200}>
                        <Card className="border-none shadow-sm">
                            <CardContent className="p-0">
                                <div className="divide-y divide-gray-100">
                                    {schedule.map((item, i) => (
                                        <div
                                            key={item.time}
                                            className="flex items-center gap-4 px-6 py-3.5 transition-all duration-200 hover:bg-cloud hover:pl-8"
                                            style={{
                                                animation: `fadeInLeft 0.4s cubic-bezier(0, 0, 0.2, 1) ${i * 60}ms forwards`,
                                                opacity: 0,
                                            }}
                                        >
                                            <item.icon className="h-5 w-5 shrink-0 text-gold" />
                                            <span className="w-32 shrink-0 text-sm font-semibold text-navy dark:text-[#f0f2f5] sm:w-40">
                                                {item.time}
                                            </span>
                                            <span className="text-sm text-slate-text dark:text-[#8a9bbd]">
                                                {item.activity}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
