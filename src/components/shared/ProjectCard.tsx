'use client';

import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  index?: number;
}

/**
 * ProjectCard - Clean and professional project card component
 * Features simple hover effects and clean design
 */
export const ProjectCard = memo(function ProjectCard({ project, onClick, index = 0 }: ProjectCardProps) {
  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  const handleLinkClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      onClick={handleClick}
      className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group will-change-transform"
    >
      {/* Featured badge */}
      {project.featured && (
        <span className="inline-block px-3 py-1 bg-accent-primary/10 text-accent-primary text-xs font-semibold rounded-full mb-4 md:mb-6">
          ⭐ Featured
        </span>
      )}

      {/* Project title */}
      <h3 className="text-lg md:text-xl font-semibold tracking-tight text-gray-900 mb-3 md:mb-4 group-hover:text-accent-primary transition-colors duration-300">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-2">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
        {project.tech.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs md:text-sm bg-gray-100 text-gray-700 rounded-full border border-gray-200 hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-colors duration-200"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="px-3 py-1 text-xs md:text-sm bg-gray-100 text-gray-700 rounded-full border border-gray-200">
            +{project.tech.length - 3}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-3 md:gap-4 text-sm md:text-base font-medium">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary font-medium transition-colors duration-200 group/link"
          >
            <span>View Code</span>
            <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary font-medium transition-colors duration-200 group/link"
          >
            <span>Live Demo</span>
            <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
          </a>
        )}
      </div>
    </motion.div>
  );
});
