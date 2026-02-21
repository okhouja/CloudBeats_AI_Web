"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const hasListenContact = pathname === "/" || pathname === "/v2";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full max-w-full overflow-hidden border-b border-white/10 bg-white/5 backdrop-blur-md">
      <nav className="mx-auto flex min-w-0 max-w-6xl items-center justify-between gap-4 px-4 py-3" aria-label="Main">
        <Link href="/" className="flex shrink-0 items-center gap-2">
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
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-white ${pathname === "/about" ? "text-white" : "text-white/80"}`}
          >
            <span className="hidden sm:inline">Behind the Beats</span>
            <span className="sm:hidden">Beats</span>
          </Link>
          <Link
            href={hasListenContact ? "#listen" : "/#listen"}
            className={`text-sm font-medium transition-colors hover:text-white ${pathname === "/about" ? "text-white/80" : "text-white/90"}`}
          >
            Listen
          </Link>
          <Link
            href={hasListenContact ? "#contact" : "/#contact"}
            className={`hidden text-sm font-medium transition-colors hover:text-white sm:inline-block ${pathname === "/about" ? "text-white/80" : "text-white/90"}`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
