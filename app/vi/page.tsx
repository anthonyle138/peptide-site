'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Truck, FlaskConical, Award, Sparkles, Zap, Globe, Lock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Logo from '@/components/Logo';
import { getFeaturedProducts, getCategories } from '@/lib/products';
import { t, Locale } from '@/lib/i18n';

export default function HomePageVI() {
  const locale: Locale = 'vi';
  const featuredProducts = getFeaturedProducts(8);
  const categories = getCategories();

  const features = [
    {
      icon: FlaskConical,
      title: t('purity', locale),
      desc: t('purityDesc', locale),
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
    },
    {
      icon: Truck,
      title: t('shipping', locale),
      desc: t('shippingDesc', locale),
      color: 'from-science-500 to-science-600',
      bgColor: 'bg-science-50',
    },
    {
      icon: Award,
      title: t('support', locale),
      desc: t('supportDesc', locale),
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
    },
  ];

  return (
    <>
      <Header locale={locale} />

      <main className="flex-1">
        {/* Hero Section - Modern Gradient with Animated Elements */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 gradient-hero"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-science-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl"></div>
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-pattern opacity-20"></div>

          <div className="container mx-auto px-4 relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm mb-8">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>Peptide Nghiên Cứu Cao Cấp</span>
              </div>

              {/* Logo */}
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <Logo size="lg" variant="icon" />
                </div>
              </div>

              {/* Heading with gradient */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {t('heroTitle', locale)}
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                {t('heroSubtitle', locale)}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/vi/products"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <span>{t('shopNow', locale)}</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/vi/about"
                  className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <span>{t('learnMore', locale)}</span>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Độ tinh khiết &gt;98%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  <span>Thanh toán Crypto an toàn</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span>Giao hàng toàn cầu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Features - Bento Grid Style */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative p-8 rounded-3xl ${feature.bgColor} overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
                >
                  {/* Gradient orb */}
                  <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>

                  <div className={`relative z-10 w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{feature.title}</h3>
                  <p className="text-gray-600 relative z-10">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories - Modern Cards */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
                Duyệt theo danh mục
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('categories', locale)}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Duyệt qua bộ sưu tập peptide nghiên cứu đa dạng của chúng tôi theo danh mục
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {categories.map((category, index) => (
                <Link
                  key={category.id}
                  href={`/vi/products?category=${category.id}`}
                  className="group relative p-5 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center overflow-hidden hover:-translate-y-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-science-500/0 group-hover:from-primary-500/5 group-hover:to-science-500/5 transition-all duration-300"></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-primary-50 to-science-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FlaskConical className="w-7 h-7 text-primary-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
                      {category.name_vi}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products - Modern Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="inline-block px-4 py-1.5 bg-science-100 text-science-700 text-sm font-medium rounded-full mb-4">
                  Bán chạy nhất
                </span>
                <h2 className="text-4xl font-bold text-gray-900">{t('popular', locale)} {t('products', locale)}</h2>
                <p className="text-gray-600 mt-2">Peptide nghiên cứu bán chạy nhất từ danh mục của chúng tôi</p>
              </div>
              <Link
                href="/vi/products"
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-gray-700 font-medium transition-all group"
              >
                {t('showAll', locale)}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} locale={locale} />
              ))}
            </div>

            <div className="mt-10 text-center md:hidden">
              <Link href="/vi/products" className="btn-primary inline-flex items-center gap-2">
                {t('showAll', locale)}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section - Modern Gradient */}
        <section className="py-24 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-900 to-science-900"></div>
          <div className="absolute inset-0 bg-pattern opacity-10"></div>

          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-science-500/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm mb-6">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Đặt hàng nhanh & an toàn</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sẵn Sàng Đặt Hàng?</h2>
              <p className="text-xl text-white/70 mb-10">
                Liên hệ chúng tôi qua Telegram để đặt hàng nhanh chóng và thanh toán bằng tiền điện tử an toàn.
              </p>

              <a
                href="https://t.me/YourTelegramBot"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-gray-900 font-semibold px-10 py-5 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <svg className="w-6 h-6 text-[#0088cc]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.248-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.099.154.232.17.325.015.094.034.31.019.478z" />
                </svg>
                <span>{t('orderViaTelegram', locale)}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Disclaimer - Clean Modern Style */}
        <section className="py-6 bg-amber-50 border-y border-amber-100">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 text-amber-800">
              <Shield className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">
                <strong>Chỉ Dùng Cho Nghiên Cứu:</strong> {t('disclaimer', locale)}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
