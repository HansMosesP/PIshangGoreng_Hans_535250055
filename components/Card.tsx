import Link from "next/link";

type Product = {
  slug: string;
  name: string;
  shortDesc: string;
  price: number;
};

export default function Card({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-3xl p-3 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 flex flex-col">
      <div className="h-48 bg-amber-50 rounded-2xl flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
        🍌
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-xl text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-500 flex-1 leading-relaxed">{product.shortDesc}</p>
        
        <div className="mt-6 flex justify-between items-center">
          <span className="font-extrabold text-lg text-amber-600">
            Rp {product.price.toLocaleString("id-ID")}
          </span>
          <Link
            href={`/products/${product.slug}`}
            className="text-sm font-bold bg-gray-900 hover:bg-amber-500 text-white px-5 py-2.5 rounded-full transition-colors"
          >
            Lihat
          </Link>
        </div>
      </div>
    </div>
  );
}