import { Heart } from "lucide-react";
import CasaNovaListPage from "@/components/CasaNovaListPage";

const ChecklistLuaDeMel = () => (
  <CasaNovaListPage
    icon={Heart}
    title="Checklist de Lua de Mel 2026"
    subtitle="Tudo o que noivos brasileiros precisam levar e organizar para a viagem dos sonhos em 2026."
    seoTitle="Checklist de Lua de Mel 2026 – Helplistas"
    seoDescription="Checklist de lua de mel 2026: documentos, malas, roupas, eletrônicos e itens essenciais para destinos nacionais e internacionais."
    path="/checklist-lua-de-mel"
    tip="Destinos nacionais favoritos em 2026: Fernando de Noronha, Maragogi, Jericoacoara, Búzios e Bonito. Internacionais: Maldivas, Caribe e Europa."
    categories={[
      {
        name: "Documentos",
        items: [
          "Passaporte válido (mínimo 6 meses)",
          "Visto (se necessário)",
          "RG e CNH",
          "Certidão de casamento atualizada",
          "Reservas impressas e digitais",
          "Seguro viagem",
          "Carteira de vacinação internacional",
          "Cartões de crédito internacionais",
          "Dinheiro em espécie (moeda local)",
        ],
      },
      {
        name: "Roupas",
        items: [
          "Trajes de banho",
          "Roupas leves para dia",
          "Looks para jantar romântico",
          "Roupas de festa",
          "Roupas íntimas especiais",
          "Pijamas",
          "Casaco / jaqueta",
          "Tênis e sandálias confortáveis",
          "Chinelos de praia",
        ],
      },
      {
        name: "Higiene e Beleza",
        items: [
          "Necessaire completa",
          "Protetor solar FPS 50+",
          "Repelente",
          "Hidratante pós-sol",
          "Maquiagem básica",
          "Perfume",
          "Escova, pasta e fio dental",
          "Anticoncepcional e medicamentos pessoais",
        ],
      },
      {
        name: "Eletrônicos",
        items: [
          "Celulares e carregadores",
          "Power bank",
          "Adaptador de tomada universal",
          "Câmera fotográfica",
          "Fones de ouvido",
          "Chip internacional ou eSIM",
        ],
      },
      {
        name: "Saúde e Emergência",
        items: [
          "Kit primeiros socorros",
          "Remédio para dor de cabeça",
          "Antialérgico",
          "Remédio para enjoo / diarreia",
          "Curativos e antisséptico",
        ],
      },
      {
        name: "Romântico e Extras",
        items: [
          "Lingerie especial",
          "Velas / aromatizadores de viagem",
          "Champagne / vinho (se permitido)",
          "Cartões para escrever cartas um ao outro",
          "Câmera instantânea para fotos",
        ],
      },
    ]}
  />
);

export default ChecklistLuaDeMel;
