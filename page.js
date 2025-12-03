import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

export default function Page() {
  return (
    <div>
      <Header />
      <h1>Ofertas em destaque</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:20}}>
        <ProductCard title="Exemplo" price="R$ 100" link="#" />
      </div>
    </div>
  );
}