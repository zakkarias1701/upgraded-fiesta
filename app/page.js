import Header from "./components/Header";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>
        <h1>OfertasIA</h1>
        <p>Busque produtos e compare preços com IA.</p>
      </main>
    </>
  );
}
