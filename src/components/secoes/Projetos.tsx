import Image from "next/image";
import { Placa, Secao, Selo, TituloSecao } from "@/components/ui/Base";
import { type Projeto, projetos, rotuloStatus } from "@/data/projetos";

// Cada projeto é uma faixa larga, com a imagem alternando de lado. Não é
// uma grade de cards iguais — projetos não têm todos o mesmo peso, e a
// leitura em faixa deixa espaço para explicar o que cada um é.

function LinhaProjeto({
  projeto,
  indice,
}: {
  projeto: Projeto;
  indice: number;
}) {
  const imagemNaDireita = indice % 2 === 1;
  const principal = projeto.links.find((l) => l.peso === "principal");
  const outros = projeto.links.filter((l) => l.peso !== "principal");

  return (
    <Placa tom={imagemNaDireita ? "ouro" : "violeta"}>
      <article className="grid gap-0 md:grid-cols-2">
        <div
          className={`relative min-h-56 bg-grafite md:min-h-72 ${
            imagemNaDireita ? "md:order-2" : ""
          }`}
        >
          {projeto.imagem ? (
            <Image
              src={projeto.imagem}
              alt={`Imagem do projeto ${projeto.nome}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-85"
            />
          ) : (
            // Sem imagem, entra a inicial do projeto em tipo grande. Fica
            // melhor que um retângulo cinza vazio.
            <div className="flex h-full items-center justify-center">
              <span className="titulo-cartaz text-8xl text-vibranium/25">
                {projeto.nome.charAt(0)}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-ouro-claro">{projeto.categoria}</span>
            <span className="text-sm text-pedra">{projeto.ano}</span>
            <Selo tom={projeto.status === "publicado" ? "ativo" : "andamento"}>
              {rotuloStatus[projeto.status]}
            </Selo>
          </div>

          <h3 className="titulo-cartaz text-3xl text-areia md:text-4xl">
            {projeto.nome}
          </h3>

          <p className="leading-relaxed text-pedra">{projeto.resumo}</p>

          <div className="flex flex-wrap gap-2">
            {projeto.tecnologias.map((t) => (
              <Selo key={t}>{t}</Selo>
            ))}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3">
            {principal && (
              <a
                href={principal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="placa-fina bg-vibranium px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-vibranium-claro"
              >
                {principal.rotulo}
              </a>
            )}

            <a
              href={`/projetos/${projeto.slug}`}
              className="border-b border-ouro/50 pb-0.5 text-sm text-ouro-claro transition-colors hover:border-ouro-claro"
            >
              Detalhes do projeto
            </a>

            {outros.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-grafite pb-0.5 text-sm text-pedra transition-colors hover:text-areia"
              >
                {l.rotulo}
              </a>
            ))}
          </div>
        </div>
      </article>
    </Placa>
  );
}

export default function Projetos() {
  return (
    <Secao id="projetos">
      <TituloSecao>Projetos</TituloSecao>

      <p className="mt-6 mb-14 max-w-2xl leading-relaxed text-pedra">
        Quatro projetos em áreas diferentes. Os dois plugins estão publicados e
        podem ser baixados agora; os outros dois estão em construção.
      </p>

      <div className="flex flex-col gap-8">
        {projetos.map((p, i) => (
          <LinhaProjeto key={p.slug} projeto={p} indice={i} />
        ))}
      </div>
    </Secao>
  );
}
