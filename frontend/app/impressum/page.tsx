// app/impressum/page.tsx

export const metadata = {
  title: "Impressum | CloudBeats AI",
  description: "Legal information for CloudBeats AI.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#12021f] via-[#1a0530] to-[#0b0220] px-4 pt-28 pb-24">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12">

          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white md:text-4xl">
              Impressum
            </h1>

            <a
              href="https://mein.online-impressum.de/cloudbeatsai/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xl bg-fuchsia-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-500"
            >
              View legal information
            </a>
          </div>

          {/* Content */}
          <div className="mt-10 space-y-8 text-white/85 leading-relaxed">

            <div>
              <p className="text-sm uppercase tracking-wider text-white/60">
                Angaben gemäß § 5 TMG
              </p>

              <p className="mt-3 font-semibold text-white">
                CloudBeatsAI – Omar Khouja
              </p>

              <p>c/o Online-Impressum.de #6083</p>
              <p>Europaring 90</p>
              <p>53757 Sankt Augustin</p>
            </div>

            <hr className="border-white/10" />

            <div>
              <p>
                <span className="font-semibold text-white">E-Mail:</span>{" "}
                <a
                  href="mailto:cloudbeatsai@mail.online-impressum.de"
                  className="text-sky-300 underline underline-offset-4 hover:text-sky-200"
                >
                  cloudbeatsai@mail.online-impressum.de
                </a>
              </p>

              <p className="mt-2">
                <span className="font-semibold text-white">
                  Zweiter Kontaktweg:
                </span>{" "}
                <a
                  href="https://mein.online-impressum.de/cloudbeatsai/#Zweiter_Kontaktweg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-300 underline underline-offset-4 hover:text-sky-200"
                >
                  External contact link
                </a>
              </p>
            </div>

            <hr className="border-white/10" />

            <div>
              <p className="text-sm uppercase tracking-wider text-white/60">
                Zuständige Regulierungs- und Aufsichtsbehörde
              </p>

              <p className="mt-2">
                Medienanstalt Hamburg/Schleswig-Holstein
              </p>

              <p className="text-white/70">Sitz: Deutschland</p>
            </div>

            <hr className="border-white/10" />

            <p className="text-white/70">
              Kein Umsatzsteuerausweis aufgrund Anwendung der
              Kleinunternehmerregelung gemäß § 19 UStG.
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}