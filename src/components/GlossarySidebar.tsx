import { Link, useLocation } from "react-router-dom";
import { alphabet, groupByLetter } from "@/data/glossario";
import { BookOpen } from "lucide-react";

const GlossarySidebar = () => {
  const groups = groupByLetter();
  const location = useLocation();
  const activeSlug = location.pathname.replace("/glossario/o-que-e-", "");

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-md border border-border/70 bg-card shadow-[var(--shadow-card)] overflow-hidden">
        <div className="px-4 py-3 border-b border-border/70 bg-gradient-to-b from-white to-secondary/40 flex items-center gap-2">
          <span className="icon-premium w-7 h-7 rounded-sm bg-primary/10 flex items-center justify-center">
            <BookOpen className="w-3.5 h-3.5 text-primary" strokeWidth={1.75} />
          </span>
          <div>
            <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-semibold">
              Índice
            </div>
            <div className="text-sm font-semibold text-foreground">Glossário A–Z</div>
          </div>
        </div>

        {/* A-Z quick nav */}
        <nav aria-label="Navegação alfabética" className="px-3 py-3 border-b border-border/70">
          <ul className="grid grid-cols-7 gap-1">
            {alphabet.map((letter) => {
              const hasTerms = !!groups[letter];
              return (
                <li key={letter}>
                  <a
                    href={hasTerms ? `#letra-${letter}` : undefined}
                    aria-disabled={!hasTerms}
                    className={`flex items-center justify-center w-7 h-7 rounded-sm text-[11px] font-semibold transition-colors ${
                      hasTerms
                        ? "text-foreground/80 hover:text-primary hover:bg-primary/10"
                        : "text-muted-foreground/40 cursor-not-allowed"
                    }`}
                  >
                    {letter}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Terms list */}
        <div className="max-h-[70vh] overflow-y-auto px-3 py-3 space-y-4">
          {alphabet.map((letter) => {
            const terms = groups[letter];
            if (!terms) return null;
            return (
              <div key={letter} id={`letra-${letter}`}>
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-semibold mb-1.5 px-1">
                  {letter}
                </div>
                <ul className="space-y-0.5">
                  {terms.map((t) => {
                    const active = activeSlug === t.slug;
                    return (
                      <li key={t.slug}>
                        <Link
                          to={`/glossario/o-que-e-${t.slug}`}
                          className={`block px-2 py-1.5 rounded-sm text-[13px] leading-snug transition-colors ${
                            active
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-foreground/80 hover:text-primary hover:bg-secondary"
                          }`}
                        >
                          {t.term}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default GlossarySidebar;
