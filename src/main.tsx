import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Se o conteúdo já foi pré-renderizado (SSG), usar hydrate
// Caso contrário, usar render normal (desenvolvimento)
if (container.hasChildNodes()) {
  try {
    hydrateRoot(container, <App />);
  } catch (e) {
    // Se a hidratação falhar, limpar e renderizar normalmente
    console.warn("Hydration failed, falling back to client render", e);
    container.innerHTML = "";
    createRoot(container).render(<App />);
  }
} else {
  createRoot(container).render(<App />);
}
