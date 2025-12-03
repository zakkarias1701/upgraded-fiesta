import Header from './components/Header'
import ProductCard from './components/ProductCard'

async function fetchFeatured() {
  // aqui usamos a API agregadora no seu backend
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/aggregate_search?q=smartphone`, { cache: 'no-store' })
    if (!res.ok) return []
    const data = await res.json()
    return data.produtos || []
  } catch (e) {
    return []
  }
}

export default async function Page() {
  const featured = await fetchFeatured()

  const categories = [
    { id:'eletronicos', title:'Eletrônicos' },
    { id:'casa', title:'Casa e Cozinha' },
    { id:'moda', title:'Moda' },
    { id:'beleza', title:'Beleza' },
    { id:'esportes', title:'Esportes' },
    { id:'brinquedos', title:'Brinquedos' },
  ]

  return (
    <div>
      <Header />

      <main style={{maxWidth:1100, margin:'28px auto', padding:'0 16px'}}>
        <section style={hero}>
          <div>
            <h1 style={{fontSize:34, margin:0}}>OfertasIA — encontre as melhores promoções</h1>
            <p style={{color:'var(--muted)', marginTop:8}}>Comparamos preços automaticamente e mostramos o melhor lugar para comprar.</p>
          </div>
          <img src="/logo.png" alt="OfertasIA" style={{height:100, opacity:0.95}} />
        </section>

        <section style={{marginTop:22}}>
          <h2 style={{margin:0, fontSize:18}}>Categorias</h2>
          <div style={catGrid}>
            {categories.map(c => (
              <a key={c.id} href={`/search?q=${encodeURIComponent(c.title)}`} style={catCard}>
                <div style={{fontWeight:700}}>{c.title}</div>
                <div style={{fontSize:12, color:'var(--muted)'}}>Ver ofertas</div>
              </a>
            ))}
          </div>
        </section>

        <section style={{marginTop:28}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <h2 style={{margin:0}}>Ofertas em destaque</h2>
            <a href="/search?q=ofertas" style={{color:'var(--brand)', textDecoration:'none'}}>Ver todas</a>
          </div>

          <div style={grid}>
            {featured.length === 0 ? <div style={{padding:20}}>Nenhuma oferta no momento.</div> : featured.slice(0,9).map(p => <ProductCard key={p.id} p={p} />)}
          </div>
        </section>

      </main>

      <footer style={{textAlign:'center', padding:30, color:'var(--muted)'}}>© {new Date().getFullYear()} OfertasIA — Todas as ofertas agregadas.</footer>
    </div>
  )
}

const hero = { background:'#fff', padding:20, display:'flex', gap:20, borderRadius:12, alignItems:'center', justifyContent:'space-between', boxShadow:'0 1px 6px rgba(0,0,0,0.04)' }
const catGrid = { display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:12, marginTop:12 }
const catCard = { background:'#fff', padding:14, borderRadius:10, textDecoration:'none', color:'#111', boxShadow:'0 1px 4px rgba(0,0,0,0.04)', display:'flex', flexDirection:'column', gap:6 }
const grid = { display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:18, marginTop:14 }
