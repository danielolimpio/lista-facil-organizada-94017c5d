import { Cookie, Shield, Info, CheckCircle2, XCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PoliticaDeCookies = () => {
  const cookieTypes = [
    {
      type: "Cookies Essenciais",
      icon: CheckCircle2,
      color: "text-primary",
      description: "Necessários para o funcionamento básico do site",
      examples: ["Preferências de navegação", "Segurança da sessão", "Funcionalidades básicas"],
      required: true
    },
    {
      type: "Cookies Analíticos",
      icon: Info,
      color: "text-blue-600",
      description: "Nos ajudam a entender como você usa o site",
      examples: ["Páginas mais visitadas", "Tempo de permanência", "Origem dos acessos"],
      required: false
    },
    {
      type: "Cookies de Publicidade",
      icon: XCircle,
      color: "text-muted-foreground",
      description: "NÃO utilizamos cookies de publicidade ou rastreamento",
      examples: ["Não coletamos dados para anúncios", "Não compartilhamos com anunciantes"],
      required: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      <Breadcrumbs />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Cookie className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Política de Cookies
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Última atualização: Janeiro de 2025
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Info className="w-6 h-6 text-primary" />
                O que são Cookies?
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">
                Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo (computador, celular ou tablet) 
                quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais 
                eficiente e fornecer informações aos proprietários do site.
              </p>
            </CardContent>
          </Card>

          {/* Cookie Types */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Tipos de Cookies que Usamos</h2>
            <div className="grid md:grid-cols-1 gap-6">
              {cookieTypes.map((cookie, index) => (
                <Card key={index} className={`border-l-4 ${cookie.required ? 'border-l-primary' : 'border-l-muted'}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <cookie.icon className={`w-6 h-6 ${cookie.color} flex-shrink-0 mt-1`} />
                        <div>
                          <CardTitle className="text-xl mb-2">{cookie.type}</CardTitle>
                          <CardDescription className="text-base mb-4">{cookie.description}</CardDescription>
                        </div>
                      </div>
                      {cookie.required && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">
                          Obrigatório
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {cookie.examples.map((example, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Our Commitment */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Shield className="w-7 h-7 text-primary" />
                Nosso Compromisso com Você
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <strong>100% Gratuito:</strong> Todas as nossas ferramentas e listas são completamente gratuitas. 
                  Você nunca pagará nada para usar o Helplistas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <strong>Sem Publicidade Invasiva:</strong> Não recebemos comissões ou pagamentos de marcas recomendadas. 
                  Nossas sugestões são imparciais e baseadas em pesquisas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <strong>Cookies Mínimos:</strong> Usamos apenas cookies essenciais para o funcionamento do site 
                  e cookies analíticos para melhorar sua experiência.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <strong>Sem Rastreamento:</strong> Não compartilhamos seus dados com terceiros para fins de marketing 
                  ou publicidade direcionada.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Managing Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>Como Gerenciar Cookies</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground mb-4">
                Você pode controlar e/ou deletar cookies através das configurações do seu navegador. 
                A maioria dos navegadores permite que você:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Veja quais cookies estão armazenados</li>
                <li>• Bloqueie todos os cookies</li>
                <li>• Bloqueie cookies de terceiros</li>
                <li>• Limpe todos os cookies ao fechar o navegador</li>
                <li>• Abra uma sessão "privada" ou "anônima"</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>Importante:</strong> Bloquear cookies essenciais pode impedir que algumas funcionalidades 
                do site funcionem corretamente.
              </p>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle>Isenção de Responsabilidade</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">
                As listas disponibilizadas no Helplistas são elaboradas com base em pesquisas aprofundadas sobre 
                consumo familiar médio brasileiro. No entanto:
              </p>
              <ul className="space-y-2 text-muted-foreground mt-4">
                <li>• Não nos responsabilizamos por listas que possam estar incompletas para suas necessidades específicas</li>
                <li>• Não nos responsabilizamos por itens que possam estar sobrando para seu caso particular</li>
                <li>• As listas são variáveis de acordo com cada família, região e necessidades individuais</li>
                <li>• Recomendamos que você adapte nossas listas à sua realidade</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Dúvidas sobre Cookies?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Se você tiver qualquer dúvida sobre nossa política de cookies, entre em contato conosco através da 
                nossa página de contato.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaDeCookies;
