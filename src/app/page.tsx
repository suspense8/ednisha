import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { WavyDivider } from "@/components/layout/wavy-divider";
import { AnimateOnScroll, StaggerContainer } from "@/components/ui/animate-on-scroll";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import {
  ShieldCheck,
  Sparkles,
  BookOpen,
  Users,
  GraduationCap,
  Baby,
  School,
  Calendar,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        <Image
          src="/images/classroom-group-1.jpeg"
          alt="Happy children at Ednisha Day Care"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/40" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p
              className="mb-3 inline-block rounded-full bg-gold/20 px-4 py-1.5 font-display text-sm font-semibold text-gold animate-heroTextReveal"
              style={{ animationDelay: "200ms", opacity: 0, animationFillMode: "forwards" }}
            >
              ✨ Home Away From Home
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              <span
                className="animate-heroTextReveal block"
                style={{ animationDelay: "400ms", opacity: 0, animationFillMode: "forwards" }}
              >
                Ednisha Day Care
              </span>
              <span
                className="block text-gold animate-heroTextReveal"
                style={{ animationDelay: "600ms", opacity: 0, animationFillMode: "forwards" }}
              >
                &amp; Preparatory School
              </span>
            </h1>
            <p
              className="mt-3 font-display text-sm font-medium tracking-wider text-white/60 animate-heroTextReveal"
              style={{ animationDelay: "700ms", opacity: 0, animationFillMode: "forwards" }}
            >
              Learn, Lead &amp; Succeed
            </p>
            <p
              className="mt-4 max-w-lg text-lg leading-relaxed text-white/80 animate-heroTextReveal"
              style={{ animationDelay: "800ms", opacity: 0, animationFillMode: "forwards" }}
            >
              Where every child is loved, valued, and given the space to thrive.
              A nurturing, fun learning environment in Kossoh Town.
            </p>
            <div
              className="mt-8 flex flex-col gap-3 sm:flex-row animate-heroTextReveal"
              style={{ animationDelay: "1000ms", opacity: 0, animationFillMode: "forwards" }}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-lg bg-gold px-8 py-6 text-base font-semibold text-navy hover:bg-gold/90 hover:scale-[1.02] transition-all"
                >
                  Enroll Your Child
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg border-2 border-white/30 bg-transparent px-8 py-6 text-base font-semibold text-white hover:bg-white/10"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-navy py-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 px-4 sm:flex-row sm:gap-16">
          <AnimatedCounter target="1+" label="Year of Service" />
          <AnimatedCounter target="20+" label="Happy Children" />
          <AnimatedCounter target="2" label="Dedicated Staff" />
        </div>
      </section>

      <WavyDivider color="#FAFBFC" />

      {/* ===== WELCOME ===== */}
      <section className="bg-cloud py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimateOnScroll animation="fadeInLeft" duration={700}>
              <SectionHeading
                title="Welcome to Ednisha"
                subtitle="A warm message from our proprietor, Mrs. Eunice Sharka."
                centered={false}
              />
              <p className="text-base leading-relaxed text-slate-text">
                Mrs. Eunice Sharka, the proprietor of Ednisha Day Care, is driven
                by a deep passion for children that turned her dream into reality.
                Since founding the school on January 6, 2025, she has built a
                nurturing environment where every child is treated with equal love,
                care, and attention.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-text">
                With an HTC qualification and an unwavering dedication to early
                childhood development, Mrs. Sharka has made Ednisha more than just
                a daycare — it&#39;s a haven where children from all walks of life
                feel loved, valued, and safe.
              </p>
              <Link href="/about" className="mt-6 inline-block">
                <Button variant="outline" className="rounded-lg border-navy text-navy hover:bg-navy hover:text-white">
                  Read Our Story <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInRight" duration={700} delay={200}>
              <div className="relative flex justify-center">
                <div className="relative h-80 w-80 overflow-hidden rounded-3xl border-4 border-gold/30 shadow-xl sm:h-96 sm:w-96">
                  <Image
                    src="/images/proprietor-portrait.jpeg"
                    alt="Mrs. Eunice Sharka — Proprietor of Ednisha Day Care"
                    fill
                    sizes="(max-width: 640px) 320px, 384px"
                    className="object-cover"
                  />
                </div>
                {/* Decorative blob */}
                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gold/20 animate-float" />
                <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-brand-blue/20 animate-float" style={{ animationDelay: "1.5s" }} />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS PREVIEW ===== */}
      <section className="bg-warm-gray py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fadeInUp">
            <SectionHeading
              title="Our Programs"
              subtitle="Tailored learning experiences for every stage of your child's growth."
            />
          </AnimateOnScroll>
          <StaggerContainer
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            staggerDelay={120}
            animation="fadeInUp"
          >
            {[
              {
                icon: Baby,
                title: "Daycare",
                age: "6 months – 2 years",
                desc: "Safe, loving care with sensory play, gentle music, and first social experiences for your little ones.",
                color: "bg-sunshine/20 text-navy",
                iconColor: "text-sunshine",
              },
              {
                icon: GraduationCap,
                title: "Nursery",
                age: "2 – 4 years",
                desc: "Play-based learning with alphabet, numbers, colors, shapes, and creative arts to spark curiosity.",
                color: "bg-brand-blue/10 text-navy",
                iconColor: "text-brand-blue",
              },
              {
                icon: School,
                title: "Preparatory",
                age: "4 – 6 years",
                desc: "School readiness with reading, writing, math, and social skills to prepare for primary school success.",
                color: "bg-gold/15 text-navy",
                iconColor: "text-gold",
              },
            ].map((program) => (
              <Card
                key={program.title}
                className="group relative overflow-hidden border-none bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${program.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <program.icon className={`h-7 w-7 ${program.iconColor}`} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {program.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-gold">
                    {program.age}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-text">
                    {program.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </StaggerContainer>
          <AnimateOnScroll animation="fadeInUp" delay={400}>
            <div className="mt-8 text-center">
              <Link href="/programs">
                <Button variant="outline" className="rounded-lg border-navy text-navy hover:bg-navy hover:text-white">
                  View All Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-cloud py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fadeInUp">
            <SectionHeading
              title="Why Choose Ednisha?"
              subtitle="What makes our daycare a trusted home for your child."
            />
          </AnimateOnScroll>
          <StaggerContainer
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            staggerDelay={100}
            animation="fadeInUp"
          >
            {[
              {
                icon: ShieldCheck,
                title: "Safe & Secure",
                desc: "A protected environment where parents can trust their children are in caring, capable hands.",
              },
              {
                icon: Sparkles,
                title: "Fun & Engaging",
                desc: "Color Days, field trips, and creative activities that make learning an exciting adventure every day.",
              },
              {
                icon: BookOpen,
                title: "Quality Education",
                desc: "Age-appropriate curriculum that builds strong foundations for reading, writing, and numeracy.",
              },
              {
                icon: Users,
                title: "Community Bond",
                desc: "Strong parent-school relationships with regular events, updates, and open communication.",
              },
            ].map((feature) => (
              <Card
                key={feature.title}
                className="border-none bg-white text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 transition-all duration-300 group-hover:bg-navy/10">
                    <feature.icon className="h-7 w-7 text-navy" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-text">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="bg-warm-gray py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fadeInUp">
            <SectionHeading
              title="Life at Ednisha"
              subtitle="Moments of joy, learning, and community from our daycare."
            />
          </AnimateOnScroll>
          <StaggerContainer
            className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3"
            staggerDelay={100}
            animation="fadeInScale"
          >
            {[
              { src: "/images/classroom-group-1.jpeg", alt: "Children in uniform posing in classroom" },
              { src: "/images/children-with-toys.jpeg", alt: "Children with toys and learning materials" },
              { src: "/images/student-at-desk.jpeg", alt: "Student studying at desk" },
              { src: "/images/classroom-group-5.jpeg", alt: "Class photo with children in uniforms" },
              { src: "/images/child-microphone.jpeg", alt: "Child performing at event" },
              { src: "/images/student-portrait-1.jpeg", alt: "Student by the alphabet wall" },
            ].map((img, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-xl shadow-sm"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/15" />
              </div>
            ))}
          </StaggerContainer>
          <AnimateOnScroll animation="fadeInUp" delay={300}>
            <div className="mt-8 text-center">
              <Link href="/gallery">
                <Button variant="outline" className="rounded-lg border-navy text-navy hover:bg-navy hover:text-white">
                  View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== ANNOUNCEMENTS ===== */}
      <section className="bg-cloud py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fadeInUp">
            <SectionHeading
              title="Latest News & Events"
              subtitle="Stay up to date with what's happening at Ednisha."
            />
          </AnimateOnScroll>
          <StaggerContainer
            className="grid gap-6 sm:grid-cols-2"
            staggerDelay={150}
            animation="fadeInUp"
          >
            <Card className="group overflow-hidden border-none shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src="/images/color-day-flyer.jpeg"
                  alt="Color Day Announcement"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gold" />
                  <span className="text-xs font-semibold text-gold">
                    Every Other Friday
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-navy">
                  Color Day Fridays!
                </h3>
                <p className="mt-2 text-sm text-slate-text">
                  Children can wear any bright, fun clothes and shoes of their
                  choice — let&#39;s make Fridays more joyful and expressive!
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-none shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src="/images/children-outdoor.jpeg"
                  alt="Field Trip to John F. Kennedy School"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gold" />
                  <span className="text-xs font-semibold text-gold">
                    April 2026 — Second Term
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-navy">
                  Field Trip to John F. Kennedy
                </h3>
                <p className="mt-2 text-sm text-slate-text">
                  An exciting educational field trip for our students to explore,
                  learn, and experience new environments beyond the classroom!
                </p>
              </CardContent>
            </Card>
          </StaggerContainer>
          <AnimateOnScroll animation="fadeInUp" delay={300}>
            <div className="mt-8 text-center">
              <Link href="/events">
                <Button variant="outline" className="rounded-lg border-navy text-navy hover:bg-navy hover:text-white">
                  View All Events <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <AnimateOnScroll animation="fadeIn">
        <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
          <div className="absolute inset-0 confetti-bg opacity-5" />
          <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
            <AnimateOnScroll animation="fadeInUp">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Ready to Give Your Child the{" "}
                <span className="text-gold">Best Start?</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={150}>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
                Join the Ednisha family today. Contact us to learn about enrollment,
                schedule a visit, or speak with our team.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={300}>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-lg bg-gold px-8 py-6 text-base font-semibold text-navy hover:bg-gold/90 hover:scale-[1.02] transition-all"
                  >
                    Contact Us Today
                  </Button>
                </Link>
                <a href="tel:+23231180012">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-lg border-2 border-white/30 bg-transparent px-8 py-6 text-base font-semibold text-white hover:bg-white/10"
                  >
                    Call 031-18-0012
                  </Button>
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
