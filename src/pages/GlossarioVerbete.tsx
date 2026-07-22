import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlossarySidebar from "@/components/GlossarySidebar";
import { glossaryBySlug, glossary } from "@/data/glossario";
import {
  BookOpen,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  ChevronRight,
  Link2,
} from "lucide-react";

const SITE = "https://helplistas.com.br";

const GlossarioVerbete = () => {
  const { slug = "" } = useParams();
  const normalizedSlug = slug.startsWith("o-que-e-") ? slug.slice("o-que-e-".length) : slug;
  const term = glossaryBySlug[normalizedSlug];

  if (!term) return <Navigate to="/glossario" replace />;
  if (!slug.startsWith("o-que-e-")) {
    return <Navigate to={`/glossario/o-que-e-${term.slug}`} replace />;
  }

  const url = `${SITE}/glossario/o-que-e-${term.slug}`;
  const title = `O que é ${term.term}? Definição, Exemplos e Lista Pronta`;
  const description = term.definition.slice(0, 158);

  const definedTermLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": url,
    name: term.term,
    description: term.definition,
    url,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      "@id": `${SITE}/glossario`,
      name: "Glossário Help Listas",
    },
  };

  const faqLd = term.faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: term.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Glossário", item: `${SITE}/glossario` },
      { "@type": "ListItem", position: 3, name: term.term, item: url },
    ],
  };

  const related = term.relacionados
    .map((s) => glossaryBySlug[s])
    .filter(Boolean)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(definedTermLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        {faqLd && (
          <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        )}
      </Helmet>

      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-[12px] text-muted-foreground mb-6"
          >
            <Link to="/" className="hover:text-primary transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/glossario" className="hover:text-primary transition-colors">
              Glossário
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground/80 font-medium truncate">{term.term}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            <GlossarySidebar />

            <article className="max-w-3xl">
              {/* Header */}
              <header className="mb-8">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-primary/10 border border-primary/20 mb-4">
                  <BookOpen className="w-3 h-3 text-primary" strokeWidth={2} />
                  <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-primary">
                    {term.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-[38px] font-bold text-foreground leading-[1.15] tracking-tight mb-3">
                  O que é {term.term}?
                </h1>
                <div
                  className="h-px w-40 mb-6"
                  style={{ background: "var(--gradient-underline)" }}
                />
              </header>

              {/* Definition callout */}
              <section
                aria-labelledby="definicao"
                className="relative rounded-md border border-primary/20 bg-gradient-to-br from-primary/[0.04] to-transparent p-5 md:p-6 mb-10"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="icon-premium w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary" strokeWidth={1.75} />
                  </span>
                  <h2
                    id="definicao"
                    className="text-[13px] uppercase tracking-[0.14em] font-semibold text-primary"
                  >
                    Definição
                  </h2>
                </div>
                <p className="text-[17px] leading-relaxed text-foreground font-medium">
                  {term.definition}
                </p>
              </section>

              {/* Exemplo Prático */}
              <section className="mb-10">
                <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-3">
                  <span className="icon-premium w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" strokeWidth={1.75} />
                  </span>
                  Exemplo Prático
                </h2>
                <div
                  className="h-px w-24 mb-4"
                  style={{ background: "var(--gradient-underline)" }}
                />
                <p className="text-[15px] text-foreground/80 leading-relaxed mb-4">
                  {term.exemploPratico}
                </p>
                {term.exemploItens && (
                  <ul className="rounded-md border border-border/70 bg-card divide-y divide-border/60 overflow-hidden">
                    {term.exemploItens.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 px-4 py-2.5 text-[14px] text-foreground/85"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                          strokeWidth={1.75}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              {/* Por que importa */}
              <section className="mb-10">
                <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-3">
                  <span className="icon-premium w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-primary" strokeWidth={1.75} />
                  </span>
                  Por que isso importa
                </h2>
                <div
                  className="h-px w-24 mb-4"
                  style={{ background: "var(--gradient-underline)" }}
                />
                <p className="text-[15px] text-foreground/80 leading-relaxed">
                  {term.porQueImporta}
                </p>
              </section>

              {/* Aprofundamento Estratégico – link building interno */}
              <section
                aria-labelledby="aprofundamento"
                className="relative overflow-hidden rounded-md border border-primary/25 mb-10"
                style={{ background: "var(--gradient-hero)" }}
              >
                <div className="absolute inset-0 opacity-[0.08]" aria-hidden>
                  <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white blur-3xl" />
                </div>
                <div className="relative p-5 md:p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="icon-premium w-8 h-8 rounded-sm bg-white/15 flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={1.75} />
                    </span>
                    <h2
                      id="aprofundamento"
                      className="text-[13px] uppercase tracking-[0.14em] font-semibold text-white/90"
                    >
                      Aprofundamento Estratégico
                    </h2>
                  </div>
                  <p className="text-[15px] leading-relaxed text-white/95 mb-4">
                    {term.aprofundamento.texto}
                  </p>
                  <Link
                    to={term.aprofundamento.linkHref}
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white text-primary font-semibold text-[14px] hover:bg-white/95 transition-colors"
                  >
                    {term.aprofundamento.linkText}
                    <ArrowUpRight
                      className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                      strokeWidth={2}
                    />
                  </Link>
                </div>
              </section>

              {/* FAQ */}
              {term.faq.length > 0 && (
                <section className="mb-10">
                  <h2 className="text-xl font-bold text-foreground mb-3">
                    Perguntas frequentes
                  </h2>
                  <div
                    className="h-px w-24 mb-4"
                    style={{ background: "var(--gradient-underline)" }}
                  />
                  <div className="space-y-3">
                    {term.faq.map((f, i) => (
                      <details
                        key={i}
                        className="group rounded-md border border-border/70 bg-card overflow-hidden"
                      >
                        <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between gap-3 text-[14px] font-semibold text-foreground hover:bg-secondary/50 transition-colors">
                          {f.q}
                          <ChevronRight className="w-4 h-4 text-primary transition-transform group-open:rotate-90" />
                        </summary>
                        <div className="px-4 pb-4 pt-1 text-[14px] text-foreground/75 leading-relaxed border-t border-border/60">
                          {f.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* Termos relacionados */}
              {related.length > 0 && (
                <section>
                  <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-3">
                    <span className="icon-premium w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center">
                      <Link2 className="w-4 h-4 text-primary" strokeWidth={1.75} />
                    </span>
                    Termos relacionados
                  </h2>
                  <div
                    className="h-px w-24 mb-4"
                    style={{ background: "var(--gradient-underline)" }}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        to={`/glossario/o-que-e-${r.slug}`}
                        className="group rounded-md border border-border/70 bg-card p-4 hover:border-primary/40 hover:shadow-[var(--shadow-md)] transition-all"
                      >
                        <div className="text-[11px] uppercase tracking-[0.12em] font-semibold text-muted-foreground mb-1">
                          {r.category}
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[14px] font-semibold text-foreground group-hover:text-primary transition-colors">
                            {r.term}
                          </span>
                          <ArrowUpRight
                            className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors"
                            strokeWidth={2}
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GlossarioVerbete;

// Export for prerender helpers
export const allGlossarySlugs = glossary.map((t) => t.slug);
