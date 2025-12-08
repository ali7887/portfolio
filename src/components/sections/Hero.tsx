'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Hero - Clean and minimal hero section
 * Professional design without AI-generated effects
 */
export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Simple Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-accent-primary/10 flex items-center justify-center border-2 border-accent-primary"
        >
          <span className="text-5xl font-bold text-accent-primary">AK</span>
        </motion.div>

        {/* Clean Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-4"
        >
          Ali Kiani
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl text-accent-primary font-medium mb-6"
        >
          Senior Frontend Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
        >
          Building exceptional web experiences with modern technologies.
          Specializing in React, Next.js, and performance optimization.
        </motion.p>

        {/* Modern Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#contact"
            className="px-8 py-3 bg-accent-primary text-white rounded-lg font-semibold hover:bg-accent-secondary transition-colors"
          >
            Contact Me
          </Link>

          <Link
            href="/projects"
            className="px-8 py-3 border-2 border-accent-primary text-accent-primary rounded-lg font-semibold hover:bg-accent-primary hover:text-white transition-colors"
          >
            View Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
