"use client";

import { primarySocials } from "@/src/lib/data/social";
import { FadeIn } from "./ui/ui-components";
import { SocialLink } from "./social-link";

export function ContactSection() {
  return (
    <section id="contato" className="w-full bg-[#0F172A] py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Esquerda — copy + contatos */}
          <FadeIn>
            <div>
              <span className="text-xs font-bold tracking-[2.5px] uppercase text-blue-400 mb-6 block">
                Contato
              </span>

              {/* CTA headline */}
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
                Sua apresentação transmite
                <br />o nível da{" "}
                <span className="text-blue-400">sua empresa?</span>
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md mb-10">
                Solicite meu slide e descubra como transformar sua apresentação em uma ferramenta de comunicação profissional.
              </p>

              {/* Contatos */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {primarySocials.map((social) => (
                  <SocialLink
                    key={social.id}
                    social={social}
                    showLabel
                    variant="dark"
                  />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Direita — formulário */}
          <FadeIn delay={0.15}>
            <div className="bg-white rounded-2xl p-7 md:p-9">
              <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-1">Solicitar meu slide</h3>
              <p className="text-sm text-slate-400 mb-6">Respondo em até 24h com uma proposta personalizada.</p>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Nome</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-[#0F172A] placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1.5 block">E-mail</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-[#0F172A] placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Tipo de Projeto</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white">
                    <option value="">Selecione uma opção</option>
                    <option value="pitch">Pitch Deck</option>
                    <option value="corporativo">Apresentação Corporativa</option>
                    <option value="treinamento">Material de Treinamento</option>
                    <option value="academico">Trabalho Acadêmico</option>
                    <option value="proposta">Proposta Comercial</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Mensagem</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-[#0F172A] placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Conte sobre seu projeto, prazo e expectativas..."
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors shadow-sm shadow-blue-600/20"
                >
                  Solicitar meu slide
                </button>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
