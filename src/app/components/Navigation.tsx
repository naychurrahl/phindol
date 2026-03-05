import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './ui/logo';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { 
      path: '/#services', 
      label: 'Services'/* ,
      submenu: [
        { path: '/services/life-insurance', label: 'Life Insurance' },
        { path: '/services/corporate-insurance', label: 'Corporate Insurance' },
        { path: '/services/claims-support', label: 'Claims & Support' },
      ] */
    },
    { path: '/gallery', label: 'Gallery' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {/*<span className="text-2xl font-bold text-blue-600">Phindol</span>
            <span className="text-2xl text-gray-700 ml-1">Insurance</span>*/}
            <Logo src="/logo.png" alt="Phindol Insurance Logo" size={40} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.submenu ? (
                  <>
                    <button
                      className={`${
                        isActive(link.path)
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      } transition-colors`}
                    >
                      {link.label}
                    </button>
                    <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.path}
                          to={sublink.path}
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`${
                      isActive(link.path)
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    } transition-colors`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.submenu ? (
                  <>
                    <div className="px-4 py-2 text-gray-700 font-medium">
                      {link.label}
                    </div>
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.path}
                        to={sublink.path}
                        className="block px-8 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`block px-4 py-2 ${
                      isActive(link.path)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="block mx-4 mt-4 text-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}