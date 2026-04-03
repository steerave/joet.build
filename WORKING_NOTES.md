# WORKING_NOTES.md — Sarun (Joe) Teeravechyan Portfolio Site

## Current Status
> First build pass complete. All 9 sections rendering with correct copy, animations, and responsive layout. Ready for visual refinement pass.

---

## What's Been Done
- Defined full site structure and section order
- Finalized all copy in `personal_website_copy.md`
- Created design system in `DESIGN_SYSTEM.md`
- Created project guidelines in `CLAUDE.md`
- Moved all project documents from `/docs` to project root
- Updated CLAUDE.md with accessibility, performance, and responsive breakpoint standards
- Resolved open questions (LinkedIn, email, name, credibility strip format)
- Removed "How I Think" section from copy doc
- Added AI-Powered Task Manager card to AI Projects copy
- Updated credibility strip to number/label format: 20+ / 30+ / Millions

---

## Key Decisions Log

| Decision | Rationale |
|---|---|
| Cut "How I Think" section | Copy felt generic and sales-like. Case studies carry the narrative weight instead. |
| Copy doc is source of truth | Wireframe copy was Framer AI placeholder — not accurate |
| No dollar figure in credibility strip | Couldn't verify the number. Replaced with "Millions / Users impacted" |
| Credibility stats: 20+ years, 30+ launches, Millions of users | Accurate and defensible |
| Dark theme: #0a0a0a background | Stripe/Linear/Vercel aesthetic |
| Accent color: slate blue #4A6FA5 | Professional, not flashy |
| Font: Inter / Geist | Clean executive feel, widely used in premium tech products |
| No icons unless minimal SVG inline | Avoid generic icon library look |
| Case studies de-identified | Real clients not named. "Details available upon request." on each |
| Nav: "Sarun (Joe) Teeravechyan" left, anchor links right | Simple, clean, no hamburger for MVP |
| Name: Sarun (Joe) Teeravechyan | Full name used throughout site |
| Meta title: "Sarun (Joe) Teeravechyan - Digital Leader & AI Systems Design" | SEO and link sharing |
| Documents at project root | Best practice — CLAUDE.md auto-read, all docs colocated |
| Two AI project cards for MVP | Job Search Tool + Task Manager. More cards later. |

---

## Open Questions
- [ ] Any preference on domain name? (e.g. sarunt.com, joet.co)
- [x] Favicon: "ST" monogram in slate blue accent

---

## Next Steps
1. Initialize Next.js project with TypeScript + Tailwind
2. Git init + GitHub repo
3. First pass: get all sections rendering with correct copy
4. Second pass: typography, spacing, and color refinement
5. Third pass: mobile responsiveness
6. Deploy to Vercel
7. Connect custom domain

---

## Session Log

### Session 1 — Project Setup
- Reviewed playbook and copy doc
- Refined copy and site structure
- Made key design and content decisions
- Created CLAUDE.md, DESIGN_SYSTEM.md, WORKING_NOTES.md
- Ready to build

### Session 2 — Foundation (2026-04-03)
- Resolved all open questions (LinkedIn URL, email, name, credibility format)
- Removed "How I Think" section from copy
- Added Task Manager card to AI Projects copy
- Updated credibility strip to number/label table format
- Moved all project docs from /docs to project root
- Updated CLAUDE.md with accessibility, performance, responsive breakpoint standards
- Updated global CLAUDE.md (model-agnostic co-author, commands section optional)
- Ready to begin Next.js build

### Session 2 (continued) — First Build Pass (2026-04-03)
- Brainstormed design direction with visual companion (mockups in .superpowers/brainstorm/)
- Decided: geometric grid hero (B), left-aligned, all four blue accent placements
- Decided: alternating case study layouts, image placeholders for hero + case studies
- Decided: scroll animations (fade-up, fade-left/right, scale-up, count-up)
- Shifted color palette from gray-black to blue-tinted dark (new tokens in DESIGN_SYSTEM.md)
- Wrote design spec and implementation plan
- Scaffolded Next.js project (Tailwind v4 auto-installed — adapted theme to @theme block)
- Built all 9 sections: Nav, Hero, CredibilityStrip, WhatIDo, CaseStudy×3, AIProjects, About, CTA, Footer
- All scroll animations working, count-up animation working
- Production build passes with zero errors
- GitHub repo: steerave/professional-website
