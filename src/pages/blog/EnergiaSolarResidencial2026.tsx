import BlogPostLayout from "@/components/BlogPostLayout";
import cover from "@/assets/blog/energia-solar-2026.jpg";
import mid from "@/assets/blog/energia-solar-instalacao.jpg";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { CheckCircle2, Sun, DollarSign, Wrench, AlertTriangle, FileText, TrendingDown, Zap } from "lucide-react";

const EnergiaSolarResidencial2026 = () => {
  return (
    <BlogPostLayout
      title="Energia Solar Residencial em 2026: Guia Completo de Custos, Instalação e Economia"
      metaTitle="Energia Solar Residencial 2026: Guia Completo | Helplistas"
      description="Tudo sobre energia solar residencial em 2026: quanto custa, como funciona, payback, financiamento e checklist completo para instalar painéis na sua casa."
      path="/blog/energia-solar-residencial-2026"
      category="Energia"
      date="22 de Janeiro, 2026"
      dateISO="2026-01-22"
      readingTime="15 min de leitura"
      coverImage={cover}
      coverAlt="Casa residencial brasileira com painéis solares fotovoltaicos no telhado em dia ensolarado"
      midImage={mid}
      midAlt="Técnico instalando painel solar fotovoltaico no telhado de uma residência"
      faqs={[
        { q: "Quanto custa instalar energia solar em uma casa em 2026?", a: "Para um consumo médio de 300 kWh/mês, o sistema fica entre R$ 12.000 e R$ 18.000 instalado. Para 500 kWh/mês, fica entre R$ 18.000 e R$ 28.000. Os valores variam conforme a região, o tipo de telhado e a marca dos equipamentos." },
        { q: "Em quantos anos a energia solar se paga?", a: "O payback médio em 2026 está entre 4 e 6 anos, dependendo da tarifa de energia da sua distribuidora, da incidência solar local e do consumo da residência. Após esse período, o sistema gera energia praticamente gratuita por mais 20 anos." },
        { q: "Vale a pena instalar energia solar em apartamento?", a: "Em apartamento individual, raramente. Mas vale muito a pena se o condomínio quiser instalar para áreas comuns (elevador, iluminação da garagem, bombas), reduzindo o valor do condomínio em até 50%." },
        { q: "Energia solar funciona em dias nublados ou de chuva?", a: "Sim. Os painéis geram entre 20% e 60% da capacidade nominal mesmo em dias nublados, captando radiação difusa. Em dias de chuva pesada, a geração cai mais, mas a média anual já é calculada considerando todas as estações." },
        { q: "Preciso pedir autorização para instalar painéis solares?", a: "Sim. É necessário homologar o sistema na sua distribuidora de energia (Enel, Cemig, Light, Cpfl, etc.) seguindo a Resolução Normativa 1.000/2021 da Aneel. A empresa instaladora normalmente cuida de toda a parte burocrática." },
        { q: "O Marco Legal da Geração Distribuída (Lei 14.300/2022) ainda vale em 2026?", a: "Sim. Sistemas conectados até janeiro de 2023 mantêm isenção total da TUSD Fio B até 2045. Sistemas novos pagam parcela crescente da tarifa, mas o investimento continua valendo a pena, com payback abaixo de 6 anos na maioria dos estados." },
        { q: "Posso financiar a instalação de energia solar?", a: "Sim. Bancos como Santander, BV, Sicredi, Banco do Brasil e Caixa oferecem linhas específicas com prazo de até 84 meses. Em muitos casos, a parcela do financiamento é menor que a antiga conta de luz — você economiza desde o primeiro mês." },
        { q: "Qual é a vida útil dos painéis solares?", a: "Os painéis têm vida útil de 25 a 30 anos, com garantia de 25 anos para 80% da eficiência. O inversor dura entre 10 e 15 anos e precisa ser trocado uma vez ao longo da vida do sistema." },
      ]}
      related={[
        { title: "Casa Inteligente em 2026: Guia Completo de Automação", path: "/blog/casa-inteligente-guia-2026", category: "Casa Inteligente" },
        { title: "Checklist Casa Nova Completa", path: "/lista-de-casa-nova-completa", category: "Casa Nova" },
        { title: "10 Dicas para Economizar no Supermercado em 2026", path: "/blog/dicas-economizar-supermercado", category: "Economia" },
      ]}
    >
      <section className="mb-10">
        <p className="text-lg text-foreground leading-relaxed mb-6">
          Quem olha a conta de luz no fim do mês já entende, sem precisar de planilha, que algo precisa mudar. A bandeira tarifária mudou de cor outra vez, o consumo cresceu com mais um eletrônico em casa e o reajuste anual veio acima da inflação. Em 2026, instalar <strong>energia solar residencial</strong> deixou de ser uma decisão "verde" — virou pura matemática financeira.
        </p>
        <p className="text-lg text-foreground leading-relaxed mb-6">
          Mas decisões financeiras grandes precisam ser tomadas com clareza. Este guia traz tudo o que você precisa saber para decidir se a energia solar faz sentido para a sua casa, quanto custa de verdade em 2026, como funciona o financiamento, quais armadilhas evitar e como montar um checklist de instalação que protege seu investimento por décadas.
        </p>

        <Card className="border-l-4 border-l-primary bg-primary/5 mb-8">
          <CardContent className="p-6">
            <p className="font-semibold text-foreground mb-2">O que mudou em 2026</p>
            <p className="text-muted-foreground">
              Painéis mais eficientes (até 22% de conversão), inversores Wi-Fi com monitoramento por app, baterias de lítio com preço 35% menor que em 2023 e financiamento bancário consolidado. O setor amadureceu — e quem entra agora pega o melhor cenário em uma década.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Sun className="w-8 h-8 text-primary" /> Como funciona, em linguagem simples
        </h2>
        <p className="text-lg text-foreground leading-relaxed mb-6">
          Painéis fotovoltaicos captam a radiação solar e geram corrente contínua. O inversor transforma essa corrente em corrente alternada — a mesma que sua casa usa. O que você gera vai primeiro para o seu consumo; o excedente é injetado na rede da distribuidora e vira <strong>crédito de energia</strong>, abatido nos meses seguintes (sistema de compensação).
        </p>
        <p className="text-lg text-foreground leading-relaxed mb-6">
          Em outras palavras: a rede elétrica funciona como uma "bateria gratuita". Você produz no sol forte, consome à noite e recebe os créditos do excedente para usar nos próximos 60 meses.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
          <DollarSign className="w-8 h-8 text-primary" /> Quanto custa em 2026 (tabela atualizada)
        </h2>
        <Card className="bg-muted/30 border-0 mb-6 overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Consumo mensal</TableHead>
                    <TableHead>Potência ideal</TableHead>
                    <TableHead>Nº de painéis</TableHead>
                    <TableHead>Investimento</TableHead>
                    <TableHead>Payback</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow><TableCell>200 kWh</TableCell><TableCell>1,8 kWp</TableCell><TableCell>4 painéis</TableCell><TableCell>R$ 9.500</TableCell><TableCell>4,5 anos</TableCell></TableRow>
                  <TableRow><TableCell>300 kWh</TableCell><TableCell>2,7 kWp</TableCell><TableCell>6 painéis</TableCell><TableCell>R$ 13.500</TableCell><TableCell>4,8 anos</TableCell></TableRow>
                  <TableRow><TableCell>500 kWh</TableCell><TableCell>4,5 kWp</TableCell><TableCell>10 painéis</TableCell><TableCell>R$ 21.000</TableCell><TableCell>5,2 anos</TableCell></TableRow>
                  <TableRow><TableCell>800 kWh</TableCell><TableCell>7,2 kWp</TableCell><TableCell>16 painéis</TableCell><TableCell>R$ 32.000</TableCell><TableCell>5,5 anos</TableCell></TableRow>
                  <TableRow><TableCell>1.200 kWh</TableCell><TableCell>10,8 kWp</TableCell><TableCell>24 painéis</TableCell><TableCell>R$ 46.000</TableCell><TableCell>5,8 anos</TableCell></TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        <p className="text-sm text-muted-foreground">Valores médios nacionais em janeiro de 2026, considerando módulos de 550 Wp, inversor de marca consolidada, estrutura para telhado cerâmico e mão de obra inclusa. Variações de até 25% conforme estado.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
          <TrendingDown className="w-8 h-8 text-primary" /> Quanto você realmente economiza
        </h2>
        <p className="text-lg text-foreground leading-relaxed mb-6">
          Uma família que paga R$ 550/mês de luz e instala um sistema de 4,5 kWp passa a pagar a chamada <strong>taxa mínima</strong> da distribuidora (entre R$ 35 e R$ 80) e, na prática, zera a conta nos meses de mais sol. No acumulado anual, a economia chega a <strong>R$ 5.600</strong>.
        </p>
        <p className="text-lg text-foreground leading-relaxed mb-6">
          Em 25 anos, considerando reajuste tarifário médio de 5% ao ano, uma residência economiza entre <strong>R$ 180.000 e R$ 320.000</strong> em valores nominais. É praticamente o preço de um carro popular novo a cada 5 anos.
        </p>

        <Card className="border border-compras/30 bg-compras/5 mb-6">
          <CardContent className="p-6">
            <p className="font-semibold text-foreground mb-2">Fonte oficial</p>
            <p className="text-muted-foreground">
              Os dados de tarifa e geração média podem ser consultados no portal da <a href="https://www.gov.br/aneel/pt-br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Aneel (Agência Nacional de Energia Elétrica)</a>, que publica mensalmente os índices de cada distribuidora.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
          <FileText className="w-8 h-8 text-primary" /> Lei 14.300 e o que ela significa para você
        </h2>
        <p className="text-lg text-foreground leading-relaxed mb-6">
          O <strong>Marco Legal da Geração Distribuída</strong>, válido desde 2023, criou uma cobrança gradual da TUSD Fio B para novos sistemas. Em 2026, a alíquota está em 45% do valor total — ainda assim, o payback continua atrativo porque a economia sobre a tarifa cheia segue alta.
        </p>
        <p className="text-lg text-foreground leading-relaxed">
          Quem instalou antes de 7 de janeiro de 2023 tem direito adquirido até <strong>2045</strong>, com isenção total. Para projetos novos, o segredo está em dimensionar bem: sistemas superdimensionados pagam mais Fio B sem gerar retorno proporcional.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Wrench className="w-8 h-8 text-primary" /> Checklist de instalação passo a passo
        </h2>
        <Card className="bg-muted/30 border-0">
          <CardContent className="p-6">
            <ol className="space-y-4 text-foreground">
              <li><strong>1. Levante seu consumo</strong> — pegue as últimas 12 contas de luz e calcule a média mensal.</li>
              <li><strong>2. Avalie o telhado</strong> — orientação (norte é o ideal no Brasil), inclinação, sombreamento e estado da estrutura.</li>
              <li><strong>3. Solicite 3 orçamentos</strong> — sempre com empresas que sejam integradoras certificadas pelo Inmetro.</li>
              <li><strong>4. Confirme a marca dos equipamentos</strong> — exija painéis Tier 1 e inversores com fabricante presente no Brasil.</li>
              <li><strong>5. Verifique a garantia</strong> — 12 anos no produto, 25 anos na performance dos painéis, 10 anos no inversor.</li>
              <li><strong>6. Cheque a homologação</strong> — a empresa precisa fazer o protocolo na distribuidora; sem isso o sistema é ilegal.</li>
              <li><strong>7. Pague em etapas</strong> — sinal, entrega dos equipamentos e somente o último valor após o sistema conectado e gerando.</li>
              <li><strong>8. Receba o relatório técnico</strong> — diagrama unifilar, ART do engenheiro e manual de operação.</li>
              <li><strong>9. Monitore pelo app</strong> — inversores modernos têm Wi-Fi; acompanhe a geração diariamente.</li>
              <li><strong>10. Faça limpeza anual</strong> — só água e pano macio; sujeira reduz geração em até 8%.</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Zap className="w-8 h-8 text-primary" /> Bateria de armazenamento vale a pena?
        </h2>
        <p className="text-lg text-foreground leading-relaxed mb-6">
          Em 2026, sistemas com bateria (off-grid ou híbridos) começaram a virar realidade no Brasil residencial. O custo de uma bateria de lítio de 5 kWh está em torno de R$ 18.000 — ainda alto, mas em queda contínua.
        </p>
        <p className="text-lg text-foreground leading-relaxed">
          Vale a pena se você mora em região com quedas frequentes de energia, tem equipamentos críticos (CPAP, freezer com remédios, home office indispensável) ou quer total independência. Para a maioria das famílias urbanas, no entanto, o sistema <em>on-grid</em> tradicional ainda é o melhor custo-benefício.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Armadilhas comuns que destroem o payback</h2>
        <ul className="space-y-3 text-foreground">
          <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>Empresa sem CNPJ específico em energia solar</strong> — desaparece junto com a garantia.</span></li>
          <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>Promessa de "zerar a conta para sempre"</strong> — a taxa mínima da distribuidora sempre será cobrada.</span></li>
          <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>Painéis genéricos sem certificação Inmetro</strong> — perdem 30% de eficiência em 5 anos.</span></li>
          <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>Pagamento integral antes da instalação</strong> — risco enorme; pague em etapas.</span></li>
          <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>Sistema superdimensionado</strong> — o que sobra "virou imposto" depois da Lei 14.300.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Energia solar e valorização do imóvel</h2>
        <p className="text-lg text-foreground leading-relaxed">
          Imóveis com sistema solar instalado são vendidos, em média, <strong>8% acima</strong> do preço de imóveis comparáveis sem o sistema, segundo dados de portais imobiliários nacionais. Em condomínios fechados e casas independentes, esse percentual pode chegar a 12%. Em outras palavras, mesmo se você vender antes de completar o payback, recupera boa parte do investimento na venda.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Conclusão</h2>
        <p className="text-lg text-foreground leading-relaxed mb-4">
          Energia solar residencial em 2026 é uma das poucas decisões financeiras que combinam <strong>retorno acima da inflação</strong>, <strong>previsibilidade</strong> e <strong>valorização do patrimônio</strong>. Para a maioria das famílias brasileiras com consumo acima de 250 kWh/mês, deixar de instalar é, em termos práticos, perder dinheiro todo mês.
        </p>
        <p className="text-lg text-foreground leading-relaxed">
          Se você está planejando uma reforma, mudança ou construção, aproveite e integre o projeto solar desde o início. Comece pelo nosso <Link to="/lista-de-casa-nova-completa" className="text-primary hover:underline">checklist completo de casa nova</Link>, monte sua <Link to="/criar-lista" className="text-primary hover:underline">lista personalizada de planejamento</Link> e leia também o <Link to="/blog/casa-inteligente-guia-2026" className="text-primary hover:underline">guia de casa inteligente em 2026</Link> para combinar economia solar com automação residencial.
        </p>
      </section>
    </BlogPostLayout>
  );
};

export default EnergiaSolarResidencial2026;
