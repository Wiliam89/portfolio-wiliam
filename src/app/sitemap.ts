import type { MetadataRoute } from "next";
import { projetos } from "@/data/projetos";
import { site } from "@/data/site";

// Mapa do site para o Google. Cada projeto novo entra aqui sozinho.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    ...projetos.map((p) => ({
      url: `${site.url}/projetos/${p.slug}`,
      priority: 0.8,
    })),
  ];
}
