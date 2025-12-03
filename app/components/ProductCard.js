"use client";

export default function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        background: "white",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", borderRadius: "6px" }}
      />

      <h3>{product.title}</h3>
      <p>R$ {product.price}</p>
    </div>
  );
}
