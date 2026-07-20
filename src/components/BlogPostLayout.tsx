import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, BookOpen, HelpCircle, ChevronRight, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQ {
  q: string;
  a: string;
}
export interface RelatedPost {
  title: string;
  path: string;
  category: string;
}

interface Props {
  title: string;
  metaTitle: string;
  description: string;
  path: string;
  category: string;
  date: string; // display
  dateISO: string;
  readingTime: string;
  coverImage: string;
  coverAlt: string;
  midImage?: string;
  midAlt?: string;
  faqs: FAQ[];
  related: RelatedPost[];
  children: ReactNode;
}

const BlogPostLayout = ({
  title, metaTitle, description, path, category, date, dateISO,
  readingTime, coverImage, coverAlt, midImage, midAlt,
  faqs, related, children,
}: Props) => {
  const url = `https://helplistas.com.br${path}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: coverImage.startsWith("http") ? coverImage : `https://helplistas.com.br${coverImage}`,
    datePublished: dateISO,
    dateModified: dateISO,
    author: { "@type": "Organization", name: "Helplistas" },
    publisher: {
      "@type": "Organization",
      name: "Help Listas",
      url: "https://helplistas.com.br",
      logo: { "@type": "ImageObject", url: "https://helplistas.com.br/og-image.jpg" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: category,
    inLanguage: "pt-BR",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // Insert mid image after roughly half of children
  const kids = Array.isArray(children) ? children : [children];
  const mid = Math.floor(kids.length / 2);
  const before = kids.slice(0, mid);
  const after = kids.slice(mid);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={coverImage.startsWith("http") ? coverImage : `https://helplistas.com.br${coverImage}`} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />
      <Breadcrumbs />

      <main className="flex-1">
        <article className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <header className="max-w-4xl mx-auto mb-10 animate-fade-in">
              <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
                <ArrowLeft className="w-4 h-4" /> Voltar para o Blog
              </Link>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full font-medium text-sm">{category}</span>
                <span className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" /> {date}
                </span>
                <span className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" /> {readingTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">{title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{description}</p>
            </header>

            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={coverImage}
                  alt={coverAlt}
                  width={1536}
                  height={864}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 max-w-6xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {before}

                {midImage && (
                  <div className="my-10 rounded-2xl overflow-hidden shadow-elegant">
                    <img
                      src={midImage}
                      alt={midAlt || coverAlt}
                      width={1536}
                      height={864}
                      loading="lazy"
                      className="w-full h-auto object-cover aspect-video"
                    />
                  </div>
                )}

                {after}

                {/* FAQ */}
                <section className="mt-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <HelpCircle className="w-8 h-8 text-primary" />
                    Perguntas Frequentes (FAQ)
                  </h2>
                  <Card>
                    <CardContent className="p-2 md:p-4">
                      <Accordion type="single" collapsible className="w-full">
                        {faqs.map((f, i) => (
                          <AccordionItem key={i} value={`faq-${i}`}>
                            <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                              {f.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                              {f.a}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </section>

                {/* Autor */}
                <section className="mt-12">
                  <Card className="bg-muted/30">
                    <CardContent className="p-6 flex flex-col sm:flex-row items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <User className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Escrito pela</p>
                        <p className="text-lg font-bold text-foreground mb-2">Equipe Help Listas</p>
                        <p className="text-muted-foreground leading-relaxed">
                          Time editorial especializado em organização, planejamento doméstico e guias de compra. Conteúdo revisado e atualizado para 2026.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Recomendados */}
                <section className="mt-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <BookOpen className="w-8 h-8 text-primary" />
                    Artigos Recomendados
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {related.map((r) => (
                      <Link key={r.path} to={r.path} className="block group">
                        <Card className="h-full hover:shadow-lg hover:border-primary/40 transition-all">
                          <CardContent className="p-5">
                            <span className="text-xs font-semibold text-primary uppercase tracking-wide">{r.category}</span>
                            <h3 className="font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors leading-snug">
                              {r.title}
                            </h3>
                            <span className="inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                              Ler artigo <ChevronRight className="w-4 h-4" />
                            </span>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-6">
                  <Card>
                    <CardContent className="p-5">
                      <h3 className="font-bold text-foreground mb-3">Listas em destaque</h3>
                      <ul className="space-y-2 text-sm">
                        <li><Link to="/lista-de-casa-nova-completa" className="text-muted-foreground hover:text-primary">Casa Nova Completa</Link></li>
                        <li><Link to="/lista-de-compras-completa" className="text-muted-foreground hover:text-primary">Lista de Compras Completa</Link></li>
                        <li><Link to="/lista-de-material-escolar-2026" className="text-muted-foreground hover:text-primary">Material Escolar 2026</Link></li>
                        <li><Link to="/checklist-de-casamento-completo" className="text-muted-foreground hover:text-primary">Casamento Completo</Link></li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-5">
                      <h3 className="font-bold mb-2">Crie sua lista</h3>
                      <p className="text-sm text-primary-foreground/90 mb-4">
                        Monte uma lista personalizada e baixe em PDF, Word ou imprima.
                      </p>
                      <Link to="/criar-lista" className="inline-flex items-center gap-1 bg-white text-primary font-semibold px-4 py-2 rounded-md text-sm hover:bg-white/90 transition-colors">
                        Começar agora <ChevronRight className="w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostLayout;
