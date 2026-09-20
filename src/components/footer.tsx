"use client";

import { primarySocials } from "@/src/lib/data/social";
import { SocialLink } from "./social-link";

export function Footer() {
  return (
    <footer className="w-full bg-[#080E1A] border-t border-white/5 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/images/lindaPerfeita.png"
                alt="Lindissima"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <p className="font-serif text-sm font-bold text-white">
                Laura Tagliari
              </p>
              <p className="text-[10px] text-slate-500 mt-0.5">
                Design de Apresentações Profissionais
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6">
            {["Portfólio", "Serviços", "Processo", "Contato"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-xs text-slate-500 hover:text-white transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Redes sociais */}
          <div className="flex items-center gap-2">
            {primarySocials.map((social) => (
              <SocialLink
                key={social.id}
                social={social}
                variant="dark"
              />
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-[10px] text-slate-600">
            © 2026 Laura Tagliari. Todos os direitos reservados.
          </p>

          <p className="text-[10px] text-slate-600">
            Design com propósito. Apresentações com resultado.
          </p>
        </div>
      </div>
    </footer>
  );
}