'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/ali7887',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alikiani78/',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    url: 'https://x.com/alikiani78',
    icon: Twitter,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/alikiani.design',
    icon: Instagram,
  },
  {
    name: 'Email',
    url: 'mailto:alikiani78@gmail.com',
    icon: Mail,
  },
];

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

/**
 * Footer - Site footer with social links and copyright
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-card border-t border-white/[0.08] mt-20">
      <div className="container mx-auto px-6 sm:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-12">
          {/* Brand section */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-gradient-primary tracking-tight">
              Ali Kiani
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xs">
              Senior Frontend Developer building exceptional web experiences
              with modern technologies.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-4 tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-3 md:space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm md:text-base text-gray-500 hover:text-gray-900 transition-colors leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-4 tracking-tight">
              Connect
            </h4>
            <div className="flex gap-4 md:gap-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      'bg-white p-3 rounded-lg',
                      'border border-gray-200',
                      'shadow-sm hover:shadow-md',
                      'hover:bg-gray-50',
                      'hover:border-accent-neon/50',
                      'transform hover:scale-110 active:scale-95',
                      'transition-all duration-200',
                      'text-gray-600 hover:text-accent-neon'
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-8 md:pt-10 flex flex-col sm:flex-row justify-between items-center gap-6 md:gap-8">
          <p className="text-sm md:text-base text-gray-500">
            © {currentYear} Ali Kiani. All rights reserved.
          </p>
          <p className="text-sm md:text-base text-gray-500 flex items-center gap-2">
            Built with{' '}
            <span className="text-accent-neon font-semibold">Next.js</span> +{' '}
            <span className="text-accent-neon font-semibold">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

