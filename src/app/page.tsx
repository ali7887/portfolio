import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';

/**
 * Homepage - Main landing page
 * Features Hero section with scroll-triggered animations
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        {/* Featured projects preview */}
        <Projects showFilters={false} limit={3} />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

