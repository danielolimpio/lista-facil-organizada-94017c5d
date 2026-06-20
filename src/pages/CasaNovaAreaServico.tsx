import { WashingMachine } from "lucide-react";
import CasaNovaListPage from "@/components/CasaNovaListPage";

const CasaNovaAreaServico = () => (
  <CasaNovaListPage
    icon={WashingMachine}
    title="Lista de Casa Nova para Área de Serviço"
    subtitle="Itens necessários para lavanderia e área de serviço."
    seoTitle="Lista de Casa Nova para Área de Serviço 2026 | Helplistas"
    seoDescription="Checklist completo de área de serviço e lavanderia para casa nova em 2026. Baixe grátis."
    path="/lista-de-casa-nova-area-de-servico"
    tip="Reserve um espaço para os produtos de limpeza em altura segura, longe do alcance de crianças e pets."
    categories={[
      {
        name: "Eletrodomésticos",
        items: [
          "Máquina de lavar roupas", "Secadora", "Tanquinho",
          "Ferro de passar",
        ],
      },
      {
        name: "Estrutura e Móveis",
        items: [
          "Tanque", "Bancada de apoio", "Armário para área de serviço",
          "Tábua de passar", "Varal de chão", "Varal de parede",
          "Varal de teto",
        ],
      },
      {
        name: "Acessórios",
        items: [
          "Cestos para roupa suja", "Cesto para roupa limpa",
          "Pregadores de roupa", "Cabides", "Saco para roupas delicadas",
          "Escova para roupa",
        ],
      },
      {
        name: "Produtos",
        items: [
          "Sabão em pó", "Sabão líquido", "Amaciante", "Alvejante",
          "Tira-manchas", "Água sanitária", "Sabão de coco em barra",
        ],
      },
      {
        name: "Organização",
        items: [
          "Prateleiras", "Caixas organizadoras",
          "Ganchos de parede", "Lixeira",
        ],
      },
    ]}
  />
);

export default CasaNovaAreaServico;
