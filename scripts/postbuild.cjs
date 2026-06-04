const fs = require("fs");
const path = require("path");

const distPath = path.resolve(__dirname, "../dist");

// Lista de todas as rotas do site com seus metadados SEO otimizados e únicos
// IMPORTANTE: URLs SEM barra final para gerar arquivos .html na raiz
const routes = [
  { 
    path: "/", 
    title: "Helplistas – Listas Prontas Grátis para Organizar 2026", 
    description: "Baixe listas gratuitas: compras, material escolar 2026, casa nova e casamento. Tudo pronto para imprimir e organizar sua vida.",
    h1: "Listas Prontas Gratuitas para Organizar Compras, Material Escolar e Casa Nova em 2026",
    h2s: ["Categorias de Listas Disponíveis", "Listas de Compras para Supermercado", "Material Escolar por Série", "Organize sua Casa Nova ou Casamento"],
    intro: "O Helplistas oferece listas prontas, gratuitas e organizadas para facilitar seu dia a dia. Escolha entre listas de compras para supermercado, material escolar atualizado para 2026, checklist completo para casa nova ou planejamento de casamento.",
    schema: "WebSite"
  },
  { 
    path: "/lista-de-compras", 
    title: "Lista de Compras para Supermercado 2026 – Todas as Opções | Helplistas", 
    description: "Encontre a lista de compras ideal para você: completa, mensal, para casal, solteiro ou alimentação saudável. Baixe grátis e organize suas compras no supermercado.",
    h1: "Listas de Compras para Supermercado 2026",
    h2s: ["Escolha a Lista Ideal para Você", "Lista Completa vs Lista Básica", "Dicas para Economizar nas Compras"],
    intro: "Organize suas compras de supermercado com nossas listas prontas e gratuitas. Temos opções para todos os perfis: lista completa com mais de 100 itens, lista básica para compras rápidas, lista mensal para planejamento, lista para casais e solteiros, além de opções focadas em alimentação saudável.",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-compras-completa", 
    title: "Lista de Compras Completa com Todos os Itens por Categoria | Helplistas", 
    description: "A lista de compras mais completa do Brasil com mais de 100 itens organizados por categoria: hortifruti, carnes, laticínios, higiene e limpeza. Baixe grátis em PDF.",
    h1: "Lista de Compras Completa com Todos os Itens para Supermercado",
    h2s: ["Mais de 100 Itens Organizados", "Categorias: Hortifruti, Carnes, Laticínios", "Como Usar Esta Lista no Supermercado"],
    intro: "Esta é a lista de compras mais completa do Brasil, com mais de 100 itens essenciais organizados por categoria. Inclui seções de hortifruti (verduras, legumes e frutas), carnes e proteínas, laticínios, padaria, higiene pessoal e produtos de limpeza. Ideal para compras mensais ou para abastecer a casa do zero.",
    schema: "ItemList"
  },
  { 
    path: "/lista-supermercado", 
    title: "Lista de Supermercado Básica 2026 – Itens Essenciais | Helplistas", 
    description: "Lista básica de supermercado com os itens essenciais para sua despensa. Ideal para compras rápidas e econômicas. Imprima ou use no celular.",
    h1: "Lista de Supermercado com Itens Básicos e Essenciais",
    h2s: ["Itens Essenciais para a Despensa", "Lista Rápida para Compras Semanais", "Economize com o Básico"],
    intro: "Lista de supermercado enxuta e prática com apenas os itens essenciais para manter sua despensa abastecida. Ideal para compras rápidas, semanais ou para quem quer economizar focando no que realmente precisa. Funciona perfeitamente no celular ou impressa.",
    schema: "ItemList"
  },
  { 
    path: "/lista-duas-pessoas", 
    title: "Lista de Compras para Casal – Quantidades Ideais para 2 Pessoas | Helplistas", 
    description: "Lista de compras otimizada para casais com quantidades certas para duas pessoas. Evite desperdício e economize com planejamento inteligente.",
    h1: "Lista de Compras para Casal – Quantidades para 2 Pessoas",
    h2s: ["Quantidades Calculadas para Duas Pessoas", "Evite Desperdício de Alimentos", "Planejamento Semanal e Mensal"],
    intro: "Lista de compras especialmente calculada para casais ou duas pessoas morando juntas. As quantidades foram pensadas para evitar desperdício, economizar dinheiro e garantir que nada falte durante a semana. Inclui sugestões de armazenamento e validade dos produtos.",
    schema: "ItemList"
  },
  { 
    path: "/lista-mensal", 
    title: "Lista de Compras Mensal 2026 – Planejamento Completo do Mês | Helplistas", 
    description: "Planeje todas as compras do mês com nossa lista mensal organizada por categoria. Inclui quantidades, dicas de armazenamento e sugestões de economia.",
    h1: "Lista de Compras Mensal – Planejamento Completo para o Mês",
    h2s: ["Planejamento Mensal de Compras", "Quantidades para 30 Dias", "Dicas de Armazenamento e Economia"],
    intro: "Faça suas compras uma vez por mês com nossa lista mensal completa. Planejada para durar 30 dias, inclui todos os itens essenciais com quantidades apropriadas, além de dicas de armazenamento correto para evitar perdas. Economize tempo e dinheiro com o planejamento adequado.",
    schema: "ItemList"
  },
  { 
    path: "/lista-solteiro", 
    title: "Lista de Compras para Solteiro – Econômica e Prática | Helplistas", 
    description: "Lista de compras ideal para quem mora sozinho: quantidades certas, menos desperdício e mais economia. Prática e fácil de usar no supermercado.",
    h1: "Lista de Compras Econômica para Quem Mora Sozinho",
    h2s: ["Quantidades para Uma Pessoa", "Menos Desperdício, Mais Economia", "Praticidade para o Dia a Dia"],
    intro: "Lista de compras pensada especialmente para quem mora sozinho. Com quantidades individuais, você evita desperdício de alimentos e economiza comprando apenas o necessário. Itens práticos e de fácil preparo para facilitar sua rotina.",
    schema: "ItemList"
  },
  { 
    path: "/lista-saudavel", 
    title: "Lista de Compras Saudável – Alimentos Nutritivos e Naturais | Helplistas", 
    description: "Lista de compras focada em alimentação saudável com frutas, verduras, proteínas magras e grãos integrais. Monte uma dieta equilibrada de forma prática.",
    h1: "Lista de Compras Saudável – Alimentos Nutritivos e Naturais",
    h2s: ["Alimentos Naturais e Integrais", "Proteínas Magras e Vegetais", "Monte uma Dieta Equilibrada"],
    intro: "Lista de compras focada em alimentação saudável e equilibrada. Priorizamos frutas, verduras, legumes, proteínas magras, grãos integrais e alimentos naturais sem ultraprocessados. Ideal para quem quer emagrecer, ganhar massa muscular ou simplesmente comer melhor.",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar", 
    title: "Lista de Material Escolar 2026 Completa por Série | Helplistas", 
    description: "Listas de material escolar 2026 organizadas por série: educação infantil, ensino fundamental (1° ao 9° ano) e ensino médio. Baixe grátis e economize.",
    h1: "Lista Completa de Material Escolar 2026 por Série",
    h2s: ["Material por Série Escolar", "Educação Infantil ao Ensino Médio", "Dicas para Economizar na Compra"],
    intro: "Encontre a lista de material escolar 2026 específica para a série do seu filho. Organizamos por faixa etária: educação infantil (2 a 5 anos), ensino fundamental I (1° ao 5° ano), ensino fundamental II (6° ao 9° ano) e ensino médio. Todas as listas seguem as orientações do MEC.",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-2026", 
    title: "Lista de Material Escolar 2026 – Ano Letivo Atualizado | Helplistas", 
    description: "Material escolar para 2026 atualizado conforme diretrizes do MEC. Lista geral com todos os itens necessários para qualquer série escolar.",
    h1: "Lista de Material Escolar 2026 – Ano Letivo",
    h2s: ["Material Atualizado para 2026", "Itens Conforme Diretrizes do MEC", "Lista Geral para Todas as Séries"],
    intro: "Lista de material escolar atualizada para o ano letivo de 2026, seguindo as diretrizes do Ministério da Educação. Esta lista geral serve como base para qualquer série, podendo ser adaptada conforme as necessidades específicas da escola do seu filho.",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-educacao-infantil", 
    title: "Lista de Material Escolar Educação Infantil 2026 | Helplistas", 
    description: "Material escolar para educação infantil 2026: itens adaptados para crianças de 2 a 5 anos com foco em segurança e desenvolvimento motor.",
    h1: "Lista de Material Escolar para Educação Infantil 2026",
    h2s: ["Materiais Seguros para Crianças", "Foco no Desenvolvimento Motor", "Itens para Crianças de 2 a 5 Anos"],
    intro: "Lista de material escolar especialmente desenvolvida para a educação infantil (creche e pré-escola). Todos os itens foram selecionados pensando na segurança e no desenvolvimento motor de crianças de 2 a 5 anos, com materiais atóxicos e ergonômicos.",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-1-ano", 
    title: "Lista de Material Escolar 1º Ano 2026 – Ensino Fundamental | Helplistas", 
    description: "Lista completa de material escolar para o 1° ano do ensino fundamental 2026. Início da alfabetização com materiais adequados à idade.",
    h1: "Lista de Material Escolar 1° Ano 2026 – Ensino Fundamental",
    h2s: ["Materiais para Início da Alfabetização", "Cadernos e Lápis Apropriados", "Lista Completa para o 1° Ano"],
    intro: "Lista de material escolar para o 1° ano do ensino fundamental 2026, marcando o início da fase de alfabetização. Inclui cadernos de caligrafia, lápis grossos adequados para a idade, materiais para atividades lúdicas e todo o essencial para esta etapa importante.",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-2-ano", 
    title: "Lista de Material Escolar 2º Ano 2026 – Ensino Fundamental | Helplistas", 
    description: "Material escolar para 2° ano do fundamental 2026. Continuidade da alfabetização com ênfase em escrita e coordenação motora fina.",
    h1: "Lista de Material Escolar 2° Ano 2026 – Ensino Fundamental",
    h2s: ["Continuidade da Alfabetização", "Materiais para Escrita e Coordenação", "Lista Atualizada 2° Ano"],
    intro: "Lista de material escolar para o 2° ano do ensino fundamental 2026, fase de consolidação da alfabetização. Os materiais incluem cadernos com pautas mais estreitas, lápis de transição e itens que estimulam a coordenação motora fina e a escrita cursiva.",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-3-ano", 
    title: "Lista de Material Escolar 3º Ano 2026 – Ensino Fundamental | Helplistas", 
    description: "Lista de materiais para o 3° ano fundamental 2026. Fase de consolidação da leitura e escrita com materiais mais avançados.",
    h1: "Lista de Material Escolar 3° Ano 2026 – Ensino Fundamental",
    h2s: ["Consolidação da Leitura e Escrita", "Materiais Mais Avançados", "Preparação para o 4° Ano"],
    intro: "Lista de material escolar para o 3° ano do ensino fundamental 2026. Nesta fase, a leitura e escrita já estão consolidadas, permitindo materiais mais avançados como cadernos universitários pequenos e introdução a materiais de matemática.",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-4-ano", 
    title: "Lista de Material Escolar 4º Ano 2026 – Ensino Fundamental | Helplistas", 
    description: "Material escolar 4° ano 2026: preparação para o ciclo final do Fundamental I com foco em produção textual e ciências.",
    h1: "Lista de Material Escolar 4° Ano 2026 – Ensino Fundamental",
    h2s: ["Foco em Produção Textual", "Introdução a Ciências", "Preparação para o 5° Ano"],
    intro: "Lista de material escolar para o 4° ano do ensino fundamental 2026. Esta fase marca a preparação para o ciclo final do Fundamental I, com maior ênfase em produção textual, pesquisas e introdução mais aprofundada a ciências e geografia.",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-5-ano", 
    title: "Lista de Material Escolar 5º Ano 2026 – Conclusão Fundamental I | Helplistas", 
    description: "Material escolar para 5° ano 2026: conclusão do Fundamental I com introdução a materiais de geometria e estudos mais aprofundados.",
    h1: "Lista de Material Escolar 5° Ano 2026 – Fundamental I",
    h2s: ["Conclusão do Fundamental I", "Introdução à Geometria", "Preparação para o 6° Ano"],
    intro: "Lista de material escolar para o 5° ano do ensino fundamental 2026, último ano do Fundamental I. Inclui materiais de geometria (régua, esquadro, compasso), cadernos maiores e itens que preparam para a transição ao Fundamental II no próximo ano.",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-6-ano", 
    title: "Lista de Material Escolar 6º Ano 2026 – Início Fundamental II | Helplistas", 
    description: "Lista para 6° ano 2026: transição para o Fundamental II com mais matérias e organização por disciplina. Cadernos universitários recomendados.",
    h1: "Lista de Material Escolar 6° Ano 2026 – Fundamental II",
    h2s: ["Transição para o Fundamental II", "Organização por Disciplina", "Cadernos Universitários e Fichários"],
    intro: "Lista de material escolar para o 6° ano do ensino fundamental 2026, início do Fundamental II. Grande mudança com mais professores e disciplinas, exigindo organização por matéria. Recomendamos cadernos universitários de 10 matérias ou fichários com divisórias.",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-7-ano", 
    title: "Lista de Material Escolar 7º Ano 2026 – Ensino Fundamental II | Helplistas", 
    description: "Material escolar 7° ano 2026: aprofundamento em matemática e ciências com materiais específicos para laboratório e geometria.",
    h1: "Lista de Material Escolar 7° Ano 2026 – Fundamental II",
    h2s: ["Aprofundamento em Matemática", "Materiais para Laboratório", "Geometria Avançada"],
    intro: "Lista de material escolar para o 7° ano do ensino fundamental 2026. Nesta fase há aprofundamento em matemática e ciências, podendo ser necessários materiais para aulas de laboratório, instrumentos de geometria mais precisos e calculadora simples.",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-8-ano", 
    title: "Lista de Material Escolar 8º Ano 2026 – Ensino Fundamental II | Helplistas", 
    description: "Lista de materiais 8° ano 2026: preparação para o ensino médio com ênfase em física e química. Calculadora científica pode ser necessária.",
    h1: "Lista de Material Escolar 8° Ano 2026 – Fundamental II",
    h2s: ["Preparação para o Ensino Médio", "Introdução a Física e Química", "Calculadora Científica"],
    intro: "Lista de material escolar para o 8° ano do ensino fundamental 2026. Esta fase prepara para o ensino médio com introdução mais formal a física e química. Algumas escolas já solicitam calculadora científica. Materiais de laboratório podem ser necessários.",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-9-ano", 
    title: "Lista de Material Escolar 9º Ano 2026 – Final Fundamental II | Helplistas", 
    description: "Material escolar 9° ano 2026: último ano do fundamental com preparação para vestibulinho e ENEM. Materiais avançados incluídos.",
    h1: "Lista de Material Escolar 9° Ano 2026 – Fundamental II",
    h2s: ["Último Ano do Fundamental", "Preparação para Vestibulinho", "Materiais para Simulados e Provas"],
    intro: "Lista de material escolar para o 9° ano do ensino fundamental 2026, último ano antes do ensino médio. Foco em preparação para vestibulinho de escolas técnicas e introdução ao formato do ENEM. Inclui materiais para simulados, fichários organizados e calculadora científica.",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-material-escolar-ensino-medio", 
    title: "Lista de Material Escolar Ensino Médio 2026 – Completa | Helplistas", 
    description: "Material escolar para ensino médio 2026: lista completa com todos os itens para as 3 séries. Ideal para preparação para vestibular e ENEM.",
    h1: "Lista de Material Escolar Ensino Médio 2026",
    h2s: ["Material para as 3 Séries", "Preparação para Vestibular e ENEM", "Calculadora Científica e Materiais Técnicos"],
    intro: "Lista completa de material escolar para o ensino médio 2026, servindo para 1ª, 2ª e 3ª séries. Focada na preparação para vestibulares e ENEM, inclui materiais para estudos aprofundados, fichários organizados, calculadora científica e itens para redação.",
    schema: "ItemList"
  },
  { 
    path: "/lista-de-casa-nova", 
    title: "Checklist de Casa Nova 2026 – Lista Completa por Cômodo | Helplistas", 
    description: "Checklist completo para montar sua casa nova do zero. Organizado por cômodo: cozinha, quarto, sala, banheiro e área de serviço. Não esqueça de nada!",
    h1: "Checklist Completo para Montar sua Casa Nova do Zero",
    h2s: ["Lista Organizada por Cômodo", "Cozinha, Quarto, Sala e Banheiro", "Prioridades para Mudança"],
    intro: "Checklist completo para quem está montando casa nova do zero. Organizamos tudo por cômodo: cozinha (eletrodomésticos, utensílios), quarto (cama, roupas de cama), sala (sofá, TV, decoração), banheiro (toalhas, acessórios) e área de serviço. Não esqueça de nenhum item essencial!",
    schema: "HowTo"
  },
  { 
    path: "/lista-de-casamento", 
    title: "Checklist de Casamento 2026 – Do Noivado à Lua de Mel | Helplistas", 
    description: "Checklist completo para organizar seu casamento: cronograma mês a mês, lista de fornecedores, convidados e presentes. Planeje sem estresse!",
    h1: "Checklist de Casamento 2026: Do Noivado à Lua de Mel",
    h2s: ["Cronograma Mês a Mês", "Lista de Fornecedores e Convidados", "Organização sem Estresse"],
    intro: "Checklist completo de casamento 2026 com tudo que você precisa do noivado à lua de mel. Inclui cronograma mês a mês (12 meses antes até o grande dia), lista de fornecedores para pesquisar, controle de convidados e lista de presentes. Planeje seu casamento sem estresse!",
    schema: "HowTo"
  },
  { 
    path: "/blog", 
    title: "Blog Helplistas – Dicas de Organização, Economia e Planejamento", 
    description: "Dicas práticas para organizar sua vida, economizar nas compras e planejar melhor. Artigos sobre supermercado, material escolar, casa e casamento.",
    h1: "Blog Helplistas – Dicas de Organização e Economia",
    h2s: ["Artigos sobre Economia Doméstica", "Dicas para Supermercado e Compras", "Organização e Planejamento"],
    intro: "No blog do Helplistas você encontra dicas práticas para organizar sua vida e economizar no dia a dia. Publicamos artigos sobre compras de supermercado, material escolar, organização de casa nova, planejamento de casamento e muito mais.",
    schema: "Blog"
  },
  { 
    path: "/blog/dicas-economizar-supermercado", 
    title: "10 Dicas para Economizar no Supermercado 2026 | Helplistas", 
    description: "Aprenda 10 estratégias comprovadas para economizar até 30% nas compras de supermercado. Dicas sobre horários, marcas próprias e apps de desconto.",
    h1: "10 Dicas para Economizar no Supermercado em 2026",
    h2s: ["Melhores Horários para Comprar", "Marcas Próprias vs Marcas Famosas", "Apps de Desconto e Cashback"],
    intro: "Descubra 10 estratégias comprovadas para economizar até 30% nas suas compras de supermercado. Neste artigo, revelamos os melhores horários para encontrar promoções, como usar apps de desconto e cashback, e por que as marcas próprias podem ser sua aliada na economia.",
    schema: "Article"
  },
  { 
    path: "/como-usar", 
    title: "Como Usar as Listas do Helplistas – Guia Rápido | Helplistas", 
    description: "Aprenda a usar nossas listas em 3 passos simples: escolha, personalize e execute. Funciona no celular, computador ou impresso.",
    h1: "Como Usar Nossas Listas – Guia Rápido",
    h2s: ["3 Passos Simples para Usar", "No Celular, Computador ou Impresso", "Personalize Conforme sua Necessidade"],
    intro: "Aprenda a usar as listas do Helplistas em apenas 3 passos: escolha a lista ideal para você, personalize marcando os itens que precisa, e use no supermercado pelo celular ou impressa. Nossas listas funcionam em qualquer dispositivo.",
    schema: "HowTo"
  },
  { 
    path: "/baixar-em-pdf", 
    title: "Baixar Listas em PDF Grátis – Sem Cadastro | Helplistas", 
    description: "Baixe todas as nossas listas em formato PDF gratuitamente. Sem cadastro, sem login. Pronto para imprimir ou usar no celular.",
    h1: "Baixar Listas em PDF Grátis",
    h2s: ["Download Gratuito Sem Cadastro", "Formato PDF para Impressão", "Use no Celular ou Computador"],
    intro: "Baixe todas as listas do Helplistas em formato PDF totalmente grátis e sem precisar de cadastro. Os arquivos estão prontos para impressão ou para usar diretamente no seu celular. Escolha a lista, clique em baixar e pronto!",
    schema: null
  },
  { 
    path: "/imprimir-listas", 
    title: "Como Imprimir Listas Prontas – Passo a Passo | Helplistas", 
    description: "Guia passo a passo para imprimir nossas listas diretamente do navegador. Funciona em qualquer impressora, sem necessidade de software adicional.",
    h1: "Como Imprimir Nossas Listas – Passo a Passo",
    h2s: ["Imprima Direto do Navegador", "Funciona em Qualquer Impressora", "Configurações de Impressão Recomendadas"],
    intro: "Guia passo a passo para imprimir nossas listas direto do navegador, sem precisar de nenhum software adicional. Funciona em qualquer impressora (jato de tinta ou laser) e em qualquer sistema operacional (Windows, Mac, Linux). Veja as configurações recomendadas para melhor resultado.",
    schema: "HowTo"
  },
  { 
    path: "/contato", 
    title: "Contato – Fale com a Equipe Helplistas", 
    description: "Entre em contato conosco por email ou WhatsApp. Sugestões, dúvidas ou parcerias são bem-vindas. Respondemos em até 24 horas.",
    h1: "Fale com a Equipe Helplistas",
    h2s: ["Entre em Contato Conosco", "Sugestões, Dúvidas e Parcerias", "Resposta em até 24 Horas"],
    intro: "Entre em contato com a equipe Helplistas por email ou WhatsApp. Estamos sempre abertos a sugestões de novas listas, dúvidas sobre o uso do site, propostas de parcerias comerciais ou qualquer outro assunto. Respondemos todas as mensagens em até 24 horas.",
    schema: null
  },
  { 
    path: "/sitemap", 
    title: "Mapa do Site – Todas as Páginas | Helplistas", 
    description: "Navegue por todas as páginas do Helplistas organizadas por categoria. Encontre rapidamente a lista que você precisa.",
    h1: "Mapa do Site – Todas as Páginas",
    h2s: ["Navegação por Categorias", "Encontre a Lista que Precisa", "Todas as Páginas do Site"],
    intro: "Navegue por todas as páginas do Helplistas organizadas por categoria. Use este mapa do site para encontrar rapidamente a lista que você precisa: compras de supermercado, material escolar, casa nova, casamento, além de páginas de ajuda e blog.",
    schema: null
  },
  { 
    path: "/politica-de-privacidade", 
    title: "Política de Privacidade | Helplistas", 
    description: "Saiba como o Helplistas coleta, armazena e protege seus dados pessoais. Conformidade com LGPD garantida.",
    h1: "Política de Privacidade do Helplistas",
    h2s: ["Coleta de Dados Pessoais", "Proteção e Segurança", "Conformidade com LGPD"],
    intro: "Saiba como o Helplistas coleta, armazena e protege seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD). Valorizamos sua privacidade e trabalhamos para garantir a segurança de todas as informações.",
    schema: null
  },
  { 
    path: "/politica-de-cookies", 
    title: "Política de Cookies | Helplistas", 
    description: "Entenda como usamos cookies para melhorar sua experiência no site. Saiba como gerenciar suas preferências de cookies.",
    h1: "Política de Cookies do Helplistas",
    h2s: ["O que São Cookies", "Como Usamos Cookies", "Gerenciar Preferências"],
    intro: "Entenda como o Helplistas utiliza cookies para melhorar sua experiência de navegação. Explicamos quais tipos de cookies usamos, para que servem e como você pode gerenciar suas preferências de privacidade.",
    schema: null
  },
  { 
    path: "/termos-de-uso", 
    title: "Termos de Uso | Helplistas", 
    description: "Leia nossos termos e condições de uso do site Helplistas. Direitos, responsabilidades e limitações.",
    h1: "Termos de Uso do Helplistas",
    h2s: ["Condições de Uso do Site", "Direitos e Responsabilidades", "Limitações de Responsabilidade"],
    intro: "Leia os termos e condições de uso do site Helplistas. Este documento estabelece os direitos e responsabilidades tanto dos usuários quanto da plataforma, além das limitações de responsabilidade aplicáveis.",
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
        "dateModified": "2026-01-15",
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
  
  // Determinar categoria pai (URLs sem barra final)
  if (route.path.includes("lista-de-compras") || route.path.includes("lista-supermercado") || 
      route.path.includes("lista-duas") || route.path.includes("lista-mensal") || 
      route.path.includes("lista-solteiro") || route.path.includes("lista-saudavel")) {
    breadcrumbs.push({ position: 2, name: "Listas de Compras", url: baseUrl + "/lista-de-compras" });
  } else if (route.path.includes("material-escolar")) {
    breadcrumbs.push({ position: 2, name: "Material Escolar", url: baseUrl + "/lista-de-material-escolar" });
  } else if (route.path.includes("casa-nova")) {
    breadcrumbs.push({ position: 2, name: "Casa Nova", url: baseUrl + "/lista-de-casa-nova" });
  } else if (route.path.includes("casamento")) {
    breadcrumbs.push({ position: 2, name: "Casamento", url: baseUrl + "/lista-de-casamento" });
  } else if (route.path.includes("blog")) {
    breadcrumbs.push({ position: 2, name: "Blog", url: baseUrl + "/blog" });
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

console.log("🔧 Iniciando pós-processamento SSG com SEO otimizado (URLs sem barra final)...");

// Ler o index.html gerado pelo Vite
const mainIndexPath = path.join(distPath, "index.html");

if (!fs.existsSync(mainIndexPath)) {
  console.error("❌ Erro: index.html não encontrado em dist/");
  process.exit(1);
}

const mainIndexContent = fs.readFileSync(mainIndexPath, "utf-8");

// Criar arquivos .html para cada rota (sem diretórios)
let created = 0;
routes.forEach((route) => {
  if (route.path === "/") return; // Pular a raiz, já existe

  // Gerar schemas
  const pageSchema = generateSchema(route);
  const breadcrumbSchema = generateBreadcrumb(route);
  const allSchemas = [pageSchema, breadcrumbSchema].filter(s => s).join("\n    ");
  
  // Gerar conteúdo semântico único para crawlers (H1, H2s, intro, links internos)
  const h2Tags = route.h2s ? route.h2s.map(h2 => `<h2>${h2}</h2>`).join("\n      ") : "";
  const introText = route.intro ? `<p class="intro-text">${route.intro}</p>` : "";
  
  // Links internos contextuais por categoria (URLs sem barra final)
  let relatedLinks = "";
  if (route.path.includes("lista-de-compras") || route.path.includes("lista-supermercado") || 
      route.path.includes("lista-duas") || route.path.includes("lista-mensal") || 
      route.path.includes("lista-solteiro") || route.path.includes("lista-saudavel")) {
    relatedLinks = `
      <nav class="related-links" aria-label="Listas relacionadas">
        <p>Veja também: <a href="/lista-de-compras-completa">Lista Completa</a> | <a href="/lista-mensal">Lista Mensal</a> | <a href="/lista-saudavel">Lista Saudável</a> | <a href="/blog/dicas-economizar-supermercado">Dicas de Economia</a></p>
      </nav>`;
  } else if (route.path.includes("material-escolar")) {
    relatedLinks = `
      <nav class="related-links" aria-label="Listas relacionadas">
        <p>Navegue por série: <a href="/lista-de-material-escolar-educacao-infantil">Ed. Infantil</a> | <a href="/lista-de-material-escolar-1-ano">1° Ano</a> | <a href="/lista-de-material-escolar-6-ano">6° Ano</a> | <a href="/lista-de-material-escolar-ensino-medio">Ensino Médio</a></p>
      </nav>`;
  } else if (route.path.includes("casa-nova") || route.path.includes("casamento")) {
    relatedLinks = `
      <nav class="related-links" aria-label="Listas relacionadas">
        <p>Veja também: <a href="/lista-de-casa-nova">Casa Nova</a> | <a href="/lista-de-casamento">Casamento</a> | <a href="/lista-de-compras-completa">Compras Completa</a></p>
      </nav>`;
  }
  
  const semanticContent = `
    <article class="semantic-content" role="main">
      <h1>${route.h1}</h1>
      ${introText}
      ${h2Tags}
      ${relatedLinks}
    </article>`;

  // Gerar HTML com metadados específicos da página (URLs sem barra final)
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
    // Substituir conteúdo do root com conteúdo semântico único
    .replace(
      /<div id="root">[\s\S]*?<\/div>\s*<script type="module"/,
      `<div id="root"><div class="seo-fallback" hidden aria-hidden="true">${semanticContent}</div></div>
    <script type="module"`
    );
  
  // Inserir schemas antes do fechamento do </head>
  if (allSchemas) {
    pageHtml = pageHtml.replace(
      /<\/head>/,
      `    ${allSchemas}\n  </head>`
    );
  }

  // Determinar o caminho do arquivo .html
  // Para rotas como /blog/dicas-economizar-supermercado, criar blog/dicas-economizar-supermercado.html
  const routePath = route.path.replace(/^\//, ""); // Remover barra inicial
  
  if (routePath.includes("/")) {
    // Rota com subpasta (ex: blog/artigo)
    const parts = routePath.split("/");
    const dirPath = path.join(distPath, ...parts.slice(0, -1));
    const fileName = parts[parts.length - 1] + ".html";
    
    // Criar diretório se não existir
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    const filePath = path.join(dirPath, fileName);
    fs.writeFileSync(filePath, pageHtml);
    console.log(`   ✓ ${route.path} -> ${parts.slice(0, -1).join("/")}/${fileName}`);
  } else {
    // Rota simples (ex: lista-de-compras)
    const filePath = path.join(distPath, routePath + ".html");
    fs.writeFileSync(filePath, pageHtml);
    console.log(`   ✓ ${route.path} -> ${routePath}.html`);
  }
  
  created++;
});

console.log(`\n✅ SSG concluído: ${created} páginas criadas com SEO otimizado`);
console.log(`📁 Estrutura de arquivos .html na raiz (sem pastas index.html):`);

// Listar arquivos .html criados
const htmlFiles = fs.readdirSync(distPath)
  .filter(file => file.endsWith('.html') && file !== 'index.html');

htmlFiles.forEach(file => {
  console.log(`   /${file.replace('.html', '')} -> ${file}`);
});

// Verificar subpastas (como blog/)
const dirs = fs.readdirSync(distPath, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('assets'));

dirs.forEach(dir => {
  const subFiles = fs.readdirSync(path.join(distPath, dir.name))
    .filter(file => file.endsWith('.html'));
  subFiles.forEach(file => {
    console.log(`   /${dir.name}/${file.replace('.html', '')} -> ${dir.name}/${file}`);
  });
});

console.log("\n🔍 SEO Features incluídas:");
console.log("   ✓ URLs SEM barra final");
console.log("   ✓ Arquivos .html na raiz (não pastas/index.html)");
console.log("   ✓ H1 únicos por página");
console.log("   ✓ H2s únicos por página (3 por página)");
console.log("   ✓ Introdução textual única (aumenta text ratio)");
console.log("   ✓ Links internos contextuais");
console.log("   ✓ Meta descriptions variadas");
console.log("   ✓ Schema.org (ItemList, HowTo, Article, Blog)");
console.log("   ✓ BreadcrumbList para navegação");
console.log("   ✓ Canonical URLs sem barra final");
