"use client"

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        background: "white",
        padding: "14px 22px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 99,
      }}
    >
      <a
        href="/"
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "var(--brand)",
          textDecoration: "none",
        }}
      >
        OfertasIA
      </a>

      <form action="/search" style={{ display: "flex", gap: 8 }}>
        <input
          type="text"
          name="q"
          placeholder="Buscar ofertas..."
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            border: "1px solid #ccc",
            minWidth: 200,
          }}
        />
        <button
          type="submit"
          style={{
            background: "var(--brand)",
            color: "white",
            padding: "8px 14px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
          }}
        >
          Buscar
        </button>
      </form>
    </header>
  );
}
