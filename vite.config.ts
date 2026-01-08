import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// Plugin para gerar site 100% estático (SSG)
function staticSitePlugin(): Plugin {
  return {
    name: "static-site-generator",
    apply: "build",
    closeBundle() {
      const distPath = path.resolve(__dirname, "dist");
      
      // Lista de todas as rotas do site
      const routes = [
        { path: "/", title: "Helplistas - Listas Prontas Gratuitas: Compras, Material Escolar, Casa Nova e Casamento", description: "Baixe listas gratuitas e organizadas: lista de compras completa, material escolar 2026, checklist para casa nova e casamento. Tudo pronto para você imprimir!" },
        { path: "/lista-de-compras/", title: "Lista de Compras Completa 2026 - Supermercado | Helplistas", description: "Lista de compras completa para supermercado. Organize suas compras mensais com nossa lista gratuita e prática." },
        { path: "/lista-de-compras-completa/", title: "Lista de Compras Completa com Todos os Itens | Helplistas", description: "A lista de compras mais completa da internet. Todos os itens essenciais para sua casa organizados por categoria." },
        { path: "/lista-supermercado/", title: "Lista de Supermercado Básica 2026 | Helplistas", description: "Lista de supermercado com itens básicos e essenciais. Perfeita para compras rápidas e econômicas." },
        { path: "/lista-duas-pessoas/", title: "Lista de Compras para 2 Pessoas - Casal | Helplistas", description: "Lista de compras otimizada para casais. Quantidades certas para duas pessoas sem desperdício." },
        { path: "/lista-mensal/", title: "Lista de Compras Mensal Completa 2026 | Helplistas", description: "Planeje suas compras do mês inteiro com nossa lista mensal completa e organizada." },
        { path: "/lista-solteiro/", title: "Lista de Compras para Solteiro - Econômica | Helplistas", description: "Lista de compras prática e econômica para quem mora sozinho. Evite desperdícios." },
        { path: "/lista-saudavel/", title: "Lista de Compras Saudável - Alimentos Nutritivos | Helplistas", description: "Lista de compras focada em alimentação saudável. Frutas, verduras, proteínas e grãos." },
        { path: "/lista-de-material-escolar/", title: "Lista de Material Escolar 2026 Completa | Helplistas", description: "Lista de material escolar 2026 por série. Da educação infantil ao ensino médio." },
        { path: "/lista-de-material-escolar-2026/", title: "Lista de Material Escolar 2026 - Ano Letivo | Helplistas", description: "Lista atualizada de material escolar para 2026. Todos os itens necessários para o ano letivo." },
        { path: "/lista-de-material-escolar-educacao-infantil/", title: "Lista Material Escolar Educação Infantil 2026 | Helplistas", description: "Lista de material escolar para educação infantil. Itens adequados para crianças pequenas." },
        { path: "/lista-de-material-escolar-1-ano/", title: "Lista Material Escolar 1º Ano 2026 | Helplistas", description: "Lista completa de material escolar para o 1º ano do ensino fundamental." },
        { path: "/lista-de-material-escolar-2-ano/", title: "Lista Material Escolar 2º Ano 2026 | Helplistas", description: "Lista completa de material escolar para o 2º ano do ensino fundamental." },
        { path: "/lista-de-material-escolar-3-ano/", title: "Lista Material Escolar 3º Ano 2026 | Helplistas", description: "Lista completa de material escolar para o 3º ano do ensino fundamental." },
        { path: "/lista-de-material-escolar-4-ano/", title: "Lista Material Escolar 4º Ano 2026 | Helplistas", description: "Lista completa de material escolar para o 4º ano do ensino fundamental." },
        { path: "/lista-de-material-escolar-5-ano/", title: "Lista Material Escolar 5º Ano 2026 | Helplistas", description: "Lista completa de material escolar para o 5º ano do ensino fundamental." },
        { path: "/lista-de-material-escolar-6-ano/", title: "Lista Material Escolar 6º Ano 2026 | Helplistas", description: "Lista completa de material escolar para o 6º ano do ensino fundamental." },
        { path: "/lista-de-material-escolar-7-ano/", title: "Lista Material Escolar 7º Ano 2026 | Helplistas", description: "Lista completa de material escolar para o 7º ano do ensino fundamental." },
        { path: "/lista-de-material-escolar-8-ano/", title: "Lista Material Escolar 8º Ano 2026 | Helplistas", description: "Lista completa de material escolar para o 8º ano do ensino fundamental." },
        { path: "/lista-de-material-escolar-9-ano/", title: "Lista Material Escolar 9º Ano 2026 | Helplistas", description: "Lista completa de material escolar para o 9º ano do ensino fundamental." },
        { path: "/lista-de-material-escolar-ensino-medio/", title: "Lista Material Escolar Ensino Médio 2026 | Helplistas", description: "Lista completa de material escolar para o ensino médio. 1ª, 2ª e 3ª série." },
        { path: "/lista-de-casa-nova/", title: "Lista de Casa Nova 2026 - Checklist Completo | Helplistas", description: "Checklist completo para montar sua casa nova. Móveis, eletrodomésticos, utensílios e decoração." },
        { path: "/lista-de-casamento/", title: "Lista de Casamento 2026 - Checklist Noivos | Helplistas", description: "Checklist completo para casamento. Do noivado à lua de mel, organize tudo." },
        { path: "/blog/", title: "Blog - Dicas de Organização e Economia | Helplistas", description: "Dicas práticas para organizar sua vida, economizar nas compras e planejar melhor." },
        { path: "/blog/dicas-economizar-supermercado/", title: "10 Dicas para Economizar no Supermercado em 2026 | Helplistas", description: "Descubra 10 dicas práticas e comprovadas para economizar no supermercado em 2026." },
        { path: "/como-usar/", title: "Como Usar Nossas Listas | Helplistas", description: "Aprenda a usar nossas listas de forma prática. Baixe, imprima ou use online." },
        { path: "/baixar-em-pdf/", title: "Baixar Listas em PDF Grátis | Helplistas", description: "Baixe todas as nossas listas em formato PDF gratuitamente." },
        { path: "/imprimir-listas/", title: "Imprimir Listas Prontas | Helplistas", description: "Imprima nossas listas diretamente do navegador. Fácil e rápido." },
        { path: "/contato/", title: "Contato | Helplistas", description: "Entre em contato conosco. Estamos prontos para ajudar." },
        { path: "/sitemap/", title: "Mapa do Site | Helplistas", description: "Navegue por todas as páginas do Helplistas." },
        { path: "/politica-de-privacidade/", title: "Política de Privacidade | Helplistas", description: "Saiba como tratamos seus dados pessoais." },
        { path: "/politica-de-cookies/", title: "Política de Cookies | Helplistas", description: "Entenda como usamos cookies em nosso site." },
        { path: "/termos-de-uso/", title: "Termos de Uso | Helplistas", description: "Leia nossos termos e condições de uso." },
      ];

      // Ler o index.html gerado pelo Vite
      const mainIndexPath = path.join(distPath, "index.html");
      const mainIndexContent = fs.readFileSync(mainIndexPath, "utf-8");

      // Criar diretórios e arquivos index.html para cada rota
      routes.forEach((route) => {
        if (route.path === "/") return; // Pular a raiz, já existe

        const routePath = route.path.replace(/^\/|\/$/g, ""); // Remover barras
        const dirPath = path.join(distPath, routePath);

        // Criar diretório se não existir
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }

        // Gerar HTML com metadados específicos da página
        let pageHtml = mainIndexContent
          .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
          .replace(
            /<meta name="description" content=".*?".*?\/>/,
            `<meta name="description" content="${route.description}" />`
          )
          .replace(
            /<link rel="canonical" href=".*?".*?\/>/,
            `<link rel="canonical" href="https://helplistas.com.br${route.path}" />`
          )
          .replace(
            /<meta property="og:url" content=".*?".*?\/>/,
            `<meta property="og:url" content="https://helplistas.com.br${route.path}" />`
          )
          .replace(
            /<meta property="og:title" content=".*?".*?\/>/,
            `<meta property="og:title" content="${route.title}" />`
          )
          .replace(
            /<meta property="og:description" content=".*?".*?\/>/,
            `<meta property="og:description" content="${route.description}" />`
          )
          .replace(
            /<meta name="twitter:url" content=".*?".*?\/>/,
            `<meta name="twitter:url" content="https://helplistas.com.br${route.path}" />`
          )
          .replace(
            /<meta name="twitter:title" content=".*?".*?\/>/,
            `<meta name="twitter:title" content="${route.title}" />`
          )
          .replace(
            /<meta name="twitter:description" content=".*?".*?\/>/,
            `<meta name="twitter:description" content="${route.description}" />`
          );

        // Escrever arquivo index.html no diretório
        fs.writeFileSync(path.join(dirPath, "index.html"), pageHtml);
      });

      console.log(`✅ Site estático gerado com ${routes.length} páginas`);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    staticSitePlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
