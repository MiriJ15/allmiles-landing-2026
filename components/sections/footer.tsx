"use client";

import { useTranslation } from "@/lib/i18n";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="container-shell">
        <p className="text-sm text-slate-600">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
