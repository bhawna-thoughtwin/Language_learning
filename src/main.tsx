import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.tsx";
import '@mantine/core/styles.css';
import './i18n';

import { AuthProvider } from "./context/userAuthContext.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
