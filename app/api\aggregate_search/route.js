export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q");

    if (!q) {
      return Response.json({ error: "Missing query" }, { status: 400 });
    }

    // Exemplo de resposta simulada
    const fakeResults = [
      {
        title: "Produto Exemplo",
        price: "199.90",
        image: "https://via.placeholder.com/300",
      },
    ];

    return Response.json({ results: fakeResults });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
