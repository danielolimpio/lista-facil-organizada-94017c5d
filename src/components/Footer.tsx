import { Link } from "react-router-dom";
import { ListChecks } from "lucide-react";

const Footer = () => {
  const categoryLinks = [
    { name: "Lista de Compras", path: "/lista-de-compras", color: "compras" },
    { name: "Material Escolar", path: "/lista-de-material-escolar", color: "escolar" },
    { name: "Casa Nova", path: "/lista-de-casa-nova", color: "casa" },
    { name: "Casamento", path: "/lista-de-casamento", color: "casamento" },
    { name: "Blog", path: "/blog", color: "primary" },
  ];

  const resourceLinks = [
    { name: "Como usar nossas listas", path: "/como-usar" },
    { name: "Baixar em PDF", path: "/baixar-pdf" },
    { name: "Imprimir listas", path: "/imprimir" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <footer className="bg-gradient-to-b from-secondary/30 to-secondary/50 border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Coluna 1 - Sobre */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
              <span className="text-lg font-bold bg-gradient-hero bg-clip-text text-transparent">
                HelpListas
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Seu guia gratuito para listas práticas, organizadas e atualizadas.
            </p>
            <Link
              to="/politica-de-privacidade"
              className="text-sm text-primary hover:text-primary-hover font-medium transition-colors"
            >
              Política de Privacidade →
            </Link>
          </div>

          {/* Coluna 2 - Categorias */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Categorias</h3>
            <ul className="space-y-3">
              {categoryLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-muted-foreground hover:text-${link.color} transition-colors text-sm flex items-center group`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-${link.color} mr-2 opacity-0 group-hover:opacity-100 transition-opacity`}></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Recursos Úteis */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Recursos Úteis</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Receba Novidades</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Assine para receber listas atualizadas e dicas exclusivas.
            </p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="px-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-gradient-hero text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity shadow-md">
                Assinar
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© 2025 Helplistas.com.br – Todas as listas são gratuitas e atualizadas mensalmente.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
