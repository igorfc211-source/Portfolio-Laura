"use client";

import { socials } from "@/src/lib/data/social";
import Image from "next/image";
import { SocialLink } from "./social-link";

const footerLinks = [
  { label: "Portfólio", href: "#portfolio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#21140F] border-t border-[#E8D8C8]/10 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/images/lindaPerfeita.png"
                alt="Lindissima"
                width={32}
                height={32}
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <p className="font-serif text-sm font-bold text-[#F5EEE8]">
                Laura Tagliari
              </p>
              <p className="text-[10px] text-[#E8D8C8]/55 mt-0.5">
                Design de Apresentações Profissionais
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-[#E8D8C8]/55 hover:text-[#F5EEE8] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Redes sociais */}
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <SocialLink
                key={social.id}
                social={social}
                variant="dark"
              />
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E8D8C8]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-[10px] text-[#E8D8C8]/45">
            © 2026 Laura Tagliari. Todos os direitos reservados.
          </p>

          <p className="text-[10px] text-[#E8D8C8]/45">
            Design com propósito. Apresentações com resultado.
          </p>
        </div>
      </div>
    </footer>
  );
}
