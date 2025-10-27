'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import siteData from '@/data/siteData.json';

export default function Home() {
  const homePage = siteData.pages.find((page) => page.name === 'Home');
  if (!homePage) return null;

  const heroSection = homePage.sections.find((s: any) => s.type === 'hero');
  const aboutPreview = homePage.sections.find((s: any) => s.type === 'about_preview');
  const statsSection = homePage.sections.find((s: any) => s.type === 'stats');
  const ctaBanner = homePage.sections.find((s: any) => s.type === 'cta_banner');

  return (
    <>
      {/* Hero Section */}
      {heroSection && (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Parallax */}
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${heroSection.image}?w=1920&h=1080&fit=crop)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/70" />
          </motion.div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold font-poppins text-white mb-6">
                {heroSection.heading.split(' ').map((word: string, index: number) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className={index === 2 ? 'text-gold' : ''}
                  >
                    {word}{' '}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-200 font-opensans mb-12 max-w-3xl mx-auto"
            >
              {heroSection.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contact">
                <Button size="lg">{heroSection.cta[0]}</Button>
              </Link>
              <Link href="/packages">
                <Button variant="outline" size="lg">
                  {heroSection.cta[1]}
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center text-white"
            >
              <span className="text-sm font-opensans mb-2">Scroll Down</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </section>
      )}

      {/* About Preview Section */}
      {aboutPreview && (
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={`${aboutPreview.image}?w=800&h=800&fit=crop`}
                    alt="About Blessins"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                </div>
                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -bottom-8 -right-8 bg-gold text-white p-6 rounded-xl shadow-2xl"
                >
                  <div className="text-4xl font-bold font-poppins">15+</div>
                  <div className="text-sm font-opensans">Years Experience</div>
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold font-poppins text-charcoal mb-6">
                  {aboutPreview.heading}
                </h2>
                <div className="w-20 h-1 bg-gold mb-8" />
                <p className="text-lg text-gray-600 font-opensans mb-8 leading-relaxed">
                  {aboutPreview.content}
                </p>
                <Link href="/about">
                  <Button>Learn More About Us</Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      {statsSection && (
        <section className="py-20 bg-gradient-to-br from-charcoal to-charcoal/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              {statsSection.items.map((stat: any, index: number) => (
                <AnimatedCounter
                  key={index}
                  target={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Preview */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-charcoal mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6" />
            <p className="text-lg text-gray-600 font-opensans max-w-3xl mx-auto">
              Comprehensive social media marketing solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Consulting', 'Content Creation', 'Analytics'].map(
              (service, index) => (
                <Card key={service} delay={index * 0.2}>
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                      {index === 0 && (
                        <svg
                          className="w-8 h-8 text-gold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg
                          className="w-8 h-8 text-gold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg
                          className="w-8 h-8 text-gold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold font-poppins text-charcoal mb-4">
                      {service}
                    </h3>
                    <p className="text-gray-600 font-opensans mb-6">
                      {index === 0 &&
                        'Tailored marketing strategies for your business growth.'}
                      {index === 1 &&
                        'Engaging content that resonates with your audience.'}
                      {index === 2 &&
                        'Data-driven insights that improve ROI.'}
                    </p>
                    <Link
                      href="/services"
                      className="text-gold font-semibold font-poppins hover:underline inline-flex items-center"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </Card>
              )
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button size="lg">View All Services</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      {ctaBanner && (
        <section className="relative py-32 overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${ctaBanner.background}?w=1920&h=600&fit=crop)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/80 to-gold/70" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold font-poppins text-white mb-6"
            >
              {ctaBanner.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 font-opensans mb-12 max-w-3xl mx-auto"
            >
              {ctaBanner.subtext}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/contact">
                <Button size="lg">{ctaBanner.cta[0]}</Button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
