import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/animated-section";

import yrjImg from "@/assets/proj-yrj.png";
import lnSportsImg from "@/assets/proj-lnsports.png";
import campusImg from "@/assets/proj-campus-cartel.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Featured Projects — VegaDevs" },
      {
        name: "description",
        content:
          "Real builds shipped by VegaDevs — YRJ EV Bikes, LN Sports Arena, Campus Cartel and more.",
      },
      { property: "og:title", content: "Featured Projects — VegaDevs" },
      { property: "og:description", content: "Work that speaks for itself." },
    ],
  }),
  component: ProjectsPage,
});

const webProjects = [
  {
    id: 1,
    title: "YRJ EV BIKES",
    description:
      "A high-energy EV bike seller website featuring bold animations, seamless browsing, and instant WhatsApp and call integrations to turn visitors into buyers effortlessly.",
    image: yrjImg,
    link: "https://yrjevbikes-k5qw.vercel.app/",
  },
  {
    id: 2,
    title: "LN Sports Arena",
    description:
      "A new standard of fitness — modern gym with imported equipment, temperature-controlled swimming pool, professional badminton courts, steam bath, and expert coaches.",
    image: lnSportsImg,
    link: "https://www.lnsports.in/",
  },
  {
    id: 3,
    title: "Campus Cartel",
    description:
      "A student-focused marketplace where users can easily buy and sell second-hand items at affordable prices, with a simple dashboard to list, edit, and manage products.",
    image: campusImg,
    link: "https://frontend-jwtm86dpm-prahaladhs-projects.vercel.app/home",
  },
];

function ProjectsPage() {
  const [, setSelectedVideo] = useState<unknown>(null);
  void setSelectedVideo;

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
            className="max-w-4xl"
          >
            <span className="text-xs font-medium tracking-wider uppercase text-primary">Our Portfolio</span>
            <h1 className="mt-4 text-4xl lg:text-6xl font-bold tracking-tight">
              Work that speaks for itself<span className="text-primary">.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We don't just build things; we architect digital experiences. From scalable full-stack web applications and immersive UIs, to scroll-stopping content creation and data-driven digital marketing campaigns.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16 flex items-center gap-4">
            <MonitorPlay className="w-8 h-8 text-primary" />
            <div>
              <span className="text-xs font-medium tracking-wider uppercase text-primary">Digital Experiences</span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-2">Web Projects</h2>
            </div>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project) => (
              <StaggerItem key={project.id}>
                <Card className="h-full overflow-hidden border-border/50 hover-elevate transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-between h-[calc(100%-14rem)]">
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{project.description}</p>
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full group/btn hover:border-primary hover:text-primary transition-all">
                        Visit Project
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <AnimatePresence />

      <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">Ready to start your project?</h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
              Let's build something incredible together. Reach out to discuss your next big idea.
            </p>
            <div className="mt-10">
              <Link to="/contact">
                <Button size="lg">
                  Start a Project
                  <ArrowUpRight className="w-4 h-4 ml-2" />
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
