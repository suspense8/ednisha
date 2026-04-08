import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events & News",
    description:
        "Stay updated with events, announcements, and news from Ednisha Day Care & Preparatory School.",
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
