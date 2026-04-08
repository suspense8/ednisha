import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
            <div className="mb-6 font-display text-8xl font-bold text-gold sm:text-9xl">
                404
            </div>
            <h1 className="font-display text-2xl font-semibold text-navy dark:text-[#f0f2f5] sm:text-3xl">
                Page Not Found
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-slate-text dark:text-[#8a9bbd]">
                Oops! The page you&apos;re looking for doesn&apos;t exist.
                It might have been moved or removed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/">
                    <Button className="rounded-lg bg-navy dark:bg-[#0a0f1a] px-6 text-white hover:bg-navy/90">
                        <Home className="mr-2 h-4 w-4" />
                        Go Home
                    </Button>
                </Link>
                <Link href="/contact">
                    <Button
                        variant="outline"
                        className="rounded-lg border-navy dark:border-[#f0f2f5] text-navy dark:text-[#f0f2f5] hover:bg-navy hover:text-white"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Contact Us
                    </Button>
                </Link>
            </div>
        </section>
    );
}
