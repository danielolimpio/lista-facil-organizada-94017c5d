import { Heart } from "lucide-react";
import CasaNovaListPage from "@/components/CasaNovaListPage";

const CasamentoTradicional = () => (
  <CasaNovaListPage
    icon={Heart}
    title="Lista de Casamento Tradicional 2026"
    subtitle="Presentes clássicos para os noivos montarem o lar – atualizada para os costumes brasileiros de 2026."
    seoTitle="Lista de Casamento Tradicional 2026 – Presentes para os Noivos"
    seoDescription="Lista de casamento tradicional 2026: eletrodomésticos, cama, mesa, banho e utensílios essenciais para o lar dos noivos brasileiros."
    path="/lista-de-casamento-tradicional"
    tip="No Brasil, é comum montar listas nas Casas Bahia, Magazine Luiza, Fast Shop ou Camicado. Inclua opções em diferentes faixas de preço."
    categories={[
      {
        name: "Eletrodomésticos Grandes",
        items: [
          "Geladeira frost free",
          "Fogão 5 bocas",
          "Micro-ondas",
          "Máquina de lavar roupas",
          "Lava-louças",
          "Forno elétrico",
          "Adega climatizada",
        ],
      },
      {
        name: "Eletroportáteis",
        items: [
          "Liquidificador",
          "Batedeira planetária",
          "Air fryer",
          "Cafeteira espresso / Nespresso",
          "Sanduicheira / grill",
          "Mixer / processador",
          "Ferro de passar a vapor",
          "Aspirador de pó",
        ],
      },
      {
        name: "Cama",
        items: [
          "Jogo de cama queen casal (algodão 200 fios)",
          "Edredom queen",
          "Cobertor de inverno",
          "Travesseiros (par)",
          "Protetor de colchão",
          "Manta para sofá",
        ],
      },
      {
        name: "Mesa",
        items: [
          "Aparelho de jantar (20 peças)",
          "Jogo de taças de cristal",
          "Conjunto de talheres inox",
          "Jogo americano",
          "Toalha de mesa",
          "Travessas e saladeiras",
          "Jarra e bowls",
        ],
      },
      {
        name: "Banho",
        items: [
          "Jogo de toalhas de banho (4 peças)",
          "Toalhas de rosto",
          "Tapete de banheiro",
          "Roupão casal",
          "Porta-sabonete e acessórios",
        ],
      },
      {
        name: "Cozinha e Utensílios",
        items: [
          "Jogo de panelas antiaderentes",
          "Frigideiras",
          "Panela de pressão",
          "Faqueiro completo",
          "Tábua de corte",
          "Potes herméticos",
          "Escorredor de louças",
          "Lixeira com pedal",
        ],
      },
    ]}
  />
);

export default CasamentoTradicional;
