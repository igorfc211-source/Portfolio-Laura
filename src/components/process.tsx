"use client";

import { FadeIn, SectionEyebrow, SectionTitle } from "./ui/ui-components";
import { LuArrowRight } from "react-icons/lu";

const steps = [
  {
    number: "01",
    title: "Briefing",
    description: "Entendimento profundo do objetivo, público-alvo, tom de voz e contexto do projeto.",
  },
  {
    number: "02",
    title: "Estrutura",
    description: "Organização da narrativa e do fluxo de informações antes de qualquer elemento visual.",
  },
  {
    number: "03",
    title: "Design",
    description: "Criação do visual com identidade, hierarquia tipográfica e coerência em todos os slides.",
  },
  {
    number: "04",
    title: "Revisões",
    description: "Até 2 rodadas de ajustes incluídas para garantir que o resultado atenda plenamente.",
  },
  {
    number: "05",
    title: "Entrega",
    description: "Arquivo final em PowerPoint, Keynote ou Google Slides — pronto para apresentar.",
  },
];

export function ProcessSection() {
  return (
    <section id="processo" className="w-full bg-[#F5EEE8] py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <FadeIn>
          <div className="text-center mb-16">
            <SectionEyebrow text="Como funciona" />
            <SectionTitle highlight="do briefing à entrega.">Processo claro,</SectionTitle>
            <p className="text-sm text-[#5A3427]/70 mt-4 max-w-md mx-auto leading-relaxed">
              Um processo transparente e eficiente para garantir resultados excepcionais dentro do prazo.
            </p>
          </div>
        </FadeIn>

        {/* Steps — linha horizontal em desktop */}
        <FadeIn delay={0.1}>
          <div className="relative">
            {/* Linha conectora (desktop) */}
            <div className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-[#D7BFAE]" style={{ top: "2.25rem" }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {steps.map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center lg:items-center">
                  {/* Número / circle */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm mb-4 relative z-10 border-2 transition-colors ${
                      i === 0
                        ? "bg-[#3A2118] text-[#F5EEE8] border-[#3A2118]"
                        : "bg-white text-[#7A4A38] border-[#E8D8C8]"
                    }`}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[#21140F] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#5A3427]/70 leading-relaxed max-w-[160px]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CTA inline */}
        <FadeIn delay={0.2}>
          <div className="mt-14 text-center">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A4A38] hover:text-[#3A2118] transition-colors"
            >
              Iniciar um projeto
              <LuArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
