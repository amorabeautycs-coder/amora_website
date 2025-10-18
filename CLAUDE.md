# CLAUDE.md - Project Context for AI Assistant

## Project Overview

**Amora by Organic Beauty** is a production-ready, luxury skincare e-commerce website built with modern web technologies. The site showcases premium beauty products, devices, and serums with a focus on accessibility, performance, and elegant design.

### Key Information
- **Project Name**: Amora by Organic Beauty
- **Type**: Luxury skincare e-commerce website
- **Status**: Production-ready, deployed on Vercel
- **Target Audience**: High-end beauty enthusiasts seeking luxury skincare products
- **Design Philosophy**: Timeless elegance with modern functionality

---

## Technology Stack

### Core Technologies
- **Framework**: React 18.3.1 with React Router 6.26.2
- **Build Tool**: Vite 5.4.8
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS 3.4.13
- **State Management**: TanStack Query (React Query) 5.56.2
- **Animations**: Framer Motion 12.23.24
- **SEO**: React Helmet Async 2.0.5

### UI Components & Libraries
- **Component Library**: Custom UI components with Radix UI primitives
  - `@radix-ui/react-alert-dialog`
  - `@radix-ui/react-label`
  - `@radix-ui/react-tabs`
- **Icons**: Lucide React 0.445.0
- **Utilities**: 
  - `clsx` - Conditional classNames
  - `tailwind-merge` - Merge Tailwind classes
  - `class-variance-authority` - Component variants

### Development Tools
- **Linting**: ESLint with React, accessibility, and Prettier plugins
- **Formatting**: Prettier 3.3.3
- **Type Checking**: TypeScript definitions (JSDoc)
- **Node Version**: >=18.0.0

### Deployment
- **Platform**: Vercel
- **Configuration**: `vercel.json` with security headers and SPA routing

---

## Project Architecture

### Directory Structure

```
amora_website/
├── public/                    # Static assets
│   ├── robots.txt            # Search engine directives
│   ├── sitemap.xml           # SEO sitemap
│   └── images/               # Product images and assets
│       ├── hero/            # Hero section images
│       ├── products/        # Product images
│       └── values/          # Values section images
│
├── src/
│   ├── api/                  # Data layer
│   │   └── dataClient.js    # Mock API client with products, testimonials, FAQs
│   │
│   ├── components/           # Reusable React components
│   │   ├── ui/              # Base UI components (shadcn/ui style)
│   │   │   ├── alert.jsx
│   │   │   ├── badge.jsx
│   │   │   ├── button.jsx
│   │   │   ├── input.jsx
│   │   │   ├── label.jsx
│   │   │   ├── tabs.jsx
│   │   │   └── textarea.jsx
│   │   ├── Layout.jsx       # Main layout with header/footer
│   │   ├── ProductCard.jsx  # Product display card
│   │   ├── TestimonialCard.jsx  # Customer testimonial
│   │   ├── FAQItem.jsx      # FAQ accordion item
│   │   ├── ValuesSection.jsx # Values section component
│   │   └── LoadingSpinner.jsx # Loading state
│   │
│   ├── pages/               # Route components
│   │   ├── Home.jsx         # Homepage with hero, featured products
│   │   ├── Products.jsx     # Product catalog with filtering
│   │   ├── ProductDetail.jsx # Single product view
│   │   ├── About.jsx        # About page
│   │   ├── FAQ.jsx          # Frequently asked questions
│   │   └── Contact.jsx      # Contact form
│   │
│   ├── utils/               # Utility functions
│   │   ├── index.js         # General utilities
│   │   └── values.js        # Values section data
│   │
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles and Tailwind imports
│
├── Configuration Files
│   ├── vite.config.js       # Vite bundler configuration
│   ├── tailwind.config.js   # Tailwind CSS customization
│   ├── postcss.config.js    # PostCSS configuration
│   ├── vercel.json          # Vercel deployment settings
│   ├── package.json         # Dependencies and scripts
│   └── index.html           # HTML entry with SEO meta tags
│
└── Documentation
    ├── README.md            # Main documentation
    ├── DEPLOYMENT.md        # Deployment guide
    ├── MIGRATION.md         # Migration notes
    ├── BASE44-SETUP-GUIDE.md # Base44 integration guide
    ├── LOGO-SETUP-GUIDE.md  # Logo implementation
    ├── PRODUCT-IMAGES-SETUP.md # Product image guide
    ├── VALUES-*.md          # Values section documentation
    └── CLAUDE.md            # This file
```

---

## Design System

