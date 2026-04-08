"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll, StaggerContainer } from "@/components/ui/animate-on-scroll";
import { Calendar, MapPin, Clock, Bus } from "lucide-react";

const upcomingEvents = [
    {
        title: "Field Trip to John F. Kennedy",
        date: "April 2026 — Second Term",
        time: "TBA",
        location: "John F. Kennedy School",
        desc: "An exciting educational field trip where our students will explore new environments, learn beyond the classroom walls, and create unforgettable memories!",
        image: "/images/children-outdoor.jpeg",
        tag: "Upcoming",
        tagIcon: Bus,
    },
    {
        title: "Color Day Friday",
        date: "Every Other Friday",
        time: "All Day",
        location: "Ednisha Day Care",
        desc: "Children can wear any bright, fun clothes and shoes of their choice — making Fridays more joyful and expressive!",
        image: "/images/color-day-flyer.jpeg",
        tag: "Recurring",
    },
];

const pastEvents = [
    {
        title: "End-of-Academic-Year School Party",
        date: "Friday, 19th December 2025",
        time: "11:00 AM",
        location: "School Grounds, 6 Robert Lane, Kossoh Town",
        desc: "A wonderful celebration of our first academic year with performances, awards, food, and fun for the whole Ednisha family.",
        image: "/images/event-flyer-navy.jpeg",
    },
];

export default function EventsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative flex min-h-[300px] items-center overflow-hidden bg-navy dark:bg-[#0a0f1a]">
                <Image
                    src="/images/ceremony-setup.jpeg"
                    alt="Event at Ednisha Day Care"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-25"
                />
                <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <p
                        className="mb-2 font-display text-sm font-semibold tracking-wider text-gold animate-heroTextReveal"
                        style={{ animationDelay: "200ms", opacity: 0, animationFillMode: "forwards" }}
                    >
                        EVENTS &amp; NEWS
                    </p>
                    <h1
                        className="font-display text-4xl font-bold text-white sm:text-5xl animate-heroTextReveal"
                        style={{ animationDelay: "400ms", opacity: 0, animationFillMode: "forwards" }}
                    >
                        What&#39;s Happening
                    </h1>
                    <p
                        className="mt-3 max-w-xl text-base text-white/70 animate-heroTextReveal"
                        style={{ animationDelay: "600ms", opacity: 0, animationFillMode: "forwards" }}
                    >
                        The latest events, announcements, and news from our school.
                    </p>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="bg-cloud dark:bg-[#0f1422] py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <AnimateOnScroll animation="fadeInUp">
                        <SectionHeading
                            title="Upcoming Events"
                            subtitle="Mark your calendar for these exciting events."
                        />
                    </AnimateOnScroll>
                    <StaggerContainer
                        className="grid gap-6 lg:grid-cols-2"
                        staggerDelay={150}
                        animation="fadeInUp"
                    >
                        {upcomingEvents.map((event) => (
                            <Card
                                key={event.title}
                                className="group overflow-hidden border-none shadow-sm transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="grid sm:grid-cols-2">
                                    <div className="relative aspect-square sm:aspect-auto overflow-hidden">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {event.tag && (
                                            <span className="absolute left-3 top-3 rounded-full bg-sunshine px-3 py-1 text-xs font-bold text-navy dark:text-[#f0f2f5]">
                                                {event.tag}
                                            </span>
                                        )}
                                    </div>
                                    <CardContent className="flex flex-col justify-center p-6">
                                        <h3 className="font-display text-xl font-semibold text-navy dark:text-[#f0f2f5]">
                                            {event.title}
                                        </h3>
                                        <div className="mt-3 space-y-2">
                                            <p className="flex items-center gap-2 text-sm text-slate-text dark:text-[#8a9bbd]">
                                                <Calendar className="h-4 w-4 text-gold" />
                                                {event.date}
                                            </p>
                                            <p className="flex items-center gap-2 text-sm text-slate-text dark:text-[#8a9bbd]">
                                                <Clock className="h-4 w-4 text-gold" />
                                                {event.time}
                                            </p>
                                            <p className="flex items-center gap-2 text-sm text-slate-text dark:text-[#8a9bbd]">
                                                <MapPin className="h-4 w-4 text-gold" />
                                                {event.location}
                                            </p>
                                        </div>
                                        <p className="mt-3 text-sm leading-relaxed text-slate-text dark:text-[#8a9bbd]">
                                            {event.desc}
                                        </p>
                                    </CardContent>
                                </div>
                            </Card>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Past Events */}
            <section className="bg-warm-gray dark:bg-[#151d32] py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <AnimateOnScroll animation="fadeInUp">
                        <SectionHeading
                            title="Past Events"
                            subtitle="Highlights from our celebrations and gatherings."
                        />
                    </AnimateOnScroll>
                    <StaggerContainer
                        className="grid gap-6 lg:grid-cols-2"
                        staggerDelay={150}
                        animation="fadeInUp"
                    >
                        {pastEvents.map((event) => (
                            <Card
                                key={event.title}
                                className="group overflow-hidden border-none shadow-sm transition-all duration-300 hover:shadow-md"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="font-display text-xl font-semibold text-navy dark:text-[#f0f2f5]">
                                        {event.title}
                                    </h3>
                                    <div className="mt-2 space-y-1">
                                        <p className="flex items-center gap-2 text-sm text-slate-text dark:text-[#8a9bbd]">
                                            <Calendar className="h-4 w-4 text-gold" />
                                            {event.date}
                                        </p>
                                        <p className="flex items-center gap-2 text-sm text-slate-text dark:text-[#8a9bbd]">
                                            <MapPin className="h-4 w-4 text-gold" />
                                            {event.location}
                                        </p>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-text dark:text-[#8a9bbd]">
                                        {event.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </StaggerContainer>

                    {/* Event Gallery */}
                    <div className="mt-12">
                        <AnimateOnScroll animation="fadeInUp">
                            <h3 className="mb-6 text-center font-display text-2xl font-semibold text-navy dark:text-[#f0f2f5]">
                                Event Highlights
                            </h3>
                        </AnimateOnScroll>
                        <StaggerContainer
                            className="grid grid-cols-2 gap-3 sm:grid-cols-4"
                            staggerDelay={100}
                            animation="fadeInScale"
                        >
                            {[
                                { src: "/images/event-party-outdoor.jpeg", alt: "Outdoor school event" },
                                { src: "/images/child-microphone.jpeg", alt: "Child performing" },
                                { src: "/images/ceremony-setup.jpeg", alt: "Ceremony stage" },
                                { src: "/images/classroom-group-3.jpeg", alt: "Children in classroom" },
                            ].map((img, i) => (
                                <div
                                    key={i}
                                    className="group relative aspect-square overflow-hidden rounded-xl shadow-sm"
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        sizes="(max-width: 640px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-navy dark:bg-[#0a0f1a]/0 transition-colors duration-300 group-hover:bg-navy/15" />
                                </div>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </section>
        </>
    );
}
