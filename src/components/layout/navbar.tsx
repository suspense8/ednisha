"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/gallery", label: "Gallery" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 20);
        }
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? "bg-navy dark:bg-[#0a0f1a]/98 shadow-lg backdrop-blur-md"
                    : "bg-navy dark:bg-[#0a0f1a] shadow-none"
                }`}
        >
            <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src="/images/ednisha-logo.png"
                            alt="Ednisha Logo"
                            fill
                            sizes="44px"
                            className="object-cover"
                        />
                    </div>
                    <div className="hidden sm:block">
                        <p className="font-display text-lg font-semibold leading-tight text-white inline-block mt-1">
                            Ednisha
                        </p>
                        <p className="text-[10px] font-medium tracking-wide text-gold">
                            LEARN, LEAD &amp; SUCCEED
                        </p>
                    </div>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-2 md:flex">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300
                                    ${isActive ? "text-gold" : "text-white/90 hover:text-gold"}
                                    /* The Underline Logic */
                                    after:absolute after:bottom-1 after:left-1/2 after:h-[2px] after:bg-gold after:transition-all after:duration-300 after:-translate-x-1/2
                                    ${isActive ? "after:w-[60%]" : "after:w-0 hover:after:w-[60%]"}
                                `}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right actions */}
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    
                    <Link href="/contact" className="hidden md:block">
                        <Button className="rounded-lg bg-gold px-6 font-semibold text-navy dark:text-[#f0f2f5] hover:bg-gold/90 hover:scale-[1.02] transition-all duration-200">
                            Enroll Now
                        </Button>
                    </Link>

                    {/* Mobile Menu */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <button className="rounded-md p-2 text-white hover:bg-white/10 transition-colors">
                                <Menu className="h-6 w-6" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] border-none bg-navy dark:bg-[#0a0f1a] p-0">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className="flex h-full flex-col">
                                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="relative h-9 w-9 overflow-hidden rounded-full">
                                            <Image src="/images/ednisha-logo.png" alt="Logo" fill sizes="36px" className="object-cover" />
                                        </div>
                                        <span className="font-display text-lg font-semibold text-white">Ednisha</span>
                                    </div>
                                </div>

                                <nav className="flex flex-col gap-1 px-4 py-6">
                                    {navLinks.map((link, i) => {
                                        const isActive = pathname === link.href;
                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setOpen(false)}
                                                className={`rounded-lg px-4 py-3 text-base font-semibold transition-all duration-200 
                                                    ${isActive ? "bg-white/10 text-gold translate-x-1" : "text-white/90 hover:bg-white/10 hover:text-gold hover:translate-x-1"}`}
                                                style={{
                                                    animation: open ? `fadeInRight 0.3s ease-out ${i * 50}ms forwards` : undefined,
                                                    opacity: open ? 0 : undefined,
                                                }}
                                            >
                                                {link.label}
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}