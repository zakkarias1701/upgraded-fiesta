export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />

      <h3 className="card-title">{product.title}</h3>

      <p className="card-price">R$ {product.price}</p>

      <a href={product.url} target="_blank" className="card-link">
        Ver oferta
      </a>
    </div>
  );
}
