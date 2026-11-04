"use client";

import { useEffect, useState } from "react";
import { sharedProfile } from "@/lib/content";
import { useLocale } from "@/lib/i18n";

export default function Navbar() {
  const { locale, toggleLocale, t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("#home");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in view and reflect it both in nav highlighting
  // and in the URL hash (via replaceState, so it doesn't jump-scroll or
  // spam browser history on every section change).
  useEffect(() => {
    const links = t.nav.links;
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const href = `#${entry.target.id}`;
            setActiveHref(href);
            if (window.location.hash !== href) {
              window.history.replaceState(null, "", href);
            }
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [t.nav.links]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        isScrolled
          ? "border-slate-200 bg-white/90 backdrop-blur-md shadow-sm"
          : "border-transparent bg-white/70 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Primary"
        className="section-container flex h-16 items-center justify-between"
      >
        <a
          href="#home"
          className="text-base font-semibold tracking-tight text-navy-900 hover:text-accent-600 transition-colors"
        >
          {t.meta.name}
          <span className="sr-only"> — Home</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {t.nav.links.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative text-sm font-medium transition-colors hover:text-accent-600 ${
                    isActive ? "text-accent-600" : "text-slate-600"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] w-full bg-accent-500 transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch locale={locale} onToggle={toggleLocale} />
          <a
            href={sharedProfile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-md bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600 focus-visible:outline-offset-2"
          >
            {t.nav.downloadResume}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitch locale={locale} onToggle={toggleLocale} compact />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-900"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 block h-[2px] w-6 bg-current transition-all duration-300 ${
                  isOpen ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-[2px] w-6 bg-current transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-[2px] w-6 bg-current transition-all duration-300 ${
                  isOpen ? "top-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden border-t border-slate-200 bg-white transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="section-container flex flex-col gap-1 py-4">
          {t.nav.links.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  aria-current={isActive ? "page" : undefined}
                  className={`block rounded-md px-3 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-slate-100 text-accent-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li className="mt-2">
            <a
              href={sharedProfile.resumeUrl}
              download
              onClick={handleLinkClick}
              className="flex items-center justify-center rounded-md bg-navy-900 px-4 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-600"
            >
              {t.nav.downloadResume}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

function LanguageSwitch({
  locale,
  onToggle,
  compact = false,
}: {
  locale: "en" | "th";
  onToggle: () => void;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={locale === "en" ? "Switch to Thai" : "Switch to English"}
      className={`inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white text-sm font-semibold text-navy-900 transition-colors hover:border-accent-500 hover:text-accent-600 ${
        compact ? "px-2.5 py-1.5" : "px-3 py-2"
      }`}
    >
      <span className={locale === "en" ? "text-accent-600" : "text-slate-400"}>EN</span>
      <span className="text-slate-300">/</span>
      <span className={locale === "th" ? "text-accent-600" : "text-slate-400"}>TH</span>
    </button>
  );
}
