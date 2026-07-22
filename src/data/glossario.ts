export interface GlossaryTerm {
  slug: string; // usado como /glossario/o-que-e-{slug}
  term: string; // Nome curto (título do verbete)
  category: "Compras" | "Casa Nova" | "Casamento" | "Material Escolar" | "Organização" | "Produtividade";
  definition: string; // 40-60 palavras, direta e empática
  exemploPratico: string; // parágrafo ou itens
  exemploItens?: string[]; // itens reais da lista
  porQueImporta: string; // impacto no orçamento, tempo, estresse
  aprofundamento: {
    texto: string;
    linkText: string;
    linkHref: string;
  };
  relacionados: string[]; // slugs de outros verbetes
  faq: { q: string; a: string }[];
}

const baseGlossary: GlossaryTerm[] = [
  {
    slug: "checklist-de-casa-nova",
    term: "Checklist de Casa Nova",
    category: "Casa Nova",
    definition:
      "Checklist de casa nova é uma lista organizada por cômodo com todos os itens essenciais — móveis, eletrodomésticos, utensílios e produtos de limpeza — que você precisa comprar antes ou logo após a mudança. Serve para evitar esquecimentos, gastos duplicados e o caos típico de quem monta um lar do zero.",
    exemploPratico:
      "Uma família mudando para o primeiro apartamento usa o checklist para não esquecer itens invisíveis, como abridor de lata, coador de café e cesto de roupa suja, que costumam ser lembrados apenas na hora de usar.",
    exemploItens: [
      "Cozinha: geladeira, fogão, panelas, pratos, talheres, escorredor",
      "Quarto: cama, colchão, travesseiros, jogo de lençol, guarda-roupa",
      "Banheiro: toalhas, cortina de box, tapete, porta-escovas",
      "Limpeza: vassoura, rodo, balde, pano de chão, desinfetante",
    ],
    porQueImporta:
      "Sem um checklist, é comum gastar 20% a 30% a mais em compras impulsivas repetidas e passar semanas sem itens básicos. Um planejamento por cômodo reduz o estresse da mudança, distribui o orçamento e garante que a casa fique funcional já na primeira semana.",
    aprofundamento: {
      texto:
        "Se você está montando um lar agora, use a nossa lista completa por cômodo, com quantidades e prioridades já ajustadas para o dia a dia brasileiro.",
      linkText: "Acessar o Checklist Completo de Casa Nova",
      linkHref: "/lista-de-casa-nova-completa",
    },
    relacionados: ["lista-de-mudanca", "enxoval-de-casa", "kit-cozinha-basica"],
    faq: [
      {
        q: "Qual a diferença entre checklist de casa nova e enxoval?",
        a: "O checklist é a lista prática de todos os itens (móveis, utensílios, limpeza). O enxoval refere-se especificamente a roupas de cama, mesa e banho.",
      },
      {
        q: "Quando começar a montar o checklist?",
        a: "O ideal é começar de 60 a 90 dias antes da mudança, priorizando itens de maior valor como geladeira, fogão e cama.",
      },
    ],
  },
  {
    slug: "enxoval-de-casa",
    term: "Enxoval de Casa",
    category: "Casa Nova",
    definition:
      "Enxoval de casa é o conjunto de roupas de cama, mesa e banho, mais utensílios básicos, reunidos para equipar uma residência recém-montada. Difere do checklist geral por focar em tecidos, louças e itens de uso diário que dão conforto imediato à nova casa e evitam improvisos na primeira semana.",
    exemploPratico:
      "Um casal recém-casado monta o enxoval com quatro jogos de toalha, dois jogos de lençol por cama, jogo americano e um conjunto básico de louças para seis pessoas — o suficiente para viver e receber visitas.",
    exemploItens: [
      "Cama: 2 jogos de lençol, 2 edredons, 4 fronhas, 2 cobertores",
      "Mesa: toalha, jogo americano, guardanapos, jogo de jantar 6 lugares",
      "Banho: 4 toalhas de banho, 4 de rosto, 2 tapetes, 1 roupão",
    ],
    porQueImporta:
      "Um enxoval bem planejado dura de 5 a 10 anos e evita compras emergenciais em promoções ruins. Comprar em kits e fora de época pode reduzir o gasto em até 40% e garante padronização visual entre os cômodos, valorizando a estética da casa.",
    aprofundamento: {
      texto:
        "Complemente o enxoval com o checklist de utensílios e móveis por cômodo para não deixar nada de fora da lista de compras.",
      linkText: "Ver o Checklist Completo de Casa Nova",
      linkHref: "/lista-de-casa-nova-completa",
    },
    relacionados: ["checklist-de-casa-nova", "kit-cozinha-basica", "lista-de-mudanca"],
    faq: [
      {
        q: "Enxoval é só para casamento?",
        a: "Não. Qualquer pessoa que vai morar sozinha, mudar de casa ou reformar pode montar um enxoval.",
      },
      {
        q: "Quantas toalhas de banho comprar no enxoval?",
        a: "O padrão é 2 por morador, permitindo uma em uso e outra na lavagem sem faltar.",
      },
    ],
  },
  {
    slug: "kit-cozinha-basica",
    term: "Kit de Cozinha Básica",
    category: "Casa Nova",
    definition:
      "Kit de cozinha básica é o conjunto mínimo de utensílios, panelas e eletroportáteis para cozinhar refeições completas no dia a dia. Ele resolve a dor de quem se muda e descobre, na hora de fazer o primeiro almoço, que faltam itens essenciais como panela, faca boa ou escorredor de massa.",
    exemploPratico:
      "Um estudante universitário no primeiro apartamento monta o kit básico com jogo de panelas de 5 peças, frigideira antiaderente, tábua de corte, jogo de facas e utensílios de silicone.",
    exemploItens: [
      "Jogo de panelas de 5 peças",
      "Frigideira antiaderente 24 cm",
      "Jogo de facas + amolador",
      "Tábua de corte, escorredor, ralador",
      "Colher de pau, concha, espumadeira",
    ],
    porQueImporta:
      "Sem o kit certo, o custo médio de refeições fora chega a R$ 50 por dia. Investir R$ 400 a R$ 800 em uma cozinha funcional se paga em menos de 30 dias e ainda promove alimentação mais saudável e controle do orçamento familiar.",
    aprofundamento: {
      texto:
        "Veja a lista completa de utensílios de cozinha por prioridade, com sugestões de marcas e faixas de preço realistas para 2026.",
      linkText: "Abrir Lista de Casa Nova – Cozinha",
      linkHref: "/lista-de-casa-nova-cozinha",
    },
    relacionados: ["checklist-de-casa-nova", "enxoval-de-casa", "lista-de-mudanca"],
    faq: [
      {
        q: "Vale comprar kit pronto ou peça a peça?",
        a: "Kits prontos costumam ser mais baratos, mas selecionar peça a peça permite priorizar qualidade nos itens de uso diário, como panela e faca.",
      },
    ],
  },
  {
    slug: "lista-de-mudanca",
    term: "Lista de Mudança",
    category: "Casa Nova",
    definition:
      "Lista de mudança é o roteiro passo a passo com tarefas, embalagens e prazos necessários para transferir uma residência sem perder itens nem exceder o orçamento. Ajuda a evitar caixas trocadas, contas esquecidas e o estresse de descobrir que faltou fita adesiva no dia do caminhão.",
    exemploPratico:
      "Uma família com dois filhos usa a lista para agendar a mudança 30 dias antes, contratar frete, transferir internet, embalar por cômodo com etiquetas e cancelar serviços do endereço antigo.",
    exemploItens: [
      "30 dias antes: contratar frete, comprar caixas",
      "15 dias antes: transferir internet, água, energia",
      "7 dias antes: embalar por cômodo com etiquetas",
      "Dia D: kit sobrevivência com toalha, lençol e higiene",
    ],
    porQueImporta:
      "Mudanças mal planejadas custam em média 25% a mais em fretes emergenciais, itens perdidos e novos móveis danificados. Uma lista bem feita economiza dinheiro, reduz o tempo total do processo e diminui atritos familiares comuns em dias de mudança.",
    aprofundamento: {
      texto:
        "Combine a lista de mudança com o checklist de itens por cômodo e evite chegar na casa nova sem os essenciais.",
      linkText: "Ver Checklist de Casa Nova Completo",
      linkHref: "/lista-de-casa-nova",
    },
    relacionados: ["checklist-de-casa-nova", "kit-cozinha-basica", "enxoval-de-casa"],
    faq: [
      {
        q: "Quantas caixas comprar para uma mudança?",
        a: "Em média, 8 a 12 caixas por cômodo para uma casa de 3 dormitórios, considerando roupas, livros e utensílios.",
      },
    ],
  },
  {
    slug: "lista-de-compras",
    term: "Lista de Compras",
    category: "Compras",
    definition:
      "Lista de compras é um registro escrito ou digital dos produtos que você planeja comprar antes de ir ao supermercado. Serve para evitar esquecimentos, comprar por impulso e desperdiçar dinheiro, garantindo que apenas o que é realmente necessário para a semana ou o mês entre no carrinho.",
    exemploPratico:
      "Uma dona de casa monta a lista semanal separando por hortifruti, carnes, laticínios e limpeza, com base no cardápio de sete dias, evitando ir ao mercado mais de uma vez.",
    exemploItens: [
      "Hortifruti: banana, tomate, alface, cebola, batata",
      "Carnes: peito de frango, patinho, ovos",
      "Laticínios: leite, iogurte, queijo mussarela",
      "Mercearia: arroz, feijão, macarrão, óleo, café",
    ],
    porQueImporta:
      "Estudos apontam que consumidores sem lista gastam 23% a mais no supermercado devido a compras por impulso. Uma lista bem feita reduz desperdício de comida (média de R$ 128/mês em alimentos jogados fora) e organiza o cardápio da semana, poupando tempo no dia a dia.",
    aprofundamento: {
      texto:
        "Baixe agora uma lista pronta e completa, organizada por categoria, ideal para imprimir ou usar no celular no supermercado.",
      linkText: "Abrir Lista de Compras Completa",
      linkHref: "/lista-de-compras-completa",
    },
    relacionados: ["lista-de-supermercado", "lista-mensal-de-compras", "planejamento-de-cardapio"],
    faq: [
      {
        q: "Melhor fazer lista no papel ou no celular?",
        a: "Ambos funcionam. No celular ganha praticidade e sincroniza entre pessoas; no papel, ajuda a evitar distrações com notificações.",
      },
      {
        q: "Com que frequência refazer a lista?",
        a: "O ideal é semanal para perecíveis e mensal para itens de limpeza e higiene.",
      },
    ],
  },
  {
    slug: "lista-de-supermercado",
    term: "Lista de Supermercado",
    category: "Compras",
    definition:
      "Lista de supermercado é a versão prática da lista de compras, geralmente enxuta e organizada pelos corredores do mercado. Foca em itens de reposição rápida, como pão, leite, frutas e limpeza, permitindo compras semanais ágeis sem gastar tempo circulando entre gôndolas ou esquecendo produtos essenciais.",
    exemploPratico:
      "Um casal que trabalha fora usa a lista de supermercado semanal com 20 itens fixos, agrupados pela ordem dos corredores, e conclui a compra em menos de 30 minutos.",
    exemploItens: [
      "Pão francês, leite integral, café",
      "Frutas da semana, folhas verdes",
      "Ovos, frango, carne moída",
      "Papel higiênico, detergente, sabão",
    ],
    porQueImporta:
      "Compras semanais organizadas por corredor reduzem em até 40% o tempo dentro do mercado e minimizam a exposição a promoções que não estavam no plano. Isso significa menos estresse, mais controle financeiro e menos alimentos vencendo na geladeira antes de serem consumidos.",
    aprofundamento: {
      texto:
        "Se você quer uma lista rápida e essencial para o supermercado da semana, use nossa versão pronta e otimizada por corredor.",
      linkText: "Abrir Lista de Supermercado",
      linkHref: "/lista-supermercado",
    },
    relacionados: ["lista-de-compras", "lista-mensal-de-compras", "lista-de-compras-saudavel"],
    faq: [
      {
        q: "Qual o melhor dia para ir ao supermercado?",
        a: "Terça e quarta-feira costumam ter menos movimento e melhor reposição de hortifruti.",
      },
    ],
  },
  {
    slug: "lista-mensal-de-compras",
    term: "Lista Mensal de Compras",
    category: "Compras",
    definition:
      "Lista mensal de compras é o planejamento consolidado de todos os produtos não perecíveis e itens de reposição para 30 dias. Foca em arroz, feijão, óleo, higiene e limpeza, evitando idas semanais desnecessárias e permitindo comprar em maior quantidade com desconto ou em atacarejos.",
    exemploPratico:
      "Uma família de quatro pessoas faz a lista mensal com 60 itens não perecíveis no atacarejo, complementando semanalmente apenas hortifruti e carnes frescas no mercado do bairro.",
    exemploItens: [
      "Arroz 5kg, feijão 2kg, óleo 900ml, açúcar",
      "Farinha, macarrão, molho de tomate",
      "Papel higiênico 24 rolos, sabão em pó 5kg",
      "Shampoo, sabonete, creme dental",
    ],
    porQueImporta:
      "Concentrar compras em uma única ida por mês economiza combustível, tempo e permite aproveitar promoções e caixas de atacado. Famílias que adotam esse modelo relatam economia média mensal de 15% a 20% na conta total do supermercado ao longo do ano.",
    aprofundamento: {
      texto:
        "Baixe a lista mensal pronta com quantidades sugeridas por número de moradores e categorias já separadas.",
      linkText: "Abrir Lista Mensal de Compras",
      linkHref: "/lista-mensal",
    },
    relacionados: ["lista-de-compras", "lista-de-supermercado", "planejamento-de-cardapio"],
    faq: [
      {
        q: "Vale mais a pena comprar mensal ou semanal?",
        a: "Não perecíveis e limpeza rendem economia no mensal; hortifruti e carnes devem ser semanais para manter a qualidade.",
      },
    ],
  },
  {
    slug: "lista-de-compras-saudavel",
    term: "Lista de Compras Saudável",
    category: "Compras",
    definition:
      "Lista de compras saudável é o planejamento de alimentos priorizando itens naturais, integrais e menos processados. Ajuda quem quer emagrecer, ganhar massa ou apenas comer melhor a não cair em armadilhas do marketing e a montar um carrinho equilibrado em proteínas, fibras, gorduras boas e vegetais frescos.",
    exemploPratico:
      "Uma pessoa em processo de reeducação alimentar substitui itens industrializados por versões integrais e naturais, priorizando o setor de hortifruti como base da lista.",
    exemploItens: [
      "Folhas verdes, brócolis, abobrinha, tomate",
      "Frutas variadas, banana, maçã, mamão",
      "Frango, peixe, ovos, tofu",
      "Aveia, arroz integral, quinoa, castanhas",
    ],
    porQueImporta:
      "Alimentação saudável reduz risco de doenças crônicas e o gasto médio com farmácia. Uma lista bem estruturada evita cair em ‘saudáveis caros’ do marketing e mantém a dieta acessível: comer bem no Brasil pode custar o mesmo ou até menos do que uma alimentação ultraprocessada.",
    aprofundamento: {
      texto:
        "Comece com nossa lista saudável pronta, montada com itens acessíveis, produtos nacionais e substituições inteligentes.",
      linkText: "Abrir Lista de Compras Saudável",
      linkHref: "/lista-saudavel",
    },
    relacionados: ["lista-de-compras", "lista-mensal-de-compras", "planejamento-de-cardapio"],
    faq: [
      {
        q: "Alimentação saudável é sempre mais cara?",
        a: "Não. Priorizando itens da estação, produtores locais e evitando industrializados ‘fit’, o custo cai significativamente.",
      },
    ],
  },
  {
    slug: "planejamento-de-cardapio",
    term: "Planejamento de Cardápio",
    category: "Organização",
    definition:
      "Planejamento de cardápio é organizar antecipadamente as refeições da semana ou do mês para saber exatamente o que comprar e cozinhar. Reduz o desperdício, elimina o dilema diário do ‘o que fazer para o jantar’ e alinha a lista de compras à alimentação real da família, sem sobras nem faltas.",
    exemploPratico:
      "Um casal define no domingo o cardápio da semana em uma tabela simples: proteína, carboidrato e vegetal para almoço e jantar, garantindo variedade e listando o que falta comprar.",
    exemploItens: [
      "Segunda: frango grelhado, arroz integral, brócolis",
      "Terça: carne moída, batata, salada",
      "Quarta: peixe, purê, legumes",
      "Domingo: massa integral, molho caseiro",
    ],
    porQueImporta:
      "Planejar o cardápio economiza tempo (menos decisões diárias), dinheiro (compra alinhada ao consumo real) e melhora a saúde. Famílias que planejam reduzem em até 30% o desperdício alimentar mensal e cortam significativamente pedidos de delivery de última hora.",
    aprofundamento: {
      texto:
        "Combine o cardápio semanal com uma lista de supermercado pronta e vá ao mercado com clareza total do que comprar.",
      linkText: "Abrir Lista de Supermercado",
      linkHref: "/lista-supermercado",
    },
    relacionados: ["lista-de-compras", "lista-mensal-de-compras", "lista-de-compras-saudavel"],
    faq: [
      {
        q: "Preciso planejar as 3 refeições?",
        a: "Almoço e jantar já bastam. Café da manhã costuma ser padronizado.",
      },
    ],
  },
  {
    slug: "checklist-de-casamento",
    term: "Checklist de Casamento",
    category: "Casamento",
    definition:
      "Checklist de casamento é um cronograma completo de tarefas, do noivado à lua de mel, com prazos e responsáveis definidos. Serve para os noivos não perderem detalhes essenciais — fornecedores, papelada, convites, degustação — e chegarem ao grande dia com tranquilidade, sem estresse de última hora ou improvisos caros.",
    exemploPratico:
      "Um casal que se casa em 12 meses divide o checklist em blocos: 12, 9, 6, 3 e 1 mês antes, distribuindo tarefas entre noivo, noiva e cerimonialista para não acumular decisões.",
    exemploItens: [
      "12 meses: definir data, orçamento, lista de convidados",
      "6 meses: contratar buffet, decoração, banda",
      "3 meses: provas de vestido, degustação, save the date",
      "1 mês: prova final, confirmação de fornecedores",
    ],
    porQueImporta:
      "Casamentos sem cronograma extrapolam o orçamento em 20% a 40% e geram estresse significativo entre noivos e famílias. Um checklist reduz decisões de última hora, garante melhores preços com fornecedores contratados cedo e transforma o processo em algo prazeroso e organizado.",
    aprofundamento: {
      texto:
        "Comece agora pelo cronograma completo, com todas as etapas prontas para você marcar cada tarefa concluída.",
      linkText: "Abrir Checklist de Casamento Completo",
      linkHref: "/checklist-de-casamento-completo",
    },
    relacionados: ["lista-de-convidados", "lista-de-fornecedores", "checklist-lua-de-mel"],
    faq: [
      {
        q: "Quanto tempo antes começar a organizar o casamento?",
        a: "O ideal são 12 meses para casamentos médios/grandes e 6 meses para cerimônias intimistas.",
      },
    ],
  },
  {
    slug: "lista-de-convidados",
    term: "Lista de Convidados",
    category: "Casamento",
    definition:
      "Lista de convidados é o registro organizado de todas as pessoas que serão convidadas para o casamento, com status de confirmação, acompanhantes e informações de contato. Serve para dimensionar o buffet, controlar convites enviados e evitar constrangimentos comuns, como esquecer parentes próximos ou colegas de trabalho importantes.",
    exemploPratico:
      "Uma noiva monta uma planilha dividida em ‘família da noiva’, ‘família do noivo’, ‘amigos’ e ‘trabalho’, com colunas para RSVP, restrição alimentar e mesa designada.",
    exemploItens: [
      "Coluna 1: Nome completo",
      "Coluna 2: Vínculo (família, amigo, trabalho)",
      "Coluna 3: Status (convidado, confirmado, não vai)",
      "Coluna 4: Mesa e restrições",
    ],
    porQueImporta:
      "Cada convidado a mais custa em média R$ 200 a R$ 500 em buffet e bebida. Uma lista bem controlada define com precisão o orçamento total do casamento, evita superlotação e garante que ninguém importante seja esquecido, mantendo a harmonia entre as famílias.",
    aprofundamento: {
      texto:
        "Use a lista pronta de convidados com colunas de RSVP, mesa e restrições alimentares já configuradas.",
      linkText: "Abrir Lista de Convidados de Casamento",
      linkHref: "/lista-de-convidados-casamento",
    },
    relacionados: ["checklist-de-casamento", "lista-de-fornecedores", "checklist-lua-de-mel"],
    faq: [
      {
        q: "Convidados que não confirmam contam no buffet?",
        a: "Trabalhe com margem de 5% a 10% acima dos confirmados para cobrir imprevistos.",
      },
    ],
  },
  {
    slug: "lista-de-fornecedores",
    term: "Lista de Fornecedores",
    category: "Casamento",
    definition:
      "Lista de fornecedores é o registro de todos os prestadores contratados para o casamento — buffet, fotógrafo, decorador, DJ, cerimonialista — com contatos, valores, prazos de pagamento e cláusulas contratuais. Serve para os noivos não perderem prazos, controlarem o orçamento e cobrarem entregas com respaldo documentado.",
    exemploPratico:
      "Um noivo consolida em uma planilha os 12 fornecedores contratados, cada um com data de próximo pagamento, contato do responsável e checklist de entregas.",
    exemploItens: [
      "Buffet, decoração, cerimonial",
      "Fotógrafo, filmagem, iluminação",
      "DJ ou banda, som, gerador",
      "Vestido, terno, alianças, cabeleireiro",
    ],
    porQueImporta:
      "Controlar fornecedores em uma lista central evita duplicidade de contratação, atraso em pagamentos (que geram multas) e falhas de comunicação. Casamentos com controle formal de fornecedores relatam 30% menos imprevistos no dia da cerimônia e resolução mais rápida de problemas emergenciais.",
    aprofundamento: {
      texto:
        "Baixe a lista pronta de fornecedores com todas as colunas necessárias para controle financeiro e de entregas.",
      linkText: "Abrir Lista de Fornecedores de Casamento",
      linkHref: "/lista-de-fornecedores-casamento",
    },
    relacionados: ["checklist-de-casamento", "lista-de-convidados", "checklist-lua-de-mel"],
    faq: [
      {
        q: "Quantos orçamentos pedir para cada fornecedor?",
        a: "No mínimo três por categoria, para comparar preço, portfólio e reputação.",
      },
    ],
  },
  {
    slug: "checklist-lua-de-mel",
    term: "Checklist de Lua de Mel",
    category: "Casamento",
    definition:
      "Checklist de lua de mel é a lista com passaportes, reservas, documentos, roupas e itens de viagem que os noivos precisam preparar antes de embarcar. Evita esquecer documentos essenciais, remédios contínuos ou seguro-viagem, garantindo que a primeira viagem como casal transcorra sem imprevistos evitáveis.",
    exemploPratico:
      "Um casal que vai para o exterior separa 30 dias antes: passaportes válidos, seguro-viagem, vacinas exigidas, adaptador de tomada e cópia digital dos documentos.",
    exemploItens: [
      "Passaporte, RG, CNH, seguro-viagem",
      "Reservas de voo, hotel, translado",
      "Roupas para clima do destino",
      "Kit farmácia + remédios contínuos",
    ],
    porQueImporta:
      "Esquecer um documento pode custar a viagem inteira e milhares de reais. Um checklist completo de lua de mel reduz esse risco a praticamente zero e libera os noivos para curtirem o momento sem ansiedade nem retornos emergenciais à casa nas primeiras horas de viagem.",
    aprofundamento: {
      texto:
        "Use o checklist pronto de lua de mel, com itens separados por categoria e prazo de preparação sugerido.",
      linkText: "Abrir Checklist de Lua de Mel",
      linkHref: "/checklist-lua-de-mel",
    },
    relacionados: ["checklist-de-casamento", "lista-de-convidados", "lista-de-fornecedores"],
    faq: [
      {
        q: "Quando começar a organizar a lua de mel?",
        a: "De 4 a 6 meses antes, especialmente para destinos internacionais que exigem visto ou vacina.",
      },
    ],
  },
  {
    slug: "lista-de-material-escolar",
    term: "Lista de Material Escolar",
    category: "Material Escolar",
    definition:
      "Lista de material escolar é o conjunto de cadernos, canetas, livros e materiais específicos que a escola exige para o ano letivo. Ela serve para pais e responsáveis não esquecerem itens obrigatórios, planejarem o orçamento de volta às aulas e evitarem correria de última hora com filas em papelarias.",
    exemploPratico:
      "Uma mãe organiza a lista do 3º ano fundamental por prioridade: primeiro cadernos e livros didáticos, depois lápis e canetas, por último itens de arte e higiene.",
    exemploItens: [
      "Cadernos universitários e brochuras",
      "Lápis, canetas, borracha, apontador",
      "Estojo, mochila, lancheira",
      "Livros didáticos, dicionário, calculadora",
    ],
    porQueImporta:
      "O material escolar representa até 60% dos gastos de volta às aulas. Uma lista bem planejada permite pesquisar preços com antecedência, aproveitar promoções de dezembro/janeiro e reutilizar itens do ano anterior, gerando economia média de 25% a 40% no orçamento familiar.",
    aprofundamento: {
      texto:
        "Escolha sua lista atualizada para 2026 por série escolar e baixe grátis para imprimir ou usar no celular.",
      linkText: "Ver Listas de Material Escolar por Série",
      linkHref: "/lista-de-material-escolar",
    },
    relacionados: ["kit-alfabetizacao", "material-escolar-2026", "organizacao-de-mochila"],
    faq: [
      {
        q: "Escola pode exigir marca específica?",
        a: "Não. Segundo o Código de Defesa do Consumidor, escolas não podem exigir marcas ou lojas específicas.",
      },
    ],
  },
  {
    slug: "material-escolar-2026",
    term: "Material Escolar 2026",
    category: "Material Escolar",
    definition:
      "Material escolar 2026 é a lista atualizada de itens exigidos para o ano letivo de 2026, seguindo as orientações do MEC e das escolas brasileiras. Inclui cadernos, livros, materiais digitais e itens específicos por série, refletindo mudanças curriculares recentes como o uso maior de recursos tecnológicos e sustentáveis.",
    exemploPratico:
      "Uma família com dois filhos separa a lista de 2026 por série, comparando o que sobrou do ano anterior, e monta uma lista final apenas com o que realmente precisa ser comprado.",
    exemploItens: [
      "Kit base: cadernos, canetas, lápis, mochila",
      "Tecnologia: tablet, fone (algumas escolas)",
      "Livros didáticos e paradidáticos",
      "Materiais de arte por faixa etária",
    ],
    porQueImporta:
      "Pais que compram a lista sem consulta prévia gastam em média 30% a mais. Comprar já em dezembro, usando a lista oficial de 2026, permite comparar preços em três a cinco papelarias e aproveitar promoções, reduzindo consideravelmente o impacto financeiro da volta às aulas.",
    aprofundamento: {
      texto:
        "Baixe a lista de material escolar 2026 completa e organize a volta às aulas sem estresse nem gastos surpresa.",
      linkText: "Abrir Lista de Material Escolar 2026",
      linkHref: "/lista-de-material-escolar-2026",
    },
    relacionados: ["lista-de-material-escolar", "kit-alfabetizacao", "organizacao-de-mochila"],
    faq: [
      {
        q: "Comprar tudo em uma loja só é mais barato?",
        a: "Nem sempre. Pesquisar por categoria e dividir compras entre 2 ou 3 lojas costuma ser mais econômico.",
      },
    ],
  },
  {
    slug: "kit-alfabetizacao",
    term: "Kit de Alfabetização",
    category: "Material Escolar",
    definition:
      "Kit de alfabetização é o conjunto de materiais voltado a crianças de 5 a 7 anos que estão aprendendo a ler e escrever. Inclui itens específicos como lápis grosso triangular, caderno de caligrafia, alfabeto móvel e livros de leitura fácil, apoiando o desenvolvimento motor fino e a consciência fonológica no momento certo.",
    exemploPratico:
      "Uma professora sugere aos pais do 1º ano um kit com lápis triangular, caderno de caligrafia horizontal, alfabeto móvel e livros de literatura infantil com letras grandes.",
    exemploItens: [
      "Lápis triangular grosso, borracha grande",
      "Caderno de caligrafia horizontal",
      "Alfabeto móvel, letras de EVA",
      "Livros de literatura infantil",
    ],
    porQueImporta:
      "Materiais adequados à faixa etária aceleram o processo de alfabetização e reduzem frustração da criança. Usar lápis comum ou cadernos sem pauta apropriada dificulta o traço, prejudica a coordenação motora e pode gerar aversão à escrita já nos primeiros anos escolares.",
    aprofundamento: {
      texto:
        "Veja a lista específica para o 1º ano do fundamental, com itens já selecionados para a fase de alfabetização.",
      linkText: "Abrir Lista de Material Escolar 1º Ano",
      linkHref: "/lista-de-material-escolar-1-ano",
    },
    relacionados: ["lista-de-material-escolar", "material-escolar-2026", "organizacao-de-mochila"],
    faq: [
      {
        q: "Precisa de lápis triangular?",
        a: "Sim, especialmente no 1º ano. Ele facilita a pegada correta e reduz cansaço na mão da criança.",
      },
    ],
  },
  {
    slug: "organizacao-de-mochila",
    term: "Organização de Mochila",
    category: "Material Escolar",
    definition:
      "Organização de mochila é o método de arrumar os itens escolares por peso, frequência de uso e proteção, garantindo ergonomia e agilidade para a criança. Ajuda a prevenir dores nas costas, esquecimentos de tarefas e a bagunça típica de mochilas escolares no final da primeira semana de aulas.",
    exemploPratico:
      "Um pai orienta o filho a colocar livros pesados próximos às costas, cadernos no meio, estojo e lancheira em bolsos externos, e revisar a mochila toda sexta-feira.",
    exemploItens: [
      "Livros pesados próximos às costas",
      "Cadernos no compartimento central",
      "Estojo e agenda em bolso frontal",
      "Lancheira e garrafa em bolso lateral",
    ],
    porQueImporta:
      "Mochilas mal organizadas ultrapassam 10% do peso da criança e podem causar dores lombares em fase de crescimento. Um método simples de organização também reduz esquecimentos de lição, agiliza a rotina matinal e ensina responsabilidade desde cedo, hábito valioso para toda a vida escolar.",
    aprofundamento: {
      texto:
        "Combine a organização da mochila com a lista completa de material escolar para checar itens semanalmente.",
      linkText: "Abrir Lista de Material Escolar",
      linkHref: "/lista-de-material-escolar",
    },
    relacionados: ["lista-de-material-escolar", "kit-alfabetizacao", "material-escolar-2026"],
    faq: [
      {
        q: "Qual o peso ideal de uma mochila escolar?",
        a: "Não deve ultrapassar 10% do peso corporal da criança, segundo a Sociedade Brasileira de Ortopedia.",
      },
    ],
  },
  {
    slug: "planner-semanal",
    term: "Planner Semanal",
    category: "Produtividade",
    definition:
      "Planner semanal é um caderno ou modelo digital dividido pelos sete dias da semana, usado para registrar tarefas, compromissos e metas. Ajuda a organizar rotina pessoal, profissional e familiar em um só lugar, reduzindo o esquecimento de compromissos e a sensação constante de estar apagando incêndios.",
    exemploPratico:
      "Uma empreendedora usa o planner semanal para separar blocos de tempo por área: manhãs para produção, tardes para reuniões e sextas para planejamento da semana seguinte.",
    exemploItens: [
      "Coluna por dia da semana",
      "Espaço para 3 prioridades diárias",
      "Bloco de compromissos por horário",
      "Área para metas semanais e revisão",
    ],
    porQueImporta:
      "Pessoas que planejam a semana relatam 25% mais produtividade e menos estresse. Ter tarefas escritas libera a mente de tentar lembrar de tudo, permite priorizar o que realmente importa e cria uma sensação de controle sobre a agenda, essencial para reduzir ansiedade cotidiana.",
    aprofundamento: {
      texto:
        "Combine seu planner com um checklist prático para tarefas domésticas e listas de compras semanais.",
      linkText: "Abrir Lista de Compras Semanal",
      linkHref: "/lista-supermercado",
    },
    relacionados: ["to-do-list", "gestao-do-tempo", "checklist"],
    faq: [
      {
        q: "Planner digital ou de papel?",
        a: "Papel ajuda na memorização e foco; digital é melhor para compartilhar com família ou equipe.",
      },
    ],
  },
  {
    slug: "to-do-list",
    term: "To-Do List (Lista de Tarefas)",
    category: "Produtividade",
    definition:
      "To-do list é uma lista simples de tarefas a executar em um dia ou período, geralmente do trabalho ou vida pessoal. Ajuda a tirar da cabeça o excesso de coisas para lembrar, priorizar o que é urgente e importante e criar sensação de progresso ao ir marcando cada item concluído ao longo do dia.",
    exemploPratico:
      "Um estudante usa uma to-do list matinal com no máximo cinco itens: dois de estudo, dois pessoais e um administrativo, aumentando sua taxa de conclusão diária.",
    exemploItens: [
      "1. Estudar 2 capítulos",
      "2. Fazer exercícios da apostila",
      "3. Comprar itens da lista de compras",
      "4. Confirmar consulta médica",
    ],
    porQueImporta:
      "Uma to-do list bem feita reduz a chamada ‘carga cognitiva’ e ajuda o cérebro a focar apenas na tarefa atual. Estudos mostram que listar tarefas antes de dormir melhora inclusive a qualidade do sono, por evitar o loop de pensamentos sobre pendências durante a noite.",
    aprofundamento: {
      texto:
        "Combine sua to-do list com uma lista de compras pronta e resolva várias pendências em uma única saída de casa.",
      linkText: "Abrir Lista de Compras Completa",
      linkHref: "/lista-de-compras-completa",
    },
    relacionados: ["planner-semanal", "gestao-do-tempo", "checklist"],
    faq: [
      {
        q: "Quantos itens colocar na to-do list?",
        a: "O ideal é entre 3 e 7 itens diários. Listas maiores geram frustração e paralisação.",
      },
    ],
  },
  {
    slug: "checklist",
    term: "Checklist",
    category: "Organização",
    definition:
      "Checklist é uma lista de verificação usada para conferir se todas as etapas de um processo foram cumpridas. Diferente de uma to-do list, o checklist é reutilizável e padroniza tarefas repetitivas — como sair de casa, fazer compras ou realizar mudança —, reduzindo erros humanos e esquecimentos operacionais críticos.",
    exemploPratico:
      "Antes de sair de casa, uma pessoa segue um checklist fixo: verificar gás, fechar janelas, trancar porta, carregar carteira, celular e chaves.",
    exemploItens: [
      "Antes de sair: gás, janelas, luzes, chaves",
      "Antes de viajar: documentos, mala, casa",
      "Antes da mudança: caixas, frete, endereços",
      "Antes de cozinhar: ingredientes, utensílios",
    ],
    porQueImporta:
      "Checklists são usados em cirurgias, aviação e engenharia justamente por eliminarem erros humanos previsíveis. Trazer essa lógica para o dia a dia (compras, casa, viagem) diminui esquecimentos, gera segurança emocional e transforma tarefas complexas em fluxos simples de seguir passo a passo.",
    aprofundamento: {
      texto:
        "Escolha o checklist ideal para seu momento: casa nova, casamento, compras ou volta às aulas.",
      linkText: "Ver Todas as Categorias de Listas",
      linkHref: "/",
    },
    relacionados: ["planner-semanal", "to-do-list", "checklist-de-casa-nova"],
    faq: [
      {
        q: "Qual a diferença entre checklist e to-do list?",
        a: "Checklist é reutilizável e padroniza processos; to-do list é temporária e específica de um dia.",
      },
    ],
  },
  {
    slug: "gestao-do-tempo",
    term: "Gestão do Tempo",
    category: "Produtividade",
    definition:
      "Gestão do tempo é o conjunto de técnicas para priorizar tarefas, evitar procrastinação e usar melhor as horas do dia. Envolve métodos como blocos de tempo, matriz de urgência x importância e uso consciente de listas, ajudando quem sente que o dia não rende ou que vive apagando incêndios sem avançar no que importa.",
    exemploPratico:
      "Uma profissional aplica a técnica Pomodoro: 25 minutos de foco total em uma tarefa, seguidos de 5 de pausa, agrupados em blocos de 4 sessões.",
    exemploItens: [
      "Definir 3 prioridades do dia",
      "Bloquear agenda para tarefas profundas",
      "Reservar horário fixo para e-mails",
      "Revisar a semana toda sexta-feira",
    ],
    porQueImporta:
      "Boa gestão do tempo aumenta produtividade sem exigir mais horas trabalhadas. Estudos mostram que profissionais que priorizam tarefas produzem até 40% mais em jornadas iguais ou menores, sobrando tempo real para família, hobbies e descanso — pilares de saúde mental e qualidade de vida.",
    aprofundamento: {
      texto:
        "Comece organizando sua rotina com um planner semanal e listas prontas que economizam tempo em decisões operacionais.",
      linkText: "Ver Nossas Listas Prontas Grátis",
      linkHref: "/",
    },
    relacionados: ["planner-semanal", "to-do-list", "checklist"],
    faq: [
      {
        q: "Qual a melhor técnica para começar?",
        a: "Comece pela regra das 3 prioridades diárias. É simples e gera resultado imediato.",
      },
    ],
  },
  {
    slug: "orcamento-domestico",
    term: "Orçamento Doméstico",
    category: "Organização",
    definition:
      "Orçamento doméstico é o registro organizado das receitas e despesas de uma família em determinado período, geralmente mensal. Serve para identificar para onde o dinheiro está indo, cortar gastos desnecessários, planejar compras maiores e sair de dívidas, dando clareza real sobre a saúde financeira do lar.",
    exemploPratico:
      "Um casal registra em uma planilha mensal categorias como moradia, alimentação, transporte e lazer, comparando o previsto com o real ao fim de cada mês.",
    exemploItens: [
      "Receitas: salários, renda extra",
      "Fixos: aluguel, energia, internet",
      "Variáveis: mercado, transporte, lazer",
      "Reserva: emergência e investimento",
    ],
    porQueImporta:
      "Famílias com orçamento doméstico ativo economizam em média 15% da renda mensal e chegam à aposentadoria com patrimônio maior. Mais do que dinheiro, o orçamento reduz brigas por finanças, evita a armadilha do rotativo do cartão e dá poder real de decisão sobre grandes projetos como casa própria e viagens.",
    aprofundamento: {
      texto:
        "Comece cortando o desperdício no supermercado com uma lista de compras mensal enxuta e organizada.",
      linkText: "Abrir Lista Mensal de Compras",
      linkHref: "/lista-mensal",
    },
    relacionados: ["planejamento-de-cardapio", "lista-mensal-de-compras", "gestao-do-tempo"],
    faq: [
      {
        q: "Aplicativo ou planilha?",
        a: "Ambos funcionam. O importante é registrar todos os gastos por pelo menos 3 meses para gerar padrão real.",
      },
    ],
  },
];

