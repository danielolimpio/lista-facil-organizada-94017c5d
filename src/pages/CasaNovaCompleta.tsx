import { Home } from "lucide-react";
import CasaNovaListPage from "@/components/CasaNovaListPage";

const CasaNovaCompleta = () => (
  <CasaNovaListPage
    icon={Home}
    title="Lista Completa de Casa Nova"
    subtitle="Tudo que você precisa para montar sua casa do zero, organizado por cômodo."
    seoTitle="Lista Completa de Casa Nova 2026 | Helplistas"
    seoDescription="Checklist completo para montar sua casa do zero em 2026: cozinha, quarto, sala, banheiro e mais. Baixe grátis."
    path="/lista-de-casa-nova-completa"
    tip="Marque os itens que você já possui antes de sair às compras para evitar duplicidades e economizar."
    categories={[
      {
        name: "Cozinha",
        items: [
          "Geladeira", "Fogão", "Micro-ondas", "Liquidificador", "Cafeteira",
          "Panelas (jogo)", "Frigideira", "Conjunto de talheres", "Pratos",
          "Copos e taças", "Xícaras", "Tábua de corte", "Faca de chef",
          "Coador de café", "Escorredor de louça", "Lixeira", "Potes herméticos",
        ],
      },
      {
        name: "Quarto",
        items: [
          "Cama", "Colchão", "Travesseiros", "Jogo de lençol", "Edredom",
          "Cobertor", "Guarda-roupa", "Criado-mudo", "Cabides", "Cortinas",
          "Abajur",
        ],
      },
      {
        name: "Sala",
        items: [
          "Sofá", "Mesa de centro", "Rack ou painel de TV", "TV",
          "Tapete", "Estante", "Cortinas", "Almofadas",
        ],
      },
      {
        name: "Banheiro",
        items: [
          "Jogo de toalhas", "Tapete de banheiro", "Cortina de box",
          "Porta-escovas", "Saboneteira", "Cesto de roupa suja", "Lixeira",
          "Espelho", "Papel higiênico", "Shampoo e condicionador",
        ],
      },
      {
        name: "Área de Serviço",
        items: [
          "Máquina de lavar", "Tábua de passar", "Ferro de passar",
          "Varal", "Pregadores", "Cesto de roupas",
        ],
      },
      {
        name: "Limpeza",
        items: [
          "Vassoura", "Rodo", "Pano de chão", "Balde", "Pá de lixo",
          "Sabão em pó", "Detergente", "Água sanitária", "Desinfetante",
          "Esponja", "Multiuso", "Lustra-móveis",
        ],
      },
      {
        name: "Ferramentas e Diversos",
        items: [
          "Furadeira", "Chave de fenda", "Alicate", "Martelo",
          "Fita métrica", "Lâmpadas reservas", "Extensão elétrica",
          "Kit primeiros socorros",
        ],
      },
    ]}
  />
);

export default CasaNovaCompleta;
