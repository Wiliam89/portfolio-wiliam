// ---------------------------------------------------------------------
// PANTERA
//
// A arte vem de um arquivo PNG em /public, usado como MASCARA de CSS:
// o navegador recorta um retangulo com o degrade do portfolio no formato
// do desenho. Quem manda na cor e o CSS, nao a imagem.
//
// Por que assim, e nao uma imagem ja colorida:
//   * a cor acompanha a paleta do site — se o violeta mudar, a pantera
//     muda junto, sem reeditar arquivo nenhum;
//   * o arquivo e menor, porque guarda so o formato;
//   * da para ajustar intensidade e degrade sem abrir editor de imagem.
//
// O `-webkit-` existe porque o Safari ainda exige o prefixo.
// ---------------------------------------------------------------------

type Props = {
  /** "perfil" = cabeca e pata, vertical. "corpo" = corpo inteiro, horizontal. */
  variante: "perfil" | "corpo";
  className?: string;
  /** 0 a 1. Na capa fica mais baixa para nao competir com o nome. */
  opacidade?: number;
};

const arquivos = {
  perfil: "/pantera-perfil.png",
  corpo: "/pantera-corpo.png",
} as const;

// Proporcoes reais dos arquivos, para o bloco nao "pular" enquanto carrega.
const proporcoes = {
  perfil: "543 / 626",
  corpo: "1400 / 971",
} as const;

export default function Pantera({
  variante,
  className = "",
  opacidade = 1,
}: Props) {
  const url = `url(${arquivos[variante]})`;

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        aspectRatio: proporcoes[variante],
        opacity: opacidade,
        // O degrade do portfolio: violeta na maior parte, ouro so na ponta.
        backgroundImage:
          "linear-gradient(135deg, #7f4dff 0%, #a888ff 45%, #c2922f 100%)",
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}
