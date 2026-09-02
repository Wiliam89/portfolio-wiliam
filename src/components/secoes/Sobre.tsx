import Image from "next/image";
import { Placa, Secao, TituloSecao } from "@/components/ui/Base";
import Revelar from "@/components/ui/Revelar";
import { site } from "@/data/site";

export default function Sobre() {
  return (
    <Secao id="sobre">
      <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-16">
        <Revelar>
          <Placa fina>
            <div className="relative aspect-square">
              <Image
                src={site.foto}
                alt={`Foto de ${site.nome}`}
                fill
                sizes="280px"
                className="object-cover"
                priority
              />
            </div>
          </Placa>
        </Revelar>

        <Revelar atraso={0.1}>
          <TituloSecao>Sobre</TituloSecao>

          <div className="mt-8 flex max-w-2xl flex-col gap-5 leading-relaxed text-pedra">
            <p>
              Trabalho com tecnologia da informação e desenvolvo software. Meu
              dia a dia vai de infraestrutura e suporte a projetos próprios de
              programação, e é dessa mistura que vem o jeito como eu construo:
              testando na máquina de verdade, não só no meu computador.
            </p>
            <p>
              Nos plugins de guitarra, isso significa processamento de sinal
              escrito em C++ com as restrições que áudio em tempo real impõe —
              nenhuma alocação de memória na thread de áudio, nenhum travamento,
              latência informada corretamente à DAW.
            </p>
            <p>
              Na plataforma de telemedicina, significa segurança imposta no
              banco de dados e não só no código da aplicação, migrações
              versionadas e trilha de auditoria. Segurança que depende de o
              programador lembrar não é segurança.
            </p>
            <p className="text-areia">
              Estou aberto a oportunidades e a projetos sob encomenda.
            </p>
          </div>
        </Revelar>
      </div>
    </Secao>
  );
}
