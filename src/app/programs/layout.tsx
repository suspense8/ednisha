import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Programs",
    description:
        "Explore our Daycare, Nursery, and Preparatory programs — tailored learning for children ages 6 months to 6 years at Ednisha Day Care.",
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
