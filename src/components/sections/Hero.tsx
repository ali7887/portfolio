'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Hero - Clean and minimal hero section
 * Professional design without AI-generated effects
 */
export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 md:py-24 lg:py-32 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Simple Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-accent-primary/10 flex items-center justify-center border-2 border-accent-primary will-change-transform"
        >
          <span className="text-5xl font-bold text-accent-primary">AK</span>
        </motion.div>

        {/* Clean Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-gray-900 mb-6 md:mb-8"
        >
          Ali Kiani
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-accent-primary font-medium leading-relaxed tracking-wide mb-8 md:mb-10"
        >
          Senior Frontend Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10 md:mb-12"
        >
          Building exceptional web experiences with modern technologies.
          Specializing in React, Next.js, and performance optimization.
        </motion.p>

        {/* Modern Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 justify-center"
        >
          <Link
            href="#contact"
            className="px-6 md:px-8 py-3 md:py-4 bg-accent-primary hover:bg-accent-secondary active:bg-accent-primary/90 text-white rounded-xl text-base md:text-lg font-semibold tracking-wide shadow-md hover:shadow-lg active:shadow-sm transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 leading-none"
          >
            Contact Me
          </Link>

          <Link
            href="/projects"
            className="px-6 md:px-8 py-3 md:py-4 border-2 border-accent-primary text-accent-primary hover:text-white rounded-xl text-base md:text-lg font-semibold tracking-wide bg-white hover:bg-accent-primary transition-all duration-200 leading-none shadow-sm hover:shadow-md"
          >
            View Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
