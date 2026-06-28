import { Heart } from "lucide-react";
import CasaNovaListPage from "@/components/CasaNovaListPage";

const CasamentoCompleto = () => (
  <CasaNovaListPage
    icon={Heart}
    title="Checklist Completo de Casamento 2026"
    subtitle="Do noivado à lua de mel: tudo o que noivos brasileiros precisam organizar em 2026."
    seoTitle="Checklist Completo de Casamento 2026 (Brasil) – Helplistas"
    seoDescription="Checklist completo de casamento 2026 com costumes brasileiros: documentos, cerimônia, festa, fornecedores e lua de mel."
    path="/checklist-de-casamento-completo"
    tip="Comece pelo orçamento e a data. No Brasil, cartório, igreja e buffet são os primeiros itens a reservar com antecedência."
    categories={[
      {
        name: "Documentação e Cartório",
        items: [
          "Habilitação de casamento no cartório",
          "RG e CPF dos noivos",
          "Certidão de nascimento atualizada (90 dias)",
          "Comprovante de residência",
          "2 testemunhas com documentos",
          "Pacto antenupcial (se necessário)",
          "Casamento religioso com efeito civil",
          "Atualização de documentos após casamento",
        ],
      },
      {
        name: "Orçamento e Planejamento",
        items: [
          "Definir orçamento total",
          "Planilha de gastos por categoria",
          "Reserva de emergência (10%)",
          "Definir número de convidados",
          "Escolher data e horário",
          "Escolher estilo (clássico, rústico, praia, mini wedding)",
        ],
      },
      {
        name: "Cerimônia",
        items: [
          "Reserva da igreja ou local da cerimônia",
          "Celebrante / padre / pastor / juiz de paz",
          "Decoração da cerimônia",
          "Cortejo (pajens, daminhas, padrinhos)",
          "Alianças",
          "Bíblia ou livro de votos",
          "Música ao vivo / coral",
          "Carro dos noivos",
        ],
      },
      {
        name: "Recepção e Festa",
        items: [
          "Buffet / cardápio degustação",
          "Bolo de casamento e doces finos",
          "Bem-casados para os convidados",
          "Open bar / drinks",
          "DJ ou banda",
          "Pista de dança e iluminação",
          "Cabine de fotos",
          "Hora do buquê",
        ],
      },
      {
        name: "Trajes e Beleza",
        items: [
          "Vestido de noiva",
          "Véu, grinalda e sapatos",
          "Traje do noivo",
          "Trajes dos padrinhos e madrinhas",
          "Maquiagem e cabelo (teste antes)",
          "Manicure e spa do dia anterior",
        ],
      },
      {
        name: "Fornecedores",
        items: [
          "Cerimonialista / assessoria",
          "Fotógrafo e videomaker",
          "Decoração e flores",
          "Convites (papel e digital)",
          "Lembrancinhas",
          "Seguranças e manobristas",
        ],
      },
      {
        name: "Lua de Mel",
        items: [
          "Definir destino (nacional ou internacional)",
          "Passagens e hospedagem",
          "Passaporte e vistos (se necessário)",
          "Seguro viagem",
          "Roupas e malas",
          "Reservas de passeios",
        ],
      },
    ]}
  />
);

export default CasamentoCompleto;
