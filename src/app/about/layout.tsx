import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Ednisha Day Care's story, our proprietor Mrs. Eunice Sharka, and the values that guide our nurturing environment.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
