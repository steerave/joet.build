# DESIGN_SYSTEM.md — Sarun (Joe) Teeravechyan Portfolio Site

> **Version:** v3.0 (2026-04-30)
> Previous versions: `v1.0` (blue-tinted dark, Inter/Geist), `v2.0` (Dark Craft / Executive Blue, Anybody + DM Mono, infinite grid hero). See git tags.

## Design Direction

Quiet executive. Tinted near-black background, restrained sans typography (Inter Tight + Inter), one accent. No mono labels, no terminal cosplay, no numbered card indices, no side-stripe borders, no decorative grids. The work — case studies, stats, AI projects — does the speaking. Modern, confident, audience-first for senior hiring managers.

---

## Colors

All tokens defined in `app/globals.css` under `@theme`. All text colors verified ≥4.5:1 against `var(--color-bg)` (WCAG 2.1 AA).

| Token | CSS Variable | Hex | Usage |
|---|---|---|---|
| Background | `--color-bg` | `#0B0B0F` | Page background (slightly tinted, not pure black) |
| Surface | `--color-surface` | `#14141A` | Card backgrounds, CTA section |
| Elevated | `--color-elevated` | `#1C1C24` | Card hover state |
| Border | `--color-border` | `#22222B` | Dividers, card borders |
| Border Strong | `--color-border-strong` | `#2D2D38` | Active/hover borders |
| Text Primary | `--color-text-primary` | `#ECECF0` | Headlines, hero, key copy (~16:1 contrast) |
| Text Body | `--color-text-body` | `#A6A6B0` | Body copy (~8:1 contrast) |
| Text Muted | `--color-text-muted` | `#80808B` | Labels, secondary metadata (~5:1 contrast) |
| Accent | `--color-accent` | `#5B8FD4` | Buttons, hover state, headline highlight span |
| Accent Light | `--color-accent-light` | `#7AAEE0` | Hover states |
| On Accent | `--color-on-accent` | `#0B1220` | Text on filled accent buttons (slightly bluer than bg for cohesion) |
| Success | `--color-success` | `#4ED68A` | Availability pill dot only |

**Rule:** never use `#000` or `#fff`. Every neutral is tinted toward a cool blue/grey hue. No additional colors without explicit approval.

---

## Typography

