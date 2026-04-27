"use client";

import { useLocale } from "@/components/locale-provider";

const buttonClassName =
  "text-muted-foreground hover:text-primary transition-colors text-sm font-medium " +
  "inline-flex items-center justify-center min-h-0 px-0 py-0 " +
  "bg-transparent border-0 shadow-none cursor-pointer " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm " +
  "hover:bg-transparent active:bg-transparent";

export function LanguageToggle() {
  const { t, toggleLocale } = useLocale();

  return (
    <div className="fixed right-4 top-4 z-[60] sm:right-6 sm:top-4">
      <button
        type="button"
        onClick={toggleLocale}
        className={buttonClassName}
        aria-label={t.language.aria}
        title={t.language.aria}
      >
        {t.language.label}
      </button>
    </div>
  );
}
