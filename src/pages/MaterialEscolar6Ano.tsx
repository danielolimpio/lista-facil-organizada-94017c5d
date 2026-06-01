import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BookOpen, Download, Printer, Check, ExternalLink, ShoppingBag, Star, Truck, CreditCard, Sparkles, Pencil, Palette, Scissors, Ruler, Calculator, Globe, FlaskConical } from "lucide-react";
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

const MaterialEscolar6Ano = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      name: "Cadernos",
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        { id: "c1", name: "Caderno universitário 10 matérias (200 folhas)", checked: false, quantity: "2 unidades" },
        { id: "c2", name: "Caderno universitário 1 matéria (96 folhas)", checked: false, quantity: "8 unidades" },
        { id: "c3", name: "Caderno de desenho espiral grande", checked: false, quantity: "1 unidade" },
        { id: "c4", name: "Caderno quadriculado (matemática)", checked: false, quantity: "1 unidade" },
        { id: "c5", name: "Caderno pautado para redação", checked: false, quantity: "1 unidade" },
        { id: "c6", name: "Bloco de folhas A4 pautadas", checked: false, quantity: "2 unidades" },
      ],
    },
    {
      name: "Escrita e Correção",
      icon: <Pencil className="w-5 h-5" />,
      items: [
        { id: "e1", name: "Lápis preto nº 2", checked: false, quantity: "6 unidades" },
        { id: "e2", name: "Lapiseira 0.5mm", checked: false, quantity: "1 unidade" },
        { id: "e3", name: "Lapiseira 0.7mm", checked: false, quantity: "1 unidade" },
        { id: "e4", name: "Grafite 0.5mm e 0.7mm", checked: false, quantity: "4 tubos" },
        { id: "e5", name: "Caneta esferográfica azul", checked: false, quantity: "8 unidades" },
        { id: "e6", name: "Caneta esferográfica preta", checked: false, quantity: "6 unidades" },
        { id: "e7", name: "Caneta esferográfica vermelha", checked: false, quantity: "4 unidades" },
        { id: "e8", name: "Caneta esferográfica verde", checked: false, quantity: "2 unidades" },
        { id: "e9", name: "Borracha branca macia", checked: false, quantity: "4 unidades" },
        { id: "e10", name: "Apontador com depósito", checked: false, quantity: "2 unidades" },
        { id: "e11", name: "Corretivo líquido", checked: false, quantity: "2 unidades" },
        { id: "e12", name: "Fita corretiva", checked: false, quantity: "3 unidades" },
        { id: "e13", name: "Marca texto (6 cores)", checked: false, quantity: "1 kit" },
        { id: "e14", name: "Canetas coloridas para anotações", checked: false, quantity: "1 kit" },
      ],
    },
    {
      name: "Artes",
      icon: <Palette className="w-5 h-5" />,
      items: [
        { id: "a1", name: "Lápis de cor (24 cores)", checked: false, quantity: "1 caixa" },
        { id: "a2", name: "Canetinha hidrográfica (12 cores)", checked: false, quantity: "1 caixa" },
        { id: "a3", name: "Tinta guache (12 cores)", checked: false, quantity: "1 caixa" },
        { id: "a4", name: "Pincéis variados", checked: false, quantity: "1 kit" },
        { id: "a5", name: "Tinta acrílica (se solicitado)", checked: false, quantity: "1 kit" },
      ],
    },
    {
      name: "Recorte e Colagem",
      icon: <Scissors className="w-5 h-5" />,
      items: [
        { id: "r1", name: "Tesoura escolar", checked: false, quantity: "1 unidade" },
        { id: "r2", name: "Cola branca 90g", checked: false, quantity: "2 unidades" },
        { id: "r3", name: "Cola em bastão 40g", checked: false, quantity: "4 unidades" },
        { id: "r4", name: "Fita adesiva transparente", checked: false, quantity: "2 unidades" },
        { id: "r5", name: "Papel sulfite A4", checked: false, quantity: "2 resmas" },
        { id: "r6", name: "Cartolina branca e colorida", checked: false, quantity: "15 folhas" },
        { id: "r7", name: "Papel color set", checked: false, quantity: "1 pacote" },
        { id: "r8", name: "Papel cartão", checked: false, quantity: "10 folhas" },
      ],
    },
    {
      name: "Geometria e Matemática",
      icon: <Calculator className="w-5 h-5" />,
      items: [
        { id: "g1", name: "Régua 30cm transparente", checked: false, quantity: "1 unidade" },
        { id: "g2", name: "Jogo de esquadros (45° e 60°)", checked: false, quantity: "1 kit" },
        { id: "g3", name: "Transferidor 360°", checked: false, quantity: "1 unidade" },
        { id: "g4", name: "Compasso de metal", checked: false, quantity: "1 unidade" },
        { id: "g5", name: "Calculadora científica", checked: false, quantity: "1 unidade" },
      ],
    },
    {
      name: "Ciências",
      icon: <FlaskConical className="w-5 h-5" />,
      items: [
        { id: "ci1", name: "Jaleco branco (se solicitado)", checked: false, quantity: "1 unidade" },
        { id: "ci2", name: "Óculos de proteção (se solicitado)", checked: false, quantity: "1 unidade" },
        { id: "ci3", name: "Luvas descartáveis", checked: false, quantity: "1 caixa" },
      ],
    },
    {
      name: "Organização",
      icon: <Ruler className="w-5 h-5" />,
      items: [
        { id: "o1", name: "Mochila escolar resistente", checked: false, quantity: "1 unidade" },
        { id: "o2", name: "Estojo escolar grande", checked: false, quantity: "1 unidade" },
        { id: "o3", name: "Pasta com elástico", checked: false, quantity: "4 unidades" },
        { id: "o4", name: "Pasta catálogo com 50 plásticos", checked: false, quantity: "1 unidade" },
        { id: "o5", name: "Fichário universitário com divisórias", checked: false, quantity: "1 unidade" },
        { id: "o6", name: "Agenda escolar", checked: false, quantity: "1 unidade" },
        { id: "o7", name: "Post-it colorido", checked: false, quantity: "3 blocos" },
        { id: "o8", name: "Marcadores de página", checked: false, quantity: "1 kit" },
      ],
    },
    {
      name: "Materiais Específicos",
      icon: <Globe className="w-5 h-5" />,
      items: [
        { id: "s1", name: "Dicionário de Português atualizado", checked: false, quantity: "1 unidade" },
        { id: "s2", name: "Dicionário de Inglês", checked: false, quantity: "1 unidade" },
        { id: "s3", name: "Atlas geográfico atualizado", checked: false, quantity: "1 unidade" },
        { id: "s4", name: "Livros paradidáticos (conforme escola)", checked: false, quantity: "conforme lista" },
        { id: "s5", name: "Gramática da Língua Portuguesa", checked: false, quantity: "1 unidade" },
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
        <title>Lista de Material Escolar 6° Ano 2026 | HelpListas</title>
        <meta name="description" content="Lista completa de material escolar para o 6° ano do Ensino Fundamental II 2026. Transição importante com mais matérias e professores." />
        <meta property="og:title" content="Lista de Material Escolar 6° Ano 2026 | HelpListas" />
        <meta property="og:description" content="Lista completa de material escolar para o 6° ano do Ensino Fundamental II 2026. Transição importante com mais matérias e professores." />
        <meta property="og:url" content="https://helplistas.com.br/lista-de-material-escolar-6-ano" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="material escolar 6 ano, lista sexto ano, material escolar fundamental II, lista escolar 2026, ensino fundamental 2" />
        <link rel="canonical" href="https://helplistas.com.br/lista-de-material-escolar-6-ano" />
      </Helmet>

      <Navbar />
      <Breadcrumbs />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex p-4 bg-teal-100 rounded-2xl mb-6">
              <BookOpen className="w-12 h-12 text-teal-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Material Escolar 6° Ano
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Lista completa para o sexto ano — início do Fundamental II com mais disciplinas
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Atualizada para 2026
            </div>

            {/* Progresso */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full">
                <Check className="w-5 h-5 text-teal-600" />
                <span className="text-lg font-semibold text-foreground">
                  {getCheckedItems()} / {getTotalItems()} itens
                </span>
              </div>
            </div>

            {/* Ações */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Button onClick={handlePrint} className="bg-teal-600 hover:bg-teal-700" size="lg">
                <Printer className="w-4 h-4 mr-2" />
                Imprimir Lista
              </Button>
              <Button variant="outline" size="lg" className="border-teal-300 hover:bg-teal-50">
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
                className="w-full border-teal-200 focus:border-teal-400"
              />
            </div>
          </div>

          {/* Dica */}
          <Card className="p-6 mb-8 border-teal-200 bg-gradient-to-r from-teal-50 to-teal-100/50">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-teal-200 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground mb-2">
                  🔬 Dica para o 6° Ano
                </h2>
                <p className="text-muted-foreground text-sm">
                  O sexto ano marca uma <strong>grande mudança</strong>: mais professores, mais matérias, mais organização necessária. 
                  Invista em um <strong>fichário com divisórias</strong> para separar cada disciplina e use <strong>marca-textos</strong> para 
                  destacar informações importantes. A <strong>calculadora científica</strong> será sua companheira até o Ensino Médio!
                </p>
              </div>
            </div>
          </Card>

          {/* Categorias e Itens */}
          <div className="space-y-6 print:space-y-4">
            {filteredCategories.map((category, categoryIndex) => {
              if (category.items.length === 0) return null;

              return (
                <Card key={category.name} className="p-6 print:break-inside-avoid border-l-4 border-l-teal-500">
                  <div className="flex items-center gap-3 mb-4 border-b border-border pb-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600">
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
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-teal-50 transition-colors border border-transparent hover:border-teal-200"
                      >
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id={item.id}
                            checked={item.checked}
                            onCheckedChange={() =>
                              handleToggleItem(categoryIndex, item.id)
                            }
                            className="print:hidden data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
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
                          <span className="text-sm text-teal-600 font-medium bg-teal-100 px-3 py-1 rounded-full">
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
                  <Card className="p-6 h-full border-2 border-transparent hover:border-teal-300 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                        {store.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-teal-600 transition-colors">
                            {store.name}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-teal-600" />
                        </div>
                        <span className="inline-block px-2 py-0.5 text-xs font-semibold text-teal-600 bg-teal-100 rounded-full mb-2">
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

            <Card className="mt-6 p-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white border-0">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Star className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">
                    Dica de Economia para o 6° Ano
                  </h3>
                  <p className="text-white/90 text-sm">
                    No Fundamental II, a quantidade de cadernos aumenta. Considere usar um <strong>caderno universitário 10 matérias</strong> 
                    ou <strong>fichário</strong> em vez de vários cadernos separados — mais prático e econômico. 
                    Compre canetas e corretivos em caixas maiores para economizar até 40%!
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Outras Listas */}
          <Card className="p-6 mt-8 bg-muted/30">
            <h3 className="text-lg font-bold text-foreground mb-4">
              📚 Veja também outras listas de material escolar:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link to="/lista-de-material-escolar-5-ano" className="text-teal-600 hover:underline text-sm">
                → 5° Ano
              </Link>
              <Link to="/lista-de-material-escolar-7-ano" className="text-teal-600 hover:underline text-sm">
                → 7° Ano
              </Link>
              <Link to="/lista-de-material-escolar-8-ano" className="text-teal-600 hover:underline text-sm">
                → 8° Ano
              </Link>
              <Link to="/lista-de-material-escolar-9-ano" className="text-teal-600 hover:underline text-sm">
                → 9° Ano
              </Link>
              <Link to="/lista-de-material-escolar-ensino-medio" className="text-teal-600 hover:underline text-sm">
                → Ensino Médio
              </Link>
              <Link to="/lista-de-material-escolar-2026" className="text-teal-600 hover:underline text-sm font-semibold">
                → Lista Geral 2026
              </Link>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MaterialEscolar6Ano;
