import React from 'react'

export default function ProductCard({ p }) {
  return (
    <article style={card}>
      <img src={p.thumbnail} alt={p.titulo} style={img} />
      <h3 style={{fontSize:15, margin:'8px 0'}}>{p.titulo}</h3>
      <div style={{fontWeight:700, marginBottom:8}}>R$ {p.preco}</div>
      <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
        <a href={p.link_afiliado} target="_blank" rel="noreferrer" style={buyBtn}>Comprar</a>
        <a href={p.link_original} target="_blank" rel="noreferrer" style={originBtn}>Origem</a>
      </div>
    </article>
  )
}

const card = { background:'var(--card)', padding:12, borderRadius:10, boxShadow:'0 1px 6px rgba(0,0,0,0.05)', display:'flex', flexDirection:'column' }
const img = { width:'100%', height:160, objectFit:'cover', borderRadius:8 }
const buyBtn = { background:'#10b981', color:'#fff', padding:'8px 10px', borderRadius:8, textDecoration:'none', fontWeight:600 }
const originBtn = { background:'#e5e7eb', color:'#111', padding:'8px 10px', borderRadius:8, textDecoration:'none' }
