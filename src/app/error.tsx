"use client";

import { Button } from "@/components/ui/button";
import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-error/10">
                <span className="text-4xl">⚠️</span>
            </div>
            <h1 className="font-display text-2xl font-semibold text-navy dark:text-[#f0f2f5] sm:text-3xl">
                Something Went Wrong
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-slate-text dark:text-[#8a9bbd]">
                We&apos;re sorry — an unexpected error occurred. Please try again
                or return to the home page.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                    onClick={reset}
                    className="rounded-lg bg-navy dark:bg-[#0a0f1a] px-6 text-white hover:bg-navy/90"
                >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again
                </Button>
                <Link href="/">
                    <Button
                        variant="outline"
                        className="rounded-lg border-navy dark:border-[#f0f2f5] text-navy dark:text-[#f0f2f5] hover:bg-navy hover:text-white"
                    >
                        <Home className="mr-2 h-4 w-4" />
                        Go Home
                    </Button>
                </Link>
            </div>
        </section>
    );
}
