"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Hero - Premium hero section with glassmorphism and enhanced visual impact
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden pb-12 pt-20 md:pb-16 md:pt-24"
    >
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl"
        />

        {/* Grid overlay - very subtle */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-6">
        <div className="space-y-5 text-center md:space-y-6">
          {/* Clean 3D Planet Orb with layered organic motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-6 inline-block"
          >
            {/* Main 3D Orb with layered motion system */}
            <motion.div
              animate={{
                rotate: 360,
                y: [0, -3.5, 0],
              }}
              transition={{
                rotate: {
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                },
                y: {
                  duration: 7,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                },
              }}
              className="relative h-24 w-24 overflow-hidden rounded-full md:h-28 md:w-28"
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
                background:
                  "linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(37, 99, 235) 40%, rgb(29, 78, 216) 70%, rgb(30, 64, 175) 100%)",
              }}
            >
              {/* Ultra-soft inner texture */}
              <div
                className="absolute inset-0 rounded-full opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  backgroundSize: "80px 80px",
                }}
              />

              {/* Layer 1: Animated light highlight - primary rotation */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background:
                    "conic-gradient(from 0deg at 30% 25%, rgba(255, 255, 255, 0.3) 0deg, rgba(255, 255, 255, 0.1) 60deg, transparent 120deg, transparent 240deg, rgba(255, 255, 255, 0.05) 300deg, rgba(255, 255, 255, 0.3) 360deg)",
                  willChange: "transform",
                }}
              />

              {/* Layer 2: Internal energy line - parallax drift (different speed) */}
              <motion.svg
                className="absolute inset-0 h-full w-full"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                viewBox="0 0 100 100"
                style={{
                  opacity: 0.05,
                  willChange: "transform",
                }}
              >
                <path
                  d="M 20 50 Q 30 30, 50 35 Q 70 40, 80 50 Q 70 60, 50 65 Q 30 70, 20 50"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                />
              </motion.svg>

              {/* Soft shadow gradient at bottom */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 70% 75%, rgba(30, 64, 175, 0.3) 0%, transparent 60%)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Name - Professional with subtle animated reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl"
          >
            <motion.span
              className="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{
                duration: 1.1,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Ali Kiani
            </motion.span>
          </motion.h1>

          {/* Title with decorative accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4"
          >
            <p className="mb-2 text-xl font-semibold tracking-wide text-blue-600 md:text-2xl lg:text-3xl">
              Creative Developer & Designer
            </p>
            {/* Decorative accent element */}
          </motion.div>

          {/* Description - Outcome-focused micro-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-6 max-w-2xl text-base font-medium leading-relaxed text-gray-600 md:text-lg lg:text-xl"
          >
            Transforming ideas into high-performance digital products.
          </motion.p>

          {/* CTA Buttons - Smooth and responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col flex-wrap justify-center gap-3 sm:flex-row"
          >
            {/* Primary CTA */}
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
              }}
              whileTap={{
                scale: 0.98,
                y: 0,
                transition: { duration: 0.1 },
              }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl md:text-base"
              style={{
                willChange: "transform",
              }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "linear",
                }}
              />

              {/* Smooth hover overlay */}
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Content */}
              <span className="relative z-10">Let's Start a Project</span>
              <motion.div
                className="relative z-10"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="/projects"
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
              }}
              whileTap={{
                scale: 0.98,
                y: 0,
                transition: { duration: 0.15, ease: [0.22, 1, 0.36, 1] },
              }}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white/80 px-6 py-3 text-sm font-semibold text-gray-900 shadow-md backdrop-blur-sm hover:border-blue-600 hover:bg-white hover:shadow-lg md:text-base"
              style={{
                willChange: "transform",
              }}
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Skills Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 md:mt-12"
          >
            {/* Glassmorphism Marquee Container */}
            <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/40 py-4 shadow-lg backdrop-blur-md md:py-5">
              {/* Left Fade Gradient */}
              <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-white/90 via-white/50 to-transparent md:w-28" />

              {/* Right Fade Gradient */}
              <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-white/90 via-white/50 to-transparent md:w-28" />

              {/* Marquee Track */}
              <div className="animate-marquee flex gap-6 md:gap-8">
                {[
                  { name: "Next.js", color: "#000000" },
                  { name: "React.js", color: "#61DAFB" },
                  { name: "TypeScript", color: "#3178C6" },
                  { name: "JavaScript", color: "#F7DF1E" },
                  { name: "Node.js", color: "#5FA04E" },
                  { name: "Express.js", color: "#000000" },
                  { name: "Redux Toolkit", color: "#764ABC" },
                  { name: "Tailwind CSS", color: "#06B6D4" },
                  { name: "MongoDB", color: "#47A248" },
                  { name: "PostgreSQL", color: "#4169E1" },
                  { name: "Prisma", color: "#2D3748" },
                  { name: "Elementor", color: "#92003B" },
                ]
                  .concat([
                    { name: "Next.js", color: "#000000" },
                    { name: "React.js", color: "#61DAFB" },
                    { name: "TypeScript", color: "#3178C6" },
                    { name: "JavaScript", color: "#F7DF1E" },
                    { name: "Node.js", color: "#5FA04E" },
                    { name: "Express.js", color: "#000000" },
                    { name: "Redux Toolkit", color: "#764ABC" },
                    { name: "Tailwind CSS", color: "#06B6D4" },
                    { name: "MongoDB", color: "#47A248" },
                    { name: "PostgreSQL", color: "#4169E1" },
                    { name: "Prisma", color: "#2D3748" },
                    { name: "Elementor", color: "#92003B" },
                  ])
                  .map((skill, idx) => (
                    <div key={idx} className="flex-shrink-0 px-3 md:px-4">
                      <span
                        className="cursor-default whitespace-nowrap text-sm font-semibold transition-opacity duration-300 hover:opacity-80 md:text-base"
                        style={{ color: skill.color }}
                      >
                        {skill.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
