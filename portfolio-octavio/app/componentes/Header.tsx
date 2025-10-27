"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 shadow-lg bg-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <Link href="/">
          <Image
            src="/imagens/novalogo.png.jpg"
            alt="Logo Octávio"
            width={200}
            height={80}
          />
        </Link>

        <nav className="hidden md:flex gap-10 text-gray-300 text-lg">
          <Link href="#inicio" className="hover:scale-110 transition">Início</Link>
          <Link href="#projetos" className="hover:scale-110 transition">Projetos</Link>
          <Link href="#sobre" className="hover:scale-110 transition">Sobre</Link>
        </nav>

        <Link href="#contato">
          <button className="px-6 py-2 bg-blue-800 rounded-full text-gray-200 shadow-md hover:scale-110 transition">
            Contato
          </button>
        </Link>
      </div>
      <hr className="border-blue-700 mt-4 mx-6" />
    </header>
  );
}
