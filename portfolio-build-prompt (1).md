# Portfolio Build Prompt: React + Tailwind (section by section)

**How to use:** Paste **Part A** once at the start of a new chat with your AI coding tool (Claude Code, Cursor, etc.). Then paste the **Phase prompts** one at a time. Only move on when the phase's checklist passes.

---

## PART A: Master prompt (paste first, once)

```
You are my senior front-end mentor and pair programmer. We are building my personal portfolio, one section at a time, from empty folder to live deployment.

## About me
- Name: Alabi Tosin Samson. Brand: "primeswitch" (short: "switch"). GitHub: Primate2580.
- Web/software developer. I'm growing from beginner toward professional, so keep the code clean and readable, and add a 2-3 line plain-language note after each phase explaining the key decision you made and why.

## Stack (fixed)
- Vite + React (JavaScript, not TypeScript) + Tailwind CSS v4 (via @tailwindcss/vite).
- Single-page site with anchor-based scrolling. No router.
- Motion: framer-motion only where the phase says so.
- Icons: lucide-react.
- No UI kits, no image assets for the hero art. Everything visual is built with CSS/SVG.

## Design direction: blend of two references
**Reference 1 (landing page):** deep purple field with a coral-pink frame around it; glossy 3D-looking spheres (cyan to blue, magenta to crimson) joined by smooth liquid "bridges"; a huge, bold, geometric sans headline ending in a period ("Idea."); a light-weight subtitle beneath it; small paragraph text; a thin vertical line with a rotated label ("Creative") at the bottom-left; a tiny meta line at the bottom ("4K - Layout."); minimal right-aligned nav.

**Reference 2 (nav + structure):** coral/pink-to-blue gradient with a flowing blob; widely letter-spaced logo; MOBILE NAV = hamburger icon top-left (three bars, middle bar shorter) + centered spaced-out logo, plus a persistent narrow, dark, translucent vertical rail on the left edge holding rotated labels separated by short orange dashes; rows of small dots as decorative rails; large outlined numerals (02, 03) for slides; coral rectangular CTA buttons; small circular arrow controls.

**How to combine them:**
- Overall mood from Ref 1: purple-to-magenta base, coral accents, glossy spheres in the hero.
- Navigation and rhythm from Ref 2: left vertical rail on every breakpoint, dotted rails, numbered project slides, coral CTAs.
- Headline style: massive bold sans with a period. Section labels can borrow Ref 2's spaced-out uppercase.

## Design tokens (define in Tailwind @theme)
- Colors: --color-ink #12002b, --color-violet-deep #4b0082, --color-violet #8a0a9e, --color-magenta #e0189b, --color-coral #ff5a6a, --color-orange #ff9a62, --color-cyan #37d5ff, --color-blue #2f5bd8, --color-lilac #a89bff, --color-rail rgba(18,0,43,0.65).
- Fonts (Google Fonts): "Poppins" for headlines/body (700-800 for headlines, 300 for subtitles); "Bebas Neue" or "Oswald" only for optional condensed accents.
- Radii small (4-8px) on buttons; big soft radii only on the gradient sphere shapes.
- Buttons: coral rectangular, uppercase, tracking-widest, small text.

## Rules for every phase
1. Build ONLY what the phase asks. Do not start the next section.
2. Mobile-first. Test at 360px, 768px, 1280px.
3. Use semantic HTML (header, nav, main, section, footer), real headings in order, alt text, visible focus states, and respect prefers-reduced-motion.
4. Keep components small: one file per section in src/components/, shared bits in src/components/ui/.
5. Keep all my text/content in src/data/content.js so I can edit without touching components.
6. When the phase is done, reply with: (a) files created/changed, (b) how to run/check it, (c) the 2-3 line "why" note, (d) the checklist with each item marked pass/fail. Then STOP and wait for me to say "next".

Reply "Ready" and wait for Phase 0.
```

---

## PART B: Phase prompts (paste one at a time)

### Phase 0: Setup, tokens, and content file
```
Phase 0. Scaffold the project.
- Create a Vite + React app named "primeswitch-portfolio" and install Tailwind v4 with @tailwindcss/vite, framer-motion, and lucide-react.
- Configure the design tokens from the master prompt in the Tailwind @theme block. Load Poppins (and the condensed accent font) with preconnect.
- Set global styles: dark ink background, smooth scroll, selection color in coral, sensible base type scale.
- Create src/data/content.js with clearly marked PLACEHOLDER content for: nav links, hero, about, skills, projects (3 items), experience, contact, social links. Leave "TODO" markers I can replace.
- Create a simple App.jsx that renders empty section shells with ids: home, about, skills, work, experience, contact.
- Initialize git, add a good .gitignore, and make the first commit.
Checklist: dev server runs; fonts load; tokens usable as Tailwind classes (e.g. bg-violet-deep, text-coral); no console errors.
```

