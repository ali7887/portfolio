import Link from 'next/link';
import { Home } from 'lucide-react';

/**
 * Custom 404 Not Found page
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="glass-card p-12 text-center max-w-md">
        <h1 className="text-6xl font-bold text-gradient-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-text-secondary mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="neomorph-button px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

