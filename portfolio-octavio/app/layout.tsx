import "./globals.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

export const metadata = {
  title: "Portfólio Octávio",
  description: "Laboratório de códigos do Octávio Henrique",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-neutral-900 text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
