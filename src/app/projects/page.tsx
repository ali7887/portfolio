import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Projects } from '@/components/sections/Projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my portfolio of web development projects built with React, Next.js, TypeScript, and modern web technologies.',
  openGraph: {
    title: 'Projects | Ali Kiani',
    description:
      'Explore my portfolio of web development projects built with React, Next.js, TypeScript, and modern web technologies.',
  },
};

/**
 * Projects page - Showcase of all projects
 * Features grid layout, filtering, and project details modal
 */
export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Breadcrumb navigation */}
        <nav
          className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2 text-sm text-text-secondary">
            <li>
              <Link
                href="/"
                className="hover:text-accent-neon transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
              >
                <Home className="w-4 h-4" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            <li>
              <ChevronRight className="w-4 h-4" />
            </li>
            <li>
              <span className="text-text-primary font-medium">Projects</span>
            </li>
          </ol>
        </nav>

        {/* Projects section */}
        <Projects showFilters={true} />
      </main>
      <Footer />
    </>
  );
}

