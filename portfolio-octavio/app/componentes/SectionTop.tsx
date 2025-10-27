import Link from "next/link";
import Image from "next/image";

export default function SectionTop() {
  return (
    <section id="inicio" className="py-20 px-6 text-center md:text-left shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Laboratório de Códigos<span className="text-blue-700">.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-200 text-justify">
            No laboratório de códigos, mergulhamos fundo no universo da programação, desvendando as últimas tendências e transformando teoria em prática.
          </p>
          <Link href="#projetos">
            <button className="mt-8 px-8 py-3 bg-blue-700 rounded-full shadow-md hover:scale-110 transition">
              Mais
            </button>
          </Link>
        </div>

        <Image
          src="/imagens/ez.png.jpg"
          alt="Imagem topo"
          width={500}
          height={500}
          className="animate-bounce mt-50"
        />
      </div>
    </section>
  );
}
