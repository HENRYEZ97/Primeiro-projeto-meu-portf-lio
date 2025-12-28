import Link from "next/link";
import BackgroundGlow from "./BackgroundGlow";

export default function SectionTop() {
  return (
    <section
      id="inicio"
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-t from-black to-neutral-900 ">
<BackgroundGlow variant="cyan" />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Laboratório de Códigos<span className="text-blue-700">.</span>
             </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl">
          Transformando ideias em soluções reais através da programação,
        explorando tecnologia moderna e boas práticas.
         </p>
          <Link href="#portfolio">
            <button className="mt-10 px-8 py-3 bg-blue-700 hover:bg-blue-600 rounded-full shadow-lg transition cursor-pointer">
             Ver projetos
             </button>
              </Link>
             </div>
           </div>
    </section>
  );
}
