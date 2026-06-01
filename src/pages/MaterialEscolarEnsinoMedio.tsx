import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BookOpen, Download, Printer, Check, ExternalLink, ShoppingBag, Star, Truck, CreditCard, Sparkles, Pencil, Palette, Scissors, Ruler, Calculator, Globe, FlaskConical, Languages, Atom, GraduationCap, Target, Brain } from "lucide-react";
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

const MaterialEscolarEnsinoMedio = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      name: "Cadernos e Blocos",
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        { id: "c1", name: "Caderno universitário 10 matérias (200 folhas)", checked: false, quantity: "4 unidades" },
        { id: "c2", name: "Caderno universitário 1 matéria (96 folhas)", checked: false, quantity: "12 unidades" },
        { id: "c3", name: "Caderno de desenho técnico A3", checked: false, quantity: "1 unidade" },
        { id: "c4", name: "Caderno quadriculado grande (física/matemática)", checked: false, quantity: "3 unidades" },
        { id: "c5", name: "Caderno pautado para redação ENEM", checked: false, quantity: "3 unidades" },
        { id: "c6", name: "Bloco de folhas A4 pautadas", checked: false, quantity: "4 unidades" },
        { id: "c7", name: "Bloco de folhas A4 quadriculadas", checked: false, quantity: "2 unidades" },
        { id: "c8", name: "Bloco flip chart (apresentações)", checked: false, quantity: "1 unidade" },
      ],
    },
    {
      name: "Escrita e Correção",
      icon: <Pencil className="w-5 h-5" />,
      items: [
        { id: "e1", name: "Lápis preto nº 2 para provas", checked: false, quantity: "12 unidades" },
        { id: "e2", name: "Lapiseira 0.5mm profissional", checked: false, quantity: "3 unidades" },
        { id: "e3", name: "Lapiseira 0.7mm para desenho", checked: false, quantity: "2 unidades" },
        { id: "e4", name: "Grafite 0.5mm HB, 2B, 4B e 6B", checked: false, quantity: "10 tubos" },
        { id: "e5", name: "Caneta esferográfica azul ponta fina", checked: false, quantity: "15 unidades" },
        { id: "e6", name: "Caneta esferográfica preta", checked: false, quantity: "12 unidades" },
        { id: "e7", name: "Caneta esferográfica vermelha", checked: false, quantity: "6 unidades" },
        { id: "e8", name: "Caneta gel colorida para mapas mentais", checked: false, quantity: "1 kit" },
        { id: "e9", name: "Borracha branca macia", checked: false, quantity: "6 unidades" },
        { id: "e10", name: "Borracha de precisão (limpa-tipos)", checked: false, quantity: "1 unidade" },
        { id: "e11", name: "Apontador com depósito", checked: false, quantity: "3 unidades" },
        { id: "e12", name: "Corretivo líquido", checked: false, quantity: "4 unidades" },
        { id: "e13", name: "Fita corretiva", checked: false, quantity: "6 unidades" },
        { id: "e14", name: "Marca texto pastel e neon (10 cores)", checked: false, quantity: "2 kits" },
        { id: "e15", name: "Canetas fineliner para resumos (10 cores)", checked: false, quantity: "1 kit" },
        { id: "e16", name: "Caneta brush para lettering", checked: false, quantity: "1 kit" },
      ],
    },
    {
      name: "Artes e Desenho Técnico",
      icon: <Palette className="w-5 h-5" />,
      items: [
        { id: "a1", name: "Lápis de cor profissional (72 cores)", checked: false, quantity: "1 caixa" },
        { id: "a2", name: "Canetinha hidrográfica (48 cores)", checked: false, quantity: "1 caixa" },
        { id: "a3", name: "Tinta acrílica profissional (24 cores)", checked: false, quantity: "1 caixa" },
        { id: "a4", name: "Pincéis artísticos variados", checked: false, quantity: "1 kit" },
        { id: "a5", name: "Lápis grafite artístico completo", checked: false, quantity: "1 kit" },
        { id: "a6", name: "Papel canson A3", checked: false, quantity: "1 bloco" },
        { id: "a7", name: "Nanquim e caneta técnica", checked: false, quantity: "1 kit" },
      ],
    },
    {
      name: "Recorte, Colagem e Apresentações",
      icon: <Scissors className="w-5 h-5" />,
      items: [
        { id: "r1", name: "Tesoura escolar de precisão", checked: false, quantity: "1 unidade" },
        { id: "r2", name: "Cola branca 90g", checked: false, quantity: "4 unidades" },
        { id: "r3", name: "Cola em bastão 40g", checked: false, quantity: "6 unidades" },
        { id: "r4", name: "Cola instantânea", checked: false, quantity: "2 unidades" },
        { id: "r5", name: "Fita adesiva transparente larga", checked: false, quantity: "4 unidades" },
        { id: "r6", name: "Fita dupla face", checked: false, quantity: "2 unidades" },
        { id: "r7", name: "Papel sulfite A4", checked: false, quantity: "5 resmas" },
        { id: "r8", name: "Cartolina branca e colorida", checked: false, quantity: "30 folhas" },
        { id: "r9", name: "Papel cartão grosso", checked: false, quantity: "25 folhas" },
        { id: "r10", name: "Papel milimetrado A4", checked: false, quantity: "3 blocos" },
        { id: "r11", name: "Papel vegetal A4", checked: false, quantity: "2 blocos" },
        { id: "r12", name: "Isopor para maquetes", checked: false, quantity: "5 placas" },
      ],
    },
    {
      name: "Geometria e Matemática Avançada",
      icon: <Calculator className="w-5 h-5" />,
      items: [
        { id: "g1", name: "Régua 30cm graduada metálica", checked: false, quantity: "1 unidade" },
        { id: "g2", name: "Jogo de esquadros profissional 45° e 60°", checked: false, quantity: "1 kit" },
        { id: "g3", name: "Transferidor 360° transparente", checked: false, quantity: "1 unidade" },
        { id: "g4", name: "Compasso de metal de alta precisão", checked: false, quantity: "1 unidade" },
        { id: "g5", name: "Calculadora científica avançada (Casio fx-82/991 ou HP)", checked: false, quantity: "1 unidade" },
        { id: "g6", name: "Gabarito de curvas francesas", checked: false, quantity: "1 kit" },
        { id: "g7", name: "Escalímetro profissional", checked: false, quantity: "1 unidade" },
        { id: "g8", name: "Régua T (para desenho técnico)", checked: false, quantity: "1 unidade" },
      ],
    },
    {
      name: "Física, Química e Biologia",
      icon: <Atom className="w-5 h-5" />,
      items: [
        { id: "f1", name: "Jaleco branco manga longa profissional", checked: false, quantity: "1 unidade" },
        { id: "f2", name: "Óculos de proteção", checked: false, quantity: "1 unidade" },
        { id: "f3", name: "Luvas de nitrilo (mais resistentes)", checked: false, quantity: "1 caixa" },
        { id: "f4", name: "Caderno de laboratório quadriculado", checked: false, quantity: "2 unidades" },
        { id: "f5", name: "Tabela periódica plastificada grande", checked: false, quantity: "1 unidade" },
        { id: "f6", name: "Formulário de física plastificado", checked: false, quantity: "1 unidade" },
        { id: "f7", name: "Formulário de química plastificado", checked: false, quantity: "1 unidade" },
        { id: "f8", name: "Modelo molecular 3D (se solicitado)", checked: false, quantity: "1 kit" },
      ],
    },
    {
      name: "Idiomas e Linguagens",
      icon: <Languages className="w-5 h-5" />,
      items: [
        { id: "i1", name: "Dicionário Português-Inglês Oxford/Cambridge", checked: false, quantity: "1 unidade" },
        { id: "i2", name: "Dicionário de Espanhol", checked: false, quantity: "1 unidade" },
        { id: "i3", name: "Caderno exclusivo para cada idioma", checked: false, quantity: "3 unidades" },
        { id: "i4", name: "Gramática completa de Inglês", checked: false, quantity: "1 unidade" },
        { id: "i5", name: "Dicionário de sinônimos e antônimos", checked: false, quantity: "1 unidade" },
      ],
    },
    {
      name: "Preparação ENEM e Vestibular",
      icon: <Target className="w-5 h-5" />,
      items: [
        { id: "v1", name: "Fichário grande para resumos de revisão", checked: false, quantity: "2 unidades" },
        { id: "v2", name: "Fichas pautadas para flashcards", checked: false, quantity: "5 pacotes" },
        { id: "v3", name: "Apostila de exercícios ENEM por área", checked: false, quantity: "4 unidades" },
        { id: "v4", name: "Provas anteriores ENEM impressas", checked: false, quantity: "5 anos" },
        { id: "v5", name: "Timer/cronômetro para simulados", checked: false, quantity: "1 unidade" },
        { id: "v6", name: "Cartão resposta para treino", checked: false, quantity: "1 bloco" },
        { id: "v7", name: "Lápis 2B específico para prova", checked: false, quantity: "6 unidades" },
      ],
    },
    {
      name: "Mapas Mentais e Resumos",
      icon: <Brain className="w-5 h-5" />,
      items: [
        { id: "m1", name: "Caderno sem pauta A4 para mapas mentais", checked: false, quantity: "2 unidades" },
        { id: "m2", name: "Canetas coloridas ponta grossa", checked: false, quantity: "1 kit" },
        { id: "m3", name: "Post-it gigante (15x10cm)", checked: false, quantity: "3 blocos" },
        { id: "m4", name: "Quadro branco pequeno para estudos", checked: false, quantity: "1 unidade" },
        { id: "m5", name: "Marcador para quadro branco", checked: false, quantity: "1 kit" },
      ],
    },
    {
      name: "Organização Avançada",
      icon: <Ruler className="w-5 h-5" />,
      items: [
        { id: "o1", name: "Mochila resistente com compartimento para notebook", checked: false, quantity: "1 unidade" },
        { id: "o2", name: "Estojo escolar grande triplo ou nécessaire", checked: false, quantity: "1 unidade" },
        { id: "o3", name: "Pasta com elástico A4 (por matéria)", checked: false, quantity: "10 unidades" },
        { id: "o4", name: "Pasta catálogo com 150 plásticos", checked: false, quantity: "2 unidades" },
        { id: "o5", name: "Fichário universitário grande com divisórias", checked: false, quantity: "2 unidades" },
        { id: "o6", name: "Planner anual detalhado", checked: false, quantity: "1 unidade" },
        { id: "o7", name: "Post-it variados (todos os tamanhos e cores)", checked: false, quantity: "10 blocos" },
        { id: "o8", name: "Marcadores de página adesivos transparentes", checked: false, quantity: "3 kits" },
        { id: "o9", name: "Grampeador médio/grande com grampos", checked: false, quantity: "1 kit" },
        { id: "o10", name: "Perfurador de papel 2 e 4 furos", checked: false, quantity: "1 unidade" },
        { id: "o11", name: "Clips coloridos variados", checked: false, quantity: "2 caixas" },
        { id: "o12", name: "Porta-canetas de mesa", checked: false, quantity: "1 unidade" },
      ],
    },
    {
      name: "Materiais de Referência",
      icon: <Globe className="w-5 h-5" />,
      items: [
        { id: "s1", name: "Dicionário de Português Houaiss ou Aurélio", checked: false, quantity: "1 unidade" },
        { id: "s2", name: "Atlas geográfico mundial atualizado 2026", checked: false, quantity: "1 unidade" },
        { id: "s3", name: "Gramática completa da Língua Portuguesa", checked: false, quantity: "1 unidade" },
        { id: "s4", name: "Livros paradidáticos obrigatórios", checked: false, quantity: "conforme lista" },
        { id: "s5", name: "Manual de redação ENEM/vestibular", checked: false, quantity: "1 unidade" },
        { id: "s6", name: "Guia de repertório sociocultural", checked: false, quantity: "1 unidade" },
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
        <title>Lista de Material Escolar Ensino Médio 2026 | HelpListas</title>
        <meta name="description" content="Lista completa de material escolar para o Ensino Médio 2026. Preparação para ENEM e vestibulares com todos os materiais necessários." />
        <meta property="og:title" content="Lista de Material Escolar Ensino Médio 2026 | HelpListas" />
        <meta property="og:description" content="Lista completa de material escolar para o Ensino Médio 2026. Preparação para ENEM e vestibulares com todos os materiais necessários." />
        <meta property="og:url" content="https://helplistas.com.br/lista-de-material-escolar-ensino-medio" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="material escolar ensino médio, lista ensino médio 2026, material ENEM, vestibular 2026, preparação vestibular" />
        <link rel="canonical" href="https://helplistas.com.br/lista-de-material-escolar-ensino-medio" />
      </Helmet>

      <Navbar />
      <Breadcrumbs />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex p-4 bg-emerald-100 rounded-2xl mb-6">
              <GraduationCap className="w-12 h-12 text-emerald-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Material Escolar Ensino Médio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Lista completa para o Ensino Médio — preparação intensiva para ENEM e vestibulares
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Atualizada para 2026
            </div>

            {/* Progresso */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
                <Check className="w-5 h-5 text-emerald-600" />
                <span className="text-lg font-semibold text-foreground">
                  {getCheckedItems()} / {getTotalItems()} itens
                </span>
              </div>
            </div>

            {/* Ações */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Button onClick={handlePrint} className="bg-emerald-600 hover:bg-emerald-700" size="lg">
                <Printer className="w-4 h-4 mr-2" />
                Imprimir Lista
              </Button>
              <Button variant="outline" size="lg" className="border-emerald-300 hover:bg-emerald-50">
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
                className="w-full border-emerald-200 focus:border-emerald-400"
              />
            </div>
          </div>

          {/* Dica */}
          <Card className="p-6 mb-8 border-emerald-200 bg-gradient-to-r from-emerald-50 to-emerald-100/50">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground mb-2">
                  🎓 Dica para o Ensino Médio
                </h2>
                <p className="text-muted-foreground text-sm">
                  O Ensino Médio é a reta final antes da universidade. Invista em <strong>materiais de organização de qualidade</strong> — 
                  um bom planner e fichários bem estruturados fazem toda diferença. Use <strong>flashcards</strong> para revisão diária 
                  e pratique <strong>redações semanalmente</strong>. A calculadora científica aprovada no ENEM (Casio fx-82 ou similar) 
                  será sua aliada por todos os 3 anos!
                </p>
              </div>
            </div>
          </Card>

          {/* Categorias e Itens */}
          <div className="space-y-6 print:space-y-4">
            {filteredCategories.map((category, categoryIndex) => {
              if (category.items.length === 0) return null;

              return (
                <Card key={category.name} className="p-6 print:break-inside-avoid border-l-4 border-l-emerald-500">
                  <div className="flex items-center gap-3 mb-4 border-b border-border pb-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
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
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-200"
                      >
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id={item.id}
                            checked={item.checked}
                            onCheckedChange={() =>
                              handleToggleItem(categoryIndex, item.id)
                            }
                            className="print:hidden data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
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
                          <span className="text-sm text-emerald-600 font-medium bg-emerald-100 px-3 py-1 rounded-full">
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
                  <Card className="p-6 h-full border-2 border-transparent hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        {store.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-emerald-600 transition-colors">
                            {store.name}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-emerald-600" />
                        </div>
                        <span className="inline-block px-2 py-0.5 text-xs font-semibold text-emerald-600 bg-emerald-100 rounded-full mb-2">
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

            <Card className="mt-6 p-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Star className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">
                    Dica de Economia para o Ensino Médio
                  </h3>
                  <p className="text-white/90 text-sm">
                    No Ensino Médio, a quantidade de material é grande. <strong>Compre em atacado</strong> (Makro, Assaí) 
                    itens como canetas, lápis e resmas de papel — economia de até 60%! Forme <strong>grupos de compra</strong> 
                    com colegas para dividir kits maiores. E lembre-se: material de qualidade dura os 3 anos!
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
              <Link to="/lista-de-material-escolar-8-ano" className="text-emerald-600 hover:underline text-sm">
                → 8° Ano
              </Link>
              <Link to="/lista-de-material-escolar-9-ano" className="text-emerald-600 hover:underline text-sm">
                → 9° Ano
              </Link>
              <Link to="/lista-de-material-escolar-educacao-infantil" className="text-emerald-600 hover:underline text-sm">
                → Educação Infantil
              </Link>
              <Link to="/lista-de-material-escolar-1-ano" className="text-emerald-600 hover:underline text-sm">
                → 1° Ano
              </Link>
              <Link to="/lista-de-material-escolar-2026" className="text-emerald-600 hover:underline text-sm font-semibold">
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

export default MaterialEscolarEnsinoMedio;
