'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Filter } from 'lucide-react';
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

  // Extract all unique tech stacks for filters
  const allTech = useMemo(() => {
    const techSet = new Set<string>();
    PROJECTS.forEach((project) => {
      project.tech.forEach((t) => techSet.add(t.toLowerCase()));
    });
    return Array.from(techSet).sort();
  }, []);

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
  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

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
      className="py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Projects section"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
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
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filterOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setSelectedFilter(option.value)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                  'glass-card',
                  selectedFilter === option.value
                    ? 'bg-accent-primary/20 text-accent-neon border-accent-primary/50'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.06]',
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
              <p className="text-text-secondary">
                No projects found for this filter.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
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
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
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
              <div className="glass-card-neon p-6 md:p-8">
                {/* Modal header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        id="project-modal-title"
                        className="text-2xl md:text-3xl font-bold text-gradient-primary"
                      >
                        {selectedProject.title}
                      </h3>
                      {selectedProject.featured && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-primary/20 text-accent-neon border border-accent-primary/50 flex items-center gap-1.5">
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
                      'glass-card p-2 rounded-lg',
                      'hover:bg-white/[0.08] text-text-secondary hover:text-text-primary',
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
                  className="space-y-6"
                >
                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Tech stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-medium rounded-full bg-white/[0.08] text-accent-neon border border-accent-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    {selectedProject.github && (
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          'flex items-center justify-center gap-2 px-6 py-3 rounded-lg',
                          'glass-card text-sm font-medium',
                          'text-text-secondary hover:text-text-primary hover:bg-white/[0.08]',
                          'transition-colors',
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
                          'flex items-center justify-center gap-2 px-6 py-3 rounded-lg',
                          'neomorph-button text-sm',
                          'text-white',
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

