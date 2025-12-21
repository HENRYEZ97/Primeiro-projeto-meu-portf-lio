export default function SectionForm() {
  return (
    <section id="contato" className="py-20 px-6 text-center bg-gradient-to-b from-black to-neutral-900">
      <h2 className="text-3xl font-bold text-white">
        FALE <span className="text-blue-700">COMIGO.</span>
      </h2>

      <form className="max-w-lg mx-auto mt-10 flex flex-col gap-4">
        <input type="text" placeholder="Nome:" required className="bg-neutral-900 text-white p-4 rounded-lg outline-none" />
        <input type="email" placeholder="E-mail:" required className="bg-neutral-900 text-white p-4 rounded-lg outline-none" />
        <input type="text" placeholder="Celular:" className="bg-neutral-900 text-white p-4 rounded-lg outline-none" />
        <textarea placeholder="Sua mensagem:" required className="bg-neutral-900 text-white p-4 rounded-lg h-28 outline-none" />
        <button type="submit" className="mt-4 px-6 py-2 bg-blue-700 rounded-full text-gray-200 shadow-md hover:scale-110 transition">
          Enviar
        </button>
      </form>
    </section>
  );
}
