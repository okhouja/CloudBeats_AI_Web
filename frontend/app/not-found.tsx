import Link from "next/link";
import Footer from "@/components/Footer";
import { v2 } from "@/components/v2/ui";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--cb-bg-1)]">
      <main className="overflow-hidden px-4 py-24 md:py-32">
        <div className={`${v2.sectionInner} max-w-xl text-center`}>
          <h1 className={v2.headingPage}>
            Page not found
          </h1>
          <p className={`mt-3 ${v2.textMuted}`}>
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className={v2.buttonPrimary}>
              Go Home
            </Link>
            <Link href="/about" className={v2.buttonSecondary}>
              Behind the Beats
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
