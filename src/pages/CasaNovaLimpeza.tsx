import { Sparkles } from "lucide-react";
import CasaNovaListPage from "@/components/CasaNovaListPage";

const CasaNovaLimpeza = () => (
  <CasaNovaListPage
    icon={Sparkles}
    title="Lista de Casa Nova para Limpeza"
    subtitle="Produtos e utensílios de limpeza essenciais."
    seoTitle="Lista de Limpeza para Casa Nova 2026 | Helplistas"
    seoDescription="Checklist completo de produtos e utensílios de limpeza para casa nova em 2026. Baixe grátis."
    path="/lista-de-casa-nova-limpeza"
    tip="Compre produtos multiuso e concentrados — eles rendem mais e ocupam menos espaço no armário."
    categories={[
      {
        name: "Utensílios",
        items: [
          "Vassoura", "Rodo", "Pá de lixo", "Pano de chão",
          "Pano multiuso", "Esponja de louça", "Esponja de aço",
          "Balde", "Borrifador", "Luvas de borracha",
          "Espanador", "Escova para vaso sanitário",
        ],
      },
      {
        name: "Produtos Básicos",
        items: [
          "Detergente", "Sabão em pó", "Sabão líquido",
          "Amaciante", "Água sanitária", "Desinfetante",
          "Multiuso", "Limpa-vidros", "Lustra-móveis",
          "Cera para piso",
        ],
      },
      {
        name: "Cozinha",
        items: [
          "Desengordurante", "Limpa-fornos",
          "Limpa-microondas", "Sabão para louças",
        ],
      },
      {
        name: "Banheiro e Lavanderia",
        items: [
          "Limpa-vasos", "Removedor de mofo",
          "Tira-manchas", "Alvejante",
        ],
      },
      {
        name: "Descartáveis",
        items: [
          "Sacos de lixo (grande)", "Sacos de lixo (pequeno)",
          "Papel toalha", "Guardanapos", "Saco para aspirador",
        ],
      },
    ]}
  />
);

export default CasaNovaLimpeza;
