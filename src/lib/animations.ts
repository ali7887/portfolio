/**
 * Reusable Framer Motion animation variants
 * Following patterns from .cursorrules
 */

import type { Variants } from 'framer-motion';

/**
 * Standard fade in + slide up animation
 * Used for most entry animations
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

/**
 * Stagger container for animating children sequentially
 * Adds 0.1s delay between each child
 */
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Scale in animation (from 0.9 to 1)
 * Used for cards and modals
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

/**
 * Glow pulse animation for neon effects
 * Subtle pulsing shadow effect
 */
export const glowPulse = {
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
};

/**
 * Hover scale effect (subtle 1.02-1.05)
 * Used for interactive cards
 */
export const hoverScale = {
  scale: 1.02,
  transition: {
    duration: 0.2,
    ease: 'easeOut',
  },
};

/**
 * Tap scale effect
 * Used for buttons and clickable elements
 */
export const tapScale = {
  scale: 0.98,
  transition: {
    duration: 0.1,
  },
};

/**
 * Page entrance animation
 * Full page fade in with stagger
 */
export const pageVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
    },
  },
};

/**
 * Item variants for staggered children
 */
export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

/**
 * Slide in from left
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/**
 * Slide in from right
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/**
 * Fade in only (no movement)
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

