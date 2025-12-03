import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/aggregate_search?q=promo`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) return [];

  return res.json();
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main className="container">
      <Header />

      <h2 className="section-title">Ofertas populares</h2>

      <div className="grid">
        {products?.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </main>
  );
}
