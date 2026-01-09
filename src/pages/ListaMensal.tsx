import { useState } from "react";
import { Calendar, Download, Printer, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
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

const ListaMensal = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      name: "Grãos e Cereais",
      items: [
        { id: "g1", name: "Arroz", quantity: "5kg", checked: false },
        { id: "g2", name: "Feijão", quantity: "2kg", checked: false },
        { id: "g3", name: "Macarrão", quantity: "1.5kg", checked: false },
        { id: "g4", name: "Farinha de trigo", quantity: "1kg", checked: false },
        { id: "g5", name: "Aveia", quantity: "500g", checked: false },
      ],
    },
    {
      name: "Óleos e Condimentos",
      items: [
        { id: "o1", name: "Óleo de soja", quantity: "900ml", checked: false },
        { id: "o2", name: "Azeite", quantity: "500ml", checked: false },
        { id: "o3", name: "Açúcar", quantity: "2kg", checked: false },
        { id: "o4", name: "Sal", quantity: "1kg", checked: false },
        { id: "o5", name: "Café", quantity: "500g", checked: false },
        { id: "o6", name: "Vinagre", quantity: "750ml", checked: false },
        { id: "o7", name: "Molho de tomate", quantity: "6 unidades", checked: false },
      ],
    },
    {
      name: "Proteínas (Congelados)",
      items: [
        { id: "p1", name: "Carne moída", quantity: "2kg", checked: false },
        { id: "p2", name: "Frango inteiro", quantity: "2 unidades", checked: false },
        { id: "p3", name: "Peito de frango", quantity: "2kg", checked: false },
        { id: "p4", name: "Linguiça", quantity: "1kg", checked: false },
        { id: "p5", name: "Bacon", quantity: "500g", checked: false },
      ],
    },
    {
      name: "Laticínios",
      items: [
        { id: "l1", name: "Leite longa vida", quantity: "6L", checked: false },
        { id: "l2", name: "Queijo", quantity: "1kg", checked: false },
        { id: "l3", name: "Manteiga", quantity: "500g", checked: false },
        { id: "l4", name: "Iogurte", quantity: "12 unidades", checked: false },
        { id: "l5", name: "Requeijão", quantity: "2 unidades", checked: false },
      ],
    },
    {
      name: "Enlatados e Conservas",
      items: [
        { id: "e1", name: "Milho", quantity: "3 latas", checked: false },
        { id: "e2", name: "Ervilha", quantity: "3 latas", checked: false },
        { id: "e3", name: "Atum", quantity: "4 latas", checked: false },
        { id: "e4", name: "Sardinha", quantity: "3 latas", checked: false },
      ],
    },
    {
      name: "Higiene Pessoal",
      items: [
        { id: "hp1", name: "Sabonete", quantity: "6 unidades", checked: false },
        { id: "hp2", name: "Shampoo", quantity: "2 unidades", checked: false },
        { id: "hp3", name: "Condicionador", quantity: "2 unidades", checked: false },
        { id: "hp4", name: "Pasta de dente", quantity: "3 unidades", checked: false },
        { id: "hp5", name: "Papel higiênico", quantity: "12 rolos", checked: false },
        { id: "hp6", name: "Desodorante", quantity: "2 unidades", checked: false },
      ],
    },
    {
      name: "Limpeza",
      items: [
        { id: "li1", name: "Sabão em pó", quantity: "2kg", checked: false },
        { id: "li2", name: "Detergente", quantity: "5 unidades", checked: false },
        { id: "li3", name: "Desinfetante", quantity: "2L", checked: false },
        { id: "li4", name: "Água sanitária", quantity: "2L", checked: false },
        { id: "li5", name: "Amaciante", quantity: "2L", checked: false },
        { id: "li6", name: "Esponja", quantity: "5 unidades", checked: false },
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
      <Breadcrumbs />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
              <Calendar className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Lista de Compras Mensal – Planejamento Completo para o Mês
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Planejamento completo para compras do mês inteiro
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
              Esta lista foi planejada para uma família de 4 pessoas por um mês completo. 
              Itens perecíveis como frutas, verduras e pães devem ser comprados semanalmente.
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

          <Card className="p-6 mt-8 bg-muted/30">
            <h3 className="text-lg font-bold text-foreground mb-3">
              ℹ️ Compras semanais recomendadas
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Frutas frescas da estação</li>
              <li>• Verduras e legumes</li>
              <li>• Pães frescos</li>
              <li>• Ovos (2 dúzias por semana)</li>
            </ul>
          </Card>
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

export default ListaMensal;
