"use client";

import { useLocale } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useLocale();

  return (
    <section id="about" aria-label="About me" className="bg-white py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
            {t.about.eyebrow}
          </p>
        </Reveal>
        <Reveal delayMs={60}>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {t.about.heading}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delayMs={100}>
            <div className="space-y-5">
              {t.about.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-base leading-relaxed text-slate-600 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={160}>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-900">
                {t.about.focusHeading}
              </h3>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {t.about.focusAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500"
                      aria-hidden="true"
                    />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
