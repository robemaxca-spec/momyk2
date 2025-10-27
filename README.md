# Blessins Global Solutions Website

A modern, premium, and fully responsive website for Blessins Global Solutions, a UK-based social media marketing agency. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![Blessins Global Solutions](https://images.unsplash.com/photo-1690191886622-fd8d6cda73bd?w=1200&h=400&fit=crop)

## 🌟 Overview

This is a production-ready, multi-page marketing website featuring elegant animations, smooth transitions, and a mobile-first design approach. The website dynamically loads all content from a structured JSON data source, making it easy to update and maintain.

## ✨ Key Features

### 🎨 Design & Styling
- **Premium Agency Look**: Clean, minimal design with white background, charcoal gray text, and gold accents
- **Custom Typography**: Poppins for headings and Open Sans for body text via Google Fonts
- **Responsive Design**: Fully mobile-responsive with breakpoints for all device sizes
- **Brand Colors**: 
  - Gold: `#d4af37`
  - Charcoal: `#0d141a`

### 🚀 Pages & Functionality

#### 1. **Home Page** (`/`)
- Parallax hero section with gradient overlay
- About preview with floating stats card
- Animated counter for statistics (150+ clients, 15 years experience)
- Services preview with icon cards
- CTA banner with background image

#### 2. **About Page** (`/about`)
- Company story and mission
- Core values section (Excellence, Innovation, Integrity)
- Testimonial card with 5-star rating
- Image gallery with hover effects
- Location info with embedded Google Maps
- Contact information cards

#### 3. **Services Page** (`/services`)
- Three main services: Consulting, Content Creation, Analytics
- Service cards with images and hover effects
- 4-step process visualization
- Benefits section with checkmarks
- Stats showcase (150+ clients, 98% satisfaction rate)
- Comparison of features

#### 4. **Packages Page** (`/packages`)
- Three pricing tiers: Starter (£199), Growth (£499), Elite (£999)
- "Most Popular" badge on Growth plan
- Detailed feature comparison table
- FAQ accordion section
- Package cards with hover animations

#### 5. **Contact Page** (`/contact`)
- Interactive contact form with real-time validation
- Form fields: Name, Email, Phone, Message
- Client-side validation with error messages
- Success notification on submission
- Contact information cards (Email, Phone, Address)
- Social media links
- Embedded Google Maps

### 🎭 Animations & Interactions
- **Framer Motion** animations throughout
- Scroll-triggered fade-in and slide-up effects
- Hover lift effects on cards
- Smooth page transitions
- Animated counters
- Parallax hero sections
- Navigation bar transforms on scroll
- Mobile hamburger menu with smooth animations

### 🧩 Reusable Components

#### UI Components
- **Button**: Primary, secondary, and outline variants with hover effects
- **Card**: Animated cards with hover lift effect
- **Input**: Floating label inputs with validation states
- **SectionTitle**: Consistent section headers with animated underlines
- **AnimatedCounter**: Number animations triggered on scroll

#### Layout Components
- **Navigation**: Sticky header with scroll-based styling, mobile menu
- **Footer**: Multi-column footer with links, contact info, and social media
- **Layout**: Wraps all pages with consistent header and footer

## 📦 Technology Stack

### Core Technologies
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe code
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library

### Key Dependencies
```json
{
  "next": "14.1.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^11.0.3",
  "tailwindcss": "^3.4.1",
  "typescript": "^5.3.3"
}
```

## 📁 Project Structure

```
blessins-global-solutions/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── packages/
│   │   └── page.tsx          # Packages page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── layout.tsx            # Root layout with navigation & footer
│   └── globals.css           # Global styles and animations
├── components/
│   ├── Navigation.tsx        # Header navigation component
│   ├── Footer.tsx            # Footer component
│   └── ui/
│       ├── Button.tsx        # Button component
│       ├── Card.tsx          # Card component
│       ├── Input.tsx         # Input component
│       ├── SectionTitle.tsx  # Section title component
│       └── AnimatedCounter.tsx # Counter animation component
├── data/
│   └── siteData.json         # All website content and data
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
├── postcss.config.js         # PostCSS configuration
├── package.json              # Project dependencies
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open in browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Content Management

All website content is centralized in `data/siteData.json`. This file contains:

- **Site Configuration**: Name, contact info, theme colors, fonts
- **Page Content**: All text, images, and metadata for each page
- **Services**: Descriptions and images
- **Pricing Plans**: Packages with features and pricing
- **Contact Information**: Email, phone, address, social media links

### Updating Content

1. Open `data/siteData.json`
2. Modify the desired content
3. Save the file
4. The website will automatically reflect changes on reload

### Adding New Images

Replace image URLs in the JSON file with your own:
```json
"image": "https://your-image-url.com/image.jpg"
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change brand colors:
```javascript
colors: {
  gold: '#d4af37',
  charcoal: '#0d141a',
}
```

### Fonts
Modify the Google Fonts import in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap');
```

### Animations
Adjust animation durations and easing in component files using Framer Motion props.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Optimization

- Meta tags configured in `app/layout.tsx`
- Semantic HTML structure
- Alt text on all images
- Clean URL structure
- Fast page load times

## ♿ Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Screen reader friendly
- Focus indicators on all interactive elements

## 📊 Performance Features

- Next.js automatic code splitting
- Optimized images with Next.js Image component configuration
- Lazy loading for off-screen content
- Minimal JavaScript bundle size
- Efficient CSS with Tailwind's purge

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Pages Overview

### Current Functional Pages
✅ **Home** (`/`) - Hero, about preview, stats, services preview, CTA
✅ **About** (`/about`) - Company info, values, testimonial, location, map
✅ **Services** (`/services`) - Service cards, process, benefits, stats
✅ **Packages** (`/packages`) - Pricing cards, comparison table, FAQ
✅ **Contact** (`/contact`) - Contact form, info cards, map, social links

### Placeholder Pages (Referenced in Footer)
- **Privacy Policy** (`/privacy`) - Not yet implemented
- **Terms of Service** (`/terms`) - Not yet implemented

## 🔧 Development Notes

### Form Submission
The contact form currently uses client-side validation with a simulated submission. To connect to a real backend:

1. Replace the `handleSubmit` function in `app/contact/page.tsx`
2. Add your API endpoint
3. Handle server-side validation and email sending

Example:
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### Animation Performance
All animations use Framer Motion's `whileInView` with `once: true` to prevent re-triggering on scroll, improving performance.

## 📈 Future Enhancements

### Recommended Next Steps
1. **Blog Section**: Add a blog for content marketing
2. **Case Studies**: Showcase client success stories
3. **Team Page**: Display team members and their expertise
4. **Portfolio**: Show examples of past work
5. **Live Chat**: Integrate customer support chat
6. **Newsletter**: Add email subscription functionality
7. **Privacy & Terms Pages**: Create legal pages
8. **Analytics**: Integrate Google Analytics or similar
9. **Backend Integration**: Connect contact form to email service
10. **CMS Integration**: Consider headless CMS for easier content updates

## 🤝 Contributing

This is a client project. For contributions or modifications, please contact the development team.

## 📞 Support

For questions or support regarding this website:
- **Email**: info@blessins.uk
- **Phone**: +44 7878671236
- **Address**: 28, ST Thomas Gardens, Ilford, IG1 2PQ London, United Kingdom

## 📜 License

© 2025 Blessins Global Solutions. All rights reserved.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
