import { useState } from "react";
import { ShoppingCart, Download, Printer, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

interface Item {
  id: string;
  name: string;
  checked: boolean;
}

interface Category {
  name: string;
  items: Item[];
}

const ListaDeComprasCompleta = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      name: "Hortifruti",
      items: [
        { id: "h1", name: "Alface", checked: false },
        { id: "h2", name: "Tomate", checked: false },
        { id: "h3", name: "Cebola", checked: false },
        { id: "h4", name: "Alho", checked: false },
        { id: "h5", name: "Batata", checked: false },
        { id: "h6", name: "Cenoura", checked: false },
        { id: "h7", name: "Banana", checked: false },
        { id: "h8", name: "Maçã", checked: false },
        { id: "h9", name: "Laranja", checked: false },
        { id: "h10", name: "Limão", checked: false },
        { id: "h11", name: "Mamão", checked: false },
        { id: "h12", name: "Melancia", checked: false },
      ],
    },
    {
      name: "Padaria",
      items: [
        { id: "p1", name: "Pão francês", checked: false },
        { id: "p2", name: "Pão de forma", checked: false },
        { id: "p3", name: "Pão integral", checked: false },
        { id: "p4", name: "Bisnaguinha", checked: false },
        { id: "p5", name: "Bolo", checked: false },
        { id: "p6", name: "Torrada", checked: false },
      ],
    },
    {
      name: "Açougue e Frios",
      items: [
        { id: "a1", name: "Carne moída", checked: false },
        { id: "a2", name: "Frango inteiro", checked: false },
        { id: "a3", name: "Peito de frango", checked: false },
        { id: "a4", name: "Linguiça", checked: false },
        { id: "a5", name: "Bacon", checked: false },
        { id: "a6", name: "Presunto", checked: false },
        { id: "a7", name: "Queijo mussarela", checked: false },
        { id: "a8", name: "Mortadela", checked: false },
        { id: "a9", name: "Salsicha", checked: false },
      ],
    },
    {
      name: "Mercearia",
      items: [
        { id: "m1", name: "Arroz", checked: false },
        { id: "m2", name: "Feijão", checked: false },
        { id: "m3", name: "Macarrão", checked: false },
        { id: "m4", name: "Óleo de soja", checked: false },
        { id: "m5", name: "Sal", checked: false },
        { id: "m6", name: "Açúcar", checked: false },
        { id: "m7", name: "Café", checked: false },
        { id: "m8", name: "Farinha de trigo", checked: false },
        { id: "m9", name: "Fubá", checked: false },
        { id: "m10", name: "Molho de tomate", checked: false },
        { id: "m11", name: "Extrato de tomate", checked: false },
        { id: "m12", name: "Vinagre", checked: false },
        { id: "m13", name: "Maionese", checked: false },
        { id: "m14", name: "Catchup", checked: false },
        { id: "m15", name: "Mostarda", checked: false },
        { id: "m16", name: "Azeite", checked: false },
        { id: "m17", name: "Biscoito de sal", checked: false },
        { id: "m18", name: "Biscoito doce", checked: false },
      ],
    },
    {
      name: "Laticínios",
      items: [
        { id: "l1", name: "Leite integral", checked: false },
        { id: "l2", name: "Iogurte", checked: false },
        { id: "l3", name: "Manteiga", checked: false },
        { id: "l4", name: "Margarina", checked: false },
        { id: "l5", name: "Requeijão", checked: false },
        { id: "l6", name: "Creme de leite", checked: false },
        { id: "l7", name: "Leite condensado", checked: false },
      ],
    },
    {
      name: "Bebidas",
      items: [
        { id: "b1", name: "Refrigerante 2L", checked: false },
        { id: "b2", name: "Suco de caixinha", checked: false },
        { id: "b3", name: "Água mineral", checked: false },
        { id: "b4", name: "Água de coco", checked: false },
        { id: "b5", name: "Chá", checked: false },
      ],
    },
    {
      name: "Congelados",
      items: [
        { id: "c1", name: "Batata frita congelada", checked: false },
        { id: "c2", name: "Vegetais congelados", checked: false },
        { id: "c3", name: "Sorvete", checked: false },
        { id: "c4", name: "Pizza congelada", checked: false },
        { id: "c5", name: "Hambúrguer", checked: false },
      ],
    },
    {
      name: "Higiene e Limpeza",
      items: [
        { id: "hl1", name: "Sabão em pó", checked: false },
        { id: "hl2", name: "Amaciante", checked: false },
        { id: "hl3", name: "Detergente", checked: false },
        { id: "hl4", name: "Desinfetante", checked: false },
        { id: "hl5", name: "Água sanitária", checked: false },
        { id: "hl6", name: "Esponja de lavar louça", checked: false },
        { id: "hl7", name: "Papel higiênico", checked: false },
        { id: "hl8", name: "Papel toalha", checked: false },
        { id: "hl9", name: "Sabonete", checked: false },
        { id: "hl10", name: "Shampoo", checked: false },
        { id: "hl11", name: "Condicionador", checked: false },
        { id: "hl12", name: "Pasta de dente", checked: false },
        { id: "hl13", name: "Escova de dente", checked: false },
        { id: "hl14", name: "Desodorante", checked: false },
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
    // Implementação simplificada - em produção, usar biblioteca como jsPDF
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
          {/* Hero */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
              <ShoppingCart className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Lista de Compras Completa
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Lista completa com todos os itens essenciais para sua casa, organizada por categoria
            </p>

            {/* Progresso */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-lg font-semibold text-foreground">
                  {getCheckedItems()} / {getTotalItems()} itens
                </span>
              </div>
            </div>

            {/* Ações */}
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

            {/* Busca */}
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

          {/* Dica */}
          <Card className="p-6 mb-8 border-primary/20 bg-gradient-card">
            <h2 className="text-lg font-bold text-foreground mb-3">
              💡 Dica de uso
            </h2>
            <p className="text-muted-foreground text-sm">
              Marque os itens conforme for colocando no carrinho. Use a busca para encontrar rapidamente o que precisa. 
              Esta lista é baseada em pesquisas sobre o consumo médio de famílias brasileiras.
            </p>
          </Card>

          {/* Categorias e Itens */}
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

          {/* Informações adicionais */}
          <Card className="p-6 mt-8 bg-muted/30">
            <h3 className="text-lg font-bold text-foreground mb-3">
              ℹ️ Informações Importantes
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Esta lista é uma sugestão baseada em pesquisas de consumo médio familiar brasileiro</li>
              <li>• As quantidades podem variar de acordo com o tamanho da família e hábitos alimentares</li>
              <li>• Ajuste a lista conforme suas necessidades específicas</li>
              <li>• Verifique a validade dos produtos antes de comprar</li>
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

export default ListaDeComprasCompleta;
