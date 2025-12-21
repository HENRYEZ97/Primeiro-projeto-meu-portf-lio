export default function SectionPortfolio() {
  const projetos = [
    { img: "/imagens/1.png", title: "Projeto 1" },
    { img: "/imagens/2.png", title: "Projeto 2" },
    { img: "/imagens/3.png", title: "Projeto 3" },
  ];

  return (
    <section id="portfolio" className="py-28 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">
          Meus <span className="text-blue-700">Projetos</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {projetos.map((p, i) => (
            <div
              key={i}
              className="relative h-[420px] rounded-3xl overflow-hidden group bg-white/5 backdrop-blur-md border border-white/10"
            >
              <div
                className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition"
                style={{ backgroundImage: `url(${p.img})` }}
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-xl font-semibold">
                {p.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
