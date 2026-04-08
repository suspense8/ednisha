"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateOnScroll, StaggerContainer } from "@/components/ui/animate-on-scroll";
import {
    Heart,
    Shield,
    Smile,
    Users,
    BookHeart,
    Handshake,
} from "lucide-react";

const values = [
    {
        icon: Heart,
        title: "Nurturing Care",
        desc: "Every child is treated with equal love, attention, and tenderness.",
    },
    {
        icon: Shield,
        title: "Safety First",
        desc: "A protected, secure environment where parents can trust their children are safe.",
    },
    {
        icon: Smile,
        title: "Joyful Learning",
        desc: "Play-based, fun, and colorful educational experiences that spark curiosity.",
    },
    {
        icon: Users,
        title: "Inclusivity",
        desc: "Children from all walks of life feel valued, welcomed, and respected.",
    },
    {
        icon: BookHeart,
        title: "Faith-Guided",
        desc: "Passion, faith, and genuine love for children guide everything we do.",
    },
    {
        icon: Handshake,
        title: "Community",
        desc: "Strong parent-school bonds with regular events and open communication.",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative flex min-h-[350px] items-center overflow-hidden bg-navy dark:bg-[#0a0f1a]">
                <Image
                    src="/images/classroom-group-2.jpeg"
                    alt="Ednisha Day Care community"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-50"
                />
                <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <p
                        className="mb-2 font-display text-sm font-semibold tracking-wider text-gold animate-heroTextReveal"
                        style={{ animationDelay: "200ms", opacity: 0, animationFillMode: "forwards" }}
                    >
                        OUR STORY
                    </p>
                    <h1
                        className="font-display text-4xl font-bold text-white sm:text-5xl animate-heroTextReveal"
                        style={{ animationDelay: "400ms", opacity: 0, animationFillMode: "forwards" }}
                    >
                        About Ednisha
                    </h1>
                    <p
                        className="mt-3 max-w-xl text-base text-white/70 animate-heroTextReveal"
                        style={{ animationDelay: "600ms", opacity: 0, animationFillMode: "forwards" }}
                    >
                        More than a daycare — a haven of love, learning, and growth for
                        every child.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="bg-cloud dark:bg-[#0f1422] py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <AnimateOnScroll animation="fadeInLeft" duration={700}>
                            <SectionHeading
                                title="Our Story"
                                subtitle="How a passion for children became Ednisha Day Care."
                                centered={false}
                            />
                            <div className="space-y-4 text-base leading-relaxed text-slate-text dark:text-[#8a9bbd]">
                                <p>
                                    Ednisha Day Care &amp; Preparatory School was founded on
                                    <strong className="text-navy dark:text-[#f0f2f5]"> January 6, 2025</strong>, born
                                    from a simple yet powerful passion — a genuine love for children
                                    and a desire to create a safe, nurturing space where they can
                                    learn, grow, and thrive.
                                </p>
                                <p>
                                    Located at #6 Robert Lane, Kossoh Town in the Western Rural
                                    Area, our school has quickly become a trusted home away from home
                                    for families in the community. In just over a year, we serve
                                    more than 20 children with 2 dedicated staff members.
                                </p>
                                <p>
                                    Our motto, <strong className="text-navy dark:text-[#f0f2f5]">&quot;Learn, Lead &amp; Succeed&quot;</strong>,
                                    reflects our belief that every child has the potential to grow
                                    into a confident leader. From sensory play for infants to school
                                    readiness for preparatory-aged children, we craft experiences
                                    that nurture the whole child — mind, body, and spirit.
                                </p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInRight" duration={700} delay={200}>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-md">
                                    <Image
                                        src="/images/classroom-group-4.jpeg"
                                        alt="Children in classroom"
                                        fill
                                        sizes="(max-width: 1024px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-xl shadow-md">
                                    <Image
                                        src="/images/children-with-toys.jpeg"
                                        alt="Children with toys"
                                        fill
                                        sizes="(max-width: 1024px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Proprietor Spotlight */}
            <section className="bg-warm-gray dark:bg-[#151d32] py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <AnimateOnScroll animation="fadeInLeft" duration={700} className="order-2 lg:order-1 flex justify-center">
                            <div className="relative h-[400px] w-[320px] overflow-hidden rounded-2xl border-4 border-gold/30 shadow-xl">
                                <Image
                                    src="/images/proprietor-portrait.png"
                                    alt="Mrs. Eunice Sharka — Proprietor"
                                    fill
                                    sizes="320px"
                                    className="object-cover"
                                />
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInRight" duration={700} delay={200} className="order-1 lg:order-2">
                            <SectionHeading
                                title="Meet the Proprietor"
                                subtitle="The heart behind Ednisha Day Care."
                                centered={false}
                            />
                            <h3 className="mb-3 font-display text-xl font-semibold text-navy dark:text-[#f0f2f5]">
                                Mrs. Eunice Sharka <span className="text-sm font-normal text-gold">— HTC</span>
                            </h3>
                            <div className="space-y-4 text-base leading-relaxed text-slate-text dark:text-[#8a9bbd]">
                                <p>
                                    Mrs. Eunice Sharka is a passionate educator whose deep love for
                                    children drove her to turn her dream into reality. With an HTC
                                    qualification and unwavering dedication, she founded Ednisha
                                    Day Care on January 6, 2025, to create a nurturing space where
                                    every child can flourish.
                                </p>
                                <p>
                                    Her belief in equality ensures that every child is treated with
                                    the same level of care and attention, fostering an atmosphere
                                    where no child feels lesser or overlooked. She embodies
                                    dedication, humility, and a child-friendly spirit that defines
                                    the school&#39;s character.
                                </p>
                                <p>
                                    Mrs. Sharka&#39;s warm demeanor and welcoming posture make her a
                                    magnet for children, who quickly come to adore and trust her.
                                    She prioritizes their well-being, understanding the importance
                                    of nurturing young minds and bodies.
                                </p>
                            </div>
                            <blockquote className="mt-6 border-l-4 border-gold pl-4 italic text-navy dark:text-[#f0f2f5]">
                                &quot;With passion, faith, and genuine love for children coming
                                together, anything is possible.&quot;
                            </blockquote>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-cloud dark:bg-[#0f1422] py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <AnimateOnScroll animation="fadeInUp">
                        <SectionHeading
                            title="Our Core Values"
                            subtitle="The principles that guide everything we do at Ednisha."
                        />
                    </AnimateOnScroll>
                    <StaggerContainer
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        staggerDelay={100}
                        animation="fadeInUp"
                    >
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="rounded-xl bg-white dark:bg-[#1a243a] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                            >
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-navy/10 transition-transform duration-300 hover:scale-110">
                                    <value.icon className="h-6 w-6 text-navy dark:text-[#f0f2f5]" />
                                </div>
                                <h3 className="font-display text-lg font-semibold text-navy dark:text-[#f0f2f5]">
                                    {value.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-text dark:text-[#8a9bbd]">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </>
    );
}
