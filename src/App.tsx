import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import ListaDeCompras from "./pages/ListaDeCompras";
import ListaDeComprasCompleta from "./pages/ListaDeComprasCompleta";
import ListaSupermercado from "./pages/ListaSupermercado";
import ListaDuasPessoas from "./pages/ListaDuasPessoas";
import ListaMensal from "./pages/ListaMensal";
import ListaSolteiro from "./pages/ListaSolteiro";
import ListaSaudavel from "./pages/ListaSaudavel";
import MaterialEscolar from "./pages/MaterialEscolar";
import MaterialEscolar2026 from "./pages/MaterialEscolar2026";
import MaterialEscolarEducacaoInfantil from "./pages/MaterialEscolarEducacaoInfantil";
import MaterialEscolar1Ano from "./pages/MaterialEscolar1Ano";
import MaterialEscolar2Ano from "./pages/MaterialEscolar2Ano";
import MaterialEscolar3Ano from "./pages/MaterialEscolar3Ano";
import MaterialEscolar4Ano from "./pages/MaterialEscolar4Ano";
import CasaNova from "./pages/CasaNova";
import Casamento from "./pages/Casamento";
import Blog from "./pages/Blog";
import DicasEconomizarSupermercado from "./pages/blog/DicasEconomizarSupermercado";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade";
import PoliticaDeCookies from "./pages/PoliticaDeCookies";
import TermosDeUso from "./pages/TermosDeUso";
import ComoUsar from "./pages/ComoUsar";
import BaixarPDF from "./pages/BaixarPDF";
import ImprimirListas from "./pages/ImprimirListas";
import Contato from "./pages/Contato";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lista-de-compras" element={<ListaDeCompras />} />
          <Route path="/lista-de-compras-completa" element={<ListaDeComprasCompleta />} />
          <Route path="/lista-supermercado" element={<ListaSupermercado />} />
          <Route path="/lista-duas-pessoas" element={<ListaDuasPessoas />} />
          <Route path="/lista-mensal" element={<ListaMensal />} />
          <Route path="/lista-solteiro" element={<ListaSolteiro />} />
          <Route path="/lista-saudavel" element={<ListaSaudavel />} />
          <Route path="/lista-de-material-escolar" element={<MaterialEscolar />} />
          <Route path="/lista-de-material-escolar-2026" element={<MaterialEscolar2026 />} />
          <Route path="/lista-de-material-escolar-educacao-infantil" element={<MaterialEscolarEducacaoInfantil />} />
          <Route path="/lista-de-material-escolar-1-ano" element={<MaterialEscolar1Ano />} />
          <Route path="/lista-de-material-escolar-2-ano" element={<MaterialEscolar2Ano />} />
          <Route path="/lista-de-material-escolar-3-ano" element={<MaterialEscolar3Ano />} />
          <Route path="/lista-de-material-escolar-4-ano" element={<MaterialEscolar4Ano />} />
          <Route path="/lista-de-casa-nova" element={<CasaNova />} />
          <Route path="/lista-de-casamento" element={<Casamento />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/dicas-economizar-supermercado" element={<DicasEconomizarSupermercado />} />
          <Route path="/como-usar" element={<ComoUsar />} />
          <Route path="/baixar-em-pdf" element={<BaixarPDF />} />
          <Route path="/imprimir-listas" element={<ImprimirListas />} />
          <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
          <Route path="/politica-de-cookies" element={<PoliticaDeCookies />} />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
