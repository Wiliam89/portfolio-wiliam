"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// ---------------------------------------------------------------------
// REVELAR
//
// A mesma entrada da capa — subir 16 px enquanto aparece — aplicada ao
// resto do site quando o elemento entra na tela.
//
// Tres travas evitam que isso vire enjoo:
//
//   1. `once: true` — cada bloco anima UMA VEZ. Rolar para cima e voltar
//      nao dispara de novo. Sem isso a pagina fica piscando.
//   2. Movimento curto: 16 px em 0,5 s. O suficiente para o olho notar,
//      pouco o bastante para nao atrasar a leitura.
//   3. `useReducedMotion` — quem pediu menos movimento no sistema recebe
//      o conteudo direto, sem animacao. Isso nao e enfeite: para algumas
//      pessoas movimento na tela causa mal-estar de verdade.
//
// PARA AJUSTAR A INTENSIDADE DO SITE INTEIRO, mexa so nas tres constantes
// abaixo. Elas valem para todos os blocos revelados.
// ---------------------------------------------------------------------

const DESLOCAMENTO = 16; // pixels que o bloco sobe. 0 = so aparece.
const DURACAO = 0.5; // segundos.
const ANTECIPACAO = "-80px"; // comeca antes de o bloco chegar na borda.

export default function Revelar({
  children,
  className = "",
  atraso = 0,
}: {
  children: ReactNode;
  className?: string;
  /** Segundos de espera. Use para escalonar itens de uma lista. */
  atraso?: number;
}) {
  const semMovimento = useReducedMotion();

  if (semMovimento) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: DESLOCAMENTO }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: ANTECIPACAO }}
      transition={{
        duration: DURACAO,
        delay: atraso,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
