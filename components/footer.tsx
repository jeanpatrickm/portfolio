"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

const MORZEN_URL = "https://morzen.com.br";

export function Footer() {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {currentYear} Jean Patrick. {t.footer.rights}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
          <Link
            href={MORZEN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline underline-offset-4"
          >
            Morzen
          </Link>
        </div>
      </div>
    </footer>
  );
}
