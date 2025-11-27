import { Heart, ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Casamento = () => {
  const weddingLists = [
    {
      title: "Checklist Completo de Casamento",
      description: "Cronograma completo do noivado até a lua de mel, sem esquecer nenhum detalhe.",
      path: "/checklist-de-casamento-completo",
      badge: "Completo",
    },
    {
      title: "Lista de Casamento Tradicional",
      description: "Presentes clássicos e essenciais para montar seu lar.",
      path: "/lista-de-casamento-tradicional",
      badge: "Tradicional",
    },
    {
      title: "12 Meses Antes do Casamento",
      description: "Tudo que você precisa fazer um ano antes do grande dia.",
      path: "/lista-de-casamento-12-meses-antes",
      badge: "12 Meses",
    },
    {
      title: "6 Meses Antes do Casamento",
      description: "Checklist para organizar os detalhes importantes.",
      path: "/lista-de-casamento-6-meses-antes",
      badge: "6 Meses",
    },
    {
      title: "3 Meses Antes do Casamento",
      description: "Últimos preparativos para o grande dia.",
      path: "/lista-de-casamento-3-meses-antes",
      badge: "3 Meses",
    },
    {
      title: "Lista de Fornecedores",
      description: "Todos os profissionais que você precisa contratar.",
      path: "/lista-de-fornecedores-casamento",
      badge: "Fornecedores",
    },
    {
      title: "Lista de Convidados",
      description: "Organize sua lista de convidados de forma prática.",
      path: "/lista-de-convidados-casamento",
      badge: "Convidados",
    },
    {
      title: "Checklist Lua de Mel",
      description: "Não esqueça nada na sua viagem dos sonhos.",
      path: "/checklist-lua-de-mel",
      badge: "Lua de Mel",
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
            <div className="inline-flex p-4 bg-pink-50 rounded-2xl mb-6">
              <Heart className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Lista de Casamento
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Checklist completo para noivos: do "sim" à lua de mel. Organize seu casamento sem estresse!
            </p>
          </div>

          {/* Destaque */}
          <Card className="p-6 mb-12 border-primary/20 bg-gradient-card">
            <div className="flex items-start gap-4">
              <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">
                  Planeje seu casamento dos sonhos
                </h2>
                <p className="text-muted-foreground mb-4">
                  Nossas listas foram criadas por especialistas em organização de eventos para ajudar você 
                  a não esquecer nenhum detalhe importante. De documentos a decoração, temos tudo coberto!
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Cronograma mês a mês até o grande dia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Listas de presentes atualizadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Checklists para fornecedores e convidados</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Grade de Listas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingLists.map((list, index) => (
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

export default Casamento;
