'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/alikiani',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/alikiani',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/alikiani',
    icon: Twitter,
  },
  {
    name: 'Email',
    url: 'mailto:ali@alikiani.co',
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient-primary">
              Ali Kiani
            </h3>
            <p className="text-sm text-text-secondary max-w-xs">
              Senior Frontend Developer building exceptional web experiences
              with modern technologies.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent-neon transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
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
                      'glass-card p-3 rounded-lg',
                      'hover:bg-white/[0.08] hover:border-accent-neon/50',
                      'transition-all duration-200',
                      'text-text-secondary hover:text-accent-neon'
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
        <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            © {currentYear} Ali Kiani. All rights reserved.
          </p>
          <p className="text-sm text-text-muted flex items-center gap-2">
            Built with{' '}
            <span className="text-accent-neon font-semibold">Next.js</span> +{' '}
            <span className="text-accent-neon font-semibold">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

