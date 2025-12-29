"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { PROJECTS } from "@/lib/constants";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { scaleIn, fadeInUp } from "@/lib/animations";
import RevealOnScroll from "../RevealOnScroll";

interface ProjectsProps {
  showFilters?: boolean;
  limit?: number;
}

/**
 * Projects - Grid layout section for displaying projects
 * Features filtering, modal, and animations
 */
export function Projects({ showFilters = true, limit }: ProjectsProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on selected filter
  const filteredProjects = useMemo(() => {
    if (selectedFilter === "all") {
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
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  }, []);

  const handleFilterChange = useCallback((value: string) => {
    setSelectedFilter(value);
  }, []);

  // Filter options
  const filterOptions = [
    { value: "all", label: "All Projects" },
    { value: "react", label: "React" },
    { value: "next.js", label: "Next.js" },
    { value: "typescript", label: "TypeScript" },
    { value: "web3", label: "Web3" },
  ];

  return (
    <section
      id="projects"
      className="px-6 py-12 sm:px-8 md:py-16 lg:py-20"
      aria-label="Projects section"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center md:mb-16 lg:mb-20"
          >
            <h2 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 md:mb-4 md:text-3xl lg:text-4xl">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
              A collection of projects showcasing modern web development
              practices and technologies.
            </p>
          </motion.div>
        </RevealOnScroll>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 flex flex-wrap justify-center gap-3 md:mb-16 md:gap-4"
          >
            {filterOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleFilterChange(option.value)}
                className={cn(
                  "rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200",
                  "border border-gray-200 bg-white",
                  "shadow-sm hover:shadow-md",
                  "transform hover:-translate-y-0.5 active:translate-y-0",
                  selectedFilter === option.value
                    ? "border-accent-primary/50 bg-accent-primary/20 text-accent-primary shadow-md"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                )}
                aria-pressed={selectedFilter === option.value}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}

        {/* Projects grid */}
        <RevealOnScroll>
          <AnimatePresence mode="wait">
            {displayedProjects.length > 0 ? (
              <motion.div
                key={selectedFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-6 will-change-contents sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10"
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
        </RevealOnScroll>

        {/* View All button (when limit is set) */}
        {limit && displayedProjects.length >= limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 text-center md:mt-12"
          >
            <Link
              href="/projects"
              className={cn(
                "rounded-xl px-6 py-3 md:px-8 md:py-4",
                "inline-flex items-center gap-2 md:gap-3",
                "bg-accent-primary text-base font-semibold tracking-wide text-white hover:bg-accent-secondary active:bg-accent-primary/90 md:text-lg",
                "shadow-md hover:shadow-lg active:shadow-sm",
                "transform hover:-translate-y-0.5 active:translate-y-0",
                "transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
              )}
            >
              <span>View All Projects</span>
              <ArrowRight className="h-5 w-5" />
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
              className="fixed inset-0 z-50 bg-black/60"
              aria-hidden="true"
            />

            {/* Modal */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-4 z-50 max-h-[90vh] overflow-y-auto md:inset-auto md:left-1/2 md:top-1/2 md:w-full md:max-w-4xl md:-translate-x-1/2 md:-translate-y-1/2"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              <div className="rounded-xl bg-white p-6 shadow-2xl md:p-8">
                {/* Modal header */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3
                        id="project-modal-title"
                        className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl lg:text-4xl"
                      >
                        {selectedProject.title}
                      </h3>
                      {selectedProject.featured && (
                        <span className="flex items-center gap-1.5 rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-semibold text-accent-primary">
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
                      "rounded-lg p-2",
                      "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                      "transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                    )}
                  >
                    <X className="h-5 w-5" />
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
                  <p className="leading-relaxed text-gray-600">
                    {selectedProject.description}
                  </p>

                  {/* Tech stack */}
                  <div>
                    <h4 className="mb-3 text-sm font-semibold tracking-tight text-gray-900 md:text-base">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col gap-3 pt-6 sm:flex-row md:gap-4 md:pt-8">
                    {selectedProject.github && (
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          "flex items-center justify-center gap-2 rounded-xl px-6 py-3",
                          "bg-gray-100 text-sm font-semibold tracking-wide text-gray-700 md:text-base",
                          "hover:bg-gray-200",
                          "shadow-sm hover:shadow-md",
                          "transform hover:-translate-y-0.5 active:translate-y-0",
                          "transition-all duration-200",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
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
                          "flex items-center justify-center gap-2 rounded-xl px-6 py-3",
                          "bg-accent-primary text-sm font-semibold tracking-wide text-white hover:bg-accent-secondary active:bg-accent-primary/90 md:text-base",
                          "shadow-md hover:shadow-lg active:shadow-sm",
                          "transform hover:-translate-y-0.5 active:translate-y-0",
                          "transition-all duration-200",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
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
