// src/context/ThemeContext.tsx
import React from "react";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

  type Theme = "light" | "dark";
  
  interface ThemeContextType {
    theme: Theme;
    toggleTheme: (newTheme: Theme) => void;
  }
  
  const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
  
  export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("light");
  

    useEffect(() => {
      const savedTheme = localStorage.getItem("app-theme") as Theme | null;
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }, []);
  
    const toggleTheme = (newTheme: Theme) => {
      setTheme(newTheme);
      localStorage.setItem("app-theme", newTheme);
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
  };
  