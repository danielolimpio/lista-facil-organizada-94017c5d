import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

/**
 * Route name mapping for breadcrumb display
 */
const routeNames: Record<string, string> = {
  "lista-de-compras": "Lista de Compras",
  "lista-de-compras-completa": "Lista Completa",
  "lista-supermercado": "Lista Supermercado",
  "lista-duas-pessoas": "Lista Duas Pessoas",
  "lista-mensal": "Lista Mensal",
  "lista-solteiro": "Lista Solteiro",
  "lista-saudavel": "Lista Saudável",
  "lista-de-material-escolar": "Material Escolar",
  "lista-de-casa-nova": "Casa Nova",
  "lista-de-casamento": "Casamento",
  "blog": "Blog",
  "como-usar": "Como Usar",
  "baixar-em-pdf": "Baixar em PDF",
  "imprimir-listas": "Imprimir Listas",
  "politica-de-privacidade": "Política de Privacidade",
  "politica-de-cookies": "Política de Cookies",
  "termos-de-uso": "Termos de Uso",
  "contato": "Contato",
  "sitemap": "Mapa do Site",
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Home className="w-4 h-4" />
                Início
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const displayName = routeNames[name] || name;

            return (
              <BreadcrumbItem key={routeTo}>
                <BreadcrumbSeparator>
                  <ChevronRight className="w-4 h-4" />
                </BreadcrumbSeparator>
                {isLast ? (
                  <BreadcrumbPage className="font-medium text-foreground">
                    {displayName}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={routeTo} className="hover:text-primary transition-colors">
                      {displayName}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
