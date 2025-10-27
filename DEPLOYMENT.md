# Deployment Guide

This document provides instructions for deploying the Blessins Global Solutions website to various hosting platforms.

## 📦 Prerequisites

Before deploying, ensure you have:
- Node.js 18.x or higher installed
- A GitHub account (for repository hosting)
- Chosen hosting platform account (Vercel, Netlify, or other)

## 🚀 Deployment Options

### Option 1: Vercel (Recommended for Next.js)

Vercel is the recommended platform as it's built by the creators of Next.js.

#### Steps:

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Deploy to Vercel:**
- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Select your GitHub repository
- Configure project settings:
  - Framework Preset: Next.js
  - Build Command: `npm run build`
  - Output Directory: `.next`
- Click "Deploy"

3. **Custom Domain (Optional):**
- Go to Project Settings > Domains
- Add your custom domain
- Follow DNS configuration instructions

### Option 2: Netlify

#### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify:**
- Go to [netlify.com](https://netlify.com)
- Click "New site from Git"
- Connect to GitHub and select your repository
- Configure build settings:
  - Build command: `npm run build`
  - Publish directory: `.next`
- Click "Deploy site"

3. **Custom Domain:**
- Go to Site Settings > Domain Management
- Add custom domain and configure DNS

### Option 3: Self-Hosted VPS

For deploying to your own server:

#### Requirements:
- VPS with Node.js installed
- Domain name (optional)
- SSL certificate (recommended)

#### Steps:

1. **Build the application:**
```bash
npm run build
```

2. **Transfer files to server:**
```bash
scp -r .next package.json package-lock.json user@your-server:/var/www/blessins
```

3. **On the server:**
```bash
cd /var/www/blessins
npm install --production
npm start
```

4. **Use PM2 for process management:**
```bash
npm install -g pm2
pm2 start npm --name "blessins-website" -- start
pm2 save
pm2 startup
```

5. **Configure Nginx as reverse proxy:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

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

6. **Add SSL with Let's Encrypt:**
```bash
sudo certbot --nginx -d yourdomain.com
```

## 🔧 Environment Variables

If you add environment variables in the future, create a `.env.local` file:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
```

On hosting platforms:
- **Vercel**: Project Settings > Environment Variables
- **Netlify**: Site Settings > Build & Deploy > Environment

## 📊 Post-Deployment Checklist

After deployment, verify:

- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Forms work as expected
- [ ] Navigation works on all pages
- [ ] Mobile responsiveness
- [ ] Browser compatibility
- [ ] SSL certificate is active (HTTPS)
- [ ] Custom domain is configured (if applicable)
- [ ] Analytics are tracking (if implemented)
- [ ] SEO meta tags are present

## 🔍 Monitoring

### Performance Monitoring
- Use Vercel Analytics or Google PageSpeed Insights
- Monitor Core Web Vitals
- Check loading times regularly

### Error Tracking
Consider adding error tracking services:
- Sentry
- LogRocket
- Rollbar

## 🔄 Continuous Deployment

Set up automatic deployments:

1. **Vercel/Netlify**: Automatically deploys on git push to main branch
2. **GitHub Actions**: Create `.github/workflows/deploy.yml` for custom CI/CD

Example GitHub Action:
```yaml
name: Deploy to Production
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run export
      # Add deployment steps here
```

## 🆘 Troubleshooting

### Build Failures

**Issue**: Build fails with TypeScript errors
**Solution**: Run `npm run build` locally to identify issues

**Issue**: Missing dependencies
**Solution**: Ensure `package-lock.json` is committed

### Runtime Errors

**Issue**: Images not loading
**Solution**: Check image URLs in `siteData.json` and Next.js configuration

**Issue**: 404 errors on refresh
**Solution**: Ensure hosting platform is configured for SPA/Next.js

## 📞 Support

For deployment assistance:
- Email: info@blessins.uk
- Phone: +44 7878671236

---

**Deployment completed successfully! 🎉**
