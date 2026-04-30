import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { CaseStudy } from "@/lib/case-studies";

export default function CaseStudyDetail({ data }: { data: CaseStudy }) {
  return (
    <article className="mx-auto max-w-content px-6 pb-20 pt-12 md:px-10 lg:px-16 lg:pb-32">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-[14px] text-text-muted transition-colors hover:text-text-primary"
      >
        <span aria-hidden="true">←</span>
        Back to Selected Work
      </Link>

      <div className="mt-10 max-w-prose">
        <p className="text-[12px] uppercase tracking-[0.14em] text-accent">
          {data.kicker}
        </p>
        <h1
          className="mt-4 font-display font-semibold tracking-[-0.025em] text-text-primary"
          style={{ fontSize: "clamp(32px, 4.2vw, 48px)", lineHeight: 1.08 }}
        >
          {data.title}
        </h1>
        <p
          className="mt-6 text-text-body"
          style={{ fontSize: "18px", lineHeight: 1.65 }}
        >
          {data.overview}
        </p>
      </div>

      {data.image && (
        <div className="mt-12 overflow-hidden rounded-lg border border-border">
          <Image
            src={data.image}
            alt=""
            width={1600}
            height={900}
            priority
            sizes="(min-width: 1080px) 1080px, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>
      )}

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <ScrollReveal>
          <h2 className="text-[12px] uppercase tracking-[0.14em] text-text-muted">
            Challenge
          </h2>
          <ul className="mt-5 space-y-3">
            {data.challenge.map((item) => (
              <li
                key={item}
                className="text-text-body"
                style={{ fontSize: "15px", lineHeight: 1.6 }}
              >
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="text-[12px] uppercase tracking-[0.14em] text-text-muted">
            What I did
          </h2>
          <ul className="mt-5 space-y-3">
            {data.whatIDid.map((item) => (
              <li
                key={item}
                className="text-text-body"
                style={{ fontSize: "15px", lineHeight: 1.6 }}
              >
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="mt-16 rounded-lg bg-surface p-8 md:p-10">
          <h2 className="text-[12px] uppercase tracking-[0.14em] text-accent">
            Impact
          </h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2 md:gap-x-10">
            {data.impact.map((item) => (
              <li
                key={item}
                className="text-text-primary"
                style={{ fontSize: "15px", lineHeight: 1.55 }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <p
          className="mx-auto mt-16 max-w-prose font-display text-text-primary"
          style={{
            fontSize: "22px",
            lineHeight: 1.45,
            fontWeight: 500,
            letterSpacing: "-0.015em",
          }}
        >
          {data.insight}
        </p>
      </ScrollReveal>

      <p className="mt-12 text-[12px] uppercase tracking-[0.14em] text-text-muted">
        Additional details available upon request
      </p>
    </article>
  );
}
