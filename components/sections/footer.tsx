"use client";

import { useTranslation } from "@/lib/i18n";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="container-shell flex flex-col gap-1">
        <p className="text-sm text-slate-600">{t.footer.copyright}</p>
        <p className="text-sm text-slate-500">VÖEN: 1502660521</p>
      </div>
    </footer>
  );
}
