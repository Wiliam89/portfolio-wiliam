import { PadraoGeometrico } from "@/components/ui/Base";
import Pantera from "@/components/ui/Pantera";
import Revelar from "@/components/ui/Revelar";
import { projetos } from "@/data/projetos";
import { site } from "@/data/site";

// A capa é um componente de SERVIDOR: o texto vai inteiro no HTML.
// A entrada escalonada é feita pelo Revelar, que nunca esconde nada de
// forma permanente — se o JavaScript falhar, tudo aparece do mesmo jeito.

export default function Capa() {
  const publicados = projetos.filter((p) => p.status === "publicado").length;

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden px-6 pt-28 pb-16">
      <PadraoGeometrico className="pointer-events-none absolute inset-0 text-vibranium/[0.06]" />

      <Revelar
        imediato
        atraso={0.12}
        className="pointer-events-none absolute -right-10 bottom-0 hidden w-[38%] max-w-md md:block lg:right-4"
      >
        <Pantera variante="perfil" opacidade={0.55} className="w-full" />
      </Revelar>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <Revelar imediato>
          <p className="mb-5 text-sm text-pedra">
            {site.papel} · {site.local}
          </p>
        </Revelar>

        <Revelar imediato atraso={0.08}>
          <h1 className="titulo-cartaz text-6xl text-areia sm:text-7xl md:text-8xl">
            Wiliam
            <br />
            <span className="text-vibranium">Oliveira</span>
          </h1>
        </Revelar>

        <Revelar imediato atraso={0.16}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-pedra">
            Construo plugins de áudio em C++ e sistemas web em TypeScript. Dois
            mundos distantes que pedem a mesma coisa: código que aguenta rodar
            de verdade, na máquina de outra pessoa.
          </p>
        </Revelar>

        <Revelar imediato atraso={0.24} className="mt-10 flex flex-wrap gap-4">
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
        </Revelar>

        <Revelar
          imediato
          atraso={0.32}
          className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-grafite pt-6 text-sm text-pedra"
        >
          <span>
            <strong className="text-areia">{publicados}</strong> projetos
            publicados e no ar
          </span>
          <span>
            <strong className="text-areia">{projetos.length}</strong> projetos
            no portfólio
          </span>
          <span>C++ · JUCE · Next.js · TypeScript</span>
        </Revelar>
      </div>
    </section>
  );
}
