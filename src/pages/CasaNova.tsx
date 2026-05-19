import { Home, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const CasaNova = () => {
  const homeLists = [
    {
      title: "Lista Completa de Casa Nova",
      description: "Tudo que você precisa para montar sua casa do zero, organizado por cômodo.",
      path: "/lista-de-casa-nova-completa",
      badge: "Completa",
    },
    {
      title: "Lista para Cozinha",
      description: "Utensílios, eletrodomésticos e itens essenciais para sua cozinha.",
      path: "/lista-de-casa-nova-cozinha",
      badge: "Cozinha",
    },
    {
      title: "Lista para Quarto",
      description: "Móveis, roupas de cama e decoração para quartos.",
      path: "/lista-de-casa-nova-quarto",
      badge: "Quarto",
    },
    {
      title: "Lista para Sala",
      description: "Móveis e decoração para deixar sua sala aconchegante.",
      path: "/lista-de-casa-nova-sala",
      badge: "Sala",
    },
    {
      title: "Lista para Banheiro",
      description: "Tudo para equipar e organizar seu banheiro.",
      path: "/lista-de-casa-nova-banheiro",
      badge: "Banheiro",
    },
    {
      title: "Lista de Limpeza",
      description: "Produtos e utensílios de limpeza essenciais.",
      path: "/lista-de-casa-nova-limpeza",
      badge: "Limpeza",
    },
    {
      title: "Lista para Área de Serviço",
      description: "Itens necessários para lavanderia e área de serviço.",
      path: "/lista-de-casa-nova-area-de-servico",
      badge: "Área de Serviço",
    },
    {
      title: "Lista Básica Econômica",
      description: "Versão econômica com o essencial para começar.",
      path: "/lista-de-casa-nova-economica",
      badge: "Econômica",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Breadcrumbs />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex p-4 bg-orange-50 rounded-2xl mb-6">
              <Home className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Checklist Completo para Montar sua Casa Nova do Zero
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Está mudando? Confira nossas listas completas para montar sua casa do zero sem esquecer nada!
            </p>
          </div>

          {/* Benefícios */}
          <Card className="p-6 mb-12 border-primary/20 bg-gradient-card">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Por que usar nossas listas?
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Organizado por cômodo</h3>
                  <p className="text-sm text-muted-foreground">
                    Listas divididas por ambiente para facilitar suas compras
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Não esqueça nada</h3>
                  <p className="text-sm text-muted-foreground">
                    Checklists completos com itens essenciais e opcionais
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Economize tempo</h3>
                  <p className="text-sm text-muted-foreground">
                    Planeje suas compras e evite idas desnecessárias
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Grade de Listas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeLists.map((list, index) => (
              <Card key={list.path} className="p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CasaNova;
