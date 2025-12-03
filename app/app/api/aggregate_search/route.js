export async function POST(request) {
  try {
    const body = await request.json();
    return Response.json({ ok: true, body });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
