import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import c from "./campus.png";
import y from "./y.png";
import bar from "./videos/bar.mp4";
import anuv from "./videos/anuv jain.mp4";
import food from "./videos/food.mp4";
import bike from "./videos/bike.mp4";
import editing from "./videos/editing.mp4";
import shoes from "./videos/shoes.mp4";
import {
  ArrowUpRight,
  Play,
  X,
  ExternalLink,
  MonitorPlay,
  Film,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AnimatedSection,
  StaggerChildren,
  StaggerItem,
} from "@/components/animated-section";

// --- DUMMY DATA ---
const webProjects = [
  {
    id: 1,
    title: "YRJ EV BIKES",
    description:
      "A high-energy EV bike seller website featuring bold animations, seamless browsing, and instant WhatsApp and call integrations to turn visitors into buyers effortlessly.",
    image: y,
    link: "https://yrjevbikes-k5qw.vercel.app/",
  },
  {
    id: 2,
    title: "Tollywood Vault",
    description:
      "A highly interactive, animated movie database and trivia platform celebrating regional cinema culture with a dynamic UI.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Campus Cartel",
    description:
      "Campus Cartel is a student-focused marketplace where users can easily buy and sell second-hand items at affordable prices, with a simple dashboard to list, edit, and manage products seamlessly.",
    image: c,
    link: "https://frontend-jwtm86dpm-prahaladhs-projects.vercel.app/home",
  },
];

const videoProjects = [
  {
    id: 1,
    title: "Pub Edit",
    videoSrc: bar,
  },
  {
    id: 2,
    title: "Product Launch Reel",
    thumbnail:
      "https://images.unsplash.com/photo-1574717024453-354056fad63d?q=80&w=400&auto=format&fit=crop",
    videoSrc: food,
  },
  {
    id: 3,
    title: "Event Highlight",
    thumbnail:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&auto=format&fit=crop",
    videoSrc: anuv,
  },
  {
    id: 4,
    title: "Client Testimonial",
    thumbnail:
      "https://images.unsplash.com/photo-1516280440502-861f1c849683?q=80&w=400&auto=format&fit=crop",
    videoSrc: bike,
  },
  {
    id: 5,
    title: "Social Media Promo",
    thumbnail:
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=400&auto=format&fit=crop",
    videoSrc: editing,
  },
  {
    id: 6,
    title: "Behind The Scenes",
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&auto=format&fit=crop",
    videoSrc: shoes,
  },
];

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="min-h-screen">
      {/* --- HERO SECTION --- */}
      <section
        className="relative pt-32 lg:pt-40 pb-20 overflow-hidden"
        data-testid="section-projects-hero"
      >
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-medium tracking-wider uppercase text-primary">
              Our Portfolio
            </span>
            <h1 className="mt-4 text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
              Work that speaks for itself<span className="text-primary">.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We don't just build things; we architect digital experiences. From
              highly scalable full-stack web applications and immersive UIs, to
              scroll-stopping content creation, cinematic video editing, and
              data-driven digital marketing campaigns. If it lives on a screen,
              we make it brilliant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- WEB PROJECTS SECTION --- */}
      <section className="py-24 lg:py-32" data-testid="section-web-projects">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16 flex items-center gap-4">
            <MonitorPlay className="w-8 h-8 text-primary" />
            <div>
              <span className="text-xs font-medium tracking-wider uppercase text-primary">
                Digital Experiences
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mt-2">
                Web Projects
              </h2>
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
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-between h-[calc(100%-14rem)]">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                        {project.description}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full group/btn hover:border-primary hover:text-primary transition-all"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        Visit Project
                      </a>

                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* --- VIDEO PRODUCTION SECTION --- */}
      <section
        className="py-24 lg:py-32 border-t border-border relative overflow-hidden"
        data-testid="section-video-projects"
      >
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16 flex items-center gap-4">
            <Film className="w-8 h-8 text-primary" />
            <div>
              <span className="text-xs font-medium tracking-wider uppercase text-primary">
                Content & Cinema
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mt-2">
                Video Production
              </h2>
            </div>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
            {videoProjects.map((video) => (
              <StaggerItem key={video.id} className="w-full max-w-[300px]">
                {/* CSS iPhone Mockup */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative mx-auto aspect-[9/16] w-full rounded-[2.5rem] border-[12px] border-gray-900 bg-gray-900 shadow-2xl cursor-pointer overflow-hidden group"
                  onClick={() => setSelectedVideo(video)}
                >
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-0 inset-x-0 h-6 w-1/3 mx-auto bg-gray-900 rounded-b-2xl z-20" />

                  {/* Video Thumbnail */}
                  {/* Replace the <img> tag inside the Phone Mockup with this: */}
                  <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
                    <video
                      src={`${video.videoSrc}#t=2`}
                      // Removed the opacity classes, kept the scale animation
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                      preload="metadata"
                      muted
                      playsInline
                    />

                    {/* The dark overlay div has been completely removed! */}

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                        <Play className="w-6 h-6 ml-1" fill="currentColor" />
                      </div>
                      <span className="mt-4 font-semibold text-white tracking-wide text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 drop-shadow-md">
                        Play Reel
                      </span>
                    </div>
                  </div>
                </motion.div>
                {/* <div className="text-center mt-6">
                  <h3 className="text-lg font-bold text-foreground">
                    {video.title}
                  </h3>
                </div> */}
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* --- FULLSCREEN VIDEO MODAL --- */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4 sm:p-8"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the video itself
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 hover:bg-primary/90 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              <video
                src={selectedVideo.videoSrc}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CTA SECTION --- */}
      <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground">
              Ready to start your project?
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
              Let’s build something incredible together. Reach out to discuss
              your next big idea.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg">
                  Start a Project
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
