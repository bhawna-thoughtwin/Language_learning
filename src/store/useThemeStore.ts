
import { create } from "zustand";

interface ThemeState {
  colorScheme: "light" | "dark";
  setColorScheme: (scheme: "light" | "dark") => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  colorScheme: (localStorage.getItem("theme") as "light" | "dark") || "light",
  setColorScheme: (scheme) => {
    localStorage.setItem("theme", scheme);
  
    set({ colorScheme: scheme });
  },
}));
