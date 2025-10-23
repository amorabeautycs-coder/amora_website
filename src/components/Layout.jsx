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

      {/* Header - FROSTED GLASS LUXURY DESIGN */}
      <header
        className={`fixed top-0 w-full z-50 bg-white/60 backdrop-blur-lg border-b border-navy/5 transition-all duration-300 ease-in-out ${
          isScrollingDown ? '-translate-y-full' : 'translate-y-0'
        } ${
          isScrolled
            ? 'shadow-[0_4px_24px_rgba(0,0,0,0.04)]'
            : ''
        }`}
        role="banner"
      >
        <nav
          className="max-w-[1600px] mx-auto px-6 lg:px-10 py-4 lg:py-5"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Desktop: Logo left, Nav right */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Logo - Clean Transparent PNG */}
            <Link
              to="/"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="focus:outline-none transition-all duration-300 hover:scale-[1.03] hover:opacity-80"
              aria-label="Amora by Organic Beauty - Return to homepage"
            >
              <img
                src="/images/logo-cropped.png"
                alt="Amora by Organic Beauty"
                className={`transition-all duration-300 ease-out ${
                  isScrolled
                    ? 'h-16 lg:h-18'
                    : 'h-18 lg:h-20'
                }`}
                style={{
                  width: 'auto',
                  maxWidth: '280px'
                }}
              />
            </Link>

            {/* Desktop Navigation - Quiet Luxury Typography */}
            <ul className="flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.url}
                    className={`text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-gold/30 rounded-sm inline-block ${
                      location.pathname === link.url
                        ? 'text-navy border-b-2 border-gold pb-1'
                        : 'text-navy/65 hover:text-navy border-b-2 border-transparent hover:border-gold/50 pb-1'
                    }`}
                    aria-label={link.ariaLabel}
                    aria-current={location.pathname === link.url ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
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
              className="focus:outline-none transition-all duration-300 hover:scale-[1.03] hover:opacity-80"
              aria-label="Amora by Organic Beauty - Return to homepage"
            >
              <img
                src="/images/logo-cropped.png"
                alt="Amora by Organic Beauty"
                className="h-16 w-auto transition-all duration-300"
                style={{
                  maxWidth: '220px'
                }}
              />
            </Link>

            {/* Hamburger menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-sm hover:bg-gold/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/30"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gold transition-colors duration-300" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-gold transition-colors duration-300" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Navigation - Enhanced with Overlay */}
          {isMenuOpen && (
            <>
              {/* Overlay backdrop */}
              <div
                className="fixed inset-0 bg-navy/20 backdrop-blur-md z-40 lg:hidden"
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
              />

              {/* Slide-in menu */}
              <div
                id="mobile-menu"
                className="lg:hidden pb-6 border-t border-navy/5 relative z-50 bg-white/95 backdrop-blur-lg"
                role="menu"
              >
                <ul className="flex flex-col items-center space-y-2 pt-6" role="list">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.url}
                        className={`block px-8 py-3 text-[13px] uppercase tracking-[0.15em] font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-gold/30 rounded-sm ${
                          location.pathname === link.url
                            ? 'text-navy border-b-2 border-gold pb-[6px]'
                            : 'text-navy/60 hover:text-navy border-b-2 border-transparent hover:border-gold/50 pb-[6px]'
                        }`}
                        role="menuitem"
                        aria-label={link.ariaLabel}
                        aria-current={location.pathname === link.url ? 'page' : undefined}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
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
