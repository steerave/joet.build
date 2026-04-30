import Link from "next/link";

export default function Nav() {
  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-[100] border-b border-border bg-[rgba(11,11,15,0.85)] backdrop-blur-[16px]"
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-[18px] md:px-10 lg:px-16">
        <Link
          href="/"
          className="font-display text-[15px] font-semibold tracking-[-0.01em] text-text-primary transition-opacity hover:opacity-80"
        >
          Sarun Teeravechyan
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {[
            { href: "/#work", label: "Work" },
            { href: "/#projects", label: "AI" },
            { href: "/#about", label: "About" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[14px] text-text-body transition-colors duration-150 hover:text-text-primary"
            >
              {label}
            </a>
          ))}
          <a
            href="/Joe_Teeravechyan_Resume.pdf"
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-[40px] items-center rounded-md border border-border px-[14px] py-[8px] text-[13px] font-medium text-text-primary transition-colors duration-150 hover:border-accent hover:text-accent"
          >
            Curriculum Vitae
          </a>
        </div>
      </div>
    </nav>
  );
}
