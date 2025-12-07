import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode colors (updated)
        'bg-primary': '#0B1120',
        'bg-secondary': '#111827',
        'bg-card': '#1F2937',
        // Glass & surfaces
        'glass-bg': 'rgba(255, 255, 255, 0.04)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
        'glass-hover': 'rgba(255, 255, 255, 0.06)',
        // Accent colors
        'accent-primary': '#38BDF8',
        'accent-secondary': '#0EA5E9',
        'accent-neon': '#00e5ff',
        // Text colors
        'text-primary': '#E2E8F0',
        'text-secondary': '#94A3B8',
        'text-muted': '#6b7280',
        // Light mode colors
        light: {
          'bg-primary': '#F8FAFC',
          'bg-secondary': '#FFFFFF',
          'bg-card': '#FFFFFF',
          'accent-primary': '#0284C7',
          'accent-secondary': '#0369A1',
          'text-primary': '#334155',
          'text-secondary': '#64748B',
          'border': '#E2E8F0',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #060810 0%, #0b1220 100%)',
        'gradient-accent': 'linear-gradient(135deg, #06b6d4 0%, #00e5ff 100%)',
        'gradient-purple': 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
        // Light mode gradients
        'gradient-primary-light': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        'gradient-accent-light': 'linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.4)',
        neon: '0 0 20px rgba(0, 229, 255, 0.3)',
        'neon-strong': '0 0 30px rgba(0, 229, 255, 0.5)',
        soft: '0 4px 16px rgba(0, 0, 0, 0.2)',
        'glass-neon': '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 229, 255, 0.1)',
        'glass-neon-hover': '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 229, 255, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 229, 255, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
};

export default config;

