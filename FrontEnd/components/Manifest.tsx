export function Manifest() {
  const lines = [
    "Cloud architecture.",
    "Sonic systems.",
    "Human direction.",
  ];

  return (
    <section className="bg-[var(--cb-bg-1)] px-4 py-8 md:py-12" aria-label="Manifest">
      <div
        className="mx-auto max-w-2xl border-t border-white/10 pt-6"
        style={{
          boxShadow: "0 -1px 0 0 rgba(133, 215, 246, 0.08)",
        }}
      >
        <div className="flex flex-col items-center gap-4 text-center">
          {lines.map((line, i) => (
            <p
              key={i}
              className="text-lg text-[var(--cb-text-muted)] md:text-xl"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
