'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { PROJECTS } from '@/lib/constants';
import type { Project } from '@/lib/types';
import { cn } from '@/lib/utils';
import { scaleIn, fadeInUp } from '@/lib/animations';

interface ProjectsProps {
  showFilters?: boolean;
  limit?: number;
}

/**
 * Projects - Grid layout section for displaying projects
 * Features filtering, modal, and animations
 */
export function Projects({ showFilters = true, limit }: ProjectsProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on selected filter
  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') {
      return PROJECTS;
    }

    return PROJECTS.filter((project) =>
      project.tech.some(
        (tech) => tech.toLowerCase() === selectedFilter.toLowerCase()
      )
    );
  }, [selectedFilter]);

  // Apply limit if provided
  const displayedProjects = useMemo(
    () => (limit ? filteredProjects.slice(0, limit) : filteredProjects),
    [filteredProjects, limit]
  );

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  }, []);

  const handleFilterChange = useCallback((value: string) => {
    setSelectedFilter(value);
  }, []);

  // Filter options
  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'react', label: 'React' },
    { value: 'next.js', label: 'Next.js' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'web3', label: 'Web3' },
  ];

  return (
    <section
      id="projects"
      className="py-16 md:py-24 lg:py-32 px-6 sm:px-8"
      aria-label="Projects section"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-gray-900 mb-4 md:mb-6">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A collection of projects showcasing modern web development
            practices and technologies.
          </p>
        </motion.div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16"
          >
            {filterOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleFilterChange(option.value)}
                className={cn(
                  'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                  'bg-white border border-gray-200',
                  'shadow-sm hover:shadow-md',
                  'transform hover:-translate-y-0.5 active:translate-y-0',
                  selectedFilter === option.value
                    ? 'bg-accent-primary/20 text-accent-primary border-accent-primary/50 shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary'
                )}
                aria-pressed={selectedFilter === option.value}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          {displayedProjects.length > 0 ? (
            <motion.div
              key={selectedFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 will-change-contents"
            >
              {displayedProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => handleProjectClick(project)}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-12 text-center"
            >
              <p className="text-gray-600">
                No projects found for this filter.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All button (when limit is set) */}
        {limit && displayedProjects.length >= limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-10 md:mt-12"
          >
            <Link
              href="/projects"
              className={cn(
                'px-6 md:px-8 py-3 md:py-4 rounded-xl',
                'inline-flex items-center gap-2 md:gap-3',
                'bg-accent-primary hover:bg-accent-secondary active:bg-accent-primary/90 text-white text-base md:text-lg font-semibold tracking-wide',
                'shadow-md hover:shadow-lg active:shadow-sm',
                'transform hover:-translate-y-0.5 active:translate-y-0',
                'transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary'
              )}
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 z-50"
              aria-hidden="true"
            />

            {/* Modal */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-4xl md:w-full z-50 overflow-y-auto max-h-[90vh]"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-2xl">
                {/* Modal header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        id="project-modal-title"
                        className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-gray-900"
                      >
                        {selectedProject.title}
                      </h3>
                      {selectedProject.featured && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-primary/10 text-accent-primary flex items-center gap-1.5">
                          <span>⭐</span>
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={closeModal}
                    aria-label="Close modal"
                    className={cn(
                      'p-2 rounded-lg',
                      'hover:bg-gray-100 text-gray-600 hover:text-gray-900',
                      'transition-colors',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary'
                    )}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal content */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6 md:space-y-8"
                >
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Tech stack */}
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-3 tracking-tight">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-medium rounded-full bg-gray-100 text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-6 md:pt-8">
                    {selectedProject.github && (
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          'flex items-center justify-center gap-2 px-6 py-3 rounded-xl',
                          'bg-gray-100 text-gray-700 text-sm md:text-base font-semibold tracking-wide',
                          'hover:bg-gray-200',
                          'shadow-sm hover:shadow-md',
                          'transform hover:-translate-y-0.5 active:translate-y-0',
                          'transition-all duration-200',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary'
                        )}
                      >
                        <span>View on GitHub</span>
                      </motion.a>
                    )}

                    {selectedProject.live && (
                      <motion.a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          'flex items-center justify-center gap-2 px-6 py-3 rounded-xl',
                          'bg-accent-primary hover:bg-accent-secondary active:bg-accent-primary/90 text-white text-sm md:text-base font-semibold tracking-wide',
                          'shadow-md hover:shadow-lg active:shadow-sm',
                          'transform hover:-translate-y-0.5 active:translate-y-0',
                          'transition-all duration-200',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary'
                        )}
                      >
                        <span>View Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

