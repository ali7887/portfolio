'use client';

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
export function ProjectCard({ project, onClick, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer hover:shadow-lg transition-all"
    >
      {/* Featured badge */}
      {project.featured && (
        <span className="inline-block px-3 py-1 bg-accent-primary/10 text-accent-primary text-xs font-semibold rounded-full mb-4">
          ⭐ Featured
        </span>
      )}

      {/* Project title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
            +{project.tech.length - 3}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-3 text-sm">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-accent-primary hover:text-accent-secondary transition-colors"
          >
            View Code →
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-accent-primary hover:text-accent-secondary transition-colors"
          >
            Live Demo →
          </a>
        )}
      </div>
    </motion.div>
  );
}
