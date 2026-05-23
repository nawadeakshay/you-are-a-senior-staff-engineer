export type CommunityScope = "public" | "members" | "course";

export type CommunityPostSummary = {
  id: string;
  title: string;
  slug: string;
  authorName: string;
  createdAt: string;
  voteScore: number;
};
