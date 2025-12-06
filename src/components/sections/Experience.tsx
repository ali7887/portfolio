'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { EXPERIENCES } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';

/**
 * Experience - Vertical timeline section for displaying work experience
 * Features timeline design with glass cards and animations
 */
export function Experience() {
  const formatDateRange = (startDate: string, endDate?: string, current?: boolean) => {
    if (current) {
      return `${startDate} - Present`;
    }
    return `${startDate} - ${endDate || ''}`;
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Work Experience section"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            My professional journey and key positions.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-glass-border transform md:-translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-12">
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={fadeInUp}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className={cn(
                    'absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-1/2 z-10',
                    'border-4 border-bg-primary',
                    experience.current
                      ? 'bg-accent-neon shadow-[0_0_20px_rgba(0,229,255,0.5)]'
                      : 'bg-accent-primary'
                  )}
                />

                {/* Content card */}
                <div
                  className={cn(
                    'ml-12 md:ml-0 md:pl-16',
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  )}
                >
                  <motion.div
                    className={cn(
                      'glass-card p-6',
                      experience.current &&
                        'glass-card-neon border-accent-neon/30'
                    )}
                  >
                    {/* Role and Company */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-text-primary mb-1">
                        {experience.role}
                      </h3>
                      <p className="text-accent-primary font-medium">
                        {experience.company}
                      </p>
                    </div>

                    {/* Date range */}
                    <p className="text-sm text-text-secondary mb-4">
                      {formatDateRange(
                        experience.startDate,
                        experience.endDate,
                        experience.current
                      )}
                    </p>

                    {/* Description */}
                    <div className="space-y-2 mb-4">
                      {experience.description.map((desc, idx) => (
                        <p key={idx} className="text-text-secondary">
                          {desc}
                        </p>
                      ))}
                    </div>

                    {/* Tech stack badges */}
                    {experience.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {experience.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.08] text-accent-neon border border-accent-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Resume button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              'neomorph-button px-8 py-3 rounded-lg',
              'inline-flex items-center gap-2',
              'text-white font-semibold',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary'
            )}
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

