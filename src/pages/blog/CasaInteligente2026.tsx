import BlogPostLayout from "@/components/BlogPostLayout";
import cover from "@/assets/blog/casa-inteligente-2026.jpg";
import mid from "@/assets/blog/casa-inteligente-app.jpg";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Lightbulb, ShieldCheck, Zap, Wifi, Speaker, Lock, Camera, Thermometer, Smartphone, AlertTriangle } from "lucide-react";

const CasaInteligente2026 = () => {
  return (
    <BlogPostLayout
      title="Casa Inteligente em 2026: Guia Completo de Automação Residencial"
      metaTitle="Casa Inteligente 2026: Guia Completo de Automação | Helplistas"
      description="Guia completo de casa inteligente em 2026: dispositivos essenciais, custos, instalação passo a passo, segurança e checklist para automatizar sua casa."
      path="/blog/casa-inteligente-guia-2026"
      category="Casa Inteligente"
      date="20 de Janeiro, 2026"
      dateISO="2026-01-20"
      readingTime="14 min de leitura"
      coverImage={cover}
      coverAlt="Sala de estar moderna com iluminação inteligente, smart speaker e televisão conectada"
      midImage={mid}
      midAlt="Pessoa controlando dispositivos de casa inteligente pelo aplicativo no smartphone"
      faqs={[
        { q: "Quanto custa montar uma casa inteligente em 2026?", a: "Um kit básico (iluminação inteligente, assistente de voz e tomadas smart) sai entre R$ 800 e R$ 1.800. Uma automação intermediária, com fechadura inteligente, câmeras e termostato, fica entre R$ 3.500 e R$ 7.000. Projetos avançados, com integração completa via hub e sensores em todos os cômodos, podem ultrapassar R$ 20.000." },
        { q: "Quais são os dispositivos essenciais para começar uma casa inteligente?", a: "Para começar, priorize um assistente de voz (Alexa, Google Assistente ou Apple HomePod), lâmpadas inteligentes Wi-Fi, ao menos duas tomadas smart e uma campainha ou câmera com visão noturna. Esse conjunto resolve iluminação, automação básica e segurança inicial." },
        { q: "Casa inteligente funciona sem internet?", a: "Parcialmente. Dispositivos com protocolo Zigbee ou Z-Wave continuam operando dentro da rede local via hub. Já produtos Wi-Fi exclusivos perdem funções remotas e dependem de cenas pré-programadas. Por isso recomendamos hubs com fallback local e nobreak no roteador." },
        { q: "É seguro instalar fechadura inteligente em apartamento?", a: "Sim, desde que você escolha modelos com certificação ABNT, biometria ou senha temporária e backup com chave física. A maioria dos condomínios autoriza a instalação porque ela não altera a porta nem a estrutura. Confira sempre o regimento interno antes da compra." },
        { q: "Quais protocolos de comunicação devo escolher: Wi-Fi, Zigbee, Z-Wave ou Matter?", a: "Para iniciantes, Wi-Fi é o mais simples. Para casas com muitos dispositivos, Zigbee e Z-Wave oferecem estabilidade e menor consumo de energia. O padrão Matter, consolidado em 2026, é a melhor escolha para quem quer interoperabilidade entre marcas (Apple, Google, Amazon e Samsung)." },
        { q: "Smart home aumenta o valor do imóvel?", a: "Sim. Pesquisas do setor imobiliário apontam valorização média entre 3% e 7% em imóveis com automação consolidada (iluminação, segurança e climatização), além de aluguel mais rápido em portais especializados." },
        { q: "Quais são os riscos de privacidade da casa inteligente?", a: "Os principais riscos envolvem câmeras com senhas padrão, atualizações desativadas e redes Wi-Fi sem WPA3. Para reduzir o risco, troque senhas no primeiro uso, ative autenticação em dois fatores e mantenha o firmware sempre atualizado." },
      ]}
      related={[
        { title: "Checklist Casa Nova Completa para 2026", path: "/lista-de-casa-nova-completa", category: "Casa Nova" },
        { title: "10 Dicas para Economizar no Supermercado em 2026", path: "/blog/dicas-economizar-supermercado", category: "Economia" },
        { title: "Lista de Casa Nova Econômica", path: "/lista-de-casa-nova-economica", category: "Casa Nova" },
      ]}
    >
      <section className="mb-10">
        <p className="text-lg text-foreground leading-relaxed mb-6">
          Em 2026, a casa inteligente deixou de ser sinônimo de luxo e passou a ser uma decisão prática de quem quer economizar energia, ganhar tempo e dormir tranquilo. Dispositivos que custavam o salário de um mês há pouco tempo hoje cabem no orçamento de qualquer família que esteja organizando uma <Link to="/lista-de-casa-nova" className="text-primary hover:underline">casa nova</Link> ou simplesmente atualizando o apartamento.
        </p>
        <p className="text-lg text-foreground leading-relaxed mb-6">
          Mas o número de marcas, protocolos e promessas cresceu junto — e é fácil gastar mais do que precisa, instalar produtos incompatíveis ou comprar dispositivos que viram peso de papel em seis meses. Este guia foi montado para te poupar essa dor de cabeça. Vamos cobrir, de forma honesta, o que vale a pena comprar em 2026, quanto custa, como instalar e quais armadilhas evitar.
        </p>

        <Card className="border-l-4 border-l-primary bg-primary/5 mb-8">
          <CardContent className="p-6">
            <p className="font-semibold text-foreground mb-2">Para quem é este guia</p>
            <p className="text-muted-foreground">
              Famílias e moradores de apartamento que querem começar (ou expandir) a automação residencial sem reformar a casa, contratar projeto e gastar fortunas. Tudo aqui pode ser instalado por você ou por um eletricista de confiança em poucas horas.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Lightbulb className="w-8 h-8 text-primary" /> O que é uma casa inteligente, na prática
        </h2>
        <p className="text-lg text-foreground leading-relaxed mb-6">
          Casa inteligente é qualquer residência onde dispositivos conectados executam, em conjunto, tarefas que antes exigiam intervenção humana: acender luzes ao anoitecer, ajustar a temperatura quando alguém chega, gravar imagens quando ninguém está em casa, ou simplesmente avisar que a máquina de lavar terminou.
        </p>
        <p className="text-lg text-foreground leading-relaxed mb-6">
          O segredo está na palavra <strong>conjunto</strong>. Comprar uma lâmpada Wi-Fi solta não transforma a casa em smart home — ela vira só uma lâmpada com app. A automação real acontece quando você cria rotinas e cenas que ligam dispositivos diferentes, geralmente através de um assistente de voz ou de um hub central.
        </p>

        <h3 className="text-xl font-bold text-foreground mb-4 mt-8">Os 4 pilares de uma casa inteligente</h3>
        <ul className="space-y-3 text-foreground">
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>Iluminação:</strong> lâmpadas, interruptores e fitas LED inteligentes.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>Segurança:</strong> câmeras, fechaduras, sensores de presença, porta e fumaça.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>Conforto:</strong> climatização, persianas, irrigação de jardim, eletrodomésticos conectados.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>Controle:</strong> assistente de voz, hubs e aplicativos integradores.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Wifi className="w-8 h-8 text-primary" /> Protocolos: Wi-Fi, Zigbee, Z-Wave ou Matter?
        </h2>
        <p className="text-lg text-foreground leading-relaxed mb-6">
          Esse é o ponto onde a maioria das pessoas trava — e onde muita gente acaba comprando errado. Em 2026, esses são os quatro protocolos que importam:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card><CardContent className="p-5"><h4 className="font-bold mb-2">Wi-Fi</h4><p className="text-muted-foreground text-sm">Mais simples, não precisa de hub. Bom para quem tem até 10 dispositivos. Sobrecarrega roteadores domésticos quando passa disso.</p></CardContent></Card>
          <Card><CardContent className="p-5"><h4 className="font-bold mb-2">Zigbee</h4><p className="text-muted-foreground text-sm">Rede mesh, baixíssimo consumo, ideal para sensores. Precisa de hub (Echo com Zigbee, SmartThings, Aqara).</p></CardContent></Card>
          <Card><CardContent className="p-5"><h4 className="font-bold mb-2">Z-Wave</h4><p className="text-muted-foreground text-sm">Mais robusto e seguro, popular em projetos profissionais. Dispositivos um pouco mais caros, ecossistema mais restrito.</p></CardContent></Card>
          <Card><CardContent className="p-5"><h4 className="font-bold mb-2">Matter</h4><p className="text-muted-foreground text-sm">Padrão universal apoiado por Apple, Google, Amazon e Samsung. Se você está começando em 2026, priorize selos "Works with Matter".</p></CardContent></Card>
        </div>

        <p className="text-lg text-foreground leading-relaxed">
          Para a maioria das casas brasileiras, a combinação ideal é <strong>um hub compatível com Matter + Zigbee + dispositivos Wi-Fi pontuais</strong>. Assim você ganha estabilidade, interoperabilidade e não fica refém de uma única marca.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Speaker className="w-8 h-8 text-primary" /> Checklist do kit inicial (até R$ 1.500)
        </h2>
        <p className="text-lg text-foreground leading-relaxed mb-6">
          Se você nunca teve um dispositivo conectado em casa, este é o caminho mais sensato. Em uma única tarde você sai do zero e já sente diferença.
        </p>
        <Card className="bg-muted/30 border-0 mb-6">
          <CardContent className="p-6">
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>1 assistente de voz</strong> (Echo Dot, Nest Mini ou HomePod mini) — R$ 300 a R$ 700</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>3 a 5 lâmpadas inteligentes</strong> Wi-Fi com regulagem de cor — R$ 50 a R$ 90 cada</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>2 tomadas inteligentes</strong> com medição de consumo — R$ 70 cada</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>1 câmera Wi-Fi interna</strong> com áudio bidirecional — R$ 200 a R$ 400</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>1 controle universal IR</strong> para ar-condicionado e TV antiga — R$ 150</span></li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-primary" /> Segurança residencial: o que realmente funciona
        </h2>
        <p className="text-lg text-foreground leading-relaxed mb-6">
          Segurança é onde a casa inteligente entrega o retorno mais rápido. Câmeras, sensores e fechaduras viraram acessíveis e, mais importante, viraram <em>úteis</em>: gravam em nuvem, mandam notificação no celular e dialogam com assistente de voz.
        </p>

        <h3 className="text-xl font-bold text-foreground mb-4 mt-6 flex items-center gap-2"><Camera className="w-5 h-5 text-primary" /> Câmeras</h3>
        <p className="text-foreground leading-relaxed mb-4">
          Procure modelos com <strong>visão noturna colorida</strong>, gravação local em microSD <em>e</em> backup em nuvem, e detecção de pessoa baseada em IA (reduz falsos alertas em 80%). Marcas confiáveis em 2026: Intelbras, TP-Link Tapo, Eufy e Reolink.
        </p>

        <h3 className="text-xl font-bold text-foreground mb-4 mt-6 flex items-center gap-2"><Lock className="w-5 h-5 text-primary" /> Fechaduras</h3>
        <p className="text-foreground leading-relaxed mb-4">
          Modelos com biometria, senha temporária e abertura remota substituem chaveiro inteiro. Para apartamentos alugados, prefira fechaduras que se instalam sobre a maçaneta original sem furar a porta. Sempre escolha modelos com backup por chave física e bateria que dure pelo menos 8 meses.
        </p>

        <h3 className="text-xl font-bold text-foreground mb-4 mt-6"><AlertTriangle className="w-5 h-5 text-primary inline mr-2" /> Cuidados de segurança digital</h3>
        <ul className="space-y-2 text-foreground">
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Crie uma rede Wi-Fi separada (SSID) só para dispositivos IoT.</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Troque todas as senhas padrão no primeiro acesso.</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Ative autenticação em dois fatores no app do fabricante.</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Mantenha firmware e roteador sempre atualizados.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Zap className="w-8 h-8 text-primary" /> Economia de energia: quanto dá para reduzir?
        </h2>
        <p className="text-lg text-foreground leading-relaxed mb-6">
          Estudos do <a href="https://www.gov.br/inmetro/pt-br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Inmetro</a> indicam que casas com automação básica de iluminação e climatização reduzem a conta de luz entre <strong>12% e 28%</strong>. O segredo está em três frentes: lâmpadas LED conectadas (consomem 80% menos que incandescentes), termostatos inteligentes para split (ajustam por presença) e tomadas que cortam o standby de TVs, microondas e carregadores.
        </p>
        <Card className="border border-compras/30 bg-compras/5 mb-6">
          <CardContent className="p-6">
            <p className="font-semibold text-foreground mb-2">Exemplo prático</p>
            <p className="text-muted-foreground">
              Uma família de 4 pessoas que paga R$ 380/mês de luz pode chegar a economizar R$ 95/mês só programando o ar-condicionado para desligar 30 minutos antes do alarme e adotando lâmpadas inteligentes nos cinco cômodos mais usados. O investimento inicial se paga em menos de 14 meses.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Thermometer className="w-8 h-8 text-primary" /> Conforto: rotinas que mudam o dia
        </h2>
        <p className="text-lg text-foreground leading-relaxed mb-6">
          Acima de qualquer gadget, o que define uma boa casa inteligente são as <strong>rotinas automáticas</strong>. Algumas que costumam encantar quem instala pela primeira vez:
        </p>
        <ul className="space-y-3 text-foreground">
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>"Bom dia":</strong> abre persianas, acende cozinha em luz quente, ativa cafeteira e toca notícias.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>"Saindo de casa":</strong> apaga tudo, ativa câmeras, fecha cortinas e arma alarme.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>"Filme":</strong> diminui luzes da sala em 20%, fecha persianas, liga TV e soundbar.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>"Boa noite":</strong> apaga tudo, ativa luz noturna do corredor e baixa temperatura do quarto.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Smartphone className="w-8 h-8 text-primary" /> Instalação passo a passo (sem chamar técnico)
        </h2>
        <ol className="space-y-4 text-foreground">
          <li><strong>1. Mapeie a casa</strong> — anote cômodos, tomadas, pontos de luz, sinal Wi-Fi em cada ambiente.</li>
          <li><strong>2. Reforce o Wi-Fi</strong> — antes de qualquer dispositivo, garanta cobertura. Roteadores mesh resolvem 90% dos problemas.</li>
          <li><strong>3. Instale o assistente primeiro</strong> — ele será o "cérebro" da operação.</li>
          <li><strong>4. Adicione um cômodo por vez</strong> — comece pela sala, depois cozinha, depois quartos.</li>
          <li><strong>5. Crie as rotinas no app</strong> — só vale a pena se você usar todos os dias.</li>
          <li><strong>6. Documente senhas e configurações</strong> — útil em mudanças e para outros moradores.</li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Erros comuns que custam caro</h2>
        <ul className="space-y-3 text-foreground">
          <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>Comprar marcas sem comunidade no Brasil</strong> — sem suporte, atualizações e peças, o produto vira lixo.</span></li>
          <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>Misturar muitos apps diferentes</strong> — concentre tudo em um assistente principal.</span></li>
          <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>Ignorar nobreak no roteador</strong> — sem ele, qualquer queda derruba a casa.</span></li>
          <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span><strong>Esquecer a família</strong> — automação só funciona se todos sabem usar.</span></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Conclusão</h2>
        <p className="text-lg text-foreground leading-relaxed mb-4">
          Uma casa inteligente bem planejada em 2026 não é só sobre tecnologia: é sobre devolver tempo, reduzir contas e dormir mais tranquilo. Começar pequeno e crescer aos poucos é a estratégia que mais funciona — e a que menos pesa no bolso.
        </p>
        <p className="text-lg text-foreground leading-relaxed">
          Se você está organizando um espaço do zero, complemente este guia com nosso <Link to="/lista-de-casa-nova-completa" className="text-primary hover:underline">checklist de casa nova completa</Link> e a <Link to="/criar-lista" className="text-primary hover:underline">ferramenta para criar sua lista personalizada</Link>. Você sai daqui com um plano de ação claro, e não com um carrinho de compras desorganizado.
        </p>
      </section>
    </BlogPostLayout>
  );
};

export default CasaInteligente2026;
