import CardProjeto from "./CardProjeto";
import { projetos } from "../data/projetos";

export default function SectionPortfolio() {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl font-bold">
          MEUS <span className="text-blue-700">PROJETOS</span>
        </h2>

           <div className="mt-12 flex flex-wrap justify-center gap-10">
         {projetos.map((projeto) => (
        <CardProjeto
        key={projeto.slug}
           slug={projeto.slug}
            titulo={projeto.titulo}
             imagem={projeto.imagens[0]}/>
          ))}
      </div>
    </div>
  </section>
   );
}
