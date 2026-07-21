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
import MaterialEscolar5Ano from "./pages/MaterialEscolar5Ano";
import MaterialEscolar6Ano from "./pages/MaterialEscolar6Ano";
import MaterialEscolar7Ano from "./pages/MaterialEscolar7Ano";
import MaterialEscolar8Ano from "./pages/MaterialEscolar8Ano";
import MaterialEscolar9Ano from "./pages/MaterialEscolar9Ano";
import MaterialEscolarEnsinoMedio from "./pages/MaterialEscolarEnsinoMedio";
import CasaNova from "./pages/CasaNova";
import CasaNovaCompleta from "./pages/CasaNovaCompleta";
import CasaNovaCozinha from "./pages/CasaNovaCozinha";
import CasaNovaQuarto from "./pages/CasaNovaQuarto";
import CasaNovaSala from "./pages/CasaNovaSala";
import CasaNovaBanheiro from "./pages/CasaNovaBanheiro";
import CasaNovaLimpeza from "./pages/CasaNovaLimpeza";
import CasaNovaAreaServico from "./pages/CasaNovaAreaServico";
import CasaNovaEconomica from "./pages/CasaNovaEconomica";
import Casamento from "./pages/Casamento";
import CasamentoCompleto from "./pages/CasamentoCompleto";
import CasamentoTradicional from "./pages/CasamentoTradicional";
import Casamento12MesesAntes from "./pages/Casamento12MesesAntes";
import Casamento6MesesAntes from "./pages/Casamento6MesesAntes";
import Casamento3MesesAntes from "./pages/Casamento3MesesAntes";
import CasamentoFornecedores from "./pages/CasamentoFornecedores";
import CasamentoConvidados from "./pages/CasamentoConvidados";
import ChecklistLuaDeMel from "./pages/ChecklistLuaDeMel";
import Blog from "./pages/Blog";
import DicasEconomizarSupermercado from "./pages/blog/DicasEconomizarSupermercado";
import CasaInteligente2026 from "./pages/blog/CasaInteligente2026";
import EnergiaSolarResidencial2026 from "./pages/blog/EnergiaSolarResidencial2026";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade";
import PoliticaDeCookies from "./pages/PoliticaDeCookies";
import TermosDeUso from "./pages/TermosDeUso";
import ComoUsar from "./pages/ComoUsar";
import BaixarPDF from "./pages/BaixarPDF";
import ImprimirListas from "./pages/ImprimirListas";
import Contato from "./pages/Contato";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";
import CriarLista from "./pages/CriarLista";
import Glossario from "./pages/Glossario";
import GlossarioVerbete from "./pages/GlossarioVerbete";

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
          <Route path="/criar-lista" element={<CriarLista />} />
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
          <Route path="/lista-de-material-escolar-5-ano" element={<MaterialEscolar5Ano />} />
          <Route path="/lista-de-material-escolar-6-ano" element={<MaterialEscolar6Ano />} />
          <Route path="/lista-de-material-escolar-7-ano" element={<MaterialEscolar7Ano />} />
          <Route path="/lista-de-material-escolar-8-ano" element={<MaterialEscolar8Ano />} />
          <Route path="/lista-de-material-escolar-9-ano" element={<MaterialEscolar9Ano />} />
          <Route path="/lista-de-material-escolar-ensino-medio" element={<MaterialEscolarEnsinoMedio />} />
          <Route path="/lista-de-casa-nova" element={<CasaNova />} />
          <Route path="/lista-de-casa-nova-completa" element={<CasaNovaCompleta />} />
          <Route path="/lista-de-casa-nova-cozinha" element={<CasaNovaCozinha />} />
          <Route path="/lista-de-casa-nova-quarto" element={<CasaNovaQuarto />} />
          <Route path="/lista-de-casa-nova-sala" element={<CasaNovaSala />} />
          <Route path="/lista-de-casa-nova-banheiro" element={<CasaNovaBanheiro />} />
          <Route path="/lista-de-casa-nova-limpeza" element={<CasaNovaLimpeza />} />
          <Route path="/lista-de-casa-nova-area-de-servico" element={<CasaNovaAreaServico />} />
          <Route path="/lista-de-casa-nova-economica" element={<CasaNovaEconomica />} />
          <Route path="/lista-de-casamento" element={<Casamento />} />
          <Route path="/checklist-de-casamento-completo" element={<CasamentoCompleto />} />
          <Route path="/lista-de-casamento-tradicional" element={<CasamentoTradicional />} />
          <Route path="/lista-de-casamento-12-meses-antes" element={<Casamento12MesesAntes />} />
          <Route path="/lista-de-casamento-6-meses-antes" element={<Casamento6MesesAntes />} />
          <Route path="/lista-de-casamento-3-meses-antes" element={<Casamento3MesesAntes />} />
          <Route path="/lista-de-fornecedores-casamento" element={<CasamentoFornecedores />} />
          <Route path="/lista-de-convidados-casamento" element={<CasamentoConvidados />} />
          <Route path="/checklist-lua-de-mel" element={<ChecklistLuaDeMel />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/dicas-economizar-supermercado" element={<DicasEconomizarSupermercado />} />
          <Route path="/blog/casa-inteligente-guia-2026" element={<CasaInteligente2026 />} />
          <Route path="/blog/energia-solar-residencial-2026" element={<EnergiaSolarResidencial2026 />} />
          <Route path="/como-usar" element={<ComoUsar />} />
          <Route path="/baixar-em-pdf" element={<BaixarPDF />} />
          <Route path="/imprimir-listas" element={<ImprimirListas />} />
          <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
          <Route path="/politica-de-cookies" element={<PoliticaDeCookies />} />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/glossario" element={<Glossario />} />
          <Route path="/glossario/o-que-e-:slug" element={<GlossarioVerbete />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
