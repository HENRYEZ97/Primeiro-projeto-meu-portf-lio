import Link from "next/link";

type CardProjetoProps = {
    slug: string;
    titulo: string;
    imagem: string;
};

export default function CardProjeto ({
    slug,
    titulo,
    imagem,
}: CardProjetoProps) {

    return (
        <Link href={`/projetos/${slug}`}>
            <div className="relative w-80 h-[460px] bg-coverrelative w-80 h-[460px] bg-cover bg-center rounded-3xl overflow-hidden group"
                style={{ backgroundImage: `url(${imagem})`}}>
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-4"></div>
                    <h3 className="text-xl font-semibold">{titulo}</h3>
                    <button className="cursor-pointer absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-4">Ver detalhes</button>
                </div>
        </Link>
    )

}