import React from 'react';
import ValuesSection from '@/components/ValuesSection';

export default function About() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero with Background Image */}
      <section
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        aria-labelledby="about-hero-heading"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/about/HERO-BACKGROUND.png"
            alt="Luxury skincare products on marble surface"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/50 to-ivory" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <div className="w-16 h-[1px] bg-gold/60 mx-auto mb-8" aria-hidden="true" />
          <h1
            id="about-hero-heading"
            className="text-6xl md:text-7xl font-light text-white mb-6 tracking-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            About Amora
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
            Where timeless beauty meets modern science
          </p>
        </div>
      </section>

      {/* Brand Story - Split Layout with Image */}
      <section className="py-24 bg-white" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Image Side */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden order-2 md:order-1">
              <img
                src="/images/about/BRAND-STORY.png"
                alt="Luxury skincare self-care moment"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Side */}
            <div className="space-y-8 order-1 md:order-2">
              <div>
                <div className="w-12 h-[1px] bg-gold/30 mb-6" aria-hidden="true" />
                <h2
                  id="story-heading"
                  className="text-4xl md:text-5xl font-light text-navy mb-6 tracking-tight"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Our Story
                </h2>
              </div>

              <div className="space-y-6 text-base md:text-lg text-navy/70 leading-relaxed font-light">
                <p>
                  Amora by Organic Beauty was born from a simple belief: that everyone deserves
                  access to luxury skincare that delivers real, visible results.
                </p>

                <p>
                  Our journey began with a passion for combining the best of nature with the latest
                  advances in skincare technology. Today, we're proud to offer two exceptional brands
                  under the Amora umbrella.
                </p>

                <p>
                  <strong className="text-navy font-normal">Avologi</strong> brings you revolutionary
                  FDA-cleared beauty devices that harness the power of thermal LED light technology,
                  while <strong className="text-navy font-normal">Formidabless</strong> delivers
                  premium skincare formulations blessed by nature and perfected by science.
                </p>

                <p>
                  Each product is a testament to our commitment to your skin's timeless beauty.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <ValuesSection />

      {/* Science + Nature Section */}
      <section className="py-24 bg-ivory" aria-labelledby="science-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-16 h-[1px] bg-gold/30 mx-auto mb-8" aria-hidden="true" />
            <h2
              id="science-heading"
              className="text-4xl md:text-5xl font-light text-navy mb-6 tracking-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Science Meets Nature
            </h2>
            <p className="text-lg text-navy/60 font-light max-w-2xl mx-auto">
              Every formulation is a perfect marriage of botanical purity and scientific innovation
            </p>
          </div>

          {/* Science + Nature Image */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about/SCIENCE-NATURE.png"
                alt="Natural ingredients and scientific precision"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/about/HERO-BACKGROUND.png"
            alt="Discover our products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ivory/80 via-ivory/90 to-ivory" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-[1px] bg-gold/40 mx-auto mb-8" aria-hidden="true" />
          <h2
            className="text-4xl md:text-5xl font-light text-navy mb-6 tracking-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Experience Amora
          </h2>
          <p className="text-lg text-navy/70 font-light mb-10 max-w-2xl mx-auto">
            Discover our collection of luxury skincare products and FDA-cleared beauty devices
          </p>
          <a
            href="/products"
            className="inline-block px-10 py-4 bg-gold text-white rounded-full font-light tracking-wide hover:bg-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Our Products
          </a>
        </div>
      </section>
    </div>
  );
}
