import { BookOpen, Download, Printer, CheckCircle2, ArrowRight, ListChecks, ShoppingCart, GraduationCap, Home as HomeIcon, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const ComoUsar = () => {
  const steps = [
    {
      icon: ListChecks,
      title: "1. Escolha sua lista",
      description: "Navegue pelas nossas categorias e escolha a lista que melhor atende suas necessidades. Temos opções para compras, material escolar, casamento, casa nova e muito mais."
    },
    {
      icon: CheckCircle2,
      title: "2. Revise os itens",
      description: "Leia atentamente todos os itens da lista. Lembre-se que você pode adaptar conforme sua realidade e necessidades específicas."
    },
    {
      icon: Download,
      title: "3. Baixe em PDF",
      description: "Clique no botão de download para salvar a lista em formato PDF no seu dispositivo. O arquivo estará pronto para usar offline."
    },
    {
      icon: Printer,
      title: "4. Imprima ou use digital",
      description: "Você pode imprimir a lista para levar à loja ou usar diretamente no seu celular enquanto faz suas compras."
    }
  ];

  const categories = [
    {
      icon: ShoppingCart,
      title: "Listas de Compras",
      description: "Para mercado, mensal, semanal",
      path: "/lista-de-compras",
      color: "text-compras"
    },
    {
      icon: GraduationCap,
      title: "Material Escolar",
      description: "Todos os anos letivos",
      path: "/lista-de-material-escolar",
      color: "text-escolar"
    },
    {
      icon: Heart,
      title: "Casamento",
      description: "Checklist completo",
      path: "/lista-de-casamento",
      color: "text-casamento"
    },
    {
      icon: HomeIcon,
      title: "Casa Nova",
      description: "Todos os cômodos",
      path: "/lista-de-casa-nova",
      color: "text-casa"
    }
  ];

  const tips = [
    {
      title: "Personalize sua lista",
      description: "Nossas listas são um ponto de partida. Adicione ou remova itens conforme sua necessidade específica."
    },
    {
      title: "Compare preços",
      description: "Use a lista impressa para comparar preços em diferentes lojas e aproveitar as melhores promoções."
    },
    {
      title: "Planeje com antecedência",
      description: "Baixe suas listas com antecedência para ter tempo de pesquisar e planejar suas compras."
    },
    {
      title: "Compartilhe com a família",
      description: "Envie o PDF para familiares para que todos possam contribuir na organização."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <SEO title="Como Usar Nossas Listas | Helplistas" description="Aprenda a usar as listas do Helplistas: escolha, baixe em PDF e organize sua vida." path="/como-usar" />
      <Navbar />
      <Breadcrumbs />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <BookOpen className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Como Usar Nossas Listas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Organize sua vida com facilidade! Aprenda a aproveitar ao máximo nossas listas gratuitas e personalizáveis.
          </p>
        </div>

        {/* Steps Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Passo a Passo</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                      <CardDescription className="text-base">{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-4">Explore Nossas Categorias</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Navegue pelas diferentes categorias e encontre a lista perfeita para suas necessidades
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to={category.path} className="group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${category.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <category.icon className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                      Ver listas <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Dicas Importantes</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {tips.map((tip, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                  <CardDescription>{tip.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-primary text-primary-foreground max-w-3xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Precisa de mais ajuda?</h2>
              <p className="text-lg mb-6 opacity-90">
                Aprenda como baixar em PDF ou imprimir suas listas para usar no dia a dia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/baixar-em-pdf">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    <Download className="w-5 h-5 mr-2" />
                    Como Baixar em PDF
                  </Button>
                </Link>
                <Link to="/imprimir-listas">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    <Printer className="w-5 h-5 mr-2" />
                    Como Imprimir
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

export default ComoUsar;
