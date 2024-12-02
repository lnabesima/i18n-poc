import { create } from 'zustand';

interface LanguageStore {
  language: string;
  setLanguage: (newLanguage: string) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: 'pt',
  setLanguage: (newLanguage: string) => set(() => ({ language: newLanguage })),
}));
