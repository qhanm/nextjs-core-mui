import "server-only";

const dictionaries: { [key: string]: any } = {
  en: () => import("../../locales/en.json").then((module) => module.default),
  vi: () => import("../../locales/vi.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
