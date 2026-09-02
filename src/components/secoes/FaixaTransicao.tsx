import { PadraoGeometrico } from "@/components/ui/Base";
import Pantera from "@/components/ui/Pantera";

// Faixa entre a capa e os projetos.
//
// Serve de respiro — a capa e a lista de projetos sao densas, e emendar as
// duas cansa a leitura. Aqui a pantera aparece inteira e em destaque; e o
// lugar do site onde ela e o assunto.

export default function FaixaTransicao() {
  return (
    <section className="relative overflow-hidden border-y border-grafite bg-basalto/40">
      <PadraoGeometrico className="pointer-events-none absolute inset-0 text-vibranium/[0.05]" />

      {/* Brilho baixo por tras do bicho, para ele nao flutuar no vazio. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(ellipse_at_50%_100%,rgba(127,77,255,0.18),transparent_70%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-16 md:py-20">
        <Pantera variante="corpo" className="w-full max-w-2xl" />

        <div className="h-px w-full max-w-2xl bg-[linear-gradient(90deg,transparent,rgba(127,77,255,0.7)_25%,rgba(194,146,47,0.7)_70%,transparent)]" />

        <p className="max-w-md text-center text-sm leading-relaxed text-pedra">
          Quatro projetos, dois deles prontos para baixar agora.
        </p>
      </div>
    </section>
  );
}
