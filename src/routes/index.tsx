import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Server,
  TrendingUp,
  X,
  Search,
  Rocket,
  Settings,
  Gift,
  ClipboardCheck,
  MapPin,
  Star,
  UserCircle,
  LineChart,
  Plus,
  Minus,
  MessageSquareText,
  PlayCircle,
  LayoutTemplate,
  Network,
  Linkedin,
  Instagram,
  Users,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PrismHero } from "@/components/PrismHero";
import {
  AnimatedSection,
  StaggerChildren,
  StaggerItem,
} from "@/components/animated-section";
import { RadialProcess } from "@/components/RadialProcess";
import { LogoMarquee } from "@/components/LogoMarquee";
import nagaDattaPhoto from "@/assets/founders/naga-datta.jpg";
import prahaladhPhoto from "@/assets/founders/prahaladh.jpg";

import { toast } from "sonner";

const GROWTH_FORM_URL = "https://forms.gle/YQzGj574cv5jD1sM8";

/**
 * Ensure a URL is a valid absolute http(s) link.
 * - Adds https:// if a bare host was provided
 * - Returns null for anything invalid (javascript:, data:, malformed, etc.)
 */
function safeUrl(input: string): string | null {
  if (!input || typeof input !== "string") return null;
  let candidate = input.trim();
  if (!candidate) return null;
  if (!/^https?:\/\//i.test(candidate)) {
    candidate = `https://${candidate}`;
  }
  try {
    const u = new URL(candidate);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    return u.toString();
  } catch {
    return null;
  }
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VegaDevs — Digital Growth Studio" },
      {
        name: "description",
        content:
          "Vega Devs builds, markets, and automates digital systems that turn your website into a lead-generating, revenue-driving machine.",
      },
      { property: "og:title", content: "VegaDevs — Digital Growth Studio" },
      {
        property: "og:description",
        content: "Revenue-first builds. AI-native systems. One team, end-to-end execution.",
      },
    ],
  }),
  component: Home,
});

const faqs = [
  {
    question: "What exactly does the free audit include?",
    answer:
      "A complete analysis of your digital presence, marketing performance, operational gaps, and automation opportunities. You get a written, prioritised roadmap — not a generic template. Specific to your business.",
  },
  {
    question: "Is this actually free? What's the catch?",
    answer:
      "Yes, completely free for 15 businesses. The honest reason: we're building our portfolio and want documented results. You get real work from a serious team. We get case studies. That's the deal.",
  },
  {
    question: "Who is this for?",
    answer:
      "Startups, SMEs, and growth-stage brands that know they need better digital systems but haven't found one team that can handle everything. If you're serious about growing — this is for you.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "We personally review your application. If selected, we schedule a short call to understand your business, then we begin the audit. No automated emails. No bots. Real people.",
  },
  {
    question: "What can you actually build for us?",
    answer:
      "Websites, web apps, mobile apps, software, automation systems, CRM workflows, marketing funnels, and AI integrations. The audit tells us what you actually need — then we build exactly that.",
  },
  {
    question: "What if all 15 spots are taken?",
    answer:
      "Join our community to be first in line when new spots open. We run offers like this regularly for community members before anyone else.",
  },
];

const freeOfferFeatures = [
  {
    icon: ClipboardCheck,
    title: "Complete 360 Business Audit",
    text: "Digital presence, marketing, operations, automation gaps — everything mapped and prioritised.",
  },
  {
    icon: MapPin,
    title: "Written Growth Roadmap",
    text: "Not a vague strategy deck. A specific, ordered answer to: here's what your business needs and why.",
  },
  {
    icon: Star,
    title: "Priority Build Access",
    text: "Priority access to build services based on your audit.",
  },
  {
    icon: UserCircle,
    title: "Direct Team Access",
    text: "Personal communication with the Vega Devs founders throughout the entire engagement.",
  },
  {
    icon: LineChart,
    title: "Growth Distribution Setup",
    text: "We help you identify and activate the right channels to reach your actual customers.",
  },
];

const services = [
  {
    icon: Server,
    title: "Full Stack Development",
    text: "High-impact, animated, and immersive web experiences powered by scalable, secure backend systems. From motion-rich, 3D-driven interfaces to robust APIs and databases — built to perform, scale, and convert.",
  },
  {
    icon: Code2,
    title: "Social Media Growth & Content Strategy",
    text: "End-to-end social execution — from shooting reels to cinematic editing and data-driven distribution. We don't just create content; we position it to reach the right audience.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Digital Growth",
    text: "From SEO optimization to performance tuning, we help your website rank better, reach the right audience, and convert users into customers.",
  },
];

