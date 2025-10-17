import React from 'react';

export default function About() {
  const values = [
    {
      title: 'Natural Excellence',
      description:
        'We believe in harnessing the power of nature, combining organic ingredients with cutting-edge scientific research.',
    },
    {
      title: 'Quality Assurance',
      description:
        'Every product is FDA cleared and rigorously tested to ensure the highest standards of safety and efficacy.',
    },
    {
      title: 'Innovation',
      description:
        'Our patented technologies represent years of research and development in skincare science.',
    },
    {
      title: 'Customer First',
      description:
        "Your satisfaction and skin health are our top priorities. We're here to support your beauty journey.",
    },
  ];

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <section
        className="relative py-32 bg-gradient-to-b from-white to-ivory"
        aria-labelledby="about-hero-heading"
      >
        <div className="max-w-4xl mx-auto px-8 lg:px-12 text-center">
          <div className="inline-block w-16 h-px bg-gold mb-8" aria-hidden="true" />
          <h1
            id="about-hero-heading"
            className="text-4xl md:text-7xl text-navy mb-8"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            About Amora
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed" style={{ fontWeight: 300 }}>
            Where timeless beauty meets modern science
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 bg-white" aria-labelledby="story-heading">
        <div className="max-w-3xl mx-auto px-8 lg:px-12">
          <h2 id="story-heading" className="sr-only">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8" style={{ fontWeight: 300 }}>
            <p className="text-xl leading-relaxed">
              Amora by Organic Beauty was born from a simple belief: that everyone deserves access
              to luxury skincare that delivers real, visible results.
            </p>

            <p className="leading-relaxed">
              Our journey began with a passion for combining the best of nature with the latest
              advances in skincare technology. Today, we're proud to offer two exceptional brands
              under the Amora umbrella. Avologi brings you revolutionary FDA-cleared beauty devices
              that harness the power of thermal LED light technology, while Formidabless delivers
              premium skincare formulations blessed by nature and perfected by science.
            </p>

            <p className="leading-relaxed">
              Our commitment to excellence has earned us numerous accolades, including prestigious
              beauty awards and FDA clearances. But our greatest achievement is the trust and
              satisfaction of our customers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-ivory" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <header className="text-center mb-20">
            <div className="inline-block w-16 h-px bg-gold mb-8" aria-hidden="true" />
            <h2
              id="values-heading"
              className="text-4xl md:text-6xl text-navy"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Our Values
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {values.map((value, idx) => (
              <article
                key={idx}
                className="group p-8 rounded-xl transition-all duration-300 hover:shadow-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(197, 162, 93, 0.25)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{
                    border: '1px solid rgba(197, 162, 93, 0.25)',
                  }}
                  aria-hidden="true"
                >
                  <div className="w-1.5 h-1.5 bg-gold" />
                </div>
                <h3
                  className="text-xl text-navy mb-4"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
                >
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed" style={{ fontWeight: 300 }}>
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-32 bg-white" aria-labelledby="certifications-heading">
        <div className="max-w-4xl mx-auto px-8 lg:px-12">
          <header className="text-center mb-16">
            <div className="inline-block w-16 h-px bg-gold mb-8" aria-hidden="true" />
            <h2
              id="certifications-heading"
              className="text-4xl md:text-6xl text-navy"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Recognition
            </h2>
          </header>

          <div
            className="p-12 rounded-xl"
            style={{
              background: 'rgba(250, 248, 245, 0.85)',
              border: '1px solid rgba(197, 162, 93, 0.25)',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)',
            }}
          >
            <ul className="space-y-6 max-w-2xl mx-auto" role="list">
              {[
                'FDA Cleared Medical Device (Class II)',
                'Beauty Awards Finalist',
                'Patented Technology',
                'Dermatologist Recommended',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-1 h-1 bg-gold mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-gray-700" style={{ fontWeight: 300 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
