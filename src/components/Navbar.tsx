import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Listas de Compras", path: "/lista-de-compras" },
    { name: "Lista Escolar", path: "/lista-de-material-escolar" },
    { name: "Lista Casa Nova", path: "/lista-de-casa-nova" },
    { name: "Lista Casamento", path: "/lista-de-casamento" },
    { name: "Blog", path: "/blog" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname === path + "/";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-border/70 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="Help Listas"
              className="h-10 transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-2 rounded-sm text-[13px] font-medium tracking-tight transition-all ${
                    active
                      ? "text-primary"
                      : "text-foreground/80 hover:text-foreground hover:bg-secondary/70"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span
                      className="absolute left-2 right-2 -bottom-0.5 h-px"
                      style={{ background: "var(--gradient-underline)" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Search and Mobile Menu */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-foreground/80 hover:text-foreground rounded-sm"
              aria-label="Buscar"
            >
              <Search className="w-[18px] h-[18px]" strokeWidth={1.75} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-foreground/80 hover:text-foreground rounded-sm"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" strokeWidth={1.75} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.75} />
              )}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-3 animate-slide-up">
            <Input
              type="search"
              placeholder="Procure sua lista: supermercado, escola, casa nova..."
              className="w-full rounded-sm border-border/70"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 animate-slide-up border-t border-border/60">
            <div className="flex flex-col gap-0.5 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-sm text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Hairline gradient under navbar */}
      <div className="h-px w-full" style={{ background: "var(--gradient-underline)", opacity: 0.4 }} />
    </nav>
  );
};

export default Navbar;
