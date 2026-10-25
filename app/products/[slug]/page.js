import { getProductBySlug, products } from "@/data/products";
import { notFound } from "next/navigation";
import Button from "@/components/Button";

export default function ProductDetail({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) notFound();

  return (
    <section className="max-w-2xl mx-auto py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="h-48 bg-amber-200 flex items-center justify-center text-7xl rounded mb-4">
          🍌
        </div>
        <h1 className="text-3xl font-bold text-amber-800 mb-2">
          {product.name}
        </h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl font-bold text-amber-600 mb-6">
          Rp {product.price.toLocaleString("id-ID")}
        </p>
        <Button href="/products">← Kembali ke Produk</Button>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}