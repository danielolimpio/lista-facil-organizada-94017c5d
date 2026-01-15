module.exports = {
  // Lista de todas as rotas para pré-renderizar (SEM barra final)
  include: [
    "/",
    "/lista-de-compras",
    "/lista-de-compras-completa",
    "/lista-supermercado",
    "/lista-duas-pessoas",
    "/lista-mensal",
    "/lista-solteiro",
    "/lista-saudavel",
    "/lista-de-material-escolar",
    "/lista-de-material-escolar-2026",
    "/lista-de-material-escolar-educacao-infantil",
    "/lista-de-material-escolar-1-ano",
    "/lista-de-material-escolar-2-ano",
    "/lista-de-material-escolar-3-ano",
    "/lista-de-material-escolar-4-ano",
    "/lista-de-material-escolar-5-ano",
    "/lista-de-material-escolar-6-ano",
    "/lista-de-material-escolar-7-ano",
    "/lista-de-material-escolar-8-ano",
    "/lista-de-material-escolar-9-ano",
    "/lista-de-material-escolar-ensino-medio",
    "/lista-de-casa-nova",
    "/lista-de-casamento",
    "/blog",
    "/blog/dicas-economizar-supermercado",
    "/como-usar",
    "/baixar-em-pdf",
    "/imprimir-listas",
    "/contato",
    "/sitemap",
    "/politica-de-privacidade",
    "/politica-de-cookies",
    "/termos-de-uso",
  ],
  // Configurações de pré-renderização
  puppeteerArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
  puppeteerExecutablePath: undefined,
  // Aguardar renderização completa
  waitUntil: "networkidle0",
  // Injetar dados de rota
  inlineCss: true,
  // Manter estrutura de diretórios
  removeBlobs: true,
  fixInsertRule: true,
  // Não incluir scripts desnecessários
  skipThirdPartyRequests: false,
  // Configuração de viewport
  viewport: {
    width: 1440,
    height: 900,
  },
};
