'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Locale } from '@/lib/i18n';

interface LanguageSwitcherProps {
  locale: Locale;
  className?: string;
}

export default function LanguageSwitcher({ locale, className = '' }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    // Remove current locale prefix and add new one
    let newPath = pathname;

    if (pathname.startsWith('/vi')) {
      newPath = pathname.replace(/^\/vi/, '') || '/';
    }

    if (newLocale === 'vi') {
      newPath = '/vi' + (newPath === '/' ? '' : newPath);
    }

    router.push(newPath);
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <button
        onClick={() => switchLocale('en')}
        className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
          locale === 'en'
            ? 'bg-primary-600 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('vi')}
        className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
          locale === 'vi'
            ? 'bg-primary-600 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        VI
      </button>
    </div>
  );
}
