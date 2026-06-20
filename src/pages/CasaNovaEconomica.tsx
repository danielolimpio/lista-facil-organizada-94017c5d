import { PiggyBank } from "lucide-react";
import CasaNovaListPage from "@/components/CasaNovaListPage";

const CasaNovaEconomica = () => (
  <CasaNovaListPage
    icon={PiggyBank}
    title="Lista Básica Econômica para Casa Nova"
    subtitle="Versão econômica com o essencial para começar sem gastar muito."
    seoTitle="Lista Econômica de Casa Nova 2026 | Helplistas"
    seoDescription="Checklist econômico para montar casa nova em 2026 com o essencial: cozinha, quarto, banheiro e limpeza. Baixe grátis."
    path="/lista-de-casa-nova-economica"
    tip="Comece pelo essencial e vá completando aos poucos. Pesquise preços em pelo menos três lojas antes de comprar."
    categories={[
      {
        name: "Cozinha (essencial)",
        items: [
          "Geladeira", "Fogão", "Jogo de panelas básico",
          "Frigideira", "Conjunto de talheres (4)", "Pratos (4)",
          "Copos (6)", "Xícaras (4)", "Facas básicas",
          "Tábua de corte", "Escorredor de louça",
        ],
      },
      {
        name: "Quarto (essencial)",
        items: [
          "Cama", "Colchão", "Travesseiro (2)",
          "Jogo de lençol", "Cobertor", "Cabides",
          "Arara ou guarda-roupa simples",
        ],
      },
      {
        name: "Banheiro (essencial)",
        items: [
          "Toalha de banho (2)", "Toalha de rosto (2)",
          "Cortina de box", "Porta-escova", "Saboneteira",
          "Lixeira", "Papel higiênico",
        ],
      },
      {
        name: "Sala (essencial)",
        items: [
          "Sofá simples ou futon", "Mesa pequena",
          "TV", "Cortina simples",
        ],
      },
      {
        name: "Limpeza (essencial)",
        items: [
          "Vassoura", "Rodo", "Balde", "Pano de chão",
          "Detergente", "Sabão em pó", "Água sanitária",
          "Multiuso", "Esponja", "Sacos de lixo",
        ],
      },
    ]}
  />
);

export default CasaNovaEconomica;
