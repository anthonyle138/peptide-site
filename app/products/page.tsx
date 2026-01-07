'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory, searchProducts, getCategories, Product } from '@/lib/products';
import { t, Locale } from '@/lib/i18n';

function ProductsContent() {
  const locale: Locale = 'en';
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState('name');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const categories = getCategories();

  const filteredProducts = useMemo(() => {
    let products: Product[];

    if (searchQuery) {
      products = searchProducts(searchQuery);
    } else {
      products = getProductsByCategory(selectedCategory);
    }

    return [...products].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          const priceA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
          const priceB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
          return priceA - priceB;
        case 'price-high':
          const priceAH = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
          const priceBH = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
          return priceBH - priceAH;
        case 'name':
        default:
          return a.name_en.localeCompare(b.name_en);
      }
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <>
      <Header locale={locale} />

      <main className="flex-1 bg-dark-900">
        {/* Header */}
        <div className="bg-dark-800 border-b border-white/5">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-white">{t('products', locale)}</h1>
            <p className="text-slate-400 mt-2">
              Browse our collection of {filteredProducts.length} research peptides
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Mobile: Search & Filter Bar */}
          <div className="lg:hidden mb-6 space-y-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder={t('search', locale)}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            </div>

            {/* Filter & Sort buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowMobileFilters(true)}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-dark-800 border border-white/10 rounded-xl text-white"
              >
                <Filter className="w-4 h-4" />
                Filters
                {selectedCategory !== 'all' && (
                  <span className="ml-1 px-2 py-0.5 bg-primary-500 text-xs rounded-full">1</span>
                )}
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="flex-1 px-4 py-3 bg-dark-800 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Mobile Filter Modal */}
          {showMobileFilters && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/60" onClick={() => setShowMobileFilters(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-dark-800 rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Filters</h3>
                  <button onClick={() => setShowMobileFilters(false)} className="p-2 text-slate-400 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setSearchQuery('');
                        setShowMobileFilters(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary-500/20 text-primary-400 font-medium border border-primary-500/30'
                          : 'text-slate-300 bg-dark-700 hover:bg-dark-600'
                      }`}
                    >
                      {category.name_en}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full mt-6 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-400 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block lg:w-64 flex-shrink-0">
              <div className="bg-dark-800 rounded-xl border border-white/5 p-6 sticky top-24">
                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {t('search', locale)}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t('search', locale)}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-dark-700 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {t('categories', locale)}
                  </label>
                  <div className="space-y-1.5">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setSearchQuery('');
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-primary-500/20 text-primary-400 font-medium'
                            : 'text-slate-400 hover:bg-dark-700 hover:text-slate-200'
                        }`}
                      >
                        {category.name_en}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {t('sortBy', locale)}
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 bg-dark-700 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="name">Name (A-Z)</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.slug} product={product} locale={locale} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-dark-800 rounded-xl border border-white/5">
                  <div className="text-slate-600 mb-4">
                    <Search className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    {t('noProducts', locale)}
                  </h3>
                  <p className="text-slate-400">
                    Try adjusting your search or filter criteria
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="mt-4 px-6 py-3 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-400 transition-colors"
                  >
                    {t('showAll', locale)}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer locale={locale} />
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-dark-900 flex items-center justify-center text-white">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
