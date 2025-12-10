"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/hero-poli-1.jpg",
    alt: "Peças industriais de poliuretano",
    caption: "Peças técnicas usinadas em poliuretano",
    badge: "Indústria pesada",
  },
  {
    src: "/hero-poli-2.jpg",
    alt: "Texturas do material poliuretano",
    caption: "Espumas de alto desempenho para conforto e isolamento",
    badge: "Espumas flexíveis",
  },
  {
    src: "/hero-poli-3.jpg",
    alt: "Detalhe de laboratório químico",
    caption: "Pesquisa e inovação em laboratórios especializados",
    badge: "Inovação química",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto aspect-[4/3] overflow-hidden rounded-2xl border border-white/40 shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 480px, (min-width: 768px) 70vw, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-primary-100">{slide.badge}</p>
            <p className="text-lg font-semibold leading-snug">{slide.caption}</p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Ir para slide ${index + 1}`}
            className={`h-2.5 w-8 rounded-full transition-all ${
              index === current ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
