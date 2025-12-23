"use client";

import { useEffect, useRef } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
}

export default function RevealOnScroll({ children }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}
