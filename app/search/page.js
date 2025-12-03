import Header from '../components/Header'
import ProductCard from '../components/ProductCard'

export default async function SearchPage({ searchParams }) {
  const q = searchParams.q || ''
  let produtos = []
  if (q) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/aggregate_search?q=${encodeURIComponent(q)}`, { cache: 'no-store' })
      const data = await res.json()
      produtos = data.produtos || []
    } catch (e) {
      produtos = []
    }
  }

  return (
    <div>
      <Header />
      <main style={{maxWidth:1100, margin:'28px auto', padding:'0 16px'}}>
        <h1 style={{fontSize:20}}>Resultados para: <span style={{color:'var(--brand)'}}>{q}</span></h1>
        <div style={{marginTop:12, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:18}}>
          {produtos.length === 0 ? <div style={{padding:20}}>Nenhum resultado.</div> : produtos.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </main>
    </div>
  )
}
