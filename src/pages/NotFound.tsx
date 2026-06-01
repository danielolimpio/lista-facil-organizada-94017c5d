import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO title="Página Não Encontrada | Helplistas" description="A página que você procura não existe. Explore nossas listas gratuitas no Helplistas." path="/" />
      <main className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="text-center max-w-md">
          <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
          <h2 className="mb-4 text-2xl font-bold text-foreground">Página não encontrada</h2>
          <p className="mb-8 text-foreground/80">
            Desculpe, a página que você está procurando não existe ou foi removida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Button>
            </Link>
            <Link to="/lista-de-compras">
              <Button variant="outline" className="w-full sm:w-auto">
                <Search className="w-4 h-4 mr-2" />
                Ver Listas
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
