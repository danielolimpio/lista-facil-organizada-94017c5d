import { Printer, FileText, Settings, Palette, CheckCircle2, ArrowRight, DollarSign, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const ImprimirListas = () => {
  const printSteps = [
    {
      step: "1. Baixe o PDF",
      description: "Primeiro, baixe a lista desejada em formato PDF clicando no botão de download.",
      icon: FileText
    },
    {
      step: "2. Abra o arquivo",
      description: "Abra o arquivo PDF com seu leitor favorito (Adobe Reader, navegador, etc.).",
      icon: FileText
    },
    {
      step: "3. Configure a impressão",
      description: "Clique em 'Imprimir' (Ctrl+P ou Cmd+P) e ajuste as configurações conforme necessário.",
      icon: Settings
    },
    {
      step: "4. Imprima",
      description: "Confirme as configurações e envie para sua impressora. Pronto!",
      icon: Printer
    }
  ];

  const printSettings = [
    {
      title: "Tamanho do papel",
      description: "Use papel A4 (padrão brasileiro) para melhor resultado",
      icon: FileText
    },
    {
      title: "Orientação",
      description: "Recomendamos orientação retrato (vertical) para a maioria das listas",
      icon: FileText
    },
    {
      title: "Qualidade",
      description: "Modo 'rascunho' economiza tinta e é suficiente para listas",
      icon: Settings
    },
    {
      title: "Cor ou P&B",
      description: "Preto e branco é ideal para economia e perfeita legibilidade",
      icon: Palette
    }
  ];

  const economyTips = [
    "Use o modo 'rascunho' ou 'econômico' da impressora",
    "Imprima em preto e branco para economizar tinta colorida",
    "Imprima frente e verso quando tiver várias páginas",
    "Reutilize folhas com verso em branco para listas temporárias",
    "Imprima múltiplas listas na mesma sessão para economizar energia"
  ];

  const environmentTips = [
    {
      icon: Leaf,
      title: "Imprima apenas quando necessário",
      description: "Considere usar o PDF digital no celular para economizar papel"
    },
    {
      icon: Leaf,
      title: "Reutilize as listas",
      description: "Algumas listas podem ser usadas várias vezes - plastifique-as e use caneta apagável"
    },
    {
      icon: Leaf,
      title: "Recicle o papel usado",
      description: "Após o uso, descarte o papel na lixeira de reciclagem"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <SEO title="Imprimir Listas Grátis | Helplistas" description="Saiba como imprimir nossas listas gratuitas com as melhores configurações." path="/imprimir-listas" />
      <Navbar />
      <Breadcrumbs />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Printer className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Como Imprimir suas Listas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Guia completo para imprimir nossas listas com qualidade, economia e praticidade. Leve suas listas para qualquer lugar!
          </p>
        </div>

        {/* Print Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Passo a Passo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {printSteps.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.step}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Print Settings */}
        <section className="mb-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-4">Configurações Recomendadas</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ajuste sua impressora com estas configurações para o melhor resultado
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {printSettings.map((setting, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <setting.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">{setting.title}</CardTitle>
                      <CardDescription>{setting.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Economy Tips */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Economize na Impressão</CardTitle>
                <CardDescription className="text-base">
                  Dicas para reduzir custos com tinta e papel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {economyTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{tip}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Environment Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Consciência Ambiental</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {environmentTips.map((tip, index) => (
              <Card key={index} className="border-l-4 border-l-green-600">
                <CardHeader>
                  <tip.icon className="w-10 h-10 text-green-600 mb-3" />
                  <CardTitle className="text-lg mb-2">{tip.title}</CardTitle>
                  <CardDescription>{tip.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Alternative: Digital Use */}
        <section className="mb-16">
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-secondary/20 to-secondary/5">
            <CardContent className="p-8 md:p-12 text-center">
              <FileText className="w-16 h-16 text-secondary-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Prefere economizar papel?</h2>
              <p className="text-muted-foreground mb-6">
                Você pode usar nossas listas diretamente no celular sem imprimir! Baixe o PDF e abra em um app de anotações para marcar os itens digitalmente.
              </p>
              <Link to="/baixar-em-pdf">
                <Button size="lg">
                  Saiba como baixar PDFs <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-primary text-primary-foreground max-w-3xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Comece a usar nossas listas!</h2>
              <p className="text-lg mb-6 opacity-90">
                Baixe, imprima e organize sua vida com mais praticidade
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/como-usar">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Como Usar as Listas
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Ver Todas as Listas <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ImprimirListas;
