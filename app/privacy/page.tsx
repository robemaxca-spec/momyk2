'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Privacy() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal to-charcoal/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-poppins text-white mb-6">
              Privacy <span className="text-gold">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 font-opensans max-w-3xl mx-auto">
              Your privacy is important to us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-600 font-opensans mb-8">
              <strong>Last updated:</strong> January 2025
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-poppins text-charcoal mb-4">
                  Introduction
                </h2>
                <p className="text-gray-600 font-opensans leading-relaxed">
                  This Privacy Policy page is currently under development. Please contact us directly at info@blessins.uk for information about how we collect, use, and protect your personal data.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-poppins text-charcoal mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600 font-opensans leading-relaxed">
                  If you have any questions about our privacy practices, please contact us at:
                </p>
                <ul className="list-none mt-4 space-y-2">
                  <li className="text-gray-600 font-opensans">
                    <strong>Email:</strong> info@blessins.uk
                  </li>
                  <li className="text-gray-600 font-opensans">
                    <strong>Phone:</strong> +44 7878671236
                  </li>
                  <li className="text-gray-600 font-opensans">
                    <strong>Address:</strong> 28, ST Thomas Gardens, Ilford, IG1 2PQ London, United Kingdom
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
