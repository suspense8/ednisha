"use client";

import { useState, useEffect } from "react";
import { X, Phone, MapPin, Clock, Briefcase, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

const CONTACT_NUMBERS = [
  { display: "031-18-0012", href: "tel:+23231180012" },
  { display: "031-47-5480", href: "tel:+23231475480" },
  { display: "080-16-1829", href: "tel:+23280161829" },
  { display: "088-41-3383", href: "tel:+23288413383" },
];

const BANNER_DISMISS_KEY = "ednisha-recruitment-banner-dismissed";

export function RecruitmentBanner() {
  const [dismissed, setDismissed] = useState(true); // Start hidden to avoid flash
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const wasDismissed = sessionStorage.getItem(BANNER_DISMISS_KEY);
    if (!wasDismissed) {
      setDismissed(false);
    }
  }, []);

  function handleDismiss() {
    setDismissed(true);
    setExpanded(false);
    sessionStorage.setItem(BANNER_DISMISS_KEY, "true");
  }

  // Don't render until mounted (avoids hydration mismatch)
  if (!mounted || dismissed) return null;

  return (
    <div className="recruitment-banner-wrapper">
      {/* Slim Top Banner */}
      <div className="relative z-[60] overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 dark:from-emerald-800 dark:via-teal-800 dark:to-emerald-900">
        {/* Animated shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-bannerShimmer" />
        
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex flex-1 items-center gap-2 text-left transition-opacity hover:opacity-90 sm:gap-3"
            aria-expanded={expanded}
            aria-controls="recruitment-details"
          >
            {/* Pulsing hiring badge */}
            <span className="relative flex h-7 items-center gap-1.5 rounded-full bg-white/20 px-3 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-300 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
              </span>
              Hiring
            </span>

            <p className="text-xs font-semibold text-white sm:text-sm">
              <span className="hidden sm:inline">
                We&apos;re looking for <strong className="text-yellow-200">2 Daycare Teachers</strong> — Tap to learn more
              </span>
              <span className="sm:hidden">
                <strong className="text-yellow-200">2 Teachers</strong> needed — Tap here
              </span>
            </p>

            {expanded ? (
              <ChevronUp className="h-4 w-4 shrink-0 text-white/70" />
            ) : (
              <ChevronDown className="h-4 w-4 shrink-0 text-white/70 animate-gentleBounce" />
            )}
          </button>

          <button
            onClick={handleDismiss}
            className="ml-2 rounded-full p-1 text-white/60 transition-all hover:bg-white/20 hover:text-white"
            aria-label="Dismiss recruitment banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Expandable Details Panel */}
      <div
        id="recruitment-details"
        className={`relative z-[59] overflow-hidden transition-all duration-500 ease-out ${
          expanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-b border-emerald-200 dark:border-emerald-900/50 bg-gradient-to-b from-emerald-50 to-white dark:from-[#0f1a14] dark:to-[#0f1422]">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            {/* Header */}
            <div className="mb-6 text-center">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-4 py-1.5">
                <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                  Join Our Team
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                Daycare Teachers Wanted
              </h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Ednisha Day Care &amp; Preparatory School is hiring!
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Position Details */}
              <div className="rounded-xl bg-white dark:bg-[#1a243a] p-5 shadow-sm ring-1 ring-gray-100 dark:ring-gray-700/30 transition-all duration-300 hover:shadow-md">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
                    <Briefcase className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-gray-900 dark:text-white">
                    Position
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    <span><strong>2 Female Daycare Teachers</strong></span>
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

              {/* Visit Details */}
              <div className="rounded-xl bg-white dark:bg-[#1a243a] p-5 shadow-sm ring-1 ring-gray-100 dark:ring-gray-700/30 transition-all duration-300 hover:shadow-md">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40">
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-gray-900 dark:text-white">
                    Where &amp; When
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                    <span><strong>#6 Robert Lane, Kossoh Town</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                    <span>Monday – Friday, <strong>10:00 AM – 3:00 PM</strong></span>
                  </li>
                </ul>
                <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">
                  Walk in during business hours to apply
                </p>
              </div>

              {/* Contact Numbers */}
              <div className="rounded-xl bg-white dark:bg-[#1a243a] p-5 shadow-sm ring-1 ring-gray-100 dark:ring-gray-700/30 transition-all duration-300 hover:shadow-md sm:col-span-2 lg:col-span-1">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/20 dark:bg-gold/10">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-gray-900 dark:text-white">
                    Contact Us
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {CONTACT_NUMBERS.map((num) => (
                    <a
                      key={num.display}
                      href={num.href}
                      className="group flex items-center gap-2 rounded-lg bg-gray-50 dark:bg-[#151d32] px-3 py-2.5 text-sm font-semibold text-emerald-700 dark:text-emerald-400 transition-all duration-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:scale-[1.02]"
                    >
                      <Phone className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:rotate-12" />
                      {num.display}
                    </a>
                  ))}
                </div>
                <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">
                  Call any of the numbers above to express your interest
                </p>
              </div>
            </div>

            {/* Bottom note */}
            <p className="mt-6 text-center text-xs text-gray-400 dark:text-gray-500">
              Interested persons are encouraged to visit the school or call during the hours stated above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
