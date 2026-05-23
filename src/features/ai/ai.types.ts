export type PracticeSignal = {
  userId: string;
  lessonId?: string;
  tempoBpm?: number;
  accuracyPct?: number;
  notes?: string;
};

export type PracticeRecommendation = {
  title: string;
  reason: string;
  targetMinutes: number;
};
