import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Sparkles, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const categoryLinks = [
    { name: "Início", path: "/" },
    { name: "Lista Mercado", path: "/lista-de-compras" },
    { name: "Lista Escolar", path: "/lista-de-material-escolar" },
    { name: "Lista Casa Nova", path: "/lista-de-casa-nova" },
    { name: "Lista Casamento", path: "/lista-de-casamento" },
    { name: "Blog", path: "/blog" },
  ];

  const resourceLinks = [
    { name: "Como usar nossas listas", path: "/como-usar" },
    { name: "Baixar em PDF", path: "/baixar-em-pdf" },
    { name: "Imprimir listas", path: "/imprimir-listas" },
    { name: "Glossário A–Z", path: "/glossario" },
    { name: "Mapa do Site", path: "/sitemap" },
    { name: "Contato", path: "/contato" },
  ];

  const legalLinks = [
    { name: "Política de Privacidade", path: "/politica-de-privacidade" },
    { name: "Política de Cookies", path: "/politica-de-cookies" },
    { name: "Termos de Uso", path: "/termos-de-uso" },
  ];

  const linkClass =
    "group inline-flex items-center gap-1 text-[13px] text-white/65 hover:text-white transition-colors";

  return (
    <footer className="relative mt-20 bg-foreground text-white overflow-hidden">
      {/* Top hairline */}
      <div className="h-px w-full" style={{ background: "var(--gradient-underline)", opacity: 0.6 }} />
      {/* Soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full"
        style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.18), transparent 70%)" }}
      />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Coluna 1 - Sobre */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 px-2.5 py-1.5 rounded-sm bg-white/[0.04] border border-white/10">
              <img src={logo} alt="Help Listas" className="h-7 brightness-0 invert opacity-95" />
            </div>
            <p className="text-white/65 text-[13px] leading-relaxed mb-5 max-w-[260px]">
              Seu guia gratuito para listas práticas, organizadas e sempre atualizadas.
            </p>
            <div className="space-y-2.5 text-[13px] text-white/70">
              <a href="mailto:contato@helplistas.com.br" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <span className="icon-premium w-7 h-7" style={{ background: "rgba(255,255,255,0.05)", boxShadow: "0 0 0 1px rgba(255,255,255,0.08) inset" }}>
                  <Mail className="w-3.5 h-3.5 text-primary" strokeWidth={1.75} />
                </span>
                contato@helplistas.com.br
              </a>
              <a href="tel:+5512982519116" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <span className="icon-premium w-7 h-7" style={{ background: "rgba(255,255,255,0.05)", boxShadow: "0 0 0 1px rgba(255,255,255,0.08) inset" }}>
                  <Phone className="w-3.5 h-3.5 text-primary" strokeWidth={1.75} />
                </span>
                (12) 98251-9116
              </a>
              <div className="flex items-start gap-2.5">
                <span className="icon-premium w-7 h-7 flex-shrink-0" style={{ background: "rgba(255,255,255,0.05)", boxShadow: "0 0 0 1px rgba(255,255,255,0.08) inset" }}>
                  <MapPin className="w-3.5 h-3.5 text-primary" strokeWidth={1.75} />
                </span>
                <span className="pt-1">Av. Julia Freire, 1200 — João Pessoa/PB</span>
              </div>
            </div>
          </div>

          {/* Coluna 2 - Categorias */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50 mb-4">
              Categorias
            </h3>
            <ul className="space-y-2.5">
              {categoryLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    <span className="w-1 h-1 rounded-full bg-primary/70 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Recursos */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50 mb-4">
              Recursos Úteis
            </h3>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    <span className="w-1 h-1 rounded-full bg-primary/70 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 - Legais */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50 mb-4">
              Políticas Legais
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    <span className="w-1 h-1 rounded-full bg-primary/70 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 5 - Newsletter */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50 mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-primary" strokeWidth={2} />
              Receba Novidades
            </h3>
            <p className="text-white/65 text-[13px] mb-3 leading-relaxed">
              Listas atualizadas e dicas exclusivas no seu e-mail.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="px-3 py-2 rounded-sm bg-white/[0.04] border border-white/10 text-[13px] text-white placeholder:text-white/40 focus:outline-none focus:border-primary/60 focus:bg-white/[0.06] transition-all"
              />
              <button className="group px-3 py-2 rounded-sm bg-primary text-white font-medium text-[13px] hover:bg-primary-hover transition-colors flex items-center justify-center gap-1.5">
                Assinar
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* Hairline divider */}
        <div className="hairline opacity-[0.15] mb-6" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-white/55">
          <p>
            © 2026 <span className="text-white/80 font-medium">Helplistas.com.br</span> · Todos os direitos reservados
          </p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://danielolimpio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white font-medium transition-colors"
            >
              DanielOlimpio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
