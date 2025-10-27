'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import SectionTitle from '@/components/ui/SectionTitle';
import siteData from '@/data/siteData.json';

export default function Services() {
  const servicesPage = siteData.pages.find((page) => page.name === 'Services');
  if (!servicesPage) return null;

  const serviceIcons = [
    // Consulting Icon
    <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>,
    // Content Creation Icon
    <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>,
    // Analytics Icon
    <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>,
  ];

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
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="text-xl text-gray-300 font-opensans max-w-3xl mx-auto mb-8">
              {servicesPage.intro}
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicesPage.services?.map((service: any, index: number) => (
              <Card key={service.name} delay={index * 0.2}>
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <img
                    src={`${service.image}?w=600&h=400&fit=crop`}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      {serviceIcons[index]}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-poppins text-charcoal mb-4">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 font-opensans mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="text-gold font-semibold font-poppins hover:underline inline-flex items-center group"
                  >
                    Get Started
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Process"
            subtitle="How we deliver exceptional results for your business"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We learn about your business, goals, and target audience',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We create a customized marketing plan tailored to your needs',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'We implement campaigns and create engaging content',
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'We analyze results and continuously improve performance',
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center relative"
              >
                <div className="relative inline-block mb-6">
                  <div className="text-7xl font-bold font-poppins text-gold/20">
                    {process.step}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold font-poppins text-xl">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-poppins text-charcoal mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 font-opensans">{process.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gold/30 -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-poppins text-charcoal mb-6">
                Why Choose <span className="text-gold">Blessins</span>
              </h2>
              <div className="w-20 h-1 bg-gold mb-8" />
              <div className="space-y-6">
                {[
                  {
                    title: 'Expert Team',
                    description:
                      'Our experienced professionals bring years of expertise in social media marketing',
                  },
                  {
                    title: 'Proven Results',
                    description:
                      'Track record of success with 150+ satisfied clients across various industries',
                  },
                  {
                    title: 'Custom Solutions',
                    description:
                      'Tailored strategies designed specifically for your business objectives',
                  },
                  {
                    title: 'Transparent Reporting',
                    description:
                      'Regular updates and detailed analytics to track your campaign performance',
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-white"
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
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-charcoal mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 font-opensans">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image/Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <Card hover={false}>
                <div className="p-8 text-center">
                  <div className="text-5xl font-bold font-poppins text-gold mb-2">
                    150+
                  </div>
                  <div className="text-gray-600 font-opensans">Happy Clients</div>
                </div>
              </Card>
              <Card hover={false} delay={0.1}>
                <div className="p-8 text-center">
                  <div className="text-5xl font-bold font-poppins text-gold mb-2">
                    15
                  </div>
                  <div className="text-gray-600 font-opensans">Years Experience</div>
                </div>
              </Card>
              <Card hover={false} delay={0.2}>
                <div className="p-8 text-center">
                  <div className="text-5xl font-bold font-poppins text-gold mb-2">
                    98%
                  </div>
                  <div className="text-gray-600 font-opensans">Satisfaction Rate</div>
                </div>
              </Card>
              <Card hover={false} delay={0.3}>
                <div className="p-8 text-center">
                  <div className="text-5xl font-bold font-poppins text-gold mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600 font-opensans">Support Available</div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1676276374803-36e48196d5ac?w=1920&h=600&fit=crop)`,
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
            Ready to Elevate Your Brand?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 font-opensans mb-12 max-w-3xl mx-auto"
          >
            Let's discuss how our services can help you achieve your marketing goals
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button size="lg">Get Started Today</Button>
            </Link>
            <Link href="/packages">
              <Button variant="outline" size="lg">
                View Packages
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
