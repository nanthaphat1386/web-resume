"use client";

import { sharedProfile } from "@/lib/content";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 py-8 text-slate-400">
      <div className="section-container flex flex-col items-center gap-2 text-center text-sm">
        <p>
          © {year} {sharedProfile.name}. {t.footer.rights}
        </p>
        <p className="text-slate-500">{t.footer.tagline}</p>
      </div>
    </footer>
  );
}
