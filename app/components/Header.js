import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <h1 className="logo">OfertasIA</h1>
      </Link>

      <Link href="/search" className="search-button">
        🔍 Buscar ofertas
      </Link>
    </header>
  );
}
