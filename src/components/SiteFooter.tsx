import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Featured Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div className="md:col-span-1">
            <span className="text-xl font-bold tracking-tight text-foreground">
              VegaDevs<span className="text-primary">.</span>
            </span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              A two-founder digital growth studio building scalable, premium web experiences and growth systems for modern businesses.
            </p>
            <a
              href="https://www.linkedin.com/in/slnprahaladh"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <Linkedin className="w-4 h-4" />
              Prahalad on LinkedIn
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">
              Get in Touch
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ready to start your next project? Reach out and let's talk about building something great together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary"
            >
              Start a Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} VegaDevs. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed & built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
