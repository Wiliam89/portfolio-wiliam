import Rodape from "@/components/layout/Rodape";

export default function NaoEncontrado() {
  return (
    <>
      <main className="relative z-10 flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="titulo-cartaz text-7xl text-vibranium">404</p>
        <h1 className="titulo-cartaz text-3xl text-areia">
          Esta página não existe
        </h1>
        <p className="max-w-md leading-relaxed text-pedra">
          O endereço pode ter mudado ou o link estar incompleto. A página
          inicial tem todos os projetos.
        </p>
        <a
          href="/"
          className="placa-fina bg-vibranium px-7 py-3.5 font-medium text-white transition-colors hover:bg-vibranium-claro"
        >
          Voltar ao início
        </a>
      </main>
      <Rodape />
    </>
  );
}
