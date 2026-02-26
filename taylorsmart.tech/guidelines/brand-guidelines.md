# taylorsmart.tech — Brand Guidelines

**Version:** 2.0
**Brand:** taylorsmart.tech (Taylor Smart LLC)
**Location:** Sugarcreek, Ohio

---

## Brand Overview

taylorsmart.tech is a cutting-edge technology services company serving businesses in Sugarcreek, Ohio and surrounding communities. We specialize in full-stack web development, AI integrations, mobile apps, networking infrastructure, IT solutions, and educational AI workshops.

### Brand Pillars

| Pillar | Meaning |
|--------|---------|
| **Intelligence** | Smart solutions, data-driven decisions, AI expertise |
| **Confidence** | We deliver — no hedging, no excuses |
| **Innovation** | Cutting-edge technology, always forward |
| **Trust** | Local, reliable, respectful — your technology partner |

### Brand Concept: "Engineered Intelligence"

The fusion of human expertise and intelligent technology. Every touchpoint communicates that taylorsmart.tech doesn't just implement technology — we engineer smart solutions tailored to your business.

---

## Brand Name

The brand name is **taylorsmart.tech** — always written as one continuous word with the domain extension.

### Name Treatment

The wordmark uses deliberate weight contrast:
- **taylor** — Inter ExtraBold (800) — solid, authoritative
- **smart** — Inter Light (300) — refined, intelligent
- **.tech** — Inter Bold (700), Electric Cyan — the technological edge

### Casing Rules

- **Lowercase preferred:** `taylorsmart.tech` in all brand contexts
- **Legal/formal contexts:** Taylor Smart LLC
- **Never:** TaylorSmart.Tech, TAYLORSMART.TECH, Taylor Smart Technology Solutions

---

## Logo System

### Primary Logo

The taylorsmart.tech logo is the **wordmark** itself — the brand name rendered with deliberate weight contrast. No separate icon accompanies the wordmark; the typography IS the logo.

### The "ts" Monogram

For icon-only contexts (favicons, app icons, social avatars), the brand uses a lowercase **"ts" monogram** — a clean, minimal mark that mirrors the wordmark's weight contrast:
- **"t"** — Inter ExtraBold (800)
- **"s"** — Inter Light (300)
- Set on a rounded square background

### Logo Variations

| Variation | File | Use Case |
|-----------|------|----------|
| **Full Logo** | `logo/svg/logo-full.svg` | Website headers, marketing materials, presentations |
| **Full Logo — White** | `logo/svg/logo-full-white.svg` | Dark backgrounds, hero sections, overlays |
| **Wordmark** | `logo/svg/logo-wordmark.svg` | When space is limited, email signatures |
| **ts Monogram — Dark** | `logo/svg/logo-icon.svg` | App icons, favicons, social avatars, dark backgrounds |
| **ts Monogram — Light** | `logo/svg/logo-icon-light.svg` | Light backgrounds, print materials |

### Clear Space

Maintain clear space around the logo equal to the cap height of the wordmark. Never crowd the logo with other elements.

### Minimum Sizes

| Context | Monogram Minimum | Full Logo Minimum |
|---------|-----------------|-------------------|
| Digital | 32px | 160px width |
| Print | 0.25 inch | 1.5 inches width |
| Favicon | 16px | N/A |

### Logo Don'ts

- Do not rotate, skew, or distort
- Do not add drop shadows or 3D effects
- Do not place on busy or low-contrast backgrounds
- Do not separate ".tech" from "taylorsmart" in the wordmark
- Do not change the weight contrast in the name treatment
- Do not use unapproved colors

---

## Color Palette

### Primary Colors

#### Midnight Navy
**Hex:** `#0B1121` (950) — Main brand dark
**Role:** Backgrounds, headers, hero sections, primary surfaces
**Feeling:** Intelligence, authority, trust, depth

#### Electric Cyan
**Hex:** `#00D4FF` (500) — Main accent
**Role:** CTAs, links, highlights, the ".tech" in the wordmark, interactive elements
**Feeling:** Innovation, energy, cutting-edge, dynamic

#### Ember Gold
**Hex:** `#FFC107` (500) — Warm highlight
**Role:** Premium features, workshop elements, awards, emphasis (sparingly)
**Feeling:** Creativity, enlightenment, human warmth

### Color Ratios

The brand palette follows a **70-20-10** ratio:
- **70%** — Midnight Navy + Neutral grays (structure)
- **20%** — Electric Cyan (technology accent)
- **10%** — Ember Gold (warm emphasis)

### Full Shade Ramps

Each color includes a full 11-shade ramp (50-950) defined in:
- `colors/palette.json` — Raw values
- `colors/brand-variables.css` — CSS custom properties
- `colors/tailwind-config.js` — Tailwind CSS integration

---

## Typography

### Font Stack

| Role | Font | Weight | Fallback |
|------|------|--------|----------|
| **Headings** | Inter | 600-800 | -apple-system, sans-serif |
| **Body** | Inter | 400-500 | -apple-system, sans-serif |
| **Code/Technical** | JetBrains Mono | 400-600 | Fira Code, monospace |

### Type Scale

| Level | Size | Weight | Tracking | Use |
|-------|------|--------|----------|-----|
| Display | 56px | 800 | -2px | Hero headlines |
| H1 | 48px | 800 | -1.5px | Page titles |
| H2 | 36px | 700 | -1px | Section titles |
| H3 | 24px | 600 | -0.5px | Subsections |
| H4 | 18px | 700 | 0 | Card titles |
| Body | 16px | 400 | 0 | Default text |
| Body Lg | 18px | 400 | 0 | Intro paragraphs |
| Caption | 14px | 500 | 0 | Supporting text |
| Overline | 11px | 700 | 4px | Section labels (uppercase) |
| Code | 14px | 400 | 0 | Technical content |

---

## Brand Voice & Tone

### Personality

| Trait | What It Means | What It's Not |
|-------|--------------|---------------|
| **Confident** | Direct, assured, capable | Arrogant, boastful |
| **Clear** | Plain language, no jargon | Dumbed down, vague |
| **Smart** | Insightful, specific, expert | Buzzwordy, academic |
| **Local** | Neighborly, community-invested | Folksy, unprofessional |

### Writing Rules

1. **Active voice always.** "We build" not "Solutions are built"
2. **Short sentences.** If it needs a semicolon, make it two sentences
3. **Specific beats generic.** "3x faster" beats "significantly improved"
4. **You and We.** Address the reader directly
5. **No hedge words.** Cut "might," "perhaps," "we think"

### Tagline Options

- **"Smart solutions, Taylored for you."** — Primary tagline
- **"Smart tech. Full service."** — Service-focused
- **"Built to be smart. Engineered to last."** — Brand statement
- **"Ready to build something smart?"** — CTA-focused

---

## File Structure

```
taylorsmart.tech/
├── logo/
│   └── svg/
│       ├── logo-icon.svg          — ts monogram (dark bg)
│       ├── logo-icon-light.svg    — ts monogram (light bg)
│       ├── logo-full.svg          — Wordmark (light bg)
│       ├── logo-full-white.svg    — Wordmark (dark bg)
│       └── logo-wordmark.svg      — Wordmark only
├── colors/
│   ├── palette.json               — All color values
│   ├── brand-variables.css        — CSS custom properties
│   └── tailwind-config.js         — Tailwind integration
├── typography/
│   └── brand-fonts.css            — Type system & classes
├── guidelines/
│   └── brand-guidelines.md        — This document
└── templates/
    └── (future social/print templates)
```
