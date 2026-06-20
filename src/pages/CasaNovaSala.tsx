import { Sofa } from "lucide-react";
import CasaNovaListPage from "@/components/CasaNovaListPage";

const CasaNovaSala = () => (
  <CasaNovaListPage
    icon={Sofa}
    title="Lista de Casa Nova para Sala"
    subtitle="Móveis e decoração para deixar sua sala aconchegante."
    seoTitle="Lista de Casa Nova para Sala 2026 | Helplistas"
    seoDescription="Checklist completo de sala para casa nova em 2026: sofá, rack, decoração e eletrônicos. Baixe grátis."
    path="/lista-de-casa-nova-sala"
    tip="Meça o espaço antes de comprar móveis grandes como sofá e rack para evitar surpresas."
    categories={[
      {
        name: "Móveis",
        items: [
          "Sofá", "Poltrona", "Mesa de centro", "Mesa lateral",
          "Rack ou painel de TV", "Estante", "Aparador",
          "Mesa de jantar", "Cadeiras de jantar",
        ],
      },
      {
        name: "Eletrônicos",
        items: [
          "TV", "Soundbar ou home theater", "Roteador Wi-Fi",
          "Controles remotos", "Suporte de TV",
        ],
      },
      {
        name: "Iluminação",
        items: [
          "Luminária de chão", "Luminária de mesa",
          "Lustre ou plafon", "Lâmpadas reservas",
        ],
      },
      {
        name: "Decoração",
        items: [
          "Tapete", "Cortinas", "Almofadas", "Mantas",
          "Quadros", "Vasos", "Plantas", "Porta-retratos",
          "Velas decorativas",
        ],
      },
      {
        name: "Diversos",
        items: [
          "Lixeira decorativa", "Porta-revistas",
          "Suporte para taças", "Jogo americano",
        ],
      },
    ]}
  />
);

export default CasaNovaSala;
