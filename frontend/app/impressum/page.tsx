import Link from "next/link";

const LEGAL_URL = "https://mein.online-impressum.de/cloudbeatsai/";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[var(--cb-bg-1)]">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-white/5 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-6xl items-center px-4 py-3"
          aria-label="Impressum navigation"
        >
          <Link
            href="/"
            className="text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            ← Back
          </Link>
        </nav>
      </header>

      <div className="px-4 py-8 md:py-12">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-10">
          <h1 className="text-2xl font-semibold text-[var(--cb-text)]">
            Impressum
          </h1>

          <div className="mt-6">
            <a
              href={LEGAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[var(--cb-pink-strong)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-90"
            >
              View legal information
            </a>
          </div>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-white/90">
            <section>
              <h2 className="mb-3 text-base font-semibold tracking-wide text-[var(--cb-text)]">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="font-semibold text-[var(--cb-text)]">
                CloudBeatsAI - Omar Khouja
              </p>
              <div className="mt-2 space-y-0.5 text-white/90">
                <p>c/o Online-Impressum.de #6083</p>
                <p>Europaring 90</p>
                <p>53757 Sankt Augustin</p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-6">
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:cloudbeatsai@mail.online-impressum.de"
                  className="text-[var(--cb-cyan)] underline transition-colors hover:text-white"
                >
                  cloudbeatsai@mail.online-impressum.de
                </a>
              </p>
              <p className="mt-2">
                Second contact path:{" "}
                <a
                  href={`${LEGAL_URL}#Zweiter_Kontaktweg`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--cb-cyan)] underline transition-colors hover:text-white"
                >
                  Zweiter Kontaktweg (external)
                </a>
              </p>
            </section>

            <section className="border-t border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                Zuständige Regulierungs- und Aufsichtsbehörde
              </p>
              <p className="mt-2 text-white/90">
                Medienanstalt Hamburg/Schleswig-Holstein
                <br />
                Sitz: Deutschland
              </p>
            </section>

            <p className="border-t border-white/10 pt-6 text-white/70">
              Kein Umsatzsteuerausweis aufgrund Anwendung der
              Kleinunternehmerregelung gemäß § 19 UStG.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
