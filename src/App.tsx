import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ListaDeCompras from "./pages/ListaDeCompras";
import MaterialEscolar from "./pages/MaterialEscolar";
import CasaNova from "./pages/CasaNova";
import Casamento from "./pages/Casamento";
import Blog from "./pages/Blog";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lista-de-compras" element={<ListaDeCompras />} />
          <Route path="/lista-de-material-escolar" element={<MaterialEscolar />} />
          <Route path="/lista-de-casa-nova" element={<CasaNova />} />
          <Route path="/lista-de-casamento" element={<Casamento />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
          <Route path="/contato" element={<Contato />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
