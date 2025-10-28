'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import SectionTitle from '@/components/ui/SectionTitle';
import siteData from '@/data/siteData.json';

export default function Packages() {
  const packagesPage = siteData.pages.find((page) => page.name === 'Packages');
  if (!packagesPage) return null;

  const popularPlanIndex = 1; // Growth plan is most popular

  // 👇 FIXED RETURN (added parentheses correctly)
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal to-charcoal/90 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-poppins text-white mb-6">
              Our <span className="text-gold">Packages</span>
            </h1>
            <p className="text-xl text-gray-300 font-opensans max-w-3xl mx-auto mb-8">
              {packagesPage.meta_description}
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {packagesPage.plans?.map((plan: any, index: number) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative ${
                  index === popularPlanIndex ? 'lg:-mt-8' : ''
                }`}
              >
                {index === popularPlanIndex && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gold text-white px-6 py-2 rounded-full font-poppins font-semibold text-sm shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <Card
                  hover={true}
                  className={`relative overflow-hidden ${
                    index === popularPlanIndex
                      ? 'border-2 border-gold shadow-2xl'
                      : ''
                  }`}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-2 ${
                      index === popularPlanIndex
                        ? 'bg-gradient-to-r from-gold via-gold to-gold/70'
                        : 'bg-gradient-to-r from-charcoal to-charcoal/70'
                    }`}
                  />

                  <div className="p-8">
                    <h3 className="text-3xl font-bold font-poppins text-charcoal mb-2">
                      {plan.name}
                    </h3>

                    <div className="mb-6">
                      <span className="text-5xl font-bold font-poppins text-gold">
                        {plan.price.split('/')[0]}
                      </span>
                      <span className="text-gray-600 font-opensans text-lg">
                        /{plan.price.split('/')[1]}
                      </span>
                    </div>

                    <div className="w-full h-px bg-gray-200 mb-6" />

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature: string, featureIndex: number) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.6 + featureIndex * 0.1,
                          }}
                          className="flex items-start space-x-3"
                        >
                          <svg
                            className="w-6 h-6 text-gold flex-shrink-0 mt-0.5"
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
                          <span className="text-gray-700 font-opensans">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <Link href="/contact">
                      <Button
                        variant={index === popularPlanIndex ? 'primary' : 'outline'}
                        className="w-full"
                        size="lg"
                      >
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
