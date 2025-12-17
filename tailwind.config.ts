import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light mode colors only
        "bg-primary": "#F8FAFC",
        "bg-secondary": "#FFFFFF",
        "bg-card": "#FFFFFF",
        // Glass & surfaces
        "glass-bg": "rgba(15, 23, 42, 0.03)",
        "glass-border": "rgba(15, 23, 42, 0.08)",
        "glass-hover": "rgba(15, 23, 42, 0.05)",
        // Accent colors
        "accent-primary": "#0284C7",
        "accent-secondary": "#0369A1",
        "accent-neon": "#0284C7",
        // Text colors
        "text-primary": "#334155",
        "text-secondary": "#64748B",
        "text-muted": "#64748b",
        border: "#E2E8F0",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        "gradient-accent": "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
        "gradient-purple": "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.4)",
        neon: "0 0 20px rgba(0, 229, 255, 0.3)",
        "neon-strong": "0 0 30px rgba(0, 229, 255, 0.5)",
        soft: "0 4px 16px rgba(0, 0, 0, 0.2)",
        "glass-neon":
          "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 229, 255, 0.1)",
        "glass-neon-hover":
          "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 229, 255, 0.2)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        "loading-bar": "loadingBar 1.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 229, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 229, 255, 0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        loadingBar: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(300%)" },
        },
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
    },
  },
  plugins: [],
};

export default config;
