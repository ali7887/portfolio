'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiVercel,
  SiRedux,
  SiPrisma,
  SiEthereum,
  SiElementor,
} from 'react-icons/si';
import { Code, Brain } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { Skill } from '@/lib/types';

interface SkillCardProps {
  skill: Skill;
  index?: number;
}

// Icon map for react-icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'nextdotjs': SiNextdotjs,
  'react': SiReact,
  'typescript': SiTypescript,
  'nodedotjs': SiNodedotjs,
  'express': SiExpress,
  'javascript': SiJavascript,
  'tailwindcss': SiTailwindcss,
  'mongodb': SiMongodb,
  'postgresql': SiPostgresql,
  'git': SiGit,
  'docker': SiDocker,
  'vercel': SiVercel,
  'redux': SiRedux,
  'prisma': SiPrisma,
  'ethereum': SiEthereum,
  'elementor': SiElementor,
  'openai': Brain,
};

// Vibrant brand colors for icons
const iconColors: Record<string, string> = {
  // Frontend Frameworks - روشن و پررنگ
  'nextdotjs': '#000000',        // Next.js - Pure Black
  'react': '#61DAFB',            // React - Bright Cyan
  
  // Languages - زرد و آبی درخشان
  'typescript': '#3178C6',       // TypeScript - Vibrant Blue
  'javascript': '#F7DF1E',       // JavaScript - Bright Yellow
  
  // Backend - سبز و خاکستری روشن
  'nodedotjs': '#5FA04E',        // Node.js - Bright Green
  'express': '#000000',          // Express - Black
  
  // State Management - بنفش روشن
  'redux': '#764ABC',            // Redux - Purple
  
  // Styling - آبی فیروزه‌ای
  'tailwindcss': '#06B6D4',      // Tailwind - Cyan
  
  // Databases - سبز و آبی
  'mongodb': '#47A248',          // MongoDB - Leaf Green
  'postgresql': '#4169E1',       // PostgreSQL - Royal Blue
  
  // ORM - سبز دریایی
  'prisma': '#2D3748',           // Prisma - Dark Navy
  
  // Page Builders - صورتی
  'elementor': '#92003B',        // Elementor - Deep Pink
};

/**
 * SkillCard - Simple card component for displaying skill names with brand icons
 * Features glass card styling with hover effects and animations
 */
export function SkillCard({ skill, index = 0 }: SkillCardProps) {
  const IconComponent = skill.iconName ? iconMap[skill.iconName] : null;
  const iconColor = skill.iconName ? iconColors[skill.iconName] : '#0284C7';

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 229, 255, 0.2)',
        transition: { duration: 0.2 },
      }}
      className={cn(
        'glass-card-hover p-6 text-center',
        'cursor-default',
        'flex flex-col items-center gap-4',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary'
      )}
    >
      {/* Icon */}
      <motion.div
        className="flex items-center justify-center p-4 rounded-xl border-2 shadow-sm bg-white/80 border-gray-200"
        whileHover={{
          scale: 1.1,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="flex items-center justify-center"
          style={{ color: iconColor }}
        >
          {IconComponent ? (
            <IconComponent
              className="w-12 h-12 transition-transform"
              {...({ style: { fill: 'currentColor' } } as any)}
            />
          ) : (
            <Code className="w-12 h-12" style={{ color: '#0284C7' }} />
          )}
        </div>
      </motion.div>

      {/* Skill name */}
      <span className="text-lg font-semibold text-text-primary">{skill.name}</span>
    </motion.div>
  );
}

