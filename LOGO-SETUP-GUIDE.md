# How to Add Your Logo

## 📍 Step 1: Add Your Logo Image

Place your logo file in the **public/images** folder:

```
/public/images/logo.svg     ← Recommended (SVG is scalable)
/public/images/logo.png     ← Alternative (PNG with transparent background)
```

### Logo Requirements
- **Recommended format**: SVG (scalable, looks sharp on all devices)
- **Alternative format**: PNG with transparent background
- **Recommended height**: 48-60px (will auto-scale)
- **Width**: Proportional to height (maintain aspect ratio)

## 🔧 Step 2: Update Layout.jsx

Open `/src/components/Layout.jsx` and find the logo section (around line 72-105).

### Current Code (Text Logo):
```jsx
{/* Text Logo (currently active - remove when using image logo) */}
<div className="text-center">
  <div className="text-2xl...">AMORA</div>
  <div className="text-[9px]...">By Organic Beauty</div>
</div>
```

### Change to (Image Logo):
```jsx
{/* Image Logo */}
<img 
  src="/images/logo.svg" 
  alt="Amora by Organic Beauty" 
  className="h-12 w-auto transition-opacity group-hover:opacity-80"
/>
```

## 📝 Quick Instructions

**Already done for you!** I've added comments in the Layout.jsx file. Just:

1. **Add your logo** to `/public/images/logo.svg` (or `.png`)

2. **Edit `/src/components/Layout.jsx`**:
   - Find line ~84-89 (the commented `<img>` tag)
   - **Uncomment** the `<img>` tag (remove `{/*` and `*/}`)
   - **Comment out or delete** the text logo div (lines 92-104)

3. **Save** and refresh your browser!

## 🎨 Example Logo Sizes

If your logo is:
- **Small/Icon only**: Use `className="h-10 w-auto"`
- **Medium**: Use `className="h-12 w-auto"` ✅ (default)
- **Large**: Use `className="h-16 w-auto"`

Just change the `h-12` value in the className.

## 🔄 Before & After

### Before (Text Logo):
```jsx
<div className="text-center">
  <div>AMORA</div>
  <div>By Organic Beauty</div>
</div>
```

### After (Your Logo):
```jsx
<img 
  src="/images/logo.svg" 
  alt="Amora by Organic Beauty" 
  className="h-12 w-auto transition-opacity group-hover:opacity-80"
/>
```

## ✅ Checklist

- [ ] Logo file created/saved
- [ ] Logo placed in `/public/images/logo.svg` (or `.png`)
- [ ] Image tag uncommented in Layout.jsx
- [ ] Text logo removed/commented out
- [ ] Browser refreshed
- [ ] Logo displays correctly in header

## 🎯 Logo Location

Your logo appears in:
- **Header** (top-left corner)
- **All pages** (Home, Products, About, FAQ, Contact)
- **Mobile menu** (when opened)

## 📱 Mobile Responsive

The logo automatically scales on mobile devices. No extra work needed!

## 🔍 Troubleshooting

### Logo not showing?
- ✅ Check file path: `/public/images/logo.svg`
- ✅ Verify file name matches exactly (case-sensitive)
- ✅ Make sure you uncommented the `<img>` tag
- ✅ Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Logo too big/small?
- Change `h-12` to `h-10` (smaller) or `h-16` (larger) in className

### Logo not centered?
- Logo is left-aligned in header (standard design)
- To center, add `mx-auto` to the Link className

---

**Your logo setup is ready! Just add your logo file and uncomment the code.** 🎨
