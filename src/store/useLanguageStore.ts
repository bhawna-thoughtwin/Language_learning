import { create } from 'zustand';

interface Lesson {
  id: string;
  name: string;
}

interface Unit {
  id: string;
  name: string;
  themeColor?: string;
  characterImage?: string;
  lessons: Lesson[];
}

interface Section {
  id: string;
  name: string;
  units: Unit[];
}

interface LanguageStore {
  language: string;
  section: Section | null;
  units: Unit[];
  activeUnitIndex: number;
  lesson: string | null;
  setLanguage: (lang: string) => void;
  setSection: (section: Section) => void;
  setUnits: (units: Unit[]) => void;
  setActiveUnitIndex: (index: number) => void;
  setLesson: (lesson: string) => void;
  reset: () => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: localStorage.getItem('selectedLanguage') || 'English',
  section: null,
  units: [],
  activeUnitIndex: 0,
  lesson: null,

  setLanguage: (lang) => {
    localStorage.setItem('selectedLanguage', lang);
    set({ language: lang });
  },
  setSection: (section) => set({ section }),
  setUnits: (units) => set({ units }),
  setActiveUnitIndex: (index) => set({ activeUnitIndex: index }),
  setLesson: (lesson) => set({ lesson }),
  reset: () =>
    set({ section: null, units: [], activeUnitIndex: 0, lesson: null }),
}));