### Color Palette (Luxury Theme)
```javascript
{
  ivory: '#FAF8F5',          // Background, light sections
  gold: '#C5A25D',           // Primary accent, CTAs, highlights
  navy: '#1E2A39',           // Primary text, headers
  beige: '#EADCC5',          // Secondary accent, soft backgrounds
  'rose-beige': '#EADCC5'    // Alias for backward compatibility
}
```

### Typography
- **Serif Font**: Playfair Display, Cormorant Garamond (headings, elegant text)
- **Sans Font**: Inter (body text, UI elements)
- **Letter Spacing**: Generous tracking for luxury feel
- **Font Weights**: Primarily 300-400 for elegance

### Design Principles
1. **Minimalism**: Clean, spacious layouts with ample whitespace
2. **Luxury Aesthetics**: Gold accents, serif typography, refined color palette
3. **Accessibility**: WCAG 2.2 AA compliant
4. **Responsiveness**: Mobile-first, fully responsive design
5. **Performance**: Lazy loading, code splitting, optimized images

---

## Key Features & Functionality

### 1. Navigation
- **Header**: Fixed navbar with auto-hide on scroll down
- **Mobile Menu**: Hamburger menu with smooth animations
- **Skip Link**: Keyboard accessibility for main content
- **Active States**: Visual feedback for current page

### 2. Home Page (`/`)
- **Hero Section**: Large, elegant hero with CTAs
- **Featured Products**: Grid of 2-4 featured products
- **Testimonials**: Customer reviews carousel
- **Values Section**: Brand values with visual elements
- **SEO**: Comprehensive meta tags and structured data

### 3. Products Page (`/products`)
- **Category Filtering**: Filter by category (Devices, Serums, Treatments)
- **Product Grid**: Responsive grid layout
- **Product Cards**: Image, name, price, description, CTA
- **Lazy Loading**: Images load as they enter viewport

### 4. Product Detail Page (`/product-detail`)
- **Product Information**: Full details, benefits, usage instructions
- **Image Gallery**: Product images
- **Call to Action**: Purchase/inquiry buttons
- **Related Products**: Suggestions based on category

### 5. About Page (`/about`)
- **Brand Story**: Company history and mission
- **Values**: Core brand values
- **Team**: Founder/team information (optional)

### 6. FAQ Page (`/faq`)
- **Accordion Interface**: Collapsible FAQ items
- **Categories**: Organized by topic
- **Search Functionality**: (Future enhancement)

### 7. Contact Page (`/contact`)
- **Contact Form**: Name, email, message fields
- **Form Validation**: Client-side validation
- **Submit Handler**: (Connect to email service or backend)

---

## Data Management

### Data Client (`src/api/dataClient.js`)
A mock API client that simulates backend data fetching. Contains:

#### Products
```javascript
{
  id: string,
  name: string,
  brand: string,
  category: 'Devices' | 'Serums' | 'Treatments',
  price: number (in cents),
  description: string,
  key_benefits: string[],
  usage_instructions: string,
  image_url: string,
  featured: boolean
}
```

#### Testimonials
```javascript
{
  id: string,
  author: string,
  role: string,
  content: string,
  rating: number (1-5),
  image_url: string
}
```

#### FAQs
```javascript
{
  id: string,
  question: string,
  answer: string,
  category: string
}
```

### Data Fetching Pattern
- **Library**: TanStack Query (React Query)
- **Query Keys**: Descriptive keys for caching (e.g., `['products']`, `['testimonials']`)
- **Loading States**: Handled with `isLoading` flags
- **Error Handling**: Built-in error states

**Example Usage:**
```javascript
const { data: products = [], isLoading } = useQuery({
  queryKey: ['products'],
  queryFn: () => dataClient.entities.Product.list(),
});
```

---

## Routing Structure

### Route Configuration (`src/App.jsx`)
```javascript
/ (Home)                    # Homepage with hero and featured products
/products                   # Product catalog
/product-detail             # Product detail page
/about                      # About page
/faq                        # FAQ page
/contact                    # Contact page
* (Not Found)              # Redirects to home
```

### Navigation Features
- **Lazy Loading**: All pages are lazy-loaded for performance
- **Loading Spinner**: Suspense fallback during page loads
- **Redirects**: `/home` redirects to `/`, `*` redirects to `/`
- **Layout Wrapper**: All routes wrapped in `<Layout>` component

---

## Styling Approach

### Tailwind CSS
- **Configuration**: Extended with custom colors, fonts, animations
- **Utility-First**: Classes applied directly to JSX elements
- **Responsive**: Mobile-first breakpoints (sm, md, lg, xl)
- **Custom Classes**: Minimal custom CSS, mostly Tailwind utilities

