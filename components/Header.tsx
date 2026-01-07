'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, ArrowRight, Sparkles, Settings } from 'lucide-react';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { Locale, t } from '@/lib/i18n';

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const prefix = locale === 'vi' ? '/vi' : '';

  const navLinks = [
    { href: `${prefix}/`, label: t('home', locale) },
    { href: `${prefix}/products`, label: t('products', locale) },
    { href: `${prefix}/about`, label: t('about', locale) },
    { href: `${prefix}/contact`, label: t('contact', locale) },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `${prefix}/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-dark-900/95 backdrop-blur-lg shadow-lg border-b border-white/10'
        : 'bg-dark-900/80 backdrop-blur-md'
    }`}>
      {/* Animated top bar */}
      <div className="bg-gradient-to-r from-dark-800 via-primary-900/50 to-dark-800 text-white text-xs py-2 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 flex justify-between items-center relative">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-accent-200 animate-pulse" />
            <span className="hidden sm:inline font-medium text-slate-300">{t('researchOnly', locale)}</span>
            <span className="sm:hidden text-center text-slate-300">{t('researchOnly', locale)}</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/admin" className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-1">
              <Settings className="w-3 h-3" />
              <span className="hidden sm:inline">Admin</span>
            </Link>
            <LanguageSwitcher locale={locale} className="hidden sm:flex" />
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href={`${prefix}/`} className="flex-shrink-0 group">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <Logo size="md" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-slate-300 hover:text-white font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-300 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Search & Actions */}
          <div className="hidden md:flex items-center gap-3">
            <form onSubmit={handleSearch} className="relative group">
              <input
                type="text"
                placeholder={t('search', locale)}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-56 pl-10 pr-4 py-2.5 bg-dark-700 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 text-sm text-white placeholder-slate-500 transition-all duration-300 group-hover:border-white/20"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-hover:text-primary-400 transition-colors" />
            </form>

            <Link
              href={`${prefix}/products`}
              className="btn-primary flex items-center gap-2 group"
            >
              <span>{t('shopNow', locale)}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher locale={locale} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Glass effect */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
          <div className="bg-dark-700/90 backdrop-blur-xl rounded-2xl p-4 mt-2 border border-white/10">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('search', locale)}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-dark-600 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm text-white placeholder-slate-500"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              </div>
            </form>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-between group"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </nav>

            <Link
              href={`${prefix}/products`}
              className="mt-4 w-full btn-primary flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{t('shopNow', locale)}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
