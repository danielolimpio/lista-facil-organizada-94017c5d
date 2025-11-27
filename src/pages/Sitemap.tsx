import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, ShoppingCart, School, Home, Heart, BookOpen, HelpCircle, Printer, Download, Mail, Shield } from "lucide-react";

const Sitemap = () => {
  const sections = [
    {
      title: "Página Principal",
      icon: Home,
      links: [
        { name: "Início", path: "/" }
      ]
    },
    {
      title: "Listas de Compras",
      icon: ShoppingCart,
      links: [
        { name: "Listas de Compras", path: "/lista-de-compras" },
        { name: "Lista de Compras Completa", path: "/lista-de-compras-completa" },
        { name: "Lista de Supermercado", path: "/lista-supermercado" },
        { name: "Lista para 2 Pessoas", path: "/lista-duas-pessoas" },
        { name: "Lista Mensal", path: "/lista-mensal" },
        { name: "Lista para Solteiro", path: "/lista-solteiro" },
        { name: "Lista Saudável", path: "/lista-saudavel" }
      ]
    },
    {
      title: "Outras Categorias",
      icon: FileText,
      links: [
        { name: "Lista de Material Escolar", path: "/lista-de-material-escolar", icon: School },
        { name: "Lista de Casa Nova", path: "/lista-de-casa-nova", icon: Home },
        { name: "Lista de Casamento", path: "/lista-de-casamento", icon: Heart }
      ]
    },
    {
      title: "Conteúdo",
      icon: BookOpen,
      links: [
        { name: "Blog", path: "/blog" }
      ]
    },
    {
      title: "Recursos Úteis",
      icon: HelpCircle,
      links: [
        { name: "Como usar nossas listas", path: "/como-usar" },
        { name: "Baixar em PDF", path: "/baixar-em-pdf", icon: Download },
        { name: "Imprimir listas", path: "/imprimir-listas", icon: Printer },
        { name: "Contato", path: "/contato", icon: Mail }
      ]
    },
    {
      title: "Políticas e Termos",
      icon: Shield,
      links: [
        { name: "Política de Privacidade", path: "/politica-de-privacidade" },
        { name: "Política de Cookies", path: "/politica-de-cookies" },
        { name: "Termos de Uso", path: "/termos-de-uso" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mapa do Site
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Navegue facilmente por todas as páginas e recursos do Helplistas. 
              Encontre rapidamente a lista ou informação que você precisa.
            </p>
          </div>

          {/* Sitemap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {sections.map((section) => (
              <div 
                key={section.title}
                className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <section.icon className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                      >
                        {link.icon && <link.icon className="w-4 h-4" />}
                        <span className="group-hover:underline">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* SEO Text */}
          <div className="mt-16 max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground text-sm">
              O Helplistas oferece listas gratuitas e completas para facilitar sua organização. 
              Desde listas de compras até material escolar, casa nova e casamento - tudo em um só lugar, 
              pronto para download e impressão.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;