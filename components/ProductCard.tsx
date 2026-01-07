'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, ArrowUpRight, Check, Package } from 'lucide-react';
import { Product, formatPrice } from '@/lib/products';
import { Locale, t } from '@/lib/i18n';

interface ProductCardProps {
  product: Product;
  locale: Locale;
}

export default function ProductCard({ product, locale }: ProductCardProps) {
  const prefix = locale === 'vi' ? '/vi' : '';
  const name = locale === 'vi' ? product.name_vi : product.name_en;
  const displayName = name || product.name_en;

  // Telegram order link
  const telegramUsername = 'YourTelegramBot';
  const orderMessage = encodeURIComponent(
    `Hi! I want to order:\nProduct: ${product.name_en}\nPrice: ${product.price}\n\nPlease send payment details.`
  );
  const telegramLink = `https://t.me/${telegramUsername}?text=${orderMessage}`;

  return (
    <div className="group relative bg-dark-800 rounded-2xl overflow-hidden border border-white/5 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary-500/30">
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-4 left-4 w-20 h-20 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-colors duration-500"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 bg-secondary-500/10 rounded-full blur-2xl group-hover:bg-secondary-500/20 transition-colors duration-500"></div>

        {product.images && product.images.length > 0 ? (
          <Image
            src={product.images[0]}
            alt={displayName}
            fill
            className="object-contain p-6 transition-all duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Package className="w-16 h-16 text-slate-700" />
          </div>
        )}

        {/* Stock badge */}
        <div className="absolute top-3 right-3 z-10">
          {product.inStock ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-success-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-lg">
              <Check className="w-3 h-3" />
              {t('inStock', locale)}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-warning-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-lg">
              {t('outOfStock', locale)}
            </span>
          )}
        </div>

        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <Link
              href={`${prefix}/products/${product.slug}`}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/95 backdrop-blur-sm rounded-xl text-sm font-medium text-dark-900 hover:bg-white transition-colors shadow-lg"
            >
              <Eye className="w-4 h-4" />
              {locale === 'vi' ? 'Xem chi tiết' : 'View Details'}
            </Link>
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2.5 bg-[#0088cc] rounded-xl hover:bg-[#0077b5] transition-colors shadow-lg"
              title={t('orderViaTelegram', locale)}
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.248-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.099.154.232.17.325.015.094.034.31.019.478z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 relative">
        {/* Category tag */}
        <span className="inline-block px-2 py-0.5 bg-dark-700 text-slate-400 text-[10px] font-medium uppercase tracking-wider rounded-md mb-2">
          {locale === 'vi' ? product.category_vi : product.category_en}
        </span>

        <Link href={`${prefix}/products/${product.slug}`} className="block group/title">
          <h3 className="font-semibold text-white line-clamp-2 min-h-[48px] group-hover/title:text-primary-400 transition-colors duration-300">
            {displayName}
          </h3>
        </Link>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-accent-200">
              {formatPrice(product.price)}
            </span>
          </div>

          <Link
            href={`${prefix}/products/${product.slug}`}
            className="flex items-center gap-1 text-sm text-slate-500 hover:text-primary-400 transition-colors group/link"
          >
            <span className="hidden sm:inline">{locale === 'vi' ? 'Chi tiết' : 'Details'}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>

        {/* Order button */}
        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium rounded-xl hover:from-primary-400 hover:to-primary-500 transition-all duration-300 shadow-lg shadow-primary-500/20 group/btn"
        >
          <svg className="w-4 h-4 transition-transform group-hover/btn:scale-110" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.248-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.099.154.232.17.325.015.094.034.31.019.478z" />
          </svg>
          {t('orderViaTelegram', locale)}
        </a>
      </div>
    </div>
  );
}
