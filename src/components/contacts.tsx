"use client";

import { socials } from "@/src/lib/data/social";
import { FadeIn } from "./ui/ui-components";
import { LuExternalLink, LuSend } from "react-icons/lu";

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
                Seus slides transmitem
                <br />o nível da{" "}
                <span className="text-[#E8D8C8]">sua apresentação?</span>
              </h2>
              <p className="text-sm text-[#E8D8C8]/75 leading-relaxed max-w-md">
                Solicite seu slide e descubra como transformar sua apresentação em algo que vai prender a atenção de quem vê
              </p>

              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      target={social.id === "linkedin" ? "_blank" : undefined}
                      rel={
                        social.id === "linkedin"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={`Abrir ${social.label} de Laura Tagliari`}
                      className="group flex items-center justify-between rounded-2xl border border-[#E8D8C8]/15 bg-[#F5EEE8]/8 p-4 text-[#F5EEE8] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5EEE8]/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8D8C8]"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#E8D8C8] text-[#5A3427]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#E8D8C8]/70">
                            {social.label}
                          </span>
                          <span className="mt-0.5 block truncate text-sm font-semibold">
                            {social.handle}
                          </span>
                        </span>
                      </span>
                      <LuExternalLink className="h-4 w-4 shrink-0 text-[#E8D8C8]/80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-[2rem] border border-[#E8D8C8] bg-[#F5EEE8] p-6 shadow-2xl shadow-[#21140F]/18 md:p-8">
              <div className="mb-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7A4A38]">
                  Solicitar meu slide
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold tracking-tight text-[#21140F]">
                  Conte para mim o que você precisa apresentar
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5A3427]/75">
                  Preencha as informações principais para enviar uma solução personalizada para o seu slide.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-[#5A3427]">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-[#D7BFAE] bg-white/80 px-4 py-3 text-sm text-[#21140F] placeholder:text-[#7A4A38]/40 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#7A4A38]"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-[#5A3427]">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-xl border border-[#D7BFAE] bg-white/80 px-4 py-3 text-sm text-[#21140F] placeholder:text-[#7A4A38]/40 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#7A4A38]"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-[#5A3427]">
                      Número de telefone
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-xl border border-[#D7BFAE] bg-white/80 px-4 py-3 text-sm text-[#21140F] placeholder:text-[#7A4A38]/40 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#7A4A38]"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-[#5A3427]">
                      Tipo de slide
                    </label>
                    <select className="w-full rounded-xl border border-[#D7BFAE] bg-white/80 px-4 py-3 text-sm text-[#21140F] transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#7A4A38]">
                      <option value="">Selecione uma opção</option>
                      <option value="pitch">Pitch Deck</option>
                      <option value="corporativo">Apresentação Corporativa</option>
                      <option value="academico">Apresentação Acadêmica</option>
                      <option value="palestra">Palestra ou Evento</option>
                      <option value="redesign">Redesign de Slides</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-[#5A3427]">
                    Especificações do projeto
                  </label>
                  <textarea
                    rows={5}
                    className="w-full resize-none rounded-xl border border-[#D7BFAE] bg-white/80 px-4 py-3 text-sm text-[#21140F] placeholder:text-[#7A4A38]/40 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#7A4A38]"
                    placeholder="Conte o tema, objetivo da apresentação, prazo, quantidade aproximada de slides e qualquer detalhe importante."
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#3A2118] px-6 py-3.5 text-sm font-bold text-[#F5EEE8] shadow-lg shadow-[#3A2118]/20 transition-all hover:-translate-y-0.5 hover:bg-[#5A3427] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4A38] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5EEE8]"
                >
                  Enviar solicitação
                  <LuSend className="h-4 w-4" />
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
