import { useState } from "react";
import { Helmet } from "react-helmet";
import { GraduationCap, Download, Printer, Check, ExternalLink, ShoppingBag, Star, Truck, CreditCard, Sparkles, BookOpen, Pencil, Scissors, Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

interface Item {
  id: string;
  name: string;
  checked: boolean;
  quantity?: string;
}

interface Category {
  name: string;
  icon: React.ReactNode;
  items: Item[];
}

const MaterialEscolar2026 = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      name: "Cadernos e Blocos",
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        { id: "c1", name: "Caderno universitário 10 matérias (200 folhas)", checked: false, quantity: "2 unidades" },
        { id: "c2", name: "Caderno universitário 1 matéria (96 folhas)", checked: false, quantity: "4 unidades" },
        { id: "c3", name: "Caderno de desenho grande", checked: false, quantity: "1 unidade" },
        { id: "c4", name: "Caderno de caligrafia", checked: false, quantity: "1 unidade" },
        { id: "c5", name: "Caderno quadriculado", checked: false, quantity: "1 unidade" },
        { id: "c6", name: "Caderno de música (pautado)", checked: false, quantity: "1 unidade" },
        { id: "c7", name: "Bloco de folhas A4 (com pauta)", checked: false, quantity: "1 pacote" },
        { id: "c8", name: "Bloco de rascunho", checked: false, quantity: "1 unidade" },
      ],
    },
    {
      name: "Escrita e Correção",
      icon: <Pencil className="w-5 h-5" />,
      items: [
        { id: "e1", name: "Lápis preto nº 2 (HB)", checked: false, quantity: "6 unidades" },
        { id: "e2", name: "Lápis preto nº 2B", checked: false, quantity: "4 unidades" },
        { id: "e3", name: "Caneta esferográfica azul", checked: false, quantity: "4 unidades" },
        { id: "e4", name: "Caneta esferográfica preta", checked: false, quantity: "2 unidades" },
        { id: "e5", name: "Caneta esferográfica vermelha", checked: false, quantity: "2 unidades" },
        { id: "e6", name: "Lapiseira 0.7mm", checked: false, quantity: "1 unidade" },
        { id: "e7", name: "Grafite 0.7mm HB", checked: false, quantity: "2 tubos" },
        { id: "e8", name: "Borracha branca macia", checked: false, quantity: "3 unidades" },
        { id: "e9", name: "Corretivo líquido", checked: false, quantity: "1 unidade" },
        { id: "e10", name: "Fita corretiva", checked: false, quantity: "1 unidade" },
        { id: "e11", name: "Apontador com depósito", checked: false, quantity: "2 unidades" },
      ],
    },
    {
      name: "Artes e Pintura",
      icon: <Palette className="w-5 h-5" />,
      items: [
        { id: "a1", name: "Lápis de cor (24 cores)", checked: false, quantity: "1 caixa" },
        { id: "a2", name: "Canetinha hidrográfica (12 cores)", checked: false, quantity: "1 caixa" },
        { id: "a3", name: "Giz de cera grosso (12 cores)", checked: false, quantity: "1 caixa" },
        { id: "a4", name: "Tinta guache (6 cores)", checked: false, quantity: "1 caixa" },
        { id: "a5", name: "Aquarela escolar (12 cores)", checked: false, quantity: "1 estojo" },
        { id: "a6", name: "Pincel chato nº 8", checked: false, quantity: "1 unidade" },
        { id: "a7", name: "Pincel redondo nº 6", checked: false, quantity: "1 unidade" },
        { id: "a8", name: "Pincel redondo nº 12", checked: false, quantity: "1 unidade" },
        { id: "a9", name: "Massa de modelar (12 cores)", checked: false, quantity: "1 caixa" },
        { id: "a10", name: "Avental plástico para pintura", checked: false, quantity: "1 unidade" },
      ],
    },
    {
      name: "Recorte e Colagem",
      icon: <Scissors className="w-5 h-5" />,
      items: [
        { id: "r1", name: "Tesoura escolar sem ponta", checked: false, quantity: "1 unidade" },
        { id: "r2", name: "Cola branca 90g", checked: false, quantity: "2 unidades" },
        { id: "r3", name: "Cola em bastão 40g", checked: false, quantity: "3 unidades" },
        { id: "r4", name: "Cola glitter (6 cores)", checked: false, quantity: "1 caixa" },
        { id: "r5", name: "Fita adesiva transparente", checked: false, quantity: "1 unidade" },
        { id: "r6", name: "Fita crepe", checked: false, quantity: "1 rolo" },
        { id: "r7", name: "Papel sulfite A4 (500 folhas)", checked: false, quantity: "1 resma" },
        { id: "r8", name: "Papel color set (cores variadas)", checked: false, quantity: "1 pacote" },
        { id: "r9", name: "Papel cartão (cores variadas)", checked: false, quantity: "10 folhas" },
        { id: "r10", name: "Papel crepom (cores variadas)", checked: false, quantity: "5 unidades" },
        { id: "r11", name: "EVA (cores variadas)", checked: false, quantity: "10 folhas" },
        { id: "r12", name: "Cartolina branca", checked: false, quantity: "5 folhas" },
        { id: "r13", name: "Cartolina colorida", checked: false, quantity: "5 folhas" },
      ],
    },
    {
      name: "Organização e Geometria",
      icon: <Sparkles className="w-5 h-5" />,
      items: [
        { id: "o1", name: "Estojo escolar", checked: false, quantity: "1 unidade" },
        { id: "o2", name: "Mochila escolar resistente", checked: false, quantity: "1 unidade" },
        { id: "o3", name: "Pasta com elástico", checked: false, quantity: "2 unidades" },
        { id: "o4", name: "Pasta catálogo com plásticos", checked: false, quantity: "1 unidade" },
        { id: "o5", name: "Régua 30cm transparente", checked: false, quantity: "1 unidade" },
        { id: "o6", name: "Régua 15cm", checked: false, quantity: "1 unidade" },
        { id: "o7", name: "Esquadro 45°", checked: false, quantity: "1 unidade" },
        { id: "o8", name: "Esquadro 60°", checked: false, quantity: "1 unidade" },
        { id: "o9", name: "Transferidor 180°", checked: false, quantity: "1 unidade" },
        { id: "o10", name: "Compasso escolar", checked: false, quantity: "1 unidade" },
        { id: "o11", name: "Marca texto (4 cores)", checked: false, quantity: "1 kit" },
        { id: "o12", name: "Post-it colorido", checked: false, quantity: "1 bloco" },
        { id: "o13", name: "Etiquetas adesivas para nome", checked: false, quantity: "1 cartela" },
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

  const onlineStores = [
    {
      name: "Amazon",
      description: "Frete grátis para Prime, grande variedade de marcas e preços competitivos",
      url: "https://www.amazon.com.br/material-escolar",
      highlight: "Frete Grátis Prime",
      icon: <Truck className="w-5 h-5" />,
    },
    {
      name: "Kalunga",
      description: "Especialista em papelaria, kits escolares completos com desconto",
      url: "https://www.kalunga.com.br/",
      highlight: "Especialista em Papelaria",
      icon: <Star className="w-5 h-5" />,
    },
    {
      name: "Magazine Luiza",
      description: "Cashback e parcelamento em até 12x, entrega rápida",
      url: "https://www.magazineluiza.com.br/",
      highlight: "Até 12x sem juros",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      name: "Americanas",
      description: "Promoções exclusivas no app, programa de pontos e cupons frequentes",
      url: "https://www.americanas.com.br/",
      highlight: "Cupons Exclusivos",
      icon: <ShoppingBag className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Lista de Material Escolar 2026 Completa | HelpListas</title>
        <meta name="description" content="Lista de material escolar 2026 completa e atualizada. Confira todos os itens essenciais para o ano letivo, com quantidades e dicas de onde comprar online com os melhores preços." />
        <meta name="keywords" content="material escolar 2026, lista escolar, volta às aulas, material escolar completo, comprar material escolar" />
        <link rel="canonical" href="https://helplistas.com.br/lista-de-material-escolar-2026" />
      </Helmet>

      <Navbar />
      <Breadcrumbs />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex p-4 bg-escolar/10 rounded-2xl mb-6">
              <GraduationCap className="w-12 h-12 text-escolar" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Lista de Material Escolar 2026
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Lista completa e atualizada com todos os materiais essenciais para o ano letivo de 2026
            </p>

            {/* Progresso */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-escolar/10 rounded-full">
                <Check className="w-5 h-5 text-escolar" />
                <span className="text-lg font-semibold text-foreground">
                  {getCheckedItems()} / {getTotalItems()} itens
                </span>
              </div>
            </div>

            {/* Ações */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Button onClick={handlePrint} className="bg-escolar hover:bg-escolar/90" size="lg">
                <Printer className="w-4 h-4 mr-2" />
                Imprimir Lista
              </Button>
              <Button variant="outline" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Baixar PDF
              </Button>
            </div>

            {/* Busca */}
            <div className="max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Buscar item na lista..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border-escolar/30 focus:border-escolar"
              />
            </div>
          </div>

          {/* Dica */}
          <Card className="p-6 mb-8 border-escolar/20 bg-gradient-to-r from-escolar/5 to-escolar/10">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-escolar/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-escolar" />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground mb-2">
                  💡 Dica de Economia 2026
                </h2>
                <p className="text-muted-foreground text-sm">
                  Compare preços em diferentes lojas antes de comprar. Muitas redes oferecem descontos especiais 
                  para compras em quantidade ou kits escolares completos. Verifique também se a escola aceita 
                  materiais de anos anteriores em bom estado.
                </p>
              </div>
            </div>
          </Card>

          {/* Categorias e Itens */}
          <div className="space-y-6 print:space-y-4">
            {filteredCategories.map((category, categoryIndex) => {
              if (category.items.length === 0) return null;

              return (
                <Card key={category.name} className="p-6 print:break-inside-avoid border-l-4 border-l-escolar">
                  <div className="flex items-center gap-3 mb-4 border-b border-border pb-3">
                    <div className="w-10 h-10 rounded-lg bg-escolar/10 flex items-center justify-center text-escolar">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {category.name}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {category.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors border border-transparent hover:border-escolar/20"
                      >
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id={item.id}
                            checked={item.checked}
                            onCheckedChange={() =>
                              handleToggleItem(categoryIndex, item.id)
                            }
                            className="print:hidden data-[state=checked]:bg-escolar data-[state=checked]:border-escolar"
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
                        {item.quantity && (
                          <span className="text-sm text-escolar font-medium bg-escolar/10 px-3 py-1 rounded-full">
                            {item.quantity}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Onde Comprar Online */}
          <div className="mt-12 print:hidden">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-3">
                🛒 Onde Comprar Online com os Melhores Preços
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Selecionamos as melhores lojas online para você comprar material escolar com economia, 
                segurança e comodidade. Compare preços e aproveite as promoções!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {onlineStores.map((store) => (
                <a
                  key={store.name}
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="p-6 h-full border-2 border-transparent hover:border-escolar/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-escolar/10 flex items-center justify-center text-escolar group-hover:bg-escolar group-hover:text-white transition-colors">
                        {store.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-escolar transition-colors">
                            {store.name}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-escolar" />
                        </div>
                        <span className="inline-block px-2 py-0.5 text-xs font-semibold text-escolar bg-escolar/10 rounded-full mb-2">
                          {store.highlight}
                        </span>
                        <p className="text-sm text-muted-foreground">
                          {store.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>

            {/* Dica Extra de Compra */}
            <Card className="mt-6 p-6 bg-gradient-to-r from-escolar to-escolar/80 text-white border-0">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Star className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">
                    Dica de Ouro: Compare Antes de Comprar!
                  </h3>
                  <p className="text-white/90 text-sm">
                    Use sites comparadores como Buscapé e Zoom para encontrar os melhores preços. 
                    Muitas lojas oferecem descontos especiais para pagamento via PIX (até 15% off) 
                    e frete grátis acima de determinado valor.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Outras Listas */}
          <Card className="p-6 mt-8 bg-muted/30">
            <h3 className="text-lg font-bold text-foreground mb-4">
              📚 Veja também as listas por série
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link to="/lista-de-material-escolar-educacao-infantil" className="text-sm text-escolar hover:underline">
                → Educação Infantil
              </Link>
              <Link to="/lista-de-material-escolar-1-ano" className="text-sm text-escolar hover:underline">
                → 1° Ano
              </Link>
              <Link to="/lista-de-material-escolar-2-ano" className="text-sm text-escolar hover:underline">
                → 2° Ano
              </Link>
              <Link to="/lista-de-material-escolar-3-ano" className="text-sm text-escolar hover:underline">
                → 3° Ano
              </Link>
              <Link to="/lista-de-material-escolar-4-ano" className="text-sm text-escolar hover:underline">
                → 4° Ano
              </Link>
            </div>
          </Card>
        </div>
      </main>

      <Footer />

      <style>{`
        @media print {
          nav, footer, button, input, .print\\:hidden {
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

export default MaterialEscolar2026;
