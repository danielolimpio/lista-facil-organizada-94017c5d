import { ShoppingCart, GraduationCap, Home, Heart, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import ListCard from "@/components/ListCard";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.webp";

const Index = () => {
  const categories = [
    {
      icon: ShoppingCart,
      title: "Lista de Compras",
      description: "Lista de supermercado completa, mensal, para casal ou solteiro.",
      path: "/lista-de-compras",
      gradient: "gradient-compras",
      color: "compras",
    },
    {
      icon: GraduationCap,
      title: "Material Escolar",
      description: "Listas por série: infantil, fundamental, ensino médio — 2026.",
      path: "/lista-de-material-escolar",
      gradient: "gradient-escolar",
      color: "escolar",
    },
    {
      icon: Home,
      title: "Casa Nova",
      description: "Tudo que você precisa para montar sua casa do zero.",
      path: "/lista-de-casa-nova",
      gradient: "gradient-casa",
      color: "casa",
    },
    {
      icon: Heart,
      title: "Casamento",
      description: "Checklist completo para noivos: do 'sim' à lua de mel.",
      path: "/lista-de-casamento",
      gradient: "gradient-casamento",
      color: "casamento",
    },
  ];

  const featuredLists = [
    {
      title: "Lista de Compras Completa",
      description: "Todos os itens essenciais para o mês",
      path: "/lista-de-compras",
      badge: "Mais Popular",
      categoryColor: "compras",
    },
    {
      title: "Material Escolar 2026",
      description: "Lista atualizada para o próximo ano letivo",
      path: "/lista-de-material-escolar",
      badge: "Atualizado",
      categoryColor: "escolar",
    },
    {
      title: "Checklist de Casamento",
      description: "Guia completo do noivado à lua de mel",
      path: "/lista-de-casamento",
      categoryColor: "casamento",
    },
    {
      title: "Lista para Casa Nova",
      description: "Tudo para montar sua nova casa",
      path: "/lista-de-casa-nova",
      categoryColor: "casa",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 border-b border-border overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-foreground/70" />
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 animate-fade-in">
            <CheckCircle className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Listas gratuitas e atualizadas</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-slide-up">
            Olá! Qual lista vamos<br />organizar hoje?
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Baixe listas práticas e completas para o seu dia a dia — sempre atualizadas para 2025.
          </p>
          <Button 
            size="lg"
            className="px-8 py-6 text-base font-semibold bg-white text-foreground hover:bg-white/90 shadow-lg hover:shadow-xl animate-scale-in"
          >
            Criar Minha Lista
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Navegue por Categorias
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Escolha a categoria que melhor atende suas necessidades
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={category.path} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Lists Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Listas em Destaque
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            As listas mais populares entre nossos usuários
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredLists.map((list, index) => (
              <div key={list.path} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ListCard {...list} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
