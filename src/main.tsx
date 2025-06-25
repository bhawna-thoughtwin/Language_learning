import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./App.css";
import '@mantine/core/styles.css';
import './i18n';

import { AuthProvider } from "./context/userAuthContext.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { useEffect } from "react";
import { useThemeStore } from "./store/useThemeStore";

export const ThemeInitializer = () => {
  const theme = useThemeStore((s) => s.colorScheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return null;
};

ReactDOM.createRoot(document.getElementById("root")!).render(

    <AuthProvider>
      <ThemeProvider>
      <ThemeInitializer /> 
        <App />
      </ThemeProvider>
    </AuthProvider>
  
);