### Phase 1: Layout shell and navigation (desktop + mobile)
```
Phase 1. Build the navigation exactly in the spirit of Reference 2's mobile screen.
- Top bar: wide-tracked uppercase logo "PRIMESWITCH" (centered on mobile, left on desktop). On mobile, a hamburger icon on the LEFT (three bars, middle bar shorter). On desktop, right-aligned links (Home, About, Work, Contact) with a coral underline on hover, like Reference 1's minimal nav.
- Persistent left vertical rail on ALL breakpoints: narrow (~44px mobile, ~64px desktop), dark translucent (bg-rail with backdrop-blur), full height under the top bar. Inside: 4 labels (Home, About, Work, Contact) rotated vertically (writing-mode vertical-rl, rotated 180deg so they read bottom-to-top), separated by short orange dashes (about 16px wide, 2px tall).
- The rail highlights the active section (use IntersectionObserver) and clicking a label smooth-scrolls to it.
- Hamburger opens a full-screen overlay menu: large bold links, staggered fade-in (framer-motion), Esc and outside-click close it, focus is trapped while open, body scroll locked.
- Add a "skip to content" link.
- Add the decorative row of small dots along the top of the content area (like both references), hidden from screen readers.
Checklist: rail never overlaps content (main has left padding equal to rail width); active state updates on scroll; overlay is keyboard accessible; works at 360px.
```

### Phase 2: Hero (the signature section)
```
Phase 2. Build the hero, following Reference 1's landing page.
- Background: purple-to-violet gradient inside the page, with a coral-pink frame/glow around the viewport edge (use a coral outer padding or an inset ring on large screens; keep it subtle on mobile).
- Art: a SphereCluster component made ONLY with CSS/SVG: 4 glossy spheres (radial gradients with a soft white specular highlight and inner shadow), cyan-to-blue and magenta-to-crimson, connected by smooth liquid bridges (an SVG path with a blur/gooey filter behind the spheres is fine). Place it on the right on desktop, and behind/below the text on mobile at reduced size.
- Motion: spheres float gently (slow translateY/scale loop, staggered), and the bridges subtly morph. Disable under prefers-reduced-motion.
- Text (left): massive bold headline ending with a period (placeholder: "I build the web."), a light-weight subtitle line ("Front-end developer, primeswitch."), 2 lines of small paragraph text, one coral rectangular CTA "EXPLORE MORE" (scrolls to Work) plus a ghost button "CONTACT".
- Details from the references: a thin vertical line with rotated label "Portfolio" at bottom-left, a tiny meta line at the bottom ("React - Tailwind - Django"), and a big outlined "01" numeral near the top right.
- Headline entrance animation: staggered word reveal.
Checklist: headline never overflows at 360px (use clamp()); LCP is text, not an image; spheres don't cause layout shift; contrast of all text on gradients is at least 4.5:1.
```

### Phase 3: About
```
Phase 3. Build the About section.
- Layout: big outlined numeral "02" and spaced-out uppercase label "ABOUT" on top; a bold two-line statement on one side; a short bio paragraph, and 3 quick facts (location: Nigeria, role, focus) on the other.
- Include a portrait slot: a rounded-blob-masked image placeholder (CSS clip-path or border-radius blob) with a coral offset outline, ready for my photo (src/assets/profile.jpg placeholder with graceful fallback).
- Reuse the dotted rail decoration and orange dash divider from the nav.
- Scroll-triggered fade/slide-in (framer-motion, once).
Checklist: stacks cleanly on mobile; image has alt text; text width stays readable (max ~65ch).
```

### Phase 4: Skills
```
Phase 4. Build the Skills section ("03").
- Group skills into 3-4 groups (e.g. Front-end: React, JavaScript, Tailwind, HTML/CSS; Back-end: Python, Django; Tools: Git/GitHub, Vite, Supabase).
- Present each group as a glassy card (translucent violet, border white/10, hover lifts and gains a coral top border). Each skill is a pill with an icon or short label. No fake percentage bars.
- Add a marquee-style strip of tech names below, slow and pausable on hover (CSS only, off under reduced-motion).
Checklist: keyboard focus visible on cards; no horizontal scroll on mobile; skill data comes from content.js.
```

