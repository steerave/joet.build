import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    title: "AI Job Search Automation Tool",
    whatItDoes: "Automates job discovery, filtering, and tracking using AI workflows.",
    howItWorks: [
      "Daily job scraping",
      "AI-based relevance filtering",
      "Structured tracking system",
      "Feedback loop for learning",
    ],
    whyItMatters: "Demonstrates how AI can enhance decision-making and reduce manual effort.",
  },
  {
    title: "AI-Powered Task Manager",
    whatItDoes: "A CLI task manager that bridges the terminal and Obsidian, using natural language parsing to capture, organize, and review tasks without friction.",
    howItWorks: [
      "Natural language input — extracts dates, priorities, categories automatically",
      "Two-way Obsidian sync — markdown files, changes sync back",
      "Smart daily summaries — today, this week, next week",
      "Extensible taxonomy — canonical tags and domains",
    ],
    whyItMatters: "Shows how thoughtful system design can eliminate friction between task capture and task review.",
  },
];

export default function AIProjects() {
  return (
    <section aria-label="AI Projects" className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-20 lg:py-[120px]">
      <ScrollReveal>
        <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-accent-light">
          Projects
        </p>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <h2 className="mb-14 mt-4 text-[44px] font-bold leading-[1.2] text-text-primary">
          AI Projects
        </h2>
      </ScrollReveal>
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={200 + i * 100}>
            <div className="rounded-lg border border-border bg-[linear-gradient(180deg,rgba(74,111,165,0.04)_0%,transparent_100%)] p-10 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(74,111,165,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              <h3 className="mb-4 text-[22px] font-semibold text-text-primary">
                {project.title}
              </h3>
              <h4 className="mt-5 mb-2 text-[15px] font-semibold text-text-primary">What it does</h4>
              <p className="text-[15px] text-text-body">{project.whatItDoes}</p>
              <h4 className="mt-5 mb-2 text-[15px] font-semibold text-text-primary">How it works</h4>
              <ul className="space-y-1">
                {project.howItWorks.map((item) => (
                  <li key={item} className="relative pl-4 text-[15px] text-text-body">
                    <span className="absolute left-0 text-accent-light">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <h4 className="mt-5 mb-2 text-[15px] font-semibold text-text-primary">Why it matters</h4>
              <p className="text-[15px] text-text-body">{project.whyItMatters}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
