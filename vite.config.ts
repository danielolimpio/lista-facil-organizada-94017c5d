import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// Plugin customizado para substituir o index.html do SPA pelo estático
function staticIndexPlugin(): Plugin {
  return {
    name: 'static-index-plugin',
    closeBundle() {
      // Após o build, substituir o index.html gerado pelo Vite pelo index.html estático
      const staticIndexPath = path.resolve(__dirname, 'public/index.html');
      const distIndexPath = path.resolve(__dirname, 'dist/index.html');
      
      if (fs.existsSync(staticIndexPath)) {
        const staticContent = fs.readFileSync(staticIndexPath, 'utf-8');
        fs.writeFileSync(distIndexPath, staticContent);
        console.log('✓ index.html estático copiado para dist/');
      }
    }
  };
}

// Plugin para copiar todas as pastas estáticas do public para dist
function copyStaticFoldersPlugin(): Plugin {
  return {
    name: 'copy-static-folders-plugin',
    closeBundle() {
      const publicDir = path.resolve(__dirname, 'public');
      const distDir = path.resolve(__dirname, 'dist');
      
      // Função recursiva para copiar diretórios
      function copyDir(src: string, dest: string) {
        if (!fs.existsSync(dest)) {
          fs.mkdirSync(dest, { recursive: true });
        }
        
        const entries = fs.readdirSync(src, { withFileTypes: true });
        
        for (const entry of entries) {
          const srcPath = path.join(src, entry.name);
          const destPath = path.join(dest, entry.name);
          
          if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
        }
      }
      
      // Listar todas as pastas em public que são páginas estáticas
      const staticFolders = fs.readdirSync(publicDir, { withFileTypes: true })
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name);
      
      for (const folder of staticFolders) {
        const srcFolder = path.join(publicDir, folder);
        const destFolder = path.join(distDir, folder);
        
        // Verificar se a pasta contém index.html (é uma página estática)
        const indexPath = path.join(srcFolder, 'index.html');
        if (fs.existsSync(indexPath)) {
          copyDir(srcFolder, destFolder);
          console.log(`✓ Pasta estática copiada: ${folder}/`);
        }
      }
    }
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
    // Plugins para garantir estrutura 100% estática no build
    staticIndexPlugin(),
    copyStaticFoldersPlugin()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Não gerar hashes nos nomes dos arquivos para manter URLs limpas
    rollupOptions: {
      output: {
        // Manter nomes de arquivos previsíveis
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
}));
