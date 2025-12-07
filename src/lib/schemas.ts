import { z } from 'zod';

/**
 * Contact form validation schema
 * Uses Zod for type-safe validation
 */
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .trim(),
  
  email: z
    .string()
    .email('Invalid email address')
    .min(5, 'Email must be at least 5 characters')
    .trim()
    .toLowerCase(),
  
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must be less than 100 characters')
    .trim(),
  
  message: z
    .string()
    .min(20, 'Message must be at least 20 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .trim(),
  
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-\+\(\)]+$/.test(val),
      'Invalid phone number format'
    ),
});

export type ContactFormData = z.infer<typeof contactSchema>;

