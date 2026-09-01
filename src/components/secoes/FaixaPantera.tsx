import { PadraoGeometrico, SilhuetaPantera } from "@/components/ui/Base";

// Faixa de transição entre a capa e os projetos.
//
// Ela existe por dois motivos. O primeiro é dar respiro: a capa é densa e
// a lista de projetos também, e emendar as duas cansa a leitura. O
// segundo é fixar a identidade — a silhueta aparece aqui inteira e com o
// filete de luz aceso, enquanto na capa ela é só um fundo cortado pela
// borda.
//
// A frase existe para a faixa não ser pura decoração: ela prepara o que
// vem logo abaixo.

export default function FaixaPantera() {
  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden border-y border-grafite bg-basalto/40"
    >
      <PadraoGeometrico className="pointer-events-none absolute inset-0 text-vibranium/[0.05]" />

      {/* Brilho baixo, atrás do bicho, para ele não flutuar no vazio. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_at_50%_100%,rgba(127,77,255,0.20),transparent_70%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 md:py-20">
        <SilhuetaPantera
          id="faixa"
          luz
          className="h-auto w-full max-w-3xl opacity-90"
        />

        <p className="max-w-md text-center text-sm leading-relaxed text-pedra">
          Quatro projetos, dois deles prontos para baixar agora.
        </p>
      </div>
    </section>
  );
}
