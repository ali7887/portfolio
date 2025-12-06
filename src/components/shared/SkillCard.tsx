'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  skill: { name: string };
  index?: number;
}

/**
 * SkillCard - Simple card component for displaying skill names
 * Features glass card styling with hover effects and animations
 */
export function SkillCard({ skill, index = 0 }: SkillCardProps) {
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
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary'
      )}
    >
      <span className="text-lg font-semibold text-text-primary">{skill.name}</span>
    </motion.div>
  );
}

