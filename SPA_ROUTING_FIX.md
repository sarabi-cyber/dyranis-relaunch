# 🔧 SPA Routing 404 Fix Guide

## Problem
Your React SPA is showing 404 errors on routes like `/about`, `/contact`, and `/services/*` because the server is trying to find actual files instead of serving `index.html` and letting React Router handle the routing.

## Root Cause
Single Page Applications (SPAs) need special server configuration. When a user visits `/about`, the server must serve `index.html` (not a 404), and then React Router takes over and renders the correct component.

---

## Solution by Hosting Provider

### 🟢 Option 1: Vercel (Recommended - Zero Config)

**Status:** ✅ Already configured in `vercel.json`

**Steps:**
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Vercel automatically handles SPA routing with the `rewrites` configuration in `vercel.json`

**Verification:**
- Visit `https://your-domain.vercel.app/about` - should load without 404
- Visit `https://your-domain.vercel.app/services/motor-insurance` - should load without 404

---

### 🟢 Option 2: Netlify (Easy Setup)

**Status:** ✅ Already configured in `netlify.toml`

**Steps:**
1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod
   ```

3. Netlify automatically handles SPA routing with the `[[redirects]]` configuration in `netlify.toml`

**Verification:**
- Visit `https://your-domain.netlify.app/about` - should load without 404
- Visit `https://your-domain.netlify.app/services/motor-insurance` - should load without 404

---

### 🟡 Option 3: Traditional Hosting (Apache/cPanel)

**Status:** ✅ Already configured in `public/.htaccess`

**Steps:**
1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist/` folder contents to your hosting provider's public_html directory

3. Ensure `.htaccess` file is uploaded to the same directory as `index.html`

4. Verify Apache modules are enabled:
   - Contact your hosting provider to enable `mod_rewrite`
   - Verify `.htaccess` files are allowed (AllowOverride All)

**Verification:**
- Visit `https://dyranisconsultancy.com/about` - should load without 404
- Visit `https://dyranisconsultancy.com/services/motor-insurance` - should load without 404

**Troubleshooting:**
```bash
# If .htaccess doesn't work, check:
1. Is mod_rewrite enabled? (Ask hosting provider)
2. Is AllowOverride set to All? (Ask hosting provider)
3. Is .htaccess in the correct directory? (Same as index.html)
4. Clear browser cache and try again
```

---

### 🟡 Option 4: Nginx (VPS/Dedicated Server)

**Status:** ✅ Already configured in `nginx.conf`

**Steps:**
1. Build the project:
   ```bash
   npm run build
   ```

2. Copy `dist/` contents to your web root:
   ```bash
   sudo cp -r dist/* /var/www/dyranis/
   ```

3. Update your nginx configuration:
   ```bash
   sudo nano /etc/nginx/sites-available/dyranis
   ```

4. Replace with the configuration from `nginx.conf`

5. Test and reload:
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

**Key Configuration:**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

This tells nginx: "Try to serve the file, then the directory, then fall back to index.html"

**Verification:**
- Visit `https://dyranisconsultancy.com/about` - should load without 404
- Visit `https://dyranisconsultancy.com/services/motor-insurance` - should load without 404

---

### 🟡 Option 5: GitHub Pages

**Status:** Requires additional configuration

**Steps:**
1. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/dyranis-relaunch/',  // Your repo name
     // ... rest of config
   });
   ```

2. Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. Push to GitHub - automatic deployment

**Note:** GitHub Pages has limitations with SPA routing. Consider using Vercel or Netlify instead.

---

## Quick Diagnosis

### Test if routing is working:

1. **Open browser DevTools** (F12)
2. **Go to Network tab**
3. **Visit a route like** `https://your-domain.com/about`
4. **Check the response:**
   - ✅ If you see `index.html` content → Routing is working
   - ❌ If you see 404 error → Server not configured for SPA

### Check server logs:

**Apache:**
```bash
tail -f /var/log/apache2/error.log
```

**Nginx:**
```bash
tail -f /var/log/nginx/error.log
```

---

## Common Issues & Fixes

### Issue 1: Still Getting 404 After Deployment

**Solution:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+F5)
3. Try in incognito/private mode
4. Check if `.htaccess` or `nginx.conf` was actually deployed
5. Verify build output: `npm run build` and check `dist/index.html` exists

### Issue 2: Styles/Images Not Loading

**Solution:**
1. Check browser console for 404 errors
2. Verify all assets are in `dist/` folder
3. Check file paths in components (should be relative)
4. Verify `public/` folder contents are in `dist/`

### Issue 3: Infinite Redirect Loop

**Solution:**
1. Check `.htaccess` or `nginx.conf` for syntax errors
2. Ensure `try_files` or `rewrite` rules are correct
3. Verify `index.html` exists in the root directory

### Issue 4: 404 on Specific Routes Only

**Solution:**
1. Check if route is defined in `src/App.tsx`
2. Verify component file exists
3. Check for typos in route paths
4. Ensure lazy-loaded components are imported correctly

---

## Deployment Checklist

- [ ] Build project: `npm run build`
- [ ] Verify `dist/index.html` exists
- [ ] Verify all assets in `dist/` folder
- [ ] Upload `dist/` contents to server
- [ ] Upload `.htaccess` (Apache) or configure `nginx.conf` (Nginx)
- [ ] Test homepage: `https://your-domain.com/`
- [ ] Test `/about` route
- [ ] Test `/contact` route
- [ ] Test `/services/motor-insurance` route
- [ ] Test invalid route (should show 404 page)
- [ ] Check browser console for errors
- [ ] Test on different browsers
- [ ] Test on mobile devices

---

## Performance Optimization

### Caching Strategy

**Static Assets (1 year):**
- `.js`, `.css`, `.png`, `.jpg`, `.gif`, `.svg`, `.woff`, `.woff2`

**HTML (No cache):**
- `index.html` - Always fetch fresh to get latest app version

**Implementation:**
- ✅ Already configured in `.htaccess`, `nginx.conf`, `vercel.json`, `netlify.toml`

---

## Security Headers

The following security headers are configured:

```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer-when-downgrade
```

These prevent:
- Clickjacking attacks
- MIME type sniffing
- XSS attacks
- Referrer leakage

---

## Next Steps

1. **Identify your hosting provider** (Vercel, Netlify, Apache, Nginx, etc.)
2. **Follow the corresponding section above**
3. **Deploy and test all routes**
4. **Monitor for errors in browser console**
5. **Check server logs if issues persist**

---

## Support

If you're still experiencing 404 errors:

1. **Check which hosting provider you're using**
2. **Verify the correct configuration file is deployed**
3. **Clear browser cache and hard refresh**
4. **Check browser DevTools Network tab**
5. **Review server error logs**
6. **Contact hosting provider support**

---

## Resources

- [React Router Deployment Guide](https://reactrouter.com/en/main/guides/ssr)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [Apache mod_rewrite Guide](https://httpd.apache.org/docs/current/mod/mod_rewrite.html)
- [Nginx try_files Guide](https://nginx.org/en/docs/http/ngx_http_core_module.html#try_files)

---

**Last Updated:** April 20, 2026  
**Status:** Ready for deployment
