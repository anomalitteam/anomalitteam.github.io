# EzWeb — Landing Page for EZShot

## Overview

Landing page informativa for EZShot, a professional macOS screenshot tool. Single-page with anchor navigation, built with Next.js + React + Tailwind CSS.

### Goal

Present EZShot's features, differentiate it from macOS native screenshot, and drive conversions (download/purchase at $9.99 USD one-time payment, 3-day free trial).

### Target Audience

macOS users who take frequent screenshots — developers, designers, technical writers, support agents.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Theme | next-themes (dark/light toggle) |
| Animations | Framer Motion (hero, scroll reveals) |
| Icons | Lucide React |
| Font | Inter (next/font/google) |
| Deployment | Vercel (SSG — static export or ISR) |

---

## Architecture

```
EzWeb/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout: metadata, font, providers
│   │   ├── page.tsx                # Home page: composes all sections
│   │   └── globals.css             # Tailwind + custom theme tokens
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky nav, blur backdrop, theme toggle, anchor links
│   │   │   └── Footer.tsx          # Links, copyright, macOS badge
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Headline, subtitle, CTA, hero screenshot
│   │   │   ├── Features.tsx        # Grid of 5 capture modes + color picker
│   │   │   ├── HowItWorks.tsx      # Step-by-step flow with screenshots
│   │   │   ├── Comparison.tsx      # Table: EZShot vs macOS native
│   │   │   ├── Pricing.tsx         # Single plan card: trial + $9.99
│   │   │   └── Faq.tsx             # Accordion FAQ
│   │   └── ui/
│   │       ├── Button.tsx          # CTA button variants
│   │       ├── SectionHeading.tsx  # Consistent section titles
│   │       ├── Badge.tsx           # "EZ" mode badge, "Pro" badge
│   │       ├── Accordion.tsx       # FAQ accordion item
│   │       ├── ThemeToggle.tsx     # Dark/light toggle button
│   │       └── ScrollReveal.tsx    # Framer Motion wrapper for scroll animations
│   └── lib/
│       ├── content.ts             # All static content data
│       └── constants.ts           # App metadata, URLs, site config
├── public/
│   └── images/
│       ├── hero-screenshot.png      # Main hero screenshot
│       ├── region-capture.png       # Region capture feature screenshot
│       ├── fullscreen-capture.png   # Full screen capture screenshot
│       ├── color-picker.png         # Color picker screenshot
│       ├── editor-tools.png         # Annotation tools screenshot
│       └── comparison.png           # Side-by-side comparison graphic
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

### Component Tree

```
layout.tsx
├── ThemeProvider (next-themes)
│   ├── Navbar
│   │   ├── Logo
│   │   ├── NavLinks (scroll to anchors)
│   │   ├── ThemeToggle
│   │   └── Button (CTA: "Descargar")
│   ├── main
│   │   ├── Hero
│   │   │   ├── SectionHeading
│   │   │   ├── Button (CTA)
│   │   │   └── Screenshot image
│   │   ├── Features
│   │   │   ├── SectionHeading
│   │   │   ├── FeatureCard × 6
│   │   │   │   ├── Icon
│   │   │   │   ├── Badge (for EZ modes)
│   │   │   │   ├── Title + Description
│   │   │   │   └── Screenshot
│   │   ├── HowItWorks
│   │   │   ├── SectionHeading
│   │   │   └── StepItem × N (timeline)
│   │   ├── Comparison
│   │   │   ├── SectionHeading
│   │   │   └── ComparisonTable
│   │   ├── Pricing
│   │   │   ├── SectionHeading
│   │   │   └── PricingCard
│   │   └── Faq
│   │       ├── SectionHeading
│   │       └── Accordion × N
│   └── Footer
```

### Data Flow

- All content is static, defined in `src/lib/content.ts`
- No API calls, no database, no server-side logic
- `next build` generates fully static HTML (SSG)
- Theme state managed by `next-themes` (persisted to localStorage, respects system preference)

---

## Visual Design

### Theme — Claro

| Token | Value |
|---|---|
| Background | `#FFFFFF` (white sections), `#F5F5F7` (gray sections, alternating) |
| Text primary | `#1D1D1F` |
| Text secondary | `#6E6E73` |
| Accent / CTA | `#0071E3` |
| Borders | `#D2D2D7` |

### Theme — Oscuro

