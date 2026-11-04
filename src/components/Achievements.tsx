"use client";

import { useLocale } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Achievements() {
  const { t } = useLocale();

  return (
    <section id="achievements" aria-label="Achievements" className="bg-slate-50 py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
            {t.achievements.eyebrow}
          </p>
        </Reveal>
        <Reveal delayMs={60}>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {t.achievements.heading}
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {t.achievements.items.map((item, idx) => (
            <Reveal as="li" key={item} delayMs={idx * 50}>
              <div className="flex h-full items-start gap-3 rounded-xl border border-slate-200 bg-white p-5">
                <span
                  className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent-500/10 text-accent-600"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <p className="text-sm leading-relaxed text-slate-700">{item}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
