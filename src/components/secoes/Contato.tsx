import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Placa, Secao, TituloSecao } from "@/components/ui/Base";
import { linkWhatsapp, site } from "@/data/site";

const canais = [
  {
    icone: FaWhatsapp,
    rotulo: "WhatsApp",
    detalhe: "Resposta mais rápida",
    href: linkWhatsapp,
  },
  {
    icone: FaLinkedin,
    rotulo: "LinkedIn",
    detalhe: "Histórico profissional",
    href: site.linkedin,
  },
  {
    icone: FaGithub,
    rotulo: "GitHub",
    detalhe: "Todo o código",
    href: site.github,
  },
];

export default function Contato() {
  return (
    <Secao id="contato">
      <TituloSecao>Contato</TituloSecao>

      <p className="mt-6 mb-12 max-w-2xl leading-relaxed text-pedra">
        Me conte o que você precisa construir. Se eu não for a pessoa certa para
        o trabalho, eu digo.
      </p>

      <div className="grid gap-5 sm:grid-cols-3">
        {canais.map(({ icone: Icone, rotulo, detalhe, href }) => (
          <a
            key={rotulo}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Placa
              fina
              className="h-full transition-transform group-hover:-translate-y-1"
            >
              <div className="flex h-full flex-col gap-3 p-7">
                <Icone size={26} className="text-vibranium" />
                <span className="titulo-cartaz text-xl text-areia">
                  {rotulo}
                </span>
                <span className="text-sm text-pedra">{detalhe}</span>
              </div>
            </Placa>
          </a>
        ))}
      </div>
    </Secao>
  );
}
