"use client";

import { createContext, useContext, type ReactNode } from "react";

type Dict = Record<string, unknown>;

const TranslationContext = createContext<Dict>({});

export function useTranslation() {
  return useContext(TranslationContext);
}

export function TranslationProvider({
  dict,
  children,
}: {
  dict: Dict;
  children: ReactNode;
}) {
  return (
    <TranslationContext.Provider value={dict}>
      {children}
    </TranslationContext.Provider>
  );
}
