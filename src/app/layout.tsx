import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeScript } from '@/components/shared/ThemeScript';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'Ali Kiani - Senior Frontend Developer',
    template: '%s | Ali Kiani',
  },
  description:
    'Senior Frontend Developer with 10+ years experience in React, Next.js, TypeScript, and modern web technologies. Specialized in performance optimization and AI integration.',
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Web3',
    'AI Integration',
    'Performance Optimization',
    'Web Development',
  ],
  authors: [{ name: 'Ali Kiani', url: 'https://alikiani.co' }],
  creator: 'Ali Kiani',
  publisher: 'Ali Kiani',
  metadataBase: new URL('https://alikiani.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alikiani.co',
    title: 'Ali Kiani - Senior Frontend Developer',
    description:
      'Senior Frontend Developer specializing in React, Next.js, and modern web technologies',
    siteName: 'Ali Kiani Portfolio',
    images: [
      {
        url: 'https://alikiani.co/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ali Kiani Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Kiani - Senior Frontend Developer',
    description:
      'Senior Frontend Developer specializing in React, Next.js, and modern web technologies',
    images: ['https://alikiani.co/og-image.png'],
    creator: '@alikiani',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root layout component
 * Provides global structure, metadata, and styling
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <ThemeScript />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Theme color */}
        <meta name="theme-color" content="#060810" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {/* Google Analytics placeholder - uncomment when ready */}
        {/* {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )} */}
      </body>
    </html>
  );
}

