import { PadraoGeometrico } from "@/components/ui/Base";

// Faixa fina entre a capa e os projetos.
//
// Serve de respiro: a capa é densa e a lista de projetos também, e emendar
// as duas cansa a leitura. É só geometria e uma linha de texto que prepara
// o que vem abaixo — nada de figura.

export default function FaixaTransicao() {
  return (
    <section className="relative overflow-hidden border-y border-grafite bg-basalto/40">
      <PadraoGeometrico className="pointer-events-none absolute inset-0 text-vibranium/[0.05]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14">
        {/* Filete que vai do violeta ao ouro e se apaga nas pontas. */}
        <div className="h-px w-full max-w-2xl bg-[linear-gradient(90deg,transparent,rgba(127,77,255,0.7)_25%,rgba(194,146,47,0.7)_70%,transparent)]" />

        <p className="max-w-md text-center text-sm leading-relaxed text-pedra">
          Quatro projetos, dois deles prontos para baixar agora.
        </p>
      </div>
    </section>
  );
}
