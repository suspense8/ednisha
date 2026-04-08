import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery",
    description:
        "Browse photos from Ednisha Day Care — classrooms, students, events, and daily life at our school in Kossoh Town.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return children;
}
