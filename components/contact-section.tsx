"use client";

import { useLocale } from "@/components/locale-provider";

const CONTACT_EMAIL = "jeanpatricksmoraes@gmail.com";

export function ContactSection() {
  const { t } = useLocale();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {t.contact.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            {t.contact.heading}
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8">
          <p className="text-muted-foreground leading-relaxed max-w-md">
            {t.contact.blurb}
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group relative inline-block whitespace-nowrap shrink-0 pb-2 text-foreground font-medium transition-colors hover:text-primary"
          >
            <span className="relative z-10">{CONTACT_EMAIL}</span>
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full overflow-hidden rounded-full bg-primary/15 transition-[background-color] duration-300 group-hover:bg-primary/25"
            >
              <span className="absolute inset-y-0 left-0 w-[min(55%,12rem)] rounded-full bg-gradient-to-r from-transparent via-primary/90 to-transparent opacity-80 motion-reduce:animate-none animate-[email-line-shimmer_3.2s_ease-in-out_infinite]" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
