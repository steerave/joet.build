import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

export default function CaseStudyListItem({ data }: { data: CaseStudy }) {
  return (
    <Link
      href={`/work/${data.slug}`}
      className="group grid grid-cols-[1fr_auto] items-baseline gap-6 border-t border-border py-7 transition-[padding] duration-200 hover:pl-3 md:grid-cols-[160px_1fr_auto] md:gap-8"
    >
      <span
        className="hidden text-[12px] uppercase tracking-[0.14em] text-text-muted md:inline"
      >
        {data.kicker}
      </span>
      <div>
        <h3
          className="font-display font-medium tracking-[-0.015em] text-text-primary transition-colors duration-150 group-hover:text-accent"
          style={{ fontSize: "19px", lineHeight: 1.35 }}
        >
          {data.title}
        </h3>
        <p
          className="mt-2 text-text-body"
          style={{ fontSize: "14px", lineHeight: 1.6, maxWidth: "640px" }}
        >
          {data.summary}
        </p>
      </div>
      <span
        aria-hidden="true"
        className="self-center text-[16px] text-text-muted transition-[color,transform] duration-200 group-hover:translate-x-1 group-hover:text-accent"
      >
        →
      </span>
    </Link>
  );
}
