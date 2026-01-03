"use client";

import { GitHub } from "react-feather";
import { Linkedin } from "react-feather";

export default function RedeSocial () {
    return (
        <div className="flex items-center gap-6">
            <a
            href="https://github.com/HENRYEZ97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition transform hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            >
                <GitHub size={22} />Github
            </a>

            <a
            href="https://www.linkedin.com/in/henrique-mendes-2a213530a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition transform hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(14,165,233,0.6)]"
            >
                <Linkedin size={22} />Linkedin             
            </a>    
        </div>
    )
}