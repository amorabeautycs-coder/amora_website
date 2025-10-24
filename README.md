# Amora by Organic Beauty - Website

A production-ready, accessible luxury skincare website built with React, Vite, and Tailwind CSS.

## ✨ Features

- **Production-Ready**: Optimized for Vercel deployment with proper security headers
- **Accessibility**: WCAG 2.2 AA compliant with proper ARIA labels, keyboard navigation, and semantic HTML
- **Performance**: Lazy loading, code splitting, optimized images, and preconnect for external resources
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter cards, sitemap, and robots.txt
- **Modern Stack**: React 18, React Router 6, TanStack Query, Tailwind CSS
- **Code Quality**: ESLint with accessibility plugin, Prettier, and EditorConfig

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run start
```

### Code Quality

```bash
# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

## 📦 Project Structure

```
amora_website/
├── public/                 # Static assets
│   ├── robots.txt         # Search engine directives
│   ├── sitemap.xml        # Sitemap for SEO
│   └── favicon.svg        # Site favicon
├── src/
│   ├── api/               # API client (Base44)
│   │   └── base44Client.js
│   ├── components/        # React components
│   │   ├── ui/           # UI components (Button, Input, etc.)
│   │   ├── Layout.jsx    # Main layout with header/footer
│   │   ├── ProductCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── FAQItem.jsx
│   │   └── LoadingSpinner.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── About.jsx
│   │   ├── FAQ.jsx
│   │   └── Contact.jsx
│   ├── utils/            # Utility functions
│   │   └── index.js
│   ├── App.jsx           # Main app component with routing
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML entry point with SEO meta tags
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── vercel.json           # Vercel deployment configuration
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
└── .editorconfig         # EditorConfig for consistent coding styles
```

## 🌐 Deployment to Vercel

### Method 1: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy to Vercel
vercel

# For production deployment
vercel --prod
```

### Method 2: Using Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect the settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

### Environment Variables (if needed)

Add any environment variables in the Vercel dashboard under:
Project Settings → Environment Variables

Example:
```
VITE_API_BASE_URL=https://your-api-endpoint.com
```

## 🎨 Design System

### Color Palette
- **Ivory**: `#FAF8F5` - Background
- **Gold**: `#C5A25D` - Primary accent
- **Navy**: `#1E2A39` - Text and headings
- **Rose Beige**: `#EADCC5` - Secondary accent

### Typography
- **Headings**: Cormorant Garamond (serif)
- **Body**: Inter (sans-serif)
- **Font Weights**: 300 (light), 400 (normal), 600 (semibold)

### Border Radius
- **Cards/Containers**: `rounded-xl` (12px)
- **Buttons**: `rounded-none` (0px) or `rounded-xl` (12px)
- **Badges**: `rounded-full`

## ♿ Accessibility Features

- **Skip to main content** link for keyboard users
- **Proper heading hierarchy** (single h1 per page, logical h2-h6)
- **ARIA labels** on all interactive elements
- **Keyboard navigation** fully supported
- **Focus states** visible on all focusable elements
- **Alt text** on all images with proper descriptions
- **Form labels** properly associated with inputs
- **Color contrast** meets WCAG AA standards
- **Semantic HTML** throughout (article, section, nav, etc.)
- **Reduced motion** support for accessibility

## 🔒 Security Headers

The following security headers are configured in `vercel.json`:

- **Content-Security-Policy**: Restricts resource loading
- **X-Content-Type-Options**: Prevents MIME sniffing
- **X-Frame-Options**: Prevents clickjacking
- **Referrer-Policy**: Controls referrer information
- **Permissions-Policy**: Restricts browser features

## 🔧 Configuration Files

### vercel.json
- Security headers for all routes
- Clean URLs (no .html extension)
- No trailing slashes
- SPA routing configuration

### .eslintrc.json
- ESLint with React and accessibility rules
- jsx-a11y plugin for accessibility linting

### tailwind.config.js
- Custom color palette
- Custom fonts
- Content paths for purging

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔌 API Integration

The site uses Base44 as the backend. To connect your actual Base44 instance:

1. Update `src/api/base44Client.js` with your Base44 credentials
2. Configure the entities (Product, Testimonial, FAQ)
3. Update the email integration endpoint

## 📊 Performance Optimizations

- **Code Splitting**: Pages are lazy-loaded
- **Image Optimization**: Lazy loading with proper dimensions
- **Font Loading**: Preconnect and font-display: swap
- **Caching**: Query caching with TanStack Query
- **Bundle Optimization**: Manual chunks for vendors
- **Preloading**: Critical resources preloaded

## 🛠️ Development Commands

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Preview production build
npm run start

# Run linter
npm run lint

# Format code
npm run format
```

## 📝 Notes

### Updating Content

- **Products**: Managed via Base44 Product entity
- **Testimonials**: Managed via Base44 Testimonial entity
- **FAQs**: Managed via Base44 FAQ entity
- **Contact Form**: Sends email via Base44 Core.SendEmail integration

### SEO Improvements

To improve SEO further:
1. Update `public/sitemap.xml` with actual URLs
2. Add product pages to sitemap
3. Update `index.html` meta descriptions per page
4. Add structured data (JSON-LD) for products
5. Create a blog section for content marketing

### Brand Customization

All brand colors and typography are centralized in:
- `tailwind.config.js` - Color palette
- `src/index.css` - Global styles
- Component inline styles for specific design elements

## 🤝 Support

For issues or questions:
- Email: Amorabeautycs@gmail.com
- Phone: +1 (866) 242-9068

## 📄 License

© 2025 Amora by Organic Beauty. All rights reserved.

---

**Built with ❤️ for timeless beauty and modern science**
