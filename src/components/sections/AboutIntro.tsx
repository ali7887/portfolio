'use client';

import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

/**
 * AboutIntro - Short bio section for single-page portfolio
 * Clean and compact design
 */
export function AboutIntro() {
  return (
    <section
      id="about"
      className="py-12 px-4 sm:px-6 lg:px-8"
      aria-label="About section"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Bio text */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
                  About Me
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-accent-primary to-accent-neon rounded-full mb-4" />
              </div>

              <p className="text-text-secondary leading-relaxed">
                I&apos;m <span className="text-accent-neon font-semibold">{PERSONAL_INFO.name}</span>, a{' '}
                <span className="text-accent-primary font-medium">{PERSONAL_INFO.role}</span> with{' '}
                <span className="text-accent-neon font-semibold">{PERSONAL_INFO.experience}</span> of
                experience building exceptional web applications. I specialize in creating modern,
                performant, and accessible user interfaces using cutting-edge technologies.
              </p>

              <p className="text-text-secondary leading-relaxed">
                My expertise spans across React, Next.js, TypeScript, and modern web development
                practices. Currently <span className="text-accent-primary">{PERSONAL_INFO.location}</span>, I
                work with clients worldwide to deliver high-quality frontend solutions.
              </p>

              {/* Core values badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                {PERSONAL_INFO.values.map((value, index) => (
                  <motion.span
                    key={value}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-white/[0.08] text-accent-neon border border-accent-primary/30 hover:border-accent-neon/50 hover:bg-white/[0.12] transition-all"
                  >
                    {value}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Right: Avatar */}
            <motion.div variants={fadeInUp} className="flex justify-center md:justify-end">
              <div className="relative">
                {/* Simple Avatar */}
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-accent-primary/10 flex items-center justify-center border-2 border-accent-primary">
                  <div className="text-6xl md:text-7xl font-bold text-accent-primary">AK</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
