import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { AboutIntro } from '@/components/sections/AboutIntro';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';

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
    </>
  );
}

