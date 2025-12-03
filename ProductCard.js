export default function ProductCard({title,price,link}){
  return (
    <a href={link} style={{border:"1px solid #ccc",padding:10,borderRadius:8,textDecoration:"none",color:"#000"}}>
      <div>{title}</div>
      <strong>{price}</strong>
    </a>
  );
}