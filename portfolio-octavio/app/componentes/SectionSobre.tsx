import Image from "next/image";
import BackgroundGlow from "./BackgroundGlow";

export default function SectionSobre() {
  return (
    <section id="sobre" className="py-28 px-6 bg-gradient-to-b from-black/90 to-neutral-900 backdrop-blur-xl bg-white/5 border border-white/1 p-10">
           <BackgroundGlow variant="blue" />
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <Image
          src="/imagens/henrique.png.jpg"
           alt="Octávio Henrique"
            width={280}
            height={280}
          className="rounded-2xl shadow-xl"/>
        <div className="text-white max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">
          Olá, sou <span className="text-blue-700">Octávio Henrique</span>
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Desenvolvedor focado em transformar ideias em soluções reais por meio da programação. Tenho como base o desenvolvimento front-end moderno, trabalhando principalmente com React, Next.js, Node.js e Typescript, sempre buscando código limpo e bem estruturado.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Tenho experiência com projetos pessoais, estudos constantes e
            tecnologias atuais como React, Next.js, Node.js e TypeScript. Sou alguém movido por curiosidade, persistência e vontade real de evoluir. Gosto de aprender fazendo, errando, ajustando e tentando de novo até entender de verdade.
          </p>
        </div>
      </div>
    </section>
  );
}
