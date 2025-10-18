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

      {/* Header - EDITORIAL LUXURY CENTERED LAYOUT */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrollingDown ? '-translate-y-full' : 'translate-y-0'
        } ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.03)] py-6'
            : 'bg-ivory/95 backdrop-blur-sm py-8 md:py-12'
        }`}
        role="banner"
      >
        {/* Elegant bottom border - very subtle gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" aria-hidden="true" />

        <nav
          className="max-w-7xl mx-auto px-8 lg:px-12"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* CENTERED LOGO - Pristine Minimalist Approach */}
          <div className="flex justify-center mb-6 md:mb-8">
            <Link
              to="/"
              onClick={(e) => {
                // Smooth scroll to top on logo click
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="group focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-gold/50 rounded-sm transition-all duration-300"
              aria-label="Amora by Organic Beauty - Return to homepage"
            >
              {/* Logo with elegant fade-in and scale animation on load */}
              <img
                src="/images/logo.png"
                alt="Amora by Organic Beauty"
                className={`object-contain transition-all duration-500 ease-out ${
                  isScrolled
                    ? 'h-[28px] md:h-[32px]'
                    : 'h-[32px] md:h-[40px]'
                } w-auto group-hover:brightness-110 group-hover:scale-[1.02]`}
                style={{
                  maxWidth: '240px',
                  filter: 'drop-shadow(0 2px 8px rgba(197, 162, 93, 0.08))',
                  animation: 'logoFadeIn 0.8s ease-out forwards'
                }}
              />
            </Link>
          </div>

          {/* Optional tagline - uncomment for added sophistication */}
          {/* <div className="text-center mb-6">
            <p className="text-xs tracking-[0.2em] text-navy/40 uppercase font-light">
              Timeless Beauty, Modern Science
            </p>
          </div> */}

          {/* Desktop Navigation - Centered Below Logo */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="flex items-center gap-12">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.url}
                  className={`group text-sm uppercase transition-all duration-300 relative py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold/50 rounded-sm font-medium ${
                    location.pathname === link.url
                      ? 'text-navy'
                      : 'text-navy/70 hover:text-navy'
                  }`}
                  style={{
                    letterSpacing: '0.15em',
                    animation: `navFadeIn 0.6s ease-out ${index * 0.05}s forwards`,
                    opacity: 0
                  }}
                  aria-label={link.ariaLabel}
                  aria-current={location.pathname === link.url ? 'page' : undefined}
                >
                  {link.name}

                  {/* Gold underline - slides in from left on hover */}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-gold transition-all duration-300 ease-in-out ${
                      location.pathname === link.url
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Layout - Logo centered, hamburger menu */}
          <div className="lg:hidden flex items-center justify-between">
            {/* Spacer for balance */}
            <div className="w-10" />

            {/* Mobile menu button - centered visually */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-sm hover:bg-beige/30 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
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

          {/* Mobile Navigation - Elegant vertical layout */}
          {isMenuOpen && (
            <div
              id="mobile-menu"
              className="lg:hidden pt-8 border-t border-gold/10 mt-8 bg-ivory"
              role="menu"
            >
              <div className="flex flex-col items-center space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.url}
                    className={`block px-6 py-4 text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:text-gold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold rounded-sm font-medium ${
                      location.pathname === link.url ? 'text-gold' : 'text-navy/70'
                    }`}
                    role="menuitem"
                    aria-label={link.ariaLabel}
                    aria-current={location.pathname === link.url ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Contact CTA in mobile menu */}
                <div className="pt-4 pb-2">
                  <Link to="/contact">
                    <button
                      className="border-2 border-gold text-navy px-8 py-3 rounded-md text-sm uppercase font-semibold tracking-[0.15em] transition-all duration-300 hover:bg-gold hover:text-white"
                      aria-label="Get in touch with us"
                    >
                      Contact
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* CSS Animations - Elegant fade-in effects */}
        <style jsx>{`
          @keyframes logoFadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes navFadeIn {
            from {
              opacity: 0;
              transform: translateY(5px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </header>

      {/* Main Content */}
      <main id="main-content" className="pt-24" role="main">
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
