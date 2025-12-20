import SectionTop from "./componentes/SectionTop";
import SectionSobre from "./componentes/SectionSobre";
import SectionPortfolio from "./componentes/SectionPortfolio";
import SectionForm from "./componentes/SectionForm";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <SectionTop />
      <SectionSobre />
      <SectionPortfolio />
      <SectionForm />
    </main>
  );
}
