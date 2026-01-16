"use client";
import Link from "next/link";
import RedeSocial from "./RedeSocial";

export default function Header() {
  return (
    <header className="stick top-0 z-50 bg-gradient-to-t from-black/100 bg-black-900 backdrop-blur-md shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 oy-4">
        <h2 className="text-3xl h-30 text-center pt-10 text-white">O.H.M.S DEV</h2>
        <nav className="hidden md:flex gap-10 text-gray-300 text-lg">
          <Link href="/#inicio" className="hover:text-white transition transform hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">Início</Link>
            <Link href="/#portfolio" className="hover:text-white transition transform hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">Projetos</Link>
              <Link href="/#sobre" className="hover:text-white transition transform hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">Sobre</Link>
                </nav>
                <RedeSocial />
              <Link href="#contato">
              <button className="cursor-pointer px-6 py-2 bg-blue-700/90 hover:bg-blue-600 rounded-full text-white shadow-lg transition">
            Contato
          </button>
        </Link>
      </div>
    </header>
  );
}
