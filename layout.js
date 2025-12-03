export const metadata = {
  title: "OfertasIA",
  description: "Buscador inteligente de ofertas e comparador de preços",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head />
      <body
        style={{
          margin: 0,
          fontFamily:
            "Inter, system-ui, -apple-system, Roboto, 'Helvetica Neue', Arial",
          background: "#f7fafc",
          color: "#111827",
        }}
      >
        {children}
      </body>
    </html>
  );
}


