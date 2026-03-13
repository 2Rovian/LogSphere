type MediaType = "movie" | "book" | "series" | "games" | "anime";

export interface MediaEntry {
  id: string;
  title: string;
  type: MediaType;
  rating?: number;
  review?: string;
  status: "planned" | "consuming" | "completed";
  createdAt: Date;
}