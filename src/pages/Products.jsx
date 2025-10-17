import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { dataClient } from '@/api/dataClient';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from '@/components/ProductCard';

export default function Products() {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => dataClient.entities.Product.list(),
  });

  const filteredProducts = products.filter((product) => {
    const brandMatch = selectedBrand === 'all' || product.brand === selectedBrand;
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    return brandMatch && categoryMatch;
  });

  const brands = ['all', ...new Set(products.map((p) => p.brand))];
  const categories = ['all', ...new Set(products.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-ivory py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Page Header */}
        <header className="text-center mb-20">
          <div className="inline-block w-16 h-px bg-gold mb-8" aria-hidden="true" />
          <h1
            className="text-4xl md:text-7xl text-navy mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Our Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 300 }}>
            Explore our complete range of luxury skincare and beauty innovations
          </p>
        </header>

        {/* Filters */}
        <div
          className="p-8 mb-16 rounded-xl"
          role="region"
          aria-label="Product filters"
          style={{
            background: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(197, 162, 93, 0.25)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Brand Filter */}
            <div>
              <label
                htmlFor="brand-filter"
                className="block text-xs tracking-[0.2em] uppercase text-navy mb-4"
                style={{ fontWeight: 400 }}
              >
                Brand
              </label>
              <Tabs value={selectedBrand} onValueChange={setSelectedBrand}>
                <TabsList
                  id="brand-filter"
                  className="w-full h-12 p-1 rounded-lg"
                  style={{
                    background: 'rgba(250, 248, 245, 0.85)',
                    border: '1px solid rgba(197, 162, 93, 0.15)',
                  }}
                  aria-label="Filter products by brand"
                >
                  {brands.map((brand) => (
                    <TabsTrigger
                      key={brand}
                      value={brand}
                      className="flex-1 data-[state=active]:bg-gold data-[state=active]:text-white rounded-md text-xs tracking-wider uppercase transition-all"
                      style={{ fontWeight: 300 }}
                    >
                      {brand === 'all' ? 'All Brands' : brand}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Category Filter */}
            <div>
              <label
                htmlFor="category-filter"
                className="block text-xs tracking-[0.2em] uppercase text-navy mb-4"
                style={{ fontWeight: 400 }}
              >
                Category
              </label>
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList
                  id="category-filter"
                  className="w-full h-12 p-1 grid grid-cols-3 rounded-lg"
                  style={{
                    background: 'rgba(250, 248, 245, 0.85)',
                    border: '1px solid rgba(197, 162, 93, 0.15)',
                  }}
                  aria-label="Filter products by category"
                >
                  {categories.slice(0, 3).map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="data-[state=active]:bg-gold data-[state=active]:text-white rounded-md text-xs tracking-wider uppercase transition-all"
                      style={{ fontWeight: 300 }}
                    >
                      {category === 'all' ? 'All' : category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div role="region" aria-label="Products list" aria-live="polite">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" role="status" aria-label="Loading products">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-square bg-gray-200 rounded-xl mb-6" />
                  <div className="h-6 bg-gray-200 rounded-xl mb-3" />
                  <div className="h-4 bg-gray-200 rounded-xl w-2/3" />
                </div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <>
              <div className="mb-8 text-xs tracking-wider text-gray-500" role="status" style={{ fontWeight: 300 }}>
                {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-32">
              <p className="text-xl text-gray-600 mb-6" style={{ fontWeight: 300 }}>
                No products found
              </p>
              <button
                onClick={() => {
                  setSelectedBrand('all');
                  setSelectedCategory('all');
                }}
                className="text-sm tracking-wider uppercase text-gold hover:text-navy transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold rounded-sm px-4 py-2"
                style={{ fontWeight: 400 }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
