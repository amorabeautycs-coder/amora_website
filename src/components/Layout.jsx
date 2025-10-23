import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Helmet } from 'react-helmet-async';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', url: '/', ariaLabel: 'Go to home page' },
    { name: 'Products', url: '/products', ariaLabel: 'Browse our products' },
    { name: 'About', url: '/about', ariaLabel: 'Learn about Amora' },
    { name: 'FAQ', url: '/faq', ariaLabel: 'Frequently asked questions' },
    { name: 'Contact', url: '/contact', ariaLabel: 'Contact us' },
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <a
        href="#main-content"
        className="skip-link focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
      >
        Skip to main content
      </a>

      {/* Header - COMPACT LUXURY LAYOUT (120-140px total height) */}
      <header
        className={`sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-gold/10 transition-all duration-300 ease-in-out ${
          isScrollingDown ? '-translate-y-full' : 'translate-y-0'
        } ${
          isScrolled
            ? 'shadow-[0_2px_20px_rgba(0,0,0,0.03)]'
            : ''
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-8 py-4 md:py-5"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Desktop: Logo left, Nav center-right */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Logo - Top Left */}
            <Link
              to="/"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="group focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-sm transition-all duration-300"
              aria-label="Amora by Organic Beauty - Return to homepage"
            >
              {/* Logo - PNG with advanced background removal - BIGGER */}
              <img
                src="/images/logo.png"
                alt="Amora by Organic Beauty"
                className={`transition-all duration-300 ease-out group-hover:brightness-110 group-hover:scale-[1.02] ${
                  isScrolled
                    ? 'h-20 md:h-24'
                    : 'h-24 md:h-28'
                }`}
                style={{
                  width: 'auto',
                  mixBlendMode: 'darken',
                  filter: 'contrast(1.1) brightness(1.05)'
                }}
              />
            </Link>

            {/* Desktop Navigation - Right side */}
            <div className="flex items-center gap-8 md:gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  className={`group text-sm md:text-base uppercase tracking-[0.15em] font-medium transition-all duration-300 relative py-2 focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-sm ${
                    location.pathname === link.url
                      ? 'text-navy'
                      : 'text-navy/70 hover:text-navy'
                  }`}
                  aria-label={link.ariaLabel}
                  aria-current={location.pathname === link.url ? 'page' : undefined}
                >
                  {link.name}

                  {/* Active indicator - gold bottom border */}
                  {location.pathname === link.url ? (
                    <span
                      className="absolute left-0 bottom-0 w-full h-[2px] bg-gold"
                      aria-hidden="true"
                    />
                  ) : (
                    /* Hover underline - slides in from left */
                    <span
                      className="absolute left-0 bottom-0 h-[2px] bg-gold w-0 group-hover:w-full transition-all duration-300 ease-in-out"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Layout - Logo left, Hamburger right */}
          <div className="lg:hidden flex items-center justify-between">
            {/* Logo - Mobile */}
            <Link
              to="/"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="group focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-sm transition-all duration-300"
              aria-label="Amora by Organic Beauty - Return to homepage"
            >
              <img
                src="/images/logo.png"
                alt="Amora by Organic Beauty"
                className="h-16 w-auto transition-all duration-300 group-hover:brightness-110"
                style={{
                  mixBlendMode: 'darken',
                  filter: 'contrast(1.1) brightness(1.05)'
                }}
              />
            </Link>

            {/* Hamburger menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-sm hover:bg-beige/30 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-navy" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-navy" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div
              id="mobile-menu"
              className="lg:hidden pb-6 border-t border-gold/10"
              role="menu"
            >
              <div className="flex flex-col items-center space-y-1 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.url}
                    className={`block px-6 py-3 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold rounded-sm ${
                      location.pathname === link.url ? 'text-gold' : 'text-navy/70'
                    }`}
                    role="menuitem"
                    aria-label={link.ariaLabel}
                    aria-current={location.pathname === link.url ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content - NO padding, hero starts immediately after header */}
      <main id="main-content" role="main">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white mt-32" role="contentinfo">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div>
              <div className="mb-6">
                <div
                  className="text-xl tracking-[0.2em] font-light mb-1"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  AMORA
                </div>
                <div className="text-[9px] tracking-[0.3em] text-gold uppercase">
                  By Organic Beauty
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed" style={{ fontWeight: 300 }}>
                Where timeless beauty meets modern science.
              </p>
            </div>

            <nav aria-label="Footer navigation">
              <h2
                className="text-sm tracking-[0.2em] uppercase mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Navigate
              </h2>
              <ul className="space-y-3" role="list">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.url}
                      className="text-sm text-gray-300 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold rounded-sm"
                      style={{ fontWeight: 300 }}
                      aria-label={link.ariaLabel}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2
                className="text-sm tracking-[0.2em] uppercase mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Connect
              </h2>
              <address className="text-sm text-gray-300 not-italic space-y-2" style={{ fontWeight: 300 }}>
                <p>
                  <a
                    href="mailto:info@amorabeauty.com"
                    className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold rounded-sm"
                    aria-label="Email us at info@amorabeauty.com"
                  >
                    info@amorabeauty.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+15551234567"
                    className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold rounded-sm"
                    aria-label="Call us at (555) 123-4567"
                  >
                    (555) 123-4567
                  </a>
                </p>
              </address>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-xs text-gray-400 tracking-wider" style={{ fontWeight: 300 }}>
              © {new Date().getFullYear()} Amora by Organic Beauty. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
