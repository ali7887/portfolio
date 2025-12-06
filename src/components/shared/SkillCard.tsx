'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { Skill } from '@/lib/types';

interface SkillCardProps {
  skill: Skill;
  index?: number;
}

/**
 * SkillCard - Simple card component for displaying skill names with icons
 * Features glass card styling with hover effects and animations
 */
export function SkillCard({ skill, index = 0 }: SkillCardProps) {
  // Dynamically get icon component from lucide-react
  const IconComponent = skill.icon
    ? (LucideIcons[skill.icon as keyof typeof LucideIcons] as React.ComponentType<{
        className?: string;
      }>)
    : null;

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
      {IconComponent && (
        <motion.div
          whileHover={{
            scale: 1.1,
            filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.5))',
          }}
          transition={{ duration: 0.2 }}
        >
          <IconComponent className="w-8 h-8 text-accent-primary" />
        </motion.div>
      )}

      {/* Skill name */}
      <span className="text-lg font-semibold text-text-primary">{skill.name}</span>
    </motion.div>
  );
}

