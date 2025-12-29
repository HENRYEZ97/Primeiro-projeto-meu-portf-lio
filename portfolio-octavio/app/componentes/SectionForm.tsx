import BackgroundGlow from "./BackgroundGlow";

export default function SectionForm() {
  return (
    <section id="contato" className="relative py-20 px-6 text-center bg-gradient-to-b from-black to-neutral-900">
      <BackgroundGlow variant="blue" />
      <h2 className="text-3xl font-bold text-white">
        FALE <span className="text-blue-700">COMIGO.</span>
      </h2>
      <p className="mt-3 text-neutral-400 max-w-xl mx-auto">
        Tem uma ideia, projeto ou oportunidade? Me chama e vamos conversar.
      </p>

      <form className="max-w-lg mx-auto mt-10 flex flex-col gap-4 bg-white/5 backdrop-blur border border-white/10 text-white p-4 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 transition">
        <input type="text" placeholder="Nome:" required className="bg-neutral-900 text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-600/40 transition" />
          <input type="email" placeholder="E-mail:" required className="bg-neutral-900 text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-600/40 transition" />
            <input type="text" placeholder="Celular:" className="bg-neutral-900 text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-600/40 transition" />
              <textarea placeholder="Sua mensagem:" required className="bg-neutral-900 text-white p-4 rounded-lg h-28 outline-none focus:ring-2 focus:ring-blue-600/40 transition" />
            <button type="submit" className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-600/30 transition cursor-pointer">
          Enviar
        </button>
      </form>
    </section>
  );
}