### Global Styles (`src/index.css`)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom font imports */
/* Skip link styles */
/* Smooth scrolling */
```

### Component Styling Pattern
```javascript
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h2 className="text-3xl md:text-4xl text-navy mb-8">
    Title
  </h2>
</div>
```

---

## Performance Optimizations

### Code Splitting
- **Route-based splitting**: Each page is a separate chunk
- **Manual chunks**: React vendor and TanStack Query vendor bundles
- **Lazy loading**: Components loaded on demand

### Image Optimization
- **Lazy loading**: Images load as they enter viewport
- **Responsive images**: Multiple sizes for different viewports
- **WebP format**: Modern image format for smaller file sizes (recommended)

### Caching Strategy
- **React Query**: Automatic caching of API responses
- **Stale time**: Configurable data freshness
- **Cache invalidation**: Manual or automatic refetching

### Build Configuration
```javascript
// vite.config.js
{
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'query-vendor': ['@tanstack/react-query']
        }
      }
    }
  }
}
```

---

## Accessibility Features

### WCAG 2.2 AA Compliance
- **Semantic HTML**: Proper heading hierarchy, landmarks
- **ARIA Labels**: Descriptive labels for interactive elements
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Visible focus indicators
- **Color Contrast**: Meets minimum contrast ratios
- **Skip Links**: Skip to main content link
- **Alt Text**: All images have descriptive alt attributes

### Accessibility Tools
- **ESLint Plugin**: `eslint-plugin-jsx-a11y` catches accessibility issues
- **Screen Reader Testing**: Tested with VoiceOver/NVDA (recommended)

---

## SEO Implementation

### Meta Tags (`index.html`)
- **Title**: Descriptive page titles
- **Description**: Compelling meta descriptions
- **Open Graph**: Facebook/LinkedIn sharing
- **Twitter Cards**: Twitter sharing
- **Canonical URLs**: Prevent duplicate content
- **Viewport**: Mobile-responsive viewport

### Sitemap & Robots
- **sitemap.xml**: All pages listed for search engines
- **robots.txt**: Search engine directives

### Performance SEO
- **Fast Loading**: Optimized bundle size
- **Core Web Vitals**: LCP, FID, CLS optimized
- **Mobile-First**: Mobile-responsive design

---

## Development Workflow

### Available Scripts
```bash
npm run dev          # Start development server (port 3000)
npm run build        # Create production build
npm run start        # Preview production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

### Development Server
- **Port**: 3000
- **Hot Reload**: Instant updates on file changes
- **Error Overlay**: In-browser error messages

### Build Process
1. Vite bundles all files
2. Code splitting applied
3. Assets optimized
4. Output to `dist/` directory

---

## Common Patterns & Conventions

### Component Structure
```javascript
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { dataClient } from '@/api/dataClient';

export default function ComponentName() {
  // Data fetching
  const { data, isLoading } = useQuery({
    queryKey: ['key'],
    queryFn: () => dataClient.entities.Entity.list(),
  });

  // Conditional rendering
  if (isLoading) return <LoadingSpinner />;

  // Main render
  return (
    <section aria-labelledby="section-heading">
      <h2 id="section-heading">Title</h2>
      {/* Content */}
    </section>
  );
}
```

### Import Aliases
```javascript
import { dataClient } from '@/api/dataClient';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
```
- `@/` alias points to `src/` directory

### State Management
- **Local State**: `useState` for component-specific state
- **Server State**: TanStack Query for API data
- **URL State**: React Router for navigation state

---

## Environment & Configuration

### Environment Variables
Currently no environment variables are used. If adding:
- Create `.env` file (not committed to Git)
- Prefix with `VITE_` for Vite to expose to client
- Access via `import.meta.env.VITE_VARIABLE_NAME`

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **ES6+**: Code uses modern JavaScript features
- **PostCSS**: Autoprefixer adds vendor prefixes

---

## Future Enhancements / TODO

### Potential Features
- [ ] Backend integration (replace mock data client)
- [ ] E-commerce functionality (shopping cart, checkout)
- [ ] User authentication and accounts
- [ ] Product search functionality
- [ ] Product reviews and ratings
- [ ] Blog/content section
- [ ] Newsletter subscription
- [ ] Multi-language support (i18n)
- [ ] Analytics integration (Google Analytics, etc.)
- [ ] A/B testing framework

### Technical Improvements
- [ ] Unit and integration tests (Vitest, React Testing Library)
- [ ] E2E tests (Playwright, Cypress)
- [ ] TypeScript migration
- [ ] PWA capabilities (service worker, offline support)
- [ ] Image CDN integration
- [ ] Enhanced SEO with schema.org markup
- [ ] Performance monitoring (Web Vitals)

