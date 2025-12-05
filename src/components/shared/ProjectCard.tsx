'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, Star } from 'lucide-react';
import type { Project } from '@/lib/types';
import { cn } from '@/lib/utils';
import { hoverScale, tapScale } from '@/lib/animations';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  index?: number;
}

/**
 * ProjectCard - Glass card component for displaying projects
 * Features hover effects, tech badges, and action buttons
 */
export function ProjectCard({ project, onClick, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={hoverScale}
      whileTap={tapScale}
      onClick={onClick}
      className={cn(
        'glass-card-hover cursor-pointer overflow-hidden',
        'group relative',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary'
      )}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
            className="glass-card px-3 py-1 flex items-center gap-1.5 bg-accent-primary/20 border-accent-primary/50"
          >
            <Star className="w-4 h-4 text-accent-neon fill-accent-neon" />
            <span className="text-xs font-semibold text-accent-neon">
              Featured
            </span>
          </motion.div>
        </div>
      )}

      {/* Project image */}
      <div className="relative w-full h-48 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-gradient-primary opacity-20">
            {project.title.charAt(0)}
          </div>
        </div>
        {/* Placeholder for actual image - replace with Image component when images are available */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 group-hover:from-accent-primary/10 group-hover:to-accent-secondary/10 transition-all duration-300" />
      </div>

      {/* Card content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-neon transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/[0.06] text-text-secondary border border-white/[0.08] hover:border-accent-primary/50 hover:text-accent-primary transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/[0.06] text-text-muted border border-white/[0.08]">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 pt-2">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-lg',
                'glass-card text-sm font-medium',
                'text-text-secondary hover:text-text-primary hover:bg-white/[0.08]',
                'transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary'
              )}
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </motion.a>
          )}

          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-lg',
                'neomorph-button text-sm',
                'text-white',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary'
              )}
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

