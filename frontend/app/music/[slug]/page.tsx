import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { v2 } from "@/components/v2/ui";
import { releases, getStatusTextColorClass } from "@/components/v2/music/releases";
import { defaultAlbumTracks } from "@/components/v2/music/albumTracks";
import { TrackRow } from "@/components/v2/music/TrackRow";
import { Play, FileText } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const release = releases.find((r) => r.slug === slug);
  const title = release ? `${release.title} | CloudBeats AI` : "Release | CloudBeats AI";
  const description =
    "Album detail — tracklist, system notes, and immersive listening.";
  return {
    title,
    description,
    robots: { index: false, follow: false },
    openGraph: {
      title,
      description,
      url: `/music/${slug}`,
      siteName: "CloudBeats AI",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const DEFAULT_DESCRIPTION =
  "A systemic exploration of deep cinematic techno and generative soundscapes. Designed for focus, architecture, and night drives through the digital void.";

const SYSTEM_NOTES =
  "This release is built from a modular sonic pipeline: analysis, metadata extraction, and sync-ready rendering. The system interprets audio as structured data so visualizers and clients stay in phase without locking to a single source.";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function MusicSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const release = releases.find((r) => r.slug === slug);
  const statusTextClass = release
    ? getStatusTextColorClass(release.status)
    : "text-white/50";

  return (
    <div className="min-h-screen bg-[var(--cb-bg-1)]">
      <main className="overflow-hidden px-4 pb-32 pt-8 sm:px-6 lg:px-8">
        <div className={`${v2.sectionInner} max-w-6xl`}>
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-xs font-mono mb-6 text-white/40"
            aria-label="Breadcrumb"
          >
            <Link
              href="/music"
              className="hover:text-[var(--cb-cyan)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cb-bg-1)] rounded"
            >
              Releases
            </Link>
            <span aria-hidden>/</span>
            <span className="text-white/80">
              {release ? release.title : slug}
            </span>
          </nav>

          {/* 1. Album Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 relative">
            {/* Left: Album Art */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-[var(--cb-cyan)]/10 blur-3xl rounded-full scale-90 opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />
              <div className="aspect-square w-full rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative z-10 bg-[#05060a] border border-white/10">
                {release ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={release.image}
                    alt={`${release.title} — album art`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-95 group-hover:opacity-100"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/30 text-sm font-mono">
                    No art
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>
            </div>

            {/* Right: Album Info */}
            <div className="lg:col-span-8 flex flex-col justify-end pb-2">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="inline-block px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest rounded border border-[var(--cb-cyan)]/30 bg-[var(--cb-cyan)]/10 text-[var(--cb-cyan)]">
                  METADATA READY
                </span>
                {release && (
                  <>
                    <span className="text-white/30 text-[10px] font-mono tracking-widest uppercase">
                      {release.releaseId}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-widest ${statusTextClass}`}
                    >
                      {release.status}
                    </span>
                  </>
                )}
              </div>

              <h1 className={`${v2.headingPage} mb-4`}>
                {release ? release.title : slug}
              </h1>

              {release && (
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-mono text-white/50 mb-6">
                  <span>Version {release.version}</span>
                  <span>{release.year}</span>
                </div>
              )}

              <p
                className={`${v2.textMuted} mb-8 max-w-2xl leading-relaxed font-light`}
              >
                {DEFAULT_DESCRIPTION}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#"
                  className={`${v2.buttonPrimary} inline-flex items-center gap-2`}
                  aria-label="Play stream (placeholder)"
                >
                  <Play size={16} fill="currentColor" />
                  Play Stream
                </a>
                <Link
                  href={`/visualizer?track=${encodeURIComponent(slug)}`}
                  className={`${v2.buttonSecondary} inline-flex items-center gap-2`}
                >
                  <Play size={16} fill="currentColor" />
                  Enter Immersive
                </Link>
                <a
                  href="#system-notes"
                  className={`${v2.buttonSecondary} inline-flex items-center gap-2 border-white/10 text-white/70 hover:text-white bg-transparent`}
                >
                  <FileText size={16} />
                  System Notes
                </a>
              </div>
            </div>
          </section>

          {/* 2. Main Content Grid: Tracklist + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Tracklist + System Notes */}
            <div className="lg:col-span-8 space-y-10">
              <section>
                <div className="flex items-center justify-between mb-6 px-2 border-b border-white/5 pb-4">
                  <h2 className={v2.headingLarge}>Tracklist</h2>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    AUDIO METADATA
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  {defaultAlbumTracks.map((track, i) => (
                    <TrackRow
                      key={track.index}
                      index={track.index}
                      title={track.title}
                      duration={track.duration}
                      bpm={track.bpm}
                      active={i === 1}
                    />
                  ))}
                </div>
              </section>

              {/* System Notes */}
              <section id="system-notes" className="scroll-mt-24">
                <h2 className={`${v2.headingLarge} mb-4`}>System Notes</h2>
                <p className={`${v2.textMuted} leading-relaxed max-w-2xl`}>
                  {SYSTEM_NOTES}
                </p>
              </section>
            </div>

            {/* Right: Sidebar (desktop only) */}
            <aside className="lg:col-span-4 hidden lg:block space-y-6">
              <div
                className={`${v2.cardLarge} p-6 md:p-8 space-y-6`}
              >
                <h3 className="text-xs font-mono uppercase tracking-widest text-white/50 border-b border-white/5 pb-2">
                  System Metrics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[9px] text-white/40 uppercase tracking-wider mb-1">
                      Energy
                    </span>
                    <span className="font-mono text-sm text-[var(--cb-cyan)]">
                      92%
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-white/40 uppercase tracking-wider mb-1">
                      Mode
                    </span>
                    <span className="font-mono text-sm text-white/80">
                      Pseudo Real-Time
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-white/40 uppercase tracking-wider mb-1">
                      Layer
                    </span>
                    <span className="font-mono text-sm text-white/80">
                      Sync
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-white/40 uppercase tracking-wider mb-1">
                      Runtime
                    </span>
                    <span className="font-mono text-sm text-white/80">
                      21:03
                    </span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 space-y-2 text-[10px] font-mono text-white/40">
                  <p>Sync: YouTube API</p>
                  <p>Data: JSON Structure</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
