export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-content px-6 pb-24 pt-[120px] md:px-10 md:pt-[140px] lg:px-16 lg:pb-32 lg:pt-[160px]">
        <div className="hero-animate-1 mb-7 inline-flex items-center gap-[10px] rounded-full border border-border px-[14px] py-[7px] text-[13px] text-text-body">
          <span
            aria-hidden="true"
            className="inline-block h-[7px] w-[7px] rounded-full bg-success"
            style={{ boxShadow: "0 0 0 3px rgba(78,214,138,0.18)" }}
          />
          Open to senior digital leadership roles
        </div>

        <h1
          className="hero-animate-2 font-display font-semibold leading-[1.02] tracking-[-0.035em] text-text-primary"
          style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
        >
          I lead complex digital programs at{" "}
          <span className="text-accent">national scale</span>.
        </h1>

        <p
          className="hero-animate-3 mt-7 max-w-[640px] text-text-body"
          style={{ fontSize: "19px", lineHeight: 1.5 }}
        >
          Twenty years delivering high-visibility programs across North America.
          Now studying how AI reshapes organizational delivery: where it fits,
          how systems are designed around existing workflows, and how teams
          adapt as adoption lands.
        </p>

        <div className="hero-animate-4 mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-accent px-[22px] py-[12px] font-display text-[14px] font-medium text-on-accent transition-colors duration-150 hover:bg-accent-light active:scale-[0.98]"
          >
            View Selected Work
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
      </div>
    </section>
  );
}
