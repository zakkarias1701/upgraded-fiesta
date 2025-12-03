// app/page.js

async function fetchProducts() {
  try {
    const res = await fetch(`/api/aggregate_search?q=promo`, {
      // Permite revalidação (ISR) no Vercel
      next: { revalidate: 15 },
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

        {products?.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </main>
  );
}
