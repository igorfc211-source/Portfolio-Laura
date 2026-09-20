"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuMenu, LuX } from "react-icons/lu";

const navLinks = [
  { label: "Portfólio", href: "#portfolio", id: "portfolio" },
  { label: "Serviços", href: "#servicos", id: "servicos" },
  { label: "Processo", href: "#processo", id: "processo" },
  { label: "Contato", href: "#contato", id: "contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("portfolio");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-40 border-b border-slate-200/80 bg-slate-100/88 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "py-3 shadow-lg shadow-slate-950/5" : "py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
          <a
            href="#"
            className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100"
            aria-label="Ir para o início"
          >
            <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-blue-600 text-sm font-black text-white shadow-sm">
              LT
            </span>
            <span className="text-sm font-black tracking-tight text-slate-950">
              Laura <span className="text-blue-700">Tagliari</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const active = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`rounded-full px-1 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 ${
                    active
                      ? "text-blue-700"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contato"
              className="rounded-full bg-blue-600 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100"
            >
              Solicitar meu slide
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 md:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <LuX className="h-5 w-5" />
            ) : (
              <LuMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-slate-950/30 pt-20 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mx-4 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-4 text-base font-bold transition-colors ${
                    activeSection === link.id
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white"
              >
                Solicitar meu slide
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
