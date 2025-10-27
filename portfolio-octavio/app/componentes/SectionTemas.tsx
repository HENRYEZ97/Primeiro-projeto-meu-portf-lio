export default function SectionTemas() {
  const temas = [
    {
      icon: "bi bi-code-square",
      title: "Front-End",
      text: "O Front-End é a parte visual de um site, responsável por tudo que o usuário vê e interage. Envolve o uso de HTML, CSS e JS para criar interfaces dinâmicas e intuitivas."
    },
    {
      icon: "bi bi-github",
      title: "GitHub",
      text: "O GitHub é uma plataforma de hospedagem de código que usa Git. Ideal para colaboração, versionamento e publicação de repositórios."
    },
    {
      icon: "bi bi-filetype-py",
      title: "Python",
      text: "Python é uma linguagem de alto nível, usada em Web, automação, ciência de dados e IA. Simples, poderosa e uma das mais populares do mundo."
    }
  ];

  return (
    <section id="projetos" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-white">
        MEUS <span className="text-blue-700">TEMAS.</span>
      </h2>
      <div className="mt-12 flex flex-col md:flex-row gap-10 justify-center">
        {temas.map((t, i) => (
          <div
            key={i}
            className="p-10 border-2 border-white rounded-2xl text-white hover:scale-105 hover:shadow-blue-700 shadow-lg transition-all"
          >
            <i className={`${t.icon} text-5xl text-blue-600`}></i>
            <h3 className="text-2xl mt-4">{t.title}</h3>
            <p className="text-gray-300 mt-4 text-justify">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
