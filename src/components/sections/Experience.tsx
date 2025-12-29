"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import RevealOnScroll from "../RevealOnScroll";

/**
 * Experience - Vertical timeline section for displaying work experience
 * Features timeline design with glass cards and animations
 */
export function Experience() {
  const formatDateRange = (
    startDate: string,
    endDate?: string,
    current?: boolean
  ) => {
    if (current) {
      return `${startDate} - Present`;
    }
    return `${startDate} - ${endDate || ""}`;
  };

  return (
    <section
      id="experience"
      className="px-6 py-12 sm:px-8 md:py-16 lg:py-20"
      aria-label="Work Experience section"
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
            <h2 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 md:mb-4 md:text-3xl lg:text-4xl">
              Work Experience
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
              My professional journey and key positions.
            </p>
          </motion.div>
        </RevealOnScroll>

        {/* Timeline */}
        <RevealOnScroll>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute bottom-0 left-4 top-0 w-0.5 transform bg-glass-border md:left-1/2 md:-translate-x-1/2" />

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
                      "absolute left-4 z-10 h-4 w-4 transform rounded-full md:left-1/2 md:-translate-x-1/2",
                      "border-4 border-bg-primary",
                      experience.current
                        ? "bg-accent-neon shadow-[0_0_20px_rgba(0,229,255,0.5)]"
                        : "bg-accent-primary"
                    )}
                  />

                  {/* Content card */}
                  <div
                    className={cn(
                      "ml-12 md:ml-0 md:pl-16",
                      index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                    )}
                  >
                    <motion.div
                      className={cn(
                        "rounded-xl bg-white p-6 md:p-8",
                        "border-l-4 border-accent-primary",
                        "border border-gray-200",
                        "shadow-sm hover:shadow-lg",
                        "hover:border-l-8",
                        "transition-all duration-300",
                        "group",
                        experience.current &&
                          "border-accent-neon shadow-[0_0_20px_rgba(0,229,255,0.1)]"
                      )}
                    >
                      {/* Role and Company */}
                      <div className="mb-4 md:mb-6">
                        <h3 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-accent-primary md:mb-3 md:text-xl">
                          {experience.role}
                        </h3>
                        <p className="font-medium text-accent-primary">
                          {experience.company}
                        </p>
                      </div>

                      {/* Date range */}
                      <p className="mb-4 text-xs font-medium text-gray-500 md:mb-6 md:text-sm">
                        {formatDateRange(
                          experience.startDate,
                          experience.endDate,
                          experience.current
                        )}
                      </p>

                      {/* Description */}
                      <div className="mb-4 space-y-3 md:mb-6 md:space-y-4">
                        {experience.description.map((desc, idx) => (
                          <p
                            key={idx}
                            className="text-base leading-relaxed text-gray-700 md:text-lg"
                          >
                            {desc}
                          </p>
                        ))}
                      </div>

                      {/* Tech stack badges */}
                      {experience.tech.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-4 md:gap-3 md:pt-6">
                          {experience.tech.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-accent-primary/30 bg-white/[0.08] px-3 py-1 text-xs font-medium text-accent-neon md:text-sm"
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
        </RevealOnScroll>
      </div>
    </section>
  );
}
