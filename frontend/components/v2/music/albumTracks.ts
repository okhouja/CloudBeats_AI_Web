/**
 * Default tracklist for album detail pages (shared across releases for now).
 */

export interface AlbumTrack {
  index: string;
  title: string;
  duration: string;
  bpm: number;
}

export const defaultAlbumTracks: AlbumTrack[] = [
  { index: "01", title: "Initialization Sequence", duration: "2:14", bpm: 124 },
  { index: "02", title: "Neon Horizon (Main Theme)", duration: "4:32", bpm: 132 },
  { index: "03", title: "Data Stream Entry", duration: "3:45", bpm: 128 },
  { index: "04", title: "Architectural Dreams", duration: "5:12", bpm: 120 },
  { index: "05", title: "Void State", duration: "3:22", bpm: 118 },
  { index: "06", title: "System Shutdown", duration: "1:58", bpm: 90 },
];
