/**
 * Shared Impressum legal content. Used by /impressum and /v2/impressum.
 * Pass wrapperClassName for layout-specific styling (e.g. v2 tokens).
 */
export function ImpressumContent({
  wrapperClassName = "rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12",
  titleClassName = "text-3xl font-semibold text-white md:text-4xl",
  bodyClassName = "mt-10 space-y-8 text-white/85 leading-relaxed",
  labelClassName = "text-sm uppercase tracking-wider text-white/60",
  linkClassName = "text-sky-300 underline underline-offset-4 hover:text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded",
  buttonClassName = "mt-6 inline-block rounded-xl bg-fuchsia-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded",
}: {
  wrapperClassName?: string;
  titleClassName?: string;
  bodyClassName?: string;
  labelClassName?: string;
  linkClassName?: string;
  buttonClassName?: string;
} = {}) {
  return (
    <div className={wrapperClassName}>
      <div className="text-center">
        <h1 className={titleClassName}>Impressum</h1>
        <a
          href="https://mein.online-impressum.de/cloudbeatsai/"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClassName}
        >
          View legal information
        </a>
      </div>

      <div className={bodyClassName}>
        <div>
          <p className={labelClassName}>Angaben gemäß § 5 TMG</p>
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
              className={linkClassName}
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
              className={linkClassName}
            >
              External contact link
            </a>
          </p>
        </div>

        <hr className="border-white/10" />

        <div>
          <p className={labelClassName}>
            Zuständige Regulierungs- und Aufsichtsbehörde
          </p>
          <p className="mt-2">Medienanstalt Hamburg/Schleswig-Holstein</p>
          <p className="text-white/70">Sitz: Deutschland</p>
        </div>

        <hr className="border-white/10" />

        <p className="text-white/70">
          Kein Umsatzsteuerausweis aufgrund Anwendung der
          Kleinunternehmerregelung gemäß § 19 UStG.
        </p>
      </div>
    </div>
  );
}
