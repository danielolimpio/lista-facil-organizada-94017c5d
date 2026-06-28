import { useState } from "react";
import { Home, Download, Printer, Check, LucideIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export interface CasaNovaCategory {
  name: string;
  items: string[];
}

interface Props {
  icon?: LucideIcon;
  title: string;
  subtitle: string;
  seoTitle: string;
  seoDescription: string;
  path: string;
  tip?: string;
  categories: CasaNovaCategory[];
}

const CasaNovaListPage = ({
  icon: Icon = Home,
  title,
  subtitle,
  seoTitle,
  seoDescription,
  path,
  tip,
  categories,
}: Props) => {
  const initial = categories.map((c) => ({
    name: c.name,
    items: c.items.map((n, i) => ({ id: `${c.name}-${i}`, name: n, checked: false })),
  }));
  const [data, setData] = useState(initial);
  const [search, setSearch] = useState("");

  const toggle = (ci: number, id: string) => {
    setData((prev) =>
      prev.map((c, i) =>
        i === ci
          ? { ...c, items: c.items.map((it) => (it.id === id ? { ...it, checked: !it.checked } : it)) }
          : c
      )
    );
  };

  const total = data.reduce((a, c) => a + c.items.length, 0);
  const done = data.reduce((a, c) => a + c.items.filter((i) => i.checked).length, 0);

  const filtered = data.map((c) => ({
    ...c,
    items: c.items.filter((i) => i.name.toLowerCase().includes(search.toLowerCase())),
  }));

  return (
    <div className="min-h-screen bg-background">
      <SEO title={seoTitle} description={seoDescription} path={path} />
      <Navbar />
      <Breadcrumbs />

      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10 animate-fade-in">
            <div className="icon-premium w-16 h-16 mb-6 mx-auto">
              <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>
            <h1 className="title-underline text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
              {subtitle}
            </p>

            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-border/70 bg-secondary/40">
                <Check className="w-4 h-4 text-primary" strokeWidth={2} />
                <span className="text-sm font-semibold text-foreground tabular-nums">
                  {done} / {total} itens
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Button onClick={() => window.print()} size="lg" className="rounded-sm">
                <Printer className="w-4 h-4 mr-2" strokeWidth={1.75} />
                Imprimir
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-sm border-border/70"
                onClick={() => alert("Funcionalidade de download em PDF será implementada em breve!")}
              >
                <Download className="w-4 h-4 mr-2" strokeWidth={1.75} />
                Baixar PDF
              </Button>
            </div>

            <div className="max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Buscar item..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="rounded-sm border-border/70"
              />
            </div>
          </div>

          {tip && (
            <Card className="p-6 mb-8 border-primary/20 bg-gradient-card">
              <h2 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                <span className="icon-premium w-7 h-7"><span className="text-primary text-sm">💡</span></span>
                Dica de uso
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{tip}</p>
            </Card>
          )}

          <div className="space-y-6 print:space-y-4">
            {filtered.map((cat, ci) => {
              if (cat.items.length === 0) return null;
              return (
                <Card key={cat.name} className="p-6 print:break-inside-avoid">
                  <h2 className="text-xl font-bold text-foreground mb-4 pb-3 border-b border-border/60 tracking-tight">
                    {cat.name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {cat.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/50 transition-colors"
                      >
                        <Checkbox
                          id={item.id}
                          checked={item.checked}
                          onCheckedChange={() => toggle(ci, item.id)}
                          className="print:hidden"
                        />
                        <label
                          htmlFor={item.id}
                          className={`flex-1 cursor-pointer text-base ${
                            item.checked ? "line-through text-muted-foreground" : "text-foreground"
                          }`}
                        >
                          {item.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @media print {
          nav, footer, button, input { display: none !important; }
          .print\\:break-inside-avoid { break-inside: avoid; }
        }
      `}</style>
    </div>
  );
};

export default CasaNovaListPage;
