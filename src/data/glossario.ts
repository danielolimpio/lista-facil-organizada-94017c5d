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
  {
    slug: "lista-de-compras-para-churrasco",
    term: "Lista de Compras para Churrasco",
    category: "Compras",
    definition:
      "Lista de compras para churrasco é o planejamento completo de carnes, acompanhamentos, bebidas, carvão e utensílios descartáveis calculados por número de convidados. Ela evita a compra excessiva, garante variedade de proteínas e assegura que nenhum item essencial — como sal grosso, guardanapos ou gelo — seja esquecido no dia do evento.",
    exemploPratico:
      "Para 10 pessoas, calcule cerca de 400g de carne por adulto, 1 saco de carvão de 3kg, 5 litros de refrigerante, 12 cervejas e itens de guarnição para acompanhar.",
    exemploItens: ["Picanha, linguiça, coração e frango", "Pão de alho, farofa, vinagrete, arroz", "Cerveja, refrigerante, água, gelo", "Carvão, acendedor, sal grosso, guardanapos"],
    porQueImporta:
      "Sem cálculo por convidado, é comum sobrar carne cara ou faltar bebida no meio do churrasco. Uma lista bem dimensionada economiza até 30% no orçamento do evento e evita idas de última hora ao mercado, que acabam custando o dobro por item.",
    aprofundamento: {
      texto: "Adapte a base da lista de supermercado para incluir os itens de churrasco e monte a compra em uma só ida ao mercado.",
      linkText: "Abrir Lista de Supermercado",
      linkHref: "/lista-supermercado",
    },
    relacionados: ["lista-de-supermercado", "compra-economica", "atacarejo"],
    faq: [{ q: "Quanto de carne por pessoa no churrasco?", a: "400g de carne por adulto e 200g por criança é uma média segura, considerando acompanhamentos." }],
  },
  {
    slug: "lista-de-compras-para-festa-infantil",
    term: "Lista de Compras para Festa Infantil",
    category: "Compras",
    definition:
      "Lista de compras para festa infantil reúne salgados, doces, bolo, bebidas, descartáveis temáticos e itens de decoração dimensionados por número de convidados. Ajuda a controlar orçamento, evitar sobras exageradas e garantir que a festa tenha comida, brinquedos e lembrancinhas suficientes sem estouros de última hora.",
    exemploPratico:
      "Para 20 crianças, calcule 10 salgados por convidado, 5 doces, 300ml de refrigerante por criança e 1 lembrancinha por convidado, além de descartáveis no tema escolhido.",
    exemploItens: ["Salgados variados e brigadeiros", "Bolo, refrigerante, suco de caixinha", "Pratos, copos, guardanapos temáticos", "Balões, painel, lembrancinhas"],
    porQueImporta:
      "Festas infantis mal planejadas podem custar 40% a mais por causa de compras emergenciais e descartáveis duplicados. Uma lista organizada por categoria (comida, bebida, decoração, lembrancinhas) ajuda a comparar orçamentos, negociar em atacarejos e evitar excesso de doces que sobra e estraga.",
    aprofundamento: {
      texto: "Complemente com a lista de supermercado para não esquecer itens de base como gelo, guardanapos e refrigerante.",
      linkText: "Ver Lista de Supermercado",
      linkHref: "/lista-supermercado",
    },
    relacionados: ["lista-de-supermercado", "compra-economica", "atacarejo"],
    faq: [{ q: "Quantos salgados por criança em festa infantil?", a: "De 8 a 10 salgados por criança e 4 a 5 doces é a média usada por buffets." }],
  },
  {
    slug: "lista-de-compras-para-cafe-da-manha",
    term: "Lista de Compras para Café da Manhã",
    category: "Compras",
    definition:
      "Lista de compras para café da manhã é o conjunto de pães, laticínios, frutas, cereais e bebidas quentes que abastecem a primeira refeição da casa por uma semana ou um mês. Facilita a rotina matinal, evita esquecer itens frescos e ajuda a equilibrar variedade, custo e valor nutricional da família.",
    exemploPratico:
      "Uma família de 4 pessoas planeja 2 pães franceses por pessoa/dia, 1 litro de leite, café, frutas da estação, requeijão, queijo, presunto e granola para variar durante a semana.",
    exemploItens: ["Pão, tapioca, cuscuz, ovos", "Leite, café, achocolatado, iogurte", "Frutas: banana, maçã, mamão", "Queijo, presunto, requeijão, geleia"],
    porQueImporta:
      "Comprar café da manhã pronto na padaria custa 3 a 5 vezes mais que preparar em casa. Uma lista semanal reduz esse gasto, garante variedade e evita a rotina de comer sempre o mesmo por falta de planejamento — problema comum em casas com rotina corrida.",
    aprofundamento: {
      texto: "Combine com o planejamento de cardápio semanal para otimizar todas as refeições da casa.",
      linkText: "Abrir Lista de Supermercado",
      linkHref: "/lista-supermercado",
    },
    relacionados: ["planejamento-de-cardapio", "cardapio-semanal", "lista-de-compras-semanal"],
    faq: [{ q: "Quanto de leite comprar por semana para 4 pessoas?", a: "Cerca de 5 a 7 litros, considerando café, achocolatado, mingau e receitas." }],
  },
  {
    slug: "lista-de-compras-fitness",
    term: "Lista de Compras Fitness",
    category: "Compras",
    definition:
      "Lista de compras fitness reúne alimentos ricos em proteína, carboidratos complexos, gorduras boas e vegetais frescos, planejados para uma rotina de treinos e dieta com controle de macronutrientes. Ela ajuda a manter foco no objetivo — hipertrofia, emagrecimento ou definição — sem cair em compras impulsivas de industrializados.",
    exemploPratico:
      "Uma pessoa em fase de hipertrofia compra 2kg de peito de frango, 12 ovos, 1kg de patinho, aveia, batata-doce, brócolis, folhas verdes e whey protein para a semana.",
    exemploItens: ["Peito de frango, patinho, ovos, atum", "Arroz integral, batata-doce, aveia", "Brócolis, espinafre, tomate, pepino", "Azeite, castanhas, whey, pasta de amendoim"],
    porQueImporta:
      "Comer bem para treinar exige planejamento. Sem lista, é comum apelar para marmita congelada industrializada ou fast food, quebrando a dieta e desperdiçando o esforço na academia. Uma compra fitness bem feita custa menos que restaurantes e mantém o resultado dos treinos.",
    aprofundamento: {
      texto: "Combine com a lista saudável para ter uma alimentação equilibrada dentro e fora dos treinos.",
      linkText: "Ver Lista de Compras Saudável",
      linkHref: "/lista-saudavel",
    },
    relacionados: ["lista-de-compras-saudavel", "marmita-semanal", "cardapio-semanal"],
    faq: [{ q: "Quanto de proteína comprar por semana para dieta fitness?", a: "Em média, 1,6 a 2,2g por kg corporal por dia — planeje frango, ovos, carne e ovos como base." }],
  },
  {
    slug: "lista-de-compras-vegetariana",
    term: "Lista de Compras Vegetariana",
    category: "Compras",
    definition:
      "Lista de compras vegetariana reúne leguminosas, cereais integrais, vegetais, frutas, ovos, laticínios e substitutos de proteína animal, garantindo equilíbrio nutricional em uma alimentação sem carne. Ela evita a armadilha de dietas restritivas e mal planejadas, comuns em quem inicia a transição sem uma base semanal organizada.",
    exemploPratico:
      "Uma pessoa vegetariana monta a semana com feijão preto, lentilha, grão-de-bico, arroz integral, quinoa, ovos, tofu, legumes variados e frutas para lanches.",
    exemploItens: ["Feijão, lentilha, grão-de-bico, ervilha", "Arroz integral, quinoa, aveia, pão integral", "Tofu, ovos, queijos, iogurte natural", "Verduras, legumes, frutas, castanhas"],
    porQueImporta:
      "Sem planejamento, dietas vegetarianas ficam repetitivas e pobres em ferro e vitamina B12. Uma lista variada equilibra proteína vegetal, ferro, cálcio e ômega-3, reduzindo desperdício de folhas frescas e otimizando o custo da feira e do mercado.",
    aprofundamento: {
      texto: "Use como base a lista saudável e adapte proteínas animais por leguminosas e ovos.",
      linkText: "Ver Lista de Compras Saudável",
      linkHref: "/lista-saudavel",
    },
    relacionados: ["lista-de-compras-saudavel", "cardapio-semanal", "planejamento-de-cardapio"],
    faq: [{ q: "É mais caro comer vegetariano?", a: "Não. Leguminosas custam muito menos que carne por porção de proteína — o segredo é planejar." }],
  },
  {
    slug: "lista-de-compras-para-bebe",
    term: "Lista de Compras para Bebê",
    category: "Compras",
    definition:
      "Lista de compras para bebê inclui fraldas, lenços umedecidos, papinhas, fórmulas, produtos de higiene e vestuário, calculados por faixa etária e consumo médio mensal. Ela evita compras emergenciais em farmácias caras e ajuda pais de primeira viagem a controlar um dos itens de maior peso no orçamento familiar.",
    exemploPratico:
      "Uma mãe de bebê de 6 meses lista 6 pacotes de fraldas M, 3 pacotes de lenços umedecidos, papinhas de frutas e legumes, shampoo infantil e um jogo básico de bodies para o mês.",
    exemploItens: ["Fraldas descartáveis e lenços umedecidos", "Papinhas, fórmulas, cereais infantis", "Sabonete líquido, shampoo, pomada de assadura", "Bodies, meias, macacões"],
    porQueImporta:
      "Fraldas e higiene infantil consomem entre 15% e 25% do orçamento de uma família com bebê. Comprar em atacarejo com lista organizada pode reduzir esse gasto em até 30% comparado à compra pulverizada em farmácias e mercados de bairro.",
    aprofundamento: {
      texto: "Combine com o kit lavanderia e a lista de higiene pessoal para cobrir toda a rotina de cuidados da casa.",
      linkText: "Ver Lista de Supermercado",
      linkHref: "/lista-supermercado",
    },
    relacionados: ["lista-de-higiene-pessoal", "kit-lavanderia", "compra-economica"],
    faq: [{ q: "Quantas fraldas por mês um bebê usa?", a: "Recém-nascido: 240 a 300 por mês; entre 6 e 12 meses: 150 a 180 por mês em média." }],
  },
  {
    slug: "lista-de-compras-baixo-custo",
    term: "Lista de Compras de Baixo Custo",
    category: "Compras",
    definition:
      "Lista de compras de baixo custo é o planejamento de mercado focado em alimentos básicos, marcas próprias e itens em promoção, sem sacrificar variedade e nutrição. Ela é ideal para famílias que precisam ajustar o orçamento sem passar aperto, priorizando arroz, feijão, ovos, frango e vegetais da estação.",
    exemploPratico:
      "Uma família de 4 pessoas monta a semana com arroz, feijão, ovos, frango, ovos, macarrão, molho de tomate, banana, cenoura e repolho, mantendo custo semanal reduzido.",
    exemploItens: ["Arroz, feijão, macarrão, óleo", "Ovos, frango, carne moída de segunda", "Banana, laranja, cenoura, repolho", "Sabão em pó, sabonete, papel higiênico"],
    porQueImporta:
      "Comprar sem lista e sem foco em preço faz o mesmo carrinho custar de 30% a 50% a mais. Escolher marca própria de itens básicos, comprar hortifruti da estação e evitar industrializados pode manter uma família bem alimentada gastando muito menos por mês.",
    aprofundamento: {
      texto: "Aplique as estratégias de compra econômica e considere ir ao atacarejo para itens de reposição.",
      linkText: "Ver Lista de Supermercado",
      linkHref: "/lista-supermercado",
    },
    relacionados: ["compra-economica", "atacarejo", "lista-mensal-de-compras"],
    faq: [{ q: "Marca própria vale a pena?", a: "Na maioria dos itens básicos como arroz, feijão, papel higiênico e limpeza, sim — mesma qualidade por até 40% menos." }],
  },
  {
    slug: "lista-de-compras-low-carb",
    term: "Lista de Compras Low Carb",
    category: "Compras",
    definition:
      "Lista de compras low carb reúne proteínas, gorduras boas, vegetais folhosos e alimentos com baixo teor de carboidratos, evitando pães, massas, açúcar e cereais refinados. É a base para quem segue dietas de emagrecimento, controle glicêmico ou estilo de vida com menos açúcar e mais saciedade.",
    exemploPratico:
      "Uma pessoa em dieta low carb monta a semana com ovos, frango, carne bovina, salmão, brócolis, couve-flor, abacate, azeite, queijos e castanhas.",
    exemploItens: ["Ovos, frango, carnes, peixes", "Brócolis, couve-flor, espinafre, tomate", "Abacate, azeite, castanhas, coco", "Queijos, iogurte natural, manteiga"],
    porQueImporta:
      "Dietas low carb bem feitas exigem planejamento — sem lista, é comum apelar para industrializados 'zero' caros e cheios de aditivos. Uma compra bem estruturada mantém a dieta consistente, reduz gasto com produtos ultraprocessados e evita recaídas por falta de opção rápida.",
    aprofundamento: {
      texto: "Complemente com o cardápio semanal para variar as refeições sem sair do plano alimentar.",
      linkText: "Ver Lista de Compras Saudável",
      linkHref: "/lista-saudavel",
    },
    relacionados: ["lista-de-compras-saudavel", "cardapio-semanal", "marmita-semanal"],
    faq: [{ q: "Frutas entram na lista low carb?", a: "Sim, com moderação — priorize frutas vermelhas, abacate e coco, que têm menos carboidrato." }],
  },
  {
    slug: "desperdicio-de-alimentos",
    term: "Desperdício de Alimentos",
    category: "Compras",
    definition:
      "Desperdício de alimentos é a perda de comida comprada que é descartada antes do consumo, seja por vencimento, mau armazenamento ou compras em excesso. No Brasil, cerca de 30% dos alimentos comprados são jogados fora — evitá-lo é um dos maiores impactos de uma lista bem planejada no orçamento da casa.",
    exemploPratico:
      "Uma família revisa a geladeira antes de fazer a lista, planeja receitas com o que já tem e compra apenas o que falta, aproveitando cascas, talos e sobras em novas preparações.",
    exemploItens: ["Checar validade antes de comprar", "Congelar carnes e pães em porções", "Aproveitar sobras em omeletes, sopas e patês", "Priorizar hortifruti fresco em quantidade certa"],
    porQueImporta:
      "Reduzir o desperdício em 50% pode devolver o equivalente a uma semana inteira de compras por mês ao orçamento. Além do impacto financeiro, evitar o descarte reduz consumo de água, energia e produção de resíduos orgânicos em casa.",
    aprofundamento: {
      texto: "Combine com o planejamento de cardápio e a despensa organizada para eliminar quase todo o desperdício.",
      linkText: "Ver Lista de Supermercado",
      linkHref: "/lista-supermercado",
    },
    relacionados: ["planejamento-de-cardapio", "despensa-organizada", "compra-economica"],
    faq: [{ q: "Como evitar desperdício de hortifruti?", a: "Compre quantidades semanais, guarde folhas em pote com papel toalha e congele o que estiver perto de estragar." }],
  },
  {
    slug: "cupom-de-desconto-supermercado",
    term: "Cupom de Desconto de Supermercado",
    category: "Compras",
    definition:
      "Cupom de desconto de supermercado é um código ou voucher promocional oferecido por redes, aplicativos e cartões de crédito, que reduz o preço final da compra em porcentagem, valor fixo ou cashback. Bem usado, combina com listas planejadas para amplificar economia sem estimular compras por impulso.",
    exemploPratico:
      "Uma pessoa faz a lista semanal, entra no app do supermercado, ativa cupons de itens que já ia comprar e paga com cartão que devolve cashback, acumulando dois descontos na mesma compra.",
    exemploItens: ["Apps oficiais do supermercado", "Programas de fidelidade com pontos", "Cashback via cartão de crédito", "Sites e newsletters de promoções"],
    porQueImporta:
      "Cupons combinados a uma lista de compras planejada reduzem o ticket final em 10% a 25%. Sem lista, os cupons viram armadilha e estimulam compras por impulso — o segredo é comprar apenas o que já estava planejado, ativando o desconto por cima do orçamento.",
    aprofundamento: {
      texto: "Use estratégias de compra econômica junto ao cupom para maximizar a economia sem comprar por impulso.",
      linkText: "Ver Lista de Supermercado",
      linkHref: "/lista-supermercado",
    },
    relacionados: ["compra-economica", "atacarejo", "orcamento-domestico"],
    faq: [{ q: "Cupom sempre compensa?", a: "Só quando aplicado a itens que você já compraria — do contrário, é gasto extra disfarçado de economia." }],
  },
  {
    slug: "lista-de-utilidades-domesticas",
    term: "Lista de Utilidades Domésticas",
    category: "Casa Nova",
    definition:
      "Lista de utilidades domésticas reúne os pequenos itens de uso diário — panelas, porta-temperos, escorredor, tábuas, potes herméticos, ganchos, cestos — que costumam faltar em quem monta a casa pela primeira vez. Complementa o enxoval, os móveis e os eletrodomésticos com o que realmente faz o dia a dia funcionar.",
    exemploPratico:
      "Ao mudar para o primeiro apartamento, o morador organiza a lista por cômodo e prioriza utilidades essenciais antes de itens estéticos, garantindo que a rotina básica esteja funcional.",
    exemploItens: ["Escorredor de louça, porta-temperos, potes", "Tábuas de corte, abridor, coador", "Ganchos, cabides, cestos de roupa", "Balde, rodo, pá de lixo, lixeiras"],
    porQueImporta:
      "Utilidades domésticas parecem baratas isoladamente, mas somam gastos altos quando compradas por impulso ao longo de meses. Uma lista consolidada permite comprar tudo em um atacarejo ou loja especializada, com desconto por volume e sem repetições.",
    aprofundamento: {
      texto: "Combine com o checklist completo de casa nova para não esquecer nenhum cômodo.",
      linkText: "Ver Checklist de Casa Nova",
      linkHref: "/lista-de-casa-nova-completa",
    },
    relacionados: ["checklist-de-casa-nova", "kit-cozinha-basica", "itens-essenciais-para-casa"],
    faq: [{ q: "O que são utilidades domésticas?", a: "São pequenos itens de uso diário para cozinha, banheiro, lavanderia e limpeza — não incluem móveis nem eletrodomésticos." }],
  },
  {
    slug: "checklist-de-mudanca-de-cidade",
    term: "Checklist de Mudança de Cidade",
    category: "Casa Nova",
    definition:
      "Checklist de mudança de cidade organiza todas as tarefas de uma mudança interestadual ou intermunicipal — transferência de documentos, contratação de transportadora, cancelamento de contas, matrícula escolar e adaptação inicial. Vai além da mudança de casa comum, porque envolve burocracia, prazos legais e planejamento financeiro maior.",
    exemploPratico:
      "Uma família que muda de estado organiza o checklist com 60 dias de antecedência, contratando frete, transferindo escola das crianças, cancelando planos locais e agendando entrega dos móveis no destino.",
    exemploItens: ["Transportadora, seguro, embalagens", "Transferência de escola, cartório, banco", "Cancelamento de água, luz, internet", "Aluguel ou compra confirmada no destino"],
    porQueImporta:
      "Mudanças de cidade sem checklist geram custos ocultos com multas, tarifas duplicadas, transporte adicional e improvisos. Um plano com 60 a 90 dias reduz esse desperdício em milhares de reais e diminui o estresse típico do primeiro mês em uma cidade nova.",
    aprofundamento: {
      texto: "Combine com o checklist de casa nova e a lista de mudança para não perder nada durante o processo.",
      linkText: "Ver Checklist de Casa Nova",
      linkHref: "/lista-de-casa-nova-completa",
    },
    relacionados: ["lista-de-mudanca", "checklist-de-casa-nova", "primeira-casa"],
    faq: [{ q: "Quanto tempo antes começar a planejar mudança de cidade?", a: "O ideal é entre 60 e 90 dias para contratar frete, transferir documentos e organizar o destino." }],
  },
  {
    slug: "kit-banheiro-basico",
    term: "Kit Banheiro Básico",
    category: "Casa Nova",
    definition:
      "Kit banheiro básico é o conjunto essencial para começar a usar o banheiro logo após a mudança: cortina de box, tapete, porta-escovas, lixeira, papeleira, toalhas e produtos de higiene. Foca no que é indispensável nos primeiros dias, sem itens de decoração ou reforma.",
    exemploPratico:
      "Ao chegar na casa nova, o morador monta o banheiro em uma tarde com cortina, tapete, porta-escovas, papel higiênico, sabonete líquido, shampoo e duas toalhas de banho.",
    exemploItens: ["Cortina de box, tapete, ganchos", "Porta-escovas, saboneteira, lixeira", "Toalhas de banho e rosto", "Papel higiênico, sabonete, shampoo, condicionador"],
    porQueImporta:
      "O banheiro é o primeiro cômodo que precisa estar funcional na casa nova. Sem o kit básico, os primeiros dias viram improviso e você paga caro em compras avulsas em farmácias e mercados de conveniência para resolver a urgência.",
    aprofundamento: {
      texto: "Combine com o kit lavanderia e o enxoval de casa para ter todos os cômodos funcionais rapidamente.",
      linkText: "Ver Checklist de Casa Nova",
      linkHref: "/lista-de-casa-nova-completa",
    },
    relacionados: ["enxoval-de-casa", "kit-lavanderia", "checklist-de-casa-nova"],
    faq: [{ q: "Quantas toalhas comprar por pessoa?", a: "Duas de banho e duas de rosto por pessoa é o mínimo confortável para o dia a dia." }],
  },
  {
    slug: "kit-primeiros-socorros-casa",
    term: "Kit de Primeiros Socorros para Casa",
    category: "Casa Nova",
    definition:
      "Kit de primeiros socorros para casa é o conjunto de curativos, medicamentos básicos, termômetro, antisséptico e material de emergência guardado em local acessível para resolver pequenos acidentes domésticos. Toda residência com crianças, idosos ou pets deveria ter um kit revisado a cada seis meses.",
    exemploPratico:
      "A casa mantém uma caixa organizada com band-aid, gaze, esparadrapo, álcool 70%, soro fisiológico, analgésico, antitérmico, pomada para queimaduras e termômetro digital.",
    exemploItens: ["Band-aid, gaze, esparadrapo, algodão", "Álcool 70%, soro fisiológico, antisséptico", "Analgésico, antitérmico, antialérgico", "Termômetro, tesoura sem ponta, luvas descartáveis"],
    porQueImporta:
      "Ter um kit em casa evita idas emergenciais à farmácia à noite ou em feriados, quando o preço triplica. Também garante atendimento rápido a cortes, queimaduras leves e febre — o que pode ser decisivo com crianças e idosos.",
    aprofundamento: {
      texto: "Complemente com o inventário doméstico para monitorar prazos de validade dos medicamentos.",
      linkText: "Ver Checklist de Casa Nova",
      linkHref: "/lista-de-casa-nova-completa",
    },
    relacionados: ["itens-essenciais-para-casa", "inventario-domestico", "checklist-de-casa-nova"],
    faq: [{ q: "Onde guardar o kit de primeiros socorros?", a: "Em local seco, fresco, longe do alcance de crianças, mas de fácil acesso para adultos." }],
  },
  {
    slug: "lista-de-eletrodomesticos-essenciais",
    term: "Lista de Eletrodomésticos Essenciais",
    category: "Casa Nova",
    definition:
      "Lista de eletrodomésticos essenciais reúne os aparelhos indispensáveis para que a casa funcione: geladeira, fogão, micro-ondas, máquina de lavar, liquidificador e ferro. Serve para priorizar compras em uma mudança nova, quando o orçamento não permite adquirir todos os equipamentos de uma só vez.",
    exemploPratico:
      "Um casal recém-mudado prioriza geladeira, fogão e máquina de lavar no primeiro mês, deixando micro-ondas, batedeira e air fryer para os meses seguintes.",
    exemploItens: ["Geladeira, fogão, forno", "Máquina de lavar, ferro de passar", "Micro-ondas, liquidificador, batedeira", "Air fryer, cafeteira, sanduicheira"],
    porQueImporta:
      "Comprar eletrodomésticos sem priorização gera dívidas altas de cartão e parcelas que apertam o orçamento por meses. Uma lista com priorização clara evita comprar itens supérfluos antes dos essenciais e permite negociar melhor com lojas de departamento e Black Friday.",
    aprofundamento: {
      texto: "Combine com o enxoval e o kit cozinha básica para montar toda a estrutura da casa nova.",
      linkText: "Ver Checklist de Casa Nova",
      linkHref: "/lista-de-casa-nova-completa",
    },
    relacionados: ["checklist-de-casa-nova", "kit-cozinha-basica", "primeira-casa"],
    faq: [{ q: "Quais eletrodomésticos comprar primeiro?", a: "Geladeira, fogão e máquina de lavar são os três indispensáveis para começar a rotina." }],
  },
  {
    slug: "lista-de-moveis-para-sala",
    term: "Lista de Móveis para Sala",
    category: "Casa Nova",
    definition:
      "Lista de móveis para sala reúne sofá, rack, mesa de centro, poltrona, tapete e itens de iluminação e decoração planejados para a área social da casa. Ajuda a projetar o ambiente com equilíbrio entre conforto, orçamento e circulação, evitando comprar peças que não cabem ou não combinam entre si.",
    exemploPratico:
      "Um casal mede a sala, define estilo e prioridades, e monta a lista com sofá de três lugares, rack para TV, mesa de centro, tapete 2×3m e luminária de piso.",
    exemploItens: ["Sofá, poltrona, puff", "Rack, painel de TV, aparador", "Mesa de centro, tapete, cortina", "Luminária, quadros, almofadas"],
    porQueImporta:
      "Comprar móveis sem lista e medidas gera devoluções, atrasos e frete duplicado. Uma lista com dimensões, cores e prioridades evita erros caros e permite comprar em conjunto para ganhar desconto por volume em lojas de móveis.",
    aprofundamento: {
      texto: "Combine com o checklist completo de casa nova para não esquecer nenhum cômodo além da sala.",
      linkText: "Ver Móveis para Sala",
      linkHref: "/lista-de-casa-nova-sala",
    },
    relacionados: ["checklist-de-casa-nova", "primeira-casa", "checklist-de-apartamento-novo"],
    faq: [{ q: "Como escolher o tamanho do sofá?", a: "Meça a parede onde ficará o sofá e deixe pelo menos 40cm de folga em cada lado para circulação." }],
  },
  {
    slug: "lista-de-moveis-para-quarto",
    term: "Lista de Móveis para Quarto",
    category: "Casa Nova",
    definition:
      "Lista de móveis para quarto reúne cama, colchão, guarda-roupa, criado-mudo, cômoda e itens de iluminação planejados para o ambiente de descanso. Ajuda a projetar o quarto com foco em conforto, armazenamento e estética, respeitando o tamanho do cômodo e o orçamento disponível.",
    exemploPratico:
      "Uma pessoa monta o quarto com cama de casal, colchão de molas ensacadas, guarda-roupa de 6 portas, dois criados-mudos, cômoda com espelho e abajur.",
    exemploItens: ["Cama, colchão, cabeceira", "Guarda-roupa, cômoda, sapateira", "Criado-mudo, abajur, luminária", "Cortina, tapete, quadros"],
    porQueImporta:
      "O colchão é responsável por até 40% da qualidade do sono. Uma lista de quarto bem planejada equilibra o investimento entre cama e demais móveis, evitando gastar tudo em guarda-roupa e economizar no que realmente afeta a saúde e disposição diária.",
    aprofundamento: {
      texto: "Combine com o enxoval de cama para completar o quarto com jogos de lençol e edredons.",
      linkText: "Ver Móveis para Quarto",
      linkHref: "/lista-de-casa-nova-quarto",
    },
    relacionados: ["enxoval-de-casa", "checklist-de-casa-nova", "primeira-casa"],
    faq: [{ q: "Onde vale mais investir no quarto?", a: "No colchão. Um colchão bom dura 10 anos e melhora sono, coluna e disposição." }],
  },
  {
    slug: "organizacao-de-armario",
    term: "Organização de Armário",
    category: "Organização",
    definition:
      "Organização de armário é o processo de separar, categorizar e distribuir peças e objetos por frequência de uso, tipo e estação, aproveitando divisórias, cabides, caixas e etiquetas. Aplicada ao guarda-roupa, à cozinha ou à área de serviço, transforma o dia a dia ao eliminar buscas demoradas e o hábito de comprar itens duplicados.",
    exemploPratico:
      "Uma pessoa organiza o guarda-roupa por categoria (blusas, calças, vestidos), depois por cor, guarda peças de outra estação em caixas altas e etiqueta as gavetas.",
    exemploItens: ["Divisórias, caixas organizadoras, cabides", "Etiquetas por categoria e estação", "Cestos para peças íntimas e meias", "Sachês antimofo e desumidificadores"],
    porQueImporta:
      "Um armário organizado economiza em média 15 minutos por dia na rotina de se arrumar. Também revela roupas esquecidas, evita compras repetidas e mantém peças em melhor estado por mais tempo, aumentando a vida útil do enxoval.",
    aprofundamento: {
      texto: "Combine com a organização doméstica para aplicar o mesmo método em toda a casa.",
      linkText: "Ver Móveis para Quarto",
      linkHref: "/lista-de-casa-nova-quarto",
    },
    relacionados: ["organizacao-domestica", "rotina-da-casa", "inventario-domestico"],
    faq: [{ q: "Com que frequência reorganizar o armário?", a: "A cada troca de estação ou pelo menos duas vezes por ano." }],
  },
  {
    slug: "organizacao-de-guarda-roupa",
    term: "Organização de Guarda-Roupa",
    category: "Organização",
    definition:
      "Organização de guarda-roupa é o método de arrumar peças por tipo, cor, estação e frequência de uso, utilizando cabides padronizados, divisores de gaveta e caixas. Facilita o dia a dia, aumenta a vida útil das roupas e ajuda a identificar o que já se tem antes de qualquer compra nova.",
    exemploPratico:
      "Uma pessoa faz um desapego inicial, separa roupas em usar, doar e descartar, padroniza cabides, dobra camisetas em pé para visualização vertical e cria zonas por categoria.",
    exemploItens: ["Cabides padronizados por tipo de peça", "Divisores para gavetas de íntimas e meias", "Caixas altas para roupas de outra estação", "Sachês perfumados e antimofo"],
    porQueImporta:
      "Guarda-roupa organizado reduz o tempo de escolha diária, evita amassar roupas e permite comprar de forma consciente — quando você vê tudo que tem, não repete peças. Esse ajuste sozinho economiza dezenas de reais por mês em compras por impulso.",
    aprofundamento: {
      texto: "Combine com a organização de armário e a rotina da casa para manter o resultado a longo prazo.",
      linkText: "Ver Móveis para Quarto",
      linkHref: "/lista-de-casa-nova-quarto",
    },
    relacionados: ["organizacao-de-armario", "organizacao-domestica", "rotina-da-casa"],
    faq: [{ q: "Devo dobrar ou pendurar as camisetas?", a: "Dobrar em pé (método vertical) economiza espaço e permite ver todas as peças de uma vez." }],
  },
  {
    slug: "faxina-pesada",
    term: "Faxina Pesada",
    category: "Organização",
    definition:
      "Faxina pesada é a limpeza profunda da casa, feita periodicamente, que envolve mover móveis, limpar geladeira, fogão, azulejos, teto, ventiladores e áreas que a rotina semanal não alcança. Difere da limpeza diária pela profundidade e pelo tempo necessário, exigindo produtos específicos e um checklist bem definido.",
    exemploPratico:
      "Uma pessoa reserva um sábado, define o checklist por cômodo, começa pelos ambientes altos e termina pelo chão, gastando cerca de 5 horas para faxinar toda a casa.",
    exemploItens: ["Descongelar e limpar geladeira", "Lavar azulejos, rejuntes, box do banheiro", "Limpar teto, ventiladores, luminárias", "Higienizar sofá, colchões e tapetes"],
    porQueImporta:
      "Faxinas pesadas trimestrais evitam acúmulo de ácaros, mofo e sujeira em profundidade, reduzindo alergias e prolongando a vida de móveis, eletrodomésticos e revestimentos. Uma faxina bem feita substitui contratação pontual de serviços profissionais caros.",
    aprofundamento: {
      texto: "Combine com a rotina da casa para manter o resultado com pequenas ações semanais.",
      linkText: "Ver Lista de Casa Nova",
      linkHref: "/lista-de-casa-nova-limpeza",
    },
    relacionados: ["rotina-da-casa", "lista-de-tarefas-domesticas", "lista-de-produtos-de-limpeza"],
    faq: [{ q: "Com que frequência fazer faxina pesada?", a: "A cada 2 a 3 meses, ou uma vez por estação, é o ideal para a maioria dos lares." }],
  },
  {
    slug: "lista-de-cha-de-cozinha",
    term: "Lista de Chá de Cozinha",
    category: "Casamento",
    definition:
      "Lista de chá de cozinha é o conjunto de utensílios de cozinha, panelas, eletroportáteis e itens de mesa que os noivos sugerem aos convidados como presente antes do casamento. Facilita a escolha, evita presentes repetidos e ajuda o casal a montar a cozinha da casa nova sem gastar do próprio bolso.",
    exemploPratico:
      "Os noivos organizam a lista dividida em faixas de preço, com panelas, jogo de facas, mixer, batedeira, potes herméticos e utensílios básicos, e enviam o link aos convidados.",
    exemploItens: ["Panelas, frigideiras, jogo de facas", "Batedeira, mixer, sanduicheira", "Jogo de pratos, taças, talheres", "Potes herméticos, escorredor, tábuas"],
    porQueImporta:
      "Chá de cozinha bem planejado pode equipar 60% a 80% da cozinha nova, economizando milhares de reais no início da vida a dois. Uma lista organizada por faixa de preço facilita para o convidado escolher, evita repetição e garante que o casal receba o que realmente precisa.",
    aprofundamento: {
      texto: "Combine com o checklist completo de casamento para não esquecer os detalhes do evento.",
      linkText: "Ver Checklist de Casamento",
      linkHref: "/casamento-completo",
    },
    relacionados: ["checklist-de-casamento", "kit-cozinha-basica", "enxoval-de-cozinha"],
    faq: [{ q: "Chá de cozinha e chá de panela são a mesma coisa?", a: "Não. O chá de panela foca em panelas e utensílios; o chá de cozinha é mais amplo, incluindo eletroportáteis e utensílios em geral." }],
  },
  {
    slug: "lista-de-cha-de-panela",
    term: "Lista de Chá de Panela",
    category: "Casamento",
    definition:
      "Lista de chá de panela é a seleção específica de panelas, frigideiras, utensílios de cozimento e assadeiras que os noivos pedem como presente. Focada em preparar o casal para cozinhar em casa, garante que a cozinha nova comece com equipamentos de qualidade sem gasto direto.",
    exemploPratico:
      "A noiva organiza a lista com jogo de panelas antiaderentes, panela de pressão, frigideira grande, wok, assadeiras de vidro e caçarolas em diferentes tamanhos.",
    exemploItens: ["Jogo de panelas antiaderentes 5 peças", "Panela de pressão, wok, caçarolas", "Frigideiras grande, média e pequena", "Assadeiras, formas, refratários"],
    porQueImporta:
      "Panelas de qualidade duram mais de 10 anos e representam gasto alto para quem monta a cozinha do zero. Um chá de panela bem estruturado presenteia o casal com peças duráveis, evita duplicidade e complementa perfeitamente o chá de cozinha, o chá bar ou o próprio casamento.",
    aprofundamento: {
      texto: "Combine com o kit cozinha básica para não faltar nenhum utensílio importante.",
      linkText: "Ver Checklist de Casamento",
      linkHref: "/casamento-completo",
    },
    relacionados: ["lista-de-cha-de-cozinha", "kit-cozinha-basica", "checklist-de-casamento"],
    faq: [{ q: "Quantas panelas incluir na lista?", a: "Um jogo de 5 peças mais panela de pressão e frigideira grande cobre a maioria dos preparos do dia a dia." }],
  },
  {
    slug: "lista-de-cha-bar",
    term: "Lista de Chá Bar",
    category: "Casamento",
    definition:
      "Lista de chá bar é a coletânea de bebidas, taças, garrafas, itens de bar e acessórios para receber convidados que os noivos indicam como presente antes do casamento. Une utilidade e diversão, sendo alternativa moderna aos tradicionais chás de cozinha e panela.",
    exemploPratico:
      "O casal monta a lista com garrafas de vinho, whisky, gin, coqueteleira, taças de vinho, copos long drink e acessórios como abridor e balde de gelo.",
    exemploItens: ["Vinhos, espumantes, destilados", "Taças, copos, canecas", "Coqueteleira, abridor, dosador", "Balde de gelo, decantador, tábua de queijos"],
    porQueImporta:
      "Chá bar equipa a casa nova para receber amigos e família sem gasto extra dos noivos. Também é uma forma de casais que já moram juntos e não precisam de utensílios básicos aproveitarem os presentes com itens que agregam à rotina social.",
    aprofundamento: {
      texto: "Combine com o checklist completo de casamento para alinhar chá bar, cerimônia e recepção.",
      linkText: "Ver Checklist de Casamento",
      linkHref: "/casamento-completo",
    },
    relacionados: ["checklist-de-casamento", "lista-de-cha-de-cozinha", "mini-wedding"],
    faq: [{ q: "Chá bar substitui chá de cozinha?", a: "Sim, especialmente quando o casal já tem os utensílios básicos e prefere focar em itens sociais." }],
  },
  {
    slug: "cha-de-fraldas",
    term: "Chá de Fraldas",
    category: "Casamento",
    definition:
      "Chá de fraldas é um evento em que amigos e familiares presenteiam os futuros pais com pacotes de fraldas descartáveis de vários tamanhos, ajudando a formar o estoque inicial do bebê. É uma das formas mais práticas de reduzir o gasto mensal com um dos itens mais caros da primeira infância.",
    exemploPratico:
      "A gestante organiza o chá de fraldas com sorteios por tamanho (RN, P, M, G), garantindo variedade de estoque e evitando muitos pacotes do mesmo número.",
    exemploItens: ["Fraldas RN, P, M, G e GG", "Lenços umedecidos", "Pomada de assadura, sabonete infantil", "Toalhas de fralda de pano"],
    porQueImporta:
      "Nos primeiros 12 meses, uma família gasta em média milhares de reais só em fraldas. Um chá de fraldas bem estruturado pode cobrir de 4 a 6 meses de estoque, aliviando significativamente o orçamento familiar no início da vida do bebê.",
    aprofundamento: {
      texto: "Complemente com a lista de compras para bebê para cobrir os demais itens de higiene e alimentação.",
      linkText: "Ver Checklist de Casamento",
      linkHref: "/casamento-completo",
    },
    relacionados: ["lista-de-compras-para-bebe", "checklist-de-casamento", "lista-de-higiene-pessoal"],
    faq: [{ q: "Como evitar muitas fraldas do mesmo tamanho?", a: "Faça sorteio por número e peça que cada convidado leve o tamanho sorteado." }],
  },
  {
    slug: "padrinhos-de-casamento",
    term: "Padrinhos de Casamento",
    category: "Casamento",
    definition:
      "Padrinhos de casamento são os convidados escolhidos pelos noivos para exercer papel simbólico e legal na cerimônia, geralmente pessoas próximas da família ou de longa amizade. Além do compromisso afetivo, envolvem custos com trajes coordenados, presentes e, muitas vezes, participação em despesas do evento.",
    exemploPratico:
      "O casal define 6 padrinhos e 6 madrinhas, comunica com 6 meses de antecedência, alinha o dress code e organiza um jantar de agradecimento antes do casamento.",
    exemploItens: ["Convite formal para padrinhos", "Definição de dress code e paleta", "Presente de agradecimento aos padrinhos", "Jantar ou brinde antes da cerimônia"],
    porQueImporta:
      "Padrinhos bem escolhidos e alinhados aos noivos tornam a cerimônia mais leve e organizada. Um número equilibrado (entre 4 e 8 casais é o mais comum) reduz custos com convites, arranjos e presentes, mantendo a intimidade sem excessos protocolares.",
    aprofundamento: {
      texto: "Combine com o checklist completo e a lista de convidados para organizar todos os papéis do casamento.",
      linkText: "Ver Checklist de Casamento",
      linkHref: "/casamento-completo",
    },
    relacionados: ["checklist-de-casamento", "lista-de-convidados", "cronograma-de-casamento"],
    faq: [{ q: "Quantos padrinhos ter no casamento?", a: "Entre 4 e 8 casais é o mais comum, mas depende do estilo da cerimônia e do orçamento." }],
  },
  {
    slug: "bem-casado",
    term: "Bem-Casado",
    category: "Casamento",
    definition:
      "Bem-casado é um doce tradicional brasileiro, feito de dois discos de massa amanteigada recheados com doce de leite, embalado em papel crepom e entregue aos convidados como lembrança do casamento. É um símbolo de sorte e prosperidade ao casal e faz parte do menu clássico da recepção brasileira.",
    exemploPratico:
      "Os noivos encomendam 1,5 bem-casado por convidado para um casamento de 150 pessoas, escolhendo embalagem personalizada com nome do casal e data.",
    exemploItens: ["Bem-casado tradicional de doce de leite", "Embalagem personalizada com iniciais", "Etiqueta ou tag de agradecimento", "Kit de degustação para provar antes"],
    porQueImporta:
      "Bem-casados representam entre 5% e 10% do orçamento gastronômico do casamento. Calcular quantidade correta (1,5 por convidado é referência), fechar com fornecedores em atacado e ajustar embalagem ao estilo do evento evita sobra e mantém o custo sob controle.",
    aprofundamento: {
      texto: "Combine com o orçamento e a lista de fornecedores para negociar melhor com confeitarias.",
      linkText: "Ver Checklist de Casamento",
      linkHref: "/casamento-completo",
    },
    relacionados: ["orcamento-de-casamento", "lista-de-fornecedores", "checklist-de-casamento"],
    faq: [{ q: "Quantos bem-casados calcular por convidado?", a: "1,5 por convidado é a referência usada por confeiteiros para evitar falta e excesso." }],
  },
  {
    slug: "cerimonial-de-casamento",
    term: "Cerimonial de Casamento",
    category: "Casamento",
    definition:
      "Cerimonial de casamento é o serviço profissional responsável por planejar, coordenar e executar o evento, desde a escolha de fornecedores até o cronograma do dia da festa. Um bom cerimonial reduz estresse dos noivos, evita imprevistos e garante que a cerimônia e a recepção sigam o roteiro sem falhas.",
    exemploPratico:
      "Os noivos contratam a cerimonialista com 8 meses de antecedência, que negocia fornecedores, monta o cronograma, coordena o ensaio e conduz o dia do evento minuto a minuto.",
    exemploItens: ["Contrato, briefing, orçamento inicial", "Seleção de fornecedores e visitas técnicas", "Cronograma detalhado do dia do evento", "Coordenação da cerimônia, recepção e desmontagem"],
    porQueImporta:
      "Casamento sem cerimonial exige que os noivos ou a família assumam a coordenação, o que consome tempo, gera erros e reduz a experiência do próprio dia. O cerimonial custa entre 5% e 10% do orçamento total, mas evita retrabalho e negocia descontos que muitas vezes cobrem o próprio investimento.",
    aprofundamento: {
      texto: "Combine com a lista de fornecedores e o cronograma de casamento para maximizar o resultado do cerimonial.",
      linkText: "Ver Checklist de Casamento",
      linkHref: "/casamento-completo",
    },
    relacionados: ["lista-de-fornecedores", "cronograma-de-casamento", "orcamento-de-casamento"],
    faq: [{ q: "Vale a pena contratar cerimonial?", a: "Para casamentos com mais de 50 convidados, sim — o retorno em organização e negociação com fornecedores costuma cobrir o custo." }],
  },
  {
    slug: "daminha-e-pajem",
    term: "Daminha e Pajem",
    category: "Casamento",
    definition:
      "Daminha e pajem são crianças convidadas para participar da cerimônia do casamento, geralmente entrando na frente dos noivos com almofada de alianças, pétalas ou plaquinha. Envolvem custos com trajes específicos, ensaio prévio e cuidados durante o evento para garantir que a participação corra bem.",
    exemploPratico:
      "Os noivos escolhem duas daminhas e um pajem, compram os trajes com 3 meses de antecedência, ensaiam a entrada no dia do casamento e reservam brindes de agradecimento.",
    exemploItens: ["Traje de daminha (vestido combinando)", "Traje de pajem (terno ou conjunto)", "Almofada de alianças ou plaquinha", "Brinde ou lembrança para as crianças"],
    porQueImporta:
      "Crianças na cerimônia trazem leveza e emoção, mas exigem planejamento. Um número pequeno (1 a 3 crianças) e ensaio prévio evitam imprevistos, choros e atrasos, mantendo a solenidade e a memória afetiva do momento para toda a família.",
    aprofundamento: {
      texto: "Combine com o cronograma de casamento para incluir ensaio, entrada e cuidados durante a cerimônia.",
      linkText: "Ver Checklist de Casamento",
      linkHref: "/casamento-completo",
    },
    relacionados: ["cronograma-de-casamento", "checklist-de-casamento", "padrinhos-de-casamento"],
    faq: [{ q: "Qual a melhor idade para daminha e pajem?", a: "Entre 4 e 8 anos — mais novos podem se assustar, e mais velhos preferem outros papéis." }],
  },
  {
    slug: "save-the-date",
    term: "Save the Date",
    category: "Casamento",
    definition:
      "Save the date é o aviso enviado pelos noivos aos convidados, geralmente com 6 a 12 meses de antecedência, para que reservem a data do casamento na agenda. Antecede o convite oficial e é essencial em eventos com destination wedding, feriados ou convidados que precisam se organizar com viagem.",
    exemploPratico:
      "Os noivos criam um cartão digital com data, cidade e link para hotsite, enviando por WhatsApp e e-mail 8 meses antes do casamento.",
    exemploItens: ["Cartão digital com data e local", "Hotsite com informações de hospedagem", "Envio por WhatsApp, e-mail ou correio", "Confirmação inicial de disponibilidade"],
    porQueImporta:
      "Save the date reduz o número de ausências no casamento, especialmente quando envolve viagem, feriado ou destino turístico. Também ajuda os noivos a estimar público real antes de contratar buffet, espaço e convite oficial, evitando super ou subdimensionamento.",
    aprofundamento: {
      texto: "Combine com o cronograma de casamento e RSVP para acompanhar todas as respostas dos convidados.",
      linkText: "Ver Checklist de Casamento",
      linkHref: "/casamento-completo",
    },
    relacionados: ["cronograma-de-casamento", "rsvp-de-casamento", "lista-de-convidados"],
    faq: [{ q: "Quando enviar o save the date?", a: "De 6 a 12 meses antes do casamento, principalmente para eventos em destino turístico." }],
  },
  {
    slug: "material-escolar-ensino-medio",
    term: "Material Escolar Ensino Médio",
    category: "Material Escolar",
    definition:
      "Material escolar do ensino médio reúne cadernos, canetas, calculadora científica, agenda, kit de geometria e itens específicos exigidos por disciplinas como física, química e biologia. É uma lista mais enxuta que a do fundamental, mas com itens de maior valor unitário, como calculadora e livros de exercícios preparatórios.",
    exemploPratico:
      "Os pais de um aluno do 1º ano do ensino médio compram 5 cadernos universitários, calculadora científica, kit de geometria, canetas, marcadores e agenda.",
    exemploItens: ["Cadernos universitários e fichários", "Calculadora científica, kit de geometria", "Canetas, lapiseiras, marcadores", "Livros didáticos e paradidáticos"],
    porQueImporta:
      "Material do ensino médio é mais caro por unidade e envolve itens duradouros. Uma lista bem planejada com comparação de preços em papelarias, marketplaces e atacarejos pode reduzir o gasto em 30% em relação à compra rápida em uma única loja.",
    aprofundamento: {
      texto: "Combine com estratégias de volta às aulas e mochila escolar para organizar toda a rotina do aluno.",
      linkText: "Ver Material Escolar Ensino Médio",
      linkHref: "/material-escolar-ensino-medio",
    },
    relacionados: ["volta-as-aulas", "lista-de-papelaria", "mochila-escolar"],
    faq: [{ q: "Calculadora científica é obrigatória no ensino médio?", a: "Para disciplinas de exatas, sim. Modelos básicos custam menos de R$ 60 e duram anos." }],
  },
  {
    slug: "estojo-escolar-completo",
    term: "Estojo Escolar Completo",
    category: "Material Escolar",
    definition:
      "Estojo escolar completo reúne lápis, canetas, borracha, apontador, régua, marcadores e tesoura em um único acessório organizado. Diferente do estojo simples, ele suporta a rotina do dia todo sem depender da mochila ou da bolsa da criança, evitando perdas e pedidos emergenciais em plena aula.",
    exemploPratico:
      "Pais escolhem estojo de dois zíperes com divisões, montam com 3 lápis pretos, 2 borrachas, apontador com depósito, 12 lápis de cor, canetas, régua e tesoura sem ponta.",
    exemploItens: ["Lápis, borracha, apontador, régua", "Lápis de cor, canetas hidrocor", "Marca texto, cola bastão, tesoura sem ponta", "Cola líquida e canetas coloridas"],
    porQueImporta:
      "Estojo completo evita a rotina de esquecer itens em casa e comprar duplicatas caras nas papelarias próximas à escola. Um estojo bem equipado no início do ano dura pelo menos um semestre com pequenas reposições, reduzindo custos em 40% ao longo do período letivo.",
    aprofundamento: {
      texto: "Combine com a lista completa de material escolar e a organização de mochila.",
      linkText: "Ver Material Escolar",
      linkHref: "/material-escolar",
    },
    relacionados: ["lista-de-material-escolar", "organizacao-de-mochila", "lista-de-papelaria"],
    faq: [{ q: "Um ou dois estojos para escola?", a: "Um completo com divisões costuma ser suficiente e mais leve na mochila." }],
  },
  {
    slug: "lancheira-escolar",
    term: "Lancheira Escolar",
    category: "Material Escolar",
    definition:
      "Lancheira escolar é o acessório térmico onde a criança leva o lanche da escola, incluindo pote hermético, garrafinha, gelo reciclável e guardanapo. Substitui o hábito de comprar salgados na cantina, reduzindo custo e melhorando a qualidade nutricional do lanche diário.",
    exemploPratico:
      "A família monta lancheira térmica com sanduíche integral, fruta, biscoito, garrafinha de suco natural e pote com iogurte, alternando cardápio ao longo da semana.",
    exemploItens: ["Lancheira térmica com divisórias", "Pote hermético, garrafinha reutilizável", "Gelo reciclável, guardanapo, talher", "Lanche variado: fruta, sanduíche, iogurte"],
    porQueImporta:
      "Comprar lanche na cantina custa em média R$ 15 a R$ 25 por dia. Levar de casa reduz esse gasto para R$ 5 a R$ 8 diários e ainda melhora a alimentação. No ano letivo, a economia passa fácil de R$ 2.000 por criança.",
    aprofundamento: {
      texto: "Combine com a lista de compras para café da manhã para variar os lanches da semana.",
      linkText: "Ver Material Escolar",
      linkHref: "/material-escolar",
    },
    relacionados: ["lista-de-compras-para-cafe-da-manha", "mochila-escolar", "volta-as-aulas"],
    faq: [{ q: "Lancheira térmica mantém o lanche fresco quantas horas?", a: "De 4 a 6 horas com gelo reciclável — suficiente para o turno escolar." }],
  },
  {
    slug: "livros-didaticos",
    term: "Livros Didáticos",
    category: "Material Escolar",
    definition:
      "Livros didáticos são as obras oficiais adotadas pela escola para cada disciplina do ano letivo, incluindo exercícios, textos e conteúdo alinhado à BNCC. Podem ser comprados novos, seminovos ou reutilizados, sendo um dos itens de maior peso na lista de material escolar do ano.",
    exemploPratico:
      "A família compra a lista de livros combinando novos (para as disciplinas com muito exercício), seminovos em sebos online e reaproveita os que a escola permite manter em uso.",
    exemploItens: ["Lista oficial fornecida pela escola", "Comparação novo x seminovo x usado", "Sebos digitais e grupos de pais", "Livros paradidáticos exigidos por professor"],
    porQueImporta:
      "Livros didáticos podem representar até 60% do custo do material escolar no início do ano. Buscar seminovos em bom estado, negociar em grupos de pais e comprar com antecedência (fora do pico de janeiro e fevereiro) reduz esse gasto em até 50%.",
    aprofundamento: {
      texto: "Combine com a lista completa de material escolar e estratégias de volta às aulas para economizar mais.",
      linkText: "Ver Material Escolar",
      linkHref: "/material-escolar",
    },
    relacionados: ["lista-de-material-escolar", "volta-as-aulas", "material-escolar-2026"],
    faq: [{ q: "Vale a pena comprar livro didático usado?", a: "Sim, quando está em bom estado e o modelo é o mesmo adotado pela escola — economia pode chegar a 50%." }],
  },
  {
    slug: "uniforme-escolar",
    term: "Uniforme Escolar",
    category: "Material Escolar",
    definition:
      "Uniforme escolar é o conjunto de peças padronizadas exigidas pela escola — camisetas, calças, saias, moletons e tênis — que a criança usa no dia a dia letivo. Envolve custo anual significativo e pode ser reduzido com compra planejada, reuso de peças em bom estado e aproveitamento de programas de troca entre pais.",
    exemploPratico:
      "A família compra 4 camisetas, 2 calças e 1 moletom do uniforme, priorizando peças que aguentem lavagem frequente, e reutiliza as do ano anterior que ainda servem.",
    exemploItens: ["4 camisetas de manga curta ou longa", "2 a 3 calças ou saias", "1 moletom ou blusa de frio", "1 par de tênis padrão da escola"],
    porQueImporta:
      "Uniforme mal planejado gera compra emergencial em lojas oficiais da escola, com preços 30% a 50% acima do mercado. Comprar antes do início das aulas em fornecedores alternativos autorizados ou aproveitar bazares de escola reduz muito o gasto anual.",
    aprofundamento: {
      texto: "Combine com a lista de material escolar e estratégias de volta às aulas para consolidar tudo em uma compra.",
      linkText: "Ver Material Escolar",
      linkHref: "/material-escolar",
    },
    relacionados: ["lista-de-material-escolar", "volta-as-aulas", "material-escolar-2026"],
    faq: [{ q: "Quantas peças de uniforme comprar por criança?", a: "4 camisetas, 2 calças e 1 moletom cobrem uma semana com lavagem intercalada." }],
  },
  {
    slug: "material-escolar-barato",
    term: "Material Escolar Barato",
    category: "Material Escolar",
    definition:
      "Material escolar barato é a estratégia de comprar toda a lista da escola com foco em economia, combinando marcas próprias, atacarejos, compra antecipada e reuso de itens em bom estado do ano anterior. Reduz significativamente o impacto do início do ano letivo no orçamento familiar.",
    exemploPratico:
      "A família revisa material do ano anterior em novembro, monta lista do que falta, compara preços em 3 atacarejos e finaliza a compra em janeiro com desconto por volume.",
    exemploItens: ["Reuso de mochila, estojo e réguas", "Marcas próprias de cadernos e canetas", "Compra em atacarejo com desconto por volume", "Grupos de pais para trocas e vendas"],
    porQueImporta:
      "O material escolar de janeiro é um dos maiores impactos anuais no orçamento familiar brasileiro. Aplicar estratégias de compra econômica pode reduzir esse gasto em 40% a 60%, sem sacrificar qualidade ou o que a escola pede.",
    aprofundamento: {
      texto: "Combine com o atacarejo e a lista completa de material escolar para maximizar a economia.",
      linkText: "Ver Material Escolar",
      linkHref: "/material-escolar",
    },
    relacionados: ["compra-economica", "atacarejo", "lista-de-material-escolar"],
    faq: [{ q: "Quando começar a comprar material escolar barato?", a: "Em novembro e dezembro, aproveitando Black Friday e evitando o pico de preços de janeiro." }],
  },
  {
    slug: "metodo-getting-things-done",
    term: "Método Getting Things Done (GTD)",
    category: "Produtividade",
    definition:
      "Getting Things Done, ou GTD, é o método de produtividade criado por David Allen que organiza tarefas em cinco etapas: capturar, esclarecer, organizar, refletir e engajar. Aplicado ao dia a dia, ele reduz a sobrecarga mental ao tirar da cabeça tudo que precisa ser feito e transferir para um sistema confiável de listas.",
    exemploPratico:
      "Uma pessoa captura ideias em um caderno ao longo do dia, revisa à noite, define ações claras (próximo passo), agenda ou delega, e revisa semanalmente para manter o sistema atualizado.",
    exemploItens: ["Caixa de entrada única para capturar tarefas", "Listas por contexto: casa, trabalho, ligações", "Revisão semanal do sistema", "Próxima ação definida para cada projeto"],
    porQueImporta:
      "Manter tarefas na cabeça consome energia mental e gera ansiedade. GTD libera essa carga ao transferir tudo para listas revisáveis, aumentando foco no que está sendo feito no momento e melhorando a qualidade das decisões diárias.",
    aprofundamento: {
      texto: "Combine com listas de tarefas domésticas e gestão do tempo para aplicar GTD em toda a rotina.",
      linkText: "Abrir Criador de Listas",
      linkHref: "/criar-lista",
    },
    relacionados: ["to-do-list", "gestao-do-tempo", "matriz-de-prioridade"],
    faq: [{ q: "Preciso de aplicativo para usar GTD?", a: "Não. GTD funciona em papel, agenda ou app — o método é o mesmo, o suporte é escolha pessoal." }],
  },
  {
    slug: "metodo-pomodoro",
    term: "Método Pomodoro",
    category: "Produtividade",
    definition:
      "Método Pomodoro é uma técnica de produtividade que divide o trabalho em ciclos de 25 minutos de foco intenso seguidos por 5 minutos de pausa curta, com uma pausa longa a cada quatro ciclos. Reduz distrações, aumenta a concentração e ajuda a estimar tempo real gasto em cada tipo de tarefa.",
    exemploPratico:
      "Uma pessoa escolhe uma tarefa, liga o timer por 25 minutos, foca sem checar celular, faz pausa de 5 minutos e repete o ciclo até concluir ou até quatro pomodoros seguidos.",
    exemploItens: ["Timer físico ou app de Pomodoro", "Lista com tarefas do dia priorizadas", "Regra de não interromper durante o ciclo", "Registro de quantos pomodoros por tarefa"],
    porQueImporta:
      "Manter foco por longos períodos é difícil. Blocos curtos de 25 minutos são mais realistas para o cérebro, ajudam a começar tarefas difíceis e evitam a procrastinação. Estudos mostram aumento de produtividade em até 40% em atividades cognitivas.",
    aprofundamento: {
      texto: "Combine Pomodoro com to-do list e matriz de prioridade para maximizar a concentração diária.",
      linkText: "Abrir Criador de Listas",
      linkHref: "/criar-lista",
    },
    relacionados: ["to-do-list", "gestao-do-tempo", "checklist-diario"],
    faq: [{ q: "Posso ajustar o tempo do Pomodoro?", a: "Sim. Alguns preferem 50 minutos de foco e 10 de pausa para tarefas complexas — o importante é manter o padrão." }],
  },
  {
    slug: "bullet-journal",
    term: "Bullet Journal",
    category: "Produtividade",
    definition:
      "Bullet Journal, ou BuJo, é um sistema analógico de produtividade e organização pessoal criado por Ryder Carroll, feito à mão em um caderno em branco. Combina agenda, planner, diário e checklist em um único formato flexível, com uma linguagem visual baseada em bullets, hábitos e coleções.",
    exemploPratico:
      "Uma pessoa monta o bullet journal com índice, log anual, log mensal, log diário e coleções (livros lidos, gastos, hábitos), atualizando à noite antes de dormir.",
    exemploItens: ["Caderno pontilhado e canetas", "Índice, log mensal, log diário", "Coleções: hábitos, gastos, livros", "Migração de tarefas mês a mês"],
    porQueImporta:
      "Escrever à mão ativa memória e planejamento de forma diferente de aplicativos digitais. O bullet journal traz consciência sobre tempo, hábitos e emoções, ajudando quem quer reduzir tempo de tela e desenvolver hábito de reflexão diária.",
    aprofundamento: {
      texto: "Complemente o bullet journal com planners semanais e listas de metas anuais.",
      linkText: "Abrir Criador de Listas",
      linkHref: "/criar-lista",
    },
    relacionados: ["planner-semanal", "to-do-list", "checklist-diario"],
    faq: [{ q: "Preciso saber desenhar para fazer bullet journal?", a: "Não. O método original é minimalista — desenhos e caligrafia caprichada são opcionais." }],
  },
  {
    slug: "checklist-diario",
    term: "Checklist Diário",
    category: "Produtividade",
    definition:
      "Checklist diário é uma lista curta de tarefas essenciais para o dia, revisada de manhã e finalizada à noite. Diferente de uma to-do list infinita, ele foca em 3 a 5 prioridades reais, garantindo progresso mesmo em dias corridos e evitando a sensação de estar sempre atrasado.",
    exemploPratico:
      "A pessoa acorda, escreve 5 tarefas essenciais do dia, marca à medida que conclui e faz revisão rápida à noite passando o que sobrou para o dia seguinte.",
    exemploItens: ["3 a 5 tarefas prioritárias do dia", "Espaço para tarefas rápidas (chamadas, e-mails)", "Bloco de hábitos: água, exercício, leitura", "Revisão noturna e migração de pendências"],
    porQueImporta:
      "Listas gigantes geram frustração e paralisia. Um checklist diário curto e realista aumenta a sensação de progresso, melhora a autoestima produtiva e ajuda a manter foco no essencial em vez de dispersar em urgências não importantes.",
    aprofundamento: {
      texto: "Combine com o método Pomodoro e a matriz de prioridade para executar o checklist com máximo foco.",
      linkText: "Abrir Criador de Listas",
      linkHref: "/criar-lista",
    },
    relacionados: ["to-do-list", "matriz-de-prioridade", "metodo-pomodoro"],
    faq: [{ q: "Quantas tarefas colocar no checklist diário?", a: "De 3 a 5 tarefas realmente prioritárias — mais que isso costuma virar lista de desejos." }],
  },
  {
    slug: "rotina-matinal",
    term: "Rotina Matinal",
    category: "Produtividade",
    definition:
      "Rotina matinal é a sequência de hábitos praticada nas primeiras horas do dia — como acordar cedo, se hidratar, exercitar-se, meditar, planejar o dia e tomar café da manhã — que define o tom físico e mental para as horas seguintes. Uma rotina consistente aumenta energia, foco e sensação de controle.",
    exemploPratico:
      "Uma pessoa acorda às 6h, bebe 500ml de água, se alonga por 10 minutos, medita por 5, planeja o dia e toma café da manhã antes de começar a trabalhar.",
    exemploItens: ["Despertador em horário fixo", "Copo de água antes de qualquer bebida", "Exercício, alongamento ou meditação", "Revisão da agenda e checklist do dia"],
    porQueImporta:
      "Manhãs planejadas evitam começar o dia reagindo a notificações e prazos. Uma rotina de 30 a 60 minutos antes do trabalho melhora foco, humor e saúde, com impacto direto no rendimento profissional e pessoal ao longo do dia inteiro.",
    aprofundamento: {
      texto: "Combine com o checklist diário e o planner semanal para consolidar a rotina completa.",
      linkText: "Abrir Criador de Listas",
      linkHref: "/criar-lista",
    },
    relacionados: ["checklist-diario", "planner-semanal", "rotina-da-casa"],
    faq: [{ q: "Preciso acordar de madrugada para ter rotina matinal?", a: "Não. O importante é ter um horário fixo e uma sequência consistente — pode ser às 6h ou às 8h." }],
  },
  {
    slug: "minimalismo-domestico",
    term: "Minimalismo Doméstico",
    category: "Organização",
    definition:
      "Minimalismo doméstico é o estilo de vida que reduz a quantidade de objetos, roupas e móveis em casa ao essencial e ao que traz valor real, eliminando excessos. Difere da simples arrumação porque foca em possuir menos, e não apenas em organizar mais itens em caixas e armários.",
    exemploPratico:
      "Uma pessoa aplica o método por cômodo, elimina duplicatas, doa roupas não usadas há um ano, mantém apenas louças e utensílios que usa e reduz decoração ao essencial.",
    exemploItens: ["Desapego por categoria: roupas, livros, papéis", "Regra de um item que entra, outro que sai", "Reduzir duplicatas de louças e utensílios", "Manter superfícies livres em cada cômodo"],
    porQueImporta:
      "Menos objetos em casa significam menos limpeza, menos manutenção e menos gasto com compras por impulso. Também reduz estresse visual e ansiedade, e libera espaço físico e mental para atividades mais importantes que ambientar e arrumar.",
    aprofundamento: {
      texto: "Combine com a organização doméstica e o inventário para começar a jornada minimalista de forma prática.",
      linkText: "Abrir Criador de Listas",
      linkHref: "/criar-lista",
    },
    relacionados: ["organizacao-domestica", "inventario-domestico", "organizacao-de-armario"],
    faq: [{ q: "Minimalismo significa viver com pouquíssimas coisas?", a: "Não. Significa viver com o que traz valor — o número é pessoal e varia para cada família." }],
  },
  {
    slug: "lista-de-metas-anuais",
    term: "Lista de Metas Anuais",
    category: "Produtividade",
    definition:
      "Lista de metas anuais é o conjunto de objetivos definidos no início do ano em áreas como saúde, carreira, finanças, relacionamentos e desenvolvimento pessoal. Escrita de forma específica e mensurável, ela orienta decisões ao longo do ano e serve como referência para revisões trimestrais e ajustes de rota.",
    exemploPratico:
      "Uma pessoa define 5 metas anuais divididas em áreas, quebra cada uma em ações trimestrais, revisa a cada 90 dias e ajusta o planejamento conforme a realidade do ano.",
    exemploItens: ["Metas por área: saúde, carreira, finanças", "Objetivos SMART: específico, mensurável, prazo", "Revisão trimestral com ajustes", "Registro de progresso mensal"],
    porQueImporta:
      "Sem metas escritas, o ano passa e a pessoa termina no mesmo lugar. Listas anuais bem estruturadas aumentam significativamente as chances de concluir objetivos importantes, transformam intenções em ações concretas e dão sensação de propósito ao longo dos 12 meses.",
    aprofundamento: {
      texto: "Combine com o planner semanal e o bullet journal para acompanhar as metas ao longo de todo o ano.",
      linkText: "Abrir Criador de Listas",
      linkHref: "/criar-lista",
    },
    relacionados: ["planner-semanal", "bullet-journal", "organizacao-financeira"],
    faq: [{ q: "Quantas metas colocar na lista anual?", a: "Entre 3 e 7 metas é ideal — muito mais dispersa energia e reduz taxa de conclusão." }],
  },
{
  "slug": "lista-de-compras-para-idosos",
  "term": "Lista de Compras para Idosos",
  "category": "Compras",
  "definition": "Lista de Compras para Idosos é uma lista organizada com foco em alimentação equilibrada, higiene e cuidados diários para a terceira idade. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras para idosos no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras para idosos bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras para idosos personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Lista Saudável",
    "linkHref": "/lista-saudavel"
  },
  "relacionados": [
    "lista-de-compras",
    "lista-de-higiene-pessoal",
    "lista-de-compras-para-diabeticos"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras para idosos?",
      "a": "Comece anotando tudo o que vier à cabeça sobre alimentação equilibrada, higiene e cuidados diários para a terceira idade, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras para idosos depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-para-estudantes",
  "term": "Lista de Compras para Estudantes",
  "category": "Compras",
  "definition": "Lista de Compras para Estudantes é uma lista organizada com foco em alimentos práticos, baratos e nutritivos para quem mora fora ou estuda em tempo integral. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras para estudantes no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras para estudantes bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras para estudantes personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista para Solteiro",
    "linkHref": "/lista-solteiro"
  },
  "relacionados": [
    "lista-para-morar-sozinho",
    "lista-de-compras",
    "lista-de-compras-para-cafe-da-manha"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras para estudantes?",
      "a": "Comece anotando tudo o que vier à cabeça sobre alimentos práticos, baratos e nutritivos para quem mora fora ou estuda em tempo integral, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras para estudantes depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-vegana",
  "term": "Lista de Compras Vegana",
  "category": "Compras",
  "definition": "Lista de Compras Vegana é uma lista organizada com foco em alimentos 100% de origem vegetal, proteínas alternativas e substitutos de laticínios. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras vegana no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras vegana bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras vegana personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista Saudável",
    "linkHref": "/lista-saudavel"
  },
  "relacionados": [
    "lista-de-compras-vegetariana",
    "lista-de-hortifruti",
    "lista-de-compras-saudavel"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras vegana?",
      "a": "Comece anotando tudo o que vier à cabeça sobre alimentos 100% de origem vegetal, proteínas alternativas e substitutos de laticínios, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras vegana depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-sem-gluten",
  "term": "Lista de Compras Sem Glúten",
  "category": "Compras",
  "definition": "Lista de Compras Sem Glúten é uma lista organizada com foco em produtos livres de trigo, cevada e centeio para celíacos e sensíveis. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras sem glúten no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras sem glúten bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras sem glúten personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista Saudável",
    "linkHref": "/lista-saudavel"
  },
  "relacionados": [
    "lista-de-compras-saudavel",
    "lista-de-hortifruti",
    "lista-de-compras-low-carb"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras sem glúten?",
      "a": "Comece anotando tudo o que vier à cabeça sobre produtos livres de trigo, cevada e centeio para celíacos e sensíveis, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras sem glúten depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-sem-lactose",
  "term": "Lista de Compras Sem Lactose",
  "category": "Compras",
  "definition": "Lista de Compras Sem Lactose é uma lista organizada com foco em substitutos vegetais do leite, queijos e produtos zero lactose. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras sem lactose no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras sem lactose bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras sem lactose personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista Saudável",
    "linkHref": "/lista-saudavel"
  },
  "relacionados": [
    "lista-de-compras-vegana",
    "lista-de-compras-saudavel",
    "lista-de-hortifruti"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras sem lactose?",
      "a": "Comece anotando tudo o que vier à cabeça sobre substitutos vegetais do leite, queijos e produtos zero lactose, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras sem lactose depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-para-diabeticos",
  "term": "Lista de Compras para Diabéticos",
  "category": "Compras",
  "definition": "Lista de Compras para Diabéticos é uma lista organizada com foco em alimentos com baixo índice glicêmico e zero açúcar refinado. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras para diabéticos no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras para diabéticos bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras para diabéticos personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista Saudável",
    "linkHref": "/lista-saudavel"
  },
  "relacionados": [
    "lista-de-compras-low-carb",
    "lista-de-compras-saudavel",
    "cardapio-semanal"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras para diabéticos?",
      "a": "Comece anotando tudo o que vier à cabeça sobre alimentos com baixo índice glicêmico e zero açúcar refinado, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras para diabéticos depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-para-hipertensos",
  "term": "Lista de Compras para Hipertensos",
  "category": "Compras",
  "definition": "Lista de Compras para Hipertensos é uma lista organizada com foco em alimentos com baixo sódio e ricos em potássio para controle da pressão. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras para hipertensos no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras para hipertensos bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras para hipertensos personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista Saudável",
    "linkHref": "/lista-saudavel"
  },
  "relacionados": [
    "lista-de-compras-saudavel",
    "lista-de-hortifruti",
    "cardapio-semanal"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras para hipertensos?",
      "a": "Comece anotando tudo o que vier à cabeça sobre alimentos com baixo sódio e ricos em potássio para controle da pressão, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras para hipertensos depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-para-gestantes",
  "term": "Lista de Compras para Gestantes",
  "category": "Compras",
  "definition": "Lista de Compras para Gestantes é uma lista organizada com foco em alimentos ricos em ácido fólico, ferro e cálcio para uma gravidez saudável. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras para gestantes no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras para gestantes bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras para gestantes personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista Saudável",
    "linkHref": "/lista-saudavel"
  },
  "relacionados": [
    "lista-de-compras-para-bebe",
    "lista-de-compras-saudavel",
    "lista-de-hortifruti"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras para gestantes?",
      "a": "Comece anotando tudo o que vier à cabeça sobre alimentos ricos em ácido fólico, ferro e cálcio para uma gravidez saudável, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras para gestantes depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-quinzenal",
  "term": "Lista de Compras Quinzenal",
  "category": "Compras",
  "definition": "Lista de Compras Quinzenal é uma lista organizada com foco em planejamento de compras a cada 15 dias com foco em economia e variedade. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras quinzenal no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras quinzenal bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras quinzenal personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista Mensal",
    "linkHref": "/lista-mensal"
  },
  "relacionados": [
    "lista-mensal-de-compras",
    "lista-de-compras-semanal",
    "compras-do-mes"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras quinzenal?",
      "a": "Comece anotando tudo o que vier à cabeça sobre planejamento de compras a cada 15 dias com foco em economia e variedade, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras quinzenal depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-para-4-pessoas",
  "term": "Lista de Compras para 4 Pessoas",
  "category": "Compras",
  "definition": "Lista de Compras para 4 Pessoas é uma lista organizada com foco em quantidades e itens dimensionados para uma família de quatro. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras para 4 pessoas no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras para 4 pessoas bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras para 4 pessoas personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista para 2 Pessoas",
    "linkHref": "/lista-duas-pessoas"
  },
  "relacionados": [
    "lista-de-compras-para-familia-grande",
    "compras-do-mes",
    "cardapio-semanal"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras para 4 pessoas?",
      "a": "Comece anotando tudo o que vier à cabeça sobre quantidades e itens dimensionados para uma família de quatro, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras para 4 pessoas depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-para-familia-grande",
  "term": "Lista de Compras para Família Grande",
  "category": "Compras",
  "definition": "Lista de Compras para Família Grande é uma lista organizada com foco em volumes maiores, atacado e planejamento para 5+ pessoas. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras para família grande no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras para família grande bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras para família grande personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista Mensal",
    "linkHref": "/lista-mensal"
  },
  "relacionados": [
    "atacarejo",
    "lista-mensal-de-compras",
    "lista-de-compras-para-4-pessoas"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras para família grande?",
      "a": "Comece anotando tudo o que vier à cabeça sobre volumes maiores, atacado e planejamento para 5+ pessoas, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras para família grande depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-congelados",
  "term": "Lista de Congelados",
  "category": "Compras",
  "definition": "Lista de Congelados é uma lista organizada com foco em carnes, legumes, refeições prontas e sobremesas para o freezer. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de congelados no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de congelados bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de congelados personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista de Supermercado",
    "linkHref": "/lista-supermercado"
  },
  "relacionados": [
    "lista-de-compras",
    "marmita-semanal",
    "lista-de-hortifruti"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de congelados?",
      "a": "Comece anotando tudo o que vier à cabeça sobre carnes, legumes, refeições prontas e sobremesas para o freezer, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de congelados depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-bebidas-para-festa",
  "term": "Lista de Bebidas para Festa",
  "category": "Compras",
  "definition": "Lista de Bebidas para Festa é uma lista organizada com foco em cálculo de refrigerantes, sucos, cervejas e destilados por convidado. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de bebidas para festa no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de bebidas para festa bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de bebidas para festa personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-compras-para-churrasco",
    "lista-de-compras-para-festa-infantil",
    "lista-de-compras-para-reveillon"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de bebidas para festa?",
      "a": "Comece anotando tudo o que vier à cabeça sobre cálculo de refrigerantes, sucos, cervejas e destilados por convidado, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de bebidas para festa depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-pet-shop",
  "term": "Lista de Compras Pet Shop",
  "category": "Compras",
  "definition": "Lista de Compras Pet Shop é uma lista organizada com foco em ração, higiene, brinquedos e acessórios para cães e gatos. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras pet shop no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras pet shop bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras pet shop personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-compras",
    "lista-de-produtos-de-limpeza",
    "organizacao-domestica"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras pet shop?",
      "a": "Comece anotando tudo o que vier à cabeça sobre ração, higiene, brinquedos e acessórios para cães e gatos, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras pet shop depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-para-viagem",
  "term": "Lista de Compras para Viagem",
  "category": "Compras",
  "definition": "Lista de Compras para Viagem é uma lista organizada com foco em lanches, kits de higiene e itens práticos para viagens de carro ou avião. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras para viagem no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras para viagem bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras para viagem personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "checklist-de-viagem",
    "lista-de-compras-para-camping",
    "kit-primeiros-socorros-casa"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras para viagem?",
      "a": "Comece anotando tudo o que vier à cabeça sobre lanches, kits de higiene e itens práticos para viagens de carro ou avião, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras para viagem depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-para-camping",
  "term": "Lista de Compras para Camping",
  "category": "Compras",
  "definition": "Lista de Compras para Camping é uma lista organizada com foco em alimentos não perecíveis, utensílios e equipamentos para acampar. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras para camping no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras para camping bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras para camping personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "checklist-de-viagem",
    "lista-de-compras-para-viagem",
    "kit-primeiros-socorros-casa"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras para camping?",
      "a": "Comece anotando tudo o que vier à cabeça sobre alimentos não perecíveis, utensílios e equipamentos para acampar, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras para camping depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-de-natal",
  "term": "Lista de Compras de Natal",
  "category": "Compras",
  "definition": "Lista de Compras de Natal é uma lista organizada com foco em ceia, presentes, decoração e itens típicos das festas de fim de ano. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras de natal no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras de natal bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras de natal personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-compras-de-ano-novo",
    "lista-de-compras-para-reveillon",
    "lista-de-compras"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras de natal?",
      "a": "Comece anotando tudo o que vier à cabeça sobre ceia, presentes, decoração e itens típicos das festas de fim de ano, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras de natal depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-de-ano-novo",
  "term": "Lista de Compras de Ano Novo",
  "category": "Compras",
  "definition": "Lista de Compras de Ano Novo é uma lista organizada com foco em itens tradicionais para a virada, roupas brancas e comidas da sorte. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras de ano novo no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras de ano novo bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras de ano novo personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-compras-de-natal",
    "lista-de-compras-para-reveillon",
    "lista-de-metas-anuais"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras de ano novo?",
      "a": "Comece anotando tudo o que vier à cabeça sobre itens tradicionais para a virada, roupas brancas e comidas da sorte, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras de ano novo depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-de-pascoa",
  "term": "Lista de Compras de Páscoa",
  "category": "Compras",
  "definition": "Lista de Compras de Páscoa é uma lista organizada com foco em chocolates, peixes, bacalhau e itens para o almoço de família. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras de páscoa no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras de páscoa bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras de páscoa personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-compras",
    "lista-de-compras-para-cafe-da-manha",
    "lista-de-hortifruti"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras de páscoa?",
      "a": "Comece anotando tudo o que vier à cabeça sobre chocolates, peixes, bacalhau e itens para o almoço de família, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras de páscoa depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-para-festa-junina",
  "term": "Lista de Compras para Festa Junina",
  "category": "Compras",
  "definition": "Lista de Compras para Festa Junina é uma lista organizada com foco em comidas típicas, bebidas quentes e decoração para arraiá. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras para festa junina no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras para festa junina bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras para festa junina personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-compras-para-festa-infantil",
    "lista-de-bebidas-para-festa",
    "lista-de-compras"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras para festa junina?",
      "a": "Comece anotando tudo o que vier à cabeça sobre comidas típicas, bebidas quentes e decoração para arraiá, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras para festa junina depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-para-reveillon",
  "term": "Lista de Compras para Réveillon",
  "category": "Compras",
  "definition": "Lista de Compras para Réveillon é uma lista organizada com foco em ceia, espumantes, roupas e itens de superstição para a virada. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras para réveillon no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de compras para réveillon bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras para réveillon personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-compras-de-ano-novo",
    "lista-de-compras-de-natal",
    "lista-de-bebidas-para-festa"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras para réveillon?",
      "a": "Comece anotando tudo o que vier à cabeça sobre ceia, espumantes, roupas e itens de superstição para a virada, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras para réveillon depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-padaria",
  "term": "Lista de Padaria",
  "category": "Compras",
  "definition": "Lista de Padaria é uma lista organizada com foco em pães, bolos, frios e itens básicos do café da manhã. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de padaria no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de padaria bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de padaria personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista de Supermercado",
    "linkHref": "/lista-supermercado"
  },
  "relacionados": [
    "lista-de-compras-para-cafe-da-manha",
    "lista-de-frios",
    "lista-de-compras"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de padaria?",
      "a": "Comece anotando tudo o que vier à cabeça sobre pães, bolos, frios e itens básicos do café da manhã, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de padaria depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-acougue",
  "term": "Lista de Açougue",
  "category": "Compras",
  "definition": "Lista de Açougue é uma lista organizada com foco em cortes bovinos, suínos, aves e peixes com quantidades por pessoa. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de açougue no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de açougue bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de açougue personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista de Supermercado",
    "linkHref": "/lista-supermercado"
  },
  "relacionados": [
    "lista-de-compras-para-churrasco",
    "lista-de-compras",
    "marmita-semanal"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de açougue?",
      "a": "Comece anotando tudo o que vier à cabeça sobre cortes bovinos, suínos, aves e peixes com quantidades por pessoa, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de açougue depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-frios",
  "term": "Lista de Frios",
  "category": "Compras",
  "definition": "Lista de Frios é uma lista organizada com foco em presuntos, queijos, embutidos e derivados para tábuas e sanduíches. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de frios no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma lista de frios bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de frios personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista de Supermercado",
    "linkHref": "/lista-supermercado"
  },
  "relacionados": [
    "lista-de-padaria",
    "lista-de-compras-para-cafe-da-manha",
    "lista-de-bebidas-para-festa"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de frios?",
      "a": "Comece anotando tudo o que vier à cabeça sobre presuntos, queijos, embutidos e derivados para tábuas e sanduíches, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de frios depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "black-friday-supermercado",
  "term": "Black Friday no Supermercado",
  "category": "Compras",
  "definition": "Black Friday no Supermercado é uma lista organizada com foco em estratégia de estoque de itens não perecíveis nas promoções de novembro. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a black friday no supermercado no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias por corredor do mercado",
    "Anotar quantidades e marcas preferidas",
    "Estimar orçamento antes de sair",
    "Marcar itens em promoção"
  ],
  "porQueImporta": "Sem uma black friday no supermercado bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua black friday no supermercado personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista Mensal",
    "linkHref": "/lista-mensal"
  },
  "relacionados": [
    "compra-economica",
    "atacarejo",
    "cupom-de-desconto-supermercado"
  ],
  "faq": [
    {
      "q": "Como começar uma black friday no supermercado?",
      "a": "Comece anotando tudo o que vier à cabeça sobre estratégia de estoque de itens não perecíveis nas promoções de novembro, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a black friday no supermercado depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-utensilios-de-cozinha",
  "term": "Lista de Utensílios de Cozinha",
  "category": "Casa Nova",
  "definition": "Lista de Utensílios de Cozinha é uma lista organizada com foco em panelas, talheres, potes e acessórios essenciais para cozinhar. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de utensílios de cozinha no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Listar por cômodo",
    "Separar essenciais e complementares",
    "Definir prioridades e prazos",
    "Comparar preços em 3 lojas"
  ],
  "porQueImporta": "Sem uma lista de utensílios de cozinha bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de utensílios de cozinha personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Casa Nova - Cozinha",
    "linkHref": "/lista-de-casa-nova-cozinha"
  },
  "relacionados": [
    "kit-cozinha-basica",
    "enxoval-de-cozinha",
    "lista-de-eletroportateis"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de utensílios de cozinha?",
      "a": "Comece anotando tudo o que vier à cabeça sobre panelas, talheres, potes e acessórios essenciais para cozinhar, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de utensílios de cozinha depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-moveis-para-cozinha",
  "term": "Lista de Móveis para Cozinha",
  "category": "Casa Nova",
  "definition": "Lista de Móveis para Cozinha é uma lista organizada com foco em armários, mesa, cadeiras e bancadas para montar a cozinha. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de móveis para cozinha no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Listar por cômodo",
    "Separar essenciais e complementares",
    "Definir prioridades e prazos",
    "Comparar preços em 3 lojas"
  ],
  "porQueImporta": "Sem uma lista de móveis para cozinha bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de móveis para cozinha personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Casa Nova - Cozinha",
    "linkHref": "/lista-de-casa-nova-cozinha"
  },
  "relacionados": [
    "lista-de-utensilios-de-cozinha",
    "lista-de-eletrodomesticos-essenciais",
    "lista-de-eletroportateis"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de móveis para cozinha?",
      "a": "Comece anotando tudo o que vier à cabeça sobre armários, mesa, cadeiras e bancadas para montar a cozinha, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de móveis para cozinha depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-moveis-para-banheiro",
  "term": "Lista de Móveis para Banheiro",
  "category": "Casa Nova",
  "definition": "Lista de Móveis para Banheiro é uma lista organizada com foco em gabinete, espelho, armários e organizadores para o banheiro. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de móveis para banheiro no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Listar por cômodo",
    "Separar essenciais e complementares",
    "Definir prioridades e prazos",
    "Comparar preços em 3 lojas"
  ],
  "porQueImporta": "Sem uma lista de móveis para banheiro bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de móveis para banheiro personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Casa Nova - Banheiro",
    "linkHref": "/lista-de-casa-nova-banheiro"
  },
  "relacionados": [
    "kit-banheiro-basico",
    "lista-de-higiene-pessoal",
    "organizacao-domestica"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de móveis para banheiro?",
      "a": "Comece anotando tudo o que vier à cabeça sobre gabinete, espelho, armários e organizadores para o banheiro, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de móveis para banheiro depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-moveis-para-escritorio",
  "term": "Lista de Móveis para Escritório",
  "category": "Casa Nova",
  "definition": "Lista de Móveis para Escritório é uma lista organizada com foco em mesa, cadeira ergonômica, estante e apoios para home office. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de móveis para escritório no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Listar por cômodo",
    "Separar essenciais e complementares",
    "Definir prioridades e prazos",
    "Comparar preços em 3 lojas"
  ],
  "porQueImporta": "Sem uma lista de móveis para escritório bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de móveis para escritório personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-moveis-para-quarto",
    "organizacao-de-documentos",
    "planner-semanal"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de móveis para escritório?",
      "a": "Comece anotando tudo o que vier à cabeça sobre mesa, cadeira ergonômica, estante e apoios para home office, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de móveis para escritório depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-decoracao",
  "term": "Lista de Decoração",
  "category": "Casa Nova",
  "definition": "Lista de Decoração é uma lista organizada com foco em quadros, tapetes, cortinas e itens decorativos por cômodo. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de decoração no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Listar por cômodo",
    "Separar essenciais e complementares",
    "Definir prioridades e prazos",
    "Comparar preços em 3 lojas"
  ],
  "porQueImporta": "Sem uma lista de decoração bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de decoração personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Casa Nova Completa",
    "linkHref": "/lista-de-casa-nova-completa"
  },
  "relacionados": [
    "enxoval-de-casa",
    "lista-de-varanda",
    "organizacao-domestica"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de decoração?",
      "a": "Comece anotando tudo o que vier à cabeça sobre quadros, tapetes, cortinas e itens decorativos por cômodo, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de decoração depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "checklist-de-reforma",
  "term": "Checklist de Reforma",
  "category": "Casa Nova",
  "definition": "Checklist de Reforma é uma lista organizada com foco em materiais, mão de obra e prazos para reformar sem estourar orçamento. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a checklist de reforma no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Listar por cômodo",
    "Separar essenciais e complementares",
    "Definir prioridades e prazos",
    "Comparar preços em 3 lojas"
  ],
  "porQueImporta": "Sem uma checklist de reforma bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua checklist de reforma personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "checklist-de-pintura",
    "lista-de-ferramentas-basicas",
    "checklist-de-apartamento-novo"
  ],
  "faq": [
    {
      "q": "Como começar uma checklist de reforma?",
      "a": "Comece anotando tudo o que vier à cabeça sobre materiais, mão de obra e prazos para reformar sem estourar orçamento, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a checklist de reforma depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "checklist-de-pintura",
  "term": "Checklist de Pintura",
  "category": "Casa Nova",
  "definition": "Checklist de Pintura é uma lista organizada com foco em tinta, rolos, pincéis e materiais para pintar cômodos. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a checklist de pintura no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Listar por cômodo",
    "Separar essenciais e complementares",
    "Definir prioridades e prazos",
    "Comparar preços em 3 lojas"
  ],
  "porQueImporta": "Sem uma checklist de pintura bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua checklist de pintura personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "checklist-de-reforma",
    "lista-de-ferramentas-basicas",
    "lista-de-decoracao"
  ],
  "faq": [
    {
      "q": "Como começar uma checklist de pintura?",
      "a": "Comece anotando tudo o que vier à cabeça sobre tinta, rolos, pincéis e materiais para pintar cômodos, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a checklist de pintura depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-ferramentas-basicas",
  "term": "Lista de Ferramentas Básicas",
  "category": "Casa Nova",
  "definition": "Lista de Ferramentas Básicas é uma lista organizada com foco em furadeira, chaves, alicates e ferramentas manuais indispensáveis. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de ferramentas básicas no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Listar por cômodo",
    "Separar essenciais e complementares",
    "Definir prioridades e prazos",
    "Comparar preços em 3 lojas"
  ],
  "porQueImporta": "Sem uma lista de ferramentas básicas bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de ferramentas básicas personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Área de Serviço",
    "linkHref": "/lista-de-casa-nova-area-de-servico"
  },
  "relacionados": [
    "checklist-de-reforma",
    "checklist-de-pintura",
    "lista-de-seguranca-residencial"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de ferramentas básicas?",
      "a": "Comece anotando tudo o que vier à cabeça sobre furadeira, chaves, alicates e ferramentas manuais indispensáveis, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de ferramentas básicas depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-eletroportateis",
  "term": "Lista de Eletroportáteis",
  "category": "Casa Nova",
  "definition": "Lista de Eletroportáteis é uma lista organizada com foco em liquidificador, batedeira, sanduicheira e pequenos eletros úteis. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de eletroportáteis no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Listar por cômodo",
    "Separar essenciais e complementares",
    "Definir prioridades e prazos",
    "Comparar preços em 3 lojas"
  ],
  "porQueImporta": "Sem uma lista de eletroportáteis bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de eletroportáteis personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Casa Nova - Cozinha",
    "linkHref": "/lista-de-casa-nova-cozinha"
  },
  "relacionados": [
    "lista-de-eletrodomesticos-essenciais",
    "lista-de-utensilios-de-cozinha",
    "kit-cozinha-basica"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de eletroportáteis?",
      "a": "Comece anotando tudo o que vier à cabeça sobre liquidificador, batedeira, sanduicheira e pequenos eletros úteis, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de eletroportáteis depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-utensilios-de-churrasco",
  "term": "Lista de Utensílios de Churrasco",
  "category": "Casa Nova",
  "definition": "Lista de Utensílios de Churrasco é uma lista organizada com foco em churrasqueira, espetos, facas e acessórios para o churrasco. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de utensílios de churrasco no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Listar por cômodo",
    "Separar essenciais e complementares",
    "Definir prioridades e prazos",
    "Comparar preços em 3 lojas"
  ],
  "porQueImporta": "Sem uma lista de utensílios de churrasco bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de utensílios de churrasco personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-compras-para-churrasco",
    "lista-de-varanda",
    "kit-cozinha-basica"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de utensílios de churrasco?",
      "a": "Comece anotando tudo o que vier à cabeça sobre churrasqueira, espetos, facas e acessórios para o churrasco, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de utensílios de churrasco depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-quarto-de-bebe",
  "term": "Lista de Quarto de Bebê",
  "category": "Casa Nova",
  "definition": "Lista de Quarto de Bebê é uma lista organizada com foco em berço, cômoda, decoração e itens de segurança para o quarto do bebê. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de quarto de bebê no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Listar por cômodo",
    "Separar essenciais e complementares",
    "Definir prioridades e prazos",
    "Comparar preços em 3 lojas"
  ],
  "porQueImporta": "Sem uma lista de quarto de bebê bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de quarto de bebê personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-compras-para-bebe",
    "enxoval-de-casa",
    "lista-de-moveis-para-quarto"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de quarto de bebê?",
      "a": "Comece anotando tudo o que vier à cabeça sobre berço, cômoda, decoração e itens de segurança para o quarto do bebê, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de quarto de bebê depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-varanda",
  "term": "Lista de Varanda",
  "category": "Casa Nova",
  "definition": "Lista de Varanda é uma lista organizada com foco em mesa, cadeiras, plantas e iluminação para varanda gourmet ou de descanso. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de varanda no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Listar por cômodo",
    "Separar essenciais e complementares",
    "Definir prioridades e prazos",
    "Comparar preços em 3 lojas"
  ],
  "porQueImporta": "Sem uma lista de varanda bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de varanda personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Casa Nova - Sala",
    "linkHref": "/lista-de-casa-nova-sala"
  },
  "relacionados": [
    "lista-de-decoracao",
    "lista-de-utensilios-de-churrasco",
    "lista-de-jardim"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de varanda?",
      "a": "Comece anotando tudo o que vier à cabeça sobre mesa, cadeiras, plantas e iluminação para varanda gourmet ou de descanso, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de varanda depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-jardim",
  "term": "Lista de Jardim",
  "category": "Casa Nova",
  "definition": "Lista de Jardim é uma lista organizada com foco em plantas, terra, vasos e ferramentas para montar o jardim. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de jardim no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Listar por cômodo",
    "Separar essenciais e complementares",
    "Definir prioridades e prazos",
    "Comparar preços em 3 lojas"
  ],
  "porQueImporta": "Sem uma lista de jardim bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de jardim personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-varanda",
    "lista-de-ferramentas-basicas",
    "lista-de-decoracao"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de jardim?",
      "a": "Comece anotando tudo o que vier à cabeça sobre plantas, terra, vasos e ferramentas para montar o jardim, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de jardim depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-lavanderia",
  "term": "Lista de Lavanderia",
  "category": "Casa Nova",
  "definition": "Lista de Lavanderia é uma lista organizada com foco em tanque, varal, produtos e organizadores para a área de serviço. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de lavanderia no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Listar por cômodo",
    "Separar essenciais e complementares",
    "Definir prioridades e prazos",
    "Comparar preços em 3 lojas"
  ],
  "porQueImporta": "Sem uma lista de lavanderia bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de lavanderia personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Área de Serviço",
    "linkHref": "/lista-de-casa-nova-area-de-servico"
  },
  "relacionados": [
    "kit-lavanderia",
    "lista-de-produtos-de-limpeza",
    "organizacao-domestica"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de lavanderia?",
      "a": "Comece anotando tudo o que vier à cabeça sobre tanque, varal, produtos e organizadores para a área de serviço, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de lavanderia depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-para-quitinete",
  "term": "Lista para Quitinete",
  "category": "Casa Nova",
  "definition": "Lista para Quitinete é uma lista organizada com foco em móveis compactos e utensílios essenciais para espaços de até 30 m². Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista para quitinete no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Listar por cômodo",
    "Separar essenciais e complementares",
    "Definir prioridades e prazos",
    "Comparar preços em 3 lojas"
  ],
  "porQueImporta": "Sem uma lista para quitinete bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista para quitinete personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista para Solteiro",
    "linkHref": "/lista-solteiro"
  },
  "relacionados": [
    "lista-para-morar-sozinho",
    "checklist-de-apartamento-novo",
    "kit-cozinha-basica"
  ],
  "faq": [
    {
      "q": "Como começar uma lista para quitinete?",
      "a": "Comece anotando tudo o que vier à cabeça sobre móveis compactos e utensílios essenciais para espaços de até 30 m², depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista para quitinete depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-para-republica",
  "term": "Lista para República",
  "category": "Casa Nova",
  "definition": "Lista para República é uma lista organizada com foco em itens compartilhados e individuais para dividir casa com amigos. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista para república no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Listar por cômodo",
    "Separar essenciais e complementares",
    "Definir prioridades e prazos",
    "Comparar preços em 3 lojas"
  ],
  "porQueImporta": "Sem uma lista para república bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista para república personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista para Solteiro",
    "linkHref": "/lista-solteiro"
  },
  "relacionados": [
    "lista-para-morar-sozinho",
    "lista-para-quitinete",
    "kit-cozinha-basica"
  ],
  "faq": [
    {
      "q": "Como começar uma lista para república?",
      "a": "Comece anotando tudo o que vier à cabeça sobre itens compartilhados e individuais para dividir casa com amigos, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista para república depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-para-casa-de-praia",
  "term": "Lista para Casa de Praia",
  "category": "Casa Nova",
  "definition": "Lista para Casa de Praia é uma lista organizada com foco em utensílios, roupas de cama e itens específicos para casas de veraneio. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista para casa de praia no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Listar por cômodo",
    "Separar essenciais e complementares",
    "Definir prioridades e prazos",
    "Comparar preços em 3 lojas"
  ],
  "porQueImporta": "Sem uma lista para casa de praia bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista para casa de praia personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Casa Nova Completa",
    "linkHref": "/lista-de-casa-nova-completa"
  },
  "relacionados": [
    "enxoval-de-casa",
    "lista-de-decoracao",
    "checklist-de-viagem"
  ],
  "faq": [
    {
      "q": "Como começar uma lista para casa de praia?",
      "a": "Comece anotando tudo o que vier à cabeça sobre utensílios, roupas de cama e itens específicos para casas de veraneio, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista para casa de praia depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-seguranca-residencial",
  "term": "Lista de Segurança Residencial",
  "category": "Casa Nova",
  "definition": "Lista de Segurança Residencial é uma lista organizada com foco em fechaduras, câmeras, alarmes e itens para proteger o lar. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de segurança residencial no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Listar por cômodo",
    "Separar essenciais e complementares",
    "Definir prioridades e prazos",
    "Comparar preços em 3 lojas"
  ],
  "porQueImporta": "Sem uma lista de segurança residencial bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de segurança residencial personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "kit-primeiros-socorros-casa",
    "lista-de-ferramentas-basicas",
    "checklist-de-apartamento-novo"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de segurança residencial?",
      "a": "Comece anotando tudo o que vier à cabeça sobre fechaduras, câmeras, alarmes e itens para proteger o lar, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de segurança residencial depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-lembrancinhas-de-casamento",
  "term": "Lista de Lembrancinhas de Casamento",
  "category": "Casamento",
  "definition": "Lista de Lembrancinhas de Casamento é uma lista organizada com foco em opções criativas e econômicas de lembrança para os convidados. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de lembrancinhas de casamento no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir data e local",
    "Listar fornecedores por categoria",
    "Controlar contratos e pagamentos",
    "Revisar a cada 30 dias"
  ],
  "porQueImporta": "Sem uma lista de lembrancinhas de casamento bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de lembrancinhas de casamento personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista de Casamento",
    "linkHref": "/lista-de-casamento"
  },
  "relacionados": [
    "lista-de-presentes-de-casamento",
    "bem-casado",
    "cerimonial-de-casamento"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de lembrancinhas de casamento?",
      "a": "Comece anotando tudo o que vier à cabeça sobre opções criativas e econômicas de lembrança para os convidados, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de lembrancinhas de casamento depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-musicas-para-casamento",
  "term": "Lista de Músicas para Casamento",
  "category": "Casamento",
  "definition": "Lista de Músicas para Casamento é uma lista organizada com foco em repertório para cerimônia, entrada da noiva e festa. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de músicas para casamento no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir data e local",
    "Listar fornecedores por categoria",
    "Controlar contratos e pagamentos",
    "Revisar a cada 30 dias"
  ],
  "porQueImporta": "Sem uma lista de músicas para casamento bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de músicas para casamento personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Checklist Completo",
    "linkHref": "/checklist-de-casamento-completo"
  },
  "relacionados": [
    "cronograma-de-casamento",
    "cerimonial-de-casamento",
    "checklist-de-casamento"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de músicas para casamento?",
      "a": "Comece anotando tudo o que vier à cabeça sobre repertório para cerimônia, entrada da noiva e festa, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de músicas para casamento depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-fotografo-casamento",
  "term": "Lista para Contratar Fotógrafo de Casamento",
  "category": "Casamento",
  "definition": "Lista para Contratar Fotógrafo de Casamento é uma lista organizada com foco em perguntas, pacotes, contratos e referências para escolher fotógrafo. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista para contratar fotógrafo de casamento no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir data e local",
    "Listar fornecedores por categoria",
    "Controlar contratos e pagamentos",
    "Revisar a cada 30 dias"
  ],
  "porQueImporta": "Sem uma lista para contratar fotógrafo de casamento bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista para contratar fotógrafo de casamento personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista de Fornecedores",
    "linkHref": "/lista-de-fornecedores-casamento"
  },
  "relacionados": [
    "lista-de-fornecedores",
    "orcamento-de-casamento",
    "checklist-de-casamento"
  ],
  "faq": [
    {
      "q": "Como começar uma lista para contratar fotógrafo de casamento?",
      "a": "Comece anotando tudo o que vier à cabeça sobre perguntas, pacotes, contratos e referências para escolher fotógrafo, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista para contratar fotógrafo de casamento depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-decoracao-de-casamento",
  "term": "Lista de Decoração de Casamento",
  "category": "Casamento",
  "definition": "Lista de Decoração de Casamento é uma lista organizada com foco em paleta, flores, mobiliário e ambientação da cerimônia e recepção. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de decoração de casamento no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir data e local",
    "Listar fornecedores por categoria",
    "Controlar contratos e pagamentos",
    "Revisar a cada 30 dias"
  ],
  "porQueImporta": "Sem uma lista de decoração de casamento bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de decoração de casamento personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista de Casamento",
    "linkHref": "/lista-de-casamento"
  },
  "relacionados": [
    "cerimonial-de-casamento",
    "lista-de-fornecedores",
    "cronograma-de-casamento"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de decoração de casamento?",
      "a": "Comece anotando tudo o que vier à cabeça sobre paleta, flores, mobiliário e ambientação da cerimônia e recepção, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de decoração de casamento depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-buffet-casamento",
  "term": "Lista de Buffet de Casamento",
  "category": "Casamento",
  "definition": "Lista de Buffet de Casamento é uma lista organizada com foco em cardápio, cálculo de porções e degustação com o buffet. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de buffet de casamento no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir data e local",
    "Listar fornecedores por categoria",
    "Controlar contratos e pagamentos",
    "Revisar a cada 30 dias"
  ],
  "porQueImporta": "Sem uma lista de buffet de casamento bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de buffet de casamento personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista de Casamento",
    "linkHref": "/lista-de-casamento"
  },
  "relacionados": [
    "orcamento-de-casamento",
    "lista-de-fornecedores",
    "cerimonial-de-casamento"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de buffet de casamento?",
      "a": "Comece anotando tudo o que vier à cabeça sobre cardápio, cálculo de porções e degustação com o buffet, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de buffet de casamento depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "cerimonia-religiosa-casamento",
  "term": "Cerimônia Religiosa de Casamento",
  "category": "Casamento",
  "definition": "Cerimônia Religiosa de Casamento é uma lista organizada com foco em documentação, cursos de noivos e ritos para casar na igreja. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a cerimônia religiosa de casamento no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir data e local",
    "Listar fornecedores por categoria",
    "Controlar contratos e pagamentos",
    "Revisar a cada 30 dias"
  ],
  "porQueImporta": "Sem uma cerimônia religiosa de casamento bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua cerimônia religiosa de casamento personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Casamento Tradicional",
    "linkHref": "/lista-de-casamento-tradicional"
  },
  "relacionados": [
    "casamento-civil",
    "checklist-de-casamento",
    "padrinhos-de-casamento"
  ],
  "faq": [
    {
      "q": "Como começar uma cerimônia religiosa de casamento?",
      "a": "Comece anotando tudo o que vier à cabeça sobre documentação, cursos de noivos e ritos para casar na igreja, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a cerimônia religiosa de casamento depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "bodas-de-casamento",
  "term": "Bodas de Casamento",
  "category": "Casamento",
  "definition": "Bodas de Casamento é uma lista organizada com foco em significado e comemoração de cada aniversário de casamento. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a bodas de casamento no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir data e local",
    "Listar fornecedores por categoria",
    "Controlar contratos e pagamentos",
    "Revisar a cada 30 dias"
  ],
  "porQueImporta": "Sem uma bodas de casamento bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua bodas de casamento personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "checklist-lua-de-mel",
    "cronograma-de-casamento",
    "lista-de-presentes-de-casamento"
  ],
  "faq": [
    {
      "q": "Como começar uma bodas de casamento?",
      "a": "Comece anotando tudo o que vier à cabeça sobre significado e comemoração de cada aniversário de casamento, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a bodas de casamento depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "despedida-de-solteira",
  "term": "Despedida de Solteira",
  "category": "Casamento",
  "definition": "Despedida de Solteira é uma lista organizada com foco em roteiro, decoração, brincadeiras e presentes para a noiva. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a despedida de solteira no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir data e local",
    "Listar fornecedores por categoria",
    "Controlar contratos e pagamentos",
    "Revisar a cada 30 dias"
  ],
  "porQueImporta": "Sem uma despedida de solteira bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua despedida de solteira personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-cha-de-panela",
    "cronograma-de-casamento",
    "checklist-de-casamento"
  ],
  "faq": [
    {
      "q": "Como começar uma despedida de solteira?",
      "a": "Comece anotando tudo o que vier à cabeça sobre roteiro, decoração, brincadeiras e presentes para a noiva, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a despedida de solteira depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "despedida-de-solteiro",
  "term": "Despedida de Solteiro",
  "category": "Casamento",
  "definition": "Despedida de Solteiro é uma lista organizada com foco em viagem, festa e atividades para o noivo antes do casamento. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a despedida de solteiro no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir data e local",
    "Listar fornecedores por categoria",
    "Controlar contratos e pagamentos",
    "Revisar a cada 30 dias"
  ],
  "porQueImporta": "Sem uma despedida de solteiro bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua despedida de solteiro personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-cha-bar",
    "cronograma-de-casamento",
    "checklist-de-casamento"
  ],
  "faq": [
    {
      "q": "Como começar uma despedida de solteiro?",
      "a": "Comece anotando tudo o que vier à cabeça sobre viagem, festa e atividades para o noivo antes do casamento, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a despedida de solteiro depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "noivado",
  "term": "Noivado",
  "category": "Casamento",
  "definition": "Noivado é uma lista organizada com foco em cerimônia íntima que oficializa o compromisso antes do casamento. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a noivado no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir data e local",
    "Listar fornecedores por categoria",
    "Controlar contratos e pagamentos",
    "Revisar a cada 30 dias"
  ],
  "porQueImporta": "Sem uma noivado bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua noivado personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Casamento 12 Meses Antes",
    "linkHref": "/lista-de-casamento-12-meses-antes"
  },
  "relacionados": [
    "cronograma-de-casamento",
    "padrinhos-de-casamento",
    "save-the-date"
  ],
  "faq": [
    {
      "q": "Como começar uma noivado?",
      "a": "Comece anotando tudo o que vier à cabeça sobre cerimônia íntima que oficializa o compromisso antes do casamento, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a noivado depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "chuveiro-de-panela",
  "term": "Chuveiro de Panela",
  "category": "Casamento",
  "definition": "Chuveiro de Panela é uma lista organizada com foco em versão descontraída do chá de panela com formato de festa surpresa. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a chuveiro de panela no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir data e local",
    "Listar fornecedores por categoria",
    "Controlar contratos e pagamentos",
    "Revisar a cada 30 dias"
  ],
  "porQueImporta": "Sem uma chuveiro de panela bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua chuveiro de panela personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista de Casamento",
    "linkHref": "/lista-de-casamento"
  },
  "relacionados": [
    "lista-de-cha-de-panela",
    "lista-de-cha-de-cozinha",
    "despedida-de-solteira"
  ],
  "faq": [
    {
      "q": "Como começar uma chuveiro de panela?",
      "a": "Comece anotando tudo o que vier à cabeça sobre versão descontraída do chá de panela com formato de festa surpresa, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a chuveiro de panela depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-presentes-loja-online",
  "term": "Lista de Presentes em Loja Online",
  "category": "Casamento",
  "definition": "Lista de Presentes em Loja Online é uma lista organizada com foco em criar e divulgar a lista de casamento em lojas virtuais. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de presentes em loja online no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir data e local",
    "Listar fornecedores por categoria",
    "Controlar contratos e pagamentos",
    "Revisar a cada 30 dias"
  ],
  "porQueImporta": "Sem uma lista de presentes em loja online bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de presentes em loja online personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista de Casamento",
    "linkHref": "/lista-de-casamento"
  },
  "relacionados": [
    "lista-de-presentes-de-casamento",
    "rsvp-de-casamento",
    "save-the-date"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de presentes em loja online?",
      "a": "Comece anotando tudo o que vier à cabeça sobre criar e divulgar a lista de casamento em lojas virtuais, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de presentes em loja online depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-documentos-casamento",
  "term": "Lista de Documentos para Casamento",
  "category": "Casamento",
  "definition": "Lista de Documentos para Casamento é uma lista organizada com foco em RG, certidões, comprovantes e prazos no cartório. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de documentos para casamento no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir data e local",
    "Listar fornecedores por categoria",
    "Controlar contratos e pagamentos",
    "Revisar a cada 30 dias"
  ],
  "porQueImporta": "Sem uma lista de documentos para casamento bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de documentos para casamento personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Casamento 3 Meses Antes",
    "linkHref": "/lista-de-casamento-3-meses-antes"
  },
  "relacionados": [
    "casamento-civil",
    "cerimonia-religiosa-casamento",
    "checklist-de-casamento"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de documentos para casamento?",
      "a": "Comece anotando tudo o que vier à cabeça sobre RG, certidões, comprovantes e prazos no cartório, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de documentos para casamento depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "votos-de-casamento",
  "term": "Votos de Casamento",
  "category": "Casamento",
  "definition": "Votos de Casamento é uma lista organizada com foco em estrutura, dicas e exemplos para escrever votos emocionantes. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a votos de casamento no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir data e local",
    "Listar fornecedores por categoria",
    "Controlar contratos e pagamentos",
    "Revisar a cada 30 dias"
  ],
  "porQueImporta": "Sem uma votos de casamento bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua votos de casamento personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Casamento 3 Meses Antes",
    "linkHref": "/lista-de-casamento-3-meses-antes"
  },
  "relacionados": [
    "cronograma-de-casamento",
    "cerimonial-de-casamento",
    "checklist-de-casamento"
  ],
  "faq": [
    {
      "q": "Como começar uma votos de casamento?",
      "a": "Comece anotando tudo o que vier à cabeça sobre estrutura, dicas e exemplos para escrever votos emocionantes, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a votos de casamento depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "destination-wedding",
  "term": "Destination Wedding",
  "category": "Casamento",
  "definition": "Destination Wedding é uma lista organizada com foco em casamento em destino turístico com convidados hospedados no local. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a destination wedding no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir data e local",
    "Listar fornecedores por categoria",
    "Controlar contratos e pagamentos",
    "Revisar a cada 30 dias"
  ],
  "porQueImporta": "Sem uma destination wedding bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua destination wedding personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Lista de Casamento",
    "linkHref": "/lista-de-casamento"
  },
  "relacionados": [
    "mini-wedding",
    "checklist-lua-de-mel",
    "cronograma-de-casamento"
  ],
  "faq": [
    {
      "q": "Como começar uma destination wedding?",
      "a": "Comece anotando tudo o que vier à cabeça sobre casamento em destino turístico com convidados hospedados no local, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a destination wedding depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "material-escolar-por-serie",
  "term": "Material Escolar por Série",
  "category": "Material Escolar",
  "definition": "Material Escolar por Série é uma lista organizada com foco em lista adaptada para cada ano do fundamental e médio. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a material escolar por série no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Conferir a lista da escola",
    "Reaproveitar do ano anterior",
    "Comparar preços por marca",
    "Etiquetar todos os itens"
  ],
  "porQueImporta": "Sem uma material escolar por série bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua material escolar por série personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Material Escolar",
    "linkHref": "/lista-de-material-escolar"
  },
  "relacionados": [
    "material-escolar-ensino-fundamental",
    "material-escolar-ensino-medio",
    "volta-as-aulas"
  ],
  "faq": [
    {
      "q": "Como começar uma material escolar por série?",
      "a": "Comece anotando tudo o que vier à cabeça sobre lista adaptada para cada ano do fundamental e médio, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a material escolar por série depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "material-escolar-supletivo",
  "term": "Material Escolar para Supletivo",
  "category": "Material Escolar",
  "definition": "Material Escolar para Supletivo é uma lista organizada com foco em itens práticos e enxutos para EJA e supletivo. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a material escolar para supletivo no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Conferir a lista da escola",
    "Reaproveitar do ano anterior",
    "Comparar preços por marca",
    "Etiquetar todos os itens"
  ],
  "porQueImporta": "Sem uma material escolar para supletivo bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua material escolar para supletivo personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Material Escolar",
    "linkHref": "/lista-de-material-escolar"
  },
  "relacionados": [
    "material-escolar-ensino-medio",
    "estojo-escolar-completo",
    "mochila-escolar"
  ],
  "faq": [
    {
      "q": "Como começar uma material escolar para supletivo?",
      "a": "Comece anotando tudo o que vier à cabeça sobre itens práticos e enxutos para EJA e supletivo, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a material escolar para supletivo depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "material-escolar-vestibular",
  "term": "Material para Vestibular e ENEM",
  "category": "Material Escolar",
  "definition": "Material para Vestibular e ENEM é uma lista organizada com foco em apostilas, canetas, cronômetros e itens para provas. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a material para vestibular e enem no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Conferir a lista da escola",
    "Reaproveitar do ano anterior",
    "Comparar preços por marca",
    "Etiquetar todos os itens"
  ],
  "porQueImporta": "Sem uma material para vestibular e enem bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua material para vestibular e enem personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "material-escolar-ensino-medio",
    "planner-semanal",
    "checklist-diario"
  ],
  "faq": [
    {
      "q": "Como começar uma material para vestibular e enem?",
      "a": "Comece anotando tudo o que vier à cabeça sobre apostilas, canetas, cronômetros e itens para provas, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a material para vestibular e enem depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "material-escolar-faculdade",
  "term": "Material Escolar para Faculdade",
  "category": "Material Escolar",
  "definition": "Material Escolar para Faculdade é uma lista organizada com foco em cadernos universitários, notebook, softwares e acessórios. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a material escolar para faculdade no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Conferir a lista da escola",
    "Reaproveitar do ano anterior",
    "Comparar preços por marca",
    "Etiquetar todos os itens"
  ],
  "porQueImporta": "Sem uma material escolar para faculdade bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua material escolar para faculdade personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "material-escolar-ensino-medio",
    "lista-de-papelaria",
    "organizacao-de-documentos"
  ],
  "faq": [
    {
      "q": "Como começar uma material escolar para faculdade?",
      "a": "Comece anotando tudo o que vier à cabeça sobre cadernos universitários, notebook, softwares e acessórios, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a material escolar para faculdade depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "kit-arte-escolar",
  "term": "Kit de Arte Escolar",
  "category": "Material Escolar",
  "definition": "Kit de Arte Escolar é uma lista organizada com foco em tintas, pincéis, papéis e materiais para aulas de artes. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a kit de arte escolar no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Conferir a lista da escola",
    "Reaproveitar do ano anterior",
    "Comparar preços por marca",
    "Etiquetar todos os itens"
  ],
  "porQueImporta": "Sem uma kit de arte escolar bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua kit de arte escolar personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Material Escolar",
    "linkHref": "/lista-de-material-escolar"
  },
  "relacionados": [
    "kit-alfabetizacao",
    "material-escolar-educacao-infantil",
    "lista-de-papelaria"
  ],
  "faq": [
    {
      "q": "Como começar uma kit de arte escolar?",
      "a": "Comece anotando tudo o que vier à cabeça sobre tintas, pincéis, papéis e materiais para aulas de artes, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a kit de arte escolar depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "kit-ciencias-escolar",
  "term": "Kit de Ciências Escolar",
  "category": "Material Escolar",
  "definition": "Kit de Ciências Escolar é uma lista organizada com foco em lupa, kit de experimentos e livros complementares. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a kit de ciências escolar no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Conferir a lista da escola",
    "Reaproveitar do ano anterior",
    "Comparar preços por marca",
    "Etiquetar todos os itens"
  ],
  "porQueImporta": "Sem uma kit de ciências escolar bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua kit de ciências escolar personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Material Escolar",
    "linkHref": "/lista-de-material-escolar"
  },
  "relacionados": [
    "material-escolar-ensino-fundamental",
    "livros-didaticos",
    "kit-matematica-escolar"
  ],
  "faq": [
    {
      "q": "Como começar uma kit de ciências escolar?",
      "a": "Comece anotando tudo o que vier à cabeça sobre lupa, kit de experimentos e livros complementares, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a kit de ciências escolar depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "kit-matematica-escolar",
  "term": "Kit de Matemática Escolar",
  "category": "Material Escolar",
  "definition": "Kit de Matemática Escolar é uma lista organizada com foco em calculadora, compasso, régua e materiais para exatas. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a kit de matemática escolar no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Conferir a lista da escola",
    "Reaproveitar do ano anterior",
    "Comparar preços por marca",
    "Etiquetar todos os itens"
  ],
  "porQueImporta": "Sem uma kit de matemática escolar bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua kit de matemática escolar personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Material Escolar",
    "linkHref": "/lista-de-material-escolar"
  },
  "relacionados": [
    "material-escolar-ensino-fundamental",
    "material-escolar-ensino-medio",
    "estojo-escolar-completo"
  ],
  "faq": [
    {
      "q": "Como começar uma kit de matemática escolar?",
      "a": "Comece anotando tudo o que vier à cabeça sobre calculadora, compasso, régua e materiais para exatas, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a kit de matemática escolar depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "material-escolar-reutilizavel",
  "term": "Material Escolar Reutilizável",
  "category": "Material Escolar",
  "definition": "Material Escolar Reutilizável é uma lista organizada com foco em estratégia sustentável de aproveitar itens do ano anterior. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a material escolar reutilizável no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Conferir a lista da escola",
    "Reaproveitar do ano anterior",
    "Comparar preços por marca",
    "Etiquetar todos os itens"
  ],
  "porQueImporta": "Sem uma material escolar reutilizável bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua material escolar reutilizável personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Material Escolar",
    "linkHref": "/lista-de-material-escolar"
  },
  "relacionados": [
    "material-escolar-barato",
    "volta-as-aulas",
    "organizacao-de-mochila"
  ],
  "faq": [
    {
      "q": "Como começar uma material escolar reutilizável?",
      "a": "Comece anotando tudo o que vier à cabeça sobre estratégia sustentável de aproveitar itens do ano anterior, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a material escolar reutilizável depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-livros-paradidaticos",
  "term": "Lista de Livros Paradidáticos",
  "category": "Material Escolar",
  "definition": "Lista de Livros Paradidáticos é uma lista organizada com foco em leituras complementares solicitadas pela escola por bimestre. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de livros paradidáticos no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Conferir a lista da escola",
    "Reaproveitar do ano anterior",
    "Comparar preços por marca",
    "Etiquetar todos os itens"
  ],
  "porQueImporta": "Sem uma lista de livros paradidáticos bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de livros paradidáticos personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Material Escolar",
    "linkHref": "/lista-de-material-escolar"
  },
  "relacionados": [
    "livros-didaticos",
    "material-escolar-ensino-fundamental",
    "organizacao-de-livros"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de livros paradidáticos?",
      "a": "Comece anotando tudo o que vier à cabeça sobre leituras complementares solicitadas pela escola por bimestre, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de livros paradidáticos depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "checklist-primeiro-dia-aula",
  "term": "Checklist do Primeiro Dia de Aula",
  "category": "Material Escolar",
  "definition": "Checklist do Primeiro Dia de Aula é uma lista organizada com foco em uniforme, lanche, materiais e emocional para o primeiro dia. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a checklist do primeiro dia de aula no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Conferir a lista da escola",
    "Reaproveitar do ano anterior",
    "Comparar preços por marca",
    "Etiquetar todos os itens"
  ],
  "porQueImporta": "Sem uma checklist do primeiro dia de aula bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua checklist do primeiro dia de aula personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Ver Material Escolar",
    "linkHref": "/lista-de-material-escolar"
  },
  "relacionados": [
    "volta-as-aulas",
    "lancheira-escolar",
    "uniforme-escolar"
  ],
  "faq": [
    {
      "q": "Como começar uma checklist do primeiro dia de aula?",
      "a": "Comece anotando tudo o que vier à cabeça sobre uniforme, lanche, materiais e emocional para o primeiro dia, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a checklist do primeiro dia de aula depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "organizacao-por-comodo",
  "term": "Organização por Cômodo",
  "category": "Organização",
  "definition": "Organização por Cômodo é uma lista organizada com foco em método de arrumar a casa um ambiente por vez. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a organização por cômodo no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias",
    "Descartar o que não usa",
    "Etiquetar potes e caixas",
    "Reservar 15 minutos por dia"
  ],
  "porQueImporta": "Sem uma organização por cômodo bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua organização por cômodo personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "organizacao-domestica",
    "rotina-da-casa",
    "calendario-de-limpeza"
  ],
  "faq": [
    {
      "q": "Como começar uma organização por cômodo?",
      "a": "Comece anotando tudo o que vier à cabeça sobre método de arrumar a casa um ambiente por vez, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a organização por cômodo depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "metodo-konmari",
  "term": "Método KonMari",
  "category": "Organização",
  "definition": "Método KonMari é uma lista organizada com foco em técnica de Marie Kondo para descartar e organizar por categoria. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a método konmari no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias",
    "Descartar o que não usa",
    "Etiquetar potes e caixas",
    "Reservar 15 minutos por dia"
  ],
  "porQueImporta": "Sem uma método konmari bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua método konmari personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "minimalismo-domestico",
    "metodo-flylady",
    "organizacao-de-armario"
  ],
  "faq": [
    {
      "q": "Como começar uma método konmari?",
      "a": "Comece anotando tudo o que vier à cabeça sobre técnica de Marie Kondo para descartar e organizar por categoria, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a método konmari depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "metodo-flylady",
  "term": "Método FlyLady",
  "category": "Organização",
  "definition": "Método FlyLady é uma lista organizada com foco em sistema de rotinas curtas em zonas para manter a casa em ordem. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a método flylady no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias",
    "Descartar o que não usa",
    "Etiquetar potes e caixas",
    "Reservar 15 minutos por dia"
  ],
  "porQueImporta": "Sem uma método flylady bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua método flylady personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "rotina-da-casa",
    "calendario-de-limpeza",
    "organizacao-domestica"
  ],
  "faq": [
    {
      "q": "Como começar uma método flylady?",
      "a": "Comece anotando tudo o que vier à cabeça sobre sistema de rotinas curtas em zonas para manter a casa em ordem, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a método flylady depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "organizacao-de-brinquedos",
  "term": "Organização de Brinquedos",
  "category": "Organização",
  "definition": "Organização de Brinquedos é uma lista organizada com foco em caixas, categorias e rodízio para reduzir bagunça infantil. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a organização de brinquedos no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias",
    "Descartar o que não usa",
    "Etiquetar potes e caixas",
    "Reservar 15 minutos por dia"
  ],
  "porQueImporta": "Sem uma organização de brinquedos bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua organização de brinquedos personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "organizacao-domestica",
    "minimalismo-domestico",
    "organizacao-por-comodo"
  ],
  "faq": [
    {
      "q": "Como começar uma organização de brinquedos?",
      "a": "Comece anotando tudo o que vier à cabeça sobre caixas, categorias e rodízio para reduzir bagunça infantil, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a organização de brinquedos depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "organizacao-de-documentos",
  "term": "Organização de Documentos",
  "category": "Organização",
  "definition": "Organização de Documentos é uma lista organizada com foco em pastas físicas e digitais para contas, contratos e certidões. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a organização de documentos no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias",
    "Descartar o que não usa",
    "Etiquetar potes e caixas",
    "Reservar 15 minutos por dia"
  ],
  "porQueImporta": "Sem uma organização de documentos bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua organização de documentos personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "inventario-domestico",
    "organizacao-financeira",
    "organizacao-domestica"
  ],
  "faq": [
    {
      "q": "Como começar uma organização de documentos?",
      "a": "Comece anotando tudo o que vier à cabeça sobre pastas físicas e digitais para contas, contratos e certidões, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a organização de documentos depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "organizacao-de-livros",
  "term": "Organização de Livros",
  "category": "Organização",
  "definition": "Organização de Livros é uma lista organizada com foco em estante por gênero, autor ou cor para biblioteca doméstica. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a organização de livros no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias",
    "Descartar o que não usa",
    "Etiquetar potes e caixas",
    "Reservar 15 minutos por dia"
  ],
  "porQueImporta": "Sem uma organização de livros bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua organização de livros personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "organizacao-domestica",
    "lista-de-livros-para-ler",
    "minimalismo-domestico"
  ],
  "faq": [
    {
      "q": "Como começar uma organização de livros?",
      "a": "Comece anotando tudo o que vier à cabeça sobre estante por gênero, autor ou cor para biblioteca doméstica, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a organização de livros depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "organizacao-de-geladeira",
  "term": "Organização de Geladeira",
  "category": "Organização",
  "definition": "Organização de Geladeira é uma lista organizada com foco em distribuição por prateleira para conservar melhor os alimentos. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a organização de geladeira no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias",
    "Descartar o que não usa",
    "Etiquetar potes e caixas",
    "Reservar 15 minutos por dia"
  ],
  "porQueImporta": "Sem uma organização de geladeira bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua organização de geladeira personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "despensa-organizada",
    "desperdicio-de-alimentos",
    "planejamento-de-cardapio"
  ],
  "faq": [
    {
      "q": "Como começar uma organização de geladeira?",
      "a": "Comece anotando tudo o que vier à cabeça sobre distribuição por prateleira para conservar melhor os alimentos, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a organização de geladeira depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "organizacao-de-despensa",
  "term": "Organização de Despensa",
  "category": "Organização",
  "definition": "Organização de Despensa é uma lista organizada com foco em potes, etiquetas e categorias para localizar tudo rapidamente. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a organização de despensa no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias",
    "Descartar o que não usa",
    "Etiquetar potes e caixas",
    "Reservar 15 minutos por dia"
  ],
  "porQueImporta": "Sem uma organização de despensa bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua organização de despensa personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "despensa-organizada",
    "inventario-domestico",
    "planejamento-de-cardapio"
  ],
  "faq": [
    {
      "q": "Como começar uma organização de despensa?",
      "a": "Comece anotando tudo o que vier à cabeça sobre potes, etiquetas e categorias para localizar tudo rapidamente, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a organização de despensa depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "organizacao-de-sapatos",
  "term": "Organização de Sapatos",
  "category": "Organização",
  "definition": "Organização de Sapatos é uma lista organizada com foco em sapateiras, caixas e critérios para armazenar calçados. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a organização de sapatos no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias",
    "Descartar o que não usa",
    "Etiquetar potes e caixas",
    "Reservar 15 minutos por dia"
  ],
  "porQueImporta": "Sem uma organização de sapatos bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua organização de sapatos personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "organizacao-de-armario",
    "organizacao-de-guarda-roupa",
    "minimalismo-domestico"
  ],
  "faq": [
    {
      "q": "Como começar uma organização de sapatos?",
      "a": "Comece anotando tudo o que vier à cabeça sobre sapateiras, caixas e critérios para armazenar calçados, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a organização de sapatos depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "organizacao-de-bolsas",
  "term": "Organização de Bolsas",
  "category": "Organização",
  "definition": "Organização de Bolsas é uma lista organizada com foco em suportes, enchimentos e categorização para preservar bolsas. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a organização de bolsas no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias",
    "Descartar o que não usa",
    "Etiquetar potes e caixas",
    "Reservar 15 minutos por dia"
  ],
  "porQueImporta": "Sem uma organização de bolsas bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua organização de bolsas personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "organizacao-de-armario",
    "organizacao-de-guarda-roupa",
    "organizacao-de-sapatos"
  ],
  "faq": [
    {
      "q": "Como começar uma organização de bolsas?",
      "a": "Comece anotando tudo o que vier à cabeça sobre suportes, enchimentos e categorização para preservar bolsas, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a organização de bolsas depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "organizacao-de-gavetas",
  "term": "Organização de Gavetas",
  "category": "Organização",
  "definition": "Organização de Gavetas é uma lista organizada com foco em divisórias e categorias para transformar gavetas caóticas. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a organização de gavetas no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias",
    "Descartar o que não usa",
    "Etiquetar potes e caixas",
    "Reservar 15 minutos por dia"
  ],
  "porQueImporta": "Sem uma organização de gavetas bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua organização de gavetas personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "organizacao-de-armario",
    "organizacao-domestica",
    "organizacao-por-comodo"
  ],
  "faq": [
    {
      "q": "Como começar uma organização de gavetas?",
      "a": "Comece anotando tudo o que vier à cabeça sobre divisórias e categorias para transformar gavetas caóticas, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a organização de gavetas depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "organizacao-de-cabos",
  "term": "Organização de Cabos",
  "category": "Organização",
  "definition": "Organização de Cabos é uma lista organizada com foco em abraçadeiras, organizadores e etiquetas para cabos e fios. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a organização de cabos no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias",
    "Descartar o que não usa",
    "Etiquetar potes e caixas",
    "Reservar 15 minutos por dia"
  ],
  "porQueImporta": "Sem uma organização de cabos bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua organização de cabos personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "organizacao-domestica",
    "organizacao-de-documentos",
    "lista-de-seguranca-residencial"
  ],
  "faq": [
    {
      "q": "Como começar uma organização de cabos?",
      "a": "Comece anotando tudo o que vier à cabeça sobre abraçadeiras, organizadores e etiquetas para cabos e fios, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a organização de cabos depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "calendario-de-limpeza",
  "term": "Calendário de Limpeza",
  "category": "Organização",
  "definition": "Calendário de Limpeza é uma lista organizada com foco em cronograma semanal, mensal e anual das tarefas de limpeza. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a calendário de limpeza no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias",
    "Descartar o que não usa",
    "Etiquetar potes e caixas",
    "Reservar 15 minutos por dia"
  ],
  "porQueImporta": "Sem uma calendário de limpeza bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua calendário de limpeza personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-tarefas-domesticas",
    "rotina-da-casa",
    "faxina-pesada"
  ],
  "faq": [
    {
      "q": "Como começar uma calendário de limpeza?",
      "a": "Comece anotando tudo o que vier à cabeça sobre cronograma semanal, mensal e anual das tarefas de limpeza, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a calendário de limpeza depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "checklist-de-limpeza-semanal",
  "term": "Checklist de Limpeza Semanal",
  "category": "Organização",
  "definition": "Checklist de Limpeza Semanal é uma lista organizada com foco em distribuição diária das tarefas para manter a casa em ordem. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a checklist de limpeza semanal no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias",
    "Descartar o que não usa",
    "Etiquetar potes e caixas",
    "Reservar 15 minutos por dia"
  ],
  "porQueImporta": "Sem uma checklist de limpeza semanal bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua checklist de limpeza semanal personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-tarefas-domesticas",
    "calendario-de-limpeza",
    "rotina-da-casa"
  ],
  "faq": [
    {
      "q": "Como começar uma checklist de limpeza semanal?",
      "a": "Comece anotando tudo o que vier à cabeça sobre distribuição diária das tarefas para manter a casa em ordem, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a checklist de limpeza semanal depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "rotina-noturna",
  "term": "Rotina Noturna",
  "category": "Organização",
  "definition": "Rotina Noturna é uma lista organizada com foco em hábitos antes de dormir que preparam a casa e a mente para o dia seguinte. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a rotina noturna no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir categorias",
    "Descartar o que não usa",
    "Etiquetar potes e caixas",
    "Reservar 15 minutos por dia"
  ],
  "porQueImporta": "Sem uma rotina noturna bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua rotina noturna personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "rotina-matinal",
    "checklist-diario",
    "planner-semanal"
  ],
  "faq": [
    {
      "q": "Como começar uma rotina noturna?",
      "a": "Comece anotando tudo o que vier à cabeça sobre hábitos antes de dormir que preparam a casa e a mente para o dia seguinte, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a rotina noturna depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "metodo-ivy-lee",
  "term": "Método Ivy Lee",
  "category": "Produtividade",
  "definition": "Método Ivy Lee é uma lista organizada com foco em selecionar 6 tarefas prioritárias na véspera e executá-las em ordem. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a método ivy lee no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir o objetivo claro",
    "Quebrar em ações menores",
    "Definir prazo para cada etapa",
    "Revisar semanalmente"
  ],
  "porQueImporta": "Sem uma método ivy lee bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua método ivy lee personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "to-do-list",
    "matriz-de-prioridade",
    "gestao-do-tempo"
  ],
  "faq": [
    {
      "q": "Como começar uma método ivy lee?",
      "a": "Comece anotando tudo o que vier à cabeça sobre selecionar 6 tarefas prioritárias na véspera e executá-las em ordem, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a método ivy lee depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "matriz-eisenhower",
  "term": "Matriz de Eisenhower",
  "category": "Produtividade",
  "definition": "Matriz de Eisenhower é uma lista organizada com foco em classificação de tarefas por urgência e importância em 4 quadrantes. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a matriz de eisenhower no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir o objetivo claro",
    "Quebrar em ações menores",
    "Definir prazo para cada etapa",
    "Revisar semanalmente"
  ],
  "porQueImporta": "Sem uma matriz de eisenhower bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua matriz de eisenhower personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "matriz-de-prioridade",
    "gestao-do-tempo",
    "metodo-getting-things-done"
  ],
  "faq": [
    {
      "q": "Como começar uma matriz de eisenhower?",
      "a": "Comece anotando tudo o que vier à cabeça sobre classificação de tarefas por urgência e importância em 4 quadrantes, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a matriz de eisenhower depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "tecnica-time-blocking",
  "term": "Técnica de Time Blocking",
  "category": "Produtividade",
  "definition": "Técnica de Time Blocking é uma lista organizada com foco em reservar blocos de tempo na agenda para cada tipo de tarefa. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a técnica de time blocking no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir o objetivo claro",
    "Quebrar em ações menores",
    "Definir prazo para cada etapa",
    "Revisar semanalmente"
  ],
  "porQueImporta": "Sem uma técnica de time blocking bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua técnica de time blocking personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "gestao-do-tempo",
    "metodo-pomodoro",
    "planner-semanal"
  ],
  "faq": [
    {
      "q": "Como começar uma técnica de time blocking?",
      "a": "Comece anotando tudo o que vier à cabeça sobre reservar blocos de tempo na agenda para cada tipo de tarefa, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a técnica de time blocking depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-habitos",
  "term": "Lista de Hábitos",
  "category": "Produtividade",
  "definition": "Lista de Hábitos é uma lista organizada com foco em hábitos a construir com gatilhos, frequência e recompensas. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de hábitos no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir o objetivo claro",
    "Quebrar em ações menores",
    "Definir prazo para cada etapa",
    "Revisar semanalmente"
  ],
  "porQueImporta": "Sem uma lista de hábitos bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de hábitos personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "tracker-de-habitos",
    "rotina-matinal",
    "rotina-noturna"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de hábitos?",
      "a": "Comece anotando tudo o que vier à cabeça sobre hábitos a construir com gatilhos, frequência e recompensas, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de hábitos depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "tracker-de-habitos",
  "term": "Tracker de Hábitos",
  "category": "Produtividade",
  "definition": "Tracker de Hábitos é uma lista organizada com foco em registro visual diário do cumprimento de hábitos. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a tracker de hábitos no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir o objetivo claro",
    "Quebrar em ações menores",
    "Definir prazo para cada etapa",
    "Revisar semanalmente"
  ],
  "porQueImporta": "Sem uma tracker de hábitos bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua tracker de hábitos personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-habitos",
    "bullet-journal",
    "diario-de-gratidao"
  ],
  "faq": [
    {
      "q": "Como começar uma tracker de hábitos?",
      "a": "Comece anotando tudo o que vier à cabeça sobre registro visual diário do cumprimento de hábitos, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a tracker de hábitos depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "wishlist-pessoal",
  "term": "Wishlist Pessoal",
  "category": "Produtividade",
  "definition": "Wishlist Pessoal é uma lista organizada com foco em lista de desejos priorizada por valor emocional e financeiro. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a wishlist pessoal no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir o objetivo claro",
    "Quebrar em ações menores",
    "Definir prazo para cada etapa",
    "Revisar semanalmente"
  ],
  "porQueImporta": "Sem uma wishlist pessoal bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua wishlist pessoal personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "orcamento-domestico",
    "lista-de-metas-anuais",
    "bucket-list"
  ],
  "faq": [
    {
      "q": "Como começar uma wishlist pessoal?",
      "a": "Comece anotando tudo o que vier à cabeça sobre lista de desejos priorizada por valor emocional e financeiro, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a wishlist pessoal depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-livros-para-ler",
  "term": "Lista de Livros para Ler",
  "category": "Produtividade",
  "definition": "Lista de Livros para Ler é uma lista organizada com foco em livros por gênero, prioridade e prazo de leitura. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de livros para ler no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir o objetivo claro",
    "Quebrar em ações menores",
    "Definir prazo para cada etapa",
    "Revisar semanalmente"
  ],
  "porQueImporta": "Sem uma lista de livros para ler bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de livros para ler personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "organizacao-de-livros",
    "lista-de-habitos",
    "revisao-semanal"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de livros para ler?",
      "a": "Comece anotando tudo o que vier à cabeça sobre livros por gênero, prioridade e prazo de leitura, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de livros para ler depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-filmes-para-assistir",
  "term": "Lista de Filmes para Assistir",
  "category": "Produtividade",
  "definition": "Lista de Filmes para Assistir é uma lista organizada com foco em filmes e séries por streaming, gênero e ordem de prioridade. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de filmes para assistir no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir o objetivo claro",
    "Quebrar em ações menores",
    "Definir prazo para cada etapa",
    "Revisar semanalmente"
  ],
  "porQueImporta": "Sem uma lista de filmes para assistir bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de filmes para assistir personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-livros-para-ler",
    "wishlist-pessoal",
    "bucket-list"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de filmes para assistir?",
      "a": "Comece anotando tudo o que vier à cabeça sobre filmes e séries por streaming, gênero e ordem de prioridade, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de filmes para assistir depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-viagens-dos-sonhos",
  "term": "Lista de Viagens dos Sonhos",
  "category": "Produtividade",
  "definition": "Lista de Viagens dos Sonhos é uma lista organizada com foco em destinos com orçamento estimado e época ideal. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de viagens dos sonhos no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir o objetivo claro",
    "Quebrar em ações menores",
    "Definir prazo para cada etapa",
    "Revisar semanalmente"
  ],
  "porQueImporta": "Sem uma lista de viagens dos sonhos bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de viagens dos sonhos personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "bucket-list",
    "checklist-de-viagem",
    "lista-de-metas-anuais"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de viagens dos sonhos?",
      "a": "Comece anotando tudo o que vier à cabeça sobre destinos com orçamento estimado e época ideal, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de viagens dos sonhos depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "bucket-list",
  "term": "Bucket List",
  "category": "Produtividade",
  "definition": "Bucket List é uma lista organizada com foco em lista de conquistas e experiências para viver ao longo da vida. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a bucket list no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir o objetivo claro",
    "Quebrar em ações menores",
    "Definir prazo para cada etapa",
    "Revisar semanalmente"
  ],
  "porQueImporta": "Sem uma bucket list bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua bucket list personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-metas-anuais",
    "lista-de-viagens-dos-sonhos",
    "wishlist-pessoal"
  ],
  "faq": [
    {
      "q": "Como começar uma bucket list?",
      "a": "Comece anotando tudo o que vier à cabeça sobre lista de conquistas e experiências para viver ao longo da vida, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a bucket list depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "diario-de-gratidao",
  "term": "Diário de Gratidão",
  "category": "Produtividade",
  "definition": "Diário de Gratidão é uma lista organizada com foco em registro diário de 3 coisas boas para aumentar bem-estar. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a diário de gratidão no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir o objetivo claro",
    "Quebrar em ações menores",
    "Definir prazo para cada etapa",
    "Revisar semanalmente"
  ],
  "porQueImporta": "Sem uma diário de gratidão bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua diário de gratidão personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "rotina-matinal",
    "rotina-noturna",
    "tracker-de-habitos"
  ],
  "faq": [
    {
      "q": "Como começar uma diário de gratidão?",
      "a": "Comece anotando tudo o que vier à cabeça sobre registro diário de 3 coisas boas para aumentar bem-estar, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a diário de gratidão depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "planejamento-mensal",
  "term": "Planejamento Mensal",
  "category": "Produtividade",
  "definition": "Planejamento Mensal é uma lista organizada com foco em metas, compromissos e finanças organizados a cada 30 dias. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a planejamento mensal no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir o objetivo claro",
    "Quebrar em ações menores",
    "Definir prazo para cada etapa",
    "Revisar semanalmente"
  ],
  "porQueImporta": "Sem uma planejamento mensal bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua planejamento mensal personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "planner-semanal",
    "revisao-semanal",
    "orcamento-domestico"
  ],
  "faq": [
    {
      "q": "Como começar uma planejamento mensal?",
      "a": "Comece anotando tudo o que vier à cabeça sobre metas, compromissos e finanças organizados a cada 30 dias, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a planejamento mensal depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "planejamento-trimestral",
  "term": "Planejamento Trimestral",
  "category": "Produtividade",
  "definition": "Planejamento Trimestral é uma lista organizada com foco em ciclos de 90 dias para desdobrar metas anuais em ações. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a planejamento trimestral no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir o objetivo claro",
    "Quebrar em ações menores",
    "Definir prazo para cada etapa",
    "Revisar semanalmente"
  ],
  "porQueImporta": "Sem uma planejamento trimestral bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua planejamento trimestral personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-metas-anuais",
    "planejamento-mensal",
    "planner-semanal"
  ],
  "faq": [
    {
      "q": "Como começar uma planejamento trimestral?",
      "a": "Comece anotando tudo o que vier à cabeça sobre ciclos de 90 dias para desdobrar metas anuais em ações, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a planejamento trimestral depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "revisao-semanal",
  "term": "Revisão Semanal",
  "category": "Produtividade",
  "definition": "Revisão Semanal é uma lista organizada com foco em ritual de 30 minutos para revisar semana passada e planejar a próxima. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a revisão semanal no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir o objetivo claro",
    "Quebrar em ações menores",
    "Definir prazo para cada etapa",
    "Revisar semanalmente"
  ],
  "porQueImporta": "Sem uma revisão semanal bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua revisão semanal personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "planner-semanal",
    "metodo-getting-things-done",
    "checklist-diario"
  ],
  "faq": [
    {
      "q": "Como começar uma revisão semanal?",
      "a": "Comece anotando tudo o que vier à cabeça sobre ritual de 30 minutos para revisar semana passada e planejar a próxima, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a revisão semanal depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "metas-smart",
  "term": "Metas SMART",
  "category": "Produtividade",
  "definition": "Metas SMART é uma lista organizada com foco em metas específicas, mensuráveis, atingíveis, relevantes e temporais. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a metas smart no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir o objetivo claro",
    "Quebrar em ações menores",
    "Definir prazo para cada etapa",
    "Revisar semanalmente"
  ],
  "porQueImporta": "Sem uma metas smart bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua metas smart personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "lista-de-metas-anuais",
    "planejamento-trimestral",
    "planejamento-mensal"
  ],
  "faq": [
    {
      "q": "Como começar uma metas smart?",
      "a": "Comece anotando tudo o que vier à cabeça sobre metas específicas, mensuráveis, atingíveis, relevantes e temporais, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a metas smart depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "lista-de-compras-black-friday",
  "term": "Lista de Compras Black Friday",
  "category": "Produtividade",
  "definition": "Lista de Compras Black Friday é uma lista organizada com foco em estratégia de pesquisa e priorização de itens antes das promoções. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a lista de compras black friday no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir o objetivo claro",
    "Quebrar em ações menores",
    "Definir prazo para cada etapa",
    "Revisar semanalmente"
  ],
  "porQueImporta": "Sem uma lista de compras black friday bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua lista de compras black friday personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "wishlist-pessoal",
    "black-friday-supermercado",
    "compra-economica"
  ],
  "faq": [
    {
      "q": "Como começar uma lista de compras black friday?",
      "a": "Comece anotando tudo o que vier à cabeça sobre estratégia de pesquisa e priorização de itens antes das promoções, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a lista de compras black friday depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
},
{
  "slug": "checklist-de-mudanca-de-emprego",
  "term": "Checklist de Mudança de Emprego",
  "category": "Produtividade",
  "definition": "Checklist de Mudança de Emprego é uma lista organizada com foco em documentos, transição e planejamento financeiro ao trocar de emprego. Ajuda a planejar com antecedência, evitar esquecimentos e tomar decisões melhores, reunindo em um só lugar tudo o que realmente importa para o resultado esperado no dia a dia brasileiro.",
  "exemploPratico": "Uma pessoa monta a checklist de mudança de emprego no aplicativo, marca os itens conforme resolve cada um e compartilha com quem participa, mantendo todos alinhados sem confusão.",
  "exemploItens": [
    "Definir o objetivo claro",
    "Quebrar em ações menores",
    "Definir prazo para cada etapa",
    "Revisar semanalmente"
  ],
  "porQueImporta": "Sem uma checklist de mudança de emprego bem feita, é comum esquecer detalhes, gastar mais do que o planejado e perder tempo refazendo compras ou tarefas. Um planejamento simples reduz o estresse, protege o orçamento e devolve controle sobre o que realmente importa para você.",
  "aprofundamento": {
    "texto": "Use nosso criador de listas gratuito para montar sua checklist de mudança de emprego personalizada, marcar itens conforme conclui e baixar em PDF ou imprimir quando precisar.",
    "linkText": "Abrir Criador de Listas",
    "linkHref": "/criar-lista"
  },
  "relacionados": [
    "organizacao-de-documentos",
    "organizacao-financeira",
    "lista-de-metas-anuais"
  ],
  "faq": [
    {
      "q": "Como começar uma checklist de mudança de emprego?",
      "a": "Comece anotando tudo o que vier à cabeça sobre documentos, transição e planejamento financeiro ao trocar de emprego, depois agrupe por categoria e priorize os itens mais urgentes."
    },
    {
      "q": "Posso editar a checklist de mudança de emprego depois?",
      "a": "Sim. No Help Listas você edita, marca, adiciona e remove itens quando quiser, sem precisar cadastro."
    }
  ]
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
