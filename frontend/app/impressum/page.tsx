// app/impressum/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Impressum | CloudBeats AI",
  description: "Legal information (Impressum) for CloudBeats AI.",
};

const EXTERNAL_IMPRESSUM_URL = "https://mein.online-impressum.de/cloudbeatsai/";
const EXTERNAL_SECOND_CONTACT_URL =
  "https://mein.online-impressum.de/cloudbeatsai/#Zweiter_Kontaktweg";

export default function ImpressumPage() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] px-4 pb-24 pt-28">
      <div className="mx-auto w-full max-w-5xl">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-10">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Impressum
            </h1>

            <div className="mt-5">
              <a
                href={EXTERNAL_IMPRESSUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60"
              >
                View legal information
              </a>
            </div>
          </div>

          {/* Content */}
          <div
            className="
              mt-10
              prose prose-invert max-w-none
              prose-headings:text-white
              prose-strong:text-white
              prose-p:text-white/85
              prose-a:text-sky-300 hover:prose-a:text-sky-200
              prose-a:underline prose-a:underline-offset-4
              prose-hr:border-white/10
              prose-h4:uppercase prose-h4:tracking-wider prose-h4:text-white/70
              prose-p:leading-relaxed
            "
          >
            <h3>Angaben gemäß § 5 TMG</h3>

            <p>
              <strong>CloudBeatsAI – Omar Khouja</strong>
              <br />
              c/o Online-Impressum.de #6083
              <br />
              Europaring 90
              <br />
              53757 Sankt Augustin
            </p>

            <hr />

            <p>
              <strong>E-Mail:</strong>{" "}
              <a href="mailto:cloudbeatsai@mail.online-impressum.de">
                cloudbeatsai@mail.online-impressum.de
              </a>
              <br />
              <strong>Zweiter Kontaktweg:</strong>{" "}
              <a
                href={EXTERNAL_SECOND_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Zweiter Kontaktweg (external)
              </a>
            </p>

            <hr />

            <h4>Zuständige Regulierungs- und Aufsichtsbehörde</h4>
            <p>
              Medienanstalt Hamburg/Schleswig-Holstein
              <br />
              <span className="text-white/70">Sitz: Deutschland</span>
            </p>

            <hr />

            <p className="text-white/70">
              Kein Umsatzsteuerausweis aufgrund Anwendung der
              Kleinunternehmerregelung gemäß § 19 UStG.
            </p>

            {/* Optional: a small back link (if you want) */}
            <p className="mt-8">
              <Link
                href="/"
                className="text-white/70 no-underline hover:text-white"
              >
                ← Back to Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}