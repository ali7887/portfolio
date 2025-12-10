'use client';

import { useState, useEffect } from 'react';
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

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  /* Scroll detection */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll on mobile menu */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',

          /* ✨ Premium Glassmorphism */
          'before:absolute before:inset-0 before:backdrop-blur-xl before:bg-white/10 before:border-b before:border-white/20 before:shadow-[0_8px_32px_rgba(31,38,135,0.1)] before:z-[-1]',

          /* Height Changes based on scroll */
          isScrolled ? 'py-3' : 'py-6'
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link
              href="/"
              className={cn(
                'font-bold text-gradient-primary transition-all duration-500 hover:opacity-80',
                isScrolled ? 'text-lg' : 'text-2xl'
              )}
              aria-label="Ali Kiani - Home"
            >
              Ali Kiani
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 md:gap-8 lg:gap-10">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href || (link.href.startsWith('#') && pathname === '/');

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          const headerOffset = isScrolled ? 60 : 90;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offset = elementPosition + window.pageYOffset - headerOffset;
                          window.scrollTo({ top: offset, behavior: 'smooth' });
                        }
                      }
                    }}
                    className={cn(
                      'relative font-medium transition-all duration-500 tracking-wide',
                      isScrolled ? 'text-sm' : 'text-sm md:text-base',
                      isActive
                        ? 'text-accent-primary'
                        : 'text-gray-700 hover:text-accent-primary'
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-primary"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Icons + Mobile Menu button */}
            <div className="flex items-center gap-3">
              {/* Social icons (desktop) */}
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className={cn(
                      'rounded-lg hidden sm:flex hover:bg-gray-100 transition-all duration-200 text-gray-700 hover:text-accent-primary',
                      'p-2 md:p-3',
                      'shadow-sm hover:shadow-md',
                      'transform hover:scale-110 active:scale-95',
                      isScrolled ? 'p-1.5' : 'p-2'
                    )}
                  >
                    <Icon className={cn(
                      'transition-all duration-500',
                      isScrolled ? 'w-4 h-4' : 'w-5 h-5'
                    )} />
                  </a>
                );
              })}

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                className="p-2 md:p-3 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-100 transition-all duration-200 hover:scale-110 active:scale-95 md:hidden"
              >
                <Menu className="w-6 h-6 text-gray-900" />
              </button>
            </div>

          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 24, stiffness: 190 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white z-50 shadow-2xl md:hidden"
            >
              {/* Close Button */}
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                onClick={closeMenu}
                className="absolute top-6 right-6 w-12 h-12 bg-accent-primary hover:bg-accent-secondary active:bg-accent-primary/90 text-white rounded-xl flex items-center justify-center shadow-md hover:shadow-lg active:shadow-sm transform hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Drawer Content */}
              <nav className="pt-24 px-6 pb-6">
                <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;

                    return (
                      <motion.li
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
                              const el = document.querySelector(link.href);
                              el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }}
                          className={cn(
                            'block py-4 px-4 text-base md:text-lg font-semibold tracking-wide rounded-lg transition-colors',
                            isActive
                              ? 'bg-accent-primary/10 text-accent-primary border-2 border-accent-primary/30'
                              : 'text-gray-900 hover:bg-gray-100'
                          )}
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Social Links */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm md:text-base font-medium text-gray-500 mb-4">Connect</p>
                  <div className="grid grid-cols-5 gap-3">
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
                          className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-accent-primary hover:text-white transition-colors"
                        >
                          <Icon className="w-5 h-5" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
