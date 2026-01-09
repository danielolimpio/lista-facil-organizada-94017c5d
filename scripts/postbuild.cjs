const fs = require("fs");
const path = require("path");

const distPath = path.resolve(__dirname, "../dist");

// Lista de todas as rotas do site com seus metadados SEO otimizados e únicos
const routes = [
  { 
    path: "/", 
    title: "Helplistas - Listas Prontas Gratuitas: Compras, Material Escolar, Casa Nova e Casamento", 
    description: "Baixe listas gratuitas e organizadas: lista de compras completa, material escolar 2026, checklist para casa nova e casamento. Tudo pronto para você imprimir!",
    h1: "Listas Prontas Gratuitas para Organizar Compras, Material Escolar e Casa Nova em 2026",
    schema: "WebSite"
  },
  { 
    path: "/lista-de-compras/", 
    title: "Lista de Compras para Supermercado 2026 – Todas as Opções | Helplistas", 
    description: "Encontre a lista de compras ideal para você: completa, mensal, para casal, solteiro ou alimentação saudável. Baixe grátis e organize suas compras no supermercado.",
    h1: "Listas de Compras para Supermercado 2026",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-compras-completa/", 
    title: "Lista de Compras Completa com Todos os Itens por Categoria | Helplistas", 
    description: "A lista de compras mais completa do Brasil com mais de 100 itens organizados por categoria: hortifruti, carnes, laticínios, higiene e limpeza. Baixe grátis em PDF.",
    h1: "Lista de Compras Completa com Todos os Itens para Supermercado",
    schema: "ItemList"
  },
  { 
    path: "/lista-supermercado/", 
    title: "Lista de Supermercado Básica 2026 – Itens Essenciais | Helplistas", 
    description: "Lista básica de supermercado com os itens essenciais para sua despensa. Ideal para compras rápidas e econômicas. Imprima ou use no celular.",
    h1: "Lista de Supermercado com Itens Básicos e Essenciais",
    schema: "ItemList"
  },
  { 
    path: "/lista-duas-pessoas/", 
    title: "Lista de Compras para Casal – Quantidades Ideais para 2 Pessoas | Helplistas", 
    description: "Lista de compras otimizada para casais com quantidades certas para duas pessoas. Evite desperdício e economize com planejamento inteligente.",
    h1: "Lista de Compras para Casal – Quantidades para 2 Pessoas",
    schema: "ItemList"
  },
  { 
    path: "/lista-mensal/", 
    title: "Lista de Compras Mensal 2026 – Planejamento Completo do Mês | Helplistas", 
    description: "Planeje todas as compras do mês com nossa lista mensal organizada por categoria. Inclui quantidades, dicas de armazenamento e sugestões de economia.",
    h1: "Lista de Compras Mensal – Planejamento Completo para o Mês",
    schema: "ItemList"
  },
  { 
    path: "/lista-solteiro/", 
    title: "Lista de Compras para Solteiro – Econômica e Prática | Helplistas", 
    description: "Lista de compras ideal para quem mora sozinho: quantidades certas, menos desperdício e mais economia. Prática e fácil de usar no supermercado.",
    h1: "Lista de Compras Econômica para Quem Mora Sozinho",
    schema: "ItemList"
  },
  { 
    path: "/lista-saudavel/", 
    title: "Lista de Compras Saudável – Alimentos Nutritivos e Naturais | Helplistas", 
    description: "Lista de compras focada em alimentação saudável com frutas, verduras, proteínas magras e grãos integrais. Monte uma dieta equilibrada de forma prática.",
    h1: "Lista de Compras Saudável – Alimentos Nutritivos e Naturais",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar/", 
    title: "Lista de Material Escolar 2026 Completa por Série | Helplistas", 
    description: "Listas de material escolar 2026 organizadas por série: educação infantil, ensino fundamental (1° ao 9° ano) e ensino médio. Baixe grátis e economize.",
    h1: "Lista Completa de Material Escolar 2026 por Série",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-2026/", 
    title: "Lista de Material Escolar 2026 – Ano Letivo Atualizado | Helplistas", 
    description: "Material escolar para 2026 atualizado conforme diretrizes do MEC. Lista geral com todos os itens necessários para qualquer série escolar.",
    h1: "Lista de Material Escolar 2026 – Ano Letivo",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-educacao-infantil/", 
    title: "Lista de Material Escolar Educação Infantil 2026 | Helplistas", 
    description: "Material escolar para educação infantil 2026: itens adaptados para crianças de 2 a 5 anos com foco em segurança e desenvolvimento motor.",
    h1: "Lista de Material Escolar para Educação Infantil 2026",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-1-ano/", 
    title: "Lista de Material Escolar 1º Ano 2026 – Ensino Fundamental | Helplistas", 
    description: "Lista completa de material escolar para o 1° ano do ensino fundamental 2026. Início da alfabetização com materiais adequados à idade.",
    h1: "Lista de Material Escolar 1° Ano 2026 – Ensino Fundamental",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-2-ano/", 
    title: "Lista de Material Escolar 2º Ano 2026 – Ensino Fundamental | Helplistas", 
    description: "Material escolar para 2° ano do fundamental 2026. Continuidade da alfabetização com ênfase em escrita e coordenação motora fina.",
    h1: "Lista de Material Escolar 2° Ano 2026 – Ensino Fundamental",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-3-ano/", 
    title: "Lista de Material Escolar 3º Ano 2026 – Ensino Fundamental | Helplistas", 
    description: "Lista de materiais para o 3° ano fundamental 2026. Fase de consolidação da leitura e escrita com materiais mais avançados.",
    h1: "Lista de Material Escolar 3° Ano 2026 – Ensino Fundamental",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-4-ano/", 
    title: "Lista de Material Escolar 4º Ano 2026 – Ensino Fundamental | Helplistas", 
    description: "Material escolar 4° ano 2026: preparação para o ciclo final do Fundamental I com foco em produção textual e ciências.",
    h1: "Lista de Material Escolar 4° Ano 2026 – Ensino Fundamental",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-5-ano/", 
    title: "Lista de Material Escolar 5º Ano 2026 – Conclusão Fundamental I | Helplistas", 
    description: "Material escolar para 5° ano 2026: conclusão do Fundamental I com introdução a materiais de geometria e estudos mais aprofundados.",
    h1: "Lista de Material Escolar 5° Ano 2026 – Fundamental I",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-6-ano/", 
    title: "Lista de Material Escolar 6º Ano 2026 – Início Fundamental II | Helplistas", 
    description: "Lista para 6° ano 2026: transição para o Fundamental II com mais matérias e organização por disciplina. Cadernos universitários recomendados.",
    h1: "Lista de Material Escolar 6° Ano 2026 – Fundamental II",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-7-ano/", 
    title: "Lista de Material Escolar 7º Ano 2026 – Ensino Fundamental II | Helplistas", 
    description: "Material escolar 7° ano 2026: aprofundamento em matemática e ciências com materiais específicos para laboratório e geometria.",
    h1: "Lista de Material Escolar 7° Ano 2026 – Fundamental II",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-8-ano/", 
    title: "Lista de Material Escolar 8º Ano 2026 – Ensino Fundamental II | Helplistas", 
    description: "Lista de materiais 8° ano 2026: preparação para o ensino médio com ênfase em física e química. Calculadora científica pode ser necessária.",
    h1: "Lista de Material Escolar 8° Ano 2026 – Fundamental II",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-9-ano/", 
    title: "Lista de Material Escolar 9º Ano 2026 – Final Fundamental II | Helplistas", 
    description: "Material escolar 9° ano 2026: último ano do fundamental com preparação para vestibulinho e ENEM. Materiais avançados incluídos.",
    h1: "Lista de Material Escolar 9° Ano 2026 – Fundamental II",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-ensino-medio/", 
    title: "Lista de Material Escolar Ensino Médio 2026 – Completa | Helplistas", 
    description: "Material escolar para ensino médio 2026: lista completa com todos os itens para as 3 séries. Ideal para preparação para vestibular e ENEM.",
    h1: "Lista de Material Escolar Ensino Médio 2026",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-casa-nova/", 
    title: "Checklist de Casa Nova 2026 – Lista Completa por Cômodo | Helplistas", 
    description: "Checklist completo para montar sua casa nova do zero. Organizado por cômodo: cozinha, quarto, sala, banheiro e área de serviço. Não esqueça de nada!",
    h1: "Checklist Completo para Montar sua Casa Nova do Zero",
    schema: "HowTo"
  },
  { 
    path: "/lista-de-casamento/", 
    title: "Checklist de Casamento 2026 – Do Noivado à Lua de Mel | Helplistas", 
    description: "Checklist completo para organizar seu casamento: cronograma mês a mês, lista de fornecedores, convidados e presentes. Planeje sem estresse!",
    h1: "Checklist de Casamento 2026: Do Noivado à Lua de Mel",
    schema: "HowTo"
  },
  { 
    path: "/blog/", 
    title: "Blog Helplistas – Dicas de Organização, Economia e Planejamento", 
    description: "Dicas práticas para organizar sua vida, economizar nas compras e planejar melhor. Artigos sobre supermercado, material escolar, casa e casamento.",
    h1: "Blog Helplistas – Dicas de Organização e Economia",
    schema: "Blog"
  },
  { 
    path: "/blog/dicas-economizar-supermercado/", 
    title: "10 Dicas para Economizar no Supermercado em 2026 | Blog Helplistas", 
    description: "Aprenda 10 estratégias comprovadas para economizar até 30% nas compras de supermercado. Dicas sobre horários, marcas próprias e apps de desconto.",
    h1: "10 Dicas para Economizar no Supermercado em 2026",
    schema: "Article"
  },
  { 
    path: "/como-usar/", 
    title: "Como Usar as Listas do Helplistas – Guia Rápido | Helplistas", 
    description: "Aprenda a usar nossas listas em 3 passos simples: escolha, personalize e execute. Funciona no celular, computador ou impresso.",
    h1: "Como Usar Nossas Listas – Guia Rápido",
    schema: "HowTo"
  },
  { 
    path: "/baixar-em-pdf/", 
    title: "Baixar Listas em PDF Grátis – Sem Cadastro | Helplistas", 
    description: "Baixe todas as nossas listas em formato PDF gratuitamente. Sem cadastro, sem login. Pronto para imprimir ou usar no celular.",
    h1: "Baixar Listas em PDF Grátis",
    schema: null
  },
  { 
    path: "/imprimir-listas/", 
    title: "Como Imprimir Listas Prontas – Passo a Passo | Helplistas", 
    description: "Guia passo a passo para imprimir nossas listas diretamente do navegador. Funciona em qualquer impressora, sem necessidade de software adicional.",
    h1: "Como Imprimir Nossas Listas – Passo a Passo",
    schema: "HowTo"
  },
  { 
    path: "/contato/", 
    title: "Contato – Fale com a Equipe Helplistas", 
    description: "Entre em contato conosco por email ou WhatsApp. Sugestões, dúvidas ou parcerias são bem-vindas. Respondemos em até 24 horas.",
    h1: "Fale com a Equipe Helplistas",
    schema: null
  },
  { 
    path: "/sitemap/", 
    title: "Mapa do Site – Todas as Páginas | Helplistas", 
    description: "Navegue por todas as páginas do Helplistas organizadas por categoria. Encontre rapidamente a lista que você precisa.",
    h1: "Mapa do Site – Todas as Páginas",
    schema: null
  },
  { 
    path: "/politica-de-privacidade/", 
    title: "Política de Privacidade | Helplistas", 
    description: "Saiba como o Helplistas coleta, armazena e protege seus dados pessoais. Conformidade com LGPD garantida.",
    h1: "Política de Privacidade do Helplistas",
    schema: null
  },
  { 
    path: "/politica-de-cookies/", 
    title: "Política de Cookies | Helplistas", 
    description: "Entenda como usamos cookies para melhorar sua experiência no site. Saiba como gerenciar suas preferências de cookies.",
    h1: "Política de Cookies do Helplistas",
    schema: null
  },
  { 
    path: "/termos-de-uso/", 
    title: "Termos de Uso | Helplistas", 
    description: "Leia nossos termos e condições de uso do site Helplistas. Direitos, responsabilidades e limitações.",
    h1: "Termos de Uso do Helplistas",
    schema: null
  },
];

