import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            Software Engineer
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight text-balance">
          Hi, my name is <span className="text-primary">Jean Patrick</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
          I love technology and designing, structuring, and building with it.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          >
            <a href="#projects">View projects</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border hover:bg-secondary px-8"
          >
            <a href="#contact">Contact</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/jeanpatrickm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="www.linkedin.com/in/jeanpatrickm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>

        <div className="mt-20 animate-bounce">
          <a
            href="#about"
            className="inline-block text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
