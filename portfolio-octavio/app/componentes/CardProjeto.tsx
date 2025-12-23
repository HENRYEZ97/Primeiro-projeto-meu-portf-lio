import Link from "next/link";

type CardProjetoProps = {
  slug: string;
  titulo: string;
  imagem: string;
};

export default function CardProjeto({
  slug,
  titulo,
  imagem,
}: CardProjetoProps) {
  return (
    <Link href={`/projetos/${slug}`}>
      <div
        className="relative w-80 h-[460px] bg-cover bg-center rounded-3xl overflow-hidden group cursor-pointer"
        style={{ backgroundImage: `url(${imagem})` }}
      >
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-4">
          <h3 className="text-xl font-semibold text-white">{titulo}</h3>
          <span className="px-6 py-2 bg-blue-600 rounded-full text-white">
            Ver detalhes
          </span>
        </div>
      </div>
    </Link>
  );
}