| Token | Value |
|---|---|
| Background | `#000000` (dark sections), `#1D1D1F` (alternating) |
| Text primary | `#F5F5F7` |
| Text secondary | `#98989D` |
| Accent / CTA | `#2997FF` |
| Borders | `#48484A` |

### Typography

- **Font**: Inter via `next/font/google`
- **Weights**: 400 (body), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold for hero)
- **Scale**: Hero ~4xl/5xl, section headings ~3xl, body ~lg

### Design Principles

- Ample whitespace — sections well-separated
- App screenshots as visual anchors with rounded corners + subtle shadow
- Subtle scroll-triggered animations (fade + slide up) via Framer Motion
- "EZ" badge (red/pink pill) for quick capture modes
- Navbar: sticky, `backdrop-filter: blur(20px)`, subtle bottom border

---

## Sections Content

### 1. Navbar
- Logo (EZShot icon + name)
- Links: Funciones | Cómo funciona | Comparativa | Precio | FAQ
- Theme toggle (sun/moon icon)
- CTA button: "Descargar gratis"

### 2. Hero
- **Headline**: "Capturas de pantalla profesionales en segundos"
- **Subtitle**: "Anota, censura, numera y comparte. Todo desde la barra de menú de tu Mac."
- **CTA**: "Descargar prueba gratis" (button)
- **Secondary**: "Pago único · $9.99 USD · 3 días de prueba"
- **Visual**: Hero screenshot showing the app in action (region capture with toolbar)

### 3. Features (grid 2×3 or 3×2)
- **Captura de Región** — Select any area, edit inline with annotations
- **EZ Región** (badge: "Rápido") — Select and copy to clipboard instantly
- **Pantalla Completa** — Full screen capture with full annotation editor
- **EZ Pantalla Completa** (badge: "Rápido") — Instant full screen to clipboard
- **Color Picker** — Pick any color, get HEX/RGB/HSB, copy instantly
- **Editor de Anotaciones** — Rectangles, arrows, text, blur, auto-numbering

### 4. How It Works
Visual timeline showing:
1. Click menu bar icon or press custom hotkey
2. Select region or capture full screen
3. Annotate with built-in tools (optional)
4. Copy to clipboard or save to disk

### 5. Comparison
Feature comparison table: EZShot vs macOS native screenshot

| Feature | macOS Native | EZShot |
|---|---|---|
| Region capture | Yes | Yes |
| Full screen capture | Yes | Yes |
| Inline annotation editor | No (separate app) | Yes |
| Blur/censor tool | No | Yes |
| Auto-numbering | No | Yes |
| Custom hotkeys | Fixed | Customizable |
| Color picker | No | Yes |
| Instant clipboard mode | Ctrl+click | Dedicated "EZ" modes |
| Multi-monitor overlay | Limited | Full support |
| Copy + Save in one flow | No | Yes |
| Price | Free (included) | $9.99 one-time |

### 6. Pricing
- Single plan card, centered
- **Title**: EZShot Pro
- **Price**: $9.99 USD — pago único
- **Features list**: Todas las funciones, actualizaciones incluidas, sin suscripción
- **Trial**: 3 días de prueba gratuita
- **CTA**: "Descargar prueba gratis"
- **Note**: "Pago único. Sin suscripciones. Sin letra pequeña."

### 7. FAQ (accordion)
- ¿En qué se diferencia EZShot de la captura nativa de macOS?
- ¿Cuánto cuesta EZShot?
- ¿Hay versión de prueba?
- ¿Qué versiones de macOS soporta?
- ¿Las actualizaciones son gratuitas?
- ¿Puedo usar la licencia en varios Macs?
- ¿Cómo funcionan los atajos de teclado?
- ¿Dónde se guardan las capturas?

### 8. Footer
- Logo + tagline
- Links: Funciones | Precio | FAQ | Soporte | Privacidad
- "Hecho para macOS" badge
- Copyright

---

## Skills to Activate

| Skill | Purpose |
|---|---|
| `frontend-design` | Visual design guidance, distinctive aesthetic |
| `vercel-react-best-practices` | Performance optimization for React/Next.js |

---

## Non-Goals (for this phase)

- Blog, documentation, or multi-page structure
- User authentication / dashboard
- Payment processing or license management
- Interactive app demo
- i18n / multi-language (Spanish content only, code in English)
