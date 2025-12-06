/**
 * Static data and constants
 * Following the structure from .cursorrules
 */

import type { PersonalInfo, Project, Skill, Experience } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Ali Kiani',
  role: 'Senior Frontend Developer',
  experience: '10+ years',
  location: 'Available Worldwide (Remote)',
  email: 'ali@alikiani.co',

  specialties: [
    'React & Next.js Architecture',
    'TypeScript & Modern JavaScript',
    'Performance Optimization',
    'AI/LLM Integration',
    'Web3 & Blockchain',
    'UI/UX Design Systems',
    'Accessibility (WCAG AA)',
    'Node.js Backend Development',
  ],

  techStack: {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Node.js', 'Express.js', 'Nest.js', 'PostgreSQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'Vercel', 'AWS', 'Figma'],
    specializations: ['Web3/ethers.js', 'AI/LangChain', 'Chrome Extensions'],
  },

  values: [
    'Write clean, maintainable code',
    'Performance is a feature',
    'Accessibility is non-negotiable',
    'User experience above all',
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Rest Reminder',
    description:
      'Productivity-focused Chrome extension that reminds users to take breaks with customizable intervals and notification system.',
    tech: ['React', 'TypeScript', 'Chrome Extensions API', 'Tailwind CSS'],
    github: 'https://github.com/alikiani/rest-reminder',
    live: 'https://chrome.google.com/webstore/...',
    image: '/images/projects/rest-reminder.png',
    featured: true,
  },
  {
    id: 2,
    title: 'AliKiani.co Portfolio',
    description:
      'Modern portfolio website built with cutting-edge web technologies featuring dark glass UI theme and advanced animations.',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind v4', 'Framer Motion'],
    github: 'https://github.com/alikiani/portfolio',
    live: 'https://alikiani.co',
    image: '/images/projects/portfolio.png',
    featured: true,
  },
  {
    id: 3,
    title: 'Mini Notes',
    description:
      'Minimalist note-taking PWA with offline support, markdown rendering, and local storage persistence.',
    tech: ['React', 'PWA', 'localStorage', 'Markdown', 'Tailwind CSS'],
    github: 'https://github.com/alikiani/mini-notes',
    live: 'https://mini-notes.alikiani.co',
    image: '/images/projects/mini-notes.png',
    featured: false,
  },
  {
    id: 4,
    title: 'DApp Wallet Connect',
    description:
      'Web3 integration demo showcasing blockchain wallet connections and smart contract interactions.',
    tech: ['React', 'ethers.js', 'Wagmi', 'RainbowKit', 'Solidity'],
    github: 'https://github.com/alikiani/dapp-demo',
    live: 'https://dapp.alikiani.co',
    image: '/images/projects/dapp.png',
    featured: true,
  },
];

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/alikiani',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/alikiani',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/alikiani',
    icon: 'twitter',
  },
  {
    name: 'Email',
    url: 'mailto:ali@alikiani.co',
    icon: 'mail',
  },
] as const;

export const SKILLS: Skill[] = [
  {
    name: 'Next.js',
    level: 95,
    category: 'frontend',
  },
  {
    name: 'React',
    level: 95,
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    level: 90,
    category: 'frontend',
  },
  {
    name: 'Node.js',
    level: 85,
    category: 'backend',
  },
  {
    name: 'Express.js',
    level: 85,
    category: 'backend',
  },
  {
    name: 'JavaScript',
    level: 95,
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    level: 90,
    category: 'tool',
  },
  {
    name: 'MongoDB',
    level: 80,
    category: 'tool',
  },
  {
    name: 'PostgreSQL',
    level: 80,
    category: 'tool',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: 'IT Admin & Manager',
    company: 'TEDA Medical Engineering Company',
    startDate: '2010',
    endDate: '2020',
    current: false,
    description: ['Managed IT infrastructure and technical systems'],
    tech: [],
  },
  {
    id: 2,
    role: 'Freelance Frontend Developer',
    company: 'Self-employed',
    startDate: '2020',
    current: true,
    description: [
      'Building modern web applications for clients worldwide',
      'Specializing in React, Next.js, and TypeScript',
    ],
    tech: ['React', 'Next.js', 'TypeScript'],
  },
];

