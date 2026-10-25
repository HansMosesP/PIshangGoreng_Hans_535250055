export const products = [
  {
    slug: "pisang-goreng-keju",
    name: "Pisang Goreng Keju",
    shortDesc: "Pisang goreng crispy dengan topping keju melimpah.",
    description:
      "Pisang goreng dengan balutan tepung crispy, ditaburi keju cheddar parut melimpah dan susu kental manis.",
    price: 15000,
  },
  {
    slug: "pisang-goreng-coklat",
    name: "Pisang Goreng Coklat",
    shortDesc: "Pisang goreng dengan topping coklat lumer.",
    description:
      "Pisang goreng crispy dengan topping coklat leleh premium yang manis dan legit.",
    price: 13000,
  },
  {
    slug: "pisang-goreng-original",
    name: "Pisang Goreng Original",
    shortDesc: "Pisang goreng crispy klasik tanpa topping.",
    description:
      "Pisang goreng original dengan balutan tepung renyah, cocok disantap hangat-hangat.",
    price: 10000,
  },
  {
    slug: "pisang-goreng-matcha",
    name: "Pisang Goreng Matcha",
    shortDesc: "Pisang goreng dengan topping matcha premium.",
    description:
      "Pisang goreng crispy dengan saus matcha premium dari Jepang, perpaduan unik manis dan sedikit pahit.",
    price: 17000,
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}