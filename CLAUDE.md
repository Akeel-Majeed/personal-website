# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

# Purpose of This Project
This project is my personal website. It should feel clean, modern, fast, and professional.  
The site represents who I am, what I’m learning, and what I’m building.  
Claude should help me with design, content, structure, and implementation.

## Who am I?
I’m a neuroscience + mathematics student at University College London (UCL) with growing skills in:
- AI, ML, and reinforcement learning
- Full‑stack web development
- Building projects and exploring startup ideas

I value clarity, simplicity, and strong visual design.  
I prefer intuitive explanations and clean code.

## Technical Stack for This Project
- Next.js (App Router)
- React (server + client components)
- Tailwind CSS for styling
- TypeScript (optional but preferred)
- Node.js + npm
- Vercel for deployment
- Markdown for content sections (blog, notes, etc.)

## Development

### Commands
```bash
npm run dev        # Start dev server (Turbopack) at localhost:3000
npm run build      # Production build
npm run start      # Serve production build
npm run lint       # ESLint (flat config)
```

### Architecture
- **Next.js 16 + App Router** — all routes live in `app/`
- **Tailwind CSS v4** via `@tailwindcss/postcss` — styles in `app/globals.css`
- **TypeScript** — strict mode enabled
- `app/layout.tsx` — root layout (metadata, fonts, global styles)
- `app/page.tsx` — homepage
- `public/` — static assets

## Website Goals
- Present myself clearly: who I am, what I do, what I’m learning
- Showcase projects (AI, RL, web dev, experiments)
- Provide a clean, minimal aesthetic
- Make it easy to add new pages or content
- Potentially include a blog or notes section
- Make the site feel personal, thoughtful, and technically sharp

## How Claude Should Help
- Suggest clean, modern UI layouts using Tailwind
- Provide idiomatic Next.js patterns (App Router, layouts, metadata)
- Help structure components and pages
- Improve copywriting for clarity and personality
- Offer design guidance (spacing, typography, hierarchy)
- Help me build reusable components (Navbar, Footer, ProjectCard, etc.)
- Suggest ways to make the site feel more polished and professional
- Keep code minimal, readable, and scalable
- Provide SEO‑friendly metadata and structure
- Help me think about branding, tone, and visual identity
- Act as a teacher in building my first website
- Teach me about version control and git

## Content Style
- Clear, confident, concise
- Friendly but professional
- No fluff — meaningful sentences only
- Focus on what I’m learning, building, and exploring
- Emphasise curiosity, technical depth, and personal growth

## Design Preferences
- Super minimalist
- Times New Roman retro style

## Long-Term Vision
- A personal hub for my projects, writing, and experiments
- A place to showcase AI/RL work and web dev skills
- A platform I can extend into:
  - blog posts
  - project writeups
  - interactive demos
  - startup ideas
  - AI tools

## Additional Notes
Claude should:
- Avoid overcomplicating the architecture
- Suggest improvements when my structure can be cleaner
- Help me think like a designer and engineer simultaneously
- Keep the site lightweight and fast