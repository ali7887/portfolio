 'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Instagram, Twitter, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { id: 'home', name: 'Home', href: '#home' },
  { id: 'projects', name: 'Projects', href: '#projects' },
  { id: 'contact', name: 'Contact', href: '#contact' },
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
  const [activeSection, setActiveSection] = useState('home');

  /* Scroll detection for header style */
  useEffect(() => {
    const handleScroll = () => {
      // Trigger at 10px scroll (very sensitive)
      setIsScrolled(window.scrollY > 10);
    };
    
    // Check immediately
    handleScroll();
    
    // Listen to scroll with passive for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Active section detection based on scroll position */
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      // Find which section is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    handleScroll(); // Check immediately
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll on mobile menu and handle escape key */
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
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
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
          isScrolled 
            ? 'bg-white/30 backdrop-blur-2xl backdrop-saturate-200 shadow-xl shadow-black/5 border-b border-white/40' 
            : 'bg-white/20 backdrop-blur-xl backdrop-saturate-150 border-b border-white/20'
        )}
        style={{
          backdropFilter: isScrolled 
            ? 'blur(24px) saturate(200%) brightness(110%)' 
            : 'blur(16px) saturate(150%)',
          WebkitBackdropFilter: isScrolled 
            ? 'blur(24px) saturate(200%) brightness(110%)' 
            : 'blur(16px) saturate(150%)',
        }}
      >
        {/* Glass overlay for enhanced effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-transparent pointer-events-none"
          style={{
            backdropFilter: 'blur(1px)',
            WebkitBackdropFilter: 'blur(1px)',
          }}
        />
        
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link
              href="/"
              className={cn(
                'text-slate-300 transition-all duration-500 hover:text-blue-700',
                isScrolled ? 'text-lg' : 'text-xl md:text-2xl'
              )}
              style={{
                textShadow: '0 2px 4px rgba(255, 255, 255, 0.9)',
              }}
              aria-label="Ali Kiani - Home"
            >
              <>Hello World!</>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 md:gap-8 lg:gap-10">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        const headerOffset = isScrolled ? 60 : 90;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offset = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({ top: offset, behavior: 'smooth' });
                      }
                    }}
                    className={cn(
                      'relative font-medium transition-all duration-200 tracking-wide pb-1',
                      isScrolled ? 'text-sm' : 'text-sm md:text-base',
                      isActive
                        ? 'text-blue-600'
                        : 'text-gray-900 hover:text-blue-600'
                    )}
                    style={{
                      textShadow: '0 1px 3px rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    {link.name}
                    <span
                      className={cn(
                        'absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 transition-all duration-200',
                        isActive
                          ? 'opacity-100 scale-x-100'
                          : 'opacity-0 scale-x-0'
                      )}
                    />
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
                      'rounded-lg hidden sm:flex hover:bg-white/50 transition-all duration-200 text-gray-900 hover:text-blue-600',
                      'p-2 md:p-3',
                      'shadow-sm hover:shadow-md',
                      'transform hover:scale-110 active:scale-95',
                      isScrolled ? 'p-1.5' : 'p-2'
                    )}
                    style={{
                      textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
                    }}
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
                className="md:hidden p-2 text-gray-900 hover:text-blue-600 transition-colors relative z-50"
                style={{
                  textShadow: '0 1px 3px rgba(255, 255, 255, 0.8)',
                }}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Glassmorphic Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 md:hidden transition-all duration-300"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
              }}
              aria-hidden="true"
            />

            {/* Glassmorphic Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 24, stiffness: 190 }}
              className={cn(
                'fixed top-0 right-0 bottom-0 z-50 md:hidden',
                'w-[280px] sm:w-[320px]',
                'bg-white/25 backdrop-blur-2xl backdrop-saturate-200',
                'border-l border-white/40',
                'shadow-2xl shadow-black/10'
              )}
              style={{
                backdropFilter: 'blur(24px) saturate(200%) brightness(110%)',
                WebkitBackdropFilter: 'blur(24px) saturate(200%) brightness(110%)',
              }}
            >
              {/* Glass overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-transparent pointer-events-none"
                style={{
                  backdropFilter: 'blur(1px)',
                  WebkitBackdropFilter: 'blur(1px)',
                }}
              />
              
              {/* Close Button */}
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                onClick={closeMenu}
                className="absolute top-6 right-6 w-10 h-10 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-gray-900 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg active:shadow-sm transform hover:scale-110 active:scale-95 transition-all duration-200 z-20"
                style={{
                  textShadow: '0 1px 3px rgba(255, 255, 255, 0.9)',
                }}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Drawer Content */}
              <nav className="relative z-10 h-full flex flex-col pt-24 px-6 pb-6">
                <ul className="space-y-2 mb-8">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.id;

                    return (
                      <motion.li
                        key={link.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            closeMenu();
                            const el = document.querySelector(link.href);
                            if (el) {
                              const headerOffset = 80;
                              const elementPosition = el.getBoundingClientRect().top;
                              const offset = elementPosition + window.pageYOffset - headerOffset;
                              window.scrollTo({ top: offset, behavior: 'smooth' });
                            }
                          }}
                          className={cn(
                            'block py-3 px-4 text-base font-medium tracking-wide rounded-lg transition-all',
                            isActive
                              ? 'bg-white/40 text-blue-600 ring-2 ring-blue-400/50'
                              : 'text-gray-900 hover:text-blue-600 hover:bg-white/30'
                          )}
                          style={{
                            textShadow: '0 1px 3px rgba(255, 255, 255, 0.9)',
                          }}
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Social Links */}
                <div className="mt-auto pt-6 border-t border-white/40">
                  <p className="text-sm font-medium text-gray-900 mb-4" style={{ textShadow: '0 1px 3px rgba(255, 255, 255, 0.9)' }}>
                    Connect
                  </p>
                  <div className="flex items-center justify-center gap-4">
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
                          className="w-10 h-10 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-900 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
                          style={{
                            textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
                          }}
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
