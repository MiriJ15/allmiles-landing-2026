"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useTranslation, type PolicyDoc } from "@/lib/i18n";

type ModalKey = "privacy" | "terms" | "cancellation" | "returnPolicy" | null;

function PolicyModal({
  doc,
  onClose,
}: {
  doc: PolicyDoc;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          aria-label="Close"
        >
          <X size={16} />
        </button>
        <h2 className="pr-8 text-lg font-semibold text-slate-900">
          {doc.title}
        </h2>
        <div className="mt-4 space-y-5">
          {doc.sections.map((section, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold text-slate-800">
                {section.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {section.body}
              </p>
              {section.items && section.items.length > 0 && (
                <ul className="mt-2 space-y-2 pl-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="text-sm leading-relaxed text-slate-600">
                      <span className="font-medium text-slate-700">
                        {item.label}:
                      </span>{" "}
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState<ModalKey>(null);

  const privacyDoc: PolicyDoc = {
    link: t.privacy.link,
    title: t.privacy.title,
    sections: [{ title: "", body: t.privacy.body }],
  };

  const modalDoc: PolicyDoc | null =
    activeModal === "privacy"
      ? privacyDoc
      : activeModal === "terms"
      ? t.terms
      : activeModal === "cancellation"
      ? t.cancellation
      : activeModal === "returnPolicy"
      ? t.returnPolicy
      : null;

  return (
    <>
      <footer className="border-t border-slate-200 py-8">
        <div className="container-shell flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-1">
          <p className="text-sm text-slate-600">{t.footer.copyright}</p>
          <p className="text-sm text-slate-600">VÖEN: 1502660521</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 sm:ml-auto">
            {(
              [
                ["terms", t.terms.link],
                ["cancellation", t.cancellation.link],
                ["returnPolicy", t.returnPolicy.link],
                ["privacy", t.privacy.link],
              ] as [ModalKey, string][]
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveModal(key)}
                className="text-left text-sm text-slate-600 underline-offset-2 transition hover:text-[#0EAAFD] hover:underline"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </footer>

      {activeModal && modalDoc && (
        <PolicyModal doc={modalDoc} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}
