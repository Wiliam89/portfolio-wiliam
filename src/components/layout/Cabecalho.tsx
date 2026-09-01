"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "/#projetos", texto: "Projetos" },
  { href: "/#sobre", texto: "Sobre" },
  { href: "/#tecnologias", texto: "Tecnologias" },
  { href: "/#contato", texto: "Contato" },
];

export default function Cabecalho() {
  // O cabeçalho começa transparente sobre a capa e ganha fundo assim que
  // a página rola. Sem isso ele briga com a imagem do topo.
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        rolou ? "border-b border-grafite bg-obsidiana/92 backdrop-blur" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="group flex items-baseline gap-2.5">
          <span className="titulo-cartaz text-xl text-areia">Wiliam</span>
          <span className="titulo-cartaz text-xl text-vibranium">Oliveira</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-pedra transition-colors hover:text-areia"
            >
              {l.texto}
            </a>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="placa-fina border border-vibranium/50 px-4 py-2 text-sm text-vibranium-claro transition-colors hover:bg-vibranium hover:text-white"
          >
            GitHub
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuAberto((v) => !v)}
          aria-expanded={menuAberto}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-areia transition-transform ${
              menuAberto ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-areia transition-opacity ${
              menuAberto ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-areia transition-transform ${
              menuAberto ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuAberto && (
        <nav className="border-t border-grafite bg-obsidiana px-6 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuAberto(false)}
              className="block border-b border-grafite/60 py-3 text-pedra last:border-0"
            >
              {l.texto}
            </a>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block pt-3 text-vibranium-claro"
          >
            GitHub
          </a>
        </nav>
      )}
    </header>
  );
}
