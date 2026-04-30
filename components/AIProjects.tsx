import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    title: "AI Automated Search Pipeline",
    repo: "automated-search-pipeline",
    description:
      "Automated data pipeline: web scraping, LLM-based scoring with feedback loops, Google Sheets integration, scheduled email digests.",
    tags: ["Python", "LLM", "Automation"],
  },
  {
    title: "AI-Powered Task Manager",
    repo: "task-manager",
    description:
      "CLI task manager with natural language parsing, Obsidian vault integration, iCloud calendar sync, two-way checkbox reconciliation.",
    tags: ["TypeScript", "NLP", "CLI"],
  },
  {
    title: "Rental Tax Pipeline",
    repo: "rental-tax-pipeline",
    description:
      "End-to-end document processing pipeline: PDF ingestion with OCR, vendor classification with cross-year learning, human-in-the-loop review, template-driven Excel output.",
    tags: ["Python", "OCR", "Pipeline"],
  },
];

export default function AIProjects() {
  return (
    <section
      id="projects"
      aria-label="AI Projects"
      className="mx-auto max-w-content px-6 py-24 md:px-10 lg:px-16 lg:py-32"
    >
      <ScrollReveal>
        <div className="mb-4 flex items-baseline justify-between">
          <h2
            className="font-display font-semibold tracking-[-0.02em] text-text-primary"
            style={{ fontSize: "clamp(24px, 2.8vw, 30px)" }}
          >
            AI Projects
          </h2>
          <span className="hidden text-[13px] text-text-muted md:inline">
            Open source · github.com/steerave
          </span>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={50}>
        <p
          className="mb-12 max-w-prose text-text-body"
          style={{ fontSize: "15px", lineHeight: 1.6 }}
        >
          I build personal AI projects to stay grounded in the tools — the work
          I want to lead is the organizational side.
        </p>
      </ScrollReveal>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={100 + i * 80}>
            <a
              href={`https://github.com/steerave/${project.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-lg border border-border bg-surface p-7 transition-colors duration-200 hover:border-border-strong hover:bg-elevated"
            >
              <h3
                className="font-display font-medium tracking-[-0.01em] text-text-primary"
                style={{ fontSize: "17px", lineHeight: 1.35 }}
              >
                {project.title}
              </h3>
              <p
                className="mt-3 flex-1 text-text-body"
                style={{ fontSize: "14px", lineHeight: 1.6 }}
              >
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border px-[8px] py-[3px] text-[11px] text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-[13px] text-text-muted transition-colors duration-150 group-hover:text-accent">
                View on GitHub
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
