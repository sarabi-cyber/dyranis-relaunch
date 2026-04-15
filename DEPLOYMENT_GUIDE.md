# 🚀 Deployment Guide - Dyranis Consultancy

## Pre-Deployment Checklist

### ✅ Code Quality
- All TypeScript files compile without errors
- No ESLint warnings
- All components tested and working
- Responsive design verified on all breakpoints

### ✅ Performance
- Images optimized and lazy-loaded
- Smooth scrolling with Lenis
- Fast page transitions
- Optimized bundle size

### ✅ SEO & Metadata
- Meta tags configured
- Sitemap.xml created
- robots.txt configured
- Structured data (JSON-LD) implemented
- Open Graph tags for social sharing

### ✅ Accessibility
- WCAG compliant
- Semantic HTML
- Alt text on all images
- Keyboard navigation supported

---

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
# or
bun install
```

### 2. Environment Variables
Create a `.env.local` file (if needed):
```env
VITE_API_URL=https://api.example.com
```

### 3. Build for Production
```bash
npm run build
# or
bun run build
```

### 4. Preview Build
```bash
npm run preview
# or
bun run preview
```

---

## Deployment Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Benefits:**
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Serverless functions support
- Environment variables management

### Option 2: Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

**Benefits:**
- Easy deployment
- Automatic HTTPS
- Form handling
- Redirects support

### Option 3: GitHub Pages
```bash
# Update vite.config.ts
# base: '/dyranis-consultancy/'

npm run build
# Push to gh-pages branch
```

### Option 4: Traditional Hosting
```bash
# Build the project
npm run build

# Upload dist/ folder to your hosting provider
# Configure server to serve index.html for all routes
```

---

## Post-Deployment

### 1. Verify Deployment
- [ ] Check homepage loads correctly
- [ ] Test all navigation links
- [ ] Verify responsive design on mobile
- [ ] Test forms and calculator
- [ ] Check images load properly
- [ ] Verify smooth scrolling works

### 2. SEO Verification
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify meta tags in page source
- [ ] Check Open Graph tags with social debuggers
- [ ] Monitor search console for errors

### 3. Analytics Setup
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 4. Performance Monitoring
- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Set up error tracking (Sentry)
- Monitor uptime

---

## Environment Configuration

### Production
```env
VITE_API_URL=https://api.dyranisconsultancy.co.ke
NODE_ENV=production
```

### Staging
```env
VITE_API_URL=https://staging-api.dyranisconsultancy.co.ke
NODE_ENV=staging
```

---

## Security Checklist

- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] CORS properly configured
- [ ] Environment variables secured
- [ ] No sensitive data in code
- [ ] Dependencies up to date
- [ ] Regular security audits

### Security Headers (nginx example)
```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
```

---

## Monitoring & Maintenance

### Daily
- Monitor error logs
- Check uptime status
- Review user feedback

### Weekly
- Review analytics
- Check performance metrics
- Update dependencies if needed

### Monthly
- Security audit
- Performance optimization
- Backup verification

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Images Not Loading
- Check image paths in components
- Verify images exist in public folder
- Check browser console for 404 errors

### Smooth Scrolling Not Working
- Verify Lenis is initialized
- Check for JavaScript errors
- Clear browser cache

### Forms Not Submitting
- Verify WhatsApp number is correct
- Check URL encoding
- Test on different browsers

---

## Rollback Procedure

If deployment has issues:

### Vercel
```bash
vercel rollback
```

### Netlify
```bash
netlify deploy --prod --dir=dist
# (with previous build)
```

### Manual
- Restore previous version from backup
- Clear CDN cache
- Verify deployment

---

## Performance Optimization

### Image Optimization
- Use WebP format where possible
- Compress images before upload
- Use responsive images
- Enable lazy loading

### Code Splitting
- Already implemented with React.lazy()
- Monitor bundle size
- Use dynamic imports for large components

### Caching Strategy
```nginx
# Cache static assets for 1 year
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}

# Don't cache HTML
location ~* \.html$ {
  expires -1;
  add_header Cache-Control "public, must-revalidate, proxy-revalidate";
}
```

---

## Backup & Recovery

### Automated Backups
- Enable automatic backups on hosting provider
- Store backups in multiple locations
- Test restore procedures regularly

### Manual Backup
```bash
# Backup current deployment
tar -czf dyranis-backup-$(date +%Y%m%d).tar.gz dist/
```

---

## Support & Contact

For deployment issues:
- **Email:** [info@dyranisconsultancy.co.ke](mailto:info@dyranisconsultancy.co.ke)
- **Phone:** [0721 361 188](tel:0721361188)
- **WhatsApp:** [Chat with us](https://wa.me/254721361188)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-04-15 | Initial production release |

---

**Last Updated:** April 15, 2026  
**Status:** ✅ Ready for Deployment
