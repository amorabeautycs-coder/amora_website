import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { dataClient } from '@/api/dataClient';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';

export default function Home() {
  const { data: featuredProducts = [], isLoading: productsLoading } = useQuery({
    queryKey: ['featured-products'],
    queryFn: () => dataClient.entities.Product.filter({ featured: true }),
  });

  const { data: testimonials = [], isLoading: testimonialsLoading } = useQuery({
    queryKey: ['testimonials'],
    queryFn: () => dataClient.entities.Testimonial.list(),
  });

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-ivory to-rose-beige/20"
        aria-labelledby="hero-heading"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E2A39' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-8 lg:px-12 text-center py-20">
          <div className="mb-8">
            <div className="inline-block px-6 py-2 border border-gold/30 rounded-full mb-8">
              <span
                className="text-xs tracking-[0.2em] uppercase text-gold"
                style={{ fontWeight: 400 }}
              >
                Award-Winning Luxury Skincare
              </span>
            </div>
          </div>

          <h1
            id="hero-heading"
            className="text-5xl md:text-7xl lg:text-8xl text-navy mb-8 leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Timeless Beauty,
            <br />
            <span className="italic" style={{ fontWeight: 400 }}>
              Modern Science
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ fontWeight: 300 }}
          >
            Experience the perfect fusion of nature and innovation with Amora's
            <br className="hidden md:block" />
            luxury cosmetics collection
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/products">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-white px-10 py-6 text-sm tracking-wider uppercase shadow-lg hover:shadow-xl"
                style={{ fontWeight: 400, letterSpacing: '0.15em' }}
                aria-label="Browse our collection of luxury skincare products"
              >
                Explore Collection
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white px-10 py-6 text-sm tracking-wider uppercase"
                style={{ fontWeight: 300, letterSpacing: '0.15em' }}
                aria-label="Learn about our story and values"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative element */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
          aria-hidden="true"
        />
      </section>

      {/* Brand Values */}
      <section className="py-32 bg-white" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <h2 id="values-heading" className="sr-only">
            Our Brand Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: 'FDA Cleared',
                desc: 'Medical-grade quality you can trust',
                id: 'fda-cleared',
              },
              {
                title: 'Award Winning',
                desc: 'Recognized for excellence in skincare',
                id: 'award-winning',
              },
              {
                title: 'Nature & Science',
                desc: 'Organic ingredients meet innovation',
                id: 'nature-science',
              },
            ].map((value, idx) => (
              <article key={idx} className="text-center group" aria-labelledby={value.id}>
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center group-hover:border-gold transition-colors duration-300"
                  style={{
                    border: '1px solid rgba(197, 162, 93, 0.2)',
                  }}
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 bg-gold" />
                </div>
                <h3
                  id={value.id}
                  className="text-xl mb-3 text-navy"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
                >
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed" style={{ fontWeight: 300 }}>
                  {value.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section
        className="py-32 bg-gradient-to-b from-ivory to-white"
        aria-labelledby="featured-heading"
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <header className="text-center mb-20">
            <div className="inline-block w-16 h-px bg-gold mb-8" aria-hidden="true" />
            <h2
              id="featured-heading"
              className="text-4xl md:text-6xl text-navy mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Featured Collection
            </h2>
            <p className="text-lg text-gray-600" style={{ fontWeight: 300 }}>
              Discover our most coveted formulations
            </p>
          </header>

          {productsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" role="status" aria-live="polite" aria-label="Loading featured products">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-square bg-gray-200 rounded-xl mb-6" />
                  <div className="h-6 bg-gray-200 rounded mb-3" />
                  <div className="h-4 bg-gray-200 w-2/3 rounded" />
                </div>
              ))}
            </div>
          ) : featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {featuredProducts.slice(0, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600" style={{ fontWeight: 300 }}>
              Featured products coming soon
            </p>
          )}

          <div className="text-center mt-16">
            <Link to="/products">
              <Button
                variant="outline"
                className="border-gold text-navy hover:bg-gold hover:text-white px-10 py-6 text-sm tracking-wider uppercase"
                style={{ fontWeight: 300, letterSpacing: '0.15em' }}
                aria-label="View all products in our collection"
              >
                View All Products
                <ArrowRight className="ml-3 w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <header className="text-center mb-20">
            <div className="inline-block w-16 h-px bg-gold mb-8" aria-hidden="true" />
            <h2
              id="testimonials-heading"
              className="text-4xl md:text-6xl text-navy mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Cherished by Our Community
            </h2>
            <p className="text-lg text-gray-600" style={{ fontWeight: 300 }}>
              Real transformations, genuine testimonials
            </p>
          </header>

          {testimonialsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="status" aria-live="polite" aria-label="Loading testimonials">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse bg-ivory p-8 rounded-xl">
                  <div className="h-4 bg-gray-200 rounded mb-3" />
                  <div className="h-4 bg-gray-200 rounded mb-3" />
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-32 bg-navy text-white relative overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A25D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto px-8 lg:px-12 text-center relative">
          <div className="inline-block w-16 h-px bg-gold mb-8" aria-hidden="true" />
          <h2
            id="cta-heading"
            className="text-4xl md:text-6xl mb-8"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Begin Your Journey
            <br />
            <span className="italic" style={{ fontWeight: 400 }}>
              to Radiant Skin
            </span>
          </h2>
          <p className="text-lg mb-12 text-gray-300 leading-relaxed" style={{ fontWeight: 300 }}>
            Discover personalized luxury skincare solutions
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-white px-10 py-6 text-sm tracking-wider uppercase shadow-lg hover:shadow-xl"
              style={{ fontWeight: 400, letterSpacing: '0.15em' }}
              aria-label="Contact us to begin your skincare journey"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
