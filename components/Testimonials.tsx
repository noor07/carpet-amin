import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="border-t border-line bg-paper-warm">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <h2 className="text-center font-serif text-3xl md:text-4xl">
          What Designers Are Saying
        </h2>
        <div className="mx-auto mt-4 h-px w-10 bg-ink/40" />
        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <p className="font-serif text-lg italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 text-[11px] uppercase tracking-[0.15em] text-muted">
                {t.name} — {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
