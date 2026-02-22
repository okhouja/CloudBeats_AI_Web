/**
 * Roadmap phase data — ported from Figma_Prototype_v2 Roadmap page.
 */

export type PhaseColor = "cyan" | "purple" | "blue" | "neutral";
export type PhaseStatus = "LIVE" | "IN PROGRESS" | "CONCEPT" | "FUTURE";

export interface RoadmapPhase {
  id: string;
  title: string;
  status: PhaseStatus;
  color: PhaseColor;
  bullets: string[];
  subtext: string;
}

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: "01",
    title: "Core MVP",
    status: "LIVE",
    color: "cyan",
    bullets: [
      "Supabase (DB + Storage)",
      "Next.js Frontend",
      "Vercel Deployment",
      "Cost-optimized architecture",
    ],
    subtext: "Operational foundation with minimal overhead.",
  },
  {
    id: "02",
    title: "Multi-Cloud Expansion",
    status: "IN PROGRESS",
    color: "purple",
    bullets: [
      "AWS S3 backup layer",
      "Azure cold region",
      "Terraform (Infrastructure as Code)",
      "Hardened CI/CD",
    ],
    subtext: "Enhancing resilience and portability.",
  },
  {
    id: "03",
    title: "AI Signal Analysis",
    status: "CONCEPT",
    color: "blue",
    bullets: [
      "Python worker",
      "Audio metadata extraction",
      "Feature mapping",
      "Performance metrics",
    ],
    subtext: "Bridging creativity with measurable system intelligence.",
  },
  {
    id: "04",
    title: "Live Sonic Engine",
    status: "FUTURE",
    color: "neutral",
    bullets: [
      "Real-time visualizer",
      "Session-aware rendering",
      "Modular plugin architecture",
    ],
    subtext: "Transforming releases into adaptive sonic systems.",
  },
];
