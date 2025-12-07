'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * ThemeToggle - Toggle between dark and light themes
 * Persists preference to localStorage
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDark(shouldBeDark);
    
    // Update both html and body classes
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Update both html and body classes
    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
    
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="glass-card p-2 rounded-lg"
        disabled
      >
        <Sun className="w-5 h-5 text-text-secondary" />
      </button>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'glass-card p-2 rounded-lg',
        'hover:bg-white/[0.06]',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary'
      )}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-accent-neon" />
        ) : (
          <Moon className="w-5 h-5 text-accent-primary" />
        )}
      </motion.div>
    </motion.button>
  );
}

