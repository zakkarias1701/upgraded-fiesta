"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  async function search() {
    const res = await fetch(`/api/aggregate_search?q=${query}`);
    const data = await res.json();
    setResults(data.results || []);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Buscar produtos</h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite o nome do produto"
        style={{ width: "250px", padding: "8px", marginRight: "10px" }}
      />

      <button onClick={search}>Buscar</button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {results.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </div>
  );
}
