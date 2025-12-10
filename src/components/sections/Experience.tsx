'use client';

import { motion } from 'framer-motion';
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
      className="py-16 md:py-24 lg:py-32 px-6 sm:px-8"
      aria-label="Work Experience section"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-gray-900 mb-4 md:mb-6">
            Work Experience
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
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
                      'bg-white rounded-xl p-6 md:p-8',
                      'border-l-4 border-accent-primary',
                      'border border-gray-200',
                      'shadow-sm hover:shadow-lg',
                      'hover:border-l-8',
                      'transition-all duration-300',
                      'group',
                      experience.current &&
                        'border-accent-neon shadow-[0_0_20px_rgba(0,229,255,0.1)]'
                    )}
                  >
                    {/* Role and Company */}
                    <div className="mb-4 md:mb-6">
                      <h3 className="text-lg md:text-xl font-semibold tracking-tight text-gray-900 mb-2 md:mb-3 group-hover:text-accent-primary transition-colors duration-300">
                        {experience.role}
                      </h3>
                      <p className="text-accent-primary font-medium">
                        {experience.company}
                      </p>
                    </div>

                    {/* Date range */}
                    <p className="text-xs md:text-sm text-gray-500 font-medium mb-4 md:mb-6">
                      {formatDateRange(
                        experience.startDate,
                        experience.endDate,
                        experience.current
                      )}
                    </p>

                    {/* Description */}
                    <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                      {experience.description.map((desc, idx) => (
                        <p key={idx} className="text-base md:text-lg text-gray-700 leading-relaxed">
                          {desc}
                        </p>
                      ))}
                    </div>

                    {/* Tech stack badges */}
                    {experience.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2 md:gap-3 pt-4 md:pt-6">
                        {experience.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-white/[0.08] text-accent-neon border border-accent-primary/30"
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

      </div>
    </section>
  );
}

