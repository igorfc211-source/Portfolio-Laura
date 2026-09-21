"use client";

import { FadeIn, SectionEyebrow, SectionTitle } from "./ui/ui-components";
import {
  LuChartBar,
  LuChartNoAxesCombined,
  LuClock3,
  LuFileStack,
  LuLayoutTemplate,
  LuPresentation,
} from "react-icons/lu";

const services = [
  {
    icon: LuPresentation,
    title: "Apresentações Comerciais",
    description: "Propostas, apresentações de produtos e materiais de vendas que convencem e fecham negócios.",
  },
  {
    icon: LuFileStack,
    title: "Pitch Decks",
    description: "Apresentações para investidores e aceleradoras que comunicam tração, mercado e potencial.",
  },
  {
    icon: LuChartNoAxesCombined,
    title: "Treinamentos Corporativos",
    description: "Materiais de treinamento e onboarding que facilitam o aprendizado e aumentam a retenção.",
  },
  {
    icon: LuChartBar,
    title: "Redesign de Slides",
    description: "Transformação de apresentações existentes em materiais visuais profissionais e impactantes.",
  },
  {
    icon: LuClock3,
    title: "Apresentações para Eventos",
    description: "Keynotes e apresentações para palestras, conferências e eventos corporativos.",
  },
  {
    icon: LuLayoutTemplate,
    title: "Templates Personalizados",
    description: "Modelos reutilizáveis com identidade visual da sua marca para uso interno da equipe.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="w-full bg-white py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <SectionEyebrow text="Diante a seu pedido" />
              <SectionTitle highlight="para cada necessidade.">Uma solução</SectionTitle>
            </div>
            <p className="text-sm text-[#5A3427]/65 max-w-xs leading-relaxed md:text-right">
              Do briefing à entrega final, cada projeto é tratado com atenção total à estratégia e ao detalhe visual.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="group p-6 rounded-2xl border border-[#E8D8C8] bg-white hover:border-[#CFAE99] hover:bg-[#F5EEE8] transition-all duration-300 h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-[#3A2118]/8">
                  <div className="w-10 h-10 rounded-xl bg-[#F5EEE8] text-[#7A4A38] flex items-center justify-center mb-4 group-hover:bg-[#E8D8C8] transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[#21140F] mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#5A3427]/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
