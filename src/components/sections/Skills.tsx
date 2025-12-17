"use client";

import { motion } from "framer-motion";
import { SkillCard } from "@/components/shared/SkillCard";
import { SKILLS } from "@/lib/constants";
import { staggerContainer } from "@/lib/animations";
import RevealOnScroll from "../RevealOnScroll";

/**
 * Skills - Grid layout section for displaying skills
 * Features simple grid with stagger animations
 */
export function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-16 sm:px-8 md:py-24 lg:py-32"
      aria-label="Skills section"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center md:mb-16 lg:mb-20"
          >
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-gray-900 md:mb-6 md:text-4xl lg:text-5xl">
              Skills & Expertise
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
              Technologies and tools I work with to build exceptional web
              applications.
            </p>
          </motion.div>
        </RevealOnScroll>

        {/* Skills grid */}
        <RevealOnScroll>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-10"
          >
            {SKILLS.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
