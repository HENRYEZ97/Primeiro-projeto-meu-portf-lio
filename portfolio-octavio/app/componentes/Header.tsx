"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="stick top-0 z-50 bg-gradient-to-b from-black/100 bg-black-900 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 oy-4">
        <h2>OH. DEV</h2>
        <nav className="hidden md:flex gap-10 text-gray-300 text-lg">
          <Link href="#inicio" className="hover:scale-110 transition">Início</Link>
          <Link href="#projetos" className="hover:scale-110 transition">Projetos</Link>
          <Link href="#sobre" className="hover:scale-110 transition">Sobre</Link>
        </nav>

        <Link href="#contato">
          <button className="px-6 py-2 bg-blue-700/90 hover:bg-blue-600 rounded-full text-white shadow-lg hover:scale-110 transition">
            Contato
          </button>
        </Link>
      </div>
    </header>
  );
}
