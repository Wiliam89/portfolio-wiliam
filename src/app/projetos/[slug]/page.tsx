import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Cabecalho from "@/components/layout/Cabecalho";
import Rodape from "@/components/layout/Rodape";
import { Placa, Selo } from "@/components/ui/Base";
import { acharProjeto, projetos, rotuloStatus } from "@/data/projetos";

type Props = { params: Promise<{ slug: string }> };

// Diz ao Next quais páginas existem, para que ele gere todas de uma vez
// no build. Projeto novo no arquivo de dados = página nova, sem código.
export function generateStaticParams() {
  return projetos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projeto = acharProjeto(slug);

  if (!projeto) return { title: "Projeto não encontrado" };

  return {
    title: projeto.nome,
    description: projeto.resumo,
    openGraph: { title: projeto.nome, description: projeto.resumo },
  };
}

export default async function PaginaProjeto({ params }: Props) {
  const { slug } = await params;
  const projeto = acharProjeto(slug);

  // Slug inexistente cai na página 404 em vez de quebrar o site.
  if (!projeto) notFound();

  return (
    <>
      <Cabecalho />

      <main className="relative z-10 px-6 pt-32 pb-24">
        <div className="mx-auto w-full max-w-4xl">
          <a
            href="/#projetos"
            className="text-sm text-pedra transition-colors hover:text-areia"
          >
            Voltar aos projetos
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-sm text-ouro-claro">{projeto.categoria}</span>
            <span className="text-sm text-pedra">{projeto.ano}</span>
            <Selo tom={projeto.status === "publicado" ? "ativo" : "andamento"}>
              {rotuloStatus[projeto.status]}
            </Selo>
          </div>

          <h1 className="titulo-cartaz mt-4 text-5xl text-areia md:text-7xl">
            {projeto.nome}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pedra">
            {projeto.resumo}
          </p>

          {projeto.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4">
              {projeto.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    l.peso === "principal"
                      ? "placa-fina bg-vibranium px-6 py-3 font-medium text-white transition-colors hover:bg-vibranium-claro"
                      : "placa-fina border border-grafite px-6 py-3 text-pedra transition-colors hover:border-vibranium/60 hover:text-areia"
                  }
                >
                  {l.rotulo}
                </a>
              ))}
            </div>
          )}

          {projeto.imagem && (
            <Placa className="mt-14">
              <div className="relative aspect-video">
                <Image
                  src={projeto.imagem}
                  alt={`Imagem do projeto ${projeto.nome}`}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                  priority
                />
              </div>
            </Placa>
          )}

          <div className="mt-14 flex max-w-2xl flex-col gap-5 leading-relaxed text-pedra">
            {projeto.descricao.map((paragrafo) => (
              <p key={paragrafo.slice(0, 40)}>{paragrafo}</p>
            ))}
          </div>

          <h2 className="titulo-cartaz regua mt-16 text-3xl text-areia">
            O que tem dentro
          </h2>
          <ul className="mt-6 flex max-w-2xl flex-col">
            {projeto.destaques.map((d) => (
              <li
                key={d}
                className="border-t border-grafite py-4 leading-relaxed text-pedra"
              >
                {d}
              </li>
            ))}
          </ul>

          <h2 className="titulo-cartaz regua mt-16 text-3xl text-areia">
            Tecnologias
          </h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {projeto.tecnologias.map((t) => (
              <Selo key={t}>{t}</Selo>
            ))}
          </div>
        </div>
      </main>

      <Rodape />
    </>
  );
}
