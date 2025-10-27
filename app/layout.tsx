import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import siteData from '@/data/siteData.json';

export const metadata: Metadata = {
  title: siteData.site.name + ' - ' + siteData.site.tagline,
  description: 'Expert social media marketing solutions for your business.',
  keywords: 'social media marketing, digital marketing, content creation, UK marketing agency',
  authors: [{ name: siteData.site.name }],
  openGraph: {
    title: siteData.site.name,
    description: siteData.site.tagline,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-opensans">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
