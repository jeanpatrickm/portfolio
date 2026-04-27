"use client";

import { Badge } from "@/components/ui/badge";
import { useLocale } from "@/components/locale-provider";

const technologies = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Git",
  "Python",
];

export function AboutSection() {
  const { t } = useLocale();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {t.about.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            {t.about.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">{t.about.p1}</p>
            <p className="text-muted-foreground leading-relaxed">{t.about.p2}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {t.about.technologies}
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-secondary hover:bg-primary/20 hover:text-primary transition-colors cursor-default px-3 py-1.5"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
