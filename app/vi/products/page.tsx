'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory, searchProducts, getCategories, Product } from '@/lib/products';
import { t, Locale } from '@/lib/i18n';

function ProductsContentVI() {
  const locale: Locale = 'vi';
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState('name');

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

      <main className="flex-1 bg-gray-50">
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900">{t('products', locale)}</h1>
            <p className="text-gray-600 mt-2">
              Duyệt qua bộ sưu tập {filteredProducts.length} peptide nghiên cứu
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('search', locale)}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t('search', locale)}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('categories', locale)}
                  </label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setSearchQuery('');
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-primary-100 text-primary-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {category.name_vi}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('sortBy', locale)}
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="name">Tên (A-Z)</option>
                    <option value="price-low">Giá: Thấp đến Cao</option>
                    <option value="price-high">Giá: Cao đến Thấp</option>
                  </select>
                </div>
              </div>
            </aside>

            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.slug} product={product} locale={locale} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-xl">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    {t('noProducts', locale)}
                  </h3>
                  <p className="text-gray-500">
                    Thử điều chỉnh tiêu chí tìm kiếm hoặc lọc
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="mt-4 btn-primary"
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

export default function ProductsPageVI() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Đang tải...</div>}>
      <ProductsContentVI />
    </Suspense>
  );
}
