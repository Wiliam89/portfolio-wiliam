import { site } from "@/data/site";

export default function Rodape() {
  return (
    <footer className="relative z-10 border-t border-grafite px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-pedra">
        <span>
          © {new Date().getFullYear()} {site.nome}
        </span>
        <span>Feito com Next.js e TypeScript</span>
      </div>
    </footer>
  );
}
