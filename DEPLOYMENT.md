# Deployment Guide - Grandma's Hive

## ✅ Fixed Issues

### 1. Favicon Update
- Changed from `favicon.svg` to `fewcon.png`
- Added Apple touch icon support for iOS devices
- Updated page title to "Grandma's Hive"

### 2. Domain Redirect (non-www → www)
- Configured automatic redirect from `grandmashive.com` to `www.grandmashive.com`
- Permanent 301 redirect for SEO benefits
- Works across all major hosting platforms

---

## 🚀 Deployment Steps

### Step 1: Clear Browser Cache
After deploying, users may still see the old favicon due to browser caching.

**Ask users to:**
1. Hard refresh: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)
2. Or clear browser cache and reload
3. On mobile: Clear app cache or use incognito mode to test

### Step 2: Deploy Based on Your Hosting Platform

#### **Option A: Vercel**
```bash
npm run build
vercel --prod
```

The `vercel.json` file will automatically:
- Redirect `grandmashive.com` → `www.grandmashive.com`
- Serve `fewcon.png` as favicon
- Handle React Router routes on refresh

#### **Option B: Netlify**
```bash
npm run build
netlify deploy --prod
```

The `netlify.toml` and `public/_redirects` will handle:
- Domain redirect
- SPA routing
- Favicon caching

**Important:** In Netlify dashboard:
1. Go to Domain Settings
2. Add both `grandmashive.com` and `www.grandmashive.com`
3. Set `www.grandmashive.com` as primary domain

#### **Option C: Apache Server (cPanel/Shared Hosting)**
The `.htaccess` file in `public/` will be copied to `dist/` during build.

After `npm run build`:
1. Upload entire `dist/` folder contents to your server root (public_html)
2. The `.htaccess` handles everything automatically

#### **Option D: Nginx Server**
After `npm run build`:

1. Upload `dist/` contents to your web root (e.g., `/var/www/html`)
2. Edit your Nginx config file (usually `/etc/nginx/sites-available/grandmashive`)
3. Copy the contents from `nginx.conf` into your server block
4. Test config: `sudo nginx -t`
5. Reload: `sudo systemctl reload nginx`

#### **Option E: Express + Node.js (Your Backend Server)**
```bash
npm run build
NODE_ENV=production npm run server
```

The Express server (`server/index.js`) already handles:
- Serving static files from `dist/`
- React Router fallback
- API routes at `/api/*`

**For production with PM2:**
```bash
npm install -g pm2
pm2 start server/index.js --name grandma-hive
pm2 save
pm2 startup
```

---

## 🔧 Domain DNS Configuration

To make the redirect work, you need to configure DNS at your domain registrar:

### Required DNS Records:

**A Record (non-www):**
```
Type: A
Name: @
Value: [Your Server IP]
TTL: Automatic
```

**A Record or CNAME (www):**
```
Type: A (or CNAME)
Name: www
Value: [Your Server IP or domain]
TTL: Automatic
```

**For Vercel/Netlify:**
- Point both `grandmashive.com` and `www.grandmashive.com` to their nameservers
- Set `www` as the primary domain in their dashboard
- They'll handle the redirect automatically

---

## 🧪 Testing After Deployment

### Test 1: Favicon
1. Visit `https://www.grandmashive.com`
2. Check browser tab - should show `fewcon.png` icon
3. On mobile: Add to home screen - should use `fewcon.png`

### Test 2: Domain Redirect
1. Type `grandmashive.com` in browser (without www)
2. Should automatically redirect to `www.grandmashive.com`
3. URL bar should show `www.grandmashive.com`

### Test 3: React Router (Page Refresh)
1. Navigate to `www.grandmashive.com/about`
2. Refresh the page (F5)
3. Should stay on `/about` page (not 404)
4. Try other routes: `/services/2`, `/work`, `/contact`

---

## 🐛 Troubleshooting

### Favicon not updating?
- Clear browser cache: `Ctrl + F5`
- Check browser DevTools → Network tab → look for `fewcon.png` request
- Check Response Headers - should have `Cache-Control`
- Wait 1-2 minutes for CDN cache to clear (Vercel/Netlify)

### Domain redirect not working?
- Check DNS propagation: https://www.whatsmydns.net
- DNS changes can take 24-48 hours to fully propagate
- Test in incognito mode to avoid browser caching
- Verify both domains point to same server/hosting

### 404 on page refresh?
- Verify deployment files:
  - Vercel: `vercel.json` is in root
  - Netlify: `_redirects` is in `public/` folder
  - Apache: `.htaccess` is in `public/` folder
  - Nginx: config is updated and reloaded
- Check server logs for errors

---

## 📦 Files Created/Modified

✅ `index.html` - Updated favicon path and title
✅ `vercel.json` - Vercel redirect + cache rules
✅ `netlify.toml` - Netlify redirect config
✅ `public/_redirects` - Netlify redirect fallback
✅ `public/.htaccess` - Apache server config
✅ `nginx.conf` - Nginx server config reference
✅ `server/index.js` - Express production serving

---

## 🎯 Summary

**Favicon:** ✅ Changed to `fewcon.png`

**Domain Redirect:** ✅ Automatic redirect from `grandmashive.com` → `www.grandmashive.com`

**SPA Routing:** ✅ All routes work on refresh (no 404)

**Next Steps:**
1. Run `npm run build`
2. Deploy to your hosting platform
3. Configure DNS (if not already done)
4. Test all three items above
5. Clear cache and enjoy! 🎉
