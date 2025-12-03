export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";

  if (!q.trim()) {
    return Response.json({ produtos: [] }, { status: 200 });
  }

  try {
    const resposta = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(q)}`
    );

    if (!resposta.ok) {
      return Response.json({ produtos: [] }, { status: 200 });
    }

    const dados = await resposta.json();

    const produtos = (dados.results || []).map((p) => ({
      id: p.id,
      title: p.title,
      price: p.price,
      thumbnail: p.thumbnail,
      permalink: p.permalink
    }));

    return Response.json({ produtos }, { status: 200 });
  } catch (e) {
    return Response.json({ produtos: [] }, { status: 200 });
  }
}

