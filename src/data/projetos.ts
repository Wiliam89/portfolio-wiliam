// ---------------------------------------------------------------------
// PROJETOS
//
// ESTE E O UNICO ARQUIVO QUE VOCE PRECISA EDITAR PARA ADICIONAR UM
// PROJETO NOVO AO PORTFOLIO.
//
// Copie um bloco inteiro (de "{" ate "},"), cole no fim da lista e troque
// os valores. O site cria sozinho: o card na pagina inicial, a pagina
// propria do projeto em /projetos/<slug>, e a entrada no mapa do site.
//
// O TypeScript avisa se voce esquecer um campo obrigatorio.
// ---------------------------------------------------------------------

export type StatusProjeto = "publicado" | "em-desenvolvimento" | "concluido";

export type LinkProjeto = {
  /** Texto do botao. Diga o que acontece: "Baixar plugin", nao "Clique aqui". */
  rotulo: string;
  href: string;
  /** "principal" ganha destaque visual. Use um por projeto, no maximo. */
  peso?: "principal" | "secundario";
};

export type Projeto = {
  /** Vira o endereco da pagina: /projetos/<slug>. Só letras minúsculas e hífen. */
  slug: string;
  nome: string;
  /** Uma linha. Aparece no card da pagina inicial. */
  resumo: string;
  /** Categoria curta, mostrada acima do nome. */
  categoria: string;
  status: StatusProjeto;
  ano: string;
  /** Paragrafos da pagina do projeto. Cada item vira um paragrafo. */
  descricao: string[];
  /** O que voce resolveu ali. Aparece como lista na pagina do projeto. */
  destaques: string[];
  tecnologias: string[];
  /** Caminho da imagem dentro de /public. Deixe vazio para usar o padrao grafico. */
  imagem?: string;
  links: LinkProjeto[];
  /** true = aparece maior, no topo da lista. */
  destaque?: boolean;
};

