import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Server, Quote, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AnimatedSection,
  StaggerChildren,
  StaggerItem,
} from "@/components/animated-section";

const founders = [
  {
    icon: Code2,
    role: "Full-Stack Engineering",
    description:
      "Focused on scalable frontend experiences and robust backend systems built for real-world use.",
    skills: [
      "Interface Design",
      "Animations & Interactions",
      "Backend APIs & Databases",
      "Performance & Security",
    ],
  },
  {
    icon: Server,
    role: "Digital Marketing & Growth",
    description:
      " Focused on building visibility, engagement, and conversions across digital platforms.",
    skills: [
      "Social Media Management",
      "Short-Form Content & Reels",
      "SEO & Organic Growth",
      "Paid Ads & Campaigns",
    ],
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <section
        className="relative pt-32 lg:pt-40 pb-20 overflow-hidden"
        data-testid="section-about-hero"
      >
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span
              className="text-xs font-medium tracking-wider uppercase text-primary"
              data-testid="text-about-label"
            >
              About Us
            </span>
            <h1
              className="mt-4 text-4xl lg:text-6xl font-bold tracking-tight text-foreground"
              data-testid="text-about-heading"
            >
              Who we are<span className="text-primary">.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              We’re a two-founder digital studio that blends strategy,
              technology, and content to help brands grow sustainably.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {/* Prahaladh Instagram Link */}
              <a
                href="https://www.instagram.com/prahaladh_05/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-6 py-3.5 bg-transparent border border-primary/30 rounded-full hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                <span className="text-primary font-medium tracking-wide uppercase text-sm group-hover:opacity-80 transition-opacity duration-300">
                  Prahaladh
                </span>
              </a>

              {/* Naga Datta Instagram Link */}
              <a
                href="https://www.instagram.com/_justnds/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-6 py-3.5 bg-transparent border border-primary/30 rounded-full hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                <span className="text-primary font-medium tracking-wide uppercase text-sm group-hover:opacity-80 transition-opacity duration-300">
                  Naga Datta
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32" data-testid="section-roles">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <span className="text-xs font-medium tracking-wider uppercase text-primary">
              Our Roles
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              Two minds, one mission.
            </h2>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {founders.map((founder) => (
              <StaggerItem key={founder.role}>
                <Card
                  className="h-full overflow-visible border-border/50 hover-elevate transition-all duration-300"
                  data-testid={`card-founder-${founder.role.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CardContent className="p-8 lg:p-10">
                    <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-8">
                      <founder.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {founder.role}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {founder.description}
                    </p>
                    <div className="space-y-3">
                      {founder.skills.map((skill) => (
                        <div key={skill} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm text-foreground">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section
        className="py-24 lg:py-32 border-t border-border"
        data-testid="section-philosophy"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection direction="left">
              <span className="text-xs font-medium tracking-wider uppercase text-primary">
                Our Philosophy
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                Beyond websites.
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <Quote className="w-10 h-10 text-primary/20 mb-6" />
                <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed">
                  From high-performing websites to powerful digital marketing
                  and social content, we build growth-ready systems that turn
                  attention into action.
                </blockquote>
                <div className="mt-8 w-16 h-[2px] bg-primary" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section
        className="py-24 lg:py-32 border-t border-border"
        data-testid="section-values"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-medium tracking-wider uppercase text-primary">
              What Drives Us
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              Our core values
            </h2>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Clarity",
                description:
                  "Every decision, every line of code, every conversation is rooted in clarity. No ambiguity, no assumptions.",
              },
              {
                title: "Quality",
                description:
                  "We ship clean, tested, and well-documented code. Every project reflects our standard of craftsmanship.",
              },
              {
                title: "Ownership",
                description:
                  "We treat your product as our own. Your success is our reputation.",
              },
            ].map((value) => (
              <StaggerItem key={value.title}>
                <Card
                  className="h-full overflow-visible border-border/50 hover-elevate transition-all duration-300"
                  data-testid={`card-value-${value.title.toLowerCase()}`}
                >
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section
        className="py-24 lg:py-32 border-t border-border relative overflow-hidden"
        data-testid="section-about-cta"
      >
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground">
              Let's work together.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
              We're always looking for exciting projects and partners who share
              our passion for quality.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" data-testid="button-about-cta">
                  Get in Touch
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
