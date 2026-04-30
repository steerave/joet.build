import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-16">
          <ScrollReveal>
            <h2
              className="font-display font-semibold tracking-[-0.02em] text-text-primary"
              style={{ fontSize: "clamp(24px, 2.8vw, 30px)" }}
            >
              About
            </h2>
          </ScrollReveal>

          <div className="max-w-prose space-y-6">
            <ScrollReveal delay={100}>
              <p
                className="text-text-primary"
                style={{ fontSize: "20px", lineHeight: 1.55, fontWeight: 500 }}
              >
                I&apos;m a digital leader focused on executing complex programs
                at scale.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p
                className="text-text-body"
                style={{ fontSize: "17px", lineHeight: 1.7 }}
              >
                I&apos;ve led high-visibility national campaigns across North
                America, working across product, engineering, and operations to
                deliver under real-world constraints.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p
                className="text-text-body"
                style={{ fontSize: "17px", lineHeight: 1.7 }}
              >
                I&apos;m now focused on applying AI to transform how digital
                systems are designed and executed, combining structured delivery
                with emerging technologies to unlock new levels of efficiency
                and impact.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
