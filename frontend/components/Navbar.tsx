"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isV1 = pathname.startsWith("/v1");
  const isV2 = pathname.startsWith("/v2");
  const basePath = isV1 ? "/v1" : isV2 ? "/v2" : "";
  const hasContactOnPage = pathname === "/" || pathname === "/v2" || pathname === "/v1";
  const isAboutPage = pathname === "/about" || pathname === "/v2/about" || pathname === "/v1/about";
  const isReleasesPage = pathname === "/music" || pathname.startsWith("/music/");

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full max-w-full overflow-hidden border-b border-white/10 bg-white/5 backdrop-blur-md">
      <nav className="mx-auto flex min-w-0 max-w-6xl items-center justify-between gap-4 px-4 py-3" aria-label="Main">
        <Link
          href={basePath || "/"}
          className="flex shrink-0 items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded"
          aria-label="CloudBeats AI home"
        >
          <Image
            src="/logo_cloud.svg"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 shrink-0 object-contain"
            aria-hidden
          />
          <Image
            src="/logo.png"
            alt="CloudBeats AI"
            width={190}
            height={71}
            priority={false}
            className="h-auto w-[140px] select-none object-contain sm:w-[160px] md:w-[190px]"
          />
        </Link>
        <div className="flex min-w-0 shrink items-center gap-4 whitespace-nowrap sm:gap-6">
          <Link
            href={`${basePath}/about`}
            className={`text-sm font-medium transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded ${isAboutPage ? "text-white" : "text-white/80"}`}
          >
            <span className="hidden sm:inline">Behind the Beats</span>
            <span className="sm:hidden">Beats</span>
          </Link>
          <Link
            href={basePath ? `${basePath}/music` : "/music"}
            className={`text-sm font-medium transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded ${isReleasesPage ? "text-white" : "text-white/80"}`}
          >
            Releases
          </Link>
          <Link
            href={hasContactOnPage ? "#contact" : (basePath ? `${basePath}/` : "/") + "#contact"}
            className={`hidden text-sm font-medium transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded sm:inline-block ${isAboutPage ? "text-white/80" : "text-white/90"}`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
