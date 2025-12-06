import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Ali Kiani, Senior Frontend Developer with 10+ years of experience in React, Next.js, and modern web technologies.',
  openGraph: {
    title: 'About | Ali Kiani',
    description:
      'Learn more about Ali Kiani, Senior Frontend Developer with 10+ years of experience.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