// Função para gerar Schema.org JSON-LD
function generateSchema(route) {
  const baseUrl = "https://helplistas.com.br";
  
  if (!route.schema) return "";
  
  let schema = {};
  
  switch (route.schema) {
    case "ItemList":
      schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": route.h1,
        "description": route.description,
        "url": baseUrl + route.path,
        "numberOfItems": "50+",
        "itemListOrder": "https://schema.org/ItemListUnordered"
      };
      break;
    case "HowTo":
      schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": route.h1,
        "description": route.description,
        "url": baseUrl + route.path,
        "step": [
          {
            "@type": "HowToStep",
            "name": "Escolha sua lista",
            "text": "Navegue pelas categorias e escolha a lista que melhor atende suas necessidades."
          },
          {
            "@type": "HowToStep",
            "name": "Personalize",
            "text": "Marque os itens que você precisa e adicione outros conforme sua realidade."
          },
          {
            "@type": "HowToStep",
            "name": "Use ou imprima",
            "text": "Use diretamente no celular ou imprima para levar ao local de compras."
          }
        ]
      };
      break;
    case "Article":
      schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": route.h1,
        "description": route.description,
        "url": baseUrl + route.path,
        "datePublished": "2025-01-01",
        "dateModified": "2026-01-09",
        "author": {
          "@type": "Organization",
          "name": "Helplistas"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Helplistas",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": baseUrl + "/og-image.jpg"
          }
        }
      };
      break;
    case "Blog":
      schema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": route.h1,
        "description": route.description,
        "url": baseUrl + route.path,
        "publisher": {
          "@type": "Organization",
          "name": "Helplistas"
        }
      };
      break;
    default:
      return "";
  }
  
  return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`;
}

// Função para gerar BreadcrumbList Schema
function generateBreadcrumb(route) {
  const baseUrl = "https://helplistas.com.br";
  
  if (route.path === "/") return "";
  
  const parts = route.path.split("/").filter(p => p);
  const breadcrumbs = [
    { position: 1, name: "Início", url: baseUrl + "/" }
  ];
  
  // Determinar categoria pai
  if (route.path.includes("lista-de-compras") || route.path.includes("lista-supermercado") || 
      route.path.includes("lista-duas") || route.path.includes("lista-mensal") || 
      route.path.includes("lista-solteiro") || route.path.includes("lista-saudavel")) {
    breadcrumbs.push({ position: 2, name: "Listas de Compras", url: baseUrl + "/lista-de-compras/" });
  } else if (route.path.includes("material-escolar")) {
    breadcrumbs.push({ position: 2, name: "Material Escolar", url: baseUrl + "/lista-de-material-escolar/" });
  } else if (route.path.includes("casa-nova")) {
    breadcrumbs.push({ position: 2, name: "Casa Nova", url: baseUrl + "/lista-de-casa-nova/" });
  } else if (route.path.includes("casamento")) {
    breadcrumbs.push({ position: 2, name: "Casamento", url: baseUrl + "/lista-de-casamento/" });
  } else if (route.path.includes("blog")) {
    breadcrumbs.push({ position: 2, name: "Blog", url: baseUrl + "/blog/" });
  }
  
  // Adicionar página atual se não for a categoria pai
  if (breadcrumbs.length > 1 && breadcrumbs[breadcrumbs.length - 1].url !== baseUrl + route.path) {
    breadcrumbs.push({ 
      position: breadcrumbs.length + 1, 
      name: route.h1.substring(0, 50), 
      url: baseUrl + route.path 
    });
  }
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map(b => ({
      "@type": "ListItem",
      "position": b.position,
      "name": b.name,
      "item": b.url
    }))
  };
  
  return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`;
}

