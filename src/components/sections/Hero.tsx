'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import {
  staggerContainer,
  fadeInUp,
  scaleIn,
  glowPulse,
} from '@/lib/animations';
import { cn } from '@/lib/utils';

/**
 * Hero - Landing page hero section with glass card design
 * Features animated text, neon accents, and dual CTAs
 */
export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060810] via-[#0b1220] to-[#060810] -z-10" />

      {/* Subtle animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30 -z-10"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Glass card container */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="glass-card-neon-hover max-w-6xl w-full p-8 md:p-12 lg:p-16"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text content */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-gradient-primary">Ali Kiani</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl lg:text-3xl text-accent-primary font-medium"
            >
              Senior Frontend Developer
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-text-secondary max-w-lg leading-relaxed"
            >
              Building exceptional web experiences with modern technologies.
              Specializing in React, Next.js, and performance optimization.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#contact"
                  className={cn(
                    'neomorph-button px-8 py-3 rounded-lg',
                    'flex items-center justify-center gap-2',
                    'text-white font-semibold',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary'
                  )}
                >
                  Hire Me
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/projects"
                  className={cn(
                    'glass-card px-8 py-3 rounded-lg',
                    'flex items-center justify-center gap-2',
                    'font-semibold text-accent-primary',
                    'hover:bg-white/[0.08] transition-colors',
                    'border-accent-primary/30',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary'
                  )}
                >
                  View Projects
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            variants={scaleIn}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Neon ring with pulse animation */}
              <motion.div
                variants={glowPulse}
                animate="animate"
                transition={glowPulse.transition}
                className="absolute inset-0 rounded-full p-1"
                style={{
                  background:
                    'linear-gradient(135deg, #06b6d4 0%, #7c3aed 50%, #06b6d4 100%)',
                }}
              >
                <div className="w-full h-full rounded-full bg-bg-secondary" />
              </motion.div>

              {/* Avatar content */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center backdrop-blur-sm"
              >
                {/* Avatar initials or image placeholder */}
                <div className="text-6xl md:text-7xl font-bold text-gradient-primary">
                  AK
                </div>

                {/* Floating particles effect */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-accent-neon/50"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${15 + i * 12}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </motion.div>

              {/* Decorative gradient circles */}
              <motion.div
                className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-accent-primary/10 blur-3xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-accent-secondary/10 blur-3xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 2,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

