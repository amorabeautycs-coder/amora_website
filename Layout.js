import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", url: createPageUrl("Home") },
    { name: "Products", url: createPageUrl("Products") },
    { name: "About", url: createPageUrl("About") },
    { name: "FAQ", url: createPageUrl("FAQ") },
    { name: "Contact", url: createPageUrl("Contact") },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        :root {
          --ivory: #FAF8F5;
          --gold: #C5A25D;
          --navy: #1E2A39;
          --rose-beige: #EADCC5;
        }
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          color: #2c2c2c;
          letter-spacing: 0.3px;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          letter-spacing: 0.5px;
        }
        
        .skip-link {
          position: absolute;
          top: -40px;
          left: 0;
          background: var(--navy);
          color: white;
          padding: 8px 16px;
          text-decoration: none;
          z-index: 100;
          border-radius: 0 0 4px 0;
        }
        
        .skip-link:focus {
          top: 0;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        .luxury-border {
          position: relative;
        }
        
        .luxury-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border: 1px solid var(--gold);
          opacity: 0.2;
        }
      `}</style>

      <a href="#main-content" className="skip-link focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--gold)]">
        Skip to main content
      </a>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrollingDown ? '-translate-y-full' : 'translate-y-0'
        } ${
          isScrolled 
            ? 'bg-[#FAF8F5]/98 backdrop-blur-sm shadow-[0_1px_0_rgba(197,162,93,0.1)]' 
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav className="max-w-7xl mx-auto px-8 lg:px-12" role="navigation" aria-label="Main navigation">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link 
              to={createPageUrl("Home")} 
              className="group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--gold)] rounded-sm"
              aria-label="Amora by Organic Beauty - Home"
            >
              <div className="text-center">
                <div className="text-2xl tracking-[0.2em] font-light text-[var(--navy)] mb-0.5" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
                  AMORA
                </div>
                <div className="text-[9px] tracking-[0.3em] text-[var(--gold)] uppercase" style={{ fontWeight: 400 }}>
                  By Organic Beauty
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  className={`text-sm tracking-wider uppercase transition-colors relative py-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--gold)] rounded-sm ${
                    location.pathname === link.url
                      ? 'text-[var(--gold)]'
                      : 'text-[var(--navy)] hover:text-[var(--gold)]'
                  }`}
                  style={{ fontWeight: 300, letterSpacing: '0.15em' }}
                >
                  {link.name}
                  {location.pathname === link.url && (
                    <div className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--gold)]" />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Link to={createPageUrl("Contact")}>
                <Button 
                  variant="outline"
                  className="border-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold)] hover:text-white transition-all duration-300 rounded-none px-8 tracking-wider text-sm uppercase"
                  style={{ fontWeight: 300, letterSpacing: '0.15em' }}
                >
                  Contact
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-sm hover:bg-[var(--rose-beige)]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--gold)]"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-[var(--navy)]" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5 text-[var(--navy)]" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-[var(--gold)]/10 bg-[#FAF8F5]" role="menu">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-4 text-sm uppercase tracking-wider transition-colors hover:bg-[var(--rose-beige)]/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--gold)] ${
                    location.pathname === link.url
                      ? 'text-[var(--gold)]'
                      : 'text-[var(--navy)]'
                  }`}
                  style={{ fontWeight: 300, letterSpacing: '0.15em' }}
                  role="menuitem"
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 py-4">
                <Link to={createPageUrl("Contact")} onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant="outline"
                    className="w-full border-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold)] hover:text-white transition-all duration-300 rounded-none tracking-wider text-sm uppercase"
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
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[var(--navy)] text-white mt-32" role="contentinfo">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div>
              <div className="mb-6">
                <div className="text-xl tracking-[0.2em] font-light mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  AMORA
                </div>
                <div className="text-[9px] tracking-[0.3em] text-[var(--gold)] uppercase">
                  By Organic Beauty
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed" style={{ fontWeight: 300 }}>
                Where timeless beauty meets modern science.
              </p>
            </div>

            <div>
              <h3 className="text-sm tracking-[0.2em] uppercase mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Navigate
              </h3>
              <ul className="space-y-3" role="list">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.url}
                      className="text-sm text-gray-300 hover:text-[var(--gold)] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--gold)] rounded-sm"
                      style={{ fontWeight: 300 }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm tracking-[0.2em] uppercase mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Connect
              </h3>
              <address className="text-sm text-gray-300 not-italic space-y-2" style={{ fontWeight: 300 }}>
                <p>info@amorabeauty.com</p>
                <p>(555) 123-4567</p>
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