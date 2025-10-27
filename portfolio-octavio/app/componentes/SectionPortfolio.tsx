export default function SectionPortfolio() {
  const projetos = [
    { img: "/imagens/1.png", title: "Projeto 1" },
    { img: "/imagens/2.png", title: "Projeto 2" },
    { img: "/imagens/3.png", title: "Projeto 3" },
  ];

  return (
    <section id="portfolio" className="py-20 px-6 shadow-xl">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white">
          MEU <span className="text-blue-700">PORTFÓLIO</span>
        </h2>

        <div className="mt-12 flex flex-col md:flex-row justify-around gap-10">
          {projetos.map((p, i) => (
            <div
              key={i}
              className="relative w-80 h-[460px] bg-cover bg-center rounded-3xl overflow-hidden group"
              style={{ backgroundImage: `url(${p.img})` }}
            >
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-xl text-white font-semibold">
                {p.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
