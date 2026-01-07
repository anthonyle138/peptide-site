import ProductDetail from '@/components/ProductDetail';
import { getProductBySlug, getFeaturedProducts, getAllProducts } from '@/lib/products';

export function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug || '',
  })).filter(p => p.slug);
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug) ?? null;
  const relatedProducts = getFeaturedProducts(4).filter((p) => p.slug !== slug);

  return (
    <ProductDetail
      product={product}
      relatedProducts={relatedProducts}
      locale="vi"
      prefix="/vi"
    />
  );
}
