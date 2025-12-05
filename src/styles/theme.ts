/**
 * Theme constants and utilities for Dark Glass UI
 * All color values match the design system in .cursorrules
 */

export const colors = {
  // Background colors
  bgPrimary: '#060810',
  bgSecondary: '#0b1220',
  
  // Glass & Surfaces
  glassBg: 'rgba(255, 255, 255, 0.04)',
  glassBorder: 'rgba(255, 255, 255, 0.08)',
  glassHover: 'rgba(255, 255, 255, 0.06)',
  
  // Accent Colors
  accentPrimary: '#06b6d4',
  accentSecondary: '#7c3aed',
  accentNeon: '#00e5ff',
  
  // Text Colors
  textPrimary: '#e6eef2',
  textSecondary: '#9aa4b2',
  textMuted: '#6b7280',
} as const;

export const gradients = {
  bgGradient: 'linear-gradient(135deg, #060810 0%, #0b1220 100%)',
  accentGradient: 'linear-gradient(135deg, #06b6d4 0%, #00e5ff 100%)',
  purpleGradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
} as const;

export const shadows = {
  glass: '0 8px 32px rgba(0, 0, 0, 0.4)',
  neon: '0 0 20px rgba(0, 229, 255, 0.3)',
  neonStrong: '0 0 30px rgba(0, 229, 255, 0.5)',
  soft: '0 4px 16px rgba(0, 0, 0, 0.2)',
  glassNeon: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 229, 255, 0.1)',
  glassNeonHover: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 229, 255, 0.2)',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const animationDurations = {
  fast: 200,
  normal: 300,
  slow: 600,
} as const;

export const animationDelays = {
  stagger: 100,
  short: 200,
  medium: 400,
  long: 600,
} as const;

/**
 * Animation variants for Framer Motion
 * These match the patterns specified in .cursorrules
 */
export const animationVariants = {
  // Page entrance with stagger
  page: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  },
  
  // Standard item entrance (fade in + slide up)
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  },
  
  // Scale in animation
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  },
  
  // Glow pulse for neon effects
  glowPulse: {
    animate: {
      boxShadow: [
        '0 0 20px rgba(0, 229, 255, 0.3)',
        '0 0 40px rgba(0, 229, 255, 0.5)',
        '0 0 20px rgba(0, 229, 255, 0.3)',
      ],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  
  // Hover scale (subtle)
  hoverScale: {
    scale: 1.02,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  
  // Tap scale
  tapScale: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
} as const;

/**
 * Type exports for theme values
 */
export type ColorKey = keyof typeof colors;
export type GradientKey = keyof typeof gradients;
export type ShadowKey = keyof typeof shadows;
export type BreakpointKey = keyof typeof breakpoints;

