"use client";

import { socials } from "@/src/lib/data/social";
import { FadeIn } from "./ui/ui-components";
import { LuExternalLink } from "react-icons/lu";

export function ContactSection() {
  return (
    <section id="contato" className="w-full bg-[#3A2118] py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          <FadeIn>
            <div>
              <span className="text-xs font-bold tracking-[2.5px] uppercase text-[#E8D8C8] mb-6 block">
                Contato
              </span>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5EEE8] tracking-tight leading-tight mb-4">
                Sua apresentação transmite
                <br />o nível da{" "}
                <span className="text-[#E8D8C8]">sua empresa?</span>
              </h2>
              <p className="text-sm text-[#E8D8C8]/75 leading-relaxed max-w-md">
                Solicite meu slide e descubra como transformar sua apresentação em uma ferramenta de comunicação profissional.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target={social.id === "linkedin" ? "_blank" : undefined}
                    rel={social.id === "linkedin" ? "noopener noreferrer" : undefined}
                    aria-label={`Abrir ${social.label} de Laura Tagliari`}
                    className="group rounded-3xl border border-[#E8D8C8]/18 bg-[#F5EEE8] p-6 text-[#21140F] shadow-2xl shadow-[#21140F]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8D8C8]"
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#E8D8C8] text-[#5A3427] transition-colors group-hover:bg-[#7A4A38] group-hover:text-[#F5EEE8]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <LuExternalLink className="h-4 w-4 text-[#7A4A38] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7A4A38]">
                      {social.label}
                    </p>
                    <p className="mt-3 break-words text-lg font-black tracking-tight">
                      {social.handle}
                    </p>
                  </a>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
