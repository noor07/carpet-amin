export default function SectionHeading({
  title,
  description,
  count,
  align = "left",
}: {
  title: string;
  description?: string;
  count?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between ${
        align === "center" ? "text-center md:text-left" : ""
      }`}
    >
      <div className="max-w-xl">
        <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
        <div className="mt-3 h-px w-10 bg-ink/40" />
        {description && (
          <p className="mt-4 text-[14px] leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
      {count && (
        <div className="whitespace-nowrap text-[11px] uppercase tracking-[0.15em] text-muted">
          {count}
        </div>
      )}
    </div>
  );
}
