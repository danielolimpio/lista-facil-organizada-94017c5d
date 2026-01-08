import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Se o conteúdo já foi pré-renderizado (SSG), usar hydrate
// Caso contrário, usar render normal (desenvolvimento)
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
