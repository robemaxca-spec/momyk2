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
                {/* Popular Badge */}
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
                  {/* Background Gradient */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-2 ${
                      index === popularPlanIndex
                        ? 'bg-gradient-to-r from-gold via-gold to-gold/70'
                        : 'bg-gradient-to-r from-charcoal to-charcoal/70'
                    }`}
                  />

                  <div className="p-8">
                    {/* Plan Name */}
                    <h3 className="text-3xl font-bold font-poppins text-charcoal mb-2">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-5xl font-bold font-poppins text-gold">
                        {plan.price.split('/')[0]}
                      </span>
                      <span className="text-gray-600 font-opensans text-lg">
                        /{plan.price.split('/')[1]}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gray-200 mb-6" />

                    {/* Features */}
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

                    {/* CTA Button */}
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

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 font-opensans mb-6">
              {packagesPage.cta}
            </p>
            <Link href="/contact">
              <Button size="lg">Contact Us for Custom Solutions</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="What's Included"
            subtitle="Compare features across all packages"
          />

          <div className="overflow-x-auto">
            <motion.table
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full bg-white rounded-xl shadow-lg"
            >
              <thead className="bg-charcoal text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-poppins font-semibold">
                    Features
                  </th>
                  {packagesPage.plans?.map((plan: any) => (
                    <th
                      key={plan.name}
                      className="px-6 py-4 text-center font-poppins font-semibold"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    feature: 'Social Media Setup',
                    starter: true,
                    growth: true,
                    elite: true,
                  },
                  {
                    feature: 'Content Posts per Week',
                    starter: '1-2',
                    growth: '5-7',
                    elite: '10+',
                  },
                  {
                    feature: 'Platforms Managed',
                    starter: '1',
                    growth: '3',
                    elite: 'All',
                  },
                  {
                    feature: 'Monthly Analytics Report',
                    starter: true,
                    growth: true,
                    elite: true,
                  },
                  {
                    feature: 'Weekly Performance Reports',
                    starter: false,
                    growth: true,
                    elite: true,
                  },
                  {
                    feature: 'Paid Advertising Management',
                    starter: false,
                    growth: false,
                    elite: true,
                  },
                  {
                    feature: 'Dedicated Account Manager',
                    starter: false,
                    growth: false,
                    elite: true,
                  },
                  {
                    feature: '24/7 Priority Support',
                    starter: false,
                    growth: false,
                    elite: true,
                  },
                ].map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-opensans text-gray-700">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <svg
                            className="w-6 h-6 text-gold mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-6 h-6 text-gray-300 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )
                      ) : (
                        <span className="font-opensans text-gray-700">
                          {row.starter}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.growth === 'boolean' ? (
                        row.growth ? (
                          <svg
                            className="w-6 h-6 text-gold mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-6 h-6 text-gray-300 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )
                      ) : (
                        <span className="font-opensans text-gray-700">
                          {row.growth}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.elite === 'boolean' ? (
                        row.elite ? (
                          <svg
                            className="w-6 h-6 text-gold mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-6 h-6 text-gray-300 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )
                      ) : (
                        <span className="font-opensans text-gray-700">
                          {row.elite}
                        </span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Frequently Asked Questions" />

          <div className="space-y-6">
            {[
              {
                question: 'Can I upgrade my package later?',
                answer:
                  'Yes! You can upgrade your package at any time. We make the transition seamless and will credit any unused time from your current plan.',
              },
              {
                question: 'What platforms do you support?',
                answer:
                  'We support all major social media platforms including Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube.',
              },
              {
                question: 'Is there a contract commitment?',
                answer:
                  'Our packages are offered on a month-to-month basis with no long-term contract required. However, we offer discounts for quarterly and annual commitments.',
              },
              {
                question: 'Do you offer custom packages?',
                answer:
                  'Absolutely! If our standard packages don't fit your needs, we can create a custom solution tailored to your specific requirements.',
              },
            ].map((faq, index) => (
              <Card key={index} delay={index * 0.1} hover={false}>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-poppins text-charcoal mb-3 flex items-center">
                    <span className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 font-opensans leading-relaxed pl-11">
                    {faq.answer}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${packagesPage.image}?w=1920&h=600&fit=crop)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 to-gold/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-poppins text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 font-opensans mb-12 max-w-3xl mx-auto"
          >
            Choose the perfect package for your business and start growing today
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact">
              <Button size="lg">Contact Us Now</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
