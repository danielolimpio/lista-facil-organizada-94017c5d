import { useState } from "react";
import { Heart, Download, Printer, Check } from "lucide-react";
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
  benefit: string;
  checked: boolean;
}

interface Category {
  name: string;
  items: Item[];
}

const ListaSaudavel = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      name: "Grãos Integrais",
      items: [
        { id: "g1", name: "Arroz integral", benefit: "Rico em fibras", checked: false },
        { id: "g2", name: "Quinoa", benefit: "Proteína completa", checked: false },
        { id: "g3", name: "Aveia", benefit: "Controla colesterol", checked: false },
        { id: "g4", name: "Macarrão integral", benefit: "Baixo índice glicêmico", checked: false },
      ],
    },
    {
      name: "Proteínas Magras",
      items: [
        { id: "p1", name: "Peito de frango", benefit: "Baixo em gordura", checked: false },
        { id: "p2", name: "Peixe (tilápia ou salmão)", benefit: "Ômega-3", checked: false },
        { id: "p3", name: "Ovos", benefit: "Proteína de alta qualidade", checked: false },
        { id: "p4", name: "Peito de peru", benefit: "Baixa caloria", checked: false },
      ],
    },
    {
      name: "Leguminosas",
      items: [
        { id: "l1", name: "Feijão", benefit: "Rico em ferro", checked: false },
        { id: "l2", name: "Grão-de-bico", benefit: "Alto teor de proteína", checked: false },
        { id: "l3", name: "Lentilha", benefit: "Fibras e proteínas", checked: false },
      ],
    },
    {
      name: "Verduras e Folhas",
      items: [
        { id: "v1", name: "Espinafre", benefit: "Rico em ferro", checked: false },
        { id: "v2", name: "Couve", benefit: "Antioxidantes", checked: false },
        { id: "v3", name: "Brócolis", benefit: "Vitamina C", checked: false },
        { id: "v4", name: "Rúcula", benefit: "Baixa caloria", checked: false },
        { id: "v5", name: "Alface", benefit: "Hidratação", checked: false },
      ],
    },
    {
      name: "Legumes",
      items: [
        { id: "le1", name: "Cenoura", benefit: "Vitamina A", checked: false },
        { id: "le2", name: "Abobrinha", benefit: "Baixa caloria", checked: false },
        { id: "le3", name: "Tomate", benefit: "Licopeno", checked: false },
        { id: "le4", name: "Berinjela", benefit: "Fibras", checked: false },
        { id: "le5", name: "Pepino", benefit: "Hidratação", checked: false },
      ],
    },
    {
      name: "Frutas",
      items: [
        { id: "f1", name: "Banana", benefit: "Potássio", checked: false },
        { id: "f2", name: "Maçã", benefit: "Fibras", checked: false },
        { id: "f3", name: "Morango", benefit: "Antioxidantes", checked: false },
        { id: "f4", name: "Abacate", benefit: "Gorduras boas", checked: false },
        { id: "f5", name: "Laranja", benefit: "Vitamina C", checked: false },
        { id: "f6", name: "Mamão", benefit: "Digestão", checked: false },
      ],
    },
    {
      name: "Laticínios e Alternativas",
      items: [
        { id: "la1", name: "Iogurte natural", benefit: "Probióticos", checked: false },
        { id: "la2", name: "Leite desnatado", benefit: "Baixa gordura", checked: false },
        { id: "la3", name: "Queijo cottage", benefit: "Alto em proteína", checked: false },
        { id: "la4", name: "Leite de amêndoas", benefit: "Sem lactose", checked: false },
      ],
    },
    {
      name: "Gorduras Saudáveis",
      items: [
        { id: "go1", name: "Azeite extra virgem", benefit: "Ômega-9", checked: false },
        { id: "go2", name: "Castanhas", benefit: "Gorduras boas", checked: false },
        { id: "go3", name: "Amêndoas", benefit: "Vitamina E", checked: false },
        { id: "go4", name: "Chia", benefit: "Ômega-3", checked: false },
      ],
    },
    {
      name: "Temperos Naturais",
      items: [
        { id: "t1", name: "Alho", benefit: "Antibacteriano", checked: false },
        { id: "t2", name: "Cebola", benefit: "Antioxidante", checked: false },
        { id: "t3", name: "Gengibre", benefit: "Anti-inflamatório", checked: false },
        { id: "t4", name: "Cúrcuma", benefit: "Anti-inflamatório", checked: false },
        { id: "t5", name: "Ervas frescas", benefit: "Antioxidantes", checked: false },
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
      <SEO title="Lista de Compras Saudável 2026 | Helplistas" description="Lista de compras com opções nutritivas e equilibradas para uma alimentação saudável." path="/lista-saudavel" />
      <Navbar />
      <Breadcrumbs />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
              <Heart className="w-12 h-12 text-primary" />
            </div>
            <h1 className="title-underline text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Lista de Compras Saudável – Alimentos Nutritivos e Naturais
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Opções nutritivas e equilibradas para uma alimentação saudável
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
              Esta lista foi elaborada com foco em alimentos naturais, ricos em nutrientes e com benefícios comprovados para a saúde. 
              Priorize alimentos orgânicos quando possível e evite produtos processados.
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
                          className={`flex-1 cursor-pointer ${
                            item.checked
                              ? "line-through text-muted-foreground"
                              : "text-foreground"
                          }`}
                        >
                          <div className="flex flex-col">
                            <span className="text-base font-medium">{item.name}</span>
                            <span className="text-xs text-primary">
                              {item.benefit}
                            </span>
                          </div>
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
              🥗 Dicas para uma alimentação saudável
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Consuma pelo menos 5 porções de frutas e vegetais por dia</li>
              <li>• Prefira alimentos integrais aos refinados</li>
              <li>• Evite alimentos ultraprocessados e ricos em açúcar</li>
              <li>• Beba pelo menos 2 litros de água por dia</li>
              <li>• Varie as cores dos alimentos no prato</li>
              <li>• Leia os rótulos e evite produtos com muitos ingredientes</li>
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

export default ListaSaudavel;
