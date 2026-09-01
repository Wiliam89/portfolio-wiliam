# Portfólio — Wiliam Oliveira

Site pessoal onde ficam meus projetos: plugins de áudio em C++/JUCE e sistemas web em TypeScript.

**No ar em:** _(coloque aqui a URL depois de publicar)_

---

## O que tem aqui

| Seção | O que é |
| --- | --- |
| Capa | Apresentação e números do portfólio |
| Projetos | Lista de projetos, cada um com página própria |
| Sobre | Quem eu sou e como eu trabalho |
| Tecnologias | O que eu uso, agrupado por finalidade |
| Contato | WhatsApp, LinkedIn e GitHub |

Cada projeto ganha automaticamente uma página em `/projetos/<slug>`.

## Tecnologias

- **Next.js 16** com App Router e geração estática
- **React 19**
- **TypeScript** em modo estrito
- **Tailwind CSS 4** (configuração no CSS, via `@theme`)
- **Framer Motion** para a única sequência animada do site
- **Biome** para lint e formatação

## Rodando na sua máquina

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Comandos

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Sobe o site em modo de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm start` | Roda a versão de produção |
| `npm run typecheck` | Confere os tipos sem gerar arquivos |
| `npm run lint` | Aponta problemas de código e formatação |
| `npm run format` | Corrige sozinho o que dá para corrigir |

## Adicionando um projeto novo

Edite **apenas** `src/data/projetos.ts`. Copie um bloco existente, cole no fim da lista e troque os valores.

O site cria sozinho o card na página inicial, a página em `/projetos/<slug>` e a entrada no mapa do site. Não é preciso mexer em nenhum componente.

## Estrutura

```
src/
  app/
    layout.tsx              raiz do site: fontes e metadados
    page.tsx                página inicial
    globals.css             sistema de design (cores, tipos, placas)
    not-found.tsx           página 404
    robots.ts               instruções para buscadores
    sitemap.ts              mapa do site
    projetos/[slug]/        página de cada projeto
  components/
    layout/                 cabeçalho e rodapé
    secoes/                 as cinco seções da página inicial
    ui/Base.tsx             peças reutilizáveis
    ChatFlutuante.tsx       atendimento rápido
  data/
    site.ts                 nome, links e contatos
    projetos.ts             a lista de projetos
```

## Identidade visual

Preto com desvio para o violeta, luz de vibranium e gravação em ouro velho. Os blocos têm cantos cortados em ângulo, como chapa de metal, em vez de cantos arredondados. A tipografia mistura uma condensada de cartaz com uma de leitura levemente quadrada.

O tema é original. Não usa personagens, marcas ou imagens de terceiros.

## Licença

Código sob licença MIT. Textos, fotos e imagens dos projetos são de uso pessoal e não estão cobertos pela licença.
