'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Github, Linkedin, Twitter, Send, Loader2 } from 'lucide-react';
import { contactSchema, type ContactFormData } from '@/lib/schemas';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';

/**
 * Contact - Contact form section with validation
 * Features React Hook Form + Zod validation and contact info
 */
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      // TODO: Add API route in next task
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Contact section"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can work together.
          </p>
        </motion.div>

        {/* Two column layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Left: Contact Form */}
          <motion.div variants={fadeInUp}>
            <div className="glass-card p-6 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Name <span className="text-accent-neon">*</span>
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className={cn(
                      'w-full px-4 py-3 rounded-lg',
                      'glass-card border',
                      'bg-white/[0.04] border-white/[0.08]',
                      'text-text-primary placeholder-text-muted',
                      'focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary',
                      'transition-colors',
                      errors.name && 'border-red-500 focus:ring-red-500'
                    )}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Email <span className="text-accent-neon">*</span>
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className={cn(
                      'w-full px-4 py-3 rounded-lg',
                      'glass-card border',
                      'bg-white/[0.04] border-white/[0.08]',
                      'text-text-primary placeholder-text-muted',
                      'focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary',
                      'transition-colors',
                      errors.email && 'border-red-500 focus:ring-red-500'
                    )}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Subject <span className="text-accent-neon">*</span>
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    id="subject"
                    className={cn(
                      'w-full px-4 py-3 rounded-lg',
                      'glass-card border',
                      'bg-white/[0.04] border-white/[0.08]',
                      'text-text-primary placeholder-text-muted',
                      'focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary',
                      'transition-colors',
                      errors.subject && 'border-red-500 focus:ring-red-500'
                    )}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Message <span className="text-accent-neon">*</span>
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={6}
                    className={cn(
                      'w-full px-4 py-3 rounded-lg resize-none',
                      'glass-card border',
                      'bg-white/[0.04] border-white/[0.08]',
                      'text-text-primary placeholder-text-muted',
                      'focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary',
                      'transition-colors',
                      errors.message && 'border-red-500 focus:ring-red-500'
                    )}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                  )}
                </div>

                {/* Success message */}
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400"
                  >
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  whileHover={{ scale: isValid && !isSubmitting ? 1.02 : 1 }}
                  whileTap={{ scale: isValid && !isSubmitting ? 0.98 : 1 }}
                  className={cn(
                    'w-full neomorph-button px-6 py-3 rounded-lg',
                    'flex items-center justify-center gap-2',
                    'text-white font-semibold',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    'transition-opacity',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary'
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-6">
            {/* Email card */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="glass-card p-3 rounded-lg bg-accent-primary/10 border-accent-primary/30">
                  <Mail className="w-6 h-6 text-accent-neon" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">Email</h3>
                  <a
                    href="mailto:ali@alikiani.co"
                    className="text-accent-primary hover:text-accent-neon transition-colors"
                  >
                    ali@alikiani.co
                  </a>
                </div>
              </div>
            </div>

            {/* Location card */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="glass-card p-3 rounded-lg bg-accent-primary/10 border-accent-primary/30">
                  <MapPin className="w-6 h-6 text-accent-neon" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">Location</h3>
                  <p className="text-text-secondary">Available Worldwide (Remote)</p>
                </div>
              </div>
            </div>

            {/* Response time card */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="glass-card p-3 rounded-lg bg-accent-primary/10 border-accent-primary/30">
                  <Clock className="w-6 h-6 text-accent-neon" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    Response Time
                  </h3>
                  <p className="text-text-secondary">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Connect</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/alikiani"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card p-3 rounded-lg hover:bg-white/[0.08] hover:border-accent-neon/50 transition-all text-text-secondary hover:text-accent-neon"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/alikiani"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card p-3 rounded-lg hover:bg-white/[0.08] hover:border-accent-neon/50 transition-all text-text-secondary hover:text-accent-neon"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://twitter.com/alikiani"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card p-3 rounded-lg hover:bg-white/[0.08] hover:border-accent-neon/50 transition-all text-text-secondary hover:text-accent-neon"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:ali@alikiani.co"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card p-3 rounded-lg hover:bg-white/[0.08] hover:border-accent-neon/50 transition-all text-text-secondary hover:text-accent-neon"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

