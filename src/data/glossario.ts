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

export const glossary: GlossaryTerm[] = [
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
