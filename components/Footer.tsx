'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Truck, Award, HeadphonesIcon, Mail, Send, ChevronRight, Beaker } from 'lucide-react';
import Logo from './Logo';
import { Locale, t } from '@/lib/i18n';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const prefix = locale === 'vi' ? '/vi' : '';
  const currentYear = new Date().getFullYear();

  const features = [
    { icon: Shield, label: t('qualityGuaranteed', locale), desc: '>98% purity' },
    { icon: Truck, label: t('freeShipping', locale), desc: 'Orders over $200' },
    { icon: Award, label: t('securePayment', locale), desc: 'Crypto accepted' },
    { icon: HeadphonesIcon, label: t('researchSupport', locale), desc: 'Expert help' },
  ];

  const quickLinks = [
    { href: `${prefix}/`, label: t('home', locale) },
    { href: `${prefix}/products`, label: t('products', locale) },
    { href: `${prefix}/about`, label: t('about', locale) },
    { href: `${prefix}/contact`, label: t('contact', locale) },
  ];

  const legalLinks = [
    { href: `${prefix}/privacy`, label: t('privacyPolicy', locale) },
    { href: `${prefix}/terms`, label: t('termsOfService', locale) },
    { href: `${prefix}/shipping`, label: t('shippingInfo', locale) },
    { href: `${prefix}/refunds`, label: t('refundPolicy', locale) },
  ];

  return (
    <footer className="relative bg-dark-900 text-white overflow-hidden mt-20">
      {/* Subtle glow effects */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[400px] bg-primary-500/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-secondary-500/5 rounded-full blur-[120px]"></div>

      {/* Features strip */}
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <feature.icon className="w-5 h-5 text-primary-400" />
                <div>
                  <span className="text-white font-medium">{feature.label}</span>
                  <span className="text-slate-500 ml-2 text-sm">{feature.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Brand & Contact */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-500/20 rounded-xl">
                <Beaker className="w-8 h-8 text-primary-400" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-white">PeptideLab</h2>
                <p className="text-sm text-slate-500">Research Peptides</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
              {t('disclaimer', locale)}
            </p>

            {/* Contact CTA Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-500/20 via-primary-600/10 to-transparent border border-primary-500/20 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
              <div className="space-y-3 mb-5">
                <a href="mailto:contact@peptidelab.com" className="flex items-center gap-3 text-slate-300 hover:text-primary-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>contact@peptidelab.com</span>
                </a>
                <a href="https://t.me/YourTelegramBot" className="flex items-center gap-3 text-slate-300 hover:text-[#0088cc] transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.248-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.099.154.232.17.325.015.094.034.31.019.478z" />
                  </svg>
                  <span>@YourTelegramBot</span>
                </a>
              </div>
              <a
                href="https://t.me/YourTelegramBot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-400 text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50"
              >
                <Send className="w-4 h-4" />
                <span>Start Chat on Telegram</span>
              </a>
            </div>
          </div>

          {/* Right side - Links */}
          <div className="grid grid-cols-2 gap-12 lg:pl-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                {t('quickLinks', locale)}
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-slate-400 hover:text-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-slate-600 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                {t('legal', locale)}
              </h3>
              <ul className="space-y-4">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-slate-400 hover:text-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-slate-600 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} PeptideLab · {t('allRightsReserved', locale)}
            </p>
            <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-xs font-medium border border-amber-500/20">
              <Shield className="w-3.5 h-3.5" />
              <span>{t('researchOnly', locale)}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
