import ScrollReveal from "@/components/ScrollReveal";

export default function CTA() {
  return (
    <section
      id="connect"
      aria-label="Connect"
      className="border-t border-border bg-surface"
    >
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="max-w-prose">
          <ScrollReveal>
            <h2
              className="font-display font-semibold tracking-[-0.025em] text-text-primary"
              style={{ fontSize: "clamp(28px, 3.6vw, 40px)", lineHeight: 1.08 }}
            >
              Let&apos;s connect.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p
              className="mt-5 text-text-body"
              style={{ fontSize: "17px", lineHeight: 1.6 }}
            >
              Open to senior roles and conversations around digital leadership,
              large-program execution, and how AI lands inside organizational
              delivery.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/in/sarun-teeravechyan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-accent px-[22px] py-[12px] font-display text-[14px] font-medium text-on-accent transition-colors duration-150 hover:bg-accent-light active:scale-[0.98]"
              >
                LinkedIn
              </a>
              <a
                href="mailto:steerave@gmail.com"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-border px-[22px] py-[12px] font-display text-[14px] font-medium text-text-primary transition-colors duration-150 hover:border-text-body active:scale-[0.98]"
              >
                Email
              </a>
              <a
                href="/Joe_Teeravechyan_Resume.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-border px-[22px] py-[12px] font-display text-[14px] font-medium text-text-primary transition-colors duration-150 hover:border-text-body active:scale-[0.98]"
              >
                Download CV
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
