// ---------------------------------------------------------------------
// DADOS DO SITE
// Tudo que e "quem voce e" fica aqui. Para mudar telefone, e-mail ou
// links das redes, altere SO este arquivo — o site inteiro se atualiza.
// ---------------------------------------------------------------------

export const site = {
  nome: "Wiliam Oliveira",
  papel: "Desenvolvedor de software",
  // Aparece na aba do navegador e no Google.
  titulo: "Wiliam Oliveira — Desenvolvedor de software",
  descricao:
    "Desenvolvo plugins de áudio em C++/JUCE e plataformas web em Next.js e TypeScript. Veja os projetos, baixe os plugins e fale comigo.",
  // Troque pela URL real depois de publicar (ex.: https://wiliam.dev).
  url: "https://portfolio-wiliam.vercel.app",
  local: "Minas Gerais, Brasil",
  whatsapp: "5537988378429",
  github: "https://github.com/Wiliam89",
  linkedin: "https://linkedin.com/in/wiliam-oliveira-0108b12b9/",
  foto: "/portfolio.jpg",
} as const;

export const linkWhatsapp = `https://wa.me/${site.whatsapp}`;
