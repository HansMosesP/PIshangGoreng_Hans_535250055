import Card from "@/components/Card";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-amber-800 mb-6">Produk Kami</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}