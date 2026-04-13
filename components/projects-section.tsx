import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Jfinance",
    description:
      "Financial management app to track income, expenses, and goals in a simple dashboard — monthly view and balance without complicated spreadsheets.",
    technologies: ["Next.js", "TypeScript"],
    github: "https://github.com/jeanpatrickm/JFinance",
    demo: "https://jfinance.netlify.app/",
  },
  {
    title: "Event Manager",
    description:
      "Event manager to register dates and details and keep everything in one flow — ideal for anyone organizing their schedule and commitments.",
    technologies: ["React", "Node.js", "TypeScript", "Supabase"],
    github: "https://github.com/jeanpatrickm/event-manager",
  },
  {
    title: "Morzen",
    description:
      "Morzen landing page — a company I co-founded: who we are, what we deliver, and where you can hire our services.",
    technologies: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/jeanpatrickm/Morzen",
    demo: "https://morzen.com.br",
  },
  {
    title: "NLW 20",
    description:
      "App that integrates the Gemini API so users can ask questions about games and get contextual answers — built around curiosity and discovery.",
    technologies: ["React", "Gemini API", "Vite"],
    github: "https://github.com/jeanpatrickm/nlw-20",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Featured projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
            >
              <CardHeader>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
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
                    Code
                  </a>
                </Button>
                {project.demo && (
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
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
