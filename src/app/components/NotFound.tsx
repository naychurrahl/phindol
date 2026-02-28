import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Page Not Found</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          <Home className="mr-2" size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
