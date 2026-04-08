import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { ThemeProvider } from "@/components/theme-provider";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://ednishadaycare.com"
  ),
  title: {
    default: "Ednisha Day Care & Preparatory School | Home Away From Home",
    template: "%s | Ednisha Day Care",
  },
  description:
    "Ednisha Day Care & Preparatory School offers a nurturing, fun learning environment for children ages 6 months to 6 years in Kossoh Town. Enroll your child today!",
  keywords: [
    "daycare",
    "Kossoh Town",
    "preparatory school",
    "Ednisha",
    "childcare",
    "nursery",
    "Sierra Leone",
  ],
  openGraph: {
    title: "Ednisha Day Care & Preparatory School",
    description:
      "Home Away From Home — A nurturing, fun learning environment for children in Kossoh Town.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/children-outdoor.jpeg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fredoka.variable} ${nunito.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
