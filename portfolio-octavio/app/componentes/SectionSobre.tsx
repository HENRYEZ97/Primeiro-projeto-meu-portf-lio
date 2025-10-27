import Image from "next/image";

export default function SectionSobre() {
  return (
    <section id="sobre" className="py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <Image
          src="/imagens/henrique.png.jpg"
          alt="Octávio Henrique"
          width={300}
          height={300}
          className="rounded-xl"
        />

        <div className="text-white max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">
            Olá, Sou <span className="text-blue-700">Octávio Henrique.</span>
          </h2>
          <p className="text-gray-300 text-justify mb-4">
            Sou apaixonado por tecnologia e tudo o que ela pode transformar no nosso dia a dia. Desde cedo me interesso por inovações, softwares e automatizações.
          </p>
          <p className="text-gray-300 text-justify mb-8">
            Busco sempre aprender mais através de cursos, projetos pessoais e trocas com outros devs. Meu objetivo é crescer como profissional e contribuir com soluções modernas.
          </p>

          <div className="flex gap-4">
            <button className="p-3 bg-black border border-blue-700 rounded-full hover:scale-110 transition">
              <i className="bi bi-instagram text-xl"></i>
            </button>
            <button className="p-3 bg-black border border-blue-700 rounded-full hover:scale-110 transition">
              <i className="bi bi-github text-xl"></i>
            </button>
            <button className="p-3 bg-black border border-blue-700 rounded-full hover:scale-110 transition">
              <i className="bi bi-whatsapp text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
