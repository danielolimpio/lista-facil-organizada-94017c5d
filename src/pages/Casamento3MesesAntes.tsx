import { Heart } from "lucide-react";
import CasaNovaListPage from "@/components/CasaNovaListPage";

const Casamento3MesesAntes = () => (
  <CasaNovaListPage
    icon={Heart}
    title="Checklist 3 Meses Antes do Casamento"
    subtitle="Reta final: últimos preparativos para o grande dia em 2026."
    seoTitle="Checklist 3 Meses Antes do Casamento 2026 – Helplistas"
    seoDescription="Lista de tarefas finais para 3 meses antes do casamento: provas finais, confirmações, pagamentos e detalhes."
    path="/lista-de-casamento-3-meses-antes"
    tip="Confirme TODOS os fornecedores por escrito (WhatsApp ou e-mail) e revise pagamentos pendentes."
    categories={[
      {
        name: "Confirmações",
        items: [
          "Confirmar presença dos convidados (RSVP)",
          "Confirmar fornecedores por contrato",
          "Confirmar cardápio final com buffet",
          "Confirmar cronograma do dia com cerimonialista",
          "Confirmar transporte dos noivos",
        ],
      },
      {
        name: "Cartório e Documentação",
        items: [
          "Dar entrada no cartório (até 30 dias antes)",
          "Confirmar testemunhas",
          "Conferir documentos dos noivos",
        ],
      },
      {
        name: "Trajes e Beleza",
        items: [
          "Prova final do vestido",
          "Ajustes do traje do noivo",
          "Comprar lingerie e meias",
          "Comprar sapatos confortáveis para a festa",
          "Cuidados com pele e cabelo",
          "Agendar últimas sessões de estética",
        ],
      },
      {
        name: "Detalhes Finais",
        items: [
          "Enviar convites (60 dias antes)",
          "Montar playlist da cerimônia",
          "Definir ordem de entrada do cortejo",
          "Escrever votos",
          "Comprar mimos para padrinhos",
          "Preparar kit emergência (toalete, lencinhos, costura)",
        ],
      },
      {
        name: "Pagamentos",
        items: [
          "Quitação do buffet",
          "Pagamento do fotógrafo (entrada e parcelas)",
          "Pagamento da decoração",
          "Pagamento de DJ/banda",
          "Pagamento de cerimonialista",
        ],
      },
    ]}
  />
);

export default Casamento3MesesAntes;
