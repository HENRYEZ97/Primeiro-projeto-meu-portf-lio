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
    <Link href={`/projetos/${slug}`} className="group">
      <div
        className="
          relative w-80 h-[460px]
          rounded-3xl overflow-hidden
          bg-cover bg-center
          transition-all duration-500
          transform group-hover:scale-[1.04]
          shadow-lg shadow-black/40
          group-hover:shadow-blue-600/20"
          style={{ backgroundImage: `url(${imagem})` }}>
        
        <div
          className="
            absolute inset-0
            bg-black/60 backdrop-blur-sm
            opacity-0 group-hover:opacity-100
            transition-all duration-500
            flex flex-col items-center justify-center gap-4">
          <h3
            className="
              text-xl font-semibold text-white
              translate-y-4 opacity-0
              group-hover:translate-y-0 group-hover:opacity-100
              transition-all duration-500">{titulo}
          </h3>

          <span
            className="
              px-6 py-2 rounded-full
              bg-blue-600 hover:bg-blue-500
              text-white font-medium
              shadow-lg shadow-blue-600/30
              transition-all duration-300">
            Ver detalhes
          </span>
        </div>

        <div
          className="
            pointer-events-none absolute inset-0
            rounded-3xl
            ring-1 ring-white/10
            group-hover:ring-blue-500/30
            transition"
        />
      </div>
    </Link>
  );
}
