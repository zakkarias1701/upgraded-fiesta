export const metadata = {
  title: "OfertasIA",
  description: "Buscador inteligente de ofertas no Brasil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