**Display / Headings / UI:** [Inter Tight](https://fonts.google.com/specimen/Inter+Tight) — `next/font/google`, weights 400/500/600/700.
**Body / Paragraphs:** [Inter](https://fonts.google.com/specimen/Inter) — `next/font/google`, weights 400/500.

DM Mono and Anybody removed in v3.0.

| Element | Font | Weight | Size | Notes |
|---|---|---|---|---|
| Hero headline | Inter Tight | 600 | `clamp(40px, 6vw, 72px)` | Tracking -0.035em, line-height 1.02 |
| Section heading | Inter Tight | 600 | `clamp(24px, 2.8vw, 30px)` | Tracking -0.02em |
| Case study title (detail) | Inter Tight | 600 | `clamp(32px, 4.2vw, 48px)` | Tracking -0.025em |
| Case study row title | Inter Tight | 500 | 19px | Tracking -0.015em |
| About lede | Inter | 500 | 20px | line-height 1.55 |
| Body | Inter | 400 | 17px | line-height 1.7 |
| Card body | Inter | 400 | 14–15px | line-height 1.6 |
| Hero tagline | Inter | 400 | 19px | line-height 1.5 |
| Stat number | Inter Tight | 600 | `clamp(40px, 4.8vw, 56px)` | Tracking -0.03em |
| Eyebrow / kicker | Inter | 400 | 12px | Uppercase, tracking 0.14em, no mono |
| Insight quote | Inter Tight | 500 | 22px | Tracking -0.015em, line-height 1.45 |
| Nav link | Inter | 400 | 14px | |
| Button | Inter Tight | 500 | 14px | |

**Rule:** never use Anybody, DM Mono, monospace fonts, or system fonts. All display = Inter Tight. All body = Inter.

---

## Spacing

| Context | Value |
|---|---|
| Section vertical padding | `py-24` mobile / `lg:py-32` desktop |
| Max content width | `1080px` (`max-w-content`) |
| Max prose / about column | `720px` (`max-w-prose`) |
| Horizontal padding | `px-6` / `md:px-10` / `lg:px-16` |
| Card padding | `p-7` (28px) |
| Stat / row vertical | `py-7` (28px) |
| Hero top padding | `pt-[120px]` mobile / `lg:pt-[160px]` |

**Rule:** never reduce spacing to fit content. If something feels tight, restructure or cut.

---

## Hero Section

Static. No mouse-tracking grid, no ambient glow, no decorative animation.

- Availability pill: rounded-full border, 7px green dot with soft halo, "Open to senior digital leadership roles"
- Headline: large Inter Tight 600, single accent span on "national scale"
- Tagline: 19px Inter 400, max-width 600px
- Two CTAs: primary "View Selected Work" (filled accent on dark text), ghost "Download CV"
- Entrance: 4-stage `heroFadeUp` keyframe stagger (0.10s–0.55s delays). Quiet exponential ease-out, no transform other than translateY(16px)→0.

---

## Components

### Nav
Sticky, `bg-[rgba(11,11,15,0.85)]` + `backdrop-blur-[16px]`. Wordmark "Sarun Teeravechyan" in Inter Tight 600 left. Right: Work / AI / About text links + bordered "Curriculum Vitae" button.

### Credibility Strip
Static. Three columns on desktop. Big number (Inter Tight 600) + label (Inter 400). No count-up animation.

### Selected Work (home, list)
Three rows. Each row: kicker (md+) · title + summary · arrow. Hover slides left padding by 12px and turns title + arrow accent-colored.

### Case Study Detail (`/work/[slug]`)
Back link · kicker · title · overview · hero image (16:9 rounded) · two-column Challenge + What I Did · full-width Impact card on `bg-surface` · pull-quote insight · "Additional details available upon request".

### AI Projects
3-up grid of cards on `bg-surface` with full borders (no side stripes). Title · description · tag pills · "View on GitHub" link with hover-slide arrow. Whole card is a link.

### About
Two-column on desktop: small "About" heading left, prose right. Single accent on lede paragraph.

### CTA
Heading "Let's connect." · paragraph · three buttons: filled LinkedIn, ghost Email, ghost Download CV.

### Footer
Copyright + LinkedIn / GitHub / Email links, all in legible `text-text-body`.

---

## Removed in v3.0

The following components, files, and patterns were removed from v2.0:

- `components/WhatIDo.tsx` (platitude cards)
- `components/CaseStudy.tsx` (replaced by `CaseStudyDetail` + `CaseStudyListItem`)
- Inline narrative summary block in `app/page.tsx`
- "How This Site Was Built" reflective note
- Mouse-tracking spotlight grid (`.hero-grid-base`, `.hero-grid-spotlight`)
- Section-glow gradient dividers (`.section-glow`)
- Count-up scroll-triggered animation
- Anybody and DM Mono fonts
- Mono section eyebrows on every section (CASE STUDIES / EXPERTISE / PROJECTS / ABOUT / CONNECT)
- Numbered card indices (01 / 02 / 03)
- All `border-l-[3px]` side-stripe borders (5 instances)
- Ambient hero glow
- CTA radial glow on intersection
- Terminal-style hero breadcrumb
- Hardcoded hex literals scattered across components

---

## Accessibility (WCAG 2.1 AA — actually verified)

- All text colors meet ≥4.5:1 contrast against their backgrounds. No exceptions.
- `:focus-visible` ring: 2px solid accent, 3px offset
- Skip-to-content link, visible on keyboard focus
- All animations respect `prefers-reduced-motion`
- Case study images use `alt=""` (decorative, per WCAG F38)
- All interactive elements are real `<a>` / `<button>` (no clickable divs)

---

## Routing

- `/` — Home: Hero, Credibility, Selected Work list, AI Projects, About, CTA, Footer
- `/work/[slug]` — Case study detail: full read with Challenge / What I Did / Impact / Insight
  - Static-generated for all slugs in `lib/case-studies.ts`
  - Per-page metadata via `generateMetadata`

---

## Do Not

- Use any color not defined here without approval
- Use `#fff` or `#000` directly
- Use Anybody, DM Mono, monospace fonts, or system fonts
- Add `border-l-Npx` or `border-r-Npx` accents (`N > 1`)
- Add numbered card indices, mono section eyebrows, terminal cosplay
- Add decorative grids, ambient glows, glassmorphism beyond the nav backdrop blur
- Reduce spacing to fit content
- Add sections or copy not vetted against `personal_website_copy.md`
- Re-introduce count-up or other animated numerics
