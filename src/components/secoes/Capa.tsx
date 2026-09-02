"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PadraoGeometrico } from "@/components/ui/Base";
import Pantera from "@/components/ui/Pantera";
import { projetos } from "@/data/projetos";
import { site } from "@/data/site";

export default function Capa() {
  // Uma única entrada orquestrada na carga da página. Nada de animação em
  // toda seção — isso cansa e não comunica nada.
  const semMovimento = useReducedMotion();
  const entrada = (atraso: number) =>
    semMovimento
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.7,
            delay: atraso,
            ease: [0.2, 0.8, 0.2, 1] as const,
          },
        };

  const publicados = projetos.filter((p) => p.status === "publicado").length;

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden px-6 pt-28 pb-16">
      {/* Textura geométrica ao fundo, bem apagada. */}
      <PadraoGeometrico className="pointer-events-none absolute inset-0 text-vibranium/[0.06]" />

      {/* A pantera ocupa a direita da capa. Opacidade reduzida de proposito:
          aqui ela acompanha o nome, nao disputa com ele. */}
      <motion.div
        {...entrada(0.12)}
        className="pointer-events-none absolute -right-10 bottom-0 hidden w-[38%] max-w-md md:block lg:right-4"
      >
        <Pantera variante="perfil" opacidade={0.55} className="w-full" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.p {...entrada(0)} className="mb-5 text-sm text-pedra">
          {site.papel} · {site.local}
        </motion.p>

        <motion.h1
          {...entrada(0.08)}
          className="titulo-cartaz text-6xl text-areia sm:text-7xl md:text-8xl"
        >
          Wiliam
          <br />
          <span className="text-vibranium">Oliveira</span>
        </motion.h1>

        <motion.p
          {...entrada(0.16)}
          className="mt-8 max-w-xl text-lg leading-relaxed text-pedra"
        >
          Construo plugins de áudio em C++ e sistemas web em TypeScript. Dois
          mundos distantes que pedem a mesma coisa: código que aguenta rodar de
          verdade, na máquina de outra pessoa.
        </motion.p>

        <motion.div {...entrada(0.24)} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projetos"
            className="placa-fina bg-vibranium px-7 py-3.5 font-medium text-white transition-colors hover:bg-vibranium-claro"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="placa-fina border border-ouro/60 px-7 py-3.5 font-medium text-ouro-claro transition-colors hover:bg-ouro hover:text-obsidiana"
          >
            Falar comigo
          </a>
        </motion.div>

        <motion.div
          {...entrada(0.32)}
          className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-grafite pt-6 text-sm text-pedra"
        >
          <span>
            <strong className="text-areia">{publicados}</strong> plugins
            publicados e prontos para baixar
          </span>
          <span>
            <strong className="text-areia">{projetos.length}</strong> projetos
            no portfólio
          </span>
          <span>C++ · JUCE · Next.js · TypeScript</span>
        </motion.div>
      </div>
    </section>
  );
}
