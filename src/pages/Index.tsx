import { ShoppingCart, GraduationCap, Home, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import ListCard from "@/components/ListCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  const categories = [
    {
      icon: ShoppingCart,
      title: "Lista de Compras",
      description: "Lista de supermercado completa, mensal, para casal ou solteiro.",
      path: "/lista-de-compras",
      gradient: "bg-green-50",
    },
    {
      icon: GraduationCap,
      title: "Material Escolar",
      description: "Listas por série: infantil, fundamental, ensino médio — 2026.",
      path: "/lista-de-material-escolar",
      gradient: "bg-blue-50",
    },
    {
      icon: Home,
      title: "Casa Nova",
      description: "Tudo que você precisa para montar sua casa do zero.",
      path: "/lista-de-casa-nova",
      gradient: "bg-orange-50",
    },
    {
      icon: Heart,
      title: "Casamento",
      description: "Checklist completo para noivos: do 'sim' à lua de mel.",
      path: "/lista-de-casamento",
      gradient: "bg-pink-50",
    },
  ];

  const featuredLists = [
    {
      title: "Lista de Compras Completa",
      description: "Lista definitiva com todos os itens essenciais para sua casa, organizada por categoria.",
      path: "/lista-de-compras-completa",
      badge: "Mais Popular",
    },
    {
      title: "Lista de Material Escolar 2026",
      description: "Material escolar atualizado para o ano letivo de 2026, do infantil ao ensino médio.",
      path: "/lista-de-material-escolar-2026",
      badge: "Atualizada",
    },
    {
      title: "Lista de Compras para 2 Pessoas",
      description: "Lista otimizada para casais, com quantidades e produtos ideais para duas pessoas.",
      path: "/lista-de-compras-para-2-pessoas",
    },
    {
      title: "Lista de Material Escolar 6° Ano",
      description: "Tudo que seu filho precisa para começar bem o sexto ano do ensino fundamental.",
      path: "/lista-de-material-escolar-6-ano",
    },
  ];

  const scrollToCategories = () => {
    document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Listas Prontas para Organizar Sua Vida
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            Baixe listas gratuitas de compras, material escolar, casa nova e casamento — atualizadas para 2025.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToCategories}
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
          >
            Encontre Sua Lista
          </Button>
        </div>
      </section>

      {/* Categorias */}
      <section id="categories" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={category.path} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listas Mais Procuradas */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              As Listas Mais Procuradas em 2026
            </h2>
            <p className="text-muted-foreground text-lg">
              Confira as listas mais acessadas e úteis do momento
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredLists.map((list, index) => (
              <div key={list.path} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
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
