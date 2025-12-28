"use client";
import { useParams } from "next/navigation";
import { projetos } from "@/app/data/projetos";
import Carrosel from "@/app/componentes/Carrosel";
import Image from "next/image";
import AppBackground from "@/app/componentes/AppBackground";

export default function ProjetoPage() {
  const params = useParams();
  const slug = params.slug as string;

  const slugNormalizado = decodeURIComponent(slug).toLowerCase();

  const projeto = projetos.find(
    (p) => p.slug.toLowerCase() === slugNormalizado
  );

  if (!projeto) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-xl">
          Projeto não encontrado 🚫 <br />
          slug recebido: <strong>{slugNormalizado}</strong>
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 pt-32 pb-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{projeto.titulo}</h1>

      <p className="text-gray-300 mb-10">{projeto.descricao}</p>

      <h2 className="text-2xl font-semibold mb-4">Tecnologias</h2>

      <ul className="flex flex-wrap gap-4 mb-12">
        {projeto.tecnologias.map((tech) => (
          <li
            key={tech}
            className="px-4 py-2 bg-neutral-800 rounded-full"
          >
            {tech}
          </li>
        ))}
      </ul>
<AppBackground />
      <Carrosel autoSlide autoSlideInterval={4000}>
        {projeto.imagens.map((img, i) => (
          <div key={i} className="flex justify-center">
            <Image
              src={img}
              alt={`${projeto.titulo} imagem ${i + 1}`}
              width={900}
              height={500}
              className="rounded-2xl object-cover"
            />
          </div>
        ))}
      </Carrosel>
    </main>
  );
}
