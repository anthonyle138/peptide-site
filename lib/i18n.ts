// Internationalization support for EN/VI

export type Locale = 'en' | 'vi';

export const translations = {
  en: {
    // Site
    siteName: 'PeptideLab',
    tagline: 'Premium Research Peptides',
    disclaimer: 'All products are for laboratory research purposes only. Not for human consumption.',

    // Navigation
    home: 'Home',
    products: 'Products',
    about: 'About',
    contact: 'Contact',

    // Categories
    allPeptides: 'All Peptides',
    popular: 'Popular',
    peptideBlends: 'Peptide Blends',
    cosmeticPeptides: 'Cosmetic Peptides',
    bioregulators: 'Bioregulators',
    igfProteins: 'IGF-1 Proteins',
    capsules: 'Capsules',

    // Product
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    orderViaTelegram: 'Order via Telegram',
    addToCart: 'Add to Cart',
    viewDetails: 'View Details',
    specifications: 'Specifications',
    description: 'Description',
    researchOnly: 'Research Use Only',

    // UI
    search: 'Search products...',
    categories: 'Categories',
    price: 'Price',
    sortBy: 'Sort By',
    filterBy: 'Filter By',
    showAll: 'Show All',
    noProducts: 'No products found',

    // Footer
    freeShipping: 'Free Shipping',
    securePayment: 'Secure Payment',
    qualityGuaranteed: 'Quality Guaranteed',
    researchSupport: '24/7 Research Support',
    quickLinks: 'Quick Links',
    customerService: 'Customer Service',
    legal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    shippingInfo: 'Shipping Info',
    refundPolicy: 'Refund Policy',
    allRightsReserved: 'All rights reserved',

    // Hero
    heroTitle: 'Premium Research Peptides',
    heroSubtitle: 'High purity compounds for laboratory research. Trusted by researchers worldwide.',
    shopNow: 'Shop Now',
    learnMore: 'Learn More',

    // Features
    purity: 'Purity',
    purityDesc: '>98% purity verified by HPLC',
    shipping: 'Shipping',
    shippingDesc: 'Worldwide delivery available',
    support: 'Support',
    supportDesc: 'Expert research assistance',
  },
  vi: {
    // Site
    siteName: 'PeptideLab',
    tagline: 'Peptide Nghiên Cứu Cao Cấp',
    disclaimer: 'Tất cả sản phẩm chỉ dành cho mục đích nghiên cứu trong phòng thí nghiệm. Không dành cho tiêu thụ của con người.',

    // Navigation
    home: 'Trang Chủ',
    products: 'Sản Phẩm',
    about: 'Giới Thiệu',
    contact: 'Liên Hệ',

    // Categories
    allPeptides: 'Tất Cả Peptide',
    popular: 'Phổ Biến',
    peptideBlends: 'Peptide Phối Trộn',
    cosmeticPeptides: 'Peptide Mỹ Phẩm',
    bioregulators: 'Chất Điều Hòa Sinh Học',
    igfProteins: 'Protein IGF-1',
    capsules: 'Viên Nang',

    // Product
    inStock: 'Còn Hàng',
    outOfStock: 'Hết Hàng',
    orderViaTelegram: 'Đặt Hàng Qua Telegram',
    addToCart: 'Thêm Vào Giỏ',
    viewDetails: 'Xem Chi Tiết',
    specifications: 'Thông Số',
    description: 'Mô Tả',
    researchOnly: 'Chỉ Dùng Cho Nghiên Cứu',

    // UI
    search: 'Tìm kiếm sản phẩm...',
    categories: 'Danh Mục',
    price: 'Giá',
    sortBy: 'Sắp Xếp',
    filterBy: 'Lọc Theo',
    showAll: 'Hiển Thị Tất Cả',
    noProducts: 'Không tìm thấy sản phẩm',

    // Footer
    freeShipping: 'Miễn Phí Vận Chuyển',
    securePayment: 'Thanh Toán An Toàn',
    qualityGuaranteed: 'Đảm Bảo Chất Lượng',
    researchSupport: 'Hỗ Trợ Nghiên Cứu 24/7',
    quickLinks: 'Liên Kết Nhanh',
    customerService: 'Dịch Vụ Khách Hàng',
    legal: 'Pháp Lý',
    privacyPolicy: 'Chính Sách Bảo Mật',
    termsOfService: 'Điều Khoản Dịch Vụ',
    shippingInfo: 'Thông Tin Vận Chuyển',
    refundPolicy: 'Chính Sách Hoàn Tiền',
    allRightsReserved: 'Bảo lưu mọi quyền',

    // Hero
    heroTitle: 'Peptide Nghiên Cứu Cao Cấp',
    heroSubtitle: 'Hợp chất tinh khiết cao cho nghiên cứu phòng thí nghiệm. Được tin dùng bởi các nhà nghiên cứu toàn cầu.',
    shopNow: 'Mua Ngay',
    learnMore: 'Tìm Hiểu Thêm',

    // Features
    purity: 'Độ Tinh Khiết',
    purityDesc: '>98% độ tinh khiết được xác minh bằng HPLC',
    shipping: 'Vận Chuyển',
    shippingDesc: 'Giao hàng toàn cầu',
    support: 'Hỗ Trợ',
    supportDesc: 'Tư vấn nghiên cứu chuyên nghiệp',
  },
};

export function t(key: keyof typeof translations.en, locale: Locale = 'en'): string {
  return translations[locale][key] || translations.en[key] || key;
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/vi')) return 'vi';
  return 'en';
}
