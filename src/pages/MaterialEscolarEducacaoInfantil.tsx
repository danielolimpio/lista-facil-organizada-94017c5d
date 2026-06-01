import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Baby, Download, Printer, Check, ExternalLink, ShoppingBag, Star, Truck, CreditCard, Sparkles, Heart, Palette, Scissors } from "lucide-react";
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

const MaterialEscolarEducacaoInfantil = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      name: "Materiais Básicos",
      icon: <Heart className="w-5 h-5" />,
      items: [
        { id: "b1", name: "Caderno de desenho grande (brochura)", checked: false, quantity: "2 unidades" },
        { id: "b2", name: "Caderno de caligrafia", checked: false, quantity: "1 unidade" },
        { id: "b3", name: "Lápis preto grosso (jumbo)", checked: false, quantity: "4 unidades" },
        { id: "b4", name: "Lápis preto triangular", checked: false, quantity: "4 unidades" },
        { id: "b5", name: "Borracha macia grande", checked: false, quantity: "2 unidades" },
        { id: "b6", name: "Apontador com depósito grande", checked: false, quantity: "1 unidade" },
      ],
    },
    {
      name: "Artes e Pintura",
      icon: <Palette className="w-5 h-5" />,
      items: [
        { id: "a1", name: "Giz de cera grosso (12 cores)", checked: false, quantity: "2 caixas" },
        { id: "a2", name: "Lápis de cor grosso (12 cores)", checked: false, quantity: "1 caixa" },
        { id: "a3", name: "Canetinha hidrográfica lavável (12 cores)", checked: false, quantity: "2 caixas" },
        { id: "a4", name: "Tinta guache (6 cores)", checked: false, quantity: "2 caixas" },
        { id: "a5", name: "Tinta a dedo (6 cores)", checked: false, quantity: "1 caixa" },
        { id: "a6", name: "Pincel grosso chato nº 14", checked: false, quantity: "2 unidades" },
        { id: "a7", name: "Pincel grosso redondo nº 10", checked: false, quantity: "2 unidades" },
        { id: "a8", name: "Massa de modelar atóxica (12 cores)", checked: false, quantity: "2 caixas" },
        { id: "a9", name: "Avental plástico para pintura", checked: false, quantity: "1 unidade" },
        { id: "a10", name: "Pote para água (pintura)", checked: false, quantity: "1 unidade" },
      ],
    },
    {
      name: "Recorte e Colagem",
      icon: <Scissors className="w-5 h-5" />,
      items: [
        { id: "r1", name: "Tesoura escolar sem ponta (cabo anatômico)", checked: false, quantity: "1 unidade" },
        { id: "r2", name: "Cola branca atóxica 90g", checked: false, quantity: "3 unidades" },
        { id: "r3", name: "Cola em bastão 40g", checked: false, quantity: "4 unidades" },
        { id: "r4", name: "Cola colorida com glitter (6 cores)", checked: false, quantity: "1 caixa" },
        { id: "r5", name: "Papel sulfite A4", checked: false, quantity: "1 resma" },
        { id: "r6", name: "Papel color set (cores variadas)", checked: false, quantity: "1 pacote" },
        { id: "r7", name: "Papel crepom (cores variadas)", checked: false, quantity: "6 unidades" },
        { id: "r8", name: "EVA (cores variadas)", checked: false, quantity: "10 folhas" },
        { id: "r9", name: "EVA com glitter", checked: false, quantity: "5 folhas" },
        { id: "r10", name: "Cartolina branca", checked: false, quantity: "5 folhas" },
        { id: "r11", name: "Cartolina colorida", checked: false, quantity: "5 folhas" },
        { id: "r12", name: "Palitos de sorvete coloridos", checked: false, quantity: "1 pacote" },
        { id: "r13", name: "Olhos móveis para artesanato", checked: false, quantity: "1 pacote" },
        { id: "r14", name: "Pompom colorido", checked: false, quantity: "1 pacote" },
      ],
    },
    {
      name: "Organização e Higiene",
      icon: <Sparkles className="w-5 h-5" />,
      items: [
        { id: "o1", name: "Mochila escolar (tamanho infantil)", checked: false, quantity: "1 unidade" },
        { id: "o2", name: "Lancheira térmica", checked: false, quantity: "1 unidade" },
        { id: "o3", name: "Estojo grande", checked: false, quantity: "1 unidade" },
        { id: "o4", name: "Pasta com elástico", checked: false, quantity: "1 unidade" },
        { id: "o5", name: "Toalha de mão com nome", checked: false, quantity: "2 unidades" },
        { id: "o6", name: "Escova de dente infantil", checked: false, quantity: "1 unidade" },
        { id: "o7", name: "Creme dental infantil", checked: false, quantity: "1 unidade" },
        { id: "o8", name: "Porta-escova de dente", checked: false, quantity: "1 unidade" },
        { id: "o9", name: "Copo ou squeeze com nome", checked: false, quantity: "1 unidade" },
        { id: "o10", name: "Muda de roupa completa", checked: false, quantity: "2 conjuntos" },
        { id: "o11", name: "Etiquetas personalizadas com nome", checked: false, quantity: "1 cartela" },
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
      description: "Grande variedade de materiais infantis, frete grátis Prime e entrega rápida",
      url: "https://www.amazon.com.br/material-escolar-infantil",
      highlight: "Frete Grátis Prime",
      icon: <Truck className="w-5 h-5" />,
    },
    {
      name: "Ri Happy",
      description: "Especialista em produtos infantis, materiais coloridos e atrativos",
      url: "https://www.rihappy.com.br/",
      highlight: "Especialista Infantil",
      icon: <Star className="w-5 h-5" />,
    },
    {
      name: "Kalunga",
      description: "Kits de material escolar infantil completos com desconto",
      url: "https://www.kalunga.com.br/",
      highlight: "Kits Completos",
      icon: <ShoppingBag className="w-5 h-5" />,
    },
    {
      name: "PBKids",
      description: "Materiais seguros e atóxicos para a primeira infância",
      url: "https://www.pbkids.com.br/",
      highlight: "Produtos Seguros",
      icon: <Heart className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Lista de Material Escolar Educação Infantil 2026 | HelpListas</title>
        <meta name="description" content="Lista completa de material escolar para Educação Infantil 2026. Confira todos os itens essenciais para creche e pré-escola, com quantidades e onde comprar online." />
        <meta property="og:title" content="Lista de Material Escolar Educação Infantil 2026 | HelpListas" />
        <meta property="og:description" content="Lista completa de material escolar para Educação Infantil 2026. Confira todos os itens essenciais para creche e pré-escola, com quantidades e onde comprar online." />
        <meta property="og:url" content="https://helplistas.com.br/lista-de-material-escolar-educacao-infantil" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="material escolar educação infantil, lista creche, material pré-escola, material escolar infantil 2026" />
        <link rel="canonical" href="https://helplistas.com.br/lista-de-material-escolar-educacao-infantil" />
      </Helmet>

      <Navbar />
      <Breadcrumbs />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex p-4 bg-pink-100 rounded-2xl mb-6">
              <Baby className="w-12 h-12 text-pink-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Material Escolar Educação Infantil
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Lista especial para crianças da creche e pré-escola — materiais seguros, atóxicos e adequados para os pequenos
            </p>

            {/* Badge 2026 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Atualizada para 2026
            </div>

            {/* Progresso */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-full">
                <Check className="w-5 h-5 text-pink-600" />
                <span className="text-lg font-semibold text-foreground">
                  {getCheckedItems()} / {getTotalItems()} itens
                </span>
              </div>
            </div>

            {/* Ações */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Button onClick={handlePrint} className="bg-pink-600 hover:bg-pink-700" size="lg">
                <Printer className="w-4 h-4 mr-2" />
                Imprimir Lista
              </Button>
              <Button variant="outline" size="lg" className="border-pink-300 hover:bg-pink-50">
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
                className="w-full border-pink-200 focus:border-pink-400"
              />
            </div>
          </div>

          {/* Dica */}
          <Card className="p-6 mb-8 border-pink-200 bg-gradient-to-r from-pink-50 to-pink-100/50">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-pink-600" />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground mb-2">
                  💕 Dica Importante para os Pequenos
                </h2>
                <p className="text-muted-foreground text-sm">
                  Para a Educação Infantil, priorize materiais <strong>atóxicos</strong> e com <strong>selo do INMETRO</strong>. 
                  Giz de cera e canetinhas laváveis facilitam a limpeza de "acidentes artísticos". Identifique todos os materiais 
                  com o nome da criança para evitar perdas.
                </p>
              </div>
            </div>
          </Card>

          {/* Categorias e Itens */}
          <div className="space-y-6 print:space-y-4">
            {filteredCategories.map((category, categoryIndex) => {
              if (category.items.length === 0) return null;

              return (
                <Card key={category.name} className="p-6 print:break-inside-avoid border-l-4 border-l-pink-400">
                  <div className="flex items-center gap-3 mb-4 border-b border-border pb-3">
                    <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600">
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
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-pink-50 transition-colors border border-transparent hover:border-pink-200"
                      >
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id={item.id}
                            checked={item.checked}
                            onCheckedChange={() =>
                              handleToggleItem(categoryIndex, item.id)
                            }
                            className="print:hidden data-[state=checked]:bg-pink-600 data-[state=checked]:border-pink-600"
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
                          <span className="text-sm text-pink-600 font-medium bg-pink-100 px-3 py-1 rounded-full">
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
                Lojas especializadas em produtos infantis com materiais seguros e certificados
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
                  <Card className="p-6 h-full border-2 border-transparent hover:border-pink-300 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                        {store.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-pink-600 transition-colors">
                            {store.name}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-pink-600" />
                        </div>
                        <span className="inline-block px-2 py-0.5 text-xs font-semibold text-pink-600 bg-pink-100 rounded-full mb-2">
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

            {/* Dica Extra */}
            <Card className="mt-6 p-6 bg-gradient-to-r from-pink-500 to-pink-600 text-white border-0">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Star className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">
                    Dica Especial para Papais e Mamães
                  </h3>
                  <p className="text-white/90 text-sm">
                    Muitas escolas de Educação Infantil pedem materiais coletivos. Verifique a lista oficial da escola 
                    antes de comprar para evitar itens duplicados. Materiais com personagens podem ser mais caros — 
                    os genéricos têm a mesma qualidade!
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
              <Link to="/lista-de-material-escolar-2026" className="text-sm text-pink-600 hover:underline">
                → Lista Geral 2026
              </Link>
              <Link to="/lista-de-material-escolar-1-ano" className="text-sm text-pink-600 hover:underline">
                → 1° Ano
              </Link>
              <Link to="/lista-de-material-escolar-2-ano" className="text-sm text-pink-600 hover:underline">
                → 2° Ano
              </Link>
              <Link to="/lista-de-material-escolar-3-ano" className="text-sm text-pink-600 hover:underline">
                → 3° Ano
              </Link>
              <Link to="/lista-de-material-escolar-4-ano" className="text-sm text-pink-600 hover:underline">
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

export default MaterialEscolarEducacaoInfantil;
