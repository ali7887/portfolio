"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import RevealOnScroll from "../RevealOnScroll";

/**
 * AboutIntro - Short bio section for single-page portfolio
 * Clean and compact design
 */
export function AboutIntro() {
  return (
    <section
      id="about"
      className="px-6 py-16 sm:px-8 md:py-24 lg:py-32"
      aria-label="About section"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <h2 className="mb-4 text-center text-3xl font-bold leading-tight tracking-tight text-gray-900 md:mb-6 md:text-4xl lg:text-5xl">
            About Me
          </h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-xl border border-gray-200/50 bg-white/50 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-md md:p-8"
          >
            <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
              {/* Left: Bio text */}
              <motion.div
                variants={fadeInUp}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <div className="mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-accent-primary to-accent-neon md:mb-6" />
                </div>

                <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                  I&apos;m{" "}
                  <span className="font-semibold text-accent-neon">
                    {PERSONAL_INFO.name}
                  </span>
                  , a{" "}
                  <span className="font-medium text-accent-primary">
                    {PERSONAL_INFO.role}
                  </span>{" "}
                  with{" "}
                  <span className="font-semibold text-accent-neon">
                    {PERSONAL_INFO.experience}
                  </span>{" "}
                  of experience building exceptional web applications. I
                  specialize in creating modern, performant, and accessible user
                  interfaces using cutting-edge technologies.
                </p>

                <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                  My expertise spans across Next.js, React.js, TypeScript, and
                  modern web development practices. Currently{" "}
                  <span className="text-accent-primary">
                    {PERSONAL_INFO.location}
                  </span>
                  , I work with clients worldwide to deliver high-quality
                  frontend solutions.
                </p>

                {/* Core values badges */}
                <div className="flex flex-wrap gap-3 pt-4 md:gap-4 md:pt-6">
                  {PERSONAL_INFO.values.map((value, index) => (
                    <motion.span
                      key={value}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="rounded-full border border-accent-primary/30 bg-white/[0.08] px-4 py-2 text-xs font-medium text-accent-neon transition-all hover:border-accent-neon/50 hover:bg-white/[0.12] md:text-sm"
                    >
                      {value}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Right: Avatar */}
              <motion.div
                variants={fadeInUp}
                className="flex justify-center md:justify-end"
              >
                <div className="relative">
                  {/* Simple Avatar */}
                  <div className="flex h-48 w-48 items-center justify-center rounded-full border-2 border-accent-primary bg-accent-primary/10 md:h-56 md:w-56">
                    <div className="text-6xl font-bold text-accent-primary md:text-7xl">
                      AK
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
