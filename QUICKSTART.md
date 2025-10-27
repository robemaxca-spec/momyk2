# 🚀 Quick Start Guide

Get the Blessins Global Solutions website up and running in 5 minutes!

## ⚡ Fast Track Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: **http://localhost:3000**

That's it! The website should now be running locally. 🎉

---

## 📋 Quick Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run lint` | Run ESLint |

---

## 🗂️ Project Structure Overview

```
📦 blessins-global-solutions/
├── 📁 app/                    # Next.js pages
│   ├── 📄 page.tsx            # Home page
│   ├── 📁 about/              # About page
│   ├── 📁 services/           # Services page
│   ├── 📁 packages/           # Packages page
│   ├── 📁 contact/            # Contact page
│   └── 📄 layout.tsx          # Root layout
├── 📁 components/             # React components
│   ├── 📄 Navigation.tsx      # Header nav
│   ├── 📄 Footer.tsx          # Footer
│   └── 📁 ui/                 # UI components
├── 📁 data/                   # Content data
│   └── 📄 siteData.json       # All website content
└── 📄 README.md               # Full documentation
```

---

## ✏️ Quick Content Updates

### Update Text Content
1. Open `data/siteData.json`
2. Find the section you want to change
3. Edit the text
4. Save and refresh browser

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  gold: '#d4af37',      // Change this
  charcoal: '#0d141a',  // Change this
}
```

### Update Images
Replace image URLs in `data/siteData.json`:
```json
"image": "https://your-new-image-url.com/image.jpg"
```

---

## 🎨 Page Routes

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Landing page with hero |
| About | `/about` | Company information |
| Services | `/services` | Service offerings |
| Packages | `/packages` | Pricing plans |
| Contact | `/contact` | Contact form |

---

## 🔧 Common Tasks

### Add a New Page
1. Create folder in `app/`: e.g., `app/blog/`
2. Add `page.tsx` file inside
3. Add link in `Navigation.tsx`

### Customize Animations
Edit Framer Motion props in component files:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

### Change Fonts
Update Google Fonts import in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont');
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### Dependencies Error
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check TypeScript errors
npm run build
```

---

## 📚 Need More Help?

- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Changelog**: See `CHANGELOG.md`

---

## 📞 Support

- **Email**: info@blessins.uk
- **Phone**: +44 7878671236

---

**Happy coding! 💻✨**
