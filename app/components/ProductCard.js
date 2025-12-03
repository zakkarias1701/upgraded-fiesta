"use client"

export default function ProductCard({ p }) {
  return (
    <a
      href={p.link}
      target="_blank"
      style={{
        display: "block",
        background: "white",
        padding: 16,
        borderRadius: 12,
        textDecoration: "none",
        color: "#111",
        boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
      }}
    >
      <img
        src={p.imagem}
        alt={p.titulo}
        style={{
          width: "100%",
          height: 180,
          objectFit: "cover",
          borderRadius: 8,
          marginBottom: 10,
        }}
      />

      <h3 style={{ fontSize: 16, margin: "8px 0" }}>{p.titulo}</h3>

      <strong style={{ fontSize: 18, color: "var(--brand)" }}>
        R$ {p.preco}
      </strong>

      <div style={{ marginTop: 6, color: "var(--muted)", fontSize: 13 }}>
        Ver no vendedor →
      </div>
    </a>
  );
}
