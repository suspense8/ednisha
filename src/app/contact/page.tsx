"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { MapPin, Phone, Mail, Clock, MessageCircle, Briefcase, Sparkles, Users } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "23231180012";

function buildWhatsAppUrl(form: {
    name: string;
    phone: string;
    email: string;
    childName: string;
    childAge: string;
    message: string;
}) {
    const lines = [
        `Hello! I'd like to inquire about enrolling my child at Ednisha Day Care.`,
        ``,
        `*Parent/Guardian:* ${form.name}`,
        `*Phone:* ${form.phone}`,
    ];
    if (form.email) lines.push(`*Email:* ${form.email}`);
    if (form.childName) lines.push(`*Child's Name:* ${form.childName}`);
    if (form.childAge) lines.push(`*Age Group:* ${form.childAge}`);
    if (form.message) {
        lines.push(``);
        lines.push(`*Message:* ${form.message}`);
    }
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        phone: "",
        email: "",
        childName: "",
        childAge: "",
        message: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
        // Clear error on change
        if (errors[name]) {
            setErrors((prev) => {
                const next = { ...prev };
                delete next[name];
                return next;
            });
        }
    }

    function validate(): boolean {
        const newErrors: Record<string, string> = {};

        const trimmedName = formState.name.trim();
        if (!trimmedName) {
            newErrors.name = "Name is required.";
        } else if (trimmedName.length < 2 || trimmedName.length > 100) {
            newErrors.name = "Name must be between 2 and 100 characters.";
        }

        const trimmedPhone = formState.phone.trim();
        if (!trimmedPhone) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^[\d\s\-+()]{7,20}$/.test(trimmedPhone)) {
            newErrors.phone = "Please enter a valid phone number.";
        }

        if (formState.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (formState.childName.trim().length > 100) {
            newErrors.childName = "Child's name must be under 100 characters.";
        }

        if (formState.message.trim().length > 1000) {
            newErrors.message = "Message must be under 1000 characters.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!validate()) return;

        const url = buildWhatsAppUrl(formState);
        window.open(url, "_blank", "noopener,noreferrer");
    }

    return (
        <>
            {/* Hero */}
            <section className="relative flex min-h-[300px] items-center overflow-hidden bg-navy dark:bg-[#0a0f1a]">
                <Image
                    src="/images/event-party-outdoor.jpeg"
                    alt="Ednisha Day Care community"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-25"
                />
                <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <p
                        className="mb-2 font-display text-sm font-semibold tracking-wider text-gold animate-heroTextReveal"
                        style={{ animationDelay: "200ms", opacity: 0, animationFillMode: "forwards" }}
                    >
                        GET IN TOUCH
                    </p>
                    <h1
                        className="font-display text-4xl font-bold text-white sm:text-5xl animate-heroTextReveal"
                        style={{ animationDelay: "400ms", opacity: 0, animationFillMode: "forwards" }}
                    >
                        Contact & Enrollment
                    </h1>
                    <p
                        className="mt-3 max-w-xl text-base text-white/70 animate-heroTextReveal"
                        style={{ animationDelay: "600ms", opacity: 0, animationFillMode: "forwards" }}
                    >
                        Ready to join the Ednisha family? We&#39;d love to hear from you.
                    </p>
                </div>
            </section>

            <section className="bg-cloud dark:bg-[#0f1422] py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-5">
                        {/* Form */}
                        <AnimateOnScroll animation="fadeInLeft" duration={700} className="lg:col-span-3">
                            <SectionHeading
                                title="Enrollment Inquiry"
                                subtitle="Fill out the form below — it will open a WhatsApp chat with your details so we can respond quickly."
                                centered={false}
                            />

                            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-1.5 block text-sm font-semibold text-navy dark:text-[#f0f2f5]"
                                        >
                                            Parent / Guardian Name *
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            maxLength={100}
                                            value={formState.name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            className={`h-12 w-full rounded-lg border bg-white dark:bg-[#1a243a] px-4 text-base text-charcoal placeholder:text-slate-text/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all duration-200 ${errors.name ? "border-error" : "border-gray-200"}`}
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-xs text-error">{errors.name}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="mb-1.5 block text-sm font-semibold text-navy dark:text-[#f0f2f5]"
                                        >
                                            Phone Number *
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            maxLength={20}
                                            value={formState.phone}
                                            onChange={handleChange}
                                            placeholder="e.g. 031-18-0012"
                                            className={`h-12 w-full rounded-lg border bg-white dark:bg-[#1a243a] px-4 text-base text-charcoal placeholder:text-slate-text/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all duration-200 ${errors.phone ? "border-error" : "border-gray-200"}`}
                                        />
                                        {errors.phone && (
                                            <p className="mt-1 text-xs text-error">{errors.phone}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-1.5 block text-sm font-semibold text-navy dark:text-[#f0f2f5]"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        className={`h-12 w-full rounded-lg border bg-white dark:bg-[#1a243a] px-4 text-base text-charcoal placeholder:text-slate-text/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all duration-200 ${errors.email ? "border-error" : "border-gray-200"}`}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-xs text-error">{errors.email}</p>
                                    )}
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="childName"
                                            className="mb-1.5 block text-sm font-semibold text-navy dark:text-[#f0f2f5]"
                                        >
                                            Child&#39;s Name
                                        </label>
                                        <input
                                            id="childName"
                                            name="childName"
                                            type="text"
                                            maxLength={100}
                                            value={formState.childName}
                                            onChange={handleChange}
                                            placeholder="Child's full name"
                                            className={`h-12 w-full rounded-lg border bg-white dark:bg-[#1a243a] px-4 text-base text-charcoal placeholder:text-slate-text/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all duration-200 ${errors.childName ? "border-error" : "border-gray-200"}`}
                                        />
                                        {errors.childName && (
                                            <p className="mt-1 text-xs text-error">{errors.childName}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="childAge"
                                            className="mb-1.5 block text-sm font-semibold text-navy dark:text-[#f0f2f5]"
                                        >
                                            Child&#39;s Age Group
                                        </label>
                                        <select
                                            id="childAge"
                                            name="childAge"
                                            value={formState.childAge}
                                            onChange={handleChange}
                                            className="h-12 w-full rounded-lg border border-gray-200 bg-white dark:bg-[#1a243a] px-4 text-base text-charcoal focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all duration-200"
                                        >
                                            <option value="">Select age group</option>
                                            <option value="Daycare (6 months – 2 years)">Daycare (6 months – 2 years)</option>
                                            <option value="Nursery (2 – 4 years)">Nursery (2 – 4 years)</option>
                                            <option value="Preparatory (4 – 6 years)">
                                                Preparatory (4 – 6 years)
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-1.5 block text-sm font-semibold text-navy dark:text-[#f0f2f5]"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        maxLength={1000}
                                        value={formState.message}
                                        onChange={handleChange}
                                        placeholder="Tell us how we can help you..."
                                        className={`w-full rounded-lg border bg-white dark:bg-[#1a243a] px-4 py-3 text-base text-charcoal placeholder:text-slate-text/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all duration-200 ${errors.message ? "border-error" : "border-gray-200"}`}
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-xs text-error">{errors.message}</p>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full rounded-lg bg-[#25D366] py-6 text-base font-semibold text-white hover:bg-[#25D366]/90 hover:scale-[1.01] transition-all duration-200 sm:w-auto sm:px-10"
                                >
                                    <MessageCircle className="mr-2 h-4 w-4" />
                                    Send via WhatsApp
                                </Button>
                                <p className="text-xs text-slate-text dark:text-[#8a9bbd]/70">
                                    This will open a WhatsApp conversation with your details pre-filled.
                                </p>
                            </form>
                        </AnimateOnScroll>

                        {/* Info Sidebar */}
                        <div className="space-y-6 lg:col-span-2">
                            <AnimateOnScroll animation="fadeInRight" delay={100}>
                                <Card className="border-none shadow-sm">
                                    <CardContent className="p-6">
                                        <h3 className="mb-4 font-display text-lg font-semibold text-navy dark:text-[#f0f2f5]">
                                            School Information
                                        </h3>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3">
                                                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                                                <div>
                                                    <p className="text-sm font-semibold text-navy dark:text-[#f0f2f5]">
                                                        Address
                                                    </p>
                                                    <p className="text-sm text-slate-text dark:text-[#8a9bbd]">
                                                        #6 Robert Lane, Kossoh Town
                                                        <br />
                                                        Western Rural Area
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                                                <div>
                                                    <p className="text-sm font-semibold text-navy dark:text-[#f0f2f5]">Phone</p>
                                                    <a
                                                        href="tel:+23231180012"
                                                        className="text-sm text-brand-blue hover:underline"
                                                    >
                                                        031-18-0012
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                                                <div>
                                                    <p className="text-sm font-semibold text-navy dark:text-[#f0f2f5]">Email</p>
                                                    <a
                                                        href="mailto:ednishadaycare@gmail.com"
                                                        className="text-sm text-brand-blue hover:underline"
                                                    >
                                                        ednishadaycare@gmail.com
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                                                <div>
                                                    <p className="text-sm font-semibold text-navy dark:text-[#f0f2f5]">Hours</p>
                                                    <p className="text-sm text-slate-text dark:text-[#8a9bbd]">
                                                        Monday – Friday: 7:00 AM – 5:00 PM
                                                    </p>
                                                    <p className="text-xs text-slate-text dark:text-[#8a9bbd]/70">
                                                        Closed on Weekends &amp; Public Holidays
                                                    </p>
                                                    <p className="mt-1 text-xs text-gold">
                                                        💡 Daycare only follows public holidays — no term breaks
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </AnimateOnScroll>

                            {/* WhatsApp Card */}
                            <AnimateOnScroll animation="fadeInRight" delay={250}>
                                <Card className="border-none bg-[#25D366]/10 shadow-sm transition-all duration-300 hover:shadow-md">
                                    <CardContent className="p-6 text-center">
                                        <MessageCircle className="mx-auto mb-3 h-10 w-10 text-[#25D366]" />
                                        <h3 className="font-display text-lg font-semibold text-navy dark:text-[#f0f2f5]">
                                            Chat on WhatsApp
                                        </h3>
                                        <p className="mt-1 text-sm text-slate-text dark:text-[#8a9bbd]">
                                            Quick response guaranteed!
                                        </p>
                                        <a
                                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'm interested in learning more about Ednisha Day Care.")}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button className="mt-4 w-full rounded-lg bg-[#25D366] text-white hover:bg-[#25D366]/90 hover:scale-[1.02] transition-all duration-200">
                                                <MessageCircle className="mr-2 h-4 w-4" />
                                                Send us a WhatsApp
                                            </Button>
                                        </a>
                                    </CardContent>
                                </Card>
                            </AnimateOnScroll>

                            {/* Map placeholder */}
                            <AnimateOnScroll animation="fadeInRight" delay={400}>
                                <Card className="overflow-hidden border-none shadow-sm">
                                    <div className="relative h-48 bg-sky/30">
                                        <div className="flex h-full flex-col items-center justify-center text-center">
                                            <MapPin className="mb-2 h-8 w-8 text-navy dark:text-[#f0f2f5] animate-gentleBounce" />
                                            <p className="font-display text-sm font-semibold text-navy dark:text-[#f0f2f5]">
                                                #6 Robert Lane
                                            </p>
                                            <p className="text-xs text-slate-text dark:text-[#8a9bbd]">
                                                Kossoh Town, Western Rural Area
                                            </p>
                                            <a
                                                href="https://maps.app.goo.gl/Y81cfBFe4U17MaFo8"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-2 text-xs font-semibold text-brand-blue hover:underline"
                                            >
                                                Open in Google Maps
                                            </a>
                                        </div>
                                    </div>
                                </Card>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enrollment Process */}
            <section className="bg-warm-gray dark:bg-[#151d32] py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <AnimateOnScroll animation="fadeInUp">
                        <SectionHeading
                            title="How to Enroll"
                            subtitle="Getting your child started at Ednisha is simple."
                        />
                    </AnimateOnScroll>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                step: "1",
                                title: "Contact Us",
                                desc: "Reach out via phone, WhatsApp, email, or fill out the inquiry form above.",
                            },
                            {
                                step: "2",
                                title: "Visit the School",
                                desc: "Schedule a visit to see our facilities and meet our team in person.",
                            },
                            {
                                step: "3",
                                title: "Register",
                                desc: "Complete the enrollment form and provide the required documents.",
                            },
                            {
                                step: "4",
                                title: "Welcome!",
                                desc: "Your child joins the Ednisha family and begins their learning journey.",
                            },
                        ].map((item, i) => (
                            <AnimateOnScroll key={item.step} animation="fadeInUp" delay={i * 120}>
                                <Card className="border-none shadow-sm text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                                    <CardContent className="p-6">
                                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-navy dark:text-[#f0f2f5] font-display text-xl font-bold">
                                            {item.step}
                                        </div>
                                        <h3 className="font-display text-lg font-semibold text-navy dark:text-[#f0f2f5]">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-slate-text dark:text-[#8a9bbd]">
                                            {item.desc}
                                        </p>
                                    </CardContent>
                                </Card>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CAREER OPPORTUNITIES ===== */}
            <section id="careers" className="bg-cloud dark:bg-[#0f1422] py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <AnimateOnScroll animation="fadeInUp">
                        <SectionHeading
                            title="Career Opportunities"
                            subtitle="Join our growing team — we're hiring passionate educators!"
                        />
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeInUp" delay={150}>
                        <Card className="overflow-hidden border-none shadow-md">
                            {/* Green header strip */}
                            <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 dark:from-emerald-800 dark:via-teal-800 dark:to-emerald-900 px-6 py-4 sm:px-8">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-bannerShimmer" />
                                <div className="relative flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                        <Sparkles className="h-5 w-5 text-yellow-300" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                                                Daycare Teachers Wanted
                                            </h3>
                                            <span className="relative flex h-6 items-center gap-1.5 rounded-full bg-white/20 px-2.5 text-[10px] font-bold uppercase tracking-wider text-white">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-300 opacity-75" />
                                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
                                                </span>
                                                Now Hiring
                                            </span>
                                        </div>
                                        <p className="text-sm text-white/80">
                                            Ednisha Day Care &amp; Preparatory School
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <CardContent className="p-6 sm:p-8">
                                <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
                                    {/* Position Details */}
                                    <div>
                                        <div className="mb-3 flex items-center gap-2">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
                                                <Briefcase className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                                            </div>
                                            <h4 className="font-display text-base font-semibold text-navy dark:text-[#f0f2f5]">
                                                Position Details
                                            </h4>
                                        </div>
                                        <ul className="space-y-2.5 text-sm text-slate-text dark:text-[#8a9bbd]">
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                                                <span><strong className="text-navy dark:text-[#f0f2f5]">2 Female Daycare Teachers</strong></span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                                                <span>Patient, enthusiastic &amp; passionate about childcare</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                                                <span>Ability to create engaging activities for children</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Where & When */}
                                    <div>
                                        <div className="mb-3 flex items-center gap-2">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40">
                                                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <h4 className="font-display text-base font-semibold text-navy dark:text-[#f0f2f5]">
                                                Where &amp; When to Apply
                                            </h4>
                                        </div>
                                        <ul className="space-y-2.5 text-sm text-slate-text dark:text-[#8a9bbd]">
                                            <li className="flex items-start gap-2">
                                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                                                <span><strong className="text-navy dark:text-[#f0f2f5]">#6 Robert Lane, Kossoh Town</strong></span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                                                <span>Monday – Friday, <strong className="text-navy dark:text-[#f0f2f5]">10:00 AM – 3:00 PM</strong></span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Users className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                                                <span>Walk in during the hours above to apply in person</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Contact Numbers */}
                                    <div>
                                        <div className="mb-3 flex items-center gap-2">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/20">
                                                <Phone className="h-5 w-5 text-gold" />
                                            </div>
                                            <h4 className="font-display text-base font-semibold text-navy dark:text-[#f0f2f5]">
                                                Call to Inquire
                                            </h4>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            {[
                                                { display: "031-18-0012", href: "tel:+23231180012" },
                                                { display: "031-47-5480", href: "tel:+23231475480" },
                                                { display: "080-16-1829", href: "tel:+23280161829" },
                                                { display: "088-41-3383", href: "tel:+23288413383" },
                                            ].map((num) => (
                                                <a
                                                    key={num.display}
                                                    href={num.href}
                                                    className="group flex items-center gap-2 rounded-lg bg-cloud dark:bg-[#151d32] px-3 py-2.5 text-sm font-semibold text-emerald-700 dark:text-emerald-400 transition-all duration-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:scale-[1.02]"
                                                >
                                                    <Phone className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:rotate-12" />
                                                    {num.display}
                                                </a>
                                            ))}
                                        </div>
                                        <p className="mt-3 text-xs text-slate-text/70 dark:text-[#8a9bbd]/50">
                                            Call any number above to express your interest
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
