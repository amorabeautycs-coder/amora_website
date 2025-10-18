/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // THE LUXURY PALETTE - Hermès, La Mer, Chanel
        ivory: '#FAF8F5',
        gold: '#C5A25D',
        navy: '#1E2A39',
        beige: '#EADCC5',
        'rose-beige': '#EADCC5',
      },
      fontFamily: {
        // EDITORIAL TYPOGRAPHY - As seen in Vogue Paris
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        // HIERARCHY - From Whisper to Statement
        'hero-mobile': ['42px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-tablet': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-desktop': ['120px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        'tightest': '-0.02em',
        'tighter': '-0.01em',
        'tight': '-0.005em',
        'normal': '0',
        'wide': '0.02em',
        'wider': '0.04em',
        'widest': '0.12em',
        'ultra': '0.15em',
        'breathe': '0.18em',
        'label': '0.25em',
      },
      lineHeight: {
        'tight': '1.1',
        'relaxed': '1.8',
      },
      transitionTimingFunction: {
        // LUXURY EASING - Expensive Things Move Slowly
        'luxury': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'luxury-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '900': '900ms',
        '1200': '1200ms',
        '1400': '1400ms',
        '1800': '1800ms',
        '2400': '2400ms',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'fade-in-down': 'fadeInDown 0.9s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        'luxury': '20px',
      },
      backdropSaturate: {
        'luxury': '180%',
      },
      boxShadow: {
        'luxury': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'luxury-lg': '0 8px 24px rgba(197, 162, 93, 0.15)',
        'luxury-xl': '0 12px 32px rgba(197, 162, 93, 0.2)',
      },
    },
  },
  plugins: [],
}
