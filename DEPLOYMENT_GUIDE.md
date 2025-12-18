# 🚀 Deployment Guide - Make Your Jewelry Website Live

## 📋 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All products have correct prices and details
- [ ] Update the Gold & Diamond website link in `app/page.tsx`
- [ ] Update contact email in Footer (currently: info@brightandberyl.com)
- [ ] Update phone number and address in Footer
- [ ] Test all features locally (cart, navigation, filters)
- [ ] Check that all pages load correctly
- [ ] Replace placeholder images with real jewelry photos

---

## 🌟 Option 1: Vercel (RECOMMENDED - Easiest & Free)

**Why Vercel?**
- ✅ Made by Next.js creators - perfect compatibility
- ✅ Automatic deployments from Git
- ✅ Free SSL certificate (HTTPS)
- ✅ Free custom domain support
- ✅ Automatic scaling
- ✅ Edge network (fast worldwide)
- ✅ **FREE** for personal/commercial projects

### Step-by-Step Deployment to Vercel

#### 1. Create GitHub Repository (if not already done)

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Bright & Beryl Jewelry Website"

# Create repository on GitHub (go to github.com)
# Then connect your local repo:
git remote add origin https://github.com/YOUR_USERNAME/brightandberyl.git
git branch -M main
git push -u origin main
```

#### 2. Deploy to Vercel

**Method A: Using Vercel Website (Easiest)**

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" → Use GitHub account
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"
7. Wait 2-3 minutes ⏳
8. **Your site is LIVE!** 🎉

**Method B: Using Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? brightandberyl (or your choice)
# - Directory? ./ (press enter)
# - Want to override settings? No

# Your site is now live!
```

#### 3. Your Live URLs

After deployment, you'll get:
- **Temporary URL**: `https://brightandberyl.vercel.app`
- Or similar: `https://your-project-name.vercel.app`

---

## 🌐 Adding Custom Domain

### If You Have a Domain (e.g., brightandberyl.com)

#### On Vercel:

1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your domain: `brightandberyl.com`
4. Vercel will give you DNS records

#### Update Your Domain DNS:

Go to your domain provider (GoDaddy, Namecheap, etc.) and add:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Wait 24-48 hours for DNS propagation** ⏳

---

## 🔧 Option 2: Netlify (Alternative)

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub → Select repository
5. Build settings (auto-detected):
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click "Deploy site"
7. Live in 2-3 minutes!

---

## 🐳 Option 3: Your Own Server (VPS)

If you have a VPS (DigitalOcean, AWS, etc.):

### 1. Build Production Version

```bash
# Build the production version
npm run build

# Test production build locally
npm start
```

### 2. Server Setup (Ubuntu/Linux)

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 (process manager)
sudo npm install -g pm2

# Clone your repository
git clone https://github.com/YOUR_USERNAME/brightandberyl.git
cd brightandberyl

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
pm2 start npm --name "brightandberyl" -- start

# Save PM2 config
pm2 save
pm2 startup
```

### 3. Setup Nginx

```bash
# Install Nginx
sudo apt install nginx

# Create config
sudo nano /etc/nginx/sites-available/brightandberyl
```

Add this config:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/brightandberyl /etc/nginx/sites-enabled/

# Test config
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### 4. Add SSL Certificate (Free)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal is set up automatically!
```

---

## 📊 Recommended: Vercel Deployment Commands

```bash
# Install dependencies
npm install

# Build and test locally
npm run build
npm start

# If everything works, deploy to Vercel
npx vercel

# For production deployment
npx vercel --prod
```

---

## 🔄 Continuous Deployment (Auto-Deploy on Push)

Once connected to Vercel/Netlify:

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Updated prices"
   git push
   ```
3. **Automatic deployment happens!** 🎉
4. Live in 2-3 minutes

---

## 🎨 Post-Deployment Tasks

### 1. Update Website Links

Update the Gold & Diamond website URL in `app/page.tsx`:

```typescript
href="https://your-actual-gold-diamond-website.com"
```

### 2. Add Google Analytics (Optional)

In `app/layout.tsx`, add before `</head>`:

```typescript
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Setup Email Contact Form

For the contact form, use services like:
- [EmailJS](https://www.emailjs.com/) - Free tier available
- [SendGrid](https://sendgrid.com/)
- [Resend](https://resend.com/)

### 4. Add Payment Gateway

To accept actual payments:

**Stripe (Recommended for India):**

```bash
npm install @stripe/stripe-js stripe
```

**Razorpay (Popular in India):**

```bash
npm install razorpay
```

### 5. Setup Environment Variables

On Vercel:
1. Go to Project Settings → Environment Variables
2. Add any API keys (Stripe, email service, etc.)

---

## 💰 Cost Comparison

| Platform | Cost | Best For |
|----------|------|----------|
| **Vercel** | FREE | Most users (recommended) |
| **Netlify** | FREE | Alternative to Vercel |
| **VPS** | $5-20/month | Full control needed |

---

## 🚀 Quick Start (Fastest Method)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy
vercel

# 3. Follow prompts
# Done! Your site is live! 🎉
```

---

## 📱 Test Your Live Website

After deployment, test:

- [ ] Homepage loads correctly
- [ ] All category pages work (Rings, Necklaces, Earrings)
- [ ] Product details page
- [ ] Add to cart functionality
- [ ] Cart page
- [ ] About page
- [ ] Mobile responsiveness
- [ ] Gold & Diamond banner link works
- [ ] Contact information is correct

---

## 🆘 Troubleshooting

### Build Fails on Vercel

**Error: Module not found**
```bash
# Ensure all dependencies are in package.json
npm install
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

### Images Not Loading

Update `next.config.js`:

```javascript
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'your-image-host.com',
      },
    ],
  },
}
```

### Custom Domain Not Working

- Wait 24-48 hours for DNS propagation
- Check DNS records are correct
- Clear browser cache

---

## 📧 Need Help?

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Deployment Issues: Check build logs in Vercel dashboard

---

## 🎉 Congratulations!

Your jewelry website is now LIVE and accessible to customers worldwide! 

**Next Steps:**
1. Share your website URL
2. Add more products
3. Setup payment processing
4. Add Google Analytics
5. Start marketing!

**Your Website:** `https://your-site.vercel.app` or your custom domain

Happy Selling! 💎✨

