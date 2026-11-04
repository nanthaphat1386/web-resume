"use client";

import { useLocale } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Experience() {
  const { t } = useLocale();

  return (
    <section id="experience" aria-label="Professional experience" className="bg-white py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
            {t.experience.eyebrow}
          </p>
        </Reveal>
        <Reveal delayMs={60}>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {t.experience.heading}
          </h2>
        </Reveal>

        <ol className="mt-14 space-y-12 border-l border-slate-200 pl-8 sm:pl-10">
          {t.experience.items.map((exp, idx) => (
            <Reveal as="li" key={`${exp.company}-${exp.period}`} delayMs={idx * 80} className="relative">
              <span
                className="absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full border-2 border-accent-500 bg-white sm:-left-[calc(2.5rem+5px)]"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold text-navy-900">{exp.jobTitle}</h3>
                <span className="text-sm font-medium text-slate-500">{exp.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent-600">
                {exp.company} · {exp.location}
              </p>

              <div className="mt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {t.experience.responsibilitiesLabel}
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {exp.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-300"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {exp.achievements.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {t.experience.achievementsLabel}
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {exp.achievements.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <ul className="mt-5 flex flex-wrap gap-2" aria-label={t.experience.technologiesLabel}>
                {exp.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-navy-900/5 px-3 py-1 text-xs font-medium text-navy-900"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
