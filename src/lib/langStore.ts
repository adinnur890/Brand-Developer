import { create } from "zustand";

export type Lang = "id" | "en";

type LangStore = {
  lang: Lang;
  toggle: () => void;
};

export const useLang = create<LangStore>((set, get) => ({
  lang: "id",
  toggle: () => set({ lang: get().lang === "id" ? "en" : "id" }),
}));
