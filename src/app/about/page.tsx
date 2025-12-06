'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Home, Code, Zap, Accessibility, Sparkles } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { PERSONAL_INFO } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const coreValues = [
  {
    title: 'Clean Code',
    description: 'Write clean, maintainable code',
    icon: Code,
  },
  {
    title: 'Performance',
    description: 'Performance is a feature',
    icon: Zap,
  },
  {
    title: 'Accessibility',
    description: 'Accessibility is non-negotiable',
    icon: Accessibility,
  },
  {
    title: 'Innovation',
    description: 'User experience above all',
    icon: Sparkles,
  },
];

/**
 * About page - Personal information and professional background
 * Features bio, core values, skills, and experience
 */
export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Breadcrumb navigation */}
        <nav
          className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2 text-sm text-text-secondary">
            <li>
              <Link
                href="/"
                className="hover:text-accent-neon transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
              >
                <Home className="w-4 h-4" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            <li>
              <ChevronRight className="w-4 h-4" />
            </li>
            <li>
              <span className="text-text-primary font-medium">About</span>
            </li>
          </ol>
        </nav>

        {/* Hero section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-primary mb-4">
                About Me
              </h1>
              <p className="text-xl text-text-secondary">
                {PERSONAL_INFO.role} • {PERSONAL_INFO.experience}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Bio section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="glass-card p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Avatar placeholder */}
                <motion.div variants={fadeInUp} className="flex justify-center md:justify-start">
                  <div className="relative">
                    {/* Neon ring */}
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
                    <div className="relative z-10 w-48 h-48 rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-6xl font-bold text-gradient-primary">AK</div>
                    </div>
                  </div>
                </motion.div>

                {/* Bio text */}
                <motion.div variants={fadeInUp} className="space-y-4">
                  <p className="text-text-secondary leading-relaxed">
                    I'm {PERSONAL_INFO.name}, a {PERSONAL_INFO.role} with{' '}
                    {PERSONAL_INFO.experience} of experience building exceptional web
                    applications. I specialize in creating modern, performant, and accessible
                    user interfaces using cutting-edge technologies.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    My expertise spans across React, Next.js, TypeScript, and modern web
                    development practices. I'm passionate about writing clean code, optimizing
                    performance, and ensuring accessibility standards are met in every project.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    Currently {PERSONAL_INFO.location}, I work with clients worldwide to deliver
                    high-quality frontend solutions. I'm always eager to take on new challenges
                    and explore innovative technologies that push the boundaries of web
                    development.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Values section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
                Core Values
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                The principles that guide my work and approach to development.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    variants={fadeInUp}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="glass-card-hover p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="glass-card p-3 rounded-lg bg-accent-primary/10 border-accent-primary/30">
                        <Icon className="w-6 h-6 text-accent-neon" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-text-primary mb-2">
                          {value.title}
                        </h3>
                        <p className="text-text-secondary">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Skills section */}
        <Skills />

        {/* Experience section */}
        <Experience />
      </main>
      <Footer />
    </>
  );
}

