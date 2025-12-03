// app/page.js

function getBaseUrl() {
  // Durante build, Vercel injeta essa variável automaticamente
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Ambiente local
  return "http://localhost:3000";
}

async function fetchProducts() {
  const baseUrl = getBaseUrl();

  try {
    const res = await fetch(`${baseUrl}/api/aggregate_search?q=promo`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Erro ao buscar produtos:", res.status);
      return [];
    }

    return res.json();
  } catch (err) {
    console.error("Falha no fetch:", err);
    return [];
  }
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main style={{ padding: "20px" }}>
      <h1>Promoções</h1>

      {products.length === 0 && <p>Nenhum produto encontrado.</p>}

      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <strong>{prod.title}</strong>
            <br />
            {prod.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
