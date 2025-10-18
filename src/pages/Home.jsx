import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { dataClient } from '@/api/dataClient';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';
import AmoraHero from '@/components/AmoraHero';

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
      {/* THE LUXURY HERO - Hermès. La Mer. Chanel. */}
      <AmoraHero />

      {/* Featured Products - WHITE SPACE IS THE MOST EXPENSIVE REAL ESTATE */}
      <section
        id="featured-collection"
        className="section-luxury bg-gradient-to-b from-ivory to-white"
        aria-labelledby="featured-heading"
      >
        <div className="container-luxury">
          <header className="text-center mb-20">
            <div className="inline-block w-16 h-px bg-gold mb-8" aria-hidden="true" />
            <h2
              id="featured-heading"
              className="text-4xl md:text-6xl lg:text-7xl text-navy mb-6 text-shadow-luxury"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Featured Collection
            </h2>
            <p className="text-lg md:text-xl text-gray-600 opacity-75" style={{ fontWeight: 300, lineHeight: '1.8' }}>
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

      {/* Testimonials - THE PROOF IS IN THE PAUSE */}
      <section className="section-luxury bg-white" aria-labelledby="testimonials-heading">
        <div className="container-luxury">
          <header className="text-center mb-20">
            <div className="inline-block w-16 h-px bg-gold mb-8" aria-hidden="true" />
            <h2
              id="testimonials-heading"
              className="text-4xl md:text-6xl lg:text-7xl text-navy mb-6 text-shadow-luxury"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Cherished by Our Community
            </h2>
            <p className="text-lg md:text-xl text-gray-600 opacity-75" style={{ fontWeight: 300, lineHeight: '1.8' }}>
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

      {/* CTA Section - THE INVITATION */}
      <section
        className="section-luxury bg-navy text-white relative overflow-hidden"
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
            className="text-4xl md:text-6xl lg:text-7xl mb-8"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Begin Your Journey
            <br />
            <span className="italic" style={{ fontWeight: 300, opacity: 0.95 }}>
              to Radiant Skin
            </span>
          </h2>
          <p className="text-lg md:text-xl mb-12 text-gray-300 leading-[1.8] opacity-75" style={{ fontWeight: 300 }}>
            Discover personalized luxury skincare solutions
          </p>
          <Link to="/contact">
            <button
              className="btn-luxury-primary"
              aria-label="Contact us to begin your skincare journey"
            >
              Get In Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
