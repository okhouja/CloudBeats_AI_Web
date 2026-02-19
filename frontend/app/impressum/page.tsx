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
          <div className="text-center">
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
          </div>

          <div
            className="prose prose-invert mt-8 max-w-none
                        prose-headings:tracking-tight
                        prose-p:my-2 prose-li:my-1
                        prose-a:text-sky-300 hover:prose-a:text-sky-200
                        prose-a:underline prose-a:underline-offset-4
                        prose-hr:border-white/10"
          >
            <h2>Angaben gemäß § 5 TMG</h2>
            <p className="font-semibold text-[var(--cb-text)]">
              CloudBeatsAI - Omar Khouja
            </p>
            <p>c/o Online-Impressum.de #6083</p>
            <p>Europaring 90</p>
            <p>53757 Sankt Augustin</p>

            <hr />

            <p>
              E-Mail:{" "}
              <a href="mailto:cloudbeatsai@mail.online-impressum.de">
                cloudbeatsai@mail.online-impressum.de
              </a>
            </p>
            <p>
              Second contact path:{" "}
              <a
                href={`${LEGAL_URL}#Zweiter_Kontaktweg`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Zweiter Kontaktweg (external)
              </a>
            </p>

            <hr />

            <h4 className="uppercase tracking-wider text-white/70">
              Zuständige Regulierungs- und Aufsichtsbehörde
            </h4>
            <p>Medienanstalt Hamburg/Schleswig-Holstein</p>
            <p>Sitz: Deutschland</p>

            <hr />

            <p className="text-white/70">
              Kein Umsatzsteuerausweis aufgrund Anwendung der
              Kleinunternehmerregelung gemäß § 19 UStG.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
