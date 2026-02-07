import { Link } from "wouter";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Search, PenTool, Palette, Database, TestTube, Rocket, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Requirement Discovery & Documentation",
    text: "We start by understanding your idea, goals, and users. All requirements are documented clearly in an SRS (Software Requirement Specification) so everyone is aligned before development begins.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "System Design & Planning",
    text: "We define the application architecture, data flow, user roles, and feature breakdown. This ensures scalability and avoids future rework.",
  },
  {
    number: "03",
    icon: Palette,
    title: "UI & UX Development",
    text: "Our frontend specialist builds a clean, responsive, and animated interface that matches your brand and user expectations.",
  },
  {
    number: "04",
    icon: Database,
    title: "Backend & Logic Development",
    text: "We implement authentication, databases, APIs, and business logic to ensure the system is secure, reliable, and scalable.",
  },
  {
    number: "05",
    icon: TestTube,
    title: "Testing & Optimization",
    text: "We test performance, security, and user flows to ensure the product works smoothly in real-world conditions.",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Deployment & Delivery",
    text: "We deploy the application to production, assist with setup, and hand over documentation so you're ready to scale.",
  },
  {
    number: "07",
    icon: Headphones,
    title: "Post-Launch Support",
    text: "We stay available for improvements, updates, and long-term support as your product grows.",
  },
];

function TimelineStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative flex gap-6 lg:gap-10 pb-16 last:pb-0"
      data-testid={`step-${step.number}`}
    >
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
          className="relative z-10 w-14 h-14 rounded-md bg-card border border-border flex items-center justify-center"
        >
          <step.icon className="w-6 h-6 text-primary" />
        </motion.div>
        {index < steps.length - 1 && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-[1px] bg-border flex-1 mt-3"
          />
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex-1 pb-4"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono text-primary tracking-wider">{step.number}</span>
          <div className="w-8 h-[1px] bg-primary/30" />
        </div>
        <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">{step.title}</h3>
        <p className="text-muted-foreground leading-relaxed max-w-lg">{step.text}</p>
      </motion.div>
    </motion.div>
  );
}

export default function HowWeWork() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden" data-testid="section-howwework-hero">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-medium tracking-wider uppercase text-primary" data-testid="text-howwework-label">Our Process</span>
            <h1 className="mt-4 text-4xl lg:text-6xl font-bold tracking-tight text-foreground" data-testid="text-howwework-heading">
              How we work<span className="text-primary">.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Our process is simple, transparent, and built around clarity, documentation, and execution.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32" data-testid="section-timeline">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {steps.map((step, index) => (
            <TimelineStep key={step.number} step={step} index={index} />
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden" data-testid="section-howwework-cta">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground">
              Simple process. Real results.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
              Every step is designed to keep your project on track, on budget, and aligned with your vision.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" data-testid="button-howwework-cta">
                  Start Your Project
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
