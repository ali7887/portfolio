'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { si } from 'simple-icons';
import { Code } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { Skill } from '@/lib/types';

interface SkillCardProps {
  skill: Skill;
  index?: number;
}

/**
 * SkillCard - Simple card component for displaying skill names with brand icons
 * Features glass card styling with hover effects and animations
 */
export function SkillCard({ skill, index = 0 }: SkillCardProps) {
  // Get icon data from simple-icons
  const iconData = useMemo(() => {
    if (!skill.iconName) return null;
    
    try {
      const iconKey = skill.iconName as keyof typeof si;
      return si[iconKey] || null;
    } catch {
      return null;
    }
  }, [skill.iconName]);

  // Create SVG path from icon data
  const iconSvg = useMemo(() => {
    if (!iconData) return null;
    
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
        fill="currentColor"
      >
        <title>{iconData.title}</title>
        <path d={iconData.path} />
      </svg>
    );
  }, [iconData]);

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
        className="flex items-center justify-center"
        whileHover={{
          scale: 1.1,
          filter: 'drop-shadow(0 0 12px currentColor)',
        }}
        transition={{ duration: 0.2 }}
        style={{
          color: iconData ? `#${iconData.hex}` : 'var(--accent-primary)',
        }}
      >
        {iconSvg || (
          <Code className="w-12 h-12 text-accent-primary" />
        )}
      </motion.div>

      {/* Skill name */}
      <span className="text-lg font-semibold text-text-primary">{skill.name}</span>
    </motion.div>
  );
}

