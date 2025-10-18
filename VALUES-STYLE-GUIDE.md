# Luxury Design System — Values Section Style Guide

## 🎨 Color Palette Application

### Primary Colors
```css
/* Ivory (Backgrounds) */
--ivory: #FAF8F5;
  ↳ Used for: Section backgrounds, subtle card tints
  ↳ Pairs with: Navy text, gold accents

/* Navy (Typography) */
--navy: #1E2A39;
  ↳ Used for: Headlines, body text
  ↳ Opacity variations:
    - 100%: Titles (high contrast)
    - 70%: Body text (softer, readable)
    - 60%: Subtle captions

/* Gold (Accents) */
--gold: #C5A25D;
  ↳ Used for: Borders, shadows, hover states
  ↳ Opacity variations:
    - 40%: Divider lines
    - 20-30%: Border states
    - 12%: Shadow tints
    - 2%: Subtle gradient overlays
```

### Color Psychology
- **Ivory**: Calm, clean, organic (aloe, cotton, natural ingredients)
- **Navy**: Trust, sophistication, science-backed credibility
- **Gold**: Luxury, premium quality, timeless elegance

---

## ✍️ Typography Hierarchy

### Display (Section Headers)
```css
font-family: 'Playfair Display', serif;
font-weight: 300; /* Light */
font-size: 
  Mobile:  2.25rem (36px)
  Tablet:  3rem (48px)
  Desktop: 3.75rem (60px)
line-height: 1.1;
letter-spacing: -0.02em; /* Tight */
color: #1E2A39; /* Navy */
```

**When to use:**
- Main section title ("Our Values")
- Hero headlines
- Editorial statements

---

### Heading (Card Titles)
```css
font-family: 'Playfair Display', serif;
font-weight: 300; /* Light */
font-size:
  Mobile:  1.5rem (24px)
  Desktop: 1.875rem (30px)
line-height: 1.2;
letter-spacing: -0.01em; /* Tracking tight */
color: #1E2A39; /* Navy */
margin-bottom: 0.75rem (12px);
```

**When to use:**
- Value card titles
- Subheadings within sections
- Category labels

---

### Body (Descriptions)
```css
font-family: 'Inter', sans-serif;
font-weight: 400; /* Regular */
font-size:
  Mobile:  1rem (16px)
  Desktop: 1.0625rem (17px)
line-height: 1.75; /* Relaxed */
letter-spacing: 0; /* Normal tracking */
color: rgba(30, 42, 57, 0.7); /* Navy 70% */
```

**When to use:**
- Card descriptions
- Paragraph text
- Supporting content

---

### Caption (Subtitles)
```css
font-family: 'Inter', sans-serif;
font-weight: 300; /* Light */
font-size: 1.125rem (18px) → 1.25rem (20px);
line-height: 1.6;
letter-spacing: 0.02em; /* Wide */
color: rgba(30, 42, 57, 0.6); /* Navy 60% */
```

**When to use:**
- Section subtitles ("The foundation of timeless beauty")
- Taglines
- Secondary messaging

---

## 📐 Spacing System (8pt Grid)

### Section Padding (Vertical)
```css
Mobile:  5rem (80px)   /* py-20 */
Tablet:  6rem (96px)   /* py-24 */
Desktop: 7rem (112px)  /* py-28 */
Large:   8rem (128px)  /* py-32 */
```

### Container Padding (Horizontal)
```css
Mobile:  1.5rem (24px)  /* px-6 */
Tablet:  2rem (32px)    /* px-8 */
Desktop: 3rem (48px)    /* px-12 */
```

### Card Interior Spacing
```css
Mobile:
  Vertical:   2rem (32px)  /* py-8 */
  Horizontal: 1.5rem (24px) /* px-6 */

Desktop:
  Vertical:   3rem (48px)  /* py-12 */
  Horizontal: 3rem (48px)  /* px-12 */
```

### Content Gaps
```css
Icon ↔ Text:      1.5rem → 2.5rem (24px → 40px)
Title ↔ Body:     0.75rem → 1rem (12px → 16px)
Cards in Grid:    1.5rem → 3rem (24px → 48px)
Section Header ↔ Cards: 3rem → 5rem (48px → 80px)
```

---

## 🎭 Shadows & Depth

### Elevation System

**Level 0 (Flat):**
```css
box-shadow: none;
```
Use for: Plain backgrounds, full-bleed sections

**Level 1 (Resting):**
```css
box-shadow: 0 2px 16px rgba(30, 42, 57, 0.04);
```
Use for: Default card state, subtle depth

**Level 2 (Hover):**
```css
box-shadow: 0 8px 32px rgba(197, 162, 93, 0.12);
```
Use for: Interactive cards on hover, gold-tinted luxury lift

**Level 3 (Active/Modal):**
```css
box-shadow: 0 16px 48px rgba(30, 42, 57, 0.08);
```
Use for: Modals, overlays, popovers

---

### Shadow Psychology
- **Navy-tinted** (`rgba(30, 42, 57, ...)`) → Natural depth, grounded
- **Gold-tinted** (`rgba(197, 162, 93, ...)`) → Luxury glow, premium feel

---

## 🎬 Animation Curves

### Standard Easing
```css
ease-out       /* Default browser */
```
Use for: Basic fades, simple transitions

### Luxury Deceleration
```javascript
cubic-bezier(0.22, 1, 0.36, 1)
```
Use for: Card entrances, hover states, premium interactions
**Feel:** Confident, smooth, never rushed

### Snappy Response
```css
ease-in-out
```
Use for: Toggle switches, quick feedback

