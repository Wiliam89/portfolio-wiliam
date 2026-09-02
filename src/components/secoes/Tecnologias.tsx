import { Secao, TituloSecao } from "@/components/ui/Base";
import Revelar from "@/components/ui/Revelar";

// Agrupado por finalidade, não por logotipo. Uma parede de ícones não diz
// nada sobre o que a pessoa sabe fazer com eles.
const grupos = [
  {
    area: "Áudio e tempo real",
    itens: [
      "C++",
      "JUCE",
      "VST3",
      "Processamento de sinal",
      "Oversampling",
      "Convolução",
    ],
  },
  {
    area: "Web",
    itens: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js", "PHP"],
  },
  {
    area: "Dados",
    itens: [
      "PostgreSQL",
      "MySQL",
      "Drizzle",
      "Supabase",
      "Migrações versionadas",
    ],
  },
  {
    area: "Infraestrutura e ferramentas",
    itens: [
      "Git",
      "Visual Studio",
      "VS Code",
      "Vercel",
      "Python",
      "Active Directory",
    ],
  },
];

export default function Tecnologias() {
  return (
    <Secao id="tecnologias">
      <Revelar>
        <TituloSecao>Tecnologias</TituloSecao>
      </Revelar>

      <div className="mt-14 flex flex-col">
        {grupos.map((g, i) => (
          <Revelar
            key={g.area}
            atraso={Math.min(i, 3) * 0.07}
            className="grid gap-4 border-t border-grafite py-7 md:grid-cols-[240px_1fr] md:gap-10"
          >
            <h3 className="titulo-cartaz text-xl text-vibranium">{g.area}</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
              {g.itens.map((i) => (
                <li key={i} className="text-pedra">
                  {i}
                </li>
              ))}
            </ul>
          </Revelar>
        ))}
      </div>
    </Secao>
  );
}