const processSteps = [
  { number: "01", icon: Search, title: "Audit", text: "We analyse your digital presence, marketing, operations, and automation gaps. Every weak point. Every opportunity. Nothing missed.", outcome: "A clear, prioritised growth roadmap" },
  { number: "02", icon: Code2, title: "Build", text: "Website, app, software, or automation system — we build exactly what your business needs based on what the audit reveals.", outcome: "A working digital product or system" },
  { number: "03", icon: Rocket, title: "Market", text: "SEO, content, paid media, social, email — we build the growth engine that brings the right people to what we've built for you.", outcome: "Real traffic. Qualified leads." },
  { number: "04", icon: Settings, title: "Automate", text: "CRM flows, onboarding, ops, reporting — we systematise the repetitive work so your team can focus on the decisions that only humans can make.", outcome: "Hours saved. Errors eliminated." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`group border rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-primary/30 bg-primary/5 shadow-sm"
          : "border-border/50 bg-card hover:border-primary/20"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
      >
        <span className="text-lg font-semibold text-foreground pr-8">{q}</span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
            isOpen
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
          }`}
        >
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
              <p className="text-muted-foreground leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Home() {

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />

      {/* HERO with Prism background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0">
          <PrismHero />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_40%,color-mix(in_oklab,var(--color-background)_85%,transparent)_100%)]" />
        <div className="absolute inset-0 grid-bg opacity-50 z-[1]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 pb-24 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32">
          <div className="w-full max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-primary border border-primary/20 rounded-full bg-primary/5 backdrop-blur">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                Digital Growth Studio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[2rem] sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.12] text-foreground break-words"
            >
              Your business has more{" "}
              <span className="relative inline-block text-primary italic">
                growth
                <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-primary/60 rounded-full" />
              </span>{" "}
              in it than it's showing.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              We build, market, and automate digital systems that turn your website into a lead-generating, revenue-driving machine.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-5 text-sm text-muted-foreground"
            >
              Featured In ·{" "}
              <a
                href="https://www.youtube.com/@vidvika"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Vidvika Growth Talks
              </a>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto"
            >
              <a href={GROWTH_FORM_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Your Free Growth Plan
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Link to="/projects" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  See What We Build
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 sm:mt-12 flex flex-col items-center gap-4 w-full"
            >
              <span className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-sm font-bold tracking-[0.2em] uppercase rounded-full border border-primary/40 bg-gradient-to-r from-primary/15 via-primary/5 to-primary/15 backdrop-blur shadow-[0_0_24px_-8px_color-mix(in_oklab,var(--color-primary)_60%,transparent)]">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                <span className="bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
                  Our Trusted Partners
                </span>
              </span>
              <div className="w-full overflow-hidden">
                <LogoMarquee />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          >
            <div className="w-5 h-8 rounded-full border border-muted-foreground/40 flex items-start justify-center p-1">
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1 rounded-full bg-muted-foreground"
              />
            </div>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Scroll
            </span>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16 lg:mb-20">
            <span className="text-xs font-medium tracking-wider uppercase text-primary">What We Do</span>
            <h2 className="mt-4 text-3xl lg:text-5xl font-bold tracking-tight">Everything you need to launch</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              From concept to production, we handle the full spectrum of digital growth.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <Card className="group relative overflow-visible border-border/50 bg-card hover-elevate transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{service.text}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 lg:py-32 relative border-y border-border/50 bg-background/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="text-xs font-medium tracking-wider uppercase text-primary mb-4 block">How It Works</span>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">One team. The full loop.</h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Audit, build, market, automate — handled end-to-end so nothing falls through the cracks.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <RadialProcess steps={processSteps} />
          </AnimatedSection>
        </div>
      </section>

      {/* PROBLEM/SOLUTION */}
      <section className="py-24 lg:py-32 relative border-b border-border/50 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection direction="left">
              <span className="text-xs font-medium tracking-wider uppercase text-destructive">The Problem</span>
              <h2 className="mt-4 text-3xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                Today's businesses are at a <span className="text-destructive">dead end.</span>
              </h2>
              <ul className="mt-8 space-y-4 text-muted-foreground text-lg">
                {[
                  "Advertising without getting leads",
                  "Websites that do not generate leads",
                  "Manual handling of processes",
                  "Working with disjointed tools",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 mt-10 border border-primary/20 bg-primary/5 rounded-xl shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                <p className="text-foreground font-medium text-xl leading-relaxed">
                  No more tools or agencies. <br />
                  <span className="text-primary">You need to work with a solution.</span>
                </p>
              </div>
            </AnimatedSection>

            <StaggerChildren className="space-y-6">
              <StaggerItem>
                <Card className="group relative overflow-hidden border-border/50 bg-card hover-elevate transition-all duration-300">
                  <CardContent className="p-8 sm:p-10 flex flex-col gap-6">
                    <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center">
                      <LayoutTemplate className="w-7 h-7 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">Beyond Digital Products</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        It's not just about creating isolated digital products. Standalone websites and fragmented ads aren't enough to scale.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="group relative overflow-hidden border-primary/20 bg-primary/5 hover-elevate transition-all duration-300">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Network className="w-32 h-32" />
                  </div>
                  <CardContent className="p-8 sm:p-10 flex flex-col gap-6 relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shadow-inner">
                      <Network className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">Complete Business Systems</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        We create <strong className="text-foreground">entire business systems</strong> designed to integrate your marketing, web presence, and automation to make your business flourish.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* FREE OFFER */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <AnimatedSection direction="left">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6 border border-primary/20">
                  <Gift className="w-3.5 h-3.5" />
                  The Free Offer
                </span>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1]">
                  15 Businesses. <br />
                  <span className="text-primary">Completely Free.</span> <br />
                  Fully Delivered.
                </h2>
                <div className="mt-8 p-6 bg-background rounded-xl border border-border shadow-sm">
                  <p className="text-lg font-medium">What you get — <span className="text-primary">at no cost:</span></p>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                    We're taking on 15 businesses to deliver our complete growth audit and roadmap for free. No hidden fees. No aggressive pitch.
                  </p>
                </div>
                <div className="mt-8">
                  <a href={GROWTH_FORM_URL} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full sm:w-auto shadow-md">
                      Get your free growth plan
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-7">
              <StaggerChildren className="space-y-4">
                {freeOfferFeatures.map((feature, i) => (
                  <StaggerItem key={i}>
                    <Card className="group relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/40 hover:bg-card hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6 sm:p-8 flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors group-hover:bg-primary/10">
                          <feature.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">{feature.text}</p>
                        </div>
                      </CardContent>
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors duration-300" />
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-24 lg:py-32 relative border-t border-border/50 bg-background overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-medium tracking-wider uppercase text-primary mb-4 block">
              The Team
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
              Built by founders. <span className="text-muted-foreground">For founders.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              We're not an agency. We're a two-person team that builds, markets, and automates — end to end.
            </p>
          </AnimatedSection>

          {/* Stats */}
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {[
              { value: "15+", label: "Businesses Audited Free" },
              { value: "4", label: "Services in One Team" },
              { value: "24hr", label: "Response Guarantee" },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <Card className="border-border/50 bg-card/60 backdrop-blur-sm hover-elevate text-center">
                  <CardContent className="p-8">
                    <div className="text-4xl lg:text-5xl font-bold text-primary tracking-tight">
                      {s.value}
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground tracking-wide">{s.label}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Founder cards */}
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                initials: "ND",
                photo: nagaDattaPhoto,
                photoPos: "object-[center_25%]",
                name: "Naga Datta",
                role: "Digital Marketing & Growth",
                bio: "Focused on building visibility, engagement, and conversions across digital platforms. SEO, social media, paid campaigns, and content strategy.",
                skills: [
                  "Social Media Management",
                  "Short-Form Content & Reels",
                  "SEO & Organic Growth",
                  "Paid Ads & Campaigns",
                ],
                linkedin: "https://www.linkedin.com/in/naga-datta",
                instagram: "https://www.instagram.com/_justnds/",
              },
              {
                initials: "PR",
                photo: prahaladhPhoto,
                photoPos: "object-[center_20%]",
                name: "Prahaladh",
                role: "Full-Stack Engineering",
                bio: "Focused on scalable frontend experiences and robust backend systems built for real-world use. Animations, APIs, databases, and performance.",
                skills: [
                  "Interface Design",
                  "Animations & Interactions",
                  "Backend APIs & Databases",
                  "Performance & Security",
                ],
                linkedin: "https://www.linkedin.com/in/slnprahaladh",
                instagram: "https://www.instagram.com/prahaladh_05/",
              },
            ].map((f) => (
              <StaggerItem key={f.name}>
                <Card className="h-full border-border/50 bg-card hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-8 lg:p-10">
                    <div className="flex items-center gap-5 mb-6">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden ring-1 ring-primary/20 shadow-sm flex-shrink-0">
                        <img
                          src={f.photo}
                          alt={`${f.name} — ${f.role}`}
                          loading="lazy"
                          className={`w-full h-full object-cover ${f.photoPos}`}
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight">{f.name}</h3>
                        <p className="text-sm text-primary font-medium">{f.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-6">{f.bio}</p>
                    <ul className="space-y-2 mb-6">
                      {f.skills.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-foreground/90">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-3 pt-5 border-t border-border/50">
                      {(() => {
                        const li = safeUrl(f.linkedin);
                        const ig = safeUrl(f.instagram);
                        return (
                          <>
                            <a
                              href={li ?? "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${f.name} on LinkedIn`}
                              aria-disabled={!li}
                              onClick={(e) => {
                                if (!li) {
                                  e.preventDefault();
                                  toast.error(`${f.name} — LinkedIn link unavailable`);
                                }
                              }}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90 shadow-sm transition-all hover:-translate-y-0.5"
                            >
                              <Linkedin className="w-4 h-4" fill="currentColor" strokeWidth={0} />
                              LinkedIn
                            </a>
                            <a
                              href={ig ?? "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${f.name} on Instagram`}
                              aria-disabled={!ig}
                              onClick={(e) => {
                                if (!ig) {
                                  e.preventDefault();
                                  toast.error(`${f.name} — Instagram link unavailable`);
                                }
                              }}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5"
                              style={{ background: "linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)" }}
                            >
                              <Instagram className="w-4 h-4" strokeWidth={2.25} />
                              Instagram
                            </a>
                          </>
                        );
                      })()}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="py-24 lg:py-32 relative border-t border-border/50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--color-primary)_8%,transparent),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6 border border-primary/20">
              <Users className="w-3.5 h-3.5" />
              Community
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Join the <span className="text-primary">Vega Devs</span> Growth Community
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Every application also gets access to our private WhatsApp community — where we share how real businesses are built, grown, and scaled. This is where founders, builders, and business owners stay ahead.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-12">
            {[
              {
                title: "Real growth breakdowns",
                text: "What's working, what's not, and why — based on real business builds.",
              },
              {
                title: "Behind-the-scenes execution",
                text: "How we design systems, fix funnels, and improve conversions.",
              },
              {
                title: "Live updates & opportunities",
                text: "New openings, growth plans, and future offers.",
              },
              {
                title: "Proven templates & frameworks",
                text: "Practical strategies you can apply immediately.",
              },
              {
                title: "Direct access to insights",
                text: "Learn how to build, market, and automate your business better.",
              },
              {
                title: "We don't share theory.",
                text: "We share what we actually build.",
                highlight: true,
              },
            ].map((b) => (
              <StaggerItem key={b.title}>
                <div
                  className={`h-full p-6 rounded-xl border transition-all duration-300 ${
                    b.highlight
                      ? "border-primary/30 bg-primary/5"
                      : "border-border/50 bg-card/60 hover:border-primary/20 hover:bg-card"
                  }`}
                >
                  <h3 className="text-base font-semibold mb-2 tracking-tight">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <AnimatedSection className="text-center">
            <a
              href="https://chat.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="shadow-md">
                <MessageCircle className="w-4 h-4" />
                Join the WhatsApp Community
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 relative border-t border-border/50 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <AnimatedSection direction="left">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6">
                  <MessageSquareText className="w-3.5 h-3.5" />
                  Questions
                </span>
                <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                  Straightforward <br /> answers.
                </h2>
                <div className="mt-8 inline-flex items-center gap-3 p-1.5 pr-4 rounded-full border border-border bg-card shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <PlayCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Built by <strong className="text-foreground">VegaDevs</strong>
                  </span>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-7">
              <StaggerChildren className="flex flex-col gap-4">
                {faqs.map((faq, i) => (
                  <StaggerItem key={i}>
                    <FaqItem q={faq.question} a={faq.answer} />
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">Ready to grow?</h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
              Apply for the free audit. We'll respond within one business day.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg">
                  Start a Project
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg">
                  See Featured Work
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
