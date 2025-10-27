'use client';

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedCounterProps {
  target: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  label,
  duration = 2,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Extract number from target string (e.g., "150+" -> 150)
  const targetNumber = parseInt(target.replace(/\D/g, ''));
  const suffix = target.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = targetNumber / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, targetNumber, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold font-poppins text-gold mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-lg md:text-xl text-gray-600 font-opensans">{label}</div>
    </motion.div>
  );
}
