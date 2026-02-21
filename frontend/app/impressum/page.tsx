// app/impressum/page.tsx
import { ImpressumContent } from "@/components/ImpressumContent";

export const metadata = {
  title: "Impressum | CloudBeats AI",
  description: "Legal information for CloudBeats AI.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#12021f] via-[#1a0530] to-[#0b0220] px-4 pt-28 pb-24">
      <div className="mx-auto max-w-4xl">
        <ImpressumContent />
      </div>
    </main>
  );
}