import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeContextProvider from "./context/ThemeContextProvider.jsx";
import TodoContextProvider from "./context/TodoContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </ThemeContextProvider>
);
