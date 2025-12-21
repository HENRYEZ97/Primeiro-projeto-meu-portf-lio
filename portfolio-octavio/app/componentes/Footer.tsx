import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-md py-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <Image
          src="/imagens/novalogo.png.jpg"
          alt="Logo"
          width={140}
          height={60}
        />

        <p className="text-gray-400 text-sm text-center">
          © 2025 - Octávio Henrique — Todos os direitos reservados
          <span className="text-blue-700">.</span>
        </p>
      </div>
    </footer>
  );
}
