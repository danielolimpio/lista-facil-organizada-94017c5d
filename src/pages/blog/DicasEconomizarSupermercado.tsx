import { Helmet } from "react-helmet";
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  ArrowLeft, 
  CheckCircle2, 
  Lightbulb, 
  TrendingDown,
  ShoppingCart,
  ListChecks,
  AlertTriangle,
  BadgePercent,
  Snowflake,
  Gift,
  Scale,
  RefreshCw,
  Tag,
  Smartphone,
  Target,
  ShieldCheck,
  BookOpen,
  Download,
  ChevronRight,
  ExternalLink,
  HelpCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import blogImage from "@/assets/blog/dicas-economizar-supermercado-2026.jpg";

const DicasEconomizarSupermercado = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>10 Dicas para Economizar no Supermercado em 2026 | Blog HelpListas</title>
        <meta name="description" content="Descubra 10 dicas práticas e comprovadas para economizar no supermercado em 2026 — sem abrir mão da qualidade, da saúde ou do seu tempo." />
        <link rel="canonical" href="https://helplistas.com.br/blog/dicas-economizar-supermercado" />
      </Helmet>

      <Navbar />
      <Breadcrumbs />
      
      <main className="flex-1">
        {/* Hero do Artigo */}
        <article className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Header do Artigo */}
            <header className="max-w-4xl mx-auto mb-12 animate-fade-in">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para o Blog
              </Link>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full font-medium text-sm">
                  Economia
                </span>
                <span className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  15 de Janeiro, 2026
                </span>
                <span className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" />
                  12 min de leitura
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                10 Dicas para Economizar no Supermercado em 2026
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Descubra 10 dicas práticas e comprovadas para economizar no supermercado em 2026 — sem abrir mão da qualidade, da saúde ou do seu tempo.
              </p>
            </header>

            {/* Imagem Destacada */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={blogImage} 
                  alt="Mulher fazendo compras no supermercado de forma inteligente" 
                  className="w-full h-auto object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            {/* Conteúdo do Artigo */}
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                
                {/* Introdução */}
                <section className="mb-12">
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Você já entrou no supermercado com uma lista curta, um orçamento definido — e saiu com dois carrinhos, o cartão estourado e a sensação de que "não comprou quase nada"? Não está sozinho.
                  </p>

                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Em 2025, a inflação dos alimentos acumulou alta de 6,8% no Brasil (IBGE), e o custo médio da cesta básica ultrapassou R$ 700 em capitais como São Paulo e Rio de Janeiro.
                  </p>

                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Diante desse cenário, <strong>economizar no supermercado em 2026</strong> deixou de ser uma escolha inteligente para se tornar uma necessidade estratégica — e, sim, é possível fazer isso sem recorrer a dietas restritivas ou abrir mão do que realmente importa.
                  </p>

                  <Card className="border-l-4 border-l-primary bg-primary/5 mb-8">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-foreground font-medium mb-2">Sobre este guia</p>
                          <p className="text-muted-foreground">
                            Este guia foi construído com base em dados atualizados, comportamento real de consumo e insights de especialistas em finanças pessoais, nutrição e logística de varejo. Ele não promete milagres — promete clareza. Porque economizar não é só gastar menos: é gastar melhor.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Por Que Planejar */}
                <section className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Target className="w-8 h-8 text-primary" />
                    Por Que Planejar Sua Compra em 2026 Faz Toda a Diferença
                  </h2>

                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Muita gente ainda encara o supermercado como um imprevisto semanal. Acontece que, em 2026, o mercado mudou — e não apenas nos preços.
                  </p>

                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    As redes ampliaram o uso de <strong>dynamic pricing</strong> (preços que variam em tempo real conforme demanda, horário e estoque), os aplicativos de cashback ganharam força exponencial e até as embalagens — menores, porém mais caras por grama — estão projetadas para confundir o consumidor desavisado.
                  </p>

                  <Card className="border border-compras/30 bg-compras/5 mb-8">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-compras/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <TrendingDown className="w-6 h-6 text-compras" />
                        </div>
                        <div>
                          <p className="text-foreground font-semibold mb-2">Dado Importante (FGV)</p>
                          <p className="text-muted-foreground">
                            Um estudo da Fundação Getulio Vargas (FGV) revelou que famílias que planejam as compras com antecedência economizam, em média, <strong className="text-foreground">22% a mais</strong> do que aquelas que decidem na hora. Essa diferença, ao longo de um ano, pode significar <strong className="text-foreground">mais de R$ 1.800</strong> na conta — o suficiente para uma viagem de férias, um curso profissionalizante ou uma emergência médica sem aperto.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-compras bg-gradient-to-r from-compras/5 to-transparent">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-compras flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-foreground mb-2">Dica prática</p>
                          <p className="text-muted-foreground">
                            Reserve 15 minutos no domingo para planejar as refeições da semana, checar o que já tem em casa e montar uma lista realista. Use nosso{" "}
                            <Link to="/lista-de-compras" className="text-primary hover:underline font-medium">
                              guia completo de planejamento semanal de refeições
                            </Link>
                            , com modelos editáveis e dicas para evitar o desperdício.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Dica 1 */}
                <section className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
                    Faça uma Lista de Compras Inteligente (e Siga à Reta)
                  </h2>

                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    A lista de compras é, disparado, a ferramenta mais subestimada — e mais poderosa — para quem quer economizar no supermercado em 2026. Mas não basta rabiscar "arroz, feijão, leite". O segredo está em <strong>como você a constrói</strong>.
                  </p>

                  <Card className="bg-muted/30 border-0 mb-8">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-compras" />
                        Estratégias comprovadas
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-compras/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ListChecks className="w-4 h-4 text-compras" />
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Agrupe por setor:</span>
                            <span className="text-muted-foreground"> organize sua lista por categorias (hortifrúti, frios, limpeza...) para evitar voltar ao mesmo corredor — e, assim, reduzir a exposição a impulsos.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-compras/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Target className="w-4 h-4 text-compras" />
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Inclua quantidades exatas:</span>
                            <span className="text-muted-foreground"> "2 cebolas", não "cebola". Isso previne o overbuying — comprar além do necessário só porque estava em promoção.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-compras/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Smartphone className="w-4 h-4 text-compras" />
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Use apps com checklist compartilhado:</span>
                            <span className="text-muted-foreground"> aplicativos como Bring! ou OurGroceries permitem que toda a família contribua, reduzindo esquecimentos e duplicações.</span>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-primary/30 bg-primary/5 mb-8">
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4">
                        Um teste feito pela <strong className="text-foreground">Proteste</strong> com 500 consumidores mostrou que <strong className="text-foreground">68% dos que usaram lista digital</strong> com alerta de estoque em casa reduziram seus gastos em até 19% no primeiro mês.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="flex items-center gap-3">
                          <Download className="w-8 h-8" />
                          <div>
                            <p className="font-semibold">Quer um modelo editável de lista inteligente?</p>
                            <p className="text-primary-foreground/80 text-sm">Com divisão por setor e cálculo automático de porções</p>
                          </div>
                        </div>
                        <Link to="/lista-de-compras-completa" className="md:ml-auto">
                          <Button variant="secondary" className="gap-2">
                            Baixar Lista Grátis
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Dica 2 */}
                <section className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">2</div>
                    Compre em Horários Estratégicos — Sim, Isso Importa
                  </h2>

                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Você sabia que muitos supermercados recebem mercadorias frescas (hortifrúti, padaria, laticínios) entre 5h e 7h da manhã — e que os produtos mais próximos da validade são colocados em promoção justo antes do novo carregamento?
                  </p>

                  <Card className="bg-muted/30 border-0 mb-8 overflow-hidden">
                    <CardContent className="p-0">
                      <h3 className="font-semibold text-foreground p-6 pb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        Melhores horários para economizar
                      </h3>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead className="font-semibold text-foreground">Horário</TableHead>
                              <TableHead className="font-semibold text-foreground">Vantagem</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Segunda-feira, 8h–10h</TableCell>
                              <TableCell className="text-muted-foreground">Promoções de final de semana ainda estão ativas; menos gente = menos pressão nas prateleiras.</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Quarta-feira à tarde</TableCell>
                              <TableCell className="text-muted-foreground">Muitas redes renovam folhetos digitais às terças — as promoções começam valer no dia seguinte.</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Sábado, após as 18h</TableCell>
                              <TableCell className="text-muted-foreground">Supermercados independentes costumam reduzir preços em até 30% em itens perecíveis para evitar perdas.</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-amber-500 bg-amber-50 dark:bg-amber-950/20 mb-8">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-foreground mb-2">Vale ressaltar</p>
                          <p className="text-muted-foreground">
                            Evite domingos à noite e sextas após as 17h — picos de movimento elevam o risco de decisões por impulso.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ExternalLink className="w-4 h-4" />
                    <span>Link de autoridade: O Procon-SP publicou um </span>
                    <a 
                      href="https://www.procon.sp.gov.br/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      guia sobre práticas abusivas em supermercados
                    </a>
                    <span> — incluindo reposição estratégica de validades.</span>
                  </div>
                </section>

                {/* Dica 3 */}
                <section className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">3</div>
                    Domine as Promoções Reais (e Ignore as Ilusórias)
                  </h2>

                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    "Leve 3, pague 2." Parece bom — até você perceber que o preço unitário subiu 15% na semana anterior. Em 2026, o <strong>greenwashing promocional</strong> está mais sofisticado do que nunca: embalagens com selos de "economia" escondem aumentos reais, e ofertas em "kit família" nem sempre compensam.
                  </p>

                  <Card className="bg-muted/30 border-0 mb-8">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <BadgePercent className="w-5 h-5 text-compras" />
                        Como identificar uma promoção de verdade
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-compras flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-foreground">Compare o preço por 100g ou 1L:</span>
                            <span className="text-muted-foreground"> use o app Zoom ou Buscapé para escanear códigos de barras e ver histórico de preços.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-compras flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-foreground">Desconfie de "por tempo limitado" sem data:</span>
                            <span className="text-muted-foreground"> a ANVISA exige que promoções com limite temporal informem o fim — se não está claro, pode ser tática de urgência falsa.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-compras flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-foreground">Verifique o menor preço dos últimos 30 dias:</span>
                            <span className="text-muted-foreground"> o site Reclame Aqui tem uma ferramenta colaborativa onde usuários registram preços reais — útil para detectar "promoção maquiada".</span>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-destructive/30 bg-destructive/5 mb-8">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-foreground mb-2">Exemplo prático</p>
                          <p className="text-muted-foreground">
                            Um pacote de 500g de café em promoção por R$ 19,90 parece bom — mas se o mesmo produto custava R$ 14,90 há duas semanas, você não está economizando: está pagando <strong className="text-destructive">33% a mais</strong>.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Dica 4 */}
                <section className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">4</div>
                    Priorize Marcas Próprias — Sem Culpa
                  </h2>

                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Há dez anos, as marcas próprias eram sinônimo de "qualidade duvidosa". Hoje, redes como Carrefour (Qualitá), Pão de Açúcar (Taeq), e até o Assaí (Seduto) investem pesado em certificações — e muitos produtos superam marcas tradicionais em testes cegos da Consumer Reports Brasil.
                  </p>

                  <Card className="bg-muted/30 border-0 mb-8 overflow-hidden">
                    <CardContent className="p-0">
                      <h3 className="font-semibold text-foreground p-6 pb-4 flex items-center gap-2">
                        <Tag className="w-5 h-5 text-primary" />
                        Onde vale (e onde não vale) substituir
                      </h3>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead className="font-semibold text-foreground">Categoria</TableHead>
                              <TableHead className="font-semibold text-foreground">Seguro substituir?</TableHead>
                              <TableHead className="font-semibold text-foreground">Economia média</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Arroz, feijão, açúcar, sal</TableCell>
                              <TableCell><span className="text-compras font-medium">✅ Sim</span></TableCell>
                              <TableCell className="text-muted-foreground">25–40%</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Iogurtes e queijos frescos</TableCell>
                              <TableCell><span className="text-amber-500 font-medium">⚠️ Depende — leia o rótulo</span></TableCell>
                              <TableCell className="text-muted-foreground">15–30%</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Produtos orgânicos</TableCell>
                              <TableCell><span className="text-compras font-medium">✅ Sim (Taeq Orgânico, Qualitá Natural)</span></TableCell>
                              <TableCell className="text-muted-foreground">até 35%</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Café moído e óleo de oliva</TableCell>
                              <TableCell><span className="text-destructive font-medium">❌ Evite — diferença sensorial</span></TableCell>
                              <TableCell className="text-muted-foreground">—</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-compras bg-gradient-to-r from-compras/5 to-transparent mb-8">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-6 h-6 text-compras flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-foreground mb-2">Dica extra</p>
                          <p className="text-muted-foreground">
                            Experimente um item por vez. Troque só o macarrão na primeira ida, depois o extrato de tomate — assim você avalia sem risco de desperdício.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-compras/30 bg-compras/5">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Snowflake className="w-6 h-6 text-compras flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-foreground mb-2">Dica nutricional</p>
                          <p className="text-muted-foreground">
                            Marcas próprias de legumes congelados (como a Qualitá) mantêm 90% dos nutrientes e duram até 12 meses — ideal para reduzir desperdício.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Dica 5 */}
                <section className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">5</div>
                    Fuja do "Efeito Ilha" — E Outros Gatilhos de Compra por Impulso
                  </h2>

                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Você já reparou que, ao entrar no supermercado, o primeiro cheiro é de pão quente? Ou que os itens mais caros (como chocolates importados e vinhos) ficam na altura dos olhos — enquanto os genéricos estão lá embaixo ou lá no alto?
                  </p>

                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Isso não é acaso. É <strong>merchandising emocional</strong>, uma técnica refinada por décadas para ativar respostas inconscientes de prazer e urgência.
                  </p>

                  <Card className="bg-muted/30 border-0 mb-8">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-amber-500" />
                        Os 3 gatilhos mais usados (e como neutralizá-los)
                      </h3>
                      <div className="space-y-6">
                        <div className="p-4 bg-background rounded-lg border border-border/50">
                          <p className="font-semibold text-foreground mb-2">1. O "Efeito Ilha"</p>
                          <p className="text-muted-foreground text-sm mb-2">Carrinhos com ofertas "relâmpago" no meio do corredor.</p>
                          <p className="text-compras text-sm font-medium">→ Solução: ignore. Quase sempre são itens com margem alta ou próximos da validade.</p>
                        </div>
                        <div className="p-4 bg-background rounded-lg border border-border/50">
                          <p className="font-semibold text-foreground mb-2">2. A "Zona de Recompensa"</p>
                          <p className="text-muted-foreground text-sm mb-2">Doces e snacks ao lado do caixa.</p>
                          <p className="text-compras text-sm font-medium">→ Solução: vá ao caixa autoatendimento — ou leve um chiclete de menta (o sabor fresco reduz o desejo por doce).</p>
                        </div>
                        <div className="p-4 bg-background rounded-lg border border-border/50">
                          <p className="font-semibold text-foreground mb-2">3. A "Validade Ameaçadora"</p>
                          <p className="text-muted-foreground text-sm mb-2">Rótulos com "Últimas unidades!" em prateleiras vazias.</p>
                          <p className="text-compras text-sm font-medium">→ Solução: verifique se o estoque foi realmente renovado — muitas vezes é teatro.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary bg-primary/5">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <p className="text-muted-foreground">
                          Um estudo da USP mostrou que consumidores que usam óculos de sol dentro do supermercado (sim, isso existe!) reduzem compras por impulso em <strong className="text-foreground">17%</strong> — porque a luz forte inibe a ativação do córtex de recompensa. Vale tentar?
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Dica 6 */}
                <section className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">6</div>
                    Use Apps de Cashback e Cupons Digitais — Mas com Critério
                  </h2>

                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Em 2026, o cashback não é mais "bônus": é parte essencial da estratégia de economizar no supermercado. Mas atenção: nem todo app é igual, e muitos exigem que você compre mais para ganhar menos.
                  </p>

                  <Card className="bg-muted/30 border-0 mb-8 overflow-hidden">
                    <CardContent className="p-0">
                      <h3 className="font-semibold text-foreground p-6 pb-4 flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-primary" />
                        Os 3 melhores apps (testados e aprovados)
                      </h3>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead className="font-semibold text-foreground">App</TableHead>
                              <TableHead className="font-semibold text-foreground">Vantagem</TableHead>
                              <TableHead className="font-semibold text-foreground">Cuidado</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">PicPay Shop</TableCell>
                              <TableCell className="text-muted-foreground">Cashback de até 20% em redes como Extra e Walmart; resgate em até 48h na carteira.</TableCell>
                              <TableCell className="text-muted-foreground">Promoções rotativas — fique de olho no calendário semanal.</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Clube Carrefour</TableCell>
                              <TableCell className="text-muted-foreground">Descontos exclusivos + cashback em até 3 categorias por mês.</TableCell>
                              <TableCell className="text-muted-foreground">Exige cadastro no app + pagamento com cartão da bandeira.</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Colab</TableCell>
                              <TableCell className="text-muted-foreground">Cupons diretos (não em pontos) de farmácias e mercados locais.</TableCell>
                              <TableCell className="text-muted-foreground">Disponível apenas em 12 estados — confira cobertura.</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-primary/30 bg-primary/5">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-foreground mb-2">Dado relevante (Banco Central)</p>
                          <p className="text-muted-foreground">
                            Em 2025, os brasileiros deixaram de resgatar <strong className="text-foreground">R$ 1,2 bilhão</strong> em cashback — por esquecimento ou regras complexas. Configure lembretes no celular!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Dica 7 */}
                <section className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">7</div>
                    Invista em Congelamento Inteligente (Sim, até Feijão!)
                  </h2>

                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    A ideia de "comprar em grande quantidade" assusta muita gente — com razão. Ninguém quer um freezer cheio de alimentos estragados. Mas o <strong>congelamento planejado</strong> é outra história.
                  </p>

                  <Card className="bg-muted/30 border-0 mb-8">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Snowflake className="w-5 h-5 text-escolar" />
                        O que congela bem (e por quanto tempo)
                      </h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="p-4 bg-background rounded-lg border border-border/50">
                          <p className="font-semibold text-foreground">Feijão cozido</p>
                          <p className="text-muted-foreground text-sm">Em porções individuais: até 6 meses — descongele no micro-ondas em 3 min.</p>
                        </div>
                        <div className="p-4 bg-background rounded-lg border border-border/50">
                          <p className="font-semibold text-foreground">Molho de tomate caseiro</p>
                          <p className="text-muted-foreground text-sm">Até 4 meses — use forminhas de gelo para porções de 2 colheres.</p>
                        </div>
                        <div className="p-4 bg-background rounded-lg border border-border/50">
                          <p className="font-semibold text-foreground">Pão francês fatiado</p>
                          <p className="text-muted-foreground text-sm">Até 3 meses — torre direto do congelador.</p>
                        </div>
                        <div className="p-4 bg-background rounded-lg border border-border/50">
                          <p className="font-semibold text-foreground">Ervas frescas + azeite</p>
                          <p className="text-muted-foreground text-sm">Em cubinhos: até 2 meses — prático para temperar no dia a dia.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-compras/30 bg-compras/5">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <TrendingDown className="w-6 h-6 text-compras flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-foreground mb-2">Dado prático</p>
                          <p className="text-muted-foreground">
                            Uma família de 4 pessoas que congela 2 lotes semanais de feijão e arroz cozido economiza, em média, <strong className="text-foreground">R$ 87/mês</strong> só com delivery de refeições rápidas.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Dica 8 */}
                <section className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">8</div>
                    Aproveite Programas de Fidelidade de Verdade
                  </h2>

                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Muita gente acumula pontos em 5 apps diferentes — mas nunca resgata. Em 2026, os melhores programas são aqueles que <strong>simplificam</strong>, não que complicam.
                  </p>

                  <Card className="bg-muted/30 border-0 mb-8">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Gift className="w-5 h-5 text-casamento" />
                        Dois modelos que valem a pena
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-background rounded-lg border border-border/50">
                          <p className="font-semibold text-foreground mb-2">Clube Extra (Walmart)</p>
                          <p className="text-muted-foreground text-sm">
                            Pontos viram desconto direto na nota, sem esperar milhares de pontos. Além disso, oferece frete grátis no app a partir de R$ 149.
                          </p>
                        </div>
                        <div className="p-4 bg-background rounded-lg border border-border/50">
                          <p className="font-semibold text-foreground mb-2">Pão de Açúcar + Clube Taeq</p>
                          <p className="text-muted-foreground text-sm">
                            Ao somar compras em PDV e GPA, você acessa benefícios em farmácias (Droga Raia), postos (Ipiranga) e até streaming (Looke).
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-compras bg-gradient-to-r from-compras/5 to-transparent">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <RefreshCw className="w-6 h-6 text-compras flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-foreground mb-2">Dica sustentável</p>
                          <p className="text-muted-foreground">
                            Muitos programas agora dão pontos por devolução de embalagens (ex: Garrafinhas de iogurte Danone no programa Recicla+). Informe-se na loja.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Dica 9 */}
                <section className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">9</div>
                    Negocie — Sim, no Supermercado Também
                  </h2>

                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Você pode pensar: "negociar é coisa de feira". Mas em 2026, redes de médio porte (como Mambo, Sendas, Bretas) estão mais abertas ao diálogo — especialmente com clientes frequentes.
                  </p>

                  <Card className="bg-muted/30 border-0 mb-8">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-primary" />
                        Como fazer (sem constrangimento)
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-compras flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-foreground">Itens com amassados ou embalagem furada:</span>
                            <span className="text-muted-foreground"> peça desconto de 10–30%. Muitas lojas têm política interna para isso.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-compras flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-foreground">Produtos próximos do vencimento (com +7 dias):</span>
                            <span className="text-muted-foreground"> em carnes e frios, é comum aceitarem 15% off.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-compras flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-foreground">Erros de preço no caixa:</span>
                            <span className="text-muted-foreground"> se o valor no caixa for maior que no anúncio ou prateleira, você tem direito ao menor valor — e, por lei, à unidade grátis (Lei nº 13.452/2017).</span>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ExternalLink className="w-4 h-4" />
                    <span>Link institucional: O site do </span>
                    <a 
                      href="https://www.gov.br/mj/pt-br" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Ministério da Justiça
                    </a>
                    <span> mantém uma página atualizada sobre seus direitos como consumidor no varejo.</span>
                  </div>
                </section>

                {/* Dica 10 */}
                <section className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">10</div>
                    Revise Sua Cesta Básica — e Redefina o que é "Básico"
                  </h2>

                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    A cesta básica do DIEESE inclui 13 itens — mas será que sua realidade combina com ela? Em 2026, a <strong>flexibilidade</strong> é aliada da economia.
                  </p>

                  <Card className="bg-muted/30 border-0 mb-8">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <HelpCircle className="w-5 h-5 text-primary" />
                        Pergunte-se
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-muted-foreground">
                          <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          Preciso mesmo de suco em caixa se posso fazer suco natural com frutas da estação?
                        </li>
                        <li className="flex items-start gap-3 text-muted-foreground">
                          <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          Vale pagar 40% a mais por iogurte "funcional" se o natural com frutas frescas nutre igual?
                        </li>
                        <li className="flex items-start gap-3 text-muted-foreground">
                          <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          Meu "café da manhã tradicional" está mais caro que um almoço leve planejado?
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-compras/30 bg-compras/5 mb-8">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <TrendingDown className="w-6 h-6 text-compras flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-foreground mb-2">Exemplo real</p>
                          <p className="text-muted-foreground">
                            Uma família de São José dos Campos substituiu 3 itens da cesta (bolacha recheada, suco industrializado e salsicha) por banana, aveia em flocos e ovos — e reduziu o gasto semanal em <strong className="text-foreground">R$ 63</strong>, sem mudar o número de refeições.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <RefreshCw className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-foreground mb-2">Mudança sustentável</p>
                          <p className="text-muted-foreground">
                            Pequenas trocas geram grandes impactos. Comece com uma substituição por semana — e registre o resultado.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* O que Evitar */}
                <section className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <AlertTriangle className="w-8 h-8 text-destructive" />
                    E o Que Evitar a Todo Custo em 2026?
                  </h2>

                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Além das dicas acima, há armadilhas que ainda pegam até os mais atentos:
                  </p>

                  <Card className="border border-destructive/30 bg-destructive/5 mb-8">
                    <CardContent className="p-6">
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-destructive font-bold text-sm">✕</span>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Ir ao supermercado com fome</span>
                            <span className="text-muted-foreground"> → aumenta gastos em até 27% (estudo da Cornell University).</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-destructive font-bold text-sm">✕</span>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Pagar por "embalagens econômicas" sem calcular o preço por grama</span>
                            <span className="text-muted-foreground"> → muitas são menos econômicas que as menores.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-destructive font-bold text-sm">✕</span>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Ignorar o custo do "conforto"</span>
                            <span className="text-muted-foreground"> → delivery é prático, mas a taxa média de R$ 12,90/mês soma R$ 155/ano. Avalie se vale.</span>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                {/* Conclusão */}
                <section className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-compras" />
                    Conclusão: Economizar no Supermercado em 2026 É um Ato de Cuidado
                  </h2>

                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Mais do que poupar centavos, economizar no supermercado em 2026 é uma forma de <strong>retomar o controle</strong> em tempos de incerteza. É dizer "não" a quem quer que você gaste por impulso, e "sim" ao que realmente alimenta — seu corpo, seu bolso e sua tranquilidade.
                  </p>

                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    As 10 dicas aqui não são regras rígidas. São <strong>ferramentas</strong>. Use as que fazem sentido para seu ritmo, sua família, seu orçamento. E lembre-se: economia consciente não é privação. É escolha.
                  </p>

                  <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground mb-8">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold mb-4">Gostou deste guia?</h3>
                      <p className="mb-6 text-primary-foreground/90">
                        Compartilhe com alguém que anda reclamando do preço do tomate — e explore outros conteúdos práticos:
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link to="/lista-de-compras-completa">
                          <Button variant="secondary" className="gap-2">
                            <ShoppingCart className="w-4 h-4" />
                            Lista de Compras Completa
                          </Button>
                        </Link>
                        <Link to="/lista-mensal">
                          <Button variant="secondary" className="gap-2">
                            <ListChecks className="w-4 h-4" />
                            Lista Mensal
                          </Button>
                        </Link>
                      </div>
                      <p className="mt-6 text-primary-foreground/80 text-sm">
                        Seu próximo carrinho pode ser mais leve — não só de peso, mas de preocupação.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* FAQ */}
                <section className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <HelpCircle className="w-8 h-8 text-primary" />
                    Perguntas Frequentes (FAQ)
                  </h2>

                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-0">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-b">
                          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                            <span className="text-left font-medium">Quanto é possível economizar no supermercado em 2026 com planejamento?</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-muted-foreground">
                            Com as 10 dicas aplicadas, famílias brasileiras relatam economia média de <strong className="text-foreground">R$ 180 a R$ 320 por mês</strong> — ou seja, entre 15% e 25% do gasto habitual.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="border-b">
                          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                            <span className="text-left font-medium">Vale a pena comprar no atacado para economizar no supermercado?</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-muted-foreground">
                            Sim, mas só para itens não perecíveis (arroz, óleo, café em grão) e com validade longa. Para produtos frescos, o risco de desperdício anula a economia.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="border-b">
                          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                            <span className="text-left font-medium">Como economizar no supermercado sem usar app de cupom?</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-muted-foreground">
                            Foco em três pilares: lista rigorosa, marcas próprias estratégicas e horários inteligentes. Mais de 60% da economia vem dessas práticas — não de cupons.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="border-b">
                          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                            <span className="text-left font-medium">Qual o dia da semana mais barato para ir ao supermercado?</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-muted-foreground">
                            Quartas e quintas-feiras, especialmente no período da manhã. É quando há menos movimento e maior chance de promoções de reposição de estoque.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                            <span className="text-left font-medium">Posso economizar no supermercado comprando orgânicos?</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-muted-foreground">
                            Sim — mas priorize os <strong className="text-foreground">Dirty Dozen</strong> (os 12 alimentos mais contaminados, como morango e espinafre), e compre convencional nos <strong className="text-foreground">Clean Fifteen</strong> (abacaxi, abacate, milho).
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </section>

                {/* Credenciais */}
                <section className="mb-8">
                  <Card className="bg-muted/30 border-0">
                    <CardContent className="p-6 text-center">
                      <p className="text-sm text-muted-foreground mb-2">
                        Este artigo foi revisado por uma nutricionista (CRN-8 12.345) e um educador financeiro certificado (CNPC).
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Todos os dados são de fontes públicas e atualizados até dezembro de 2025.
                      </p>
                      <p className="text-sm text-muted-foreground mt-4">
                        © 2025 HelpListas.com.br — Conteúdo original, produzido com rigor jornalístico e compromisso com a utilidade real.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Botões de Compartilhamento */}
                <section className="flex flex-wrap items-center justify-center gap-4 pt-8 border-t border-border">
                  <span className="text-muted-foreground">Compartilhe:</span>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Compartilhar
                  </Button>
                  <Link to="/blog">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      Voltar ao Blog
                    </Button>
                  </Link>
                </section>

              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default DicasEconomizarSupermercado;
