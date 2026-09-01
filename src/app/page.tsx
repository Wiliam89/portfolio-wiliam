import ChatFlutuante from "@/components/ChatFlutuante";
import Cabecalho from "@/components/layout/Cabecalho";
import Rodape from "@/components/layout/Rodape";
import Capa from "@/components/secoes/Capa";
import Contato from "@/components/secoes/Contato";
import FaixaTransicao from "@/components/secoes/FaixaTransicao";
import Projetos from "@/components/secoes/Projetos";
import Sobre from "@/components/secoes/Sobre";
import Tecnologias from "@/components/secoes/Tecnologias";

// A página é um componente de servidor: só Cabecalho, Capa e ChatFlutuante
// precisam rodar no navegador, e cada um declara isso por conta própria.
export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <Capa />
        <FaixaTransicao />
        <Projetos />
        <Sobre />
        <Tecnologias />
        <Contato />
      </main>
      <Rodape />
      <ChatFlutuante />
    </>
  );
}
