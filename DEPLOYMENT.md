# Quick Deployment Guide

## 🚀 Deploy to Vercel in 3 Steps

### Step 1: Install Dependencies
```bash
cd /Users/nivbadli/projects/amora_website
npm install
```

### Step 2: Test Locally
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

### Step 3: Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

#### Option B: Using Vercel Dashboard
1. Push code to GitHub: `git push origin main`
2. Go to https://vercel.com/new
3. Import your repository
4. Vercel auto-detects settings ✅
5. Click "Deploy"

## 📋 Expected Build Output

```
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node Version: 18.x
```

## ✅ What's Been Implemented

### A. Vercel Readiness ✓
- ✅ Vite + React project structure
- ✅ package.json with dev, build, start, lint scripts
- ✅ vercel.json with security headers (CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- ✅ cleanUrls: true, trailingSlash: false
- ✅ Static assets in /public folder
- ✅ SPA routing configuration

### B. Accessibility (WCAG 2.2 AA) ✓
- ✅ Skip to content link in Layout
- ✅ Proper heading hierarchy (single h1 per page, logical h2-h6)
- ✅ Visible focus states on all interactive elements
- ✅ Keyboard navigation fully supported
- ✅ ARIA labels on buttons, links, forms, and navigation
- ✅ Descriptive alt text on all images with width/height
- ✅ Color contrast meets AA standards
- ✅ Form labels properly associated with aria-required
- ✅ Error messages with aria-live="polite"
- ✅ Semantic HTML (article, section, nav, header, footer)

### C. Performance & SEO ✓
- ✅ Complete meta tags in index.html (title, description, canonical)
- ✅ Open Graph and Twitter card tags
- ✅ robots.txt and sitemap.xml in /public
- ✅ Preload critical fonts with rel="preload"
- ✅ font-display: swap for better performance
- ✅ Lazy loading on images (loading="lazy", decoding="async")
- ✅ Image dimensions specified for CLS optimization
- ✅ Preconnect to Google Fonts
- ✅ Code splitting with React.lazy()
- ✅ Manual chunks for vendor code

### D. Product Page Refinements ✓
- ✅ Single large product image filling square container
- ✅ Price below Key Benefits, left-aligned, minimal typography
- ✅ Rounded 10-12px borders (rounded-xl)
- ✅ 1px translucent gold border on cards
- ✅ Soft shadows on containers

### E. Tooling & Quality ✓
- ✅ ESLint with jsx-a11y accessibility plugin
- ✅ Prettier configuration
- ✅ .editorconfig for consistent coding
- ✅ .gitignore for node_modules, dist, env files

## 🎯 Next Steps After Deployment

1. **Update sitemap.xml** with your actual domain
2. **Configure Base44 API** in src/api/base44Client.js
3. **Add actual products** via Base44 dashboard
4. **Test contact form** email integration
5. **Set up Google Analytics** (optional)
6. **Configure custom domain** in Vercel settings
7. **Enable HTTPS** (automatic with Vercel)

## 🔧 Local Development Commands

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run start

# Run ESLint
npm run lint

# Format with Prettier
npm run format
```

## 🌐 Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test responsive design on mobile/tablet
- [ ] Check all navigation links work
- [ ] Test contact form submission
- [ ] Verify product filtering works
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Check console for errors
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Verify meta tags with social media debuggers

## 📊 Expected Lighthouse Scores

With all optimizations implemented, you should see:
- **Performance**: 90-100
- **Accessibility**: 95-100
- **Best Practices**: 95-100
- **SEO**: 90-100

## 🆘 Troubleshooting

### Build fails on Vercel
- Check Node version is >= 18.0.0
- Verify all dependencies are in package.json
- Check for ESLint/TypeScript errors

### Images not loading
- Ensure images are in /public folder
- Use absolute paths starting with /
- Check image URLs in Base44 data

### Fonts not loading
- Verify Google Fonts preconnect in index.html
- Check CSP headers allow fonts.googleapis.com

## 📞 Support

Questions? Contact Amorabeautycs@gmail.com

---

**Happy deploying! 🎉**
