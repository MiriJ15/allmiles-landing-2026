"use client";

import { useTranslation, localeLabels, type Locale } from "@/lib/i18n";

const locales = Object.keys(localeLabels) as Locale[];

export function LanguageSelector() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center gap-1 rounded-xl border border-slate-200/70 bg-white/60 p-1 backdrop-blur dark:border-white/10 dark:bg-slate-900/50">
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          className={`rounded-lg px-2.5 py-1 text-xs font-semibold tracking-widest uppercase transition ${
            locale === l
              ? "bg-gradient-to-br from-[#00C853] to-[#0EAAFD] text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          }`}
        >
          {localeLabels[l]}
        </button>
      ))}
    </div>
  );
}
