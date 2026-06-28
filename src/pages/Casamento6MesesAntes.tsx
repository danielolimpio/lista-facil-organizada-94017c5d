import { Heart } from "lucide-react";
import CasaNovaListPage from "@/components/CasaNovaListPage";

const Casamento6MesesAntes = () => (
  <CasaNovaListPage
    icon={Heart}
    title="Checklist 6 Meses Antes do Casamento"
    subtitle="Organize os detalhes intermediários do seu casamento 2026 com 6 meses de antecedência."
    seoTitle="Checklist 6 Meses Antes do Casamento 2026 – Helplistas"
    seoDescription="Lista de tarefas para 6 meses antes do casamento: convites, trajes, alianças, fornecedores secundários e mais."
    path="/lista-de-casamento-6-meses-antes"
    tip="Nesta fase é essencial confirmar todos os fornecedores e começar provas de vestido e trajes."
    categories={[
      {
        name: "Trajes e Beleza",
        items: [
          "Escolher e encomendar vestido de noiva",
          "Primeira prova do vestido",
          "Escolher traje do noivo",
          "Definir trajes dos padrinhos",
          "Contratar maquiadora e cabeleireiro",
          "Agendar teste de maquiagem",
        ],
      },
      {
        name: "Convites e Comunicação",
        items: [
          "Definir arte do convite",
          "Encomendar convites impressos",
          "Criar Save the Date digital",
          "Montar lista final de convidados com endereços",
          "Criar site ou Instagram do casamento",
        ],
      },
      {
        name: "Cerimônia e Recepção",
        items: [
          "Comprar alianças",
          "Curso de noivos (igreja)",
          "Definir cardápio com buffet (degustação)",
          "Definir bebidas / open bar",
          "Escolher músicas da cerimônia",
          "Escolher músicas da festa com DJ",
        ],
      },
      {
        name: "Lua de Mel",
        items: [
          "Comprar passagens",
          "Reservar hotel / resort",
          "Verificar passaporte e visto",
          "Contratar seguro viagem",
        ],
      },
      {
        name: "Outros",
        items: [
          "Reservar carro dos noivos",
          "Definir lembrancinhas",
          "Contratar hospedagem para convidados de fora",
        ],
      },
    ]}
  />
);

export default Casamento6MesesAntes;
