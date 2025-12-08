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

/**
 * SkillCard - Simple card component for displaying skill names with brand icons
 * Features glass card styling with hover effects and animations
 */
export function SkillCard({ skill, index = 0 }: SkillCardProps) {
  const IconComponent = skill.iconName ? iconMap[skill.iconName] : null;

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
        className="flex items-center justify-center p-4 rounded-xl border-2 shadow-sm bg-accent-primary/10 border-accent-primary/30"
        whileHover={{
          scale: 1.15,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="opacity-90">
          {IconComponent ? (
            <IconComponent className="w-12 h-12 text-accent-primary" />
          ) : (
            <Code className="w-12 h-12 text-accent-primary" />
          )}
        </div>
      </motion.div>

      {/* Skill name */}
      <span className="text-lg font-semibold text-text-primary">{skill.name}</span>
    </motion.div>
  );
}

