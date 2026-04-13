import { Badge } from "@/components/ui/badge";

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
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            About me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Who I am
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a Computer Engineering student with a strong interest in
              Software Engineering. I enjoy architecting, structuring, and
              building modern systems, always aiming for organization and solid
              practices in development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I work mainly with modern technologies like TypeScript and React.
              I also have experience with Python, which I use when it&apos;s the
              better fit for different kinds of problems.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Technologies
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
