import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const GITHUB_URL = "https://github.com/okhouja";
const LINKEDIN_URL = "https://www.linkedin.com/in/omar-khouja/";
const OG_IMAGE_ABOUT = "/about/Omar-Khouja.webp";

export const metadata: Metadata = {
  title: "Behind the Beats (v1) | CloudBeats AI",
  description:
    "The story behind CloudBeats AI — where cloud systems, sound design, and AI experimentation converge.",
  openGraph: {
    title: "Behind the Beats (v1) | CloudBeats AI",
    description:
      "The story behind CloudBeats AI — where cloud systems, sound design, and AI experimentation converge.",
    url: "/v1/about",
    images: [
      {
        url: OG_IMAGE_ABOUT,
        width: 630,
        height: 828,
        alt: "Portrait of Omar Khouja, founder of CloudBeats AI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Behind the Beats (v1) | CloudBeats AI",
    description:
      "The story behind CloudBeats AI — where cloud systems, sound design, and AI experimentation converge.",
    images: [OG_IMAGE_ABOUT],
  },
};

export default function V1AboutPage() {
  return (
    <div
      className="min-h-screen bg-[var(--cb-bg-1)]"
      style={{
        backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79, 70, 229, 0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(133, 215, 246, 0.05) 0%, transparent 50%)`,
      }}
    >
      <main className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 shadow-[0_0_40px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-10">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-12">
            <div className="shrink-0 md:sticky md:top-24 md:w-[420px]">
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(133,215,246,0.08),0_0_20px_rgba(218,67,196,0.06)]">
                <Image
                  src="/about/Omar-Khouja.webp"
                  alt="Portrait of Omar Khouja, founder of CloudBeats AI"
                  width={420}
                  height={236}
                  className="h-full w-full object-cover object-[50%_18%]"
                />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="text-3xl font-semibold text-[var(--cb-text)] md:text-4xl">
                Behind the Beats
              </h1>
              <p className="mt-2 text-[var(--cb-text-muted)]">
                The story behind CloudBeats AI
              </p>

              <div className="mt-8 max-w-2xl space-y-5 leading-relaxed">
                <p className="text-[var(--cb-text)]/95">
                  Before AI. Before DevOps. There was experimentation.
                </p>
                <p className="text-[var(--cb-text)]/90">
                  Between 2001 and 2011, I spent countless nights in front of
                  SoundForge and Sony Vegas — cutting audio, looping fragments,
                  stretching textures beyond their natural limits. I had no
                  formal training. No synthesizers. No roadmap.
                </p>
                <p className="text-[var(--cb-text-muted)]">
                  I didn&apos;t think of it as music.
                  <br />
                  I was simply shaping sound.
                </p>
                <p className="text-[var(--cb-text-muted)]">
                  At the time, producing electronic music properly required tools
                  and knowledge that felt out of reach. So I worked with what I
                  had: curiosity, repetition, and a pair of ears that were always
                  searching.
                </p>
                <p className="text-[var(--cb-text-muted)]">
                  Life eventually redirected me toward systems.
                </p>
                <p className="text-[var(--cb-text-muted)]">
                  I moved to Germany and built a career across cloud engineering,
                  DevOps, full-stack development, and e-commerce systems.
                  Infrastructure, backend logic, automation pipelines, and scalable
                  architectures became part of the same creative mindset.
                </p>
                <p className="text-[var(--cb-text-muted)]">
                  Designing distributed systems felt surprisingly familiar — it was
                  still about structure, timing, and flow.
                </p>
                <p className="text-[var(--cb-text-muted)]">But something stayed constant.</p>
                <p className="text-[var(--cb-text-muted)]">The ears never stopped listening.</p>
                <p className="text-[var(--cb-text-muted)]">
                  Years later, a personal hearing challenge reshaped my
                  relationship with sound. Silence was no longer neutral.
                  Awareness became sharper. Listening became intentional.
                </p>
                <p className="text-[var(--cb-text-muted)]">
                  Around the same time, AI music tools emerged.
                </p>
                <p className="text-[var(--cb-text-muted)]">
                  For the first time, the engineer and the experimenter could truly
                  collaborate.
                </p>
                <p className="text-[var(--cb-text-muted)]">
                  I began learning Ableton Live — not casually, but structurally.
                  And I discovered something humbling: learning music production is
                  not easier than learning programming. Both demand discipline.
                  Both require iteration. Both expose your limitations before they
                  reward your persistence.
                </p>
                <p className="text-[var(--cb-text-muted)]">The journey is long.</p>
                <p className="text-[var(--cb-text-muted)]">
                  AI did not remove that journey.
                  <br />
                  It accelerated ideation.
                  <br />
                  It expanded the canvas.
                </p>
                <p className="text-[var(--cb-text-muted)]">
                  Along the way, I challenged myself outside my comfort zone —
                  learning front-end craft and design fundamentals even when it
                  wasn&apos;t my specialty, just to give this project a real home on
                  the web.
                </p>
                <p className="text-[var(--cb-text-muted)]">
                  Understanding how digital ecosystems shape creativity has become
                  part of the journey as well.
                </p>
                <p className="text-[var(--cb-text-muted)]">
                  Today, I am expanding that foundation into data analytics and
                  machine learning — exploring how intelligence, systems, and sound
                  can intersect.
                </p>
                <p className="text-[var(--cb-text-muted)]">
                  CloudBeats AI was born at the intersection of structured
                  infrastructure and structured sound — where cloud architecture
                  meets sonic architecture.
                </p>
                <p className="text-[var(--cb-text-muted)]">
                  It&apos;s not only a music project.
                  <br />
                  It&apos;s a living laboratory — a long experiment where systems
                  thinking meets sound.
                </p>
                <blockquote className="my-8 rounded-xl border-l border-white/15 bg-white/5 py-4 pl-4 pr-4 italic text-white/90">
                  This is not a comeback.
                  <br />
                  It is an integration.
                  <br />
                  Engineering, data, systems, and sound — converging into one long
                  experiment.
                </blockquote>
                <p className="text-sm text-[var(--cb-text-muted)]">
                  — Omar Khouja · Hamburg, 2026
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-6 sm:justify-start">
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--cb-text-muted)] underline-offset-4 transition-colors hover:text-[var(--cb-text)] hover:underline"
                  >
                    GitHub
                  </a>
                  <span className="text-[var(--cb-text-muted)]/50">·</span>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--cb-text-muted)] underline-offset-4 transition-colors hover:text-[var(--cb-text)] hover:underline"
                  >
                    LinkedIn
                  </a>
                  <span className="text-[var(--cb-text-muted)]/50">·</span>
                  <Link
                    href="/v1"
                    className="text-sm text-[var(--cb-text-muted)] underline transition-colors hover:text-[var(--cb-text)]"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
