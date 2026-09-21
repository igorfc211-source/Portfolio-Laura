"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import { primarySocials } from "@/src/lib/data/social";
import { SocialLink } from "./social-link";


/* ── Conteúdo editável ────────────────────────────────────────────────────── */

// Foto principal da Laura. Troque somente este caminho quando o arquivo final chegar.
const LAURA_PHOTO = "/images/lindaPerfeita.jpeg";

const TAGLINE = "ESPECIALISTA EM MENTORIA COM APRESENTAÇÕES";
const CTA_LABEL = "Solicitar meu slide";

const stats = [
  { value: "10+", label: "Projetos premium criados" },
  { value: "98%", label: "Aprovação de Pitch Decks" },
  { value: "5x+", label: "Conversão em rodadas" },
];

/* ── Animation Presets ────────────────────────────────────────────────────── */

const smoothEase = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

/* ── Retrato da Laura ─────────────────────────────────────────────────────── */

function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-[#E8D8C8] via-[#F5EEE8] to-white shadow-2xl shadow-[#3A2118]/20 ring-1 ring-[#3A2118]/10">
      {failed ? (
        // Placeholder caso a imagem não exista / falhe ao carregar
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-7xl font-extrabold tracking-tight text-[#7A4A38]/35">
            LT
          </span>
        </div>
      ) : (
        <Image
          src={LAURA_PHOTO}
          alt="Retrato de Laura Tagliari"
          fill
          priority
          sizes="(min-width: 1024px) 440px, 90vw"
          className="object-cover object-top"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

/* ── Mini slide (mantém a identidade "slides" sem competir com a foto) ───── */

const MINI_LAYOUTS = ["cover", "chart", "metrics"] as const;

function MiniSlide({ animate }: { animate: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!animate) return;
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % MINI_LAYOUTS.length),
      3500
    );
    return () => clearInterval(timer);
  }, [animate]);

  const layout = MINI_LAYOUTS[index];

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-xl border border-[#E8D8C8]/15 bg-[#21140F] shadow-2xl shadow-[#21140F]/30"
    >
      <div className="flex h-6 items-center gap-1 border-b border-white/5 px-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57]/80" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#FEBC2E]/80" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]/80" />
      </div>

      <div className="relative aspect-[16/10]">
        <AnimatePresence mode="wait">
          <motion.div
            key={layout}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: smoothEase }}
            className="absolute inset-3"
          >
            {layout === "cover" && (
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-2 h-1 w-8 rounded-full bg-[#C79A7B]" />
                  <div className="mb-1.5 h-2 w-3/4 rounded-full bg-white/90" />
                  <div className="h-2 w-1/2 rounded-full bg-white/40" />
                </div>
                <div className="flex h-8 items-end gap-1">
                  {[40, 60, 35, 100, 55, 75].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        background: i === 3 ? "#C79A7B" : "rgba(245,238,232,0.12)",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {layout === "chart" && (
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="h-1.5 w-10 rounded-full bg-white/40" />
                  <span className="rounded border border-[#C79A7B]/25 bg-[#C79A7B]/10 px-1.5 py-0.5 font-mono text-[8px] text-[#E8D8C8]">
                    +34.8%
                  </span>
                </div>
                <div className="flex h-12 items-end gap-1">
                  {[20, 35, 25, 60, 45, 75, 55, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        background: i === 7 ? "#C79A7B" : "rgba(245,238,232,0.12)",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {layout === "metrics" && (
              <div className="flex h-full flex-col justify-between">
                <div className="grid grid-cols-3 gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="rounded-md border border-white/5 bg-white/5 p-1.5"
                    >
                      <div className="mb-1.5 h-1 w-4 rounded-full bg-white/30" />
                      <div
                        className="h-2 w-full rounded-full"
                        style={{
                          background: i === 1 ? "#E8D8C8" : "rgba(255,255,255,0.78)",
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between rounded-md border border-[#C79A7B]/20 bg-[#C79A7B]/10 p-2">
                  <div className="h-1.5 w-14 rounded-full bg-[#C79A7B]/80" />
                  <div className="h-1.5 w-1.5 rounded-full bg-[#C79A7B]" />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── Hero Section ────────────────────────────────────────────────────────── */

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex w-full items-center overflow-hidden bg-[#F5EEE8] px-6 pt-28 pb-16 md:px-12 md:pt-32 md:pb-20 lg:px-20 lg:pt-28">
      {/* Fundo: brilho suave + grade de pontos que se dissolve */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 75% 45%, rgba(122, 74, 56, 0.16) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(90, 52, 39, 0.18) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse at 72% 50%, black 0%, transparent 65%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 72% 50%, black 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* ══════════════════════ COLUNA ESQUERDA ══════════════════════ */}
        <motion.div
          variants={stagger}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          className="flex flex-col"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E8D8C8] bg-white/45 px-3.5 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#7A4A38]" />
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#5A3427]">
                DESIGN DE APRESENTAÇÕES
              </span>
            </span>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="mb-2 text-sm font-medium text-[#7A4A38]">
              Olá, eu sou a
            </p>
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight text-[#21140F] md:text-6xl lg:text-7xl">
              Laura <br />
              <span className="bg-gradient-to-r from-[#3A2118] via-[#5A3427] to-[#7A4A38] bg-clip-text text-transparent">
                Tagliari
              </span>
            </h1>
          </motion.div>

          <motion.div variants={fadeUp} className="my-6 flex items-center gap-3">
            <span className="h-0.5 w-10 shrink-0 rounded-full bg-[#7A4A38]" />
            <span className="text-xs font-bold leading-relaxed tracking-[0.18em] text-[#7A4A38]">
              {TAGLINE}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="max-w-lg text-xl font-semibold leading-snug text-[#3A2118] md:text-2xl"
          >
            Transformo slides entediantes em{" "}
            <span className="text-[#7A4A38] underline decoration-[#E8D8C8] underline-offset-4">
              narrativas que fecham negócios.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-md text-base leading-relaxed text-[#5A3427]/80"
          >
            Pitch decks para captação, reuniões de conselho e keynotes desenhados
            com princípios de neuro-design e foco absoluto em conversão.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-xl bg-[#3A2118] px-6 py-3.5 text-sm font-semibold text-[#F5EEE8] shadow-lg shadow-[#3A2118]/25 transition-all hover:-translate-y-0.5 hover:bg-[#5A3427] hover:shadow-[#3A2118]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4A38] focus-visible:ring-offset-2 active:translate-y-0"
            >
              {CTA_LABEL}
              <LuArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E8D8C8] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#3A2118] transition-all hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4A38] focus-visible:ring-offset-2"
            >
              Ver Portfólio
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-wrap items-center gap-2"
          >
            {primarySocials.map((social) => (
              <SocialLink key={social.id} social={social} />
            ))}
          </motion.div>

          <motion.dl
            variants={fadeUp}
            className="mt-12 grid grid-cols-3 divide-x divide-[#E8D8C8] border-t border-[#E8D8C8] pt-8"
          >
            {stats.map((s) => (
              <div key={s.label} className="pl-4 first:pl-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="block text-2xl font-extrabold tabular-nums text-[#21140F]">
                  {s.value}
                </dd>
                <span
                  aria-hidden="true"
                  className="mt-1 block text-[11px] font-medium leading-snug text-[#7A4A38]/70"
                >
                  {s.label}
                </span>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* ══════════════════════ COLUNA DIREITA (FOTO) ══════════════════════ */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: smoothEase }}
          className="relative mx-auto w-full max-w-[440px] pb-8"
        >
          {/* Camadas decorativas atrás da foto */}
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#7A4A38]/18 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 aspect-[4/5] translate-x-4 translate-y-4 rounded-[2rem] border border-[#E8D8C8]"
          />

          <div className="relative">
            <Portrait />

            {/* Selo de agenda */}
            <div className="absolute left-4 top-4 flex items-center gap-2.5 rounded-full border border-[#E8D8C8]/80 bg-[#F5EEE8]/90 px-4 py-1.5 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7A4A38] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7A4A38]" />
              </span>
              <span className="text-[11px] font-semibold tracking-wide text-[#3A2118]">
                Agenda aberta para este mês
              </span>
            </div>

            {/* Mini slide (só a partir de telas ≥ sm) */}
            <div className="absolute -right-6 top-[44%] hidden w-[160px] sm:block lg:-right-10 lg:w-[190px]">
              <MiniSlide animate={!reduceMotion} />
            </div>

            {/* Citação */}
            <div className="absolute -bottom-6 left-3 right-3 rounded-2xl border border-[#E8D8C8]/80 border-l-4 border-l-[#7A4A38] bg-[#F5EEE8]/95 p-4 shadow-xl shadow-[#21140F]/10 backdrop-blur-md sm:-left-8 sm:right-auto sm:w-[74%]">
              <p className="text-sm font-bold text-[#21140F]">Laura Tagliari</p>
              <p className="mt-0.5 text-xs italic leading-relaxed text-[#5A3427]/75">
                &ldquo;Uma boa ideia mal apresentada é apenas um rascunho
                caro.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
