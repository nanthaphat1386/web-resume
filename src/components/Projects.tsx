"use client";

import { useLocale } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Projects() {
  const { t } = useLocale();

  return (
    <section id="projects" aria-label="Projects" className="bg-slate-50 py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
            {t.projects.eyebrow}
          </p>
        </Reveal>
        <Reveal delayMs={60}>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {t.projects.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {t.projects.items.map((project, idx) => (
            <Reveal key={project.name} delayMs={idx * 100}>
              <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 transition-shadow hover:shadow-md sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-navy-900">{project.name}</h3>
                  <span className="whitespace-nowrap rounded-md bg-navy-900/5 px-2.5 py-1 text-xs font-medium text-navy-900">
                    {project.platform}
                  </span>
                </div>

                <p className="mt-2 text-sm font-medium text-accent-600">{project.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.description}</p>

                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {t.projects.featuresLabel}
                  </h4>
                  <ul className="mt-2.5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm leading-relaxed text-slate-600"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-300"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label={t.projects.technologiesLabel}>
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {project.link && (
                  <a
                    href={project.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700"
                  >
                    {project.link.label}
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
