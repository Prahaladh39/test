import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, MessageSquare, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AnimatedSection } from "@/components/animated-section";

const GROWTH_FORM_URL = "https://forms.gle/YQzGj574cv5jD1sM8";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VegaDevs" },
      {
        name: "description",
        content:
          "Apply for your free growth plan. We respond within 24 hours with clear next steps.",
      },
      { property: "og:title", content: "Contact — VegaDevs" },
      { property: "og:description", content: "Start a project with VegaDevs." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-medium tracking-wider uppercase text-primary">Get Your Free Growth Plan</span>
            <h1 className="mt-4 text-4xl lg:text-6xl font-bold tracking-tight">
              Let's build your product<span className="text-primary">.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Receive a personalized growth plan within 24 hours of applying that will help generate leads and scale your business.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <AnimatedSection direction="left" className="lg:col-span-3">
              <Card className="overflow-visible border-border/50">
                <CardContent className="p-8 lg:p-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide mb-8">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                    </span>
                    15 spots. Completely free. First come, first served.
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                    Get your <span className="text-primary">free growth plan</span>.
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Tell us about your business in a short form and we'll deliver a personalized growth roadmap within 24 hours — no cost, no commitment.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Personalized growth roadmap",
                      "Delivered within 24 hours",
                      "No spam. No gimmicks. Just results.",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a href={GROWTH_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                      <Button size="lg" className="w-full sm:w-auto shadow-md">
                        Get your free growth plan
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2} className="lg:col-span-2">
              <div className="space-y-8 lg:pt-4">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fill out the form and we'll get back to you within 24 hours with a clear plan and next steps.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Email us directly</p>
                      <a href="mailto:vegadevswork@gmail.com" className="text-sm text-muted-foreground hover:text-foreground mt-1 block">
                        vegadevswork@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/slnprahaladh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground mt-1 block"
                      >
                        Prahaladh SLN ↗
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Quick response</p>
                      <p className="text-sm text-muted-foreground mt-1">We reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ArrowUpRight className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Free consultation</p>
                      <p className="text-sm text-muted-foreground mt-1">No spam. No gimmicks. Just results for your business.</p>
                    </div>
                  </div>
                </div>

                <Card className="overflow-visible border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <p className="text-sm font-medium mb-2">What happens next?</p>
                    <ol className="space-y-2">
                      {[
                        "We review your project details",
                        "Schedule a quick discovery call",
                        "Deliver a clear proposal & timeline",
                      ].map((step, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary flex-shrink-0">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
