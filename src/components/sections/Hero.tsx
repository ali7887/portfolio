'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * Hero - Premium hero section with glassmorphism and enhanced visual impact
 */
export function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex items-center pt-20 md:pt-24 pb-12 md:pb-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
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
            delay: 1
          }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
        
        {/* Grid overlay - very subtle */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
      </div>

      <div className="container mx-auto max-w-4xl px-6 relative z-10">
        <div className="text-center space-y-5 md:space-y-6">
          {/* Clean 3D Planet Orb with layered organic motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-block mb-6"
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
                  ease: "linear"
                },
                y: {
                  duration: 7,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1]
                }
              }}
              className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform',
                background: 'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(37, 99, 235) 40%, rgb(29, 78, 216) 70%, rgb(30, 64, 175) 100%)',
              }}
            >
              {/* Ultra-soft inner texture */}
              <div 
                className="absolute inset-0 rounded-full opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  backgroundSize: '80px 80px',
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
                  ease: "linear"
                }}
                style={{
                  background: 'conic-gradient(from 0deg at 30% 25%, rgba(255, 255, 255, 0.3) 0deg, rgba(255, 255, 255, 0.1) 60deg, transparent 120deg, transparent 240deg, rgba(255, 255, 255, 0.05) 300deg, rgba(255, 255, 255, 0.3) 360deg)',
                  willChange: 'transform',
                }}
              />
              
              {/* Layer 2: Internal energy line - parallax drift (different speed) */}
              <motion.svg
                className="absolute inset-0 w-full h-full"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear"
                }}
                viewBox="0 0 100 100"
                style={{
                  opacity: 0.05,
                  willChange: 'transform',
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
                  background: 'radial-gradient(circle at 70% 75%, rgba(30, 64, 175, 0.3) 0%, transparent 60%)',
                }}
              />
            </motion.div>
          </motion.div>

          {/* Name - Professional with subtle animated reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6"
          >
            <motion.span
              className="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Ali Kiani
            </motion.span>
          </motion.h1>

          {/* Title with decorative accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-600 tracking-wide mb-3">
              Creative Developer & Designer
            </p>
            {/* Decorative accent element */}
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent via-blue-400 to-blue-600 rounded-full" />
              <div className="h-1 w-2 bg-blue-600 rounded-full" />
              <div className="h-1 w-12 bg-gradient-to-l from-transparent via-blue-400 to-blue-600 rounded-full" />
            </div>
          </motion.div>

          {/* Description - Outcome-focused micro-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8 font-medium"
          >
            Transforming ideas into high-performance digital products that users love.
            <span className="block mt-2 text-base md:text-lg text-gray-500 font-normal">
              Specializing in Next.js, React.js, and performance optimization.
            </span>
          </motion.p>

          {/* CTA Buttons - Smooth and responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center"
          >
            {/* Primary CTA */}
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.02,
                y: -2,
                transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
              }}
              whileTap={{ 
                scale: 0.98,
                y: 0,
                transition: { duration: 0.1 }
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl relative overflow-hidden group"
              style={{
                willChange: 'transform',
              }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "linear"
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
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="/projects"
              whileHover={{ 
                scale: 1.02,
                y: -2,
                transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
              }}
              whileTap={{ 
                scale: 0.98,
                y: 0,
                transition: { duration: 0.15, ease: [0.22, 1, 0.36, 1] }
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-600 shadow-md hover:shadow-lg"
              style={{
                willChange: 'transform',
              }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
