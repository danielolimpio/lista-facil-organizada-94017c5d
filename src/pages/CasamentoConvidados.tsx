import { Heart } from "lucide-react";
import CasaNovaListPage from "@/components/CasaNovaListPage";

const CasamentoConvidados = () => (
  <CasaNovaListPage
    icon={Heart}
    title="Lista de Convidados para Casamento 2026"
    subtitle="Organize sua lista de convidados de forma prática – ideal para casamentos brasileiros."
    seoTitle="Lista de Convidados de Casamento 2026 – Helplistas"
    seoDescription="Modelo de lista de convidados para casamento 2026: famílias, padrinhos, amigos, colegas de trabalho e VIPs."
    path="/lista-de-convidados-casamento"
    tip="Divida a lista entre noiva, noivo e pais para equilibrar os convites. Lembre-se de incluir acompanhantes e crianças."
    categories={[
      {
        name: "Família do Noivo",
        items: [
          "Pais do noivo",
          "Irmãos e cunhados",
          "Avós",
          "Tios e tias",
          "Primos de primeiro grau",
          "Padrinhos de batismo",
          "Sobrinhos",
        ],
      },
      {
        name: "Família da Noiva",
        items: [
          "Pais da noiva",
          "Irmãos e cunhadas",
          "Avós",
          "Tios e tias",
          "Primos de primeiro grau",
          "Padrinhos de batismo",
          "Sobrinhos",
        ],
      },
      {
        name: "Padrinhos e Madrinhas",
        items: [
          "Padrinhos do noivo (com acompanhantes)",
          "Madrinhas da noiva (com acompanhantes)",
          "Pajens e daminhas",
          "Pais dos pajens e daminhas",
        ],
      },
      {
        name: "Amigos",
        items: [
          "Amigos de infância",
          "Amigos da escola",
          "Amigos da faculdade",
          "Amigos do grupo da igreja",
          "Amigos do esporte / academia",
          "Casais amigos",
        ],
      },
      {
        name: "Trabalho",
        items: [
          "Chefe e diretoria",
          "Colegas próximos de trabalho",
          "Equipe direta",
          "Clientes especiais (opcional)",
        ],
      },
      {
        name: "VIPs e Outros",
        items: [
          "Vizinhos próximos",
          "Professores marcantes",
          "Cerimonialista (cortesia)",
          "Fornecedores VIP",
        ],
      },
    ]}
  />
);

export default CasamentoConvidados;
