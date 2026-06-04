# 🚨 FIX: grandmashive.com → www.grandmashive.com Redirect

## Problem:
When users type `grandmashive.com` (without www), they are sent to a different website. This means DNS is NOT pointing to your hosting provider correctly.

## Root Cause:
Your DNS records for the **non-www domain** (`grandmashive.com`) are either:
1. Missing completely
2. Pointing to a different server/IP
3. Not configured at your hosting provider

---

## Solution (Choose Your Hosting Platform):

### 🔵 OPTION 1: Vercel (Recommended if using Vercel)

#### Step 1: Add Domain in Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Select your project (Grandma's Hive)
3. Go to **Settings** → **Domains**
4. Click **Add Domain**
5. Add BOTH domains:
   - `grandmashive.com`
   - `www.grandmashive.com`

#### Step 2: Vercel will show you DNS records to add
Vercel will display something like:

**For `grandmashive.com` (non-www):**
```
Type: A
Name: @
Value: 76.76.21.21  (Vercel's IP - example)
TTL: Auto
```

**For `www.grandmashive.com`:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto
```

#### Step 3: Go to Your Domain Registrar (GoDaddy/Namecheap/etc)
1. Login to where you bought `grandmashive.com`
2. Find **DNS Management** or **DNS Settings**
3. Add/Update the records Vercel showed you:

**Add these DNS records:**
```
Type: A
Host: @
Points to: [Vercel's A Record IP]
TTL: Automatic

Type: CNAME
Host: www
Points to: cname.vercel-dns.com
TTL: Automatic
```

#### Step 4: Set Primary Domain in Vercel
1. Back in Vercel → Domains
2. Find `www.grandmashive.com`
3. Click the three dots → **Set as Primary Domain**
4. This ensures the redirect works: `grandmashive.com` → `www.grandmashive.com`

#### Step 5: Verify
Wait 5-30 minutes for DNS propagation, then test:
```bash
# Test if DNS points to Vercel
nslookup grandmashive.com
nslookup www.grandmashive.com
```

Both should point to Vercel's servers.

---

### 🟢 OPTION 2: Netlify (If using Netlify)

#### Step 1: Add Domain in Netlify
1. Go to https://app.netlify.com
2. Select your site
3. Go to **Domain Settings**
4. Click **Add custom domain**
5. Add `grandmashive.com`
6. Netlify will detect if `www` exists and ask you to add it too

#### Step 2: Set Primary Domain
1. In Domain Settings, you'll see both:
   - `grandmashive.com`
   - `www.grandmashive.com`
2. Click **Options** → **Set as primary domain** on `www.grandmashive.com`

#### Step 3: Configure DNS at Your Registrar
Netlify will show you DNS records. Go to your domain registrar and add:

**Option A: Use Netlify DNS (Easiest)**
```
Change Nameservers to:
dns1.p01.nsone.net
dns2.p01.nsone.net
dns3.p01.nsone.net
dns4.p01.nsone.net
```

**Option B: Use External DNS**
```
Type: A
Host: @
Points to: 75.2.60.5  (Netlify Load Balancer)
TTL: Auto

Type: CNAME
Host: www
Points to: [your-site].netlify.app
TTL: Auto
```

#### Step 4: Enable Automatic HTTPS
In Netlify Domain Settings → HTTPS:
- Click **Verify DNS Configuration**
- Click **Provision certificate**

---

### 🟠 OPTION 3: Your Own Server (VPS/Dedicated)

If hosting on your own server, you need to:

#### Step 1: Point DNS to Your Server
In your domain registrar, add:
```
Type: A
Host: @
Points to: [Your Server IP]
TTL: Auto

Type: A
Host: www
Points to: [Your Server IP]
TTL: Auto
```

#### Step 2: Configure Server (Nginx Example)
Add to your Nginx config:
```nginx
# Redirect non-www to www
server {
    listen 80;
    listen 443 ssl http2;
    server_name grandmashive.com;
    
    # SSL Certificate paths
    ssl_certificate /path/to/ssl/fullchain.pem;
    ssl_certificate_key /path/to/ssl/privkey.pem;
    
    # Redirect to www
    return 301 https://www.grandmashive.com$request_uri;
}

# Main server block
server {
    listen 80;
    listen 443 ssl http2;
    server_name www.grandmashive.com;
    
    # SSL Certificate
    ssl_certificate /path/to/ssl/fullchain.pem;
    ssl_certificate_key /path/to/ssl/privkey.pem;
    
    root /var/www/grandmashive/dist;
    index index.html;
    
    # React Router fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Test and reload:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

#### Step 3: Get SSL Certificate
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate for BOTH domains
sudo certbot --nginx -d grandmashive.com -d www.grandmashive.com
```

---

## ⚡ QUICK CHECK: Where is grandmashive.com pointing NOW?

Run this command to see where the domain currently points:

```bash
# Windows (Command Prompt)
nslookup grandmashive.com

# Mac/Linux (Terminal)
dig grandmashive.com +short
```

**If the IP address is NOT your hosting provider's IP**, that's why it goes to another site!

---

## 🧪 Test After DNS Changes

### 1. Check DNS Propagation
Visit: https://www.whatsmydns.net/#A/grandmashive.com

Wait until it shows your hosting provider's IP worldwide (usually 5-30 minutes, max 48 hours)

### 2. Test Redirect
Open incognito/private window:
```
http://grandmashive.com  →  should redirect to → https://www.grandmashive.com
```

### 3. Test HTTPS
Both should work with SSL:
```
https://grandmashive.com → redirects to → https://www.grandmashive.com
https://www.grandmashive.com → loads correctly
```

---

## 🎯 MOST COMMON ISSUES:

### Issue 1: "Domain points to different site"
**Fix:** The non-www domain DNS is wrong. Go to your registrar and update the A record for `@` to point to your hosting IP.

### Issue 2: "SSL certificate error on non-www"
**Fix:** Your SSL certificate doesn't include the non-www domain. Regenerate it to include both:
- `grandmashive.com`
- `www.grandmashive.com`

### Issue 3: "Works on some PCs but not others"
**Fix:** DNS hasn't propagated everywhere yet. Wait 1-2 hours and clear DNS cache:

**Windows:**
```cmd
ipconfig /flushdns
```

**Mac:**
```bash
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

**Linux:**
```bash
sudo systemd-resolve --flush-caches
```

---

## 📋 CHECKLIST:

- [ ] Both domains added to hosting provider (Vercel/Netlify/etc)
- [ ] DNS A record for `@` points to hosting provider
- [ ] DNS CNAME for `www` points to hosting provider
- [ ] Primary domain set to `www.grandmashive.com`
- [ ] SSL certificate covers both domains
- [ ] DNS propagated (check whatsmydns.net)
- [ ] Test in incognito: `grandmashive.com` redirects to `www.grandmashive.com`
- [ ] Both URLs work with HTTPS

---

## 🆘 Need Help?

**Tell me:**
1. Where is your site hosted? (Vercel/Netlify/VPS/Other)
2. Where did you buy the domain? (GoDaddy/Namecheap/Other)
3. What does `nslookup grandmashive.com` show?

This will help me give you exact step-by-step instructions.