---

## Troubleshooting & Common Issues

### Build Issues
**Problem**: Build fails with module errors
**Solution**: Run `npm install` to ensure all dependencies are installed

**Problem**: Vite dev server won't start on port 3000
**Solution**: Port may be in use. Change port in `vite.config.js` or kill the process

### Styling Issues
**Problem**: Tailwind classes not applying
**Solution**: Ensure file path is included in `tailwind.config.js` content array

**Problem**: Custom colors not working
**Solution**: Verify color definitions in `tailwind.config.js` theme.extend.colors

### Routing Issues
**Problem**: Page refresh returns 404
**Solution**: Ensure `vercel.json` has proper rewrites for SPA routing

**Problem**: Images not loading
**Solution**: Check image paths are relative to `public/` directory

---

## Code Style Guidelines

### JavaScript/React
- **Functional Components**: Use function components, not classes
- **Hooks**: Use React hooks for state and effects
- **Arrow Functions**: Prefer arrow functions for callbacks
- **Destructuring**: Destructure props and state
- **Async/Await**: Use async/await over promises

### Naming Conventions
- **Components**: PascalCase (e.g., `ProductCard.jsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **Functions**: camelCase (e.g., `handleSubmit`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_URL`)
- **CSS Classes**: kebab-case or Tailwind utilities

### File Organization
- **One component per file**: Each component in its own file
- **Group related files**: Keep related components together
- **Index files**: Use for public API of a module

---

## Testing Guidelines

### Current State
No automated tests are currently implemented.

### Recommended Testing Strategy
1. **Unit Tests**: Test utility functions and hooks
2. **Component Tests**: Test component rendering and interactions
3. **Integration Tests**: Test page-level functionality
4. **E2E Tests**: Test critical user flows

### Suggested Tools
- **Vitest**: Fast unit test runner (Vite-native)
- **React Testing Library**: Component testing
- **Playwright** or **Cypress**: E2E testing

---

## Deployment

### Vercel Deployment
1. **Connect Repository**: Link GitHub repo to Vercel
2. **Configure Build**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. **Environment Variables**: Set in Vercel dashboard (if needed)
4. **Deploy**: Automatic deployment on push to main branch

### Security Headers (vercel.json)
- `X-Content-Type-Options`: Prevent MIME sniffing
- `X-Frame-Options`: Prevent clickjacking
- `X-XSS-Protection`: XSS protection
- `Referrer-Policy`: Control referrer information
- `Content-Security-Policy`: Restrict resource loading
- `Permissions-Policy`: Control browser features

---

## Contact & Support

### Codebase Maintainer
- **Repository**: amora_website
- **Owner**: amorabeautycs-coder
- **Branch**: main

### When Making Changes
1. **Read relevant documentation files** (listed above)
2. **Check existing components** before creating new ones
3. **Follow established patterns** for consistency
4. **Test changes locally** before committing
5. **Update documentation** if adding features

---

## Quick Reference

### Adding a New Product
Edit `src/api/dataClient.js` → Add to `products` array

### Adding a New Page
1. Create page in `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Add nav link in `src/components/Layout.jsx`

### Changing Colors
Edit `tailwind.config.js` → `theme.extend.colors`

### Changing Fonts
Edit `tailwind.config.js` → `theme.extend.fontFamily`
Import fonts in `index.html` or `index.css`

### Adding UI Component
Create in `src/components/ui/` following shadcn/ui pattern

---

## Important Notes for AI Assistant

### When Editing Code
1. **Maintain consistency**: Follow existing patterns and style
2. **Check dependencies**: Ensure imports and exports are correct
3. **Preserve accessibility**: Keep ARIA labels and semantic HTML
4. **Responsive design**: Maintain mobile-first approach
5. **Performance**: Consider lazy loading and code splitting

### When Debugging
1. **Check file paths**: Ensure correct relative/absolute paths
2. **Verify imports**: Check import statements and aliases
3. **Review Tailwind classes**: Ensure classes are valid
4. **Test responsiveness**: Check mobile, tablet, desktop views

### When Adding Features
1. **Use existing patterns**: Follow data fetching, routing patterns
2. **Maintain design system**: Use defined colors, fonts, spacing
3. **Add loading states**: Handle loading and error states
4. **Consider accessibility**: Add ARIA labels, keyboard support
5. **Update documentation**: Document new features and patterns

---

**Last Updated**: October 17, 2025
**Version**: 1.0.0
