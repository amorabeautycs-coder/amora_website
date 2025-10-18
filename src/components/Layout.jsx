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

      {/* Header - THE TOP BAR IS SACRED GROUND */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-luxury ${
          isScrollingDown ? '-translate-y-full' : 'translate-y-0'
        } ${
          isScrolled
            ? 'bg-ivory/90 backdrop-blur-luxury backdrop-saturate-luxury shadow-[0_1px_0_rgba(197,162,93,0.1)]'
            : 'bg-transparent'
        }`}
        style={{ height: '80px' }}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-8 lg:px-12 h-full"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex justify-between items-center h-full">
            {/* Logo - Navy, Size: 22px */}
            <Link
              to="/"
              className="group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold rounded-sm"
              aria-label="Amora by Organic Beauty - Return to homepage"
            >
              <img 
                src="/images/logo.png" 
                alt="Amora by Organic Beauty" 
                className="h-[22px] w-auto object-contain transition-all duration-300 group-hover:scale-105"
                style={{
                  maxWidth: '180px',
                  filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.05))'
                }}
              />
            </Link>

            {/* Desktop Navigation - Centered, 11px tracking */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  className={`group text-[11px] uppercase transition-all duration-300 relative py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold rounded-sm ${
                    location.pathname === link.url
                      ? 'text-gold'
                      : 'text-navy hover:text-gold'
                  }`}
                  style={{ fontWeight: 400, letterSpacing: '0.12em' }}
                  aria-label={link.ariaLabel}
                  aria-current={location.pathname === link.url ? 'page' : undefined}
                >
                  {link.name}
                  {/* Underline grows from center */}
                  <span 
                    className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-gold transition-all duration-300 ${
                      location.pathname === link.url 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>

            {/* Outlined Gold Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <button
                  className="border-2 border-gold text-navy px-6 py-2 rounded-md text-[11px] uppercase font-semibold transition-all duration-600 ease-luxury hover:bg-gold hover:text-white hover:scale-102"
                  style={{ letterSpacing: '0.12em' }}
                  aria-label="Get in touch with us"
                >
                  Contact
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-sm hover:bg-rose-beige/30 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-navy" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5 text-navy" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div
              id="mobile-menu"
              className="lg:hidden py-6 border-t border-gold/10 bg-ivory"
              role="menu"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  className={`block px-4 py-4 text-sm uppercase tracking-wider transition-colors hover:bg-rose-beige/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold ${
                    location.pathname === link.url ? 'text-gold' : 'text-navy'
                  }`}
                  style={{ fontWeight: 300, letterSpacing: '0.15em' }}
                  role="menuitem"
                  aria-label={link.ariaLabel}
                  aria-current={location.pathname === link.url ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 py-4">
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="w-full tracking-wider text-sm"
                    aria-label="Get in touch with us"
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </nav>
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
