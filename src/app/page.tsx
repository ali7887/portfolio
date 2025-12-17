"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { Hero } from "@/components/sections/Hero";
import { AboutIntro } from "@/components/sections/AboutIntro";
import LoadingScreen from "@/components/LoadingScreen";

// Lazy load heavy sections with optimized loading states
const Skills = dynamic(
  () =>
    import("@/components/sections/Skills").then((mod) => ({
      default: mod.Skills,
    })),
  {
    loading: () => (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-accent-primary" />
      </div>
    ),
  }
);

const Projects = dynamic(
  () =>
    import("@/components/sections/Projects").then((mod) => ({
      default: mod.Projects,
    })),
  {
    loading: () => (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-accent-primary" />
      </div>
    ),
  }
);

const Experience = dynamic(
  () =>
    import("@/components/sections/Experience").then((mod) => ({
      default: mod.Experience,
    })),
  {
    loading: () => (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-accent-primary" />
      </div>
    ),
  }
);

const Contact = dynamic(
  () =>
    import("@/components/sections/Contact").then((mod) => ({
      default: mod.Contact,
    })),
  {
    loading: () => (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-accent-primary" />
      </div>
    ),
  }
);

/**
 * Homepage - Single-page portfolio
 * Features all sections in one smooth scrolling experience
 */
export default function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
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
      )}
    </>
  );
}
