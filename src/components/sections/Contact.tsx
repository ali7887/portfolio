'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { contactSchema } from '@/lib/schemas';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';

/**
 * Contact - Contact form section with validation
 * Simplified form using React state instead of react-hook-form
 */
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    // Clear success/error messages when user types
    if (submitSuccess) setSubmitSuccess(false);
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitError(null);
    setSubmitSuccess(false);

    // Validate with Zod
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          newErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'New Contact Form Message',
        message: formData.message,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log('Email sent successfully:', response);

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError('Failed to send message. Please try again or email me directly.');
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can work together.
          </p>
        </motion.div>

        {/* Centered Contact Form */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center"
        >
          <motion.div variants={fadeInUp} className="w-full max-w-2xl">
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={cn(
                      'w-full px-4 py-3 border border-gray-300 rounded-lg',
                      'focus:ring-2 focus:ring-accent-primary focus:border-transparent',
                      'transition-colors',
                      errors.name && 'border-red-500 focus:ring-red-500'
                    )}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={cn(
                      'w-full px-4 py-3 border border-gray-300 rounded-lg',
                      'focus:ring-2 focus:ring-accent-primary focus:border-transparent',
                      'transition-colors',
                      errors.email && 'border-red-500 focus:ring-red-500'
                    )}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={cn(
                      'w-full px-4 py-3 border border-gray-300 rounded-lg',
                      'focus:ring-2 focus:ring-accent-primary focus:border-transparent',
                      'transition-colors',
                      errors.subject && 'border-red-500 focus:ring-red-500'
                    )}
                    placeholder="Project inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={cn(
                      'w-full px-4 py-3 border border-gray-300 rounded-lg resize-none',
                      'focus:ring-2 focus:ring-accent-primary focus:border-transparent',
                      'transition-colors',
                      errors.message && 'border-red-500 focus:ring-red-500'
                    )}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    {formData.message.length}/1000 characters
                  </p>
                </div>

                {/* Success message */}
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-600"
                  >
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}

                {/* Error message */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-600"
                  >
                    {submitError}
                  </motion.div>
                )}

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={cn(
                    'w-full px-8 py-3 bg-accent-primary text-white rounded-lg font-semibold',
                    'hover:bg-accent-secondary transition-colors',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    'flex items-center justify-center gap-2',
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
        </motion.div>
      </div>
    </section>
  );
}
