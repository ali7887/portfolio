# Ali Kiani Portfolio

Production-ready personal portfolio website for Ali Kiani, Senior Frontend Developer.

## 🚀 Tech Stack

- **Next.js 15** with App Router
- **TypeScript** (strict mode)
- **React 19**
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## 📋 Prerequisites

- Node.js 18+ 
- npm 9+ (or yarn/pnpm)

## 🛠️ Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

This project uses a **Dark Glass UI** theme with:

- Glassmorphism effects (backdrop blur + translucent backgrounds)
- Neon accent colors (cyan #06b6d4, purple #7c3aed)
- Neumorphic buttons for primary CTAs
- Smooth Framer Motion animations
- Mobile-first responsive design

## 📁 Project Structure

```
ali-kiani-portfolio/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/        # React components
│   │   ├── layout/       # Header, Footer
│   │   ├── sections/     # Page sections (Hero, Projects, etc.)
│   │   └── shared/       # Reusable components
│   ├── lib/              # Utilities, types, animations
│   └── styles/           # Global CSS and theme
├── public/               # Static assets
└── ...config files
```

## 🎯 Phase 1 Status

✅ **Completed:**
- Project initialization and configuration
- Dark Glass UI theme system
- Root layout with SEO metadata
- Header with navigation and mobile menu
- Footer with social links
- Theme toggle (dark/light)
- Hero section with glass card design
- Framer Motion animations

🚧 **Coming in Phase 2:**
- Projects section with grid and modal
- About page with timeline
- Skills section with animated bars
- Experience timeline
- Contact form with API route

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_SITE_URL=https://alikiani.co
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Optional: Google Analytics
CONTACT_EMAIL_TO=ali@alikiani.co
RESEND_API_KEY=re_xxxxxxxxxxxx  # For contact form (Phase 3)
```

## 📝 Code Quality

- **TypeScript strict mode** enabled
- **ESLint** with accessibility plugins
- **Prettier** for consistent formatting
- **Husky** for pre-commit hooks (optional)

## 🚢 Deployment

This project is optimized for **Vercel** deployment:

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

## 📄 License

© 2024 Ali Kiani. All rights reserved.

## 🙏 Acknowledgments

Built with modern web technologies and best practices for performance, accessibility, and SEO.