console.log("🔧 Iniciando pós-processamento SSG com SEO otimizado...");

// Ler o index.html gerado pelo Vite
const mainIndexPath = path.join(distPath, "index.html");

if (!fs.existsSync(mainIndexPath)) {
  console.error("❌ Erro: index.html não encontrado em dist/");
  process.exit(1);
}

const mainIndexContent = fs.readFileSync(mainIndexPath, "utf-8");

// Criar diretórios e arquivos index.html para cada rota
let created = 0;
routes.forEach((route) => {
  if (route.path === "/") return; // Pular a raiz, já existe

  const routePath = route.path.replace(/^\/|\/$/g, ""); // Remover barras
  const dirPath = path.join(distPath, routePath);

  // Criar diretório se não existir
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Gerar schemas
  const pageSchema = generateSchema(route);
  const breadcrumbSchema = generateBreadcrumb(route);
  const allSchemas = [pageSchema, breadcrumbSchema].filter(s => s).join("\n    ");
  
  // Gerar conteúdo semântico para crawlers
  const semanticH1 = `<h1>${route.h1}</h1>`;

  // Gerar HTML com metadados específicos da página
  let pageHtml = mainIndexContent
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(
      /<meta name="description" content=".*?".*?\/>/,
      `<meta name="description" content="${route.description}" />`
    )
    .replace(
      /<link rel="canonical" href=".*?".*?\/>/,
      `<link rel="canonical" href="https://helplistas.com.br${route.path}" />`
    )
    .replace(
      /<meta property="og:url" content=".*?".*?\/>/,
      `<meta property="og:url" content="https://helplistas.com.br${route.path}" />`
    )
    .replace(
      /<meta property="og:title" content=".*?".*?\/>/,
      `<meta property="og:title" content="${route.title}" />`
    )
    .replace(
      /<meta property="og:description" content=".*?".*?\/>/,
      `<meta property="og:description" content="${route.description}" />`
    )
    .replace(
      /<meta name="twitter:url" content=".*?".*?\/>/,
      `<meta name="twitter:url" content="https://helplistas.com.br${route.path}" />`
    )
    .replace(
      /<meta name="twitter:title" content=".*?".*?\/>/,
      `<meta name="twitter:title" content="${route.title}" />`
    )
    .replace(
      /<meta name="twitter:description" content=".*?".*?\/>/,
      `<meta name="twitter:description" content="${route.description}" />`
    )
    // Atualizar H1 no conteúdo semântico
    .replace(
      /<h1>.*?<\/h1>/,
      semanticH1
    );
  
  // Inserir schemas antes do fechamento do </head>
  if (allSchemas) {
    pageHtml = pageHtml.replace(
      /<\/head>/,
      `    ${allSchemas}\n  </head>`
    );
  }

  // Escrever arquivo index.html no diretório
  const indexPath = path.join(dirPath, "index.html");
  fs.writeFileSync(indexPath, pageHtml);
  created++;
});

console.log(`✅ SSG concluído: ${created} páginas criadas com SEO otimizado`);
console.log(`📁 Estrutura de diretórios:`);

// Listar diretórios criados
const dirs = fs.readdirSync(distPath, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

dirs.forEach(dir => {
  const indexExists = fs.existsSync(path.join(distPath, dir, "index.html"));
  console.log(`   /${dir}/ ${indexExists ? "✓" : "✗"}`);
});

console.log("\n🔍 SEO Features incluídas:");
console.log("   ✓ H1 únicos por página");
console.log("   ✓ Meta descriptions variadas");
console.log("   ✓ Schema.org (ItemList, HowTo, Article)");
console.log("   ✓ BreadcrumbList para navegação");
console.log("   ✓ Meta keywords removidas (obsoletas)");
