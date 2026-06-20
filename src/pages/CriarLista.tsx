import { useState, useRef } from "react";
import { Plus, Trash2, Download, FileText, Printer, FileType, Image as ImageIcon, GripVertical } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

interface Item {
  id: string;
  text: string;
  checked: boolean;
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "minha-lista";

const CriarLista = () => {
  const [title, setTitle] = useState("Minha Lista");
  const [items, setItems] = useState<Item[]>([
    { id: crypto.randomUUID(), text: "", checked: false },
  ]);
  const [newItem, setNewItem] = useState("");
  const printableRef = useRef<HTMLDivElement>(null);

  const addItem = (text?: string) => {
    const value = (text ?? newItem).trim();
    if (!value) return;
    setItems((prev) => [...prev, { id: crypto.randomUUID(), text: value, checked: false }]);
    setNewItem("");
  };

  const updateItem = (id: string, text: string) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, text } : it)));
  };

  const toggleItem = (id: string) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, checked: !it.checked } : it)));
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const clearAll = () => {
    setItems([{ id: crypto.randomUUID(), text: "", checked: false }]);
    toast({ title: "Lista limpa", description: "Todos os itens foram removidos." });
  };

  const cleanItems = () => items.map((it) => it.text.trim()).filter(Boolean);

  const downloadBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportTxt = () => {
    const list = cleanItems();
    if (!list.length) return toast({ title: "Adicione itens à lista antes de baixar." });
    const content = `${title}\n${"=".repeat(title.length)}\n\n` + list.map((t) => `[ ] ${t}`).join("\n");
    downloadBlob(new Blob([content], { type: "text/plain;charset=utf-8" }), `${slugify(title)}.txt`);
    toast({ title: "Arquivo TXT baixado!" });
  };

  const exportWord = () => {
    const list = cleanItems();
    if (!list.length) return toast({ title: "Adicione itens à lista antes de baixar." });
    const html = `<!DOCTYPE html><html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>${title}</title></head><body style="font-family: Arial, sans-serif; padding: 24px;"><h1 style="color:#0D9488;">${title}</h1><ul style="font-size:14pt; line-height:1.8;">${list
      .map((t) => `<li>☐ ${t.replace(/</g, "&lt;")}</li>`)
      .join("")}</ul><p style="margin-top:32px;color:#888;font-size:10pt;">Criado em helplistas.com.br</p></body></html>`;
    downloadBlob(new Blob(["\ufeff", html], { type: "application/msword" }), `${slugify(title)}.doc`);
    toast({ title: "Arquivo Word baixado!" });
  };

  const exportPdf = () => {
    const list = cleanItems();
    if (!list.length) return toast({ title: "Adicione itens à lista antes de baixar." });
    const w = window.open("", "_blank");
    if (!w) return toast({ title: "Permita pop-ups para gerar o PDF." });
    w.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${title}</title><style>
      body { font-family: Arial, sans-serif; padding: 40px; color: #1F2937; }
      h1 { color: #0D9488; border-bottom: 2px solid #0D9488; padding-bottom: 8px; }
      ul { list-style: none; padding: 0; font-size: 14pt; line-height: 2; }
      li { padding: 4px 0; border-bottom: 1px dashed #e5e7eb; }
      .box { display:inline-block; width:14px; height:14px; border:2px solid #0D9488; margin-right:10px; vertical-align:middle; border-radius:3px; }
      footer { margin-top: 40px; color: #888; font-size: 10pt; text-align:center; }
    </style></head><body><h1>${title}</h1><ul>${list
      .map((t) => `<li><span class="box"></span>${t.replace(/</g, "&lt;")}</li>`)
      .join("")}</ul><footer>helplistas.com.br</footer><script>window.onload=()=>{window.print();}</script></body></html>`);
    w.document.close();
    toast({ title: "Selecione 'Salvar como PDF' na janela de impressão." });
  };

  const printList = () => {
    window.print();
  };

  return (
    <>
      <SEO
        title="Criar Lista Personalizada | Help Listas"
        description="Crie sua lista personalizada online de graça. Edite, adicione itens e baixe em Word, TXT, PDF ou imprima diretamente."
        canonical="https://helplistas.com.br/criar-lista"
      />
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #printable, #printable * { visibility: visible; }
          #printable { position: absolute; left: 0; top: 0; width: 100%; padding: 20px; }
          .no-print { display: none !important; }
        }
      `}</style>
      <div className="min-h-screen flex flex-col bg-secondary/30">
        <Navbar />
        <main className="flex-1 pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8 no-print">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Criar Minha Lista Personalizada
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Monte sua lista do jeito que quiser e baixe em Word, TXT, PDF ou imprima.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-border p-6 md:p-8" id="printable" ref={printableRef}>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-2xl md:text-3xl font-bold border-0 border-b-2 border-primary/30 rounded-none px-0 mb-6 focus-visible:ring-0 focus-visible:border-primary h-auto py-2"
                placeholder="Título da sua lista"
              />

              <div className="space-y-2 mb-6">
                {items.map((item, idx) => (
                  <div key={item.id} className="flex items-center gap-2 group">
                    <GripVertical className="w-4 h-4 text-muted-foreground/40 no-print" />
                    <Checkbox
                      checked={item.checked}
                      onCheckedChange={() => toggleItem(item.id)}
                      className="border-primary"
                    />
                    <Input
                      value={item.text}
                      onChange={(e) => updateItem(item.id, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          if (idx === items.length - 1) {
                            setItems((prev) => [...prev, { id: crypto.randomUUID(), text: "", checked: false }]);
                          }
                        }
                      }}
                      placeholder={`Item ${idx + 1}`}
                      className={`flex-1 border-0 border-b border-border rounded-none px-1 focus-visible:ring-0 focus-visible:border-primary ${
                        item.checked ? "line-through text-muted-foreground" : ""
                      }`}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="no-print opacity-0 group-hover:opacity-100 transition h-8 w-8 text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 no-print">
                <Input
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addItem())}
                  placeholder="Adicionar novo item..."
                  className="flex-1"
                />
                <Button onClick={() => addItem()} className="bg-primary hover:bg-primary/90">
                  <Plus className="w-4 h-4 mr-1" /> Adicionar
                </Button>
              </div>
            </div>

            <div className="mt-6 no-print">
              <h2 className="text-lg font-semibold mb-3 text-foreground">Baixar ou Imprimir</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Button onClick={exportWord} variant="outline" className="h-auto py-4 flex-col gap-2">
                  <FileType className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Word (.doc)</span>
                </Button>
                <Button onClick={exportTxt} variant="outline" className="h-auto py-4 flex-col gap-2">
                  <FileText className="w-5 h-5 text-gray-600" />
                  <span className="text-sm">Bloco de Notas</span>
                </Button>
                <Button onClick={exportPdf} variant="outline" className="h-auto py-4 flex-col gap-2">
                  <Download className="w-5 h-5 text-red-600" />
                  <span className="text-sm">PDF</span>
                </Button>
                <Button onClick={printList} variant="outline" className="h-auto py-4 flex-col gap-2">
                  <Printer className="w-5 h-5 text-primary" />
                  <span className="text-sm">Imprimir</span>
                </Button>
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="ghost" onClick={clearAll} className="text-destructive hover:text-destructive">
                  <Trash2 className="w-4 h-4 mr-1" /> Limpar lista
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CriarLista;
