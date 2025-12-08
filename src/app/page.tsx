import dynamic from 'next/dynamic';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/shared/ScrollToTop';
import { Hero } from '@/components/sections/Hero';
import { AboutIntro } from '@/components/sections/AboutIntro';

// Lazy load heavy sections
const Skills = dynamic(
  () => import('@/components/sections/Skills').then(mod => ({ default: mod.Skills })),
  {
    loading: () => <div className="py-20 text-center text-gray-600">Loading...</div>,
  }
);

const Projects = dynamic(
  () => import('@/components/sections/Projects').then(mod => ({ default: mod.Projects })),
  {
    loading: () => <div className="py-20 text-center text-gray-600">Loading...</div>,
  }
);

const Experience = dynamic(
  () => import('@/components/sections/Experience').then(mod => ({ default: mod.Experience })),
  {
    loading: () => <div className="py-20 text-center text-gray-600">Loading...</div>,
  }
);

const Contact = dynamic(
  () => import('@/components/sections/Contact').then(mod => ({ default: mod.Contact })),
  {
    loading: () => <div className="py-20 text-center text-gray-600">Loading...</div>,
  }
);

/**
 * Homepage - Single-page portfolio
 * Features all sections in one smooth scrolling experience
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <AboutIntro />
        <Skills />
        <Projects showFilters={false} limit={4} />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

