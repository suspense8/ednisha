"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const footerLinks = [
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/gallery", label: "Gallery" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
];

function TikTokIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" />
        </svg>
    );
}

function FacebookIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    );
}

export function Footer() {
    return (
        <footer className="bg-navy dark:bg-[#0a0f1a] text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <AnimateOnScroll animation="fadeInUp" delay={0}>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                                    <Image
                                        src="/images/ednisha-logo.png"
                                        alt="Ednisha Logo"
                                        fill
                                        sizes="44px"
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-display text-lg font-semibold">Ednisha</p>
                                    <p className="text-[10px] tracking-wider text-gold">
                                        LEARN, LEAD &amp; SUCCEED
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed text-white/70">
                                A nurturing, fun learning environment where every child is loved,
                                valued, and given the space to thrive.
                            </p>
                            <p className="font-display text-sm italic text-gold">
                                &quot;Home Away From Home&quot;
                            </p>
                            {/* Social links */}
                            <div className="flex gap-3 pt-1">
                                <a
                                    href="https://www.facebook.com/share/g/1JAqshaDrq/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-[#1a243a]/10 text-navy dark:text-white transition-all duration-200 hover:bg-[#1877F2] hover:text-white hover:scale-110"
                                    aria-label="Facebook"
                                >
                                    <FacebookIcon className="h-4 w-4" />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@ednishadaycare"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-[#1a243a]/10 text-navy dark:text-white transition-all duration-200 hover:bg-black hover:text-white hover:scale-110"
                                    aria-label="TikTok"
                                >
                                    <TikTokIcon className="h-4 w-4" />
                                </a>
                                <a
                                    href="mailto:ednishadaycare@gmail.com"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-[#1a243a]/10 text-navy dark:text-white transition-all duration-200 hover:bg-red-600 hover:text-white hover:scale-110"
                                    aria-label="Email"
                                >
                                    <Mail className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Quick Links */}
                    <AnimateOnScroll animation="fadeInUp" delay={100}>
                        <div>
                            <h3 className="mb-4 font-display text-base font-semibold text-gold">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                {footerLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white/70 transition-all duration-200 hover:text-gold hover:translate-x-1 inline-block"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimateOnScroll>

                    {/* Contact Info */}
                    <AnimateOnScroll animation="fadeInUp" delay={200}>
                        <div>
                            <h3 className="mb-4 font-display text-base font-semibold text-gold">
                                Contact Us
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-white/70">
                                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                                    <span>#6 Robert Lane, Kossoh Town,<br />Western Rural Area</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-white/70">
                                    <Phone className="h-4 w-4 shrink-0 text-gold" />
                                    <a
                                        href="tel:+23231180012"
                                        className="transition-colors hover:text-gold"
                                    >
                                        031-18-0012
                                    </a>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-white/70">
                                    <Mail className="h-4 w-4 shrink-0 text-gold" />
                                    <a
                                        href="mailto:ednishadaycare@gmail.com"
                                        className="transition-colors hover:text-gold"
                                    >
                                        ednishadaycare@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </AnimateOnScroll>

                    {/* Hours */}
                    <AnimateOnScroll animation="fadeInUp" delay={300}>
                        <div>
                            <h3 className="mb-4 font-display text-base font-semibold text-gold">
                                Operating Hours
                            </h3>
                            <ul className="space-y-2 text-sm text-white/70">
                                <li className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 shrink-0 text-gold" />
                                    <span>Monday – Friday</span>
                                </li>
                                <li className="pl-6">7:00 AM – 5:00 PM</li>
                                <li className="mt-2 pl-6 text-white/50">
                                    Closed on Weekends &amp; Public Holidays
                                </li>
                                <li className="mt-1 pl-6 text-xs text-gold/70">
                                    💡 Daycare only follows public holidays — no term breaks
                                </li>
                            </ul>
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* Bottom bar */}
                <AnimateOnScroll animation="fadeIn" delay={400}>
                    <div className="mt-10 border-t border-white/10 pt-6 text-center">
                        <p className="text-xs text-white/50">
                            © {new Date().getFullYear()} Ednisha Day Care &amp; Preparatory School.
                            All rights reserved.
                        </p>
                        <div className="mt-2 flex justify-center gap-4">
                            <a
                                href="https://www.facebook.com/share/g/1JAqshaDrq/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-white/40 hover:text-gold transition-colors"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://www.tiktok.com/@ednishadaycare"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-white/40 hover:text-gold transition-colors"
                            >
                                TikTok
                            </a>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </footer>
    );
}
