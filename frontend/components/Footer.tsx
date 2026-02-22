"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/v2/SiteFooter";

export default function Footer() {
  const pathname = usePathname();
  const omitContactId = pathname === "/" || pathname.startsWith("/v2");

  return <SiteFooter id={omitContactId ? undefined : "contact"} />;
}
