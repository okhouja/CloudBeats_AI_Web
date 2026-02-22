import { v2 } from "./ui";

/**
 * System Roadmap section for /v2. Ported from Figma_Prototype_v2 home layout.
 * Uses frontend Tailwind + CSS variables only; no imports from prototype.
 */
export function SystemRoadmap() {
  const items = [
    {
      status: "Active",
      dotClass: "bg-[var(--cb-cyan)]",
      borderHover: "hover:border-[var(--cb-cyan)]/50",
      title: "Neon Horizon",
      id: "REL-2049",
      version: "v1.2",
      opacity: "",
    },
    {
      status: "In Development",
      dotClass: "bg-[var(--cb-pink)] animate-pulse",
      borderHover: "hover:border-[var(--cb-pink)]/50",
      title: "Cyber Mist",
      id: "REL-2050",
      version: "v0.9",
      opacity: "opacity-60 hover:opacity-100",
    },
    {
      status: "Experimental",
      dotClass: "bg-[var(--cb-pink-strong)]",
      borderHover: "hover:border-[var(--cb-pink-strong)]/50",
      title: "Void Core",
      id: "REL-X01",
      version: "ALPHA",
      opacity: "opacity-40 hover:opacity-80",
    },
  ] as const;

  return (
    <section
      className={v2.sectionWrapper}
      aria-labelledby="roadmap-heading"
    >
      <div className={`${v2.sectionInner} max-w-[1400px] border-t border-white/10 pt-12`}>
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:justify-between sm:items-end mb-12">
          <h2
            id="roadmap-heading"
            className="text-xl font-light tracking-wide text-[var(--cb-text)]"
          >
            System Roadmap
          </h2>
          <span className="text-xs font-mono text-white/30">2024 — 2025</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className={`group min-w-0 border-l border-white/10 pl-6 transition-colors duration-300 ${item.borderHover} ${item.opacity}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.dotClass}`}
                  aria-hidden
                />
                <span className="text-xs font-mono text-white/40 tracking-widest uppercase">
                  {item.status}
                </span>
              </div>
              <h3 className="text-xl text-[var(--cb-text)] font-light mb-1 group-hover:text-[var(--cb-cyan)] transition-colors">
                {item.title}
              </h3>
              <div className="text-xs font-mono text-white/30 uppercase mt-8 flex justify-between">
                <span>{item.id}</span>
                <span>{item.version}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
