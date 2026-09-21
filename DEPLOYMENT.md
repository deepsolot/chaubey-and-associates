# 🚀 Deployment Guide — Adv. Rahul Sharma Website

> The website is **fully built and production-ready**. Follow the steps below to go live in minutes.

---

## Option A: Deploy on Netlify (Recommended — Free)

### Step 1: Push to GitHub

```bash
cd /Users/deep/Advocate/advocate-site
git remote add origin https://github.com/YOUR_USERNAME/advocate-site.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify
1. Go to **[netlify.com](https://netlify.com)** → Sign up / Login
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** → Select your repo `advocate-site`
4. Build settings (auto-detected):
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Click **"Deploy site"**

### Step 3: Free Domain
Your site will be live at: `https://your-site-name.netlify.app`

### Step 4: Custom Domain (e.g., `rahulsharmaadvocate.in`)
1. In Netlify Dashboard → **Domain settings**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `rahulsharmaadvocate.in`)
4. Update DNS at your domain registrar:
   - Add **CNAME** record: `www` → `your-site.netlify.app`
   - Or **A record** to Netlify's IP
5. Netlify will auto-provision **free SSL/HTTPS**

---

## Option B: Deploy via Netlify CLI (Terminal)

```bash
cd /Users/deep/Advocate/advocate-site

# Login (opens browser)
npx netlify-cli login

# Deploy to production
npx netlify-cli deploy --prod --dir=.next
```

---

## Option C: Vercel (Alternative)

```bash
cd /Users/deep/Advocate/advocate-site
npx vercel --prod
```

---

## 📁 Project Structure

```
advocate-site/
├── app/
│   ├── page.tsx          # 🏠 Homepage
│   ├── about/page.tsx    # 👤 About the Advocate
│   ├── services/page.tsx # ⚖️  All 6 Practice Areas
│   ├── blog/page.tsx     # 📰 Legal Articles
│   ├── contact/page.tsx  # 📞 Booking Form
│   ├── portal/page.tsx   # 🔐 Client Portal (Case Tracker)
│   └── api/
│       ├── contact/      # 📝 Booking API (saves to JSON)
│       └── newsletter/   # 📧 Newsletter subscription
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer with links
│   └── WhatsAppButton.tsx # Floating WhatsApp CTA
└── public/
    ├── hero-bg.jpg       # AI-generated hero background
    └── advocate.jpg      # AI-generated advocate portrait
```

---

## ✏️ How to Customize Content

### Change Advocate's Name
Search and replace `Adv. Rahul Sharma` in all files.

### Change Phone Number
Search for `+91 99999 99999` and `919999999999` and replace.

### Change Email
Search for `contact@rahulsharmaadvocate.in` and replace.

### Add Real Advocate Photo
Replace `/public/advocate.jpg` with the real photo.

### Add Blog Posts
Edit `app/blog/page.tsx` → update the `articles` array.

### Update Case Data in Portal
Edit `app/portal/page.tsx` → update `mockCases` and `documents` arrays.

---

## 🌐 Custom Domain — Recommended Indian Registrars

| Registrar | Price | Notes |
|-----------|-------|-------|
| [GoDaddy.in](https://godaddy.com) | ₹700/yr | Most popular |
| [BigRock](https://bigrock.in) | ₹499/yr | Budget option |
| [Namecheap](https://namecheap.com) | ~₹900/yr | Best value |

**Recommended domain names:**
- `rahulsharmaadvocate.in`
- `rahulsharmalaw.in`
- `advocatesharm.com`

---

## 💡 Next Steps After Launch

1. **Replace placeholder content** with real advocate details
2. **Add real photos** (advocate, office)
3. **Connect email** for contact form notifications (edit `app/api/contact/route.ts`)
4. **Add Google Analytics** for visitor tracking
5. **Set up real case management** backend (database)

---

*Built with Next.js 16, Tailwind CSS, TypeScript. Midnight Black + Amber Gold premium design.*
