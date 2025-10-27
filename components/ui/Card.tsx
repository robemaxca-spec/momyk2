'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className = '',
  hover = true,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8, boxShadow: '0 12px 24px rgba(212, 175, 55, 0.2)' } : {}}
      className={`bg-white rounded-xl shadow-lg transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
