import { useState } from "react";
import { Users, Download, Printer, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

interface Item {
  id: string;
  name: string;
  quantity: string;
  checked: boolean;
}

interface Category {
  name: string;
  items: Item[];
}

const ListaDuasPessoas = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      name: "Proteínas",
      items: [
        { id: "p1", name: "Peito de frango", quantity: "1kg", checked: false },
        { id: "p2", name: "Carne moída", quantity: "500g", checked: false },
        { id: "p3", name: "Ovos", quantity: "1 dúzia", checked: false },
        { id: "p4", name: "Linguiça", quantity: "500g", checked: false },
      ],
    },
    {
      name: "Grãos e Massas",
      items: [
        { id: "g1", name: "Arroz", quantity: "2kg", checked: false },
        { id: "g2", name: "Feijão", quantity: "1kg", checked: false },
        { id: "g3", name: "Macarrão", quantity: "500g", checked: false },
      ],
    },
    {
      name: "Laticínios",
      items: [
        { id: "l1", name: "Leite", quantity: "2L", checked: false },
        { id: "l2", name: "Queijo mussarela", quantity: "300g", checked: false },
        { id: "l3", name: "Iogurte", quantity: "4 unidades", checked: false },
        { id: "l4", name: "Manteiga", quantity: "200g", checked: false },
      ],
    },
    {
      name: "Verduras e Legumes",
      items: [
        { id: "v1", name: "Tomate", quantity: "500g", checked: false },
        { id: "v2", name: "Cebola", quantity: "500g", checked: false },
        { id: "v3", name: "Alface", quantity: "1 unidade", checked: false },
        { id: "v4", name: "Cenoura", quantity: "300g", checked: false },
        { id: "v5", name: "Batata", quantity: "1kg", checked: false },
      ],
    },
    {
      name: "Frutas",
      items: [
        { id: "f1", name: "Banana", quantity: "1 dúzia", checked: false },
        { id: "f2", name: "Maçã", quantity: "6 unidades", checked: false },
        { id: "f3", name: "Laranja", quantity: "1kg", checked: false },
      ],
    },
    {
      name: "Padaria",
      items: [
        { id: "pa1", name: "Pão francês", quantity: "1kg", checked: false },
        { id: "pa2", name: "Pão de forma", quantity: "1 pacote", checked: false },
      ],
    },
    {
      name: "Mercearia",
      items: [
        { id: "m1", name: "Óleo de soja", quantity: "900ml", checked: false },
        { id: "m2", name: "Açúcar", quantity: "1kg", checked: false },
        { id: "m3", name: "Café", quantity: "250g", checked: false },
        { id: "m4", name: "Sal", quantity: "1kg", checked: false },
        { id: "m5", name: "Molho de tomate", quantity: "2 unidades", checked: false },
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
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
              <Users className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Lista de Compras para 2 Pessoas
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Lista otimizada para casais, com quantidades ideais
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
              Esta lista foi planejada para atender um casal por uma semana. 
              As quantidades podem ser ajustadas conforme o consumo de cada família.
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
                  <div className="grid grid-cols-1 gap-3">
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
                          <span className="text-sm text-muted-foreground ml-2">
                            ({item.quantity})
                          </span>
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

export default ListaDuasPessoas;
