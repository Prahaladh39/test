# devstudio - Web Development Agency Portfolio

## Overview
A premium, fully-animated portfolio website for a two-founder web development agency. Built with React, Express, and Framer Motion. Features a dark-first theme with futuristic, product studio aesthetics.

## Recent Changes
- **Feb 2026**: Initial MVP - Built all 5 pages (Home, Services, How We Work, About, Contact), dark theme with ThemeProvider + localStorage sync, premium scroll animations, contact form with backend API, responsive navigation with theme toggle.

## Architecture
- **Frontend**: React + Wouter routing + Framer Motion animations + Tailwind CSS + shadcn/ui
- **Backend**: Express.js with in-memory storage for contact form submissions
- **Schema**: Drizzle ORM schema in `shared/schema.ts` (users + contact submissions)

### Pages
- `/` - Home: Hero, What We Do, Why Choose Us, Tech Stack, Final CTA
- `/services` - Four service offerings with feature breakdowns
- `/how-we-work` - 7-step animated timeline process
- `/about` - Team roles, philosophy, core values
- `/contact` - Contact form + info sidebar

### Key Components
- `components/navigation.tsx` - Sticky nav with mobile drawer, theme toggle
- `components/footer.tsx` - Site-wide footer
- `components/animated-section.tsx` - Reusable scroll-triggered animations
- `components/theme-provider.tsx` - ThemeProvider with localStorage sync
- `components/theme-toggle.tsx` - Light/dark mode toggle

## User Preferences
- Dark theme preferred
- Futuristic, premium, bold design
- Space Grotesk font family
- Blue primary accent color (hsl 217 91% 60%)
