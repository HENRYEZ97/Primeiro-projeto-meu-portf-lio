import { projetos } from "@/app/data/projetos";
import Image from "next/image";

export default function ProjetoPage({
  params,
}: {
  params: { slug: string };
}) {
  const projeto = projetos.find((p) => p.slug === params.slug);

  if (!projeto) return null;

  return (
    <main className="min-h-screen px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{projeto.titulo}</h1>

      <p className="text-gray-300 mb-10">{projeto.descricao}</p>

      <h2 className="text-2xl font-semibold mb-4">Tecnologias</h2>
      <ul className="flex flex-wrap gap-4 mb-10">
        {projeto.tecnologias.map((tech) => (
          <li key={tech} className="px-4 py-2 bg-neutral-800 rounded-full">
            {tech}
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projeto.imagens.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={projeto.titulo}
            width={400}
            height={300}
            className="rounded-xl"
          />
        ))}
      </div>
    </main>
  );
}
