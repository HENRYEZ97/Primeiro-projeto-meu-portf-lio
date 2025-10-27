import SectionTop from "./componentes/SectionTop";
import SectionTemas from "./componentes/SectionTemas";
import SectionSobre from "./componentes/SectionSobre";
import SectionPortfolio from "./componentes/SectionPortfolio";
import SectionForm from "./componentes/SectionForm";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <SectionTop />
      <SectionTemas />
      <SectionSobre />
      <SectionPortfolio />
      <SectionForm />
    </main>
  );
}
