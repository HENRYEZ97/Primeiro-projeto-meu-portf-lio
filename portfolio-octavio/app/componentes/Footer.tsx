import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10 px-6 shadow-inner bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Image src="/imagens/novalogo.png.jpg" alt="Logo" width={160} height={60} />

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

      <p className="text-center text-gray-400 mt-6">
        © 2025 - Octávio Henrique - Todos os direitos reservados<span className="text-blue-700">.</span>
      </p>
    </footer>
  );
}
