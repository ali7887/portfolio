'use client';

import { motion } from 'framer-motion';
import { SkillCard } from '@/components/shared/SkillCard';
import { SKILLS } from '@/lib/constants';
import { staggerContainer } from '@/lib/animations';

/**
 * Skills - Grid layout section for displaying skills
 * Features simple grid with stagger animations
 */
export function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 lg:py-32 px-6 sm:px-8"
      aria-label="Skills section"
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
            Skills & Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Technologies and tools I work with to build exceptional web
            applications.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10"
        >
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

