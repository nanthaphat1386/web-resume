"use client";

import { useLocale } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Skills() {
  const { t } = useLocale();

  return (
    <section id="skills" aria-label="Technical skills" className="bg-slate-50 py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
            {t.skills.eyebrow}
          </p>
        </Reveal>
        <Reveal delayMs={60}>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {t.skills.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.categories.map((category, idx) => (
            <Reveal key={category.title} delayMs={idx * 60}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md">
                <h3 className="text-base font-semibold text-navy-900">{category.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${category.title} skills`}>
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
