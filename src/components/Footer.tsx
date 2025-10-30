import { Link } from "react-router-dom";
import { ListChecks } from "lucide-react";

const Footer = () => {
  const categoryLinks = [
    { name: "Lista de Compras", path: "/lista-de-compras" },
    { name: "Material Escolar", path: "/lista-de-material-escolar" },
    { name: "Casa Nova", path: "/lista-de-casa-nova" },
    { name: "Casamento", path: "/lista-de-casamento" },
    { name: "Blog", path: "/blog" },
  ];

  const resourceLinks = [
    { name: "Como usar nossas listas", path: "/como-usar" },
    { name: "Baixar em PDF", path: "/baixar-pdf" },
    { name: "Imprimir listas", path: "/imprimir" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1 - Sobre */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ListChecks className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Helplistas</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Seu guia gratuito para listas práticas, organizadas e atualizadas.
            </p>
            <Link
              to="/politica-de-privacidade"
              className="text-sm text-primary hover:underline"
            >
              Política de Privacidade
            </Link>
          </div>

          {/* Coluna 2 - Categorias */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Categorias</h3>
            <ul className="space-y-2">
              {categoryLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Recursos Úteis */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Recursos Úteis</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Helplistas.com.br – Todas as listas são gratuitas e atualizadas mensalmente.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
