export default function Hero() {
  return (
    <section aria-label="Introduction" className="relative min-h-[90vh] overflow-hidden bg-bg [background-image:linear-gradient(rgba(74,111,165,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(74,111,165,0.07)_1px,transparent_1px)] [background-size:60px_60px]">
      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-[200px] bg-gradient-to-b from-transparent to-bg" />

      {/* Glows */}
      <div className="pointer-events-none absolute left-0 top-[10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(74,111,165,0.2)_0%,transparent_60%)] blur-[80px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(90,138,191,0.12)_0%,transparent_60%)] blur-[60px]" />
      <div className="pointer-events-none absolute left-[40%] top-[40%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(74,111,165,0.08)_0%,transparent_60%)] blur-[50px]" />

      {/* Content */}
      <div className="relative z-[2] mx-auto grid min-h-[90vh] max-w-content items-center gap-16 px-6 py-[120px] md:px-10 lg:grid-cols-[1.2fr_1fr] lg:px-20">
        <div>
          <h1 className="hero-animate-1 max-w-[800px] text-4xl font-bold leading-[1.1] text-text-primary md:text-5xl lg:text-[64px]">
            Leading digital execution at scale. Now building AI systems to do it better.
          </h1>
          <p className="hero-animate-2 mt-6 max-w-[540px] text-lg leading-[1.7] text-text-body">
            Senior digital leader delivering complex, high-visibility programs across North America — now focused on applying AI to transform how systems are designed, operated, and scaled.
          </p>
          <div className="hero-animate-3 mt-10 flex gap-4">
            <a
              href="#work"
              className="inline-block rounded-md bg-accent px-7 py-3.5 text-[15px] text-white shadow-[0_0_20px_rgba(74,111,165,0.2)] transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,111,165,0.35)]"
            >
              View Work
            </a>
            <a
              href="#connect"
              className="inline-block rounded-md border border-[rgba(74,111,165,0.4)] bg-transparent px-7 py-3.5 text-[15px] text-accent-light transition-all hover:border-accent-light hover:bg-[rgba(74,111,165,0.1)] hover:text-white"
            >
              Connect
            </a>
          </div>
          <p className="hero-animate-4 mt-6 text-[13px] text-text-muted">
            De-identified work. Details available upon request.
          </p>
        </div>
        <div className="hero-animate-image hidden rounded-xl border border-border bg-[linear-gradient(135deg,#0f1520_0%,#1a2a3a_40%,#0f1520_100%)] shadow-[0_8px_40px_rgba(0,0,0,0.3),0_0_60px_rgba(74,111,165,0.05)] lg:flex lg:min-h-[400px] lg:items-center lg:justify-center">
          <span className="text-xs uppercase tracking-[2px] text-accent-light/50">
            Hero Image Placeholder
          </span>
        </div>
      </div>
    </section>
  );
}