### Phase 5: Projects (numbered slides like Reference 2)
```
Phase 5. Build the Projects section ("04"), inspired by Reference 2's numbered slide panels.
- A carousel/slider showing one large project panel at a time with neighbours peeking: the active panel is a dark card, the next is a coral/orange card, each with big outlined numerals (01, 02, 03) overlapping the top edge.
- Controls: two small circular arrow buttons (coral outline, one filled outline in blue) and a close/reset "X" is not needed. Add keyboard arrows and swipe on touch.
- Each panel: title, one-line description, tech tags, "Live" and "Code" links, and a screenshot placeholder with a loading-spinner state that resolves to the image (or a gradient fallback).
- Below the active panel: bold title, short description, and a coral CTA bar "VIEW PROJECT" with a small orange block at its end (like the reference button).
- Include at least 3 placeholder projects in content.js.
Checklist: works with keyboard and touch; only the active slide is announced (aria-live polite); images lazy-load with width/height set.
```

### Phase 6: Experience
```
Phase 6. Build the Experience section ("05").
- A vertical timeline with a thin line and dot markers (echoing the dotted rails). Entries: role, company, dates, 2-3 bullet outcomes. Placeholder first entry: "Web / Software Developer, HGSL". Add an education/learning entry placeholder.
- Alternate sides on desktop, single column on mobile.
- Add a "Download CV" coral button that links to /cv.pdf (put a placeholder file in /public).
Checklist: timeline is readable on 360px; CV link opens/downloads correctly.
```

### Phase 7: Contact and footer
```
Phase 7. Build Contact ("06") and the footer.
- Left: a big headline "Let's talk." plus email, location, and social links (GitHub Primate2580, LinkedIn "Alabi Tosin Samson", others as placeholders) as icon buttons.
- Right: a form (name, email, message) with floating labels, inline validation, a honeypot field, loading/success/error states. Wire it to Formspree (endpoint read from import.meta.env.VITE_FORM_ENDPOINT; document this in README).
- Footer: spaced-out "PRIMESWITCH" logo, small nav, year, and the tiny meta line style from the hero. Back-to-top button.
Checklist: form can't double-submit; errors are announced to screen readers; missing env var shows a friendly message instead of crashing.
```

### Phase 8: Polish, responsiveness, accessibility
```
Phase 8. Polish pass. Do not add new sections.
- Audit at 360, 390, 768, 1024, 1440, and 1920px; fix overflow, spacing, and tap-target sizes (min 44px).
- Unify motion: consistent easing and durations; confirm everything respects prefers-reduced-motion.
- Accessibility: heading order, landmarks, focus rings, color contrast, labels, alt text. Run Lighthouse and fix anything under 95 in Accessibility.
- Add a small custom 404-safe behavior for unknown hashes (scroll to top).
Report a before/after list of what you fixed.
```

### Phase 9: SEO, performance, and deployment
```
Phase 9. Get it production-ready and deploy.
- SEO: title, meta description, Open Graph and Twitter tags, canonical URL, favicon set (use my primeswitch logo files if I provide them, otherwise a placeholder), robots.txt, sitemap.xml, and JSON-LD "Person" structured data.
- Performance: lazy-load below-the-fold images, self-host or preload fonts with font-display: swap, remove unused dependencies, confirm the production bundle is small, and run Lighthouse (target 90+ in all four categories).
- Repo: write a clear README (what it is, stack, scripts, env vars, how to edit content.js, how to deploy), clean commit history, push to GitHub under Primate2580.
- Deployment: give me exact click-by-click steps to deploy on Vercel (or Netlify): import the repo, framework preset Vite, build command "npm run build", output "dist", add VITE_FORM_ENDPOINT, then attach a custom domain if I have one. Add a redeploy-on-push explanation.
- Final pre-launch checklist: links, form test, mobile test on a real phone, social preview test, 404 test.
```

---

## PART C: Handy add-on prompts (use anytime)

**Fix a visual mismatch:**
```
The [section] doesn't match the design direction. Compare it to the reference described in the master prompt and list the 3 biggest differences, then fix only those.
```

**Tweak the palette without rewriting components:**
```
Change only the design tokens in @theme to shift the palette toward [more purple / more coral / darker]. Do not edit component files.
```

**Explain what was just built:**
```
Explain the file structure and the 3 trickiest pieces of code in this phase as if I'm a junior dev, with one short exercise I can do to modify it myself.
```
