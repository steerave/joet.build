import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import CaseStudyListItem from "@/components/CaseStudyListItem";
import ScrollReveal from "@/components/ScrollReveal";
import AIProjects from "@/components/AIProjects";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/case-studies";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CredibilityStrip />

        <section
          id="work"
          aria-label="Selected work"
          className="mx-auto max-w-content px-6 py-24 md:px-10 lg:px-16 lg:py-32"
        >
          <ScrollReveal>
            <div className="mb-10 flex items-baseline justify-between">
              <h2
                className="font-display font-semibold tracking-[-0.02em] text-text-primary"
                style={{ fontSize: "clamp(24px, 2.8vw, 30px)" }}
              >
                Selected work
              </h2>
              <span className="hidden text-[13px] text-text-muted md:inline">
                De-identified · details on request
              </span>
            </div>
          </ScrollReveal>

          <div>
            {caseStudies.map((cs) => (
              <CaseStudyListItem key={cs.slug} data={cs} />
            ))}
            <div className="border-t border-border" />
          </div>
        </section>

        <AIProjects />
        <About />
      </main>
      <CTA />
      <Footer />
    </>
  );
}
