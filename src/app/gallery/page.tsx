"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { X } from "lucide-react";

const categories = ["All", "Classroom", "Students", "Events", "Daycare"] as const;
type Category = (typeof categories)[number];

interface GalleryImage {
    src: string;
    alt: string;
    category: Exclude<Category, "All">;
}

const images: GalleryImage[] = [
    // Classroom group photos (new)
    {
        src: "/images/classroom-group-1.jpeg",
        alt: "Children in uniform posing together in the classroom",
        category: "Classroom",
    },
    {
        src: "/images/classroom-group-2.jpeg",
        alt: "Nursery class group photo with educational charts",
        category: "Classroom",
    },
    {
        src: "/images/classroom-group-3.jpeg",
        alt: "Students standing and sitting together in classroom",
        category: "Classroom",
    },
    {
        src: "/images/classroom-group-4.jpeg",
        alt: "Young learners gathered in front of alphabet charts",
        category: "Classroom",
    },
    {
        src: "/images/classroom-group-5.jpeg",
        alt: "Class photo with children in school uniforms",
        category: "Classroom",
    },
    {
        src: "/images/classroom-group-6.jpeg",
        alt: "Students posing with body parts and alphabet posters",
        category: "Classroom",
    },
    {
        src: "/images/classroom-group-7.jpeg",
        alt: "Group of children smiling in the learning area",
        category: "Classroom",
    },
    {
        src: "/images/children-with-toys.jpeg",
        alt: "Children standing with toys and learning materials",
        category: "Classroom",
    },
    // Original classroom images
    {
        src: "/images/classroom-learning-1.jpeg",
        alt: "Children learning with chalkboards in classroom",
        category: "Classroom",
    },
    {
        src: "/images/classroom-learning-2.jpeg",
        alt: "Toddlers at desks with chalkboard activities",
        category: "Classroom",
    },
    // Individual student photos (new)
    {
        src: "/images/student-at-desk.jpeg",
        alt: "Student in uniform studying at her desk",
        category: "Students",
    },
    {
        src: "/images/student-raising-hand.jpeg",
        alt: "Student raising hand during a classroom exercise",
        category: "Students",
    },
    {
        src: "/images/student-portrait-1.jpeg",
        alt: "Young student posing by the alphabet wall",
        category: "Students",
    },
    {
        src: "/images/child-with-bottle.jpeg",
        alt: "Toddler holding a colorful water bottle in class",
        category: "Students",
    },
    {
        src: "/images/toddler-by-wall-art.jpeg",
        alt: "Little one standing by painted alphabet wall",
        category: "Students",
    },
    // Daycare / rest time (new)
    {
        src: "/images/child-napping-desk.jpeg",
        alt: "Child napping peacefully at desk during rest time",
        category: "Daycare",
    },
    {
        src: "/images/nap-time.jpeg",
        alt: "Nap time at the daycare — children resting comfortably",
        category: "Daycare",
    },
    {
        src: "/images/toddler-resting.jpeg",
        alt: "Toddler resting comfortably during quiet time",
        category: "Daycare",
    },
    // Events (original)
    {
        src: "/images/event-party-outdoor.jpeg",
        alt: "Outdoor event with colorful furniture and families",
        category: "Events",
    },
    {
        src: "/images/ceremony-setup.jpeg",
        alt: "Ceremony stage setup for school event",
        category: "Events",
    },
    {
        src: "/images/child-microphone.jpeg",
        alt: "Child performing with microphone at school event",
        category: "Events",
    },
    {
        src: "/images/children-outdoor.jpeg",
        alt: "Group of children playing outdoors",
        category: "Events",
    },
];

export default function GalleryPage() {
    const [filter, setFilter] = useState<Category>("All");
    const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

    const filtered =
        filter === "All" ? images : images.filter((img) => img.category === filter);

    return (
        <>
            {/* Hero */}
            <section className="relative flex min-h-[300px] items-center overflow-hidden bg-navy">
                <Image
                    src="/images/classroom-group-1.jpeg"
                    alt="Children at Ednisha"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-25"
                />
                <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <p
                        className="mb-2 font-display text-sm font-semibold tracking-wider text-gold animate-heroTextReveal"
                        style={{ animationDelay: "200ms", opacity: 0, animationFillMode: "forwards" }}
                    >
                        GALLERY
                    </p>
                    <h1
                        className="font-display text-4xl font-bold text-white sm:text-5xl animate-heroTextReveal"
                        style={{ animationDelay: "400ms", opacity: 0, animationFillMode: "forwards" }}
                    >
                        Life at Ednisha
                    </h1>
                    <p
                        className="mt-3 max-w-xl text-base text-white/70 animate-heroTextReveal"
                        style={{ animationDelay: "600ms", opacity: 0, animationFillMode: "forwards" }}
                    >
                        Moments of joy, learning, and celebration captured at our school.
                    </p>
                </div>
            </section>

            {/* Gallery */}
            <section className="bg-cloud py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <AnimateOnScroll animation="fadeInUp">
                        <SectionHeading
                            title="Photo Gallery"
                            subtitle="Browse photos from our classrooms, students, events, and daily care."
                        />
                    </AnimateOnScroll>

                    {/* Filters */}
                    <AnimateOnScroll animation="fadeInUp" delay={200}>
                        <div className="mb-8 flex flex-wrap justify-center gap-2">
                            {categories.map((cat) => (
                                <Button
                                    key={cat}
                                    variant={filter === cat ? "default" : "outline"}
                                    onClick={() => setFilter(cat)}
                                    className={`rounded-full px-5 text-sm transition-all duration-200 ${filter === cat
                                        ? "bg-navy text-white hover:bg-navy/90 scale-105"
                                        : "border-navy/20 text-navy hover:bg-navy/5 hover:scale-105"
                                        }`}
                                >
                                    {cat}
                                    <span className="ml-1.5 text-xs opacity-60">
                                        ({cat === "All" ? images.length : images.filter(i => i.category === cat).length})
                                    </span>
                                </Button>
                            ))}
                        </div>
                    </AnimateOnScroll>

                    {/* Grid */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
                        {filtered.map((img, i) => (
                            <button
                                key={`${filter}-${img.src}`}
                                onClick={() => setLightbox(img)}
                                className="group relative aspect-square overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 animate-fadeInScale"
                                style={{
                                    animationDelay: `${i * 60}ms`,
                                    opacity: 0,
                                    animationFillMode: "forwards",
                                }}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/20" />
                                <div className="absolute bottom-0 left-0 right-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 bg-gradient-to-t from-navy/70 to-transparent p-3">
                                    <p className="text-xs text-white/90 line-clamp-2">{img.alt}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 lightbox-overlay"
                    onClick={() => setLightbox(null)}
                >
                    <button
                        onClick={() => setLightbox(null)}
                        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors duration-200"
                        aria-label="Close"
                    >
                        <X className="h-6 w-6" />
                    </button>
                    <div
                        className="relative max-h-[80vh] max-w-4xl overflow-hidden rounded-xl lightbox-image"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={lightbox.src}
                            alt={lightbox.alt}
                            width={1200}
                            height={800}
                            className="h-auto max-h-[80vh] w-auto rounded-xl object-contain"
                        />
                        <p className="mt-3 text-center text-sm text-white/70">
                            {lightbox.alt}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
