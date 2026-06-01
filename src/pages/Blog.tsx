import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Dicas para Economizar no Supermercado em 2026",
      excerpt: "Aprenda estratégias práticas para reduzir sua conta do supermercado sem abrir mão da qualidade.",
      date: "15 de Janeiro, 2026",
      category: "Economia",
      path: "/blog/dicas-economizar-supermercado",
    },
    {
      title: "Como Organizar o Material Escolar das Crianças",
      excerpt: "Métodos eficientes para manter o material escolar sempre organizado e facilitar a rotina.",
      date: "10 de Janeiro, 2026",
      category: "Organização",
      path: "/blog/organizar-material-escolar",
    },
    {
      title: "Checklist Essencial para Mudar de Casa",
      excerpt: "Passo a passo completo para uma mudança sem estresse e bem planejada.",
      date: "5 de Janeiro, 2026",
      category: "Casa Nova",
      path: "/blog/checklist-mudar-de-casa",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Blog | Dicas de Organização e Listas 2026 | Helplistas" description="Dicas, guias e inspirações para organizar melhor sua vida com listas práticas e gratuitas." path="/blog" />
      <Navbar />
      <Breadcrumbs />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
              <BookOpen className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog Helplistas
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dicas, guias e inspirações para organizar melhor sua vida
            </p>
          </div>

          {/* Posts do Blog */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={post.path} className="overflow-hidden hover:shadow-lg transition-all duration-300 group animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="h-48 bg-gradient-hero"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <Link to={post.path}>
                    <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/10">
                      Ler mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Em breve */}
          <div className="mt-16 text-center">
            <Card className="p-12 max-w-2xl mx-auto">
              <BookOpen className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Mais conteúdo em breve
              </h2>
              <p className="text-muted-foreground">
                Estamos preparando mais artigos e guias para ajudar você a se organizar melhor. 
                Volte em breve para conferir novidades!
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
