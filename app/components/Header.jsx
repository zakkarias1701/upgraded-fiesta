'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [q, setQ] = useState('')
  const router = useRouter()

  function onSearch(e) {
    e && e.preventDefault()
    if (!q) return
    router.push(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <header style={header}>
      <div style={container}>
        <div style={brand}>
          <img src="/logo.png" alt="OfertasIA" style={{height:48, marginRight:12}} />
          <div>
            <div style={{fontSize:20, fontWeight:700, color:'var(--brand)'}}>OfertasIA</div>
            <div style={{fontSize:12, color:'var(--muted)'}}>Compare. Economize. Compre.</div>
          </div>
        </div>

        <form onSubmit={onSearch} style={searchBar}>
          <input aria-label="Buscar" value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Buscar produtos, ex: celular, geladeira..." style={searchInput} />
          <button type="submit" style={searchBtn}>Buscar</button>
        </form>

        <nav style={{display:'flex', gap:12, alignItems:'center'}}>
          <a href="/analytics" style={navLink}>Analytics</a>
          <a href="/admin" style={navLink}>Admin</a>
        </nav>
      </div>
    </header>
  )
}

const container = { maxWidth:1100, margin:'0 auto', display:'flex', alignItems:'center', gap:20, justifyContent:'space-between', padding:'18px 16px' }
const header = { background:'#fff', boxShadow:'0 1px 4px rgba(0,0,0,0.06)' }
const brand = { display:'flex', alignItems:'center' }
const searchBar = { display:'flex', gap:8, alignItems:'center', flex:1, margin:'0 20px' }
const searchInput = { flex:1, padding:'10px 12px', borderRadius:8, border:'1px solid #e5e7eb' }
const searchBtn = { background:'var(--brand)', color:'#fff', border:'none', padding:'10px 14px', borderRadius:8, cursor:'pointer' }
const navLink = { color:'var(--brand)', textDecoration:'none', fontSize:14 }
