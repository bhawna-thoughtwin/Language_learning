import { create } from 'zustand';

interface LanguageStore {
  language: string;
  section: string | null;
  unit: string | null;
  lesson: string | null;
  setLanguage: (lang: string) => void;
  setSection: (section: string) => void;
  setUnit: (unit: string) => void;
  setLesson: (lesson: string) => void;
  reset: () => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: localStorage.getItem('selectedLanguage') || 'English',
  section: null,
  unit: null,
  lesson: null,

  setLanguage: (lang) => {
    localStorage.setItem('selectedLanguage', lang);
    set({ language: lang });
  },
  setSection: (section) => set({ section }),
  setUnit: (unit) => set({ unit }),
  setLesson: (lesson) => set({ lesson }),
  reset: () => set({ section: null, unit: null, lesson: null }),
}));
