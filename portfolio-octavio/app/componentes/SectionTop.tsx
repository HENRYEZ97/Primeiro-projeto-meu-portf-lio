import Link from "next/link";
import BackgroundGlow from "./BackgroundGlow";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

export default function SectionTop() {
  return (
    <section
      id="inicio"
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-t from-black to-neutral-900 ">
<BackgroundGlow variant="blue" />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Laboratório de Códigos<span className="text-blue-700">.</span>
             </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-xl">
              O Laboratório de Códigos nasceu da necessidade de ir além da teoria e tornar real qualquer ideia de projeto e dar o primeiro passo 100% na prática e desenvolver as primeiras linhas de código de uma aplicação. Criei esse espaço para compartilhar os projetos desenvolvidos por mim ao longo dessa grande jornada de aprendizado e evolução constante no desenvolvimento web.
            </p>
            <p className="mt-6 text-xl text-gray-300 max-w-xl">
              No Laboratório de Códigos, trabalho com tecnologias modernas focadas em desenvolvimento web, performance e escalabilidade. Estou constantemente praticando e aprimorando minhas habilidades com ferramentas amplamente utilizadas no mercado e aplicando cada uma delas em projetos reais.
         </p>
          <Link href="#portfolio">
            <button className="mt-10 px-8 py-3 bg-blue-700 hover:bg-blue-600 rounded-full shadow-lg transition cursor-pointer">
             Ver projetos
             </button>
              </Link>
              <div className="mt-10 flex flex-wrap gap-3 text-sm text-gray-300 cursor-pointer">
                <span className="px-3 py-3 bg-white/3 rounded-full hover:text-white transition transform hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"><FaReact size={35}/></span>
                  <span className="px-3 py-3 bg-white/5 rounded-full hover:text-white transition transform hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"><SiNextdotjs size={35}/></span>
                    <span className="px-3 py-3 bg-white/5 rounded-full hover:text-white transition transform hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"><SiTypescript size={35}/></span>
                  <span className="px-3 py-3 bg-white/5 rounded-full hover:text-white transition transform hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"><FaNodeJs size={35}/></span>
                <span className="px-3 py-3 bg-white/5 rounded-full hover:text-white transition transform hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"><SiTailwindcss size={35}/></span>
              </div>
             </div>
             <div className="flex-1 hidden md:flex justify-center items-center">
              <img src="/imagens/dev1.png"
              alt="símbolo do código"
               className="w-[700px] md:w-[520px] lg:w-[700px] xl:w-[820px] cyber-logo transition-transform duration-700 hover:scale-110 cursor-pointer">
               </img>
             </div>
           </div>
    </section>
  );
}
