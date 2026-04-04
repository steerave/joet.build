import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section id="about" aria-label="About" className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-20 lg:py-[120px]">
      <ScrollReveal>
        <p className="font-mono text-[13px] font-semibold uppercase tracking-[1.5px] text-accent-light">
          About
        </p>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <h2 className="mb-14 mt-4 text-[44px] font-bold leading-[1.2] text-text-primary">
          About Me
        </h2>
      </ScrollReveal>
      <div className="max-w-about">
        <ScrollReveal delay={200}>
          <p className="mb-8 font-serif text-[19px] font-medium leading-[1.8] text-text-primary">
            I&apos;m a digital leader focused on executing complex programs at scale.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <p className="mb-8 font-serif text-[17px] leading-[1.8] text-text-body">
            I&apos;ve led high-visibility national campaigns across North America, working across product, engineering, and operations to deliver under real-world constraints.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <p className="font-serif text-[17px] leading-[1.8] text-text-body">
            I&apos;m now focused on applying AI to transform how digital systems are designed and executed — combining structured delivery with emerging technologies to unlock new levels of efficiency and impact.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
