"use client";

import { useState, type FormEvent } from "react";
import { sharedProfile } from "@/lib/content";
import { useLocale } from "@/lib/i18n";
import Reveal from "./Reveal";

type FormStatus = "idle" | "submitting" | "success" | "error";

const detailHrefByType: Record<string, string | undefined> = {
  email: `mailto:${sharedProfile.email}`,
  phone: `tel:${sharedProfile.phone.replace(/\s+/g, "")}`,
  github: sharedProfile.github,
  linkedin: sharedProfile.linkedin,
  location: undefined,
};

export default function Contact() {
  const { t } = useLocale();
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // No backend endpoint is wired up yet. Replace this with a real
    // submission (API route, email service, etc.) before going live.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus("success");
    form.reset();
  }

  return (
    <section id="contact" aria-label="Contact" className="bg-navy-900 py-20 text-white sm:py-28">
      <div className="section-container">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
            {t.contact.eyebrow}
          </p>
        </Reveal>
        <Reveal delayMs={60}>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.contact.heading}</h2>
        </Reveal>
        <Reveal delayMs={100}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            {t.contact.description}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delayMs={140}>
            <ul className="space-y-5">
              {t.contact.details.map((detail) => {
                const href = detailHrefByType[detail.type];
                return (
                  <li key={detail.type} className="border-b border-white/10 pb-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {detail.label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-1 inline-block text-base font-medium text-white transition-colors hover:text-accent-500"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base font-medium text-white">{detail.value}</p>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delayMs={180}>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                  {t.contact.form.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-accent-500 focus:outline-none"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                  {t.contact.form.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-accent-500 focus:outline-none"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                  {t.contact.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-md border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-accent-500 focus:outline-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center rounded-md bg-accent-500 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === "submitting" ? t.contact.form.submitting : t.contact.form.submit}
              </button>

              <div aria-live="polite">
                {status === "success" && (
                  <p className="text-sm font-medium text-accent-500">
                    {t.contact.form.successMessage}
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm font-medium text-red-400">{t.contact.form.errorMessage}</p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
