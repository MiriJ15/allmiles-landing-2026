import { ArrowUpRight } from "lucide-react";

type DownloadButtonProps = {
  href: string;
  store: "google-play" | "app-store";
};

const contentMap = {
  "google-play": {
    top: "GET IT ON",
    bottom: "Google Play"
  },
  "app-store": {
    top: "Download on the",
    bottom: "App Store"
  }
};

function AppleStoreIcon() {
  return (
    <svg viewBox="0 0 384 512" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
      <path d="M318.7 268.1c-.3-51.1 41.8-75.6 43.7-76.8-23.9-35-61.1-39.8-74.3-40.3-31.2-3.2-61.4 18.7-77.3 18.7-16.2 0-40.6-18.3-66.9-17.8-33.8.5-65.4 20.1-82.8 50.7-35.8 62-9.1 153 25.2 203 17.2 24.5 37.4 51.8 63.8 50.8 25.9-1.1 35.6-16.5 66.8-16.5 30.9 0 40 16.5 67 15.9 27.7-.5 45.2-24.8 61.8-49.5 19.8-28.1 27.7-55.7 28-57.1-.7-.3-53.5-20.4-53.2-81.1zm-51.1-150.4c13.8-17.3 23.2-40.8 20.6-64.7-19.9.9-44.8 13.8-59.2 30.7-12.8 15-24.3 39.5-21.4 62.4 22.3 1.7 45.4-11.3 60-28.4z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-[18px] w-[18px]">
      <path d="M8 6.5L35.8 32L8 57.5C6.9 56.8 6 55.4 6 53.8V10.2C6 8.6 6.9 7.2 8 6.5z" fill="#34A853" />
      <path d="M35.8 32L44.9 40.3L13.8 57.9C12.3 58.8 10.1 58.5 8 57.5L35.8 32z" fill="#FBBC04" />
      <path d="M35.8 32L13.8 6.1C15.7 5 17.9 4.8 19.5 5.8L44.9 23.7L35.8 32z" fill="#4285F4" />
      <path d="M44.9 23.7L50.2 27.4C53.9 30 53.9 34 50.2 36.6L44.9 40.3L35.8 32L44.9 23.7z" fill="#EA4335" />
    </svg>
  );
}

function StoreIcon({ store }: { store: DownloadButtonProps["store"] }) {
  if (store === "app-store") {
    return <AppleStoreIcon />;
  }

  return <GooglePlayIcon />;
}

export function DownloadButton({ href, store }: DownloadButtonProps) {
  const content = contentMap[store];

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl p-[1px] sm:w-auto"
    >
      <span className="animate-shimmer absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-300/50 via-sky-500/60 to-emerald-300/50 opacity-70 transition group-hover:opacity-100" />
      <span className="glass-panel relative flex min-w-[220px] items-center gap-3 rounded-2xl px-5 py-3.5 text-left">
        <span className="rounded-xl bg-slate-100/70 p-2 text-sky-700 transition group-hover:text-sky-800 dark:bg-slate-900/70 dark:text-cyan-200 dark:group-hover:text-cyan-100">
          <StoreIcon store={store} />
        </span>
        <span className="flex-1">
          <span className="block text-[0.64rem] uppercase tracking-[0.24em] text-slate-600/90 dark:text-slate-300/80">
            {content.top}
          </span>
          <span className="block text-base font-semibold leading-tight text-slate-900 dark:text-white">
            {content.bottom}
          </span>
        </span>
        <ArrowUpRight
          size={16}
          className="text-slate-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-slate-300"
        />
      </span>
    </a>
  );
}