### Natural Bounce
```javascript
cubic-bezier(0.68, -0.55, 0.265, 1.55)
```
Use for: Playful micro-interactions (sparingly)

---

## ⏱️ Timing System

### Duration Scale
```css
Instant:  0ms      /* Reduced motion fallback */
Fast:     150ms    /* Icon changes, color shifts */
Default:  300ms    /* General transitions */
Smooth:   500ms    /* Card hovers, scale effects */
Slow:     700ms    /* Card entrances, page loads */
Epic:     1000ms+  /* Hero animations (rare) */
```

### Stagger Delays
```javascript
Base delay:  0ms
Card 1:      0ms
Card 2:      100ms   (0.1s * 1)
Card 3:      200ms   (0.1s * 2)
Card 4:      300ms   (0.1s * 3)

Icon delay within card: +150ms
```

---

## 🖼️ Border System

### Weights
```css
Hairline:  1px   /* Whisper borders, barely visible */
Standard:  2px   /* Input focus, buttons */
Bold:      3px   /* Accents, emphasis */
```

### Radii
```css
None:      0px       /* border-none */
Subtle:    4px       /* border-sm */
Default:   8px       /* border-md */
Soft:      12px      /* rounded-xl (cards) */
Pill:      9999px    /* rounded-full (badges) */
```

### Value Card Borders
```css
border: 1px solid rgba(197, 162, 93, 0.2);  /* Resting */
→ hover: 1px solid rgba(197, 162, 93, 0.3); /* Hover */
```

---

## 📱 Responsive Breakpoints

```css
/* Tailwind defaults used */
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Laptops */
xl:  1280px  /* Desktops */
2xl: 1536px  /* Large monitors */
```

### Layout Shifts
```css
< 768px:  Single column, stacked cards
≥ 768px:  2x2 grid
≥ 1280px: Same grid, larger gaps
```

### Icon Scaling
```css
Mobile:   80px  (w-20 h-20)
Tablet:   96px  (w-24 h-24)
Desktop:  112px (w-28 h-28)
```

---

## 🎯 Focus States (Accessibility)

### Interactive Elements
```css
/* Tailwind default enhanced */
outline: 2px solid rgba(197, 162, 93, 0.6);
outline-offset: 2px;
border-radius: 8px;
```

**Applies to:**
- Clickable cards (if linked)
- Buttons
- Form inputs

### Keyboard Indicator
```css
:focus-visible {
  outline: 2px dashed #C5A25D;
  outline-offset: 4px;
}
```

---

## 🌊 Hover Interaction Anatomy

### Card Hover Sequence (500ms total)
```
1. Shadow blooms (navy → gold tint)
   └─ 0-500ms

2. Border deepens (20% → 30% opacity)
   └─ 0-500ms

3. Card lifts (scale 1 → 1.01)
   └─ 0-500ms

4. Icon scales (scale 1 → 1.05)
   └─ 100-500ms (delayed 100ms)

5. Text darkens (70% → 80% opacity)
   └─ 0-300ms

6. Gradient overlay fades in (0 → 100%)
   └─ 0-700ms (slowest, most subtle)
```

**All transitions:** `duration-500 ease-out`

---

## 🎨 Gradient Overlays

### Subtle Luxury Glow (Hover)
```css
background: linear-gradient(
  135deg,
  rgba(197, 162, 93, 0.02) 0%,
  transparent 60%
);
opacity: 0; /* Default */
→ hover: opacity: 1;
transition: opacity 700ms ease-out;
```

**Purpose:** Adds warmth without overpowering content

---

## 🔍 Icon Treatment

### Size & Position
```css
width: 80px → 112px (responsive)
height: 80px → 112px (responsive)
position: Left-aligned in flex layout
gap: 24px → 40px from text
```

### Image Filters (Subtle Enhancement)
```css
filter: 
  brightness(0.85)    /* Slight dim for elegance */
  sepia(0.15)         /* Warm tone */
  hue-rotate(15deg)   /* Gold shift */
  saturate(1.1);      /* Rich colors */

opacity: 0.9; /* Resting */
→ hover: opacity: 1; /* Full intensity */
```

**Purpose:** Make icons feel cohesive with gold brand palette

---

## 🧪 Implementation Checklist

When creating new luxury components, ensure:

- [ ] Uses 8pt spacing grid (`0.5rem` increments)
- [ ] Includes hover states with 500ms transitions
- [ ] Has focus states for keyboard navigation
- [ ] Respects `prefers-reduced-motion`
- [ ] Uses navy-tinted or gold-tinted shadows (never pure black)
- [ ] Typography scale follows Playfair (headers) + Inter (body)
- [ ] Icons are 80px+ (never smaller than 64px)
- [ ] Animations use `viewport={{ once: true }}`
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Mobile-first responsive breakpoints

---

## 📚 Design Reference Library

**Inspired by:**
1. **Aesop** — Architectural simplicity, monospace accents
2. **La Mer** — Oceanic gradients, serif elegance
3. **Dior Beauty** — Editorial photography, gold accents
4. **Augustinus Bader** — Science-backed luxury, clean layouts

**Guiding Philosophy:**
> "Perfection is achieved not when there is nothing more to add,  
> but when there is nothing left to take away."  
> — Antoine de Saint-Exupéry

---

**Style Guide Version**: 2.0  
**Last Updated**: October 17, 2025  
**Design System**: Amora by Organic Beauty — Timeless Beauty, Modern Science

---

*Use this guide as your single source of truth for maintaining luxury design consistency across all Amora components.* ✨
