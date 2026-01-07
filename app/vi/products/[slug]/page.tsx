'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft, Shield, Truck, Award, Check,
  Beaker, Thermometer, FileText, Tag, Copy, CheckCircle2,
  FlaskConical, Dna, Scale, Sparkles, Layers, Info
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getProductBySlug, getFeaturedProducts, formatPrice } from '@/lib/products';
import { t, Locale } from '@/lib/i18n';

export default function ProductDetailPageVI() {
  const params = useParams();
  const slug = params.slug as string;
  const locale: Locale = 'vi';
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'description' | 'components' | 'specs' | 'research'>('description');

  const product = getProductBySlug(slug);
  const relatedProducts = getFeaturedProducts(4).filter((p) => p.slug !== slug);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  if (!product) {
    return (
      <>
        <Header locale={locale} />
        <main className="flex-1 bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <FlaskConical className="w-20 h-20 mx-auto text-gray-300 mb-6" />
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Không Tìm Thấy Sản Phẩm</h1>
              <p className="text-gray-600 mb-8">Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
              <Link href="/vi/products" className="btn-primary inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Xem Tất Cả Sản Phẩm
              </Link>
            </div>
          </div>
        </main>
        <Footer locale={locale} />
      </>
    );
  }

  const displayName = product.name_vi || product.name_en;
  const description = product.description_vi || product.description_en || 'Peptide nghiên cứu tinh khiết cao chỉ dành cho phòng thí nghiệm.';

  // Telegram order link
  const telegramUsername = 'YourTelegramBot';
  const orderMessage = encodeURIComponent(
    `Xin chào! Tôi muốn đặt hàng:\n\nSản phẩm: ${product.name_en}\nGiá: ${product.price}\n\nVui lòng gửi thông tin thanh toán.`
  );
  const telegramLink = `https://t.me/${telegramUsername}?text=${orderMessage}`;

  // Product specifications
  const specs = [
    { label: 'Độ tinh khiết', value: product.purity || '>98%', icon: Sparkles },
    { label: 'Dạng', value: product.form === 'Lyophilized Powder' ? 'Bột đông khô' : (product.form || 'Bột đông khô'), icon: Beaker },
    { label: 'Bảo quản', value: 'Bảo quản ở -20°C', icon: Thermometer },
  ];

  if (product.molecularWeight) {
    specs.unshift({ label: 'Khối lượng phân tử', value: product.molecularWeight, icon: Scale });
  }

  return (
    <>
      <Header locale={locale} />

      <main className="flex-1 bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/vi" className="text-gray-500 hover:text-primary-600 transition-colors">
                {t('home', locale)}
              </Link>
              <span className="text-gray-300">/</span>
              <Link href="/vi/products" className="text-gray-500 hover:text-primary-600 transition-colors">
                {t('products', locale)}
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-medium truncate max-w-[200px]">{displayName}</span>
            </div>
          </div>
        </div>

        {/* Product Detail */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Gallery */}
              <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8 lg:p-12">
                {/* Decorative elements */}
                <div className="absolute top-8 left-8 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-8 right-8 w-24 h-24 bg-science-500/5 rounded-full blur-3xl"></div>

                <div className="aspect-square relative">
                  {product.images && product.images.length > 0 ? (
                    <Image
                      src={product.images[0]}
                      alt={displayName}
                      fill
                      className="object-contain p-8"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FlaskConical className="w-32 h-32 text-gray-200" />
                    </div>
                  )}

                  {/* Stock badge */}
                  <div className="absolute top-4 right-4">
                    {product.inStock ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-white text-sm font-medium rounded-full shadow-lg">
                        <Check className="w-4 h-4" />
                        {t('inStock', locale)}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 text-white text-sm font-medium rounded-full shadow-lg">
                        {t('outOfStock', locale)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Thumbnail gallery */}
                {product.images && product.images.length > 1 && (
                  <div className="flex gap-3 mt-6 justify-center">
                    {product.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="w-20 h-20 flex-shrink-0 bg-white rounded-xl relative overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary-500 transition-colors shadow-sm"
                      >
                        <Image
                          src={img}
                          alt={`${displayName} ${idx + 1}`}
                          fill
                          className="object-contain p-2"
                          sizes="80px"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-8 lg:p-12 flex flex-col">
                {/* Category badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full w-fit mb-4">
                  <Tag className="w-3 h-3" />
                  {product.category_vi}
                </span>

                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {displayName}
                </h1>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-science-600 bg-clip-text text-transparent">
                    {formatPrice(product.price)}
                  </span>
                </div>

                {/* Quick specs grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <spec.icon className="w-4 h-4 text-primary-600" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider">{spec.label}</p>
                        <p className="text-sm font-semibold text-gray-900">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sequence (if available) */}
                {product.sequence && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Dna className="w-4 h-4 text-primary-600" />
                        <span className="text-sm font-medium text-gray-700">Chuỗi Amino Acid</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(product.sequence!, 'sequence')}
                        className="flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        {copiedField === 'sequence' ? (
                          <><CheckCircle2 className="w-3 h-3" /> Đã sao chép!</>
                        ) : (
                          <><Copy className="w-3 h-3" /> Sao chép</>
                        )}
                      </button>
                    </div>
                    <code className="block text-xs text-gray-600 font-mono break-all bg-white p-3 rounded-lg border border-gray-100">
                      {product.sequence}
                    </code>
                  </div>
                )}

                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-100 mb-6">
                  <div className="text-center">
                    <Shield className="w-6 h-6 mx-auto text-primary-600 mb-1" />
                    <span className="text-xs text-gray-600">&gt;98% Tinh Khiết</span>
                  </div>
                  <div className="text-center">
                    <Truck className="w-6 h-6 mx-auto text-science-600 mb-1" />
                    <span className="text-xs text-gray-600">Giao Hàng Nhanh</span>
                  </div>
                  <div className="text-center">
                    <Award className="w-6 h-6 mx-auto text-green-600 mb-1" />
                    <span className="text-xs text-gray-600">Đã Kiểm Nghiệm</span>
                  </div>
                </div>

                {/* Order Button */}
                <div className="mt-auto space-y-4">
                  <a
                    href={telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-primary-600 hover:to-science-600 text-white text-lg font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <svg className="w-6 h-6 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.248-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.099.154.232.17.325.015.094.034.31.019.478z" />
                    </svg>
                    {t('orderViaTelegram', locale)}
                  </a>

                  <p className="text-xs text-center text-gray-500">
                    Nhấn để mở Telegram với tin nhắn đặt hàng được điền sẵn
                  </p>
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="border-t border-gray-100">
              {/* Tab headers */}
              <div className="flex border-b border-gray-100 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`flex-1 min-w-[100px] px-4 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === 'description'
                      ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50/50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <FileText className="w-4 h-4 inline mr-2" />
                  {product.isBlend ? 'Tổng Quan' : 'Mô Tả'}
                </button>
                {product.isBlend && product.components && (
                  <button
                    onClick={() => setActiveTab('components')}
                    className={`flex-1 min-w-[100px] px-4 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                      activeTab === 'components'
                        ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50/50'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Layers className="w-4 h-4 inline mr-2" />
                    Thành Phần ({product.components.length})
                  </button>
                )}
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`flex-1 min-w-[100px] px-4 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === 'specs'
                      ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50/50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Beaker className="w-4 h-4 inline mr-2" />
                  Thông Số
                </button>
                <button
                  onClick={() => setActiveTab('research')}
                  className={`flex-1 min-w-[100px] px-4 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === 'research'
                      ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50/50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <FlaskConical className="w-4 h-4 inline mr-2" />
                  Nghiên Cứu
                </button>
              </div>

              {/* Tab content */}
              <div className="p-8">
                {activeTab === 'description' && (
                  <div className="prose prose-gray max-w-none">
                    {/* Overview section for blends */}
                    {product.isBlend && product.overview && (
                      <div className="mb-6 p-5 bg-gradient-to-r from-primary-50 to-science-50 rounded-2xl border border-primary-100">
                        <div className="flex items-start gap-3">
                          <Info className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tổng Quan Hỗn Hợp Peptide</h3>
                            <p className="text-gray-700 leading-relaxed">{product.overview}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <p className="text-gray-600 leading-relaxed text-base">{description}</p>

                    {/* Quick component summary for blends */}
                    {product.isBlend && product.components && (
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                          <Layers className="w-4 h-4" />
                          Các Thành Phần Trong Hỗn Hợp:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.components.map((comp, idx) => (
                            <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm">
                              <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                              {comp.name} <span className="text-gray-400">({comp.amount})</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Disclaimer */}
                    <div className="mt-8 p-5 bg-amber-50 rounded-2xl border border-amber-100">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-amber-800">
                          <strong className="font-semibold">{t('researchOnly', locale)}:</strong>{' '}
                          {product.disclaimer_vi || t('disclaimer', locale)}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Components Tab - Only for blends */}
                {activeTab === 'components' && product.components && (
                  <div className="space-y-6">
                    <p className="text-gray-600 mb-6">
                      Hỗn hợp này chứa {product.components.length} peptide được chọn lọc kỹ càng, mỗi loại đóng góp các đặc tính nghiên cứu độc đáo:
                    </p>

                    {product.components.map((comp, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 overflow-hidden">
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm font-bold">
                                  {idx + 1}
                                </span>
                                {comp.name}
                              </h3>
                              <span className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-science-100 text-science-700 text-sm font-medium rounded-full">
                                <Scale className="w-3 h-3" />
                                {comp.amount}
                              </span>
                            </div>
                            {comp.molecularWeight && (
                              <div className="text-right">
                                <p className="text-xs text-gray-500 uppercase">Khối Lượng Phân Tử</p>
                                <p className="text-sm font-semibold text-gray-900">{comp.molecularWeight}</p>
                              </div>
                            )}
                          </div>

                          <p className="text-gray-600 mb-4">{comp.description}</p>

                          {/* Biochemical Characteristics Section */}
                          {comp.biochemicalCharacteristics && (
                            <div className="mt-4 p-4 bg-gradient-to-r from-primary-50 to-science-50 rounded-xl border border-primary-100">
                              <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                <Beaker className="w-4 h-4 text-primary-600" />
                                Đặc Điểm Sinh Hóa
                              </h4>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                {comp.biochemicalCharacteristics}
                              </p>
                            </div>
                          )}

                          {comp.sequence && (
                            <div className="mt-4 p-3 bg-gray-50 rounded-xl">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-gray-500 uppercase flex items-center gap-1">
                                  <Dna className="w-3 h-3" />
                                  Chuỗi Amino Acid
                                </span>
                                <button
                                  onClick={() => copyToClipboard(comp.sequence!, `seq-${idx}`)}
                                  className="text-xs text-primary-600 hover:text-primary-700 flex items-center gap-1"
                                >
                                  {copiedField === `seq-${idx}` ? (
                                    <><CheckCircle2 className="w-3 h-3" /> Đã sao chép!</>
                                  ) : (
                                    <><Copy className="w-3 h-3" /> Sao chép</>
                                  )}
                                </button>
                              </div>
                              <code className="block text-xs text-gray-700 font-mono break-all bg-white p-2 rounded border border-gray-200">
                                {comp.sequence}
                              </code>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.molecularWeight && !product.isBlend && (
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <span className="text-gray-600">Khối lượng phân tử</span>
                          <span className="font-semibold text-gray-900">{product.molecularWeight}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <span className="text-gray-600">Độ tinh khiết</span>
                        <span className="font-semibold text-gray-900">{product.purity || '>98%'}</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <span className="text-gray-600">Dạng</span>
                        <span className="font-semibold text-gray-900">{product.form === 'Lyophilized Powder' ? 'Bột đông khô' : (product.form || 'Bột đông khô')}</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <span className="text-gray-600">Bảo quản</span>
                        <span className="font-semibold text-gray-900">-20°C</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <span className="text-gray-600">Danh mục</span>
                        <span className="font-semibold text-gray-900">{product.category_vi}</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <span className="text-gray-600">Kiểm soát chất lượng</span>
                        <span className="font-semibold text-gray-900">HPLC & MS</span>
                      </div>
                      {product.isBlend && product.components && (
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <span className="text-gray-600">Số lượng peptide</span>
                          <span className="font-semibold text-gray-900">{product.components.length} peptide</span>
                        </div>
                      )}
                    </div>

                    {/* Component specifications for blends */}
                    {product.isBlend && product.components && (
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                          <Layers className="w-4 h-4" />
                          Thông Số Các Thành Phần
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="text-left p-3 font-semibold text-gray-700 rounded-tl-lg">Peptide</th>
                                <th className="text-left p-3 font-semibold text-gray-700">Hàm Lượng</th>
                                <th className="text-left p-3 font-semibold text-gray-700 rounded-tr-lg">Khối Lượng Phân Tử</th>
                              </tr>
                            </thead>
                            <tbody>
                              {product.components.map((comp, idx) => (
                                <tr key={idx} className="border-b border-gray-100">
                                  <td className="p-3 font-medium text-gray-900">{comp.name}</td>
                                  <td className="p-3 text-gray-600">{comp.amount}</td>
                                  <td className="p-3 text-gray-600">{comp.molecularWeight || '-'}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {product.sequence && !product.isBlend && (
                      <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                        <p className="text-gray-600 mb-2 font-medium">Chuỗi Amino Acid:</p>
                        <code className="block text-sm text-gray-800 font-mono break-all bg-white p-4 rounded-lg border border-gray-200">
                          {product.sequence}
                        </code>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'research' && (
                  <div>
                    {/* Research Applications Section */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FlaskConical className="w-5 h-5 text-science-600" />
                        Ứng Dụng Nghiên Cứu
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {product.isBlend
                          ? 'Hỗn hợp này được sử dụng trong môi trường nghiên cứu điều tra sự điều hòa phối hợp của viêm, tạo mạch, hoạt động nguyên bào sợi và phản ứng stress tế bào. Các ứng dụng thực nghiệm bao gồm hệ thống nuôi cấy tế bào in vitro, mô hình mô ex vivo và nghiên cứu trên động vật.'
                          : 'Peptide này đã được nghiên cứu trong nhiều bối cảnh khác nhau. Dưới đây là một số ứng dụng nghiên cứu đã được ghi nhận:'
                        }
                      </p>
                      <p className="text-sm font-medium text-gray-700 mb-3">Các lĩnh vực nghiên cứu cụ thể bao gồm:</p>
                      {product.researchApplications && product.researchApplications.length > 0 ? (
                        <ul className="space-y-2 mb-6">
                          {product.researchApplications.map((app, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-science-500 mt-2 flex-shrink-0"></span>
                              {app}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-science-500 mt-2 flex-shrink-0"></span>
                            Nghiên cứu in vitro
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-science-500 mt-2 flex-shrink-0"></span>
                            Thí nghiệm phòng thí nghiệm
                          </li>
                        </ul>
                      )}
                      {product.isBlend && (
                        <p className="text-gray-600 text-sm italic">
                          Công thức kết hợp cho phép các nhà nghiên cứu đánh giá các hiệu ứng tín hiệu chồng chéo và phân kỳ mà không cần các quy trình quản lý song song.
                        </p>
                      )}
                    </div>

                    {/* Pathway / Mechanistic Context Section - For blends with components */}
                    {product.isBlend && product.components && product.components.some(c => c.biochemicalCharacteristics) && (
                      <div className="mb-8 pt-8 border-t border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {product.name_en}: Con Đường / Bối Cảnh Cơ Chế
                        </h3>
                        <div className="space-y-6 mt-6">
                          {product.components.map((comp, idx) => (
                            comp.biochemicalCharacteristics && (
                              <div key={idx} className="prose prose-sm max-w-none">
                                <p className="text-gray-700 leading-relaxed">
                                  <span className="font-semibold text-gray-900">{comp.name}</span>{' '}
                                  {comp.biochemicalCharacteristics.charAt(0).toLowerCase() + comp.biochemicalCharacteristics.slice(1)}
                                </p>
                              </div>
                            )
                          ))}
                          <p className="text-gray-600 mt-4 pt-4 border-t border-gray-100">
                            Sự hội tụ của các cơ chế này hỗ trợ nghiên cứu về sự phối hợp tín hiệu đa lớp trong các hệ thống sinh học viêm và sửa chữa.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Pathway / Mechanistic Context Section - For individual peptides */}
                    {!product.isBlend && product.biochemicalCharacteristics && (
                      <div className="mb-8 pt-8 border-t border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {product.name_en}: Con Đường / Bối Cảnh Cơ Chế
                        </h3>
                        {product.overview && (
                          <p className="text-gray-600 mt-4 mb-6 leading-relaxed">
                            {product.overview}
                          </p>
                        )}
                        <div className="prose prose-sm max-w-none mt-4">
                          <p className="text-gray-700 leading-relaxed">
                            {product.biochemicalCharacteristics}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="mt-8 p-5 bg-primary-50 rounded-2xl border border-primary-100">
                      <p className="text-sm text-primary-800">
                        <strong>Lưu ý:</strong> Tất cả các ứng dụng nghiên cứu đều dựa trên tài liệu khoa học đã công bố. Sản phẩm này chỉ dành cho mục đích nghiên cứu và không dành cho tiêu thụ của con người.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Sản Phẩm Liên Quan</h2>
                <Link
                  href="/vi/products"
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1"
                >
                  Xem tất cả
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.slug} product={p} locale={locale} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer locale={locale} />
    </>
  );
}
