import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useSearchParams } from 'react-router-dom';
import { dataClient } from '@/api/dataClient';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getProductImageUrl } from '@/utils';

export default function ProductDetail() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('id');

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      const products = await dataClient.entities.Product.list();
      return products.find((p) => p.id === productId);
    },
    enabled: !!productId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-ivory py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="animate-pulse" role="status" aria-live="polite" aria-label="Loading product details">
            <div className="h-8 bg-gray-200 w-32 mb-12 rounded" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="aspect-square bg-gray-200 rounded-xl" />
              <div className="space-y-6">
                <div className="h-12 bg-gray-200 rounded-xl" />
                <div className="h-6 bg-gray-200 w-2/3 rounded-xl" />
                <div className="h-32 bg-gray-200 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
          <h1
            className="text-3xl text-navy mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Product Not Found
          </h1>
          <Link to="/products">
            <Button variant="outline" className="border-gold" aria-label="Return to products collection">
              Return to Collection
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors mb-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold rounded-sm px-2 py-1 text-sm tracking-wider uppercase"
          style={{ fontWeight: 300, letterSpacing: '0.15em' }}
          aria-label="Back to products collection"
        >
          <span aria-hidden="true">←</span>
          <span>Back to Collection</span>
        </Link>

        {/* Product Detail */}
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Product Image */}
          <div className="relative inline-block overflow-hidden rounded-xl border border-[rgba(197,162,93,0.20)] bg-[rgba(250,248,245,0.9)] shadow-[0_4px_16px_rgba(0,0,0,0.03)]">
            <div className="aspect-square bg-white overflow-hidden flex items-center justify-center rounded-xl">
              <img
                src={getProductImageUrl(product.image_url)}
                alt={`${product.name} - ${product.category} by ${product.brand}`}
                className="w-full h-full object-contain"
                width="800"
                height="800"
              />
            </div>
            <div className="absolute top-0 right-0 p-4">
              <Badge
                className="rounded-full text-[10px] tracking-wider px-3 py-1 transition-all"
                style={{
                  fontWeight: 300,
                  background: 'rgba(197, 162, 93, 0.9)',
                  color: 'white',
                  border: 'none',
                }}
              >
                {product.brand}
              </Badge>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Badge
                  className="bg-gold/10 text-gold border-none rounded-full text-xs tracking-wider px-3 py-1"
                  style={{ fontWeight: 300 }}
                >
                  {product.brand}
                </Badge>
                <span
                  className="text-xs tracking-[0.2em] uppercase text-gray-500"
                  style={{ fontWeight: 300 }}
                >
                  {product.category}
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl text-navy mb-6 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
              >
                {product.name}
              </h1>

              <p
                className="text-base text-gray-700 mb-12 leading-relaxed"
                style={{ fontWeight: 300 }}
              >
                {product.description}
              </p>
            </header>

            {/* Key Benefits */}
            {product.key_benefits && product.key_benefits.length > 0 && (
              <section className="mb-12" aria-labelledby="benefits-heading">
                <h2
                  id="benefits-heading"
                  className="text-xs tracking-[0.2em] uppercase text-navy mb-6"
                  style={{ fontWeight: 400 }}
                >
                  Key Benefits
                </h2>
                <ul className="space-y-4" role="list">
                  {product.key_benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-1 h-1 bg-gold mt-2 flex-shrink-0" aria-hidden="true" />
                      <span
                        className="text-sm text-gray-700 leading-relaxed"
                        style={{ fontWeight: 300 }}
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Price */}
            <div className="mt-8 mb-6">
                <p
                  className="text-4xl md:text-5xl font-medium tracking-tight text-gold"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    textShadow: '0 1px 3px rgba(197, 162, 93, 0.2)',
                  }}
                  aria-label={`Price: ${product.price} dollars`}
                >
                  ${product.price?.toFixed(2)}
                </p>
              </div>

            {/* Usage Instructions */}
            {product.usage_instructions && (
              <section
                className="mb-12 p-8 rounded-xl"
                style={{
                  background: 'rgba(250, 248, 245, 0.85)',
                  border: '1px solid rgba(197, 162, 93, 0.25)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)',
                }}
                aria-labelledby="usage-heading"
              >
                <h2
                  id="usage-heading"
                  className="text-xs tracking-[0.2em] uppercase text-navy mb-4"
                  style={{ fontWeight: 400 }}
                >
                  How to Use
                </h2>
                <p
                  className="text-sm text-gray-700 leading-relaxed"
                  style={{ fontWeight: 300 }}
                >
                  {product.usage_instructions}
                </p>
              </section>
            )}

            {/* CTA */}
            <div
              className="p-8 rounded-xl"
              style={{
                background: 'rgba(250, 248, 245, 0.85)',
                border: '1px solid rgba(197, 162, 93, 0.25)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)',
              }}
            >
              <h2
                className="text-xl text-navy mb-3"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
              >
                Interested in This Product?
              </h2>
              <p className="mb-6 text-sm text-gray-600 leading-relaxed" style={{ fontWeight: 300 }}>
                Contact us to learn more and arrange your consultation
              </p>
              <Link to="/contact">
                <Button
                  className="w-full bg-gold hover:bg-gold/90 text-white rounded-xl py-6 text-sm tracking-wider uppercase"
                  style={{ fontWeight: 400, letterSpacing: '0.15em' }}
                  aria-label="Contact us to purchase this product"
                >
                  Contact for Purchase
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
