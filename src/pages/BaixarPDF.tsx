import { Download, FileText, Smartphone, Monitor, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BaixarPDF = () => {
  const deviceSteps = [
    {
      device: "Computador",
      icon: Monitor,
      steps: [
        "Acesse a lista desejada no site",
        "Clique no botão 'Baixar PDF'",
        "Escolha onde salvar o arquivo em seu computador",
        "Abra o PDF com seu leitor favorito (Adobe Reader, Chrome, etc.)"
      ]
    },
    {
      device: "Celular/Tablet",
      icon: Smartphone,
      steps: [
        "Navegue até a lista que deseja baixar",
        "Toque no botão 'Baixar PDF'",
        "O arquivo será salvo na pasta Downloads",
        "Acesse através do app de arquivos do seu dispositivo"
      ]
    }
  ];

  const tips = [
    {
      icon: CheckCircle2,
      title: "Organize seus PDFs",
      description: "Crie pastas específicas para cada tipo de lista (compras, escola, casa) para encontrá-las facilmente.",
      type: "success"
    },
    {
      icon: CheckCircle2,
      title: "Use aplicativos de PDF",
      description: "Apps como Adobe Acrobat ou Xodo permitem marcar itens diretamente no PDF enquanto compra.",
      type: "success"
    },
    {
      icon: CheckCircle2,
      title: "Compartilhe com a família",
      description: "Envie o PDF por WhatsApp, e-mail ou outras plataformas para compartilhar com familiares.",
      type: "success"
    },
    {
      icon: AlertCircle,
      title: "Verifique o espaço disponível",
      description: "Certifique-se de ter espaço suficiente no dispositivo antes de baixar várias listas.",
      type: "warning"
    }
  ];

  const benefits = [
    "Acesso offline - use sem internet",
    "Fácil compartilhamento via e-mail ou WhatsApp",
    "Marque itens conforme compra",
    "Imprima quando preferir papel",
    "Guarde e reutilize sempre que precisar",
    "Compatível com todos os dispositivos"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Download className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Como Baixar em PDF
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Baixe nossas listas em PDF e tenha acesso offline em qualquer dispositivo. Simples, rápido e totalmente gratuito!
          </p>
        </div>

        {/* Device Instructions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Instruções por Dispositivo</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {deviceSteps.map((device, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <device.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{device.device}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    {device.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                          {stepIndex + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-4">Vantagens do PDF</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Por que baixar nossas listas em formato PDF?
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Dicas e Recomendações</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {tips.map((tip, index) => (
              <Card 
                key={index} 
                className={`border-l-4 ${tip.type === 'success' ? 'border-l-primary' : 'border-l-orange-500'}`}
              >
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <tip.icon className={`w-6 h-6 flex-shrink-0 ${tip.type === 'success' ? 'text-primary' : 'text-orange-500'}`} />
                    <div>
                      <CardTitle className="text-lg mb-2">{tip.title}</CardTitle>
                      <CardDescription>{tip.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Visual Example */}
        <section className="mb-16">
          <Card className="max-w-3xl mx-auto">
            <CardHeader className="text-center">
              <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">PDFs Otimizados</CardTitle>
              <CardDescription className="text-base">
                Nossos PDFs são formatados para facilitar a leitura e impressão, com design limpo e organizado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Fonte legível e tamanho adequado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Espaço para marcar itens</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Layout otimizado para impressão</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Arquivo leve e rápido para baixar</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-primary text-primary-foreground max-w-3xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
              <p className="text-lg mb-6 opacity-90">
                Explore nossas listas e baixe quantas precisar. Tudo 100% gratuito!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/como-usar">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Como Usar as Listas
                  </Button>
                </Link>
                <Link to="/imprimir-listas">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Como Imprimir <ArrowRight className="w-5 h-5 ml-2" />
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

export default BaixarPDF;
