import { 
  Cookie, 
  Shield, 
  Info, 
  CheckCircle2, 
  Settings, 
  BarChart3, 
  Megaphone, 
  Globe, 
  Mail, 
  Lock, 
  RefreshCw, 
  ExternalLink,
  Smartphone,
  ChevronRight,
  AlertCircle,
  Eye
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PoliticaDeCookies = () => {
  const cookieTypes = [
    {
      type: "Cookies Essenciais",
      icon: Lock,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-l-primary",
      description: "Indispensáveis para o funcionamento básico do site. Sem eles, algumas funcionalidades não funcionam.",
      examples: [
        "Preferências de navegação",
        "Segurança da sessão",
        "Funcionalidades básicas do site"
      ],
      required: true
    },
    {
      type: "Cookies de Desempenho e Funcionalidade",
      icon: Settings,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      borderColor: "border-l-blue-500",
      description: "Melhoram sua experiência, lembrando preferências, mantendo sessões ativas ou otimizando a navegação.",
      examples: [
        "Preferências de idioma",
        "Configurações de exibição",
        "Performance do site"
      ],
      required: false
    },
    {
      type: "Cookies de Análise e Personalização",
      icon: BarChart3,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
      borderColor: "border-l-emerald-500",
      description: "Coletam dados agregados sobre como os usuários interagem com o site, ajudando-nos a melhorar continuamente.",
      examples: [
        "Páginas mais visitadas",
        "Tempo de permanência",
        "Origem dos acessos",
        "Comportamento de navegação"
      ],
      required: false
    },
    {
      type: "Cookies de Publicidade",
      icon: Megaphone,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      borderColor: "border-l-orange-500",
      description: "Permitem exibir anúncios mais relevantes para você, evitar repetição excessiva e segmentar campanhas com base em seus interesses.",
      examples: [
        "Personalização de anúncios",
        "Medição de eficácia de campanhas",
        "Retargeting entre sites"
      ],
      required: false
    }
  ];

  const specificCookies = [
    {
      category: "Desempenho e Funcionalidade",
      cookies: [
        { name: "rc::h", provider: "Google", purpose: "Melhoria da performance e funcionalidade do site.", expiration: "Persistente" }
      ]
    },
    {
      category: "Análise (Google Analytics)",
      cookies: [
        { name: "_ga", provider: "Google Analytics", purpose: "Distinguir usuários individuais para obter dados sobre o uso do site.", expiration: "1 ano, 1 mês e 4 dias" },
        { name: "_ga_#", provider: "Google Analytics", purpose: "Registrar ID específico para estatísticas de uso.", expiration: "1 ano, 1 mês e 4 dias" }
      ]
    },
    {
      category: "Publicidade (Google Ads / DoubleClick)",
      cookies: [
        { name: "test_cookie", provider: "DoubleClick (Google)", purpose: "Verificar se o navegador aceita cookies e exibir anúncios relevantes.", expiration: "15 minutos" }
      ]
    }
  ];

  const browserLinks = [
    { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
    { name: "Mozilla Firefox", url: "https://support.mozilla.org/pt-BR/kb/cookies-informacoes-que-os-sites-guardam-no-luftare" },
    { name: "Safari", url: "https://support.apple.com/pt-br/guide/safari/sfri11471/mac" },
    { name: "Microsoft Edge", url: "https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
    { name: "Opera", url: "https://help.opera.com/en/latest/web-preferences/#cookies" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <SEO title="Política de Cookies | Helplistas" description="Entenda como utilizamos cookies para melhorar sua experiência no Helplistas." path="/politica-de-cookies" />
      <Navbar />
      <Breadcrumbs />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full mb-8 shadow-lg">
            <Cookie className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Política de Cookies
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Última atualização: 12 de janeiro de 2026
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Esta política explica como o Help Listas utiliza cookies e tecnologias semelhantes para 
            reconhecê-lo quando você visita nosso site.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Introduction Card */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/30">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-4 text-2xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Info className="w-6 h-6 text-primary" />
                </div>
                O que são Cookies?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Cookies são pequenos arquivos de dados armazenados no seu computador ou dispositivo móvel 
                quando você visita um site. Eles são amplamente utilizados pelos proprietários de sites 
                para garantir que os sites funcionem corretamente, melhorem sua eficiência e forneçam 
                informações para relatórios.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card className="border border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Globe className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Cookies Próprios</h4>
                        <p className="text-sm text-muted-foreground">
                          Criados pelo próprio site que você está visitando (Help Listas).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-muted bg-muted/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <ExternalLink className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Cookies de Terceiros</h4>
                        <p className="text-sm text-muted-foreground">
                          Criados por empresas externas (como Google) para publicidade e análises.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Why We Use Cookies */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Por que Usamos Cookies?</h2>
            </div>
            
            <div className="grid gap-6">
              {cookieTypes.map((cookie, index) => (
                <Card 
                  key={index} 
                  className={`border-l-4 ${cookie.borderColor} shadow-md hover:shadow-lg transition-shadow`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${cookie.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <cookie.icon className={`w-6 h-6 ${cookie.color}`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{cookie.type}</CardTitle>
                          <CardDescription className="text-base">{cookie.description}</CardDescription>
                        </div>
                      </div>
                      {cookie.required && (
                        <span className="text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-full whitespace-nowrap font-medium">
                          Obrigatório
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {cookie.examples.map((example, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className={`w-4 h-4 ${cookie.color} flex-shrink-0`} />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Cookie Control */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-4 text-2xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                Como Posso Controlar os Cookies?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <p className="text-muted-foreground text-lg">
                Você tem o direito de decidir se aceita ou rejeita cookies. Pode exercer esse direito 
                usando o Gerenciador de Consentimento de Cookies, disponível no banner de notificação 
                ou diretamente no rodapé do site.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="border border-primary/30 bg-primary/5 text-center p-6">
                  <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Aceitar Todos</h4>
                  <p className="text-sm text-muted-foreground">
                    Permite que todos os cookies sejam ativados.
                  </p>
                </Card>
                
                <Card className="border border-muted bg-muted/30 text-center p-6">
                  <Shield className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Rejeitar Todos</h4>
                  <p className="text-sm text-muted-foreground">
                    Apenas cookies essenciais permanecerão ativos.
                  </p>
                </Card>
                
                <Card className="border border-blue-200 bg-blue-50 dark:bg-blue-950/20 text-center p-6">
                  <Settings className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Personalizar</h4>
                  <p className="text-sm text-muted-foreground">
                    Selecione quais categorias deseja ativar.
                  </p>
                </Card>
              </div>

              <div className="bg-muted/50 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Smartphone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Configure pelo Navegador</h4>
                    <p className="text-muted-foreground mb-4">
                      Você também pode configurar seu navegador para bloquear ou alertar sobre cookies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {browserLinks.map((browser, index) => (
                        <a
                          key={index}
                          href={browser.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors border border-border"
                        >
                          {browser.name}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-l-4 border-l-amber-500 bg-amber-50 dark:bg-amber-950/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Importante:</strong> Recusar cookies pode afetar 
                      a funcionalidade do site e a qualidade da sua experiência de navegação.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Specific Cookies Used */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Cookies Específicos Utilizados</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {specificCookies.map((category, index) => (
                <AccordionItem 
                  key={index} 
                  value={`category-${index}`}
                  className="border rounded-xl px-6 shadow-sm bg-card"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 text-primary" />
                      {category.category}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4">
                      {category.cookies.map((cookie, i) => (
                        <Card key={i} className="bg-muted/30 border-0">
                          <CardContent className="p-4">
                            <div className="grid md:grid-cols-4 gap-4">
                              <div>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Nome</p>
                                <p className="font-mono text-sm font-medium text-foreground">{cookie.name}</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Fornecedor</p>
                                <p className="text-sm text-foreground">{cookie.provider}</p>
                              </div>
                              <div className="md:col-span-2">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Finalidade</p>
                                <p className="text-sm text-muted-foreground">{cookie.purpose}</p>
                              </div>
                            </div>
                            <div className="mt-3 pt-3 border-t border-border/50">
                              <p className="text-xs text-muted-foreground">
                                <span className="font-medium">Expiração:</span> {cookie.expiration}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Other Technologies */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-4 text-2xl">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                Outras Tecnologias de Rastreamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Além dos cookies, podemos usar tecnologias como <strong className="text-foreground">web beacons</strong> 
                (também chamados de "pixels de rastreamento" ou "gif transparentes"). São pequenos arquivos 
                gráficos que contêm identificadores exclusivos, permitindo-nos monitorar padrões de tráfego, 
                entender se um e-mail foi aberto ou se um anúncio foi visualizado.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border border-muted bg-muted/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-primary" />
                      Web Beacons
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Essas tecnologias geralmente dependem de cookies para funcionar corretamente. 
                      Recusar cookies pode prejudicar seu funcionamento.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border border-muted bg-muted/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Flash Cookies (LSOs)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      O Help Listas <strong>não utiliza</strong> Flash Cookies, pois o Adobe Flash foi 
                      descontinuado e não é mais suportado pelos navegadores modernos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Targeted Advertising */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-4 text-2xl">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Megaphone className="w-6 h-6 text-orange-600" />
                </div>
                Publicidade Direcionada
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Terceiros (como redes de anúncios, incluindo Google AdSense e Ezoic) podem instalar cookies 
                no seu dispositivo para exibir anúncios relevantes com base nas suas visitas ao Help Listas 
                e a outros sites. Eles também podem usar tecnologia para medir a eficácia desses anúncios.
              </p>
              
              <Card className="border border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Sua Privacidade é Protegida</h4>
                      <p className="text-muted-foreground">
                        As informações coletadas <strong className="text-foreground">não identificam diretamente</strong> 
                        seu nome, e-mail ou dados pessoais, a menos que você opte por fornecê-los voluntariamente 
                        (por exemplo, ao se inscrever em uma newsletter).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-4 text-2xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                Atualizações desta Política
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Podemos atualizar esta Política periodicamente para refletir mudanças nos cookies que 
                utilizamos, ou por motivos operacionais, legais ou regulamentares. A data no topo desta 
                página indica quando ela foi atualizada pela última vez.
              </p>
              <p className="text-muted-foreground">
                Recomendamos que você consulte esta página regularmente para se manter informado.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-2 border-primary/20 shadow-lg bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-4 text-2xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                Entre em Contato
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg mb-8">
                Se tiver dúvidas sobre o uso de cookies ou outras tecnologias de rastreamento, 
                entre em contato conosco:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border border-border bg-background text-center p-6 hover:shadow-md transition-shadow">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">E-mail Geral</h4>
                  <a 
                    href="mailto:contato@helplistas.com.br" 
                    className="text-primary hover:underline text-sm"
                  >
                    contato@helplistas.com.br
                  </a>
                </Card>
                
                <Card className="border border-border bg-background text-center p-6 hover:shadow-md transition-shadow">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Privacidade</h4>
                  <a 
                    href="mailto:privacidade@helplistas.com.br" 
                    className="text-primary hover:underline text-sm"
                  >
                    privacidade@helplistas.com.br
                  </a>
                </Card>
                
                <Card className="border border-border bg-background text-center p-6 hover:shadow-md transition-shadow">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Site</h4>
                  <a 
                    href="https://helplistas.com.br" 
                    className="text-primary hover:underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    helplistas.com.br
                  </a>
                </Card>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaDeCookies;
