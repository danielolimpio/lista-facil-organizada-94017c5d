import { useState } from "react";
import { Helmet } from "react-helmet";
import { BookOpen, Download, Printer, Check, ExternalLink, ShoppingBag, Star, Truck, CreditCard, Sparkles, Pencil, Palette, Scissors, Ruler, Calculator, Globe } from "lucide-react";
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

const MaterialEscolar4Ano = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      name: "Cadernos",
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        { id: "c1", name: "Caderno universitário 10 matérias (200 folhas)", checked: false, quantity: "1 unidade" },
        { id: "c2", name: "Caderno universitário 1 matéria (96 folhas)", checked: false, quantity: "5 unidades" },
        { id: "c3", name: "Caderno de desenho grande", checked: false, quantity: "1 unidade" },
        { id: "c4", name: "Caderno quadriculado", checked: false, quantity: "1 unidade" },
        { id: "c5", name: "Caderno pequeno para recados", checked: false, quantity: "1 unidade" },
        { id: "c6", name: "Bloco de folhas A4 pautadas", checked: false, quantity: "1 unidade" },
      ],
    },
    {
      name: "Escrita e Correção",
      icon: <Pencil className="w-5 h-5" />,
      items: [
        { id: "e1", name: "Lápis preto nº 2", checked: false, quantity: "6 unidades" },
        { id: "e2", name: "Lapiseira 0.7mm", checked: false, quantity: "1 unidade" },
        { id: "e3", name: "Grafite 0.7mm", checked: false, quantity: "2 tubos" },
        { id: "e4", name: "Caneta esferográfica azul", checked: false, quantity: "4 unidades" },
        { id: "e5", name: "Caneta esferográfica preta", checked: false, quantity: "2 unidades" },
        { id: "e6", name: "Caneta esferográfica vermelha", checked: false, quantity: "2 unidades" },
        { id: "e7", name: "Borracha branca macia", checked: false, quantity: "3 unidades" },
        { id: "e8", name: "Apontador com depósito", checked: false, quantity: "2 unidades" },
        { id: "e9", name: "Corretivo líquido", checked: false, quantity: "1 unidade" },
        { id: "e10", name: "Fita corretiva", checked: false, quantity: "1 unidade" },
        { id: "e11", name: "Marca texto (4 cores)", checked: false, quantity: "1 kit" },
      ],
    },
    {
      name: "Artes",
      icon: <Palette className="w-5 h-5" />,
      items: [
        { id: "a1", name: "Lápis de cor (24 cores)", checked: false, quantity: "1 caixa" },
        { id: "a2", name: "Canetinha hidrográfica (12 cores)", checked: false, quantity: "1 caixa" },
        { id: "a3", name: "Tinta guache (6 cores)", checked: false, quantity: "1 caixa" },
        { id: "a4", name: "Pincel chato nº 8", checked: false, quantity: "1 unidade" },
        { id: "a5", name: "Pincel redondo nº 6", checked: false, quantity: "1 unidade" },
      ],
    },
    {
      name: "Recorte e Colagem",
      icon: <Scissors className="w-5 h-5" />,
      items: [
        { id: "r1", name: "Tesoura escolar", checked: false, quantity: "1 unidade" },
        { id: "r2", name: "Cola branca 90g", checked: false, quantity: "2 unidades" },
        { id: "r3", name: "Cola em bastão 40g", checked: false, quantity: "2 unidades" },
        { id: "r4", name: "Fita adesiva transparente", checked: false, quantity: "1 unidade" },
        { id: "r5", name: "Papel sulfite A4", checked: false, quantity: "1 resma" },
        { id: "r6", name: "Cartolina branca e colorida", checked: false, quantity: "10 folhas" },
        { id: "r7", name: "Papel color set", checked: false, quantity: "1 pacote" },
      ],
    },
    {
      name: "Geometria e Matemática",
      icon: <Calculator className="w-5 h-5" />,
      items: [
        { id: "g1", name: "Régua 30cm transparente", checked: false, quantity: "1 unidade" },
        { id: "g2", name: "Régua 15cm", checked: false, quantity: "1 unidade" },
        { id: "g3", name: "Esquadro 45°", checked: false, quantity: "1 unidade" },
        { id: "g4", name: "Esquadro 60°", checked: false, quantity: "1 unidade" },
        { id: "g5", name: "Transferidor 180°", checked: false, quantity: "1 unidade" },
        { id: "g6", name: "Compasso escolar", checked: false, quantity: "1 unidade" },
      ],
    },
    {
      name: "Organização",
      icon: <Ruler className="w-5 h-5" />,
      items: [
        { id: "o1", name: "Mochila escolar resistente", checked: false, quantity: "1 unidade" },
        { id: "o2", name: "Estojo escolar", checked: false, quantity: "1 unidade" },
        { id: "o3", name: "Pasta com elástico", checked: false, quantity: "2 unidades" },
        { id: "o4", name: "Pasta catálogo com plásticos", checked: false, quantity: "1 unidade" },
        { id: "o5", name: "Agenda escolar", checked: false, quantity: "1 unidade" },
        { id: "o6", name: "Post-it colorido", checked: false, quantity: "1 bloco" },
        { id: "o7", name: "Etiquetas com nome", checked: false, quantity: "1 cartela" },
      ],
    },
    {
      name: "Materiais Específicos",
      icon: <Globe className="w-5 h-5" />,
      items: [
        { id: "s1", name: "Dicionário de Português (se solicitado)", checked: false, quantity: "1 unidade" },
        { id: "s2", name: "Atlas geográfico (se solicitado)", checked: false, quantity: "1 unidade" },
        { id: "s3", name: "Calculadora simples (se permitido)", checked: false, quantity: "1 unidade" },
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
      description: "Frete grátis para Prime, grande variedade e preços competitivos",
      url: "https://www.amazon.com.br/material-escolar",
      highlight: "Frete Grátis Prime",
      icon: <Truck className="w-5 h-5" />,
    },
    {
      name: "Kalunga",
      description: "Especialista em papelaria, kits escolares completos com desconto",
      url: "https://www.kalunga.com.br/",
      highlight: "Kits Completos",
      icon: <Star className="w-5 h-5" />,
    },
    {
      name: "Magazine Luiza",
      description: "Cashback e parcelamento em até 12x sem juros",
      url: "https://www.magazineluiza.com.br/",
      highlight: "12x sem juros",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      name: "Americanas",
      description: "Cupons exclusivos e programa de pontos",
      url: "https://www.americanas.com.br/",
      highlight: "Cupons Exclusivos",
      icon: <ShoppingBag className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Lista de Material Escolar 4° Ano 2026 | HelpListas</title>
        <meta name="description" content="Lista completa de material escolar para o 4° ano do Ensino Fundamental 2026. Kit de geometria, cadernos e todos os itens necessários com onde comprar online." />
        <meta name="keywords" content="material escolar 4 ano, lista quarto ano, material escolar fundamental, lista escolar 2026, kit geometria" />
        <link rel="canonical" href="https://helplistas.com.br/lista-de-material-escolar-4-ano" />
      </Helmet>

      <Navbar />
      <Breadcrumbs />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex p-4 bg-orange-100 rounded-2xl mb-6">
              <BookOpen className="w-12 h-12 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Material Escolar 4° Ano
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Lista completa para o quarto ano — introdução à geometria e maior organização
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Atualizada para 2026
            </div>

            {/* Progresso */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full">
                <Check className="w-5 h-5 text-orange-600" />
                <span className="text-lg font-semibold text-foreground">
                  {getCheckedItems()} / {getTotalItems()} itens
                </span>
              </div>
            </div>

            {/* Ações */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Button onClick={handlePrint} className="bg-orange-600 hover:bg-orange-700" size="lg">
                <Printer className="w-4 h-4 mr-2" />
                Imprimir Lista
              </Button>
              <Button variant="outline" size="lg" className="border-orange-300 hover:bg-orange-50">
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
                className="w-full border-orange-200 focus:border-orange-400"
              />
            </div>
          </div>

          {/* Dica */}
          <Card className="p-6 mb-8 border-orange-200 bg-gradient-to-r from-orange-50 to-orange-100/50">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-orange-600" />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground mb-2">
                  📐 Dica para o 4° Ano
                </h2>
                <p className="text-muted-foreground text-sm">
                  No quarto ano, os alunos começam a usar <strong>kit de geometria</strong> (esquadros, transferidor, compasso). 
                  Escolha materiais de qualidade — um compasso ruim pode frustrar e dificultar o aprendizado. 
                  A <strong>lapiseira</strong> também é introduzida, facilitando desenhos técnicos.
                </p>
              </div>
            </div>
          </Card>

          {/* Categorias e Itens */}
          <div className="space-y-6 print:space-y-4">
            {filteredCategories.map((category, categoryIndex) => {
              if (category.items.length === 0) return null;

              return (
                <Card key={category.name} className="p-6 print:break-inside-avoid border-l-4 border-l-orange-500">
                  <div className="flex items-center gap-3 mb-4 border-b border-border pb-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
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
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-orange-50 transition-colors border border-transparent hover:border-orange-200"
                      >
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id={item.id}
                            checked={item.checked}
                            onCheckedChange={() =>
                              handleToggleItem(categoryIndex, item.id)
                            }
                            className="print:hidden data-[state=checked]:bg-orange-600 data-[state=checked]:border-orange-600"
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
                          <span className="text-sm text-orange-600 font-medium bg-orange-100 px-3 py-1 rounded-full">
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
                Compare preços e aproveite as melhores promoções de volta às aulas
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
                  <Card className="p-6 h-full border-2 border-transparent hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        {store.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-orange-600 transition-colors">
                            {store.name}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-orange-600" />
                        </div>
                        <span className="inline-block px-2 py-0.5 text-xs font-semibold text-orange-600 bg-orange-100 rounded-full mb-2">
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

            <Card className="mt-6 p-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Star className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">
                    Dica de Economia para o 4° Ano
                  </h3>
                  <p className="text-white/90 text-sm">
                    Compre o kit de geometria completo — sai mais barato que comprar cada peça separadamente. 
                    Prefira estojos de acrílico ou metal, que protegem melhor o compasso e esquadros. 
                    Um bom kit dura todo o Ensino Fundamental!
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
              <Link to="/lista-de-material-escolar-2026" className="text-sm text-orange-600 hover:underline">
                → Lista Geral 2026
              </Link>
              <Link to="/lista-de-material-escolar-1-ano" className="text-sm text-orange-600 hover:underline">
                → 1° Ano
              </Link>
              <Link to="/lista-de-material-escolar-2-ano" className="text-sm text-orange-600 hover:underline">
                → 2° Ano
              </Link>
              <Link to="/lista-de-material-escolar-3-ano" className="text-sm text-orange-600 hover:underline">
                → 3° Ano
              </Link>
              <Link to="/lista-de-material-escolar-educacao-infantil" className="text-sm text-orange-600 hover:underline">
                → Educação Infantil
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

export default MaterialEscolar4Ano;
