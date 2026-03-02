import { Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" }
];

const socialLinks = [
  { label: "X", href: "#", icon: Twitter },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-white/10">
      <div className="container-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          (c) 2026 AllMiles. Crafted for global travelers.
        </p>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="glass-panel inline-flex h-9 w-9 items-center justify-center rounded-xl text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
