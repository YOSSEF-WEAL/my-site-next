"use client";

import { createContext, useContext } from "react";
import { useLocale } from "next-intl";

const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const locale = useLocale();
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useAppLocale() {
  return useContext(LocaleContext);
}
