'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Instagram, Twitter, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/ali7887', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alikiani78/', icon: Linkedin },
  { name: 'Instagram', url: 'https://www.instagram.com/alikiani.design', icon: Instagram },
  { name: 'Twitter', url: 'https://x.com/alikiani78', icon: Twitter },
  { name: 'Email', url: 'mailto:alikiani78@gmail.com', icon: Mail },
];

/**
 * Header - Main navigation component
 * Features glass backdrop, mobile menu, and theme toggle
 */
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'backdrop-blur-xl border-b',
        'bg-white/60 border-white/30',
        'transition-all duration-300'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-gradient-primary hover:opacity-80 transition-opacity"
            aria-label="Ali Kiani - Home"
          >
            Ali Kiani
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href.startsWith('#') && pathname === '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        const headerOffset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth',
                        });
                      }
                    }
                  }}
                  className={cn(
                    'relative text-sm font-medium transition-colors',
                    isActive
                      ? 'text-accent-neon'
                      : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-neon"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Social Icons */}
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2 rounded-lg hover:bg-white/[0.08] transition-colors text-text-secondary hover:text-accent-primary hidden sm:flex"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            }            )}

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="glass-card p-2 rounded-lg hover:bg-white/[0.06] transition-colors md:hidden"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-text-primary" />
              ) : (
                <Menu className="w-5 h-5 text-text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-16 right-0 bottom-0 w-64 glass-card border-l border-white/[0.08] z-50 md:hidden"
            >
              <nav className="flex flex-col p-6 gap-4">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          closeMenu();
                          if (link.href.startsWith('#')) {
                            e.preventDefault();
                            const element = document.querySelector(link.href);
                            element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                        className={cn(
                          'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                          isActive
                            ? 'bg-white/[0.08] text-accent-neon'
                            : 'text-text-secondary hover:bg-white/[0.06] hover:text-text-primary'
                        )}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* Social Icons in Mobile Menu */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: navLinks.length * 0.1 }}
                        className="p-2 rounded-lg hover:bg-white/[0.08] transition-colors text-text-secondary hover:text-accent-primary"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

