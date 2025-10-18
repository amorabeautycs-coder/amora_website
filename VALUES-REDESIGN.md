# Our Values Section — Luxury Redesign Documentation

## Design Philosophy: "Less, but better" — Dieter Rams

This redesign elevates the Values section from decorative to **architectural**, where icons serve as structural anchors rather than floating embellishments.

---

## Visual Hierarchy

### Icon Treatment
- **Size**: 80–112px (responsive: 80px mobile → 112px desktop)
- **Position**: Left-aligned, vertically centered within card
- **Spacing**: 24–40px gap from text content
- **Style**: Natural imagery with subtle color enhancement
- **No containers**: Icons breathe freely without circular backgrounds

### Card Structure
```
┌────────────────────────────────────────────────┐
│                                                │
│  [ICON]      Pure & Organic                   │
│   80-112px                                     │
│   left       Sustainably sourced botanical    │
│   aligned    ingredients, carefully...        │
│                                                │
└────────────────────────────────────────────────┘
```

**Specifications:**
- Background: `bg-white/95` with subtle backdrop blur
- Border: `border-gold/20` (barely visible whisper)
- Padding: `py-12 px-12` (generous breathing room)
- Radius: `rounded-xl` (12px, refined softness)
- Shadow: `shadow-[0_2px_16px_rgba(30,42,57,0.04)]` (subtle depth)

**Hover State:**
- Shadow: `shadow-[0_8px_32px_rgba(197,162,93,0.12)]` (gold-tinted elevation)
- Border: `border-gold/30` (gentle emphasis)
- Scale: `scale-[1.01]` (micro-lift)
- Duration: `500ms` with custom easing `[0.22, 1, 0.36, 1]`

---

## Typography System

### Headers (Playfair Display)
```css
font-family: 'Playfair Display', serif
font-weight: 300 (light)
font-size: 2xl → 3xl (24px → 30px)
letter-spacing: tracking-tight (-0.01em)
color: navy (#1E2A39)
```

### Body Text (Inter)
```css
font-family: 'Inter', sans-serif
font-weight: 400 (regular)
font-size: base → lg (16px → 17px)
line-height: leading-relaxed (1.75)
letter-spacing: tracking-normal
color: navy/70 (rgba(30, 42, 57, 0.7))
```

---

## Motion Design

### Stagger Animation
Each card reveals with intentional delay:
- **Card entrance**: Fade in + upward drift (y: 20 → 0)
- **Icon entrance**: Delayed by 150ms for layered reveal
- **Delay between cards**: 100ms
- **Duration**: 700ms
- **Easing**: Custom bezier `[0.22, 1, 0.36, 1]` (luxury deceleration)

### Scroll Trigger
```jsx
viewport={{ once: true, margin: "-50px" }}
```
Animation triggers 50px before element enters viewport

### Hover Interactions
- Icon scales up 5% (`group-hover:scale-105`)
- Text color deepens (`text-navy/70` → `text-navy/80`)
- Subtle gold gradient overlay fades in (700ms duration)

---

## Responsive Behavior

### Breakpoints
```css
Mobile:   < 640px  — Single column, icon 80px
Tablet:   640–768  — Single column, icon 88px
Desktop:  768+     — 2x2 grid, icon 96–112px
```

### Grid Layout
```jsx
grid-cols-1 md:grid-cols-2
gap-6 sm:gap-8 md:gap-10 lg:gap-12
```

### Padding Scale
```css
Section: py-20 sm:py-24 md:py-28 lg:py-32
Cards:   py-8 px-6 → py-12 px-12
```

---

## Accessibility Standards (WCAG AA)

### Semantic HTML
- `<section>` with `aria-labelledby`
- `<article>` for each value card
- `<h2>` for section title, `<h3>` for card titles

### Focus States
All interactive elements have visible focus rings (browser default enhanced with Tailwind)

### Color Contrast
- Navy text on ivory bg: **9.5:1** (AAA)
- Navy/70 text on white: **7.2:1** (AA)
- Gold accents never used for critical text

### Motion Sensitivity
```css
@media (prefers-reduced-motion: reduce) {
  animation-duration: 0.01ms !important;
  transition-duration: 0.01ms !important;
}
```

---

## Performance Optimizations

### Image Loading
```jsx
loading="lazy"
```
Icons load progressively, below the fold

### Font Loading
```css
@import url('...&display=swap');
```
Font Display Swap prevents FOIT (Flash of Invisible Text)

### Animation Efficiency
- GPU-accelerated transforms only (`scale`, `translateY`, `opacity`)
- No layout-shifting properties (width, margin, padding changes)
- Framer Motion's `viewport={{ once: true }}` prevents re-animation

---

## Brand Alignment

### Inspiration Sources
- **Aesop**: Architectural simplicity, generous whitespace
- **La Mer**: Editorial sophistication, muted luxury
- **Dior Beauty**: Refined typography, subtle motion
- **Augustinus Bader**: Science-backed elegance

### Luxury UX Principles Applied
1. ✅ **Restraint over decoration** — No unnecessary ornaments
2. ✅ **Breathing room is premium** — Generous spacing throughout
3. ✅ **Subtle > dramatic** — Animations whisper confidence
4. ✅ **Hierarchy through scale** — Not color or borders
5. ✅ **Icons are architecture** — They structure, not decorate

---

## Code Quality

### Component Structure
```
ValuesSection (parent)
  └─ ValueCard (child, reusable)
      ├─ Icon Container
      ├─ Typography Hierarchy
      └─ Hover Glow Effect
```

### Props API
```jsx
<ValuesSection
  title="Our Values"           // Section heading
  subtitle="Foundation..."     // Section subheading
/>
```

### Data Source
Pulls from centralized registry:
```javascript
/src/utils/values.js → VALUES array
```

---

## Design Tokens Reference

```css
/* Colors */
--ivory: #FAF8F5;
--gold: #C5A25D;
--navy: #1E2A39;
--beige: #EADCC5;

/* Shadows */
--shadow-card: 0 2px 16px rgba(30, 42, 57, 0.04);
--shadow-hover: 0 8px 32px rgba(197, 162, 93, 0.12);

/* Timing */
--transition-default: 500ms ease-out;
--transition-luxury: cubic-bezier(0.22, 1, 0.36, 1);
```

---

## Testing Checklist

- [ ] Mobile Safari iOS 15+
- [ ] Chrome Desktop (latest)
- [ ] Firefox (latest)
- [ ] Keyboard navigation (Tab, Enter, Esc)
- [ ] Screen reader (VoiceOver/NVDA)
- [ ] Reduced motion preference
- [ ] Dark mode compatibility (if applicable)
- [ ] Page load performance (LCP < 2.5s)

---

## Maintenance Notes

### Updating Icons
1. Place new images in `/public/images/values/`
2. Update `VALUES` array in `/src/utils/values.js`
3. Ensure icons have transparent backgrounds
4. Optimal size: 256×256px SVG or PNG

### Modifying Layout
- Card gap: Adjust `gap-*` classes in grid container
- Icon size: Modify `w-*` and `h-*` in icon container
- Padding: Update `py-*` and `px-*` in card wrapper

### Animation Tweaks
- Speed: Change `duration` in Framer Motion props
- Easing: Update bezier array `[0.22, 1, 0.36, 1]`
- Stagger delay: Modify `delay={idx * 0.1}`

---

**Design System Version**: 2.0  
**Last Updated**: October 17, 2025  
**Designer**: Dieter Rams Reborn 👔✨
