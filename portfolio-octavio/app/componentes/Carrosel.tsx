"use client";

import { ReactNode, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

type CarroselProps = {
  children: ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

export default function Carrosel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarroselProps) {
  const [curr, setCurr] = useState(0);
  const total = slides.length;

  const prev = () => {
    setCurr((c) => (c === 0 ? total - 1 : c - 1));
  };

  const next = () => {
    setCurr((c) => (c === total - 1 ? 0 : c + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(next, autoSlideInterval);
    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, curr]);

  return (
    <div className="relative overflow-hidden rounded-2xl">
      
  
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="min-w-full">
            {slide}
          </div>
        ))}
      </div>

      {/* Botões */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white transition"
        >
          <ChevronLeft size={36} />
        </button>

        <button
          onClick={next}
          className="p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white transition"
        >
          <ChevronRight size={36} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurr(i)}
            className={`transition-all rounded-full 
              ${curr === i ? "w-4 h-4 bg-white" : "w-3 h-3 bg-white/50"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
