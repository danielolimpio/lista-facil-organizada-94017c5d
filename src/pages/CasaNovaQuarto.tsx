import { Bed } from "lucide-react";
import CasaNovaListPage from "@/components/CasaNovaListPage";

const CasaNovaQuarto = () => (
  <CasaNovaListPage
    icon={Bed}
    title="Lista de Casa Nova para Quarto"
    subtitle="Móveis, roupas de cama e decoração para quartos."
    seoTitle="Lista de Casa Nova para Quarto 2026 | Helplistas"
    seoDescription="Checklist completo de quarto para casa nova em 2026: móveis, roupas de cama, iluminação e decoração. Baixe grátis."
    path="/lista-de-casa-nova-quarto"
    tip="Priorize a cama e o colchão de qualidade: você passa cerca de um terço do dia neles."
    categories={[
      {
        name: "Móveis",
        items: [
          "Cama de casal/solteiro", "Colchão", "Cabeceira",
          "Guarda-roupa", "Cômoda", "Criado-mudo (2)",
          "Mesa de cabeceira", "Espelho", "Cadeira ou poltrona",
        ],
      },
      {
        name: "Roupas de Cama",
        items: [
          "Travesseiros (2)", "Fronhas (4)", "Jogo de lençol (2)",
          "Edredom", "Cobertor", "Manta", "Protetor de colchão",
          "Protetor de travesseiro",
        ],
      },
      {
        name: "Iluminação",
        items: [
          "Abajur (2)", "Luminária de teto", "Lâmpadas reservas",
          "Luz de leitura",
        ],
      },
      {
        name: "Organização",
        items: [
          "Cabides", "Organizadores de gaveta", "Caixas organizadoras",
          "Sapateira", "Cesto para roupas",
        ],
      },
      {
        name: "Decoração",
        items: [
          "Cortinas", "Persianas", "Tapete", "Quadros",
          "Almofadas decorativas", "Porta-retratos",
        ],
      },
    ]}
  />
);

export default CasaNovaQuarto;
