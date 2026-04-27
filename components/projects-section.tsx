"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { projectsData } from "@/lib/projects-data";

export function ProjectsSection() {
  const { t } = useLocale();

  return (
    <section id="projects" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {t.projects.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            {t.projects.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.projects.items.map((item, index) => {
            const project = projectsData[index];
            if (!project) return null;

            return (
              <Card
                key={item.title}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <CardHeader>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-border text-muted-foreground text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-border hover:border-primary hover:bg-transparent hover:text-foreground dark:hover:bg-transparent dark:hover:text-foreground"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      {t.projects.code}
                    </a>
                  </Button>
                  {"demo" in project && project.demo && (
                    <Button
                      asChild
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t.projects.demo}
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
