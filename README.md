# BEYOND THE SKILL

Premium cinematic landing page for an elite gymnastics refinement brand.

## 🎯 Overview

This is a luxury Olympic-level gymnastics training website for Rifda Irfanaluthfi, Indonesia's first and only Olympic gymnast. The website features:

- **Cinematic Design**: Premium dark luxury aesthetic with Olympic documentary feel
- **Modern Tech Stack**: Next.js 14, Tailwind CSS, Framer Motion
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Elegant motion design with scroll-triggered effects
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Google Fonts** (Bebas Neue + Inter)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment to Vercel

### Method 1: Deploy with Vercel CLI

1. **Install Vercel CLI** (if not already installed):
```bash
npm i -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Method 2: Deploy via GitHub

1. **Push code to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure project (Vercel auto-detects Next.js)
   - Click "Deploy"

## 🌍 Custom Domain Setup (Domainesia)

After deploying to Vercel, connect your Domainesia domain:

### Step 1: Add Domain in Vercel

1. Go to your project in Vercel Dashboard
2. Navigate to "Settings" → "Domains"
3. Add your domain (e.g., `beyondtheskill.com`)

### Step 2: Configure DNS in Domainesia

Login to your Domainesia account and update DNS records:

#### For Root Domain (beyondtheskill.com):

Add an **A Record**:
- **Type**: A
- **Name**: @ (or leave empty)
- **Value**: `76.76.21.21`
- **TTL**: 3600

#### For WWW Subdomain (www.beyondtheskill.com):

Add a **CNAME Record**:
- **Type**: CNAME
- **Name**: www
- **Value**: `cname.vercel-dns.com`
- **TTL**: 3600

### Step 3: Verify Domain

1. Wait 24-48 hours for DNS propagation
2. Check domain status in Vercel Dashboard
3. Once verified, Vercel will automatically provision SSL certificate

## 📝 Customization

### Update Content

1. **Contact Information**: Edit WhatsApp number in:
   - `/components/FinalCTA.js`
   - `/components/Footer.js`

2. **Social Media**: Update Instagram link in:
   - `/components/Footer.js`

3. **Location**: Update training location in:
   - `/components/FinalCTA.js`

### Update Images

Replace images in `/public/images/` with your own photos. Maintain the same naming structure or update references in component files.

### Color Customization

Edit brand colors in `tailwind.config.js`:

```javascript
colors: {
  brand: {
    black: '#000000',
    red: '#EF0606',
    gray: '#D3CCC7',
    white: '#EFEEE8',
  },
}
```

### Typography

Change fonts in `app/globals.css`:

```css
@import url('YOUR_GOOGLE_FONTS_URL');

:root {
  --font-display: 'Your Display Font', sans-serif;
  --font-body: 'Your Body Font', sans-serif;
}
```

## 📱 Sections

1. **Hero** - Fullscreen cinematic introduction
2. **Authority** - Rifda's credentials and achievements
3. **Philosophy** - Brand philosophy and approach
4. **Programs** - Beyond Elements & Beyond Artistry
5. **Why Train Here** - Feature highlights
6. **Testimonials** - Athlete testimonials
7. **Gallery** - Training and competition photos
8. **CTA** - Contact and booking section
9. **Footer** - Links and information

## 🎨 Design Principles

- **Luxury Sports Aesthetic**: Nike athlete campaigns meets Olympic documentary
- **Minimalist Brutalism**: Clean, strong, elegant design
- **Dark Premium UI**: Black base with red accents
- **Cinematic Motion**: Smooth scroll-triggered animations
- **Elite Positioning**: Not a kids gym - advanced athlete refinement

## 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js App Router
- **Font Loading**: Optimized Google Fonts

## 🔧 Troubleshooting

### Images Not Loading

- Ensure images are in `/public/images/` directory
- Check file names match component references
- Verify image paths are correct

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Deployment Issues

- Check all dependencies are in `package.json`
- Verify Node.js version compatibility (v18+)
- Review Vercel build logs for errors

## 📞 Support

For technical issues or customization requests, contact the development team.

## 📄 License

All rights reserved © 2024 Beyond The Skill - Rifda Irfanaluthfi

---

**Made with precision and refinement - just like our training philosophy** 🏅
