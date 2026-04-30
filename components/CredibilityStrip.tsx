const stats = [
  { value: "20+",  label: "Years leading digital execution" },
  { value: "30+",  label: "National-scale programs delivered" },
  { value: "10M+", label: "Users supported in live systems" },
];

export default function CredibilityStrip() {
  return (
    <section
      aria-label="Track record"
      className="border-y border-border"
    >
      <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-6 py-14 md:grid-cols-3 md:gap-14 md:px-10 md:py-16 lg:px-16">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-3">
            <div
              className="font-display font-semibold leading-none tracking-[-0.03em] text-text-primary"
              style={{ fontSize: "clamp(40px, 4.8vw, 56px)" }}
            >
              {stat.value}
            </div>
            <div
              className="text-text-body"
              style={{ fontSize: "14px", lineHeight: 1.45, maxWidth: "240px" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