export const projetos: Projeto[] = [
  {
    slug: "plugin-blues",
    nome: "plugin-Blues",
    categoria: "Plugin de áudio",
    status: "publicado",
    ano: "2026",
    resumo:
      "Simulador de amplificador de guitarra em VST3, com três canais, gabinete por resposta de impulso e tone stack passivo modelado a partir do circuito real.",
    descricao: [
      "Simulador de amplificador de guitarra escrito em C++ sobre o framework JUCE, distribuído como VST3 para DAWs e como aplicativo independente para Windows.",
      "A cadeia de processamento reproduz a ordem do circuito de um amplificador valvulado: estágio de entrada, noise gate, overdrive, pré-amplificador em cascata, gabinete por resposta de impulso, delay, reverb e estágio de saída com limitador.",
      "O tone stack não usa filtros de prateleira genéricos. Ele é derivado da análise nodal do circuito passivo, o que faz grave, médio e agudo interagirem entre si como nos amplificadores reais — o médio escavado aparece sozinho ao zerar o controle, sem nenhum filtro dedicado a isso.",
    ],
    destaques: [
      "Três canais com cadeias distintas: dois, três e quatro estágios de saturação",
      "Recorte por diodo no canal de ritmo, com joelho curto e compressão rápida",
      "Gabinete por resposta de impulso carregada pelo usuário, com duas vozes e mistura entre elas",
      "Oversampling de 4x apenas nos estágios não lineares, com latência informada à DAW",
      "Carregamento de resposta de impulso fora da thread de áudio, com cache e troca atômica",
      "Zero alocação de memória na thread de áudio",
    ],
    tecnologias: ["C++", "JUCE 8", "VST3", "DSP", "Visual Studio"],
    imagem: "/slash2.jpg",
    links: [
      {
        rotulo: "Baixar plugin",
        href: "https://github.com/Wiliam89/plugin-Blues/releases",
        peso: "principal",
      },
      {
        rotulo: "Ver código",
        href: "https://github.com/Wiliam89/plugin-Blues",
      },
    ],
    destaque: true,
  },
  {
    slug: "arauto",
    nome: "Arauto",
    categoria: "Plugin de áudio",
    status: "publicado",
    ano: "2026",
    resumo:
      "Plugin de guitarra de alto ganho com wah, dois estágios de drive, harmonizador, phaser, delay e reverb numa única cadeia.",
    descricao: [
      "Segundo plugin da linha, voltado a timbres modernos de alto ganho. A cadeia é maior que a do plugin-Blues e inclui efeitos que normalmente exigiriam três ou quatro plugins separados.",
      "O harmonizador usa um motor de detecção de altura próprio, e o tone stack compartilha o mesmo núcleo derivado do circuito passivo usado no plugin-Blues.",
      "O projeto tem gerenciador de presets em disco, camada de compatibilidade entre versões do JUCE e look and feel próprio.",
    ],
    destaques: [
      "Cadeia completa: wah, dois drives, amplificador, gabinete, harmonizador, phaser, delay e reverb",
      "Tone stack passivo com conjuntos de componentes intercambiáveis",
      "Controles de ressonância e corte de grave pré-distorção no estágio de potência",
      "Gerenciador de presets com arquivos em disco",
      "Camada de compatibilidade para compilar em mais de uma versão do JUCE",
    ],
    tecnologias: ["C++", "JUCE 8", "VST3", "DSP", "Detecção de altura"],
    links: [
      {
        rotulo: "Baixar plugin",
        href: "https://github.com/Wiliam89/Plugin-Arauto/releases",
        peso: "principal",
      },
      {
        rotulo: "Ver código",
        href: "https://github.com/Wiliam89/Plugin-Arauto",
      },
    ],
    destaque: true,
  },
  {
    slug: "telemedicina",
    nome: "Plataforma de telemedicina",
    categoria: "Sistema web",
    status: "em-desenvolvimento",
    ano: "2026",
    resumo:
      "Plataforma multi-clínica para atendimento a distância, com agenda, prontuário, pagamento antes da fila e segurança no banco de dados.",
    descricao: [
      "Plataforma de telemedicina construída para uso comercial real, no modelo multi-clínica: várias clínicas convivem na mesma instalação, cada uma enxergando apenas os próprios dados.",
      "O isolamento entre clínicas não é feito só no código da aplicação. Ele é imposto no próprio banco de dados, por políticas de segurança em nível de linha, de modo que uma consulta mal escrita não consegue vazar dados de outra clínica.",
      "O projeto é um monorepo com API e site separados, migrações versionadas e uma trilha de auditoria que só aceita inserção.",
    ],
    destaques: [
      "Arquitetura multi-clínica com isolamento imposto no banco de dados",
      "Agenda com grade semanal e travas de exclusão para impedir marcação dupla",
      "Fuso horário por clínica",
      "Trilha de auditoria somente-inserção, gravada na mesma transação da operação",
      "Migrações versionadas e verificação automatizada do ambiente",
      "Pagamento como parte do fluxo: o paciente entra na fila depois de pagar",
    ],
    tecnologias: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Drizzle",
      "Supabase",
      "pnpm",
    ],
    imagem: "/telemed1.jpg",
    links: [
      // QUANDO A PLATAFORMA ESTIVER NO AR: apague as duas barras das cinco
      // linhas abaixo e troque o endereço. O botão aparece sozinho, em
      // destaque, no card da página inicial e na página do projeto.
      // {
      //   rotulo: "Abrir a plataforma",
      //   href: "https://endereco-da-plataforma.com.br",
      //   peso: "principal",
      // },
      {
        rotulo: "Ver código",
        href: "https://github.com/Wiliam89/telemedicina",
      },
    ],
    destaque: true,
  },
  {
    slug: "central-de-downloads",
    nome: "Central de downloads dos plugins",
    categoria: "Site",
    status: "em-desenvolvimento",
    ano: "2026",
    resumo:
      "Site dedicado para instalar os plugins: escolher o formato, entender os requisitos e baixar sem passar pelo GitHub.",
    descricao: [
      "Um repositório de código não é lugar para um guitarrista baixar um plugin. A central de downloads existe para separar as duas audiências: quem quer ler o código continua no GitHub, quem quer usar o plugin tem uma página feita para isso.",
      "A ideia é reunir num lugar só a escolha entre VST3 e aplicativo independente, os requisitos de sistema, o passo a passo de instalação e as respostas às dúvidas que aparecem sempre.",
    ],
    destaques: [
      "Escolha entre VST3 para DAW e aplicativo independente",
      "Instruções de instalação por sistema operacional",
      "Histórico de versões e novidades de cada lançamento",
      "Perguntas frequentes sobre configuração de entrada e latência",
    ],
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [],
  },
];

/** Busca um projeto pelo slug. Usada pela página /projetos/[slug]. */
export function acharProjeto(slug: string): Projeto | undefined {
  return projetos.find((p) => p.slug === slug);
}

export const rotuloStatus: Record<StatusProjeto, string> = {
  publicado: "Publicado",
  "em-desenvolvimento": "Em desenvolvimento",
  concluido: "Concluído",
};
