"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="stick top-0 z-50 bg-gradient-to-t from-black/100 bg-black-900 backdrop-blur-md shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 oy-4">
        <h2 className="text-3xl h-30 text-center pt-10 text-white">O.H.M.S DEV</h2>
        <nav className="hidden md:flex gap-10 text-gray-300 text-lg">
          <Link href="#inicio" className="hover:scale-110 transition">Início</Link>
          <Link href="#portfolio" className="hover:scale-110 transition">Projetos</Link>
          <Link href="#sobre" className="hover:scale-110 transition">Sobre</Link>
        </nav>

        <Link href="#contato">
          <button className="cursor-pointer px-6 py-2 bg-blue-700/90 hover:bg-blue-600 rounded-full text-white shadow-lg hover:scale-110 transition">
            Contato
          </button>
        </Link>
      </div>
    </header>
  );
}
