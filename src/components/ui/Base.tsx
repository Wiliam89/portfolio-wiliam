import type { ReactNode } from "react";

// ---------------------------------------------------------------------
// PECAS REUTILIZAVEIS
// Sao os "tijolos" do site. Ficam todos juntos aqui porque sao pequenos
// e sempre usados em conjunto.
// ---------------------------------------------------------------------

/**
 * Placa angular: o bloco de conteudo com cantos cortados e fresta de luz
 * na borda. E o elemento de assinatura do site.
 */
export function Placa({
  children,
  className = "",
  tom = "violeta",
  fina = false,
}: {
  children: ReactNode;
  className?: string;
  tom?: "violeta" | "ouro";
  fina?: boolean;
}) {
  const corte = fina ? "placa-fina" : "placa";
  const borda = tom === "ouro" ? "placa-borda-ouro" : "";

  return (
    <div className={`${corte} placa-borda ${borda} ${className}`}>
      <div className={`${corte} h-full bg-basalto`}>{children}</div>
    </div>
  );
}

/** Etiqueta pequena, para tecnologias e situacao do projeto. */
export function Selo({
  children,
  tom = "neutro",
}: {
  children: ReactNode;
  tom?: "neutro" | "ativo" | "andamento";
}) {
  const cores = {
    neutro: "border-grafite text-pedra",
    ativo: "border-vibranium/60 text-vibranium-claro",
    andamento: "border-ouro/60 text-ouro-claro",
  }[tom];

  return (
    <span
      className={`inline-block border px-2.5 py-1 text-xs leading-none font-medium ${cores}`}
    >
      {children}
    </span>
  );
}

/** Envelope de secao: largura, respiro e ancora para o menu. */
export function Secao({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative z-10 px-6 py-24 md:py-32 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

/** Titulo de secao, com a regua de vibranium na frente. */
export function TituloSecao({ children }: { children: ReactNode }) {
  return (
    <h2 className="titulo-cartaz regua text-4xl text-areia md:text-6xl">
      {children}
    </h2>
  );
}

/**
 * Padrao geometrico de triangulos. Vem do vocabulario de tecelagem
 * africana — losangos e chevrons — e serve de textura de fundo.
 */
export function PadraoGeometrico({ className = "" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" focusable="false">
      <title>Padrão geométrico</title>
      <defs>
        <pattern
          id="chevron"
          width="44"
          height="44"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 44 22 0l22 44M0 22 22 0l22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#chevron)" />
    </svg>
  );
}
