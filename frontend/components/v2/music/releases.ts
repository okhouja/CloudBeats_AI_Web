/**
 * Hardcoded release data for the Music / Release Archive page.
 * Matches prototype: Neon Horizon, System Core, Void Echoes, Cyber Mist, Neural Drift, Void Core.
 */

export type ReleaseStatus =
  | "Active"
  | "In Development"
  | "Experimental";

export interface Release {
  id: string;
  slug: string;
  title: string;
  releaseId: string;
  version: string;
  year: string;
  status: ReleaseStatus;
  image: string;
}

export const releases: Release[] = [
  {
    id: "1",
    slug: "neon-horizon",
    title: "Neon Horizon",
    releaseId: "REL-2049",
    version: "v1.2",
    year: "2024",
    status: "Active",
    image: "https://images.unsplash.com/photo-1669672227809-28b9beaa6507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: "2",
    slug: "system-core",
    title: "System Core",
    releaseId: "REL-1024",
    version: "v2.0",
    year: "2023",
    status: "Active",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600",
  },
  {
    id: "3",
    slug: "void-echoes",
    title: "Void Echoes",
    releaseId: "REL-1001",
    version: "v1.0",
    year: "2022",
    status: "Active",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=600",
  },
  {
    id: "4",
    slug: "cyber-mist",
    title: "Cyber Mist",
    releaseId: "REL-2050",
    version: "v0.9",
    year: "2024",
    status: "In Development",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600",
  },
  {
    id: "5",
    slug: "neural-drift",
    title: "Neural Drift",
    releaseId: "REL-2051",
    version: "v0.5",
    year: "2024",
    status: "In Development",
    image: "https://images.unsplash.com/photo-1506259091721-347f793bb76b?q=80&w=600",
  },
  {
    id: "6",
    slug: "void-core",
    title: "Void Core",
    releaseId: "REL-X01",
    version: "ALPHA",
    year: "2025",
    status: "Experimental",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600",
  },
];

export function getStatusColorClass(status: ReleaseStatus): string {
  switch (status) {
    case "Active":
      return "bg-cyan-500";
    case "In Development":
      return "bg-purple-500";
    case "Experimental":
      return "bg-pink-500";
    default:
      return "bg-white";
  }
}

export function getStatusTextColorClass(status: ReleaseStatus): string {
  switch (status) {
    case "Active":
      return "text-cyan-500";
    case "In Development":
      return "text-purple-500";
    case "Experimental":
      return "text-pink-500";
    default:
      return "text-white/50";
  }
}
