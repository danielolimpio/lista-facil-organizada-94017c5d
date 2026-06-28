import { Heart } from "lucide-react";
import CasaNovaListPage from "@/components/CasaNovaListPage";

const Casamento12MesesAntes = () => (
  <CasaNovaListPage
    icon={Heart}
    title="Checklist 12 Meses Antes do Casamento"
    subtitle="O que noivos brasileiros precisam fazer um ano antes do grande dia em 2026."
    seoTitle="Checklist 12 Meses Antes do Casamento 2026 – Helplistas"
    seoDescription="Planejamento de casamento com 12 meses de antecedência: orçamento, data, local, fornecedores principais e mais."
    path="/lista-de-casamento-12-meses-antes"
    tip="A maioria dos buffets, fotógrafos e cerimonialistas no Brasil são reservados com 10 a 12 meses de antecedência."
    categories={[
      {
        name: "Planejamento Inicial",
        items: [
          "Definir orçamento total e quem paga o quê",
          "Escolher estilo do casamento",
          "Definir número de convidados",
          "Escolher 2-3 datas possíveis",
          "Contratar cerimonialista / assessoria",
          "Criar conta-poupança para o casamento",
        ],
      },
      {
        name: "Reservas Principais",
        items: [
          "Reservar local da cerimônia (igreja/cartório)",
          "Reservar buffet ou espaço de festa",
          "Contratar fotógrafo e videomaker",
          "Contratar decoração",
          "Contratar DJ ou banda",
          "Contratar bolo e doces",
        ],
      },
      {
        name: "Documentação",
        items: [
          "Listar documentos para o cartório",
          "Atualizar certidões de nascimento",
          "Conversar com pastor/padre sobre curso de noivos",
          "Definir regime de bens",
        ],
      },
      {
        name: "Lista de Presentes",
        items: [
          "Montar lista em loja física (Camicado, MagaLu)",
          "Montar lista online",
          "Definir conta para presentes em dinheiro",
        ],
      },
      {
        name: "Outros",
        items: [
          "Reservar lua de mel (com 12 meses sai mais barato)",
          "Começar dieta / academia (se desejar)",
          "Pesquisar inspirações no Pinterest e Instagram",
        ],
      },
    ]}
  />
);

export default Casamento12MesesAntes;
