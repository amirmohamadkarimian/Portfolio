# Performance Optimization Guide

## Summary of Changes Made

### ✅ Completed Optimizations

#### 1. **Font Loading Optimization** 
- Changed Google Fonts to load asynchronously using `media="print"` + `onload` technique
- Prevents render-blocking font requests (saves ~750ms)
- Uses `display=swap` fallback to show content immediately

#### 2. **Image Dimension Attributes** 
- Added explicit `width` and `height` to all images
- **Hero Image (selfie.png)**: `525x399`
- **Project Images**: `400x284`
- Prevents Cumulative Layout Shift (CLS) and improves Core Web Vitals

#### 3. **LCP Image Priority**
- Added `fetchpriority="high"` to hero image (selfie.png)
- Improves Largest Contentful Paint (LCP) performance

#### 4. **Lazy Loading**
- Added `loading="lazy"` to project images below the fold
- Only loads images when user scrolls to them

#### 5. **Vite Build Optimization**
- Implemented code splitting for vendor libraries
- Separated below-fold components (Blog, Contact, Experience, Skills) into separate chunks
- Reduces initial bundle size

---

## 🎯 Next Steps: Image Conversion to WebP (Est. 2,500+ KiB savings)

### Why WebP?
- **40-80% smaller** than PNG/JPEG
- Supported by 96%+ of modern browsers
- Google Lighthouse recommends this optimization

### How to Convert Images

#### Option 1: Online Tools (Easiest)
1. Visit [CloudConvert.com](https://cloudconvert.com/png-to-webp) or [Squoosh.app](https://squoosh.app)
2. Upload your images:
   - `public/selfie.png` (109.8 KiB → ~30-40 KiB)
   - `public/project_maptify.png` (2,029.8 KiB → ~400-600 KiB)
   - `public/project_mockup_web.png` (533.7 KiB → ~100-150 KiB)
3. Download WebP versions
4. Save to same location with `.webp` extension

#### Option 2: Command Line (Recommended for automation)
Using ImageMagick:
```bash
convert selfie.png -quality 80 selfie.webp
convert project_maptify.png -quality 75 project_maptify.webp
convert project_mockup_web.png -quality 80 project_mockup_web.webp
```

Or with `cwebp` (best quality):
```bash
cwebp -q 80 selfie.png -o selfie.webp
cwebp -q 75 project_maptify.png -o project_maptify.webp
cwebp -q 80 project_mockup_web.png -o project_mockup_web.webp
```

#### Option 3: NPM Package
```bash
npm install --save-dev imagemin imagemin-webp
```

### Responsive Image Implementation

After converting to WebP, update components with fallback support:

#### Hero Component (Hero.tsx):
```tsx
<picture>
  <source srcSet="selfie.webp" type="image/webp" />
  <source srcSet="selfie.png" type="image/png" />
  <img
    src="selfie.png"
    alt="Amirmohamad Karimian - Frontend Developer"
    className="portrait-img"
    width="525"
    height="399"
    fetchpriority="high"
  />
</picture>
```

#### Projects Component (Projects.tsx):
```tsx
<picture>
  <source srcSet={proj.image.replace('.png', '.webp')} type="image/webp" />
  <source srcSet={proj.image} type="image/png" />
  <img
    src={proj.image}
    alt={`${proj.title} UI Mockup`}
    className="project-img"
    width="400"
    height="284"
    loading="lazy"
  />
</picture>
```

---

## 📊 Expected Performance Improvements

| Metric | Current | Target | Improvement |
|--------|---------|--------|-------------|
| **Total Payload** | 2.9 MB | 0.4 MB | -86% |
| **LCP (Largest Contentful Paint)** | 2,537 ms | ~800 ms | -69% |
| **FCP (First Contentful Paint)** | 1,932 ms | ~600 ms | -69% |
| **Render-blocking Time** | 1,720 ms | ~400 ms | -77% |

---

## 🔧 Additional Optimizations (Optional)

### 1. **Next.js Image Component** (if migrating to Next.js)
```tsx
import Image from 'next/image';

<Image
  src={selfie}
  alt="..."
  width={525}
  height={399}
  priority
  quality={80}
/>
```

### 2. **CSS Minification**
Already handled by Vite during build. Check `dist/` folder.

### 3. **Service Worker Caching**
Add offline support and cache static assets:
```bash
npm install workbox-webpack-plugin
```

### 4. **Preload Critical Resources**
Add to `index.html`:
```html
<link rel="preload" as="image" href="selfie.webp" type="image/webp" />
<link rel="preload" as="font" href="..." crossorigin />
```

---

## ✨ Testing Your Improvements

After implementing WebP conversion:

1. **Test Locally:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Check Bundle Size:**
   ```bash
   npm run build  # Check dist/ folder size
   ```

3. **Test with PageSpeed Insights:**
   - Deploy to Vercel
   - Run audit at [PageSpeed Insights](https://pagespeed.web.dev)
   - Expected: Performance score **85-95**

4. **Test Images in Browser:**
   - DevTools → Network tab
   - Check if WebP images are being loaded
   - Verify sizes are reduced

---

## 📝 Summary

With these changes implemented:
- ✅ Font loading optimized (no more render-blocking)
- ✅ Image dimensions added (fixes CLS)
- ✅ Lazy loading enabled (faster initial load)
- ✅ Bundle code-split (better caching)
- ⏳ **Pending:** WebP conversion (biggest impact - 2.5 MB savings)

The WebP conversion is the single biggest optimization with **~86% payload reduction**. Once done, your performance score should jump significantly! 🚀
