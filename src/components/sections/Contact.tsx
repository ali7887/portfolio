"use client";

import { useState, useCallback, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { contactSchema } from "@/lib/schemas";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

/**
 * Validate EmailJS environment variables
 */
const validateEmailJSConfig = () => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.error("EmailJS Configuration Error:", {
      serviceId: serviceId ? "✓ Present" : "✗ Missing",
      templateId: templateId ? "✓ Present" : "✗ Missing",
      publicKey: publicKey ? "✓ Present" : "✗ Missing",
    });
    return false;
  }

  return true;
};

/**
 * Contact - Contact form section with validation
 * Simplified form using React state instead of react-hook-form
 */
export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      // Clear error when typing
      setErrors((prev) => {
        if (prev[name]) {
          return { ...prev, [name]: "" };
        }
        return prev;
      });
      // Clear success/error messages when user types
      setSubmitSuccess(false);
      setSubmitError(null);
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setErrors({});
      setSubmitError(null);
      setSubmitSuccess(false);

      // Validate with Zod
      const result = contactSchema.safeParse(formData);

      if (!result.success) {
        const newErrors: Record<string, string> = {};
        result.error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        return;
      }

      // Validate EmailJS configuration
      if (!validateEmailJSConfig()) {
        setSubmitError(
          "Email service is not configured. Please contact me directly at ali@alikiani.co"
        );
        return;
      }

      setIsSubmitting(true);

      try {
        // Get environment variables
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        // Double check they exist (TypeScript safety)
        if (!serviceId || !templateId || !publicKey) {
          throw new Error("EmailJS configuration is missing");
        }

        // Prepare template parameters for EmailJS
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "New Contact Form Message",
          message: formData.message,
        };

        console.log("Attempting to send email with EmailJS...");
        console.log("Service ID:", serviceId);
        console.log("Template ID:", templateId);

        // Send email using EmailJS
        const response = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        );

        console.log("Email sent successfully:", response);

        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } catch (error: any) {
        console.error("Error sending email:", error);
        console.error("Error details:", {
          message: error?.message || "Unknown error",
          text: error?.text || "No error text",
          status: error?.status || "No status",
        });

        // More specific error message
        let errorMessage = "Failed to send message. ";

        if (error?.text) {
          errorMessage += `Error: ${error.text}. `;
        } else if (error?.message) {
          errorMessage += `Error: ${error.message}. `;
        }

        errorMessage += "Please try again or contact me directly.";

        setSubmitError(errorMessage);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  return (
    <section
      id="contact"
      className="px-6 py-12 sm:px-8 md:py-16 lg:py-20"
      aria-label="Contact section"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center md:mb-10 lg:mb-12"
        >
          <h2 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 md:mb-4 md:text-3xl lg:text-4xl">
            Lets Start a Project
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            Have a project in mind? Let&apos;s discuss how we can work together.
          </p>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            I'm open to remote work worldwide, <span className="font-semibold text-accent-neon">any time...</span>
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
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                {/* Name field */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700 md:mb-3 md:text-base"
                  >
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-lg border border-gray-300 px-4 py-3 md:px-5 md:py-4",
                      "focus:border-transparent focus:ring-2 focus:ring-accent-primary",
                      "transition-colors",
                      errors.name && "border-red-500 focus:ring-red-500"
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
                    className="mb-2 block text-sm font-medium text-gray-700 md:mb-3 md:text-base"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-lg border border-gray-300 px-4 py-3 md:px-5 md:py-4",
                      "focus:border-transparent focus:ring-2 focus:ring-accent-primary",
                      "transition-colors",
                      errors.email && "border-red-500 focus:ring-red-500"
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
                    className="mb-2 block text-sm font-medium text-gray-700 md:mb-3 md:text-base"
                  >
                    Subject <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-lg border border-gray-300 px-4 py-3 md:px-5 md:py-4",
                      "focus:border-transparent focus:ring-2 focus:ring-accent-primary",
                      "transition-colors",
                      errors.subject && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="Project inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700 md:mb-3 md:text-base"
                  >
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={cn(
                      "w-full resize-none rounded-lg border border-gray-300 px-4 py-3",
                      "focus:border-transparent focus:ring-2 focus:ring-accent-primary",
                      "transition-colors",
                      errors.message && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
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
                    className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-700 shadow-sm"
                  >
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}

                {/* Error message */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700 shadow-sm"
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
                    "w-full rounded-xl bg-accent-primary px-6 py-3 font-semibold text-white hover:bg-accent-secondary active:bg-accent-primary/90 md:px-8 md:py-4",
                    "shadow-md hover:shadow-lg active:shadow-sm",
                    "transform hover:-translate-y-0.5 active:translate-y-0",
                    "transition-all duration-200",
                    "disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50",
                    "flex items-center justify-center gap-2",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
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
