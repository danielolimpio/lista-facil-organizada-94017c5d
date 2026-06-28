import { GraduationCap, Download, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const MaterialEscolar = () => {
  const schoolLists = [
    {
      title: "Lista de Material Escolar 2026",
      description: "Lista completa e atualizada para o ano letivo de 2026.",
      path: "/lista-de-material-escolar-2026",
      badge: "2026",
    },
    {
      title: "Material Escolar Educação Infantil",
      description: "Itens essenciais para crianças da educação infantil.",
      path: "/lista-de-material-escolar-educacao-infantil",
      badge: "Ed. Infantil",
    },
    {
      title: "Material Escolar 1° Ano",
      description: "Tudo que seu filho precisa para o primeiro ano.",
      path: "/lista-de-material-escolar-1-ano",
      badge: "1° Ano",
    },
    {
      title: "Material Escolar 2° Ano",
      description: "Lista completa para o segundo ano fundamental.",
      path: "/lista-de-material-escolar-2-ano",
      badge: "2° Ano",
    },
    {
      title: "Material Escolar 3° Ano",
      description: "Materiais necessários para o terceiro ano.",
      path: "/lista-de-material-escolar-3-ano",
      badge: "3° Ano",
    },
    {
      title: "Material Escolar 4° Ano",
      description: "Lista organizada para o quarto ano fundamental.",
      path: "/lista-de-material-escolar-4-ano",
      badge: "4° Ano",
    },
    {
      title: "Material Escolar 5° Ano",
      description: "Tudo para o quinto ano do ensino fundamental.",
      path: "/lista-de-material-escolar-5-ano",
      badge: "5° Ano",
    },
    {
      title: "Material Escolar 6° Ano",
      description: "Lista completa para iniciar o sexto ano com tudo.",
      path: "/lista-de-material-escolar-6-ano",
      badge: "6° Ano",
    },
    {
      title: "Material Escolar 7° Ano",
      description: "Materiais essenciais para o sétimo ano.",
      path: "/lista-de-material-escolar-7-ano",
      badge: "7° Ano",
    },
    {
      title: "Material Escolar 8° Ano",
      description: "Lista completa para o oitavo ano fundamental.",
      path: "/lista-de-material-escolar-8-ano",
      badge: "8° Ano",
    },
    {
      title: "Material Escolar 9° Ano",
      description: "Tudo que você precisa para o nono ano.",
      path: "/lista-de-material-escolar-9-ano",
      badge: "9° Ano",
    },
    {
      title: "Material Escolar Ensino Médio",
      description: "Lista completa para todo o ensino médio.",
      path: "/lista-de-material-escolar-ensino-medio",
      badge: "Ensino Médio",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Lista de Material Escolar 2026 por Série | Helplistas"
        description="Listas de material escolar 2026 por série: educação infantil, fundamental (1º ao 9º) e ensino médio. Baixe grátis e economize."
        path="/lista-de-material-escolar"
      />
      <Navbar />
      <Breadcrumbs />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex p-4 bg-blue-50 rounded-2xl mb-6">
              <GraduationCap className="w-12 h-12 text-primary" />
            </div>
            <h1 className="title-underline text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Lista Completa de Material Escolar 2026 por Série
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Listas completas e atualizadas para todas as séries escolares. Prepare-se para o ano letivo!
            </p>
          </div>

          {/* Destaque 2026 */}
          <Card className="p-6 mb-12 border-primary/20 bg-gradient-card">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">
                  Listas Atualizadas para 2026
                </h2>
                <p className="text-muted-foreground">
                  Todas as nossas listas de material escolar foram atualizadas de acordo com as diretrizes 
                  do MEC e as necessidades das escolas brasileiras para o ano letivo de 2026.
                </p>
              </div>
            </div>
          </Card>

          {/* Grade de Listas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolLists.map((list, index) => (
              <Card key={list.path} className="p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group animate-scale-in" style={{ animationDelay: `${index * 30}ms` }}>
                {list.badge && (
                  <span className="inline-block w-fit px-3 py-1 mb-3 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                    {list.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {list.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {list.description}
                </p>
                <Link to={list.path}>
                  <Button variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                    Ver Lista
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          {/* Dicas */}
          <div className="mt-12">
            <Card className="p-8 bg-escolar text-white border-0">
              <Download className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-center">Economize nas compras escolares</h2>
              <p className="mb-6 text-center max-w-2xl mx-auto">
                Use nossas listas para comparar preços entre lojas e aproveitar promoções. 
                Baixe em PDF e leve para a loja ou compre online.
              </p>
              <div className="text-center">
                <Button size="lg" variant="secondary" className="font-semibold bg-white text-escolar hover:bg-white/90">
                  Ver dicas de economia
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MaterialEscolar;
