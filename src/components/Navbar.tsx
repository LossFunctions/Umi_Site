import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Experience', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`
          flex items-center justify-between gap-8
          px-4 md:px-6 py-3
          rounded-pill
          transition-all duration-300
          ${isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-medium'
            : 'bg-white/70 backdrop-blur-sm shadow-soft'
          }
        `}
      >
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-bold text-text-primary hover:text-accent-blue transition-colors"
        >
          UH
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors rounded-pill hover:bg-gray-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex btn-pill btn-pill-primary text-sm"
        >
          Get in Contact
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white/95 backdrop-blur-md md:hidden z-40">
          <ul className="flex flex-col items-center gap-4 pt-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-lg font-medium text-text-primary hover:text-accent-blue transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a
                href="#contact"
                className="btn-pill btn-pill-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
