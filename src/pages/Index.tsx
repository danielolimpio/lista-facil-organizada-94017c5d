import { ShoppingCart, GraduationCap, Home, Heart, CheckCircle, Sparkles, Shield, Clock, Users, Award, TrendingUp, Download, CheckCircle2, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import ListCard from "@/components/ListCard";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.webp";
import SEO from "@/components/SEO";

const Index = () => {
  const categories = [
    {
      icon: ShoppingCart,
      title: "Lista de Compras",
      description: "Lista de supermercado completa, mensal, para casal ou solteiro.",
      path: "/lista-de-compras",
      gradient: "gradient-compras",
      color: "compras",
    },
    {
      icon: GraduationCap,
      title: "Material Escolar",
      description: "Listas por série: infantil, fundamental, ensino médio — 2026.",
      path: "/lista-de-material-escolar",
      gradient: "gradient-escolar",
      color: "escolar",
    },
    {
      icon: Home,
      title: "Casa Nova",
      description: "Tudo que você precisa para organizar sua casa nova do zero.",
      path: "/lista-de-casa-nova",
      gradient: "gradient-casa",
      color: "casa",
    },
    {
      icon: Heart,
      title: "Casamento",
      description: "Checklist completo para noivos: do 'sim' à lua de mel.",
      path: "/lista-de-casamento",
      gradient: "gradient-casamento",
      color: "casamento",
    },
  ];

  const shoppingLists = [
    {
      title: "Lista de Compras Completa",
      description: "Lista completa com todos os itens essenciais",
      path: "/lista-de-compras-completa",
      badge: "Mais Popular",
      categoryColor: "compras",
    },
    {
      title: "Lista de Supermercado",
      description: "Itens básicos e essenciais mensais",
      path: "/lista-supermercado",
      badge: "Essencial",
      categoryColor: "compras",
    },
    {
      title: "Lista para 2 Pessoas",
      description: "Lista otimizada para casais",
      path: "/lista-duas-pessoas",
      categoryColor: "compras",
    },
    {
      title: "Lista Mensal",
      description: "Planejamento completo para o mês inteiro",
      path: "/lista-mensal",
      categoryColor: "compras",
    },
    {
      title: "Lista para Solteiro",
      description: "Lista prática e econômica",
      path: "/lista-solteiro",
      categoryColor: "compras",
    },
    {
      title: "Lista Saudável",
      description: "Opções nutritivas e equilibradas",
      path: "/lista-saudavel",
      badge: "Saudável",
      categoryColor: "compras",
    },
  ];

  const featuredLists = [
    {
      title: "Lista Material Escolar 2026",
      description: "Lista atualizada para o próximo ano letivo",
      path: "/lista-de-material-escolar",
      badge: "Atualizado",
      categoryColor: "escolar",
    },
    {
      title: "Checklist de Casamento",
      description: "Guia completo do noivado à lua de mel",
      path: "/lista-de-casamento",
      badge: "Em Alta",
      categoryColor: "casamento",
    },
    {
      title: "Lista para Montar sua Casa Nova",
      description: "Tudo para você organizar sua nova casa",
      path: "/lista-de-casa-nova",
      badge: "Completa",
      categoryColor: "casa",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Helplistas – Listas Prontas Grátis para Organizar 2026" description="Baixe listas gratuitas: compras, material escolar 2026, casa nova e casamento. Tudo pronto para imprimir e organizar sua vida." path="/" />
      <Navbar />
      <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 border-b border-border overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-foreground/70" />
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 animate-fade-in">
            <CheckCircle className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Listas gratuitas e atualizadas</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-slide-up">
            Listas Prontas Gratuitas<br />para Organizar sua Vida
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Baixe listas práticas e completas para o seu dia a dia — sempre atualizadas para 2026.
          </p>
          <Button 
            size="lg"
            className="px-8 py-6 text-base font-semibold bg-white text-foreground hover:bg-white/90 shadow-lg hover:shadow-xl animate-scale-in"
          >
            Criar Minha Lista
          </Button>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-4 bg-background border-b border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Transforme sua rotina</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Você já perdeu tempo tentando organizar sua semana, seu casamento, sua volta às aulas ou até mesmo sua casa nova?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nós também já passamos por isso. Por isso criamos o <strong className="text-foreground">Help Listas</strong> — não só para te entregar listas prontas, mas para te ajudar a viver com mais calma, organização e propósito.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
              <div className="flex items-start gap-3 p-4 bg-card border border-border/50 rounded-lg hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Atualizadas anualmente</h3>
                  <p className="text-sm text-muted-foreground">Incluindo 2026 e 2027</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card border border-border/50 rounded-lg hover:shadow-md transition-all">
                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Testadas na prática</h3>
                  <p className="text-sm text-muted-foreground">Por pessoas reais como você</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card border border-border/50 rounded-lg hover:shadow-md transition-all">
                <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Organizadas por necessidade</h3>
                  <p className="text-sm text-muted-foreground">Para solteiros, casais, famílias e estudantes</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card border border-border/50 rounded-lg hover:shadow-md transition-all">
                <Download className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">100% gratuitas</h3>
                  <p className="text-sm text-muted-foreground">Sem cadastro e prontas para usar</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20 rounded-xl">
              <p className="text-lg font-medium text-foreground">
                Aqui, você não encontra apenas uma lista de compras... você encontra um <span className="text-primary font-bold">guia de vida mais leve, inteligente e eficiente</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Navegue por Categorias
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Escolha a categoria que melhor atende suas necessidades
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={category.path} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="py-20 px-4 bg-background border-b border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Por que milhares de pessoas confiam nas nossas listas?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Porque não estamos aqui apenas para entregar itens — estamos aqui para <strong className="text-foreground">resolver problemas reais</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-card border border-border/50 rounded-xl hover:shadow-lg transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-compras/10 rounded-lg group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-6 h-6 text-compras" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">Lista de Compras?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Não é só o que comprar — é como <strong className="text-foreground">planejar seu orçamento</strong>, evitar desperdício e economizar tempo.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card border border-border/50 rounded-xl hover:shadow-lg transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-escolar/10 rounded-lg group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-escolar" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">Material Escolar?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    É sobre <strong className="text-foreground">não esquecer nada importante</strong> no primeiro dia de aula — e ainda dar um toque especial ao kit do seu filho.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card border border-border/50 rounded-xl hover:shadow-lg transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-casa/10 rounded-lg group-hover:scale-110 transition-transform">
                  <Home className="w-6 h-6 text-casa" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">Casa Nova?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    É sobre <strong className="text-foreground">não deixar nada para trás</strong> — desde a primeira tomada até o último quadro na parede.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card border border-border/50 rounded-xl hover:shadow-lg transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-casamento/10 rounded-lg group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-casamento" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">Casamento?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    É sobre <strong className="text-foreground">transformar o caos em celebração</strong> — do convite à lua de mel, tudo em ordem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl">
            <p className="text-lg text-foreground font-medium">
              Cada lista foi pensada para <span className="text-primary font-bold">simplificar decisões, reduzir estresse</span> e garantir que você não esqueça o essencial.
            </p>
          </div>
        </div>
      </section>

      {/* Shopping Lists Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Listas de Compras
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Escolha a lista ideal para o seu perfil e necessidades
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shoppingLists.map((list, index) => (
              <div key={list.path} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ListCard {...list} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 px-4 bg-secondary border-b border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Como Usar Nossas Listas — Em 3 Passos Simples
            </h2>
            <p className="text-lg text-muted-foreground">
              Não sabe por onde começar? <strong className="text-foreground">Fácil!</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="relative p-8 bg-card border border-border/50 rounded-xl hover:shadow-xl transition-all group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                1
              </div>
              <div className="flex flex-col items-center text-center pt-4">
                <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Escolha sua categoria</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Compras, Escola, Casa, Casamento… temos tudo organizado para você.
                </p>
              </div>
            </div>

            <div className="relative p-8 bg-card border border-border/50 rounded-xl hover:shadow-xl transition-all group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                2
              </div>
              <div className="flex flex-col items-center text-center pt-4">
                <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Baixe ou use online</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Todas as listas podem ser acessadas diretamente no site ou baixadas em PDF.
                </p>
              </div>
            </div>

            <div className="relative p-8 bg-card border border-border/50 rounded-xl hover:shadow-xl transition-all group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                3
              </div>
              <div className="flex flex-col items-center text-center pt-4">
                <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Personalize e execute</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Marque o que já comprou, adicione seus itens e comece a viver mais organizado.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-lg">
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">💡 Dica extra:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Use nossas listas como base — personalize com suas necessidades. Afinal, a melhor lista é a que <strong className="text-foreground">funciona pra você</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lists Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Mais acessadas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Já usou uma das nossas listas? Você vai querer usar todas.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Milhares de pessoas já começaram a organizar sua vida com o Help Listas. Veja as mais populares e atualizadas — <strong className="text-foreground">prontas para te ajudar agora</strong>:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredLists.map((list, index) => (
              <div key={list.path} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ListCard {...list} />
              </div>
            ))}
          </div>

          <div className="text-center p-6 bg-gradient-to-r from-secondary to-secondary/50 border border-border/50 rounded-xl">
            <p className="text-lg font-medium text-foreground">
              Essas listas não são só úteis — elas <span className="text-primary font-bold">salvam dias, dinheiro e nervos</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Authority Section */}
      <section className="py-20 px-4 bg-secondary border-t border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-4">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Confiança e qualidade</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Por que você pode confiar no Help Listas?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nós somos mais do que um site de listas — somos seu <strong className="text-foreground">parceiro de organização</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-6 bg-card border border-border/50 rounded-xl hover:shadow-lg transition-all text-center group">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Atualizações constantes</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Todas as listas são revisadas e atualizadas anualmente
              </p>
            </div>

            <div className="p-6 bg-card border border-border/50 rounded-xl hover:shadow-lg transition-all text-center group">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Baseadas em experiências reais</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Criadas por quem já passou por isso
              </p>
            </div>

            <div className="p-6 bg-card border border-border/50 rounded-xl hover:shadow-lg transition-all text-center group">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Sem propagandas intrusivas</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nosso foco é ajudar, não vender
              </p>
            </div>

            <div className="p-6 bg-card border border-border/50 rounded-xl hover:shadow-lg transition-all text-center group">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Fácil de usar</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sem complicação, sem cadastro obrigatório
              </p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/20 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Nosso Compromisso com Você</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Te ajudar a viver com <strong className="text-foreground">menos estresse e mais controle</strong> — um checklist de cada vez.
            </p>
            <div className="mt-6">
              <Button 
                size="lg"
                className="px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl"
              >
                Comece Hoje — Baixe Sua Primeira Lista Grátis
              </Button>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
