import { useState } from "react";
import { ShoppingBasket, Download, Printer, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import SEO from "@/components/SEO";

interface Item {
  id: string;
  name: string;
  checked: boolean;
}

interface Category {
  name: string;
  items: Item[];
}

const ListaSupermercado = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      name: "Básicos de Despensa",
      items: [
        { id: "b1", name: "Arroz", checked: false },
        { id: "b2", name: "Feijão", checked: false },
        { id: "b3", name: "Açúcar", checked: false },
        { id: "b4", name: "Sal", checked: false },
        { id: "b5", name: "Óleo de soja", checked: false },
        { id: "b6", name: "Café", checked: false },
        { id: "b7", name: "Macarrão", checked: false },
        { id: "b8", name: "Farinha de trigo", checked: false },
      ],
    },
    {
      name: "Proteínas",
      items: [
        { id: "p1", name: "Carne moída", checked: false },
        { id: "p2", name: "Frango", checked: false },
        { id: "p3", name: "Ovos", checked: false },
        { id: "p4", name: "Linguiça", checked: false },
      ],
    },
    {
      name: "Laticínios",
      items: [
        { id: "l1", name: "Leite", checked: false },
        { id: "l2", name: "Queijo", checked: false },
        { id: "l3", name: "Manteiga", checked: false },
        { id: "l4", name: "Iogurte", checked: false },
      ],
    },
    {
      name: "Hortifruti",
      items: [
        { id: "h1", name: "Tomate", checked: false },
        { id: "h2", name: "Cebola", checked: false },
        { id: "h3", name: "Alho", checked: false },
        { id: "h4", name: "Batata", checked: false },
        { id: "h5", name: "Banana", checked: false },
        { id: "h6", name: "Laranja", checked: false },
      ],
    },
    {
      name: "Padaria",
      items: [
        { id: "pa1", name: "Pão francês", checked: false },
        { id: "pa2", name: "Pão de forma", checked: false },
      ],
    },
    {
      name: "Higiene e Limpeza",
      items: [
        { id: "hl1", name: "Sabão em pó", checked: false },
        { id: "hl2", name: "Detergente", checked: false },
        { id: "hl3", name: "Papel higiênico", checked: false },
        { id: "hl4", name: "Sabonete", checked: false },
      ],
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleToggleItem = (categoryIndex: number, itemId: string) => {
    setCategories((prev) =>
      prev.map((category, index) => {
        if (index === categoryIndex) {
          return {
            ...category,
            items: category.items.map((item) =>
              item.id === itemId ? { ...item, checked: !item.checked } : item
            ),
          };
        }
        return category;
      })
    );
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    alert("Funcionalidade de download em PDF será implementada em breve!");
  };

  const getTotalItems = () => {
    return categories.reduce((acc, cat) => acc + cat.items.length, 0);
  };

  const getCheckedItems = () => {
    return categories.reduce(
      (acc, cat) => acc + cat.items.filter((item) => item.checked).length,
      0
    );
  };

  const filteredCategories = categories.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Lista de Supermercado 2026 | Helplistas" description="Lista de supermercado com itens básicos e essenciais para compras mensais. Prática e organizada." path="/lista-supermercado" />
      <Navbar />
      <Breadcrumbs />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
              <ShoppingBasket className="w-12 h-12 text-primary" />
            </div>
            <h1 className="title-underline text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Lista de Supermercado com Itens Básicos e Essenciais
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Itens básicos e essenciais para compras de supermercado mensais
            </p>

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-lg font-semibold text-foreground">
                  {getCheckedItems()} / {getTotalItems()} itens
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Button onClick={handlePrint} variant="default" size="lg">
                <Printer className="w-4 h-4 mr-2" />
                Imprimir
              </Button>
              <Button onClick={handleDownloadPDF} variant="outline" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Baixar PDF
              </Button>
            </div>

            <div className="max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Buscar item..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          <Card className="p-6 mb-8 border-primary/20 bg-gradient-card">
            <h2 className="text-lg font-bold text-foreground mb-3">
              💡 Dica de uso
            </h2>
            <p className="text-muted-foreground text-sm">
              Esta lista contém os itens mais essenciais para compras mensais de supermercado. 
              Marque os itens conforme for colocando no carrinho.
            </p>
          </Card>

          <div className="space-y-6 print:space-y-4">
            {filteredCategories.map((category, categoryIndex) => {
              if (category.items.length === 0) return null;
              
              return (
                <Card key={category.name} className="p-6 print:break-inside-avoid">
                  <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
                    {category.name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {category.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/50 transition-colors"
                      >
                        <Checkbox
                          id={item.id}
                          checked={item.checked}
                          onCheckedChange={() =>
                            handleToggleItem(categoryIndex, item.id)
                          }
                          className="print:hidden"
                        />
                        <label
                          htmlFor={item.id}
                          className={`flex-1 cursor-pointer text-base ${
                            item.checked
                              ? "line-through text-muted-foreground"
                              : "text-foreground"
                          }`}
                        >
                          {item.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @media print {
          nav, footer, button, input {
            display: none !important;
          }
          .print\\:break-inside-avoid {
            break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
};

export default ListaSupermercado;
