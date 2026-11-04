"use client";

import { useLocale } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Education() {
  const { t } = useLocale();

  return (
    <section id="education" aria-label="Education" className="bg-white py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
            {t.education.eyebrow}
          </p>
        </Reveal>
        <Reveal delayMs={60}>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {t.education.heading}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {t.education.items.map((item, idx) => (
            <Reveal key={`${item.university}-${item.year}`} delayMs={idx * 80}>
              <div className="h-full rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
                <h3 className="text-lg font-semibold text-navy-900">{item.degree}</h3>
                <p className="mt-1 text-sm font-medium text-accent-600">{item.field}</p>
                <p className="mt-3 text-sm text-slate-600">{item.university}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {t.education.graduatedLabel} {item.year}
                  {item.gpa ? ` · ${t.education.gpaLabel} ${item.gpa}` : ""}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {t.education.certifications.length > 0 && (
            <Reveal delayMs={120}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {t.education.certificationsHeading}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {t.education.certifications.map((cert) => (
                    <li
                      key={cert}
                      className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {t.education.languages.length > 0 && (
            <Reveal delayMs={160}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {t.education.languagesHeading}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {t.education.languages.map((lang) => (
                    <li
                      key={lang.label}
                      className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {lang.label} · {lang.level}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
