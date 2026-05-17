# QUICK DEPLOYMENT GUIDE

## 🚀 Steps to Deploy Your Website

### 1. Install Dependencies

```bash
cd beyond-the-skill
npm install
```

### 2. Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` to preview.

### 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Beyond The Skill website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 4. Deploy to Vercel

**Option A: Via Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"
7. Wait 2-3 minutes for deployment

**Option B: Via Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel --prod
```

### 5. Connect Domain from Domainesia

#### In Vercel Dashboard:
1. Go to Project Settings → Domains
2. Add your domain: `yourdomain.com`
3. Also add: `www.yourdomain.com`

#### In Domainesia DNS Settings:

**For Root Domain (yourdomain.com):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**For WWW:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### 6. Wait for DNS Propagation

- **Time**: 2-48 hours (usually 2-6 hours)
- **Check**: Use [whatsmydns.net](https://whatsmydns.net)
- **SSL**: Vercel auto-provisions HTTPS certificate

## ✅ Verification Checklist

- [ ] Code pushed to GitHub
- [ ] Project deployed on Vercel
- [ ] Custom domain added in Vercel
- [ ] DNS records updated in Domainesia
- [ ] SSL certificate issued (shows padlock in browser)
- [ ] Website loads at your domain

## 📝 Before Going Live

1. **Update WhatsApp number** in:
   - `components/FinalCTA.js` (line 64)
   - `components/Footer.js` (line 57)

2. **Update Instagram handle** in:
   - `components/Footer.js` (line 42)

3. **Replace placeholder testimonials** in:
   - `components/Testimonials.js`

4. **Test all links** on mobile and desktop

## 🆘 Common Issues

**Images not showing?**
- Check images are in `/public/images/` folder
- Verify file names match exactly (case-sensitive)

**Build fails?**
- Run `npm run build` locally first
- Check Vercel build logs for errors
- Ensure all dependencies are in package.json

**Domain not working?**
- Wait 24-48 hours for DNS propagation
- Double-check DNS records in Domainesia
- Try clearing browser cache

## 📱 Contact for Support

If you encounter any issues, save the error messages and contact your developer with:
1. Screenshot of the error
2. Vercel deployment URL
3. Description of what you tried

---

**Your website is ready to inspire athletes worldwide! 🏅**
