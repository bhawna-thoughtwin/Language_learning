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
  completedLessons: string[]; //  used to track completed lessons

  setLanguage: (lang: string) => void;
  setSection: (section: Section) => void;
  setUnits: (units: Unit[]) => void;
  setActiveUnitIndex: (index: number) => void;
  setLesson: (lesson: string) => void;
  markLessonComplete: (lessonId: string) => void; // function to mark complete
  reset: () => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: localStorage.getItem('selectedLanguage') || 'English',
  section: null,
  units: [],
  activeUnitIndex: 0,
  lesson: null,
  completedLessons: [],

  setLanguage: (lang) => {
    localStorage.setItem('selectedLanguage', lang);
    set({ language: lang });
  },
  setSection: (section) => set({ section }),
  setUnits: (units) => set({ units }),
  setActiveUnitIndex: (index) => set({ activeUnitIndex: index }),
  setLesson: (lesson) => set({ lesson }),

  markLessonComplete: (lessonId) =>
    set((state) => ({
      completedLessons: Array.from(new Set([...state.completedLessons, lessonId])),
    })),

  reset: () =>
    set({
      section: null,
      units: [],
      activeUnitIndex: 0,
      lesson: null,
      completedLessons: [],
    }),
}));