const extraGlossary: GlossaryTerm[] = [
  {
    slug: "lista-de-compras-semanal",
    term: "Lista de Compras Semanal",
    category: "Compras",
    definition:
      "Lista de compras semanal é o planejamento dos alimentos, produtos de higiene e itens de reposição que uma casa precisa comprar para sete dias. Ela ajuda a controlar o cardápio, evitar idas extras ao mercado e reduzir desperdícios de perecíveis como frutas, verduras, pães e laticínios.",
    exemploPratico:
      "Uma família define o cardápio de segunda a domingo e transforma cada refeição em itens de compra, separando hortifruti, carnes, mercearia e limpeza rápida.",
    exemploItens: ["Hortifruti para 7 dias", "Proteínas da semana", "Lanches e café da manhã", "Reposição de higiene e limpeza"],
    porQueImporta:
      "A compra semanal diminui desperdício porque trabalha com quantidades menores e mais frescas. Também facilita comparar preços, aproveitar ofertas reais e manter a geladeira organizada, especialmente em casas com rotina corrida, crianças ou alimentação planejada.",
    aprofundamento: {
      texto: "Use a lista de supermercado pronta como base para montar sua compra semanal sem esquecer os itens essenciais.",
      linkText: "Abrir Lista de Supermercado",
      linkHref: "/lista-supermercado",
    },
    relacionados: ["lista-de-supermercado", "planejamento-de-cardapio", "cardapio-semanal"],
    faq: [{ q: "Lista semanal substitui a compra mensal?", a: "Não necessariamente. O ideal é comprar perecíveis semanalmente e deixar itens de limpeza e mercearia para compras mensais." }],
  },
  {
    slug: "compras-do-mes",
    term: "Compras do Mês",
    category: "Compras",
    definition:
      "Compras do mês são as compras maiores, planejadas para abastecer a casa por aproximadamente 30 dias com itens de mercearia, higiene, limpeza e produtos de uso recorrente. A estratégia costuma funcionar melhor quando separa não perecíveis dos alimentos frescos, que devem continuar sendo comprados semanalmente.",
    exemploPratico:
      "Um casal faz a compra do mês no atacarejo com arroz, feijão, óleo, café, papel higiênico e sabão, deixando frutas e verduras para o mercado da semana.",
    exemploItens: ["Mercearia básica", "Higiene pessoal", "Produtos de limpeza", "Itens de despensa e atacado"],
    porQueImporta:
      "Comprar para o mês reduz deslocamentos, melhora a negociação por volume e deixa o orçamento mais previsível. Quando bem planejada, evita compras pequenas e caras no mercado de bairro e impede que a família fique sem produtos essenciais no fim do mês.",
    aprofundamento: {
      texto: "A lista mensal já organiza os itens por categoria para facilitar compras em supermercado e atacarejo.",
      linkText: "Abrir Lista Mensal de Compras",
      linkHref: "/lista-mensal",
    },
    relacionados: ["lista-mensal-de-compras", "orcamento-domestico", "atacarejo"],
    faq: [{ q: "O que não comprar para o mês inteiro?", a: "Evite comprar em grande volume frutas muito maduras, folhas, pães frescos e carnes sem espaço adequado de congelamento." }],
  },
  {
    slug: "despensa-organizada",
    term: "Despensa Organizada",
    category: "Organização",
    definition:
      "Despensa organizada é o método de armazenar alimentos e produtos de reposição por categoria, validade e frequência de uso. O objetivo é enxergar rapidamente o que existe em casa, evitar compras duplicadas e impedir que itens como farinha, arroz, enlatados e temperos vençam esquecidos no fundo do armário.",
    exemploPratico:
      "Uma pessoa separa a despensa em prateleiras de café da manhã, mercearia, enlatados, temperos e reposição, deixando os vencimentos mais próximos sempre na frente.",
    exemploItens: ["Potes transparentes etiquetados", "Produtos por validade", "Setor de reposição", "Lista fixa de estoque mínimo"],
    porQueImporta:
      "Uma despensa desorganizada aumenta desperdício e faz a família comprar itens que já tem. Com organização simples, a lista de compras fica mais precisa, o preparo das refeições ganha velocidade e o orçamento doméstico deixa de perder dinheiro com alimentos vencidos.",
    aprofundamento: {
      texto: "Depois de organizar a despensa, use uma lista completa para repor apenas o que realmente está faltando.",
      linkText: "Abrir Lista de Compras Completa",
      linkHref: "/lista-de-compras-completa",
    },
    relacionados: ["lista-de-compras", "compras-do-mes", "orcamento-domestico"],
    faq: [{ q: "Como começar a organizar a despensa?", a: "Retire tudo, confira validades, agrupe por categoria e anote o que precisa ser reposto antes de ir ao mercado." }],
  },
  {
    slug: "lista-de-hortifruti",
    term: "Lista de Hortifruti",
    category: "Compras",
    definition:
      "Lista de hortifruti é a seleção planejada de frutas, verduras, legumes e temperos frescos para a semana. Ela ajuda a comprar quantidades realistas, variar nutrientes, escolher alimentos da estação e evitar que folhas, frutas maduras e legumes estraguem antes de serem consumidos.",
    exemploPratico:
      "Uma pessoa compra alface, tomate, cenoura, banana, maçã, mamão e cheiro-verde para sete dias, ajustando a quantidade conforme refeições fora de casa.",
    exemploItens: ["Folhas para salada", "Frutas do café da manhã", "Legumes para almoço", "Temperos frescos"],
    porQueImporta:
      "O hortifruti é uma das áreas com maior desperdício quando a compra é feita por impulso. Uma lista enxuta melhora a alimentação, reduz perdas na geladeira e permite aproveitar produtos da estação, que costumam ser mais baratos e saborosos.",
    aprofundamento: {
      texto: "Monte um carrinho mais nutritivo usando a lista saudável pronta, com hortifruti e proteínas equilibradas.",
      linkText: "Abrir Lista de Compras Saudável",
      linkHref: "/lista-saudavel",
    },
    relacionados: ["lista-de-compras-saudavel", "planejamento-de-cardapio", "cardapio-semanal"],
    faq: [{ q: "Quantas frutas comprar por semana?", a: "Calcule de 2 a 3 porções por pessoa por dia e ajuste conforme refeições feitas fora de casa." }],
  },
  {
    slug: "lista-de-produtos-de-limpeza",
    term: "Lista de Produtos de Limpeza",
    category: "Compras",
    definition:
      "Lista de produtos de limpeza é o controle dos itens necessários para higienizar cozinha, banheiro, pisos, roupas e superfícies da casa. Ela evita compras repetidas, falta de produtos em dias de faxina e gastos com itens muito específicos quando produtos multiuso resolveriam a maior parte da rotina.",
    exemploPratico:
      "Uma casa mantém detergente, desinfetante, sabão em pó, água sanitária, multiuso, panos, esponjas e sacos de lixo como base mensal de limpeza.",
    exemploItens: ["Detergente e esponja", "Desinfetante e multiuso", "Sabão em pó ou líquido", "Sacos de lixo e panos"],
    porQueImporta:
      "Produtos de limpeza parecem baratos individualmente, mas pesam no orçamento quando comprados sem controle. Uma lista por ambiente racionaliza o estoque, evita falta em emergências e reduz riscos de misturas perigosas entre químicos incompatíveis.",
    aprofundamento: {
      texto: "Veja uma lista focada em limpeza para casa nova e rotina doméstica com itens essenciais por ambiente.",
      linkText: "Abrir Lista de Casa Nova Limpeza",
      linkHref: "/lista-de-casa-nova-limpeza",
    },
    relacionados: ["despensa-organizada", "compras-do-mes", "lista-de-compras"],
    faq: [{ q: "Quais produtos de limpeza são realmente básicos?", a: "Detergente, desinfetante, multiuso, sabão para roupas, água sanitária, panos, esponjas e sacos de lixo cobrem a maioria das rotinas." }],
  },
  {
    slug: "lista-de-higiene-pessoal",
    term: "Lista de Higiene Pessoal",
    category: "Compras",
    definition:
      "Lista de higiene pessoal reúne itens de cuidado diário como sabonete, shampoo, condicionador, creme dental, desodorante, papel higiênico e absorventes. Ela ajuda a manter estoque mínimo em casa, comprar em promoções com consciência e evitar gastos emergenciais quando algum produto acaba sem aviso.",
    exemploPratico:
      "Uma família calcula consumo mensal de sabonete, shampoo e papel higiênico por morador e define uma quantidade de segurança para não faltar.",
    exemploItens: ["Sabonete e shampoo", "Creme dental e fio dental", "Desodorante", "Papel higiênico e absorventes"],
    porQueImporta:
      "Itens de higiene têm consumo previsível e grande variação de preço entre marcas e embalagens. Controlar a lista permite comprar packs econômicos, evitar desperdício e manter dignidade e conforto no dia a dia da família.",
    aprofundamento: {
      texto: "Inclua higiene pessoal dentro da compra mensal para controlar melhor o orçamento do supermercado.",
      linkText: "Abrir Lista Mensal de Compras",
      linkHref: "/lista-mensal",
    },
    relacionados: ["compras-do-mes", "orcamento-domestico", "lista-de-compras"],
    faq: [{ q: "Vale comprar higiene pessoal em atacado?", a: "Sim, quando a família usa marcas fixas e há espaço para armazenar sem risco de vencer ou estragar." }],
  },
  {
    slug: "compra-economica",
    term: "Compra Econômica",
    category: "Compras",
    definition:
      "Compra econômica é a estratégia de comprar apenas o necessário, comparar preço por unidade, priorizar alimentos versáteis e evitar decisões por impulso no supermercado. Não significa comprar sempre o mais barato, mas escolher o melhor custo-benefício para a rotina, o orçamento e o tamanho da família.",
    exemploPratico:
      "Uma pessoa compara o preço por quilo do arroz, escolhe frutas da estação e troca produtos ultraprocessados caros por ingredientes básicos para cozinhar em casa.",
    exemploItens: ["Comparar preço por unidade", "Evitar compras por impulso", "Priorizar marcas próprias", "Planejar cardápio antes"],
    porQueImporta:
      "A economia no supermercado vem de pequenas decisões repetidas. Comprar com lista, orçamento e cardápio reduz desperdício, melhora a previsibilidade financeira e impede que promoções falsas ocupem espaço no carrinho e no armário.",
    aprofundamento: {
      texto: "Veja dicas práticas para economizar no supermercado e aplicar a compra econômica no dia a dia.",
      linkText: "Ler Dicas para Economizar no Supermercado",
      linkHref: "/blog/dicas-economizar-supermercado",
    },
    relacionados: ["orcamento-domestico", "lista-de-compras", "atacarejo"],
    faq: [{ q: "Comprar promoção sempre economiza?", a: "Não. Promoção só economiza quando o item já estava na lista, será consumido e tem preço unitário realmente menor." }],
  },
  {
    slug: "atacarejo",
    term: "Atacarejo",
    category: "Compras",
    definition:
      "Atacarejo é o modelo de loja que combina venda de atacado e varejo, oferecendo preços menores principalmente em embalagens maiores ou compras por volume. Para famílias brasileiras, pode ser vantajoso em produtos de limpeza, higiene e alimentos não perecíveis, desde que exista planejamento e espaço de armazenamento.",
    exemploPratico:
      "Uma família compra papel higiênico, arroz, feijão, sabão em pó e leite longa vida no atacarejo, mas deixa verduras e carnes frescas para compras menores.",
    exemploItens: ["Embalagens econômicas", "Produtos não perecíveis", "Itens de limpeza", "Comparação por quilo ou litro"],
    porQueImporta:
      "O atacarejo pode reduzir custos, mas também aumenta desperdício se a compra for feita sem lista. O segredo é comprar volume apenas do que a família realmente consome antes do vencimento, mantendo o orçamento sob controle.",
    aprofundamento: {
      texto: "Use a lista mensal para decidir quais itens valem a pena comprar em maior quantidade no atacarejo.",
      linkText: "Abrir Lista Mensal de Compras",
      linkHref: "/lista-mensal",
    },
    relacionados: ["compras-do-mes", "compra-economica", "orcamento-domestico"],
    faq: [{ q: "Atacarejo é bom para quem mora sozinho?", a: "Pode ser, mas apenas para itens de longa validade e consumo certo, como higiene, limpeza e alguns alimentos básicos." }],
  },
  {
    slug: "cardapio-semanal",
    term: "Cardápio Semanal",
    category: "Organização",
    definition:
      "Cardápio semanal é o planejamento das refeições principais ao longo de sete dias, geralmente almoço, jantar e lanches. Ele organiza o que será cozinhado, transforma receitas em lista de compras e reduz a dependência de delivery, improvisos caros e alimentos repetidos sem equilíbrio nutricional.",
    exemploPratico:
      "No domingo, uma família define arroz, feijão, frango, legumes, massa e sopa para a semana, aproveitando sobras planejadas em marmitas.",
    exemploItens: ["Almoço e jantar por dia", "Proteínas alternadas", "Acompanhamentos", "Lista de ingredientes"],
    porQueImporta:
      "Planejar refeições reduz decisões diárias, economiza dinheiro e melhora a alimentação. O cardápio evita comprar ingredientes desconectados entre si e ajuda a usar tudo o que está na geladeira antes de estragar.",
    aprofundamento: {
      texto: "Transforme seu cardápio em uma lista de supermercado semanal prática e organizada por categoria.",
      linkText: "Abrir Lista de Supermercado",
      linkHref: "/lista-supermercado",
    },
    relacionados: ["planejamento-de-cardapio", "lista-de-hortifruti", "marmita-semanal"],
    faq: [{ q: "Preciso seguir o cardápio à risca?", a: "Não. Use como guia flexível e troque refeições entre dias conforme agenda, validade dos alimentos e disposição." }],
  },
  {
    slug: "marmita-semanal",
    term: "Marmita Semanal",
    category: "Organização",
    definition:
      "Marmita semanal é o preparo antecipado de refeições para vários dias, armazenadas em porções individuais na geladeira ou no congelador. A prática ajuda quem trabalha fora, estuda ou quer economizar, mantendo alimentação caseira pronta e reduzindo gastos com restaurantes, lanchonetes e aplicativos de entrega.",
    exemploPratico:
      "Uma pessoa prepara no domingo arroz, feijão, frango desfiado, legumes assados e carne moída, montando cinco marmitas equilibradas para dias úteis.",
    exemploItens: ["Proteína porcionada", "Carboidrato base", "Legumes cozidos", "Potes adequados"],
    porQueImporta:
      "Marmitas bem planejadas economizam dinheiro e tempo durante a semana. Também ajudam a controlar porções, reduzir ultraprocessados e evitar decisões alimentares ruins quando a rotina aperta ou o intervalo de almoço é curto.",
    aprofundamento: {
      texto: "Comece escolhendo alimentos saudáveis e versáteis para montar marmitas equilibradas sem gastar demais.",
      linkText: "Abrir Lista de Compras Saudável",
      linkHref: "/lista-saudavel",
    },
    relacionados: ["cardapio-semanal", "lista-de-compras-saudavel", "planejamento-de-cardapio"],
    faq: [{ q: "Marmita semanal dura quantos dias?", a: "Na geladeira, geralmente até 3 dias. Para a semana inteira, o ideal é congelar parte das porções." }],
  },
  {
    slug: "enxoval-de-cozinha",
    term: "Enxoval de Cozinha",
    category: "Casa Nova",
    definition:
      "Enxoval de cozinha é o conjunto de panelas, louças, talheres, utensílios, panos e acessórios necessários para preparar e servir refeições em uma casa nova. Ele complementa o enxoval de cama, mesa e banho, garantindo que a cozinha funcione desde o primeiro café até o almoço completo.",
    exemploPratico:
      "Um casal compra jogo de panelas, pratos, copos, talheres, assadeiras, potes, panos de prato e utensílios básicos antes de se mudar.",
    exemploItens: ["Panelas e frigideiras", "Pratos, copos e talheres", "Panos e potes", "Utensílios de preparo"],
    porQueImporta:
      "A cozinha é um dos cômodos mais usados da casa e também um dos que mais geram compras esquecidas. Um enxoval planejado evita depender de comida pronta, reduz gastos iniciais e torna a mudança mais confortável.",
    aprofundamento: {
      texto: "Veja a lista completa de cozinha para casa nova com utensílios separados por prioridade.",
      linkText: "Abrir Lista de Casa Nova Cozinha",
      linkHref: "/lista-de-casa-nova-cozinha",
    },
    relacionados: ["kit-cozinha-basica", "enxoval-de-casa", "checklist-de-casa-nova"],
    faq: [{ q: "Qual a diferença entre kit e enxoval de cozinha?", a: "O kit é o mínimo para começar; o enxoval é mais completo e inclui servir, armazenar e organizar a cozinha." }],
  },
  {
    slug: "itens-essenciais-para-casa",
    term: "Itens Essenciais para Casa",
    category: "Casa Nova",
    definition:
      "Itens essenciais para casa são os produtos, móveis e utensílios que tornam uma residência funcional logo nos primeiros dias. Incluem cama, geladeira, fogão, panelas, toalhas, itens de banho e limpeza, priorizando o que resolve necessidades básicas antes de decoração, acessórios e compras menos urgentes.",
    exemploPratico:
      "Quem vai se mudar compra primeiro colchão, roupa de cama, geladeira, fogão, panelas, prato, copo, toalha, vassoura, rodo e produtos de higiene.",
    exemploItens: ["Dormir com conforto", "Cozinhar refeições básicas", "Tomar banho e limpar", "Guardar alimentos"],
    porQueImporta:
      "Começar pelo essencial evita comprometer o orçamento com decoração antes da casa funcionar. Essa priorização diminui estresse na mudança e ajuda a distribuir compras grandes ao longo dos meses sem prejudicar necessidades básicas.",
    aprofundamento: {
      texto: "Use o checklist completo por cômodo para priorizar o essencial e planejar compras futuras.",
      linkText: "Abrir Checklist de Casa Nova",
      linkHref: "/lista-de-casa-nova-completa",
    },
    relacionados: ["checklist-de-casa-nova", "primeira-casa", "lista-para-morar-sozinho"],
    faq: [{ q: "O que comprar primeiro para casa nova?", a: "Priorize cama, geladeira, fogão, itens de banho, cozinha básica e limpeza antes de decoração." }],
  },
  {
    slug: "kit-lavanderia",
    term: "Kit Lavanderia",
    category: "Casa Nova",
    definition:
      "Kit lavanderia é o conjunto de itens para lavar, secar, passar e organizar roupas em casa. Normalmente inclui cesto, prendedores, varal, sabão, amaciante, balde, escova, tábua e ferro, ajudando a área de serviço a funcionar sem improvisos logo após a mudança.",
    exemploPratico:
      "Uma pessoa compra cesto de roupa suja, varal de chão, prendedores, sabão líquido, amaciante, balde, escova e ferro de passar para montar a lavanderia.",
    exemploItens: ["Cesto e balde", "Varal e prendedores", "Sabão e amaciante", "Ferro e tábua"],
    porQueImporta:
      "A lavanderia costuma ser lembrada tarde, mas sem ela a casa acumula roupa e limpeza pendente. Um kit básico evita gastos com lavanderia externa e mantém a rotina doméstica organizada desde a primeira semana.",
    aprofundamento: {
      texto: "Monte a área de serviço completa usando uma lista por cômodo pensada para casa nova.",
      linkText: "Abrir Lista de Área de Serviço",
      linkHref: "/lista-de-casa-nova-area-de-servico",
    },
    relacionados: ["lista-de-produtos-de-limpeza", "checklist-de-casa-nova", "itens-essenciais-para-casa"],
    faq: [{ q: "Preciso comprar máquina de lavar antes da mudança?", a: "Se o orçamento permitir, sim. Caso contrário, organize um kit temporário e planeje a compra como prioridade." }],
  },
  {
    slug: "checklist-de-apartamento-novo",
    term: "Checklist de Apartamento Novo",
    category: "Casa Nova",
    definition:
      "Checklist de apartamento novo é uma lista de conferência para mobiliar, equipar e verificar detalhes do imóvel antes e depois da mudança. Inclui medidas dos cômodos, itens essenciais, instalação de internet, vistoria, segurança e compras por ambiente, evitando decisões erradas em espaços menores.",
    exemploPratico:
      "Antes de comprar sofá e geladeira, o morador mede portas, elevador, cozinha e sala, depois confere tomadas, chuveiro, fechaduras e itens básicos por cômodo.",
    exemploItens: ["Vistoria e medidas", "Móveis compactos", "Itens de cozinha", "Segurança e internet"],
    porQueImporta:
      "Apartamentos exigem cuidado com espaço, circulação e regras do condomínio. Um checklist reduz compras incompatíveis, fretes perdidos e atrasos de instalação, deixando a entrada no imóvel mais rápida e menos estressante.",
    aprofundamento: {
      texto: "Use a lista econômica de casa nova para priorizar itens essenciais em apartamentos menores.",
      linkText: "Abrir Lista de Casa Nova Econômica",
      linkHref: "/lista-de-casa-nova-economica",
    },
    relacionados: ["checklist-de-casa-nova", "itens-essenciais-para-casa", "primeira-casa"],
    faq: [{ q: "O que medir antes de comprar móveis?", a: "Meça portas, elevador, corredores, paredes úteis e áreas de abertura de gavetas, portas e eletrodomésticos." }],
  },
  {
    slug: "primeira-casa",
    term: "Primeira Casa",
    category: "Casa Nova",
    definition:
      "Primeira casa é o momento em que uma pessoa ou família monta um lar próprio pela primeira vez, seja alugado ou comprado. A organização envolve escolher prioridades, comprar itens essenciais, controlar orçamento e evitar a pressão de deixar tudo perfeito antes de a casa estar realmente funcional.",
    exemploPratico:
      "Um casal recém-saído da casa dos pais compra primeiro cama, fogão, geladeira, panelas e limpeza, deixando decoração e móveis extras para os meses seguintes.",
    exemploItens: ["Orçamento inicial", "Essenciais por cômodo", "Compras em etapas", "Reserva para imprevistos"],
    porQueImporta:
      "Montar a primeira casa mistura emoção e ansiedade, o que facilita compras impulsivas. Planejar por prioridade protege o orçamento, evita dívidas e faz o lar ganhar conforto progressivamente, sem comprometer contas fixas.",
    aprofundamento: {
      texto: "Comece com uma lista completa por cômodo para montar sua primeira casa sem esquecer o básico.",
      linkText: "Abrir Lista de Casa Nova",
      linkHref: "/lista-de-casa-nova",
    },
    relacionados: ["checklist-de-casa-nova", "itens-essenciais-para-casa", "lista-para-morar-sozinho"],
    faq: [{ q: "Dá para montar casa nova aos poucos?", a: "Sim. O ideal é comprar primeiro o essencial para dormir, cozinhar, tomar banho e limpar." }],
  },
  {
    slug: "lista-para-morar-sozinho",
    term: "Lista para Morar Sozinho",
    category: "Casa Nova",
    definition:
      "Lista para morar sozinho é o planejamento de móveis, utensílios, alimentos, higiene e limpeza para quem vai assumir uma casa sem dividir todas as decisões com a família. Ela prioriza quantidades menores, itens práticos e compras que reduzem desperdício, facilitando a adaptação à nova rotina.",
    exemploPratico:
      "Um estudante monta a lista com cama, roupa de cama, frigideira, panela, pratos, talheres, alimentos básicos, produtos de limpeza e itens de banheiro.",
    exemploItens: ["Cozinha compacta", "Compra individual", "Limpeza básica", "Organização de rotina"],
    porQueImporta:
      "Morar sozinho exige autonomia e controle de gastos. Uma lista adequada evita comprar em quantidade familiar, reduz desperdício de comida e cria uma base funcional para trabalhar, estudar, cozinhar e descansar com conforto.",
    aprofundamento: {
      texto: "Combine itens de casa nova com uma lista de compras pensada para quem mora sozinho.",
      linkText: "Abrir Lista de Compras para Solteiro",
      linkHref: "/lista-solteiro",
    },
    relacionados: ["primeira-casa", "lista-solteiro", "kit-cozinha-basica"],
    faq: [{ q: "O que comprar de comida para morar sozinho?", a: "Priorize porções menores, alimentos versáteis, congeláveis e itens de preparo rápido para evitar desperdício." }],
  },
  {
    slug: "cronograma-de-casamento",
    term: "Cronograma de Casamento",
    category: "Casamento",
    definition:
      "Cronograma de casamento é a linha do tempo com tarefas, decisões e contratações necessárias antes da cerimônia. Ele distribui responsabilidades por mês, evita acúmulo perto da data e ajuda os noivos a controlar buffet, decoração, documentos, roupas, convites e lua de mel com antecedência.",
    exemploPratico:
      "Com 12 meses de prazo, os noivos definem orçamento e local primeiro; com 6 meses fecham fornecedores; com 30 dias confirmam convidados e detalhes finais.",
    exemploItens: ["12 meses antes", "6 meses antes", "3 meses antes", "Semana do casamento"],
    porQueImporta:
      "Sem cronograma, decisões caras ficam para a última hora e reduzem poder de negociação. Planejar por etapas diminui estresse, melhora contratos e evita esquecer tarefas críticas como documentos, provas de roupa e confirmação de fornecedores.",
    aprofundamento: {
      texto: "Use o checklist completo para acompanhar cada etapa do casamento de forma organizada.",
      linkText: "Abrir Checklist de Casamento Completo",
      linkHref: "/checklist-de-casamento-completo",
    },
    relacionados: ["checklist-de-casamento", "orcamento-de-casamento", "lista-de-fornecedores"],
    faq: [{ q: "Qual o prazo ideal para organizar casamento?", a: "Doze meses é confortável para cerimônias médias; mini weddings podem ser organizados em seis meses com boa prioridade." }],
  },
  {
    slug: "orcamento-de-casamento",
    term: "Orçamento de Casamento",
    category: "Casamento",
    definition:
      "Orçamento de casamento é o planejamento financeiro que define quanto os noivos podem gastar em cada área da cerimônia e festa. Inclui local, buffet, decoração, fotografia, música, roupas, beleza, papelaria e reserva para imprevistos, ajudando a transformar sonhos em escolhas possíveis.",
    exemploPratico:
      "Um casal define teto de R$ 40 mil e distribui percentuais para buffet, espaço, foto, decoração, vestido, música e lua de mel, atualizando a planilha a cada contrato.",
    exemploItens: ["Teto total", "Percentual por categoria", "Pagamentos e vencimentos", "Reserva de emergência"],
    porQueImporta:
      "Casamentos mexem com emoção e pressão social, o que favorece gastos acima do planejado. Um orçamento claro protege a vida financeira do casal e evita começar a nova fase com dívidas desnecessárias.",
    aprofundamento: {
      texto: "Controle fornecedores, prazos e pagamentos com uma lista específica para organizar contratos do casamento.",
      linkText: "Abrir Lista de Fornecedores",
      linkHref: "/lista-de-fornecedores-casamento",
    },
    relacionados: ["cronograma-de-casamento", "lista-de-fornecedores", "checklist-de-casamento"],
    faq: [{ q: "Quanto reservar para imprevistos?", a: "Reserve de 10% a 15% do orçamento para taxas, ajustes, fretes, horas extras e emergências." }],
  },
  {
    slug: "lista-de-presentes-de-casamento",
    term: "Lista de Presentes de Casamento",
    category: "Casamento",
    definition:
      "Lista de presentes de casamento é a seleção organizada de itens que os convidados podem oferecer aos noivos, normalmente focada em casa nova, experiências ou cotas. Ela orienta convidados, evita presentes repetidos e ajuda o casal a montar o lar com produtos realmente úteis.",
    exemploPratico:
      "Os noivos montam uma lista com jogo de panelas, aparelho de jantar, roupa de cama, eletrodomésticos pequenos e cotas para lua de mel.",
    exemploItens: ["Utensílios de cozinha", "Cama, mesa e banho", "Eletroportáteis", "Cotas de viagem"],
    porQueImporta:
      "Uma lista bem pensada reduz trocas, evita duplicidade e transforma presentes em apoio real para a nova fase. Também facilita para convidados escolherem algo adequado ao orçamento e ao estilo do casal.",
    aprofundamento: {
      texto: "Relacione a lista de presentes com o checklist de casa nova para priorizar o que será mais usado.",
      linkText: "Abrir Checklist de Casa Nova",
      linkHref: "/lista-de-casa-nova-completa",
    },
    relacionados: ["enxoval-de-casa", "checklist-de-casa-nova", "checklist-de-casamento"],
    faq: [{ q: "Lista de presentes é obrigatória?", a: "Não, mas ajuda convidados e evita presentes repetidos ou pouco úteis para a rotina dos noivos." }],
  },
  {
    slug: "casamento-civil",
    term: "Casamento Civil",
    category: "Casamento",
    definition:
      "Casamento civil é o ato legal realizado em cartório ou diligência para formalizar a união perante a lei brasileira. Exige documentos, escolha de regime de bens, testemunhas e cumprimento de prazos, sendo essencial mesmo quando o casal também fará cerimônia religiosa ou festa.",
    exemploPratico:
      "O casal reúne RG, CPF, certidão de nascimento atualizada, comprovante de endereço e duas testemunhas, depois agenda a habilitação no cartório.",
    exemploItens: ["Documentos pessoais", "Certidões atualizadas", "Testemunhas", "Regime de bens"],
    porQueImporta:
      "A parte civil define direitos, deveres e efeitos patrimoniais do casamento. Organizar documentos com antecedência evita atrasos na cerimônia, custos extras de segunda via e problemas na escolha do regime de bens.",
    aprofundamento: {
      texto: "Inclua a etapa do cartório no checklist geral para não deixar documentos para a última hora.",
      linkText: "Abrir Checklist de Casamento",
      linkHref: "/lista-de-casamento",
    },
    relacionados: ["cronograma-de-casamento", "checklist-de-casamento", "orcamento-de-casamento"],
    faq: [{ q: "Quanto tempo antes dar entrada no casamento civil?", a: "Em geral, de 30 a 90 dias antes, mas confirme o prazo diretamente no cartório da sua cidade." }],
  },
  {
    slug: "mini-wedding",
    term: "Mini Wedding",
    category: "Casamento",
    definition:
      "Mini wedding é um casamento menor e mais intimista, geralmente com poucos convidados e foco em experiência, afeto e detalhes personalizados. No Brasil, costuma ser escolhido por casais que desejam celebrar com familiares e amigos próximos, controlando melhor orçamento, logística e qualidade dos fornecedores.",
    exemploPratico:
      "Um casal convida 40 pessoas para uma cerimônia em restaurante, com decoração delicada, fotógrafo por poucas horas e almoço especial em vez de festa grande.",
    exemploItens: ["Lista enxuta de convidados", "Local intimista", "Menu especial", "Decoração personalizada"],
    porQueImporta:
      "Reduzir o número de convidados permite investir melhor em comida, fotografia e experiência sem extrapolar tanto o orçamento. Também deixa a celebração mais próxima da personalidade do casal e menos presa a protocolos.",
    aprofundamento: {
      texto: "Comece definindo convidados e orçamento para avaliar se o mini wedding é a melhor opção.",
      linkText: "Abrir Lista de Convidados",
      linkHref: "/lista-de-convidados-casamento",
    },
    relacionados: ["lista-de-convidados", "orcamento-de-casamento", "checklist-de-casamento"],
    faq: [{ q: "Quantos convidados tem um mini wedding?", a: "Não há regra fixa, mas normalmente varia de 20 a 80 convidados, mantendo clima íntimo." }],
  },
  {
    slug: "rsvp-de-casamento",
    term: "RSVP de Casamento",
    category: "Casamento",
    definition:
      "RSVP de casamento é a confirmação de presença dos convidados antes da festa. A sigla vem do francês e, na prática, ajuda os noivos a informar ao buffet, organizar mesas, ajustar lembrancinhas e evitar pagar por pessoas que não comparecerão ao evento.",
    exemploPratico:
      "Trinta dias antes, os noivos enviam link de confirmação por WhatsApp e atualizam a lista com confirmado, não vai, pendente e restrição alimentar.",
    exemploItens: ["Confirmado", "Não comparecerá", "Acompanhante", "Restrição alimentar"],
    porQueImporta:
      "Cada ausência não controlada pode significar dinheiro desperdiçado em buffet e estrutura. O RSVP também melhora a experiência dos convidados, pois permite organizar mesas, alimentação especial e comunicação final com mais precisão.",
    aprofundamento: {
      texto: "Use a lista de convidados para controlar confirmações, acompanhantes e restrições alimentares.",
      linkText: "Abrir Lista de Convidados",
      linkHref: "/lista-de-convidados-casamento",
    },
    relacionados: ["lista-de-convidados", "mini-wedding", "checklist-de-casamento"],
    faq: [{ q: "Quando pedir RSVP?", a: "O ideal é solicitar confirmação entre 30 e 45 dias antes do casamento." }],
  },
  {
    slug: "volta-as-aulas",
    term: "Volta às Aulas",
    category: "Material Escolar",
    definition:
      "Volta às aulas é o período de preparação para o início do ano letivo, envolvendo compra de material escolar, ajuste de rotina, uniformes, transporte, mochila e organização emocional das crianças. Para famílias brasileiras, costuma exigir planejamento financeiro em janeiro e fevereiro, quando outros gastos também aparecem.",
    exemploPratico:
      "Os pais conferem a lista oficial da escola, reaproveitam materiais do ano anterior, etiquetam itens, ajustam horário de sono e organizam lancheira e mochila.",
    exemploItens: ["Material escolar", "Uniforme e mochila", "Rotina de sono", "Lancheira e transporte"],
    porQueImporta:
      "Preparar a volta às aulas com antecedência reduz correria em papelarias, melhora preços e ajuda a criança a retornar à rotina com menos ansiedade. Também evita compras duplicadas e materiais inadequados para a série.",
    aprofundamento: {
      texto: "Escolha a lista de material escolar 2026 por série e organize a volta às aulas com economia.",
      linkText: "Abrir Material Escolar 2026",
      linkHref: "/lista-de-material-escolar-2026",
    },
    relacionados: ["material-escolar-2026", "lista-de-material-escolar", "organizacao-de-mochila"],
    faq: [{ q: "Quando comprar material escolar?", a: "Compre após receber a lista oficial, mas pesquise preços com antecedência e reaproveite itens em bom estado." }],
  },
  {
    slug: "material-escolar-educacao-infantil",
    term: "Material Escolar Educação Infantil",
    category: "Material Escolar",
    definition:
      "Material escolar para educação infantil é o conjunto de itens seguros, lúdicos e adequados a crianças pequenas, geralmente de creche e pré-escola. Prioriza materiais atóxicos, lápis grossos, papéis, tintas, massinha, agenda, troca de roupa e objetos de higiene alinhados à rotina escolar.",
    exemploPratico:
      "Uma escola pede mochila pequena, agenda, copo, toalhinha, muda de roupa, giz de cera grosso, cola branca, tinta guache atóxica e massa de modelar.",
    exemploItens: ["Itens atóxicos", "Troca de roupa", "Agenda e copo", "Materiais de arte"],
    porQueImporta:
      "Nessa fase, segurança e desenvolvimento motor valem mais que quantidade. Materiais adequados evitam riscos, facilitam atividades sensoriais e ajudam pais a comprar somente o que a escola realmente pode solicitar.",
    aprofundamento: {
      texto: "Veja a lista específica para educação infantil com itens seguros e organizados por prioridade.",
      linkText: "Abrir Lista Educação Infantil",
      linkHref: "/lista-de-material-escolar-educacao-infantil",
    },
    relacionados: ["volta-as-aulas", "kit-alfabetizacao", "lista-de-material-escolar"],
    faq: [{ q: "Educação infantil precisa de muitos cadernos?", a: "Normalmente não. A prioridade costuma ser materiais de arte, higiene, agenda e itens de rotina." }],
  },
  {
    slug: "material-escolar-ensino-fundamental",
    term: "Material Escolar Ensino Fundamental",
    category: "Material Escolar",
    definition:
      "Material escolar do ensino fundamental reúne itens usados do 1º ao 9º ano, com mudanças importantes conforme a série. Começa com alfabetização, lápis e cadernos simples, depois evolui para disciplinas separadas, geometria, pesquisas, calculadora e organização mais autônoma dos estudos.",
    exemploPratico:
      "No 1º ano entram materiais de alfabetização; no 6º ano surgem mais cadernos por disciplina; no 9º ano aparecem simulados e organização para provas.",
    exemploItens: ["Cadernos por série", "Estojo completo", "Materiais de geometria", "Organização por disciplina"],
    porQueImporta:
      "Comprar material sem considerar a etapa escolar gera excesso ou falta. Uma lista por série ajuda pais a economizar, prepara o estudante para novas exigências e evita carregar peso desnecessário na mochila.",
    aprofundamento: {
      texto: "Escolha a série correta e baixe uma lista ajustada para cada fase do ensino fundamental.",
      linkText: "Ver Listas por Série",
      linkHref: "/lista-de-material-escolar",
    },
    relacionados: ["lista-de-material-escolar", "organizacao-de-mochila", "volta-as-aulas"],
    faq: [{ q: "A lista muda muito entre as séries?", a: "Sim. Os primeiros anos exigem alfabetização; os anos finais exigem mais organização por disciplina." }],
  },
  {
    slug: "etiqueta-de-material-escolar",
    term: "Etiqueta de Material Escolar",
    category: "Material Escolar",
    definition:
      "Etiqueta de material escolar é a identificação com nome, turma e contato colocada em cadernos, livros, uniforme, garrafa, lancheira e objetos pessoais. Ela reduz perdas, facilita devolução de itens encontrados e ajuda escolas e famílias a manterem os materiais das crianças organizados.",
    exemploPratico:
      "Antes do primeiro dia de aula, os pais etiquetam mochila, estojo, lápis, cadernos, livros, casaco, garrafa e potes da lancheira.",
    exemploItens: ["Nome completo", "Turma", "Telefone dos responsáveis", "Etiqueta resistente"],
    porQueImporta:
      "Materiais escolares se misturam facilmente, principalmente na educação infantil e nos primeiros anos. Etiquetar evita prejuízo, economiza tempo da escola e ensina a criança a reconhecer e cuidar dos próprios pertences.",
    aprofundamento: {
      texto: "Depois de comprar os itens, organize mochila e etiquetas para evitar perdas já na primeira semana.",
      linkText: "Ver Organização de Mochila",
      linkHref: "/glossario/o-que-e-organizacao-de-mochila",
    },
    relacionados: ["organizacao-de-mochila", "volta-as-aulas", "lista-de-material-escolar"],
    faq: [{ q: "O que deve ser etiquetado?", a: "Tudo que pode ser trocado ou perdido: mochila, uniforme, garrafa, lancheira, livros, cadernos e estojo." }],
  },
  {
    slug: "mochila-escolar",
    term: "Mochila Escolar",
    category: "Material Escolar",
    definition:
      "Mochila escolar é o item usado para transportar cadernos, livros, estojo, lancheira e objetos pessoais entre casa e escola. A escolha ideal considera tamanho da criança, peso, alças acolchoadas, compartimentos e resistência, evitando desconforto e ajudando na organização diária dos materiais.",
    exemploPratico:
      "Para uma criança do fundamental, os pais escolhem mochila leve, com duas alças, costas acolchoadas, bolsos laterais e tamanho proporcional ao corpo.",
    exemploItens: ["Alças acolchoadas", "Tamanho proporcional", "Compartimentos", "Material resistente"],
    porQueImporta:
      "Uma mochila inadequada aumenta peso nas costas e dificulta encontrar materiais durante a aula. Escolher e organizar bem protege a postura, reduz esquecimentos e prolonga a vida útil do material escolar.",
    aprofundamento: {
      texto: "Aprenda a distribuir livros e cadernos corretamente para deixar a mochila mais leve e funcional.",
      linkText: "Ver Organização de Mochila",
      linkHref: "/glossario/o-que-e-organizacao-de-mochila",
    },
    relacionados: ["organizacao-de-mochila", "etiqueta-de-material-escolar", "material-escolar-ensino-fundamental"],
    faq: [{ q: "Mochila de rodinha é sempre melhor?", a: "Não sempre. Ela ajuda com peso, mas pode ser ruim em escadas e calçadas irregulares." }],
  },
  {
    slug: "lista-de-papelaria",
    term: "Lista de Papelaria",
    category: "Material Escolar",
    definition:
      "Lista de papelaria é a relação de itens como papel, canetas, lápis, cola, tesoura, pastas, cadernos, envelopes e materiais de escritório ou escola. Ela pode servir para estudantes, professores, home office e famílias que desejam manter um pequeno estoque organizado para tarefas e estudos.",
    exemploPratico:
      "Uma casa mantém lápis, canetas, borracha, cola, tesoura sem ponta, folhas sulfite, pasta, clips, fita adesiva e caderno reserva para emergências escolares.",
    exemploItens: ["Canetas e lápis", "Papéis e cadernos", "Cola e tesoura", "Pastas e etiquetas"],
    porQueImporta:
      "Itens de papelaria são baratos, mas a falta deles atrasa tarefas, trabalhos escolares e documentos. Uma lista enxuta evita compras emergenciais caras e mantém a rotina de estudo e escritório mais fluida.",
    aprofundamento: {
      texto: "Compare a lista de papelaria com a lista oficial de material escolar antes de comprar itens repetidos.",
      linkText: "Abrir Lista de Material Escolar",
      linkHref: "/lista-de-material-escolar",
    },
    relacionados: ["lista-de-material-escolar", "volta-as-aulas", "etiqueta-de-material-escolar"],
    faq: [{ q: "Lista de papelaria é só para escola?", a: "Não. Também é útil para home office, organização de documentos e tarefas domésticas." }],
  },
  {
    slug: "organizacao-domestica",
    term: "Organização Doméstica",
    category: "Organização",
    definition:
      "Organização doméstica é o conjunto de rotinas, listas e métodos usados para manter a casa funcional, limpa e fácil de administrar. Envolve compras, limpeza, lavanderia, documentos, cardápio e divisão de tarefas, reduzindo bagunça acumulada e a sensação de que a casa nunca fica em ordem.",
    exemploPratico:
      "Uma família cria rotina semanal com dia de mercado, lavagem de roupas, limpeza dos banheiros, revisão da geladeira e planejamento do cardápio.",
    exemploItens: ["Rotina de limpeza", "Lista de compras", "Divisão de tarefas", "Controle de documentos"],
    porQueImporta:
      "Casa organizada economiza tempo, reduz conflitos familiares e melhora o bem-estar. Quando as tarefas deixam de depender da memória de uma pessoa, a rotina fica mais justa, previsível e sustentável.",
    aprofundamento: {
      texto: "Comece por uma lista de tarefas e compras para transformar organização doméstica em rotina simples.",
      linkText: "Criar Minha Lista Personalizada",
      linkHref: "/criar-lista",
    },
    relacionados: ["rotina-da-casa", "lista-de-tarefas-domesticas", "checklist"],
    faq: [{ q: "Como organizar a casa sem gastar muito?", a: "Comece por descarte, rotina, etiquetas simples e listas. Organizadores caros só devem vir depois." }],
  },
  {
    slug: "rotina-da-casa",
    term: "Rotina da Casa",
    category: "Organização",
    definition:
      "Rotina da casa é a distribuição previsível de tarefas domésticas ao longo da semana, como lavar roupa, limpar banheiro, cozinhar, fazer compras e organizar ambientes. Ela evita acúmulos, torna responsabilidades visíveis e ajuda todos os moradores a participarem da manutenção do lar.",
    exemploPratico:
      "Segunda fica para roupa, quarta para banheiro, sexta para mercado e domingo para cardápio, com tarefas pequenas distribuídas entre os moradores.",
    exemploItens: ["Tarefas diárias", "Tarefas semanais", "Responsáveis", "Horários realistas"],
    porQueImporta:
      "Sem rotina, a casa depende de mutirões cansativos e decisões de última hora. Uma divisão simples reduz sobrecarga mental, melhora convivência e mantém limpeza e compras em dia sem ocupar o fim de semana inteiro.",
    aprofundamento: {
      texto: "Monte uma lista personalizada com as tarefas fixas da sua casa e acompanhe tudo em um só lugar.",
      linkText: "Criar Lista Personalizada",
      linkHref: "/criar-lista",
    },
    relacionados: ["organizacao-domestica", "lista-de-tarefas-domesticas", "planner-semanal"],
    faq: [{ q: "Rotina da casa precisa ser diária?", a: "Algumas tarefas são diárias, mas limpeza pesada e compras podem ser semanais ou quinzenais." }],
  },
  {
    slug: "checklist-de-viagem",
    term: "Checklist de Viagem",
    category: "Organização",
    definition:
      "Checklist de viagem é a lista de documentos, roupas, reservas, remédios, eletrônicos e tarefas antes de sair de casa. Ele ajuda a evitar esquecimentos como carregador, documento, seguro, itens infantis ou cuidados com gás e janelas, tornando a viagem mais segura e tranquila.",
    exemploPratico:
      "Antes de viajar, uma família confere documentos, passagens, hospedagem, roupas por clima, kit farmácia, carregadores, casa trancada e lixo retirado.",
    exemploItens: ["Documentos e reservas", "Roupas por clima", "Kit farmácia", "Casa segura antes de sair"],
    porQueImporta:
      "Esquecimentos em viagem custam caro e geram estresse. Um checklist reduz compras emergenciais, evita perder voos ou passeios e garante que a casa fique protegida enquanto todos estão fora.",
    aprofundamento: {
      texto: "Crie uma lista personalizada para viagem com itens do destino, duração e perfil da família.",
      linkText: "Criar Lista de Viagem",
      linkHref: "/criar-lista",
    },
    relacionados: ["checklist", "checklist-lua-de-mel", "to-do-list"],
    faq: [{ q: "Quando fazer checklist de viagem?", a: "Comece uma semana antes e finalize no dia anterior, deixando apenas conferências rápidas para a saída." }],
  },
  {
    slug: "lista-de-tarefas-domesticas",
    term: "Lista de Tarefas Domésticas",
    category: "Organização",
    definition:
      "Lista de tarefas domésticas é a organização das atividades necessárias para manter a casa limpa e funcional, como lavar louça, tirar lixo, varrer, limpar banheiro, trocar roupa de cama e organizar compras. Pode ser dividida por frequência, ambiente e responsável.",
    exemploPratico:
      "Um casal divide tarefas em diárias, semanais e mensais, alternando banheiro, cozinha, roupa, mercado e organização da geladeira.",
    exemploItens: ["Diárias", "Semanais", "Mensais", "Responsável por tarefa"],
    porQueImporta:
      "Quando as tarefas ficam invisíveis, uma pessoa costuma carregar a maior parte da rotina. Listar e dividir atividades reduz conflitos, torna o trabalho doméstico mensurável e impede que a casa chegue ao ponto de caos.",
    aprofundamento: {
      texto: "Use o criador de listas para montar uma rotina doméstica adaptada à sua casa.",
      linkText: "Criar Lista de Tarefas",
      linkHref: "/criar-lista",
    },
    relacionados: ["rotina-da-casa", "organizacao-domestica", "planner-semanal"],
    faq: [{ q: "Como dividir tarefas domésticas?", a: "Liste tudo, estime frequência e distribua por disponibilidade, não apenas por preferência." }],
  },
  {
    slug: "metodo-kanban-pessoal",
    term: "Método Kanban Pessoal",
    category: "Produtividade",
    definition:
      "Método Kanban pessoal é uma forma visual de organizar tarefas em colunas como a fazer, em andamento e concluído. Adaptado do trabalho industrial e ágil, ele ajuda pessoas a enxergar prioridades, limitar tarefas simultâneas e transformar pendências soltas em fluxo claro de execução.",
    exemploPratico:
      "Uma pessoa usa três colunas no quadro: tarefas da semana, tarefas em andamento e concluídas, movendo cartões conforme avança.",
    exemploItens: ["A fazer", "Em andamento", "Concluído", "Limite de tarefas abertas"],
    porQueImporta:
      "Visualizar tarefas reduz sobrecarga mental e evita começar muitas coisas ao mesmo tempo. O Kanban pessoal é simples, adaptável e funciona tanto para estudos quanto para casa, trabalho e projetos pessoais.",
    aprofundamento: {
      texto: "Combine Kanban com uma to-do list diária para executar prioridades sem perder visão do todo.",
      linkText: "Ver To-Do List",
      linkHref: "/glossario/o-que-e-to-do-list",
    },
    relacionados: ["to-do-list", "planner-semanal", "gestao-do-tempo"],
    faq: [{ q: "Kanban pessoal precisa de aplicativo?", a: "Não. Pode ser feito com papel, quadro branco, post-its ou ferramenta digital." }],
  },
  {
    slug: "matriz-de-prioridade",
    term: "Matriz de Prioridade",
    category: "Produtividade",
    definition:
      "Matriz de prioridade é uma ferramenta para decidir o que fazer primeiro, cruzando critérios como urgência, importância, impacto e esforço. Ela ajuda a sair da lista infinita de tarefas e escolher ações que realmente movem a rotina, o trabalho ou a organização da casa para frente.",
    exemploPratico:
      "Uma pessoa separa tarefas em urgente e importante, importante mas não urgente, urgente mas delegável e atividades que podem ser eliminadas.",
    exemploItens: ["Urgente", "Importante", "Delegável", "Pode esperar"],
    porQueImporta:
      "Nem toda tarefa merece a mesma energia. Priorizar corretamente reduz procrastinação, evita apagar incêndios o dia inteiro e ajuda a proteger tempo para tarefas estratégicas, saúde, família e descanso.",
    aprofundamento: {
      texto: "Use a gestão do tempo para transformar prioridades em blocos reais na agenda da semana.",
      linkText: "Ver Gestão do Tempo",
      linkHref: "/glossario/o-que-e-gestao-do-tempo",
    },
    relacionados: ["gestao-do-tempo", "planner-semanal", "to-do-list"],
    faq: [{ q: "Qual matriz de prioridade usar primeiro?", a: "Comece pela matriz urgente/importante, porque é simples e funciona para rotina pessoal e profissional." }],
  },
  {
    slug: "organizacao-financeira",
    term: "Organização Financeira",
    category: "Organização",
    definition:
      "Organização financeira é o hábito de registrar ganhos, gastos, dívidas, metas e reservas para tomar melhores decisões com dinheiro. No contexto doméstico, envolve controlar supermercado, contas fixas, compras parceladas e emergências, criando clareza para economizar sem perder qualidade de vida.",
    exemploPratico:
      "Uma família anota renda, aluguel, energia, mercado, transporte, escola, lazer e parcelas, depois define limite para compras e meta de reserva mensal.",
    exemploItens: ["Receitas", "Despesas fixas", "Despesas variáveis", "Metas e reserva"],
    porQueImporta:
      "Sem organização financeira, decisões pequenas viram dívidas grandes. Registrar gastos mostra vazamentos de dinheiro, reduz compras por impulso e permite planejar objetivos como material escolar, casamento, mudança ou compra da casa.",
    aprofundamento: {
      texto: "Comece pelo orçamento doméstico e reduza uma das maiores despesas mensais: o supermercado.",
      linkText: "Abrir Lista Mensal de Compras",
      linkHref: "/lista-mensal",
    },
    relacionados: ["orcamento-domestico", "compra-economica", "compras-do-mes"],
    faq: [{ q: "Como organizar finanças começando do zero?", a: "Registre todos os gastos por 30 dias, separe por categoria e defina limites realistas para o mês seguinte." }],
  },
  {
    slug: "inventario-domestico",
    term: "Inventário Doméstico",
    category: "Organização",
    definition:
      "Inventário doméstico é a lista de bens, eletrodomésticos, móveis, documentos e itens importantes que existem em uma casa. Ele ajuda em mudanças, seguros, manutenção, organização de garantia e controle patrimonial, especialmente quando a família está montando casa nova ou reorganizando ambientes.",
    exemploPratico:
      "Uma pessoa registra geladeira, fogão, televisão, notebook, móveis, notas fiscais, número de série e garantia em uma planilha simples.",
    exemploItens: ["Nome do item", "Valor aproximado", "Nota fiscal", "Garantia e localização"],
    porQueImporta:
      "Ter inventário facilita acionar seguro, planejar manutenção, vender itens usados e evitar compras duplicadas. Em mudanças, também ajuda a conferir se tudo chegou corretamente ao novo endereço.",
    aprofundamento: {
      texto: "Ao mudar de casa, combine inventário com checklist por cômodo para controlar compras e transporte.",
      linkText: "Abrir Checklist de Casa Nova",
      linkHref: "/lista-de-casa-nova-completa",
    },
    relacionados: ["lista-de-mudanca", "checklist-de-casa-nova", "organizacao-domestica"],
    faq: [{ q: "Inventário doméstico precisa ser detalhado?", a: "Para itens caros, sim. Registre valor, nota fiscal, garantia, fotos e localização." }],
  },
];

export const glossary: GlossaryTerm[] = [...baseGlossary, ...extraGlossary];

export const glossaryBySlug = Object.fromEntries(
  glossary.map((t) => [t.slug, t] as const),
);

export function groupByLetter(): Record<string, GlossaryTerm[]> {
  const map: Record<string, GlossaryTerm[]> = {};
  for (const t of glossary) {
    const letter = t.term
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .charAt(0)
      .toUpperCase();
    (map[letter] ||= []).push(t);
  }
  Object.values(map).forEach((arr) => arr.sort((a, b) => a.term.localeCompare(b.term, "pt-BR")));
  return map;
}

export const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
