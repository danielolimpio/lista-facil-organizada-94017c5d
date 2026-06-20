import { ChefHat } from "lucide-react";
import CasaNovaListPage from "@/components/CasaNovaListPage";

const CasaNovaCozinha = () => (
  <CasaNovaListPage
    icon={ChefHat}
    title="Lista de Casa Nova para Cozinha"
    subtitle="Utensílios, eletrodomésticos e itens essenciais para sua cozinha."
    seoTitle="Lista de Casa Nova para Cozinha 2026 | Helplistas"
    seoDescription="Checklist completo de cozinha para casa nova em 2026: eletrodomésticos, panelas, utensílios e organização. Baixe grátis."
    path="/lista-de-casa-nova-cozinha"
    tip="Comece pelos eletrodomésticos essenciais (geladeira e fogão) e vá completando os utensílios aos poucos."
    categories={[
      {
        name: "Eletrodomésticos",
        items: [
          "Geladeira", "Fogão", "Micro-ondas", "Liquidificador", "Batedeira",
          "Cafeteira", "Sanduicheira", "Air fryer", "Torradeira",
          "Processador de alimentos",
        ],
      },
      {
        name: "Panelas e Frigideiras",
        items: [
          "Jogo de panelas", "Panela de pressão", "Frigideira pequena",
          "Frigideira grande", "Caçarola", "Leiteira", "Wok",
        ],
      },
      {
        name: "Utensílios",
        items: [
          "Conjunto de facas", "Tábua de corte", "Colher de pau",
          "Concha", "Escumadeira", "Espátula", "Pegador", "Abridor de latas",
          "Saca-rolhas", "Descascador", "Ralador", "Peneira",
          "Rolo de massa", "Batedor de ovos",
        ],
      },
      {
        name: "Louças",
        items: [
          "Jogo de pratos", "Pratos de sobremesa", "Conjunto de talheres",
          "Copos de vidro", "Copos americanos", "Taças de vinho",
          "Xícaras de café", "Canecas", "Travessas", "Saladeira",
          "Açucareiro", "Saleiro",
        ],
      },
      {
        name: "Organização",
        items: [
          "Potes herméticos", "Porta-temperos", "Escorredor de louça",
          "Lixeira", "Porta-detergente", "Papel toalha", "Papel filme",
          "Papel alumínio", "Toalhas de prato",
        ],
      },
    ]}
  />
);

export default CasaNovaCozinha;
