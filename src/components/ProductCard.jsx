import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import { getProductImageUrl } from '@/utils';

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product-detail?id=${product.id}`}
      className="group block focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-gold rounded-xl"
      aria-label={`View details for ${product.name} - ${product.category} by ${product.brand}`}
    >
      <article className="h-full">
        <div
          className="relative overflow-hidden rounded-xl transition-all duration-500 group-hover:shadow-xl"
          style={{
            background: 'rgba(250, 248, 245, 0.85)',
            border: '1px solid rgba(197, 162, 93, 0.25)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)',
          }}
        >
          <div className="aspect-square bg-white overflow-hidden flex items-center justify-center">
            <img
              src={getProductImageUrl(product.image_url)}
              alt={`${product.name} product image`}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
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

        <div className="pt-6">
          <p
            className="text-xs tracking-[0.2em] uppercase text-gold mb-2"
            style={{ fontWeight: 400 }}
          >
            {product.category}
          </p>

          <h3
            className="text-xl text-navy mb-3 group-hover:text-gold transition-colors duration-300"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
          >
            {product.name}
          </h3>

          <p
            className="text-sm text-gray-600 line-clamp-2 leading-relaxed"
            style={{ fontWeight: 300 }}
          >
            {product.description}
          </p>

          <div
            className="mt-4 flex items-center text-xs tracking-[0.2em] uppercase text-gold group-hover:gap-2 transition-all"
            style={{ fontWeight: 400 }}
            aria-hidden="true"
          >
            <span>Discover</span>
            <span className="inline-block group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
