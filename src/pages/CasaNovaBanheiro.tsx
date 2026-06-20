import { ShowerHead } from "lucide-react";
import CasaNovaListPage from "@/components/CasaNovaListPage";

const CasaNovaBanheiro = () => (
  <CasaNovaListPage
    icon={ShowerHead}
    title="Lista de Casa Nova para Banheiro"
    subtitle="Tudo para equipar e organizar seu banheiro."
    seoTitle="Lista de Casa Nova para Banheiro 2026 | Helplistas"
    seoDescription="Checklist completo de banheiro para casa nova em 2026: toalhas, acessórios, organização e higiene. Baixe grátis."
    path="/lista-de-casa-nova-banheiro"
    tip="Compre pelo menos dois jogos de toalha de banho para revezar entre uma lavagem e outra."
    categories={[
      {
        name: "Toalhas",
        items: [
          "Toalha de banho (2)", "Toalha de rosto (2)",
          "Toalha de piso", "Toalha para visitas",
        ],
      },
      {
        name: "Acessórios",
        items: [
          "Cortina de box", "Tapete de banheiro", "Porta-escovas",
          "Saboneteira", "Porta-sabonete líquido", "Suporte de papel higiênico",
          "Espelho", "Lixeira com tampa", "Cesto de roupa suja",
        ],
      },
      {
        name: "Higiene Pessoal",
        items: [
          "Shampoo", "Condicionador", "Sabonete líquido",
          "Sabonete em barra", "Pasta de dente", "Escova de dente",
          "Fio dental", "Desodorante", "Aparelho de barbear",
        ],
      },
      {
        name: "Limpeza",
        items: [
          "Papel higiênico", "Limpa-vidros", "Detergente para banheiro",
          "Desentupidor", "Escova sanitária", "Pano para limpeza",
        ],
      },
      {
        name: "Diversos",
        items: [
          "Balança", "Secador de cabelo", "Chapinha",
          "Necessaire", "Kit primeiros socorros",
        ],
      },
    ]}
  />
);

export default CasaNovaBanheiro;
