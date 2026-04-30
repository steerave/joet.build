export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-4 px-6 py-8 text-[13px] text-text-muted md:flex-row md:items-center md:px-10 lg:px-16">
        <span>© 2026 Sarun Teeravechyan</span>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/sarun-teeravechyan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-body transition-colors hover:text-text-primary"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/steerave"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-body transition-colors hover:text-text-primary"
          >
            GitHub
          </a>
          <a
            href="mailto:steerave@gmail.com"
            className="text-text-body transition-colors hover:text-text-primary"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
