"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" aria-label="Main">
        <Link href="/" className="flex items-center gap-2">
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
        <div className="flex items-center gap-6 whitespace-nowrap">
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-white ${pathname === "/about" ? "text-white" : "text-white/80"}`}
          >
            <span className="hidden sm:inline">Behind the Beats</span>
            <span className="sm:hidden">Beats</span>
          </Link>
          <Link
            href={isHome ? "#listen" : "/#listen"}
            className={`text-sm font-medium transition-colors hover:text-white ${pathname === "/about" ? "text-white/80" : "text-white/90"}`}
          >
            Listen
          </Link>
          <Link
            href={isHome ? "#contact" : "/#contact"}
            className={`hidden text-sm font-medium transition-colors hover:text-white sm:inline-block ${pathname === "/about" ? "text-white/80" : "text-white/90"}`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
