/**
 * Shared TypeScript types and interfaces
 */

export interface PersonalInfo {
  name: string;
  role: string;
  experience: string;
  location: string;
  email: string;
  specialties: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    tools: string[];
    specializations: string[];
  };
  values: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tool' | 'specialization';
  icon?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  tech: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number; // 1-5
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

