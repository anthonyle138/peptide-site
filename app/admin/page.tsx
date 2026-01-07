'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search, DollarSign, Package, Edit3, Check, X, ArrowUpDown,
  ChevronLeft, ChevronRight, Save, AlertCircle, Filter, Home
} from 'lucide-react';
import { getAllProducts, Product } from '@/lib/products';

interface EditingPrice {
  slug: string;
  value: string;
}

export default function AdminPage() {
  const allProducts = getAllProducts();
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortField, setSortField] = useState<'name' | 'price' | 'category'>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [editingPrice, setEditingPrice] = useState<EditingPrice | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const itemsPerPage = 20;

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category_en));
    return ['all', ...Array.from(cats)];
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name_en.toLowerCase().includes(query) ||
        p.category_en.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(p => p.category_en === categoryFilter);
    }

    // Sort
    filtered.sort((a, b) => {
      let comparison = 0;
      if (sortField === 'name') {
        comparison = a.name_en.localeCompare(b.name_en);
      } else if (sortField === 'price') {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
        comparison = priceA - priceB;
      } else if (sortField === 'category') {
        comparison = a.category_en.localeCompare(b.category_en);
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [products, searchQuery, categoryFilter, sortField, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (field: 'name' | 'price' | 'category') => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleEditPrice = (slug: string, currentPrice: string) => {
    setEditingPrice({ slug, value: currentPrice.replace('$', '') });
  };

  const handleSavePrice = (slug: string) => {
    if (!editingPrice) return;

    const newPrice = `$${parseFloat(editingPrice.value).toFixed(2)}`;
    setProducts(prev =>
      prev.map(p =>
        p.slug === slug ? { ...p, price: newPrice } : p
      )
    );
    setEditingPrice(null);
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus('idle'), 2000);
  };

  const handleCancelEdit = () => {
    setEditingPrice(null);
  };

  const handleSaveAll = async () => {
    setSaveStatus('saving');
    // Simulate API call - in production, this would save to database
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus('idle'), 3000);
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-dark-800/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Home className="w-5 h-5" />
                <span className="hidden sm:inline">Back to Site</span>
              </Link>
              <div className="h-6 w-px bg-white/10" />
              <h1 className="text-xl font-heading font-semibold text-white">
                Admin Dashboard
              </h1>
            </div>
            <button
              onClick={handleSaveAll}
              disabled={saveStatus === 'saving'}
              className="btn-primary flex items-center gap-2"
            >
              {saveStatus === 'saving' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Saving...
                </>
              ) : saveStatus === 'saved' ? (
                <>
                  <Check className="w-4 h-4" />
                  Saved!
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save All Changes
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-dark-700 rounded-xl p-5 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary-500/20 rounded-lg">
                <Package className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Total Products</p>
                <p className="text-2xl font-semibold text-white">{products.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-dark-700 rounded-xl p-5 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-secondary-500/20 rounded-lg">
                <DollarSign className="w-5 h-5 text-secondary-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Avg. Price</p>
                <p className="text-2xl font-semibold text-white">
                  ${(products.reduce((sum, p) => sum + parseFloat(p.price.replace(/[^0-9.]/g, '') || '0'), 0) / products.length).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-dark-700 rounded-xl p-5 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent-500/20 rounded-lg">
                <Filter className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Categories</p>
                <p className="text-2xl font-semibold text-white">{categories.length - 1}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-dark-800 rounded-xl p-4 mb-6 border border-white/5">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="input pl-11"
              />
            </div>

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => {
                setCategoryFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="select w-full sm:w-48"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-dark-800 rounded-xl border border-white/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="bg-dark-700">
                  <th
                    className="cursor-pointer hover:bg-dark-600 transition-colors"
                    onClick={() => handleSort('name')}
                  >
                    <div className="flex items-center gap-2">
                      Product Name
                      <ArrowUpDown className="w-4 h-4 text-slate-500" />
                    </div>
                  </th>
                  <th
                    className="cursor-pointer hover:bg-dark-600 transition-colors"
                    onClick={() => handleSort('category')}
                  >
                    <div className="flex items-center gap-2">
                      Category
                      <ArrowUpDown className="w-4 h-4 text-slate-500" />
                    </div>
                  </th>
                  <th
                    className="cursor-pointer hover:bg-dark-600 transition-colors"
                    onClick={() => handleSort('price')}
                  >
                    <div className="flex items-center gap-2">
                      Price
                      <ArrowUpDown className="w-4 h-4 text-slate-500" />
                    </div>
                  </th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedProducts.map((product) => (
                  <tr key={product.slug} className="hover:bg-dark-700/50">
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-dark-600 flex items-center justify-center">
                          <Package className="w-5 h-5 text-slate-500" />
                        </div>
                        <div>
                          <p className="font-medium text-white">{product.name_en}</p>
                          <p className="text-xs text-slate-500">{product.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-primary">{product.category_en}</span>
                    </td>
                    <td>
                      {editingPrice?.slug === product.slug ? (
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400">$</span>
                          <input
                            type="number"
                            step="0.01"
                            value={editingPrice?.value ?? ''}
                            onChange={(e) => setEditingPrice(prev => prev ? { ...prev, value: e.target.value } : null)}
                            className="input w-24 py-1.5 px-2 text-sm"
                            autoFocus
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') handleSavePrice(product.slug!);
                              if (e.key === 'Escape') handleCancelEdit();
                            }}
                          />
                        </div>
                      ) : (
                        <span className="text-lg font-semibold text-accent-200">{product.price}</span>
                      )}
                    </td>
                    <td>
                      <div className="flex items-center justify-center gap-2">
                        {editingPrice?.slug === product.slug ? (
                          <>
                            <button
                              onClick={() => handleSavePrice(product.slug!)}
                              className="p-2 rounded-lg bg-success-500/20 text-success-500 hover:bg-success-500/30 transition-colors"
                              title="Save"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="p-2 rounded-lg bg-error-500/20 text-error-500 hover:bg-error-500/30 transition-colors"
                              title="Cancel"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={() => handleEditPrice(product.slug!, product.price)}
                            className="p-2 rounded-lg bg-primary-500/20 text-primary-400 hover:bg-primary-500/30 transition-colors"
                            title="Edit Price"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-white/5 bg-dark-700">
              <p className="text-sm text-slate-400">
                Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
                {Math.min(currentPage * itemsPerPage, filteredProducts.length)} of{' '}
                {filteredProducts.length} products
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-dark-600 text-slate-400 hover:bg-dark-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm text-slate-300">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg bg-dark-600 text-slate-400 hover:bg-dark-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <AlertCircle className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">No products found</h3>
            <p className="text-slate-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </main>
    </div>
  );
}
