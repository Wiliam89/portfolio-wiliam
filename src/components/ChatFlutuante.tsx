"use client";

import { useState } from "react";
import { FaTimes, FaWhatsapp } from "react-icons/fa";
import { projetos } from "@/data/projetos";
import { linkWhatsapp } from "@/data/site";

// Atendimento rápido: respostas prontas para as três perguntas que sempre
// chegam, e um caminho direto para o WhatsApp. Não promete ser um robô
// inteligente — promete responder rápido, e cumpre.

type Resposta = { pergunta: string; texto: string };

const publicados = projetos.filter((p) => p.status === "publicado");

const respostas: Resposta[] = [
  {
    pergunta: "Quais são os projetos?",
    texto: projetos.map((p) => `• ${p.nome} — ${p.categoria}`).join("\n"),
  },
  {
    pergunta: "Como baixo os plugins?",
    texto: [
      "Os plugins publicados são:",
      "",
      ...publicados.map((p) => `• ${p.nome}`),
      "",
      "Cada um tem versão VST3 para DAW e versão para rodar direto no computador. Clique em “Baixar plugin” no card do projeto.",
    ].join("\n"),
  },
  {
    pergunta: "Você faz projeto sob encomenda?",
    texto:
      "Faço. Me chame no WhatsApp com uma descrição do que precisa e o prazo que tem em mente, que eu respondo com uma estimativa honesta — inclusive se eu achar que não sou a pessoa certa.",
  },
];

const saudacao =
  "Olá.\n\nAqui é o portfólio do Wiliam. Escolha uma pergunta abaixo ou fale comigo direto no WhatsApp.";

export default function ChatFlutuante() {
  const [aberto, setAberto] = useState(false);
  const [mensagem, setMensagem] = useState(saudacao);

  if (!aberto) {
    return (
      <button
        type="button"
        onClick={() => setAberto(true)}
        aria-label="Abrir atendimento rápido"
        className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center bg-vibranium text-white shadow-lg shadow-vibranium/30 transition-transform hover:scale-105"
        style={{
          clipPath:
            "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
        }}
      >
        <FaWhatsapp size={26} />
      </button>
    );
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 w-[min(22rem,calc(100vw-2rem))]">
      <div className="placa placa-borda">
        <div className="placa bg-basalto">
          <div className="flex items-center justify-between border-b border-grafite px-5 py-4">
            <div>
              <p className="titulo-cartaz text-lg text-areia">
                Atendimento rápido
              </p>
              <p className="text-xs text-pedra">Respondo pelo WhatsApp</p>
            </div>
            <button
              type="button"
              onClick={() => setAberto(false)}
              aria-label="Fechar atendimento"
              className="p-2 text-pedra transition-colors hover:text-areia"
            >
              <FaTimes />
            </button>
          </div>

          <div className="p-5">
            {/* whitespace-pre-line é o que faz os \n virarem quebras de
                linha de verdade na tela. */}
            <p className="mb-5 text-sm leading-relaxed whitespace-pre-line text-pedra">
              {mensagem}
            </p>

            <div className="flex flex-col gap-2">
              {respostas.map((r) => (
                <button
                  key={r.pergunta}
                  type="button"
                  onClick={() => setMensagem(r.texto)}
                  className="placa-fina border border-grafite px-4 py-2.5 text-left text-sm text-areia transition-colors hover:border-vibranium/60 hover:text-vibranium-claro"
                >
                  {r.pergunta}
                </button>
              ))}

              <a
                href={linkWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="placa-fina mt-1 bg-vibranium px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-vibranium-claro"
              >
                Abrir conversa no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
