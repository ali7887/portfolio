'use client';

import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';

/**
 * AboutIntro - Short bio section for single-page portfolio
 * Features personal introduction with avatar and core values
 */
export function AboutIntro() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8"
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
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Bio text */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
                  About Me
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-accent-primary to-accent-neon rounded-full mb-6" />
              </div>

              <p className="text-text-secondary leading-relaxed text-lg">
                I'm <span className="text-accent-neon font-semibold">{PERSONAL_INFO.name}</span>, a{' '}
                <span className="text-accent-primary font-medium">{PERSONAL_INFO.role}</span> with{' '}
                <span className="text-accent-neon font-semibold">{PERSONAL_INFO.experience}</span> of
                experience building exceptional web applications. I specialize in creating modern,
                performant, and accessible user interfaces using cutting-edge technologies.
              </p>

              <p className="text-text-secondary leading-relaxed text-lg">
                My expertise spans across React, Next.js, TypeScript, and modern web development
                practices. I'm passionate about writing clean code, optimizing performance, and
                ensuring accessibility standards are met in every project.
              </p>

              <p className="text-text-secondary leading-relaxed text-lg">
                Currently <span className="text-accent-primary">{PERSONAL_INFO.location}</span>, I
                work with clients worldwide to deliver high-quality frontend solutions. I'm always
                eager to take on new challenges and explore innovative technologies that push the
                boundaries of web development.
              </p>

              {/* Core values badges */}
              <div className="flex flex-wrap gap-3 pt-4">
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
                {/* Neon ring with pulse animation */}
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(0, 229, 255, 0.3)',
                      '0 0 40px rgba(0, 229, 255, 0.5)',
                      '0 0 20px rgba(0, 229, 255, 0.3)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
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
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative z-10 w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center backdrop-blur-sm"
                >
                  <div className="text-7xl md:text-8xl font-bold text-gradient-primary">AK</div>

                  {/* Floating particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-accent-neon/50"
                      style={{
                        top: `${15 + i * 12}%`,
                        left: `${10 + i * 10}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 3 + i * 0.4,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </motion.div>

                {/* Decorative gradient circles */}
                <motion.div
                  className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-accent-primary/10 blur-3xl -z-10"
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
                  className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-accent-secondary/10 blur-3xl -z-10"
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
      </div>
    </section>
  );
}

