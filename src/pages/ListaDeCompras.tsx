import { ShoppingCart, Download, Printer, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ListaDeCompras = () => {
  const subLists = [
    {
      title: "Lista de Compras Completa",
      description: "Lista completa com todos os itens essenciais para sua casa, organizada por categoria.",
      path: "/lista-de-compras-completa",
      badge: "Completa",
    },
    {
      title: "Lista de Supermercado",
      description: "Itens básicos e essenciais para compras de supermercado mensais.",
      path: "/lista-de-supermercado",
      badge: "Essencial",
    },
    {
      title: "Lista de Compras para 2 Pessoas",
      description: "Lista otimizada para casais, com quantidades ideais.",
      path: "/lista-de-compras-para-2-pessoas",
      badge: "Casal",
    },
    {
      title: "Lista de Compras Mensal",
      description: "Planejamento completo para compras do mês inteiro.",
      path: "/lista-de-compras-mensal",
      badge: "Mensal",
    },
    {
      title: "Lista de Compras para Solteiro",
      description: "Lista prática e econômica para quem mora sozinho.",
      path: "/lista-de-compras-para-solteiro",
      badge: "Individual",
    },
    {
      title: "Lista de Compras Saudável",
      description: "Opções nutritivas e equilibradas para uma alimentação saudável.",
      path: "/lista-de-compras-saudavel",
      badge: "Saudável",
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
            <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
              <ShoppingCart className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Listas de Compras para Supermercado 2026
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encontre a lista de compras perfeita para suas necessidades. Organize suas compras e economize tempo!
            </p>
          </div>

          {/* Dica rápida */}
          <Card className="p-6 mb-12 border-primary/20 bg-gradient-card">
            <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <Download className="w-5 h-5 text-primary" />
              Como usar nossas listas
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Escolha a lista que melhor se adequa ao seu perfil</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Baixe em PDF ou imprima diretamente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Marque os itens conforme for comprando</span>
              </li>
            </ul>
          </Card>

          {/* Grade de Listas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subLists.map((list, index) => (
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

          {/* CTA */}
          <div className="mt-12 text-center">
            <Card className="p-8 bg-primary text-white border-0">
              <Printer className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Imprima suas listas</h2>
              <p className="mb-6">
                Todas as nossas listas estão prontas para impressão em formato PDF
              </p>
              <Button size="lg" variant="secondary" className="font-semibold bg-white text-primary hover:bg-white/90">
                Ver como imprimir
              </Button>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ListaDeCompras;
