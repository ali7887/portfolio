'use client';

import { motion } from 'framer-motion';

/**
 * Hero - Premium hero section with glassmorphism and enhanced visual impact
 */
export function Hero() {
  return (
    <section className="min-h-screen flex items-center py-20 md:py-24 relative overflow-hidden">
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
      </div>

      <div className="container mx-auto max-w-4xl px-6 relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Avatar with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-block mb-6"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-xl opacity-20 animate-pulse" />
            
            {/* Avatar */}
            <div className="relative w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/50">
              <span className="text-3xl md:text-4xl font-bold text-white">AK</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4"
          >
            Ali Kiani
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-blue-600 tracking-wide mb-4"
          >
            Creative Developer & Designer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Building exceptional web experiences with modern technologies.
            Specializing in React, Next.js, and performance optimization.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center"
          >
            {/* Primary CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              
              {/* Content */}
              <span className="relative z-10">Let's Start a Project</span>
              <motion.svg 
                className="w-5 h-5 relative z-10"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
