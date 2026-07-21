import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlossarySidebar from "@/components/GlossarySidebar";
import { alphabet, groupByLetter, glossary } from "@/data/glossario";
import { BookOpen, ArrowUpRight, Sparkles } from "lucide-react";

const SITE = "https://helplistas.com.br";

const Glossario = () => {
  const groups = groupByLetter();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Glossário Help Listas – Organização e Listas Práticas",
    description:
      "Glossário completo de termos sobre organização, listas de compras, casa nova, casamento e material escolar.",
    url: `${SITE}/glossario`,
    hasDefinedTerm: glossary.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${SITE}/glossario/o-que-e-${t.slug}`,
      name: t.term,
      description: t.definition,
      inDefinedTermSet: `${SITE}/glossario`,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Glossário Help Listas – Termos de Organização e Listas</title>
        <meta
          name="description"
          content="Glossário A–Z com definições claras sobre listas de compras, casa nova, casamento, material escolar e produtividade. Encontre o que significa cada termo."
        />
        <link rel="canonical" href={`${SITE}/glossario`} />
        <meta property="og:title" content="Glossário Help Listas – Termos de Organização" />
        <meta
          property="og:description"
          content="Definições A–Z sobre listas, checklists e organização pessoal."
        />
        <meta property="og:url" content={`${SITE}/glossario`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <header className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-3 h-3 text-primary" strokeWidth={2} />
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-primary">
                Glossário Help Listas
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-3">
              Dicionário de organização, compras e checklists
            </h1>
            <div
              className="h-px w-40 mb-5"
              style={{ background: "var(--gradient-underline)" }}
            />
            <p className="text-foreground/70 text-[15px] leading-relaxed">
              Encontre definições diretas e práticas sobre listas de compras, casa nova,
              casamento e material escolar. Cada verbete traz exemplos reais e um caminho
              para a lista pronta que resolve sua necessidade.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            <GlossarySidebar />

            {/* Content */}
            <div className="space-y-10">
              {alphabet.map((letter) => {
                const terms = groups[letter];
                if (!terms) return null;
                return (
                  <section key={letter} id={`letra-${letter}`} className="scroll-mt-28">
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-2xl font-bold text-primary tabular-nums">
                        {letter}
                      </span>
                      <div
                        className="flex-1 h-px"
                        style={{ background: "var(--gradient-underline)" }}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {terms.map((t) => (
                        <Link
                          key={t.slug}
                          to={`/glossario/o-que-e-${t.slug}`}
                          className="group relative flex flex-col rounded-md border border-border/70 bg-card hover:border-primary/40 hover:shadow-[var(--shadow-lg)] transition-all p-4"
                        >
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <div className="flex items-center gap-2">
                              <span className="icon-premium w-7 h-7 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <BookOpen className="w-3.5 h-3.5 text-primary" strokeWidth={1.75} />
                              </span>
                              <h2 className="text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors">
                                {t.term}
                              </h2>
                            </div>
                            <ArrowUpRight
                              className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1.5"
                              strokeWidth={2}
                            />
                          </div>
                          <p className="text-[13px] text-foreground/70 leading-relaxed line-clamp-3">
                            {t.definition}
                          </p>
                          <div className="mt-3 pt-3 border-t border-border/60">
                            <span className="text-[11px] uppercase tracking-[0.12em] font-semibold text-muted-foreground">
                              {t.category}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Glossario;
