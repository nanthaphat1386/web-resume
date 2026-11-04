"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content, type SiteContent } from "./content";

export type Locale = "en" | "th";

const STORAGE_KEY = "preferred-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: SiteContent;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Restore saved preference after mount. This intentionally runs once on
  // the client only (not during the initial render) to avoid an SSR/client
  // hydration mismatch, since localStorage isn't available on the server.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "th") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- restoring persisted locale after hydration is intentional
      setLocaleState(stored);
    }
  }, []);

  // Keep <html lang>, document title, and storage in sync whenever the
  // locale changes (metadata is set server-side for the initial SEO title).
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = content[locale].meta.title;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale: (next: Locale) => setLocaleState(next),
      toggleLocale: () => setLocaleState((prev) => (prev === "en" ? "th" : "en")),
      t: content[locale],
    }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}
