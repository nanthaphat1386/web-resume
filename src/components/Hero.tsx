"use client";

import { sharedProfile } from "@/lib/content";
import { useLocale } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden bg-navy-900 pt-20 pb-24 text-white sm:pt-28 sm:pb-32"
    >
      {/* Subtle static background accents — no gradients, kept minimal */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
            {t.hero.title}
          </p>
        </Reveal>

        <Reveal delayMs={80}>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {t.hero.headline}
          </h1>
        </Reveal>

        <Reveal delayMs={160}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {t.hero.description}
          </p>
        </Reveal>

        <Reveal delayMs={240}>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-accent-500 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-600"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href={sharedProfile.resumeUrl}
              download
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={320}>
          <ul className="mt-12 flex flex-wrap gap-3" aria-label="Core technologies">
            {t.hero.techBadges.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-200"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
