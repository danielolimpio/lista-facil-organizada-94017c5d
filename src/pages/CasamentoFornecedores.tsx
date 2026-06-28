import { Heart } from "lucide-react";
import CasaNovaListPage from "@/components/CasaNovaListPage";

const CasamentoFornecedores = () => (
  <CasaNovaListPage
    icon={Heart}
    title="Lista de Fornecedores para Casamento 2026"
    subtitle="Todos os profissionais brasileiros que você precisa contratar para o seu casamento."
    seoTitle="Lista de Fornecedores de Casamento 2026 – Helplistas"
    seoDescription="Lista completa de fornecedores para casamento no Brasil em 2026: buffet, fotógrafo, decoração, DJ, cerimonialista e mais."
    path="/lista-de-fornecedores-casamento"
    tip="Sempre peça contrato por escrito, confira referências no Instagram e exija nota fiscal."
    categories={[
      {
        name: "Organização",
        items: [
          "Cerimonialista / Wedding Planner",
          "Assessoria de dia",
          "Consultoria de orçamento",
        ],
      },
      {
        name: "Local e Estrutura",
        items: [
          "Buffet / espaço de festa",
          "Igreja ou local da cerimônia",
          "Locação de mesas e cadeiras (Tiffany)",
          "Locação de louças e taças",
          "Tendas e lounges",
          "Iluminação e som",
          "Gerador de energia",
        ],
      },
      {
        name: "Gastronomia",
        items: [
          "Buffet completo",
          "Bolo de casamento",
          "Doces finos e bem-casados",
          "Mesa de frios e queijos",
          "Food truck (opcional)",
          "Bar e bartender",
          "Open bar / drinks autorais",
          "Barista de café",
        ],
      },
      {
        name: "Beleza",
        items: [
          "Maquiadora",
          "Cabeleireiro",
          "Manicure",
          "Esteticista",
        ],
      },
      {
        name: "Visual e Registro",
        items: [
          "Fotógrafo",
          "Videomaker / filmagem 4K",
          "Drone para imagens aéreas",
          "Cabine de fotos",
          "Álbum de assinaturas",
        ],
      },
      {
        name: "Decoração e Flores",
        items: [
          "Decoradora",
          "Florista",
          "Designer de papelaria",
          "Convites impressos",
          "Lembrancinhas personalizadas",
        ],
      },
      {
        name: "Música",
        items: [
          "DJ profissional",
          "Banda ao vivo",
          "Coral / violinista para cerimônia",
          "Pianista",
          "Trio elétrico (saída dos noivos)",
        ],
      },
      {
        name: "Serviços Extras",
        items: [
          "Carro dos noivos",
          "Manobristas (valet)",
          "Segurança",
          "Recepcionistas",
          "Transporte para convidados",
          "Hotel parceiro",
        ],
      },
    ]}
  />
);

export default CasamentoFornecedores;
