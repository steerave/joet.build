# Project Status Log

## 2026-04-10

**Done:**
- Full v2 redesign implemented and deployed to production at joet.build (tagged `v2.0`)
- Replaced Geist/Newsreader with Anybody (900 display, 300 body) + DM Mono (labels/code)
- Rewrote `app/globals.css` with new `@theme` tokens: `#080808` bg, `#5b8fd4` steel blue accent
- Built infinite grid hero with diagonal scroll animation and interactive mouse spotlight (pure CSS + React state)
- Swapped accent color from amber `#ff9f2f` to steel blue `#5b8fd4` across all 11 components
- Restored case study images (casestudy-1/2/3.webp) via `next/image` with sticky desktop layout
- Added third AI project card: Rental Tax Pipeline (repo: rental-tax-pipeline)
- Renamed project: "AI Job Search Pipeline" → "Automated Search Pipeline"
- Fixed count-up animation: replaced IntersectionObserver with scroll listener + immediate mount check
- Added `prefers-reduced-motion` support to count-up (jumps to final value instead of animating)
- WCAG improvements: `text-muted` `#444` → `#777` (2.25:1 → 5.2:1 contrast), `:focus-visible` ring, skip-to-content link, `aria-label` on stat numbers
- Reduced ScrollReveal `rootMargin` from `-40px` to `-10px` for reliable mobile reveals
- Removed ghost watermark from hero; brightened tagline (#5a5a5a → #888) and disclaimer (#2a2a2a → #666)
- Updated hero heading to "SARUN (JOE)" / TEERAVECHYAN
- Updated DESIGN_SYSTEM.md, CHANGELOG.md, WORKING_NOTES.md, README.md to reflect v2
- Merged v2 branch → main via `--no-ff`, pushed with `v2.0` annotated tag

**Next:**
- Update OG image to reflect v2 design (current one shows v1)
- Visual check on real mobile device
- Consider adding resume download link

**Notes:**
- v1.0 tag preserved on old main; clean rollback available via `git checkout v1.0`
- Dev reference files (`components/comp_*.md`) gitignored — kept local only

## 2026-04-04

**Done:**
- Redesigned hero to name-dominant centered layout with Sarun (Joe) Teeravechyan as primary element
- Added Midjourney fluid wave background to hero, then swapped to cloth/silk wave image
- Refined hero name typography: medium weight, uppercase, wide tracking, left accent border
- Fixed hero name cropping on iPhone with clamp() fluid sizing and tighter mobile tracking
- Updated all case study copy with new narratives for CS2 (Prize Fulfillment) and CS3 (Demand & Fraud)
- Replaced "Implemented LIT, MUAT" jargon with clearer partner/client testing language in CS1
- Added "Selected Work" overview section above case studies and narrative summary below
- Clarified North American scope in case studies overview
- Added case study images (optimized from 1.3-1.5MB PNG to 36-55KB WebP each)
- Updated typography system: Geist Sans for headings/UI, Newsreader for body, Geist Mono for labels
- Redesigned credibility strip: refined 44px numbers, 2-line labels, consistent count-up to 20+/30+/10M+
- Added reflective "How This Site Was Built" note above final CTA (narrow, muted, no tool names)
- Generated 04042026_Website_Copydeck.md with all live copy as source of truth
- Deployed to Vercel and set up custom domain joet.build

**Next:**
- Visual review on iPhone to confirm hero name fix and overall mobile experience
- Review full site at joet.build for any remaining visual polish
