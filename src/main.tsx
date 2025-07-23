import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#1e293b",
          color: "#fff",
          border: "1px solid #334155",
        },
        success: {
          iconTheme: {
            primary: "#84cc16",
            secondary: "#1e293b",
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#1e293b",
          },
        },
      }}
    />
  </StrictMode>
);
