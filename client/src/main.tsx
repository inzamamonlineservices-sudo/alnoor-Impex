import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initAOS } from "./lib/aos";

// Initialize AOS
initAOS();

createRoot(document.getElementById("root")!).render(<App />);
