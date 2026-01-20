
export enum AppView {
  ONBOARDING = 'ONBOARDING',
  HOME = 'HOME',
  LEARN = 'LEARN',
  QUIZ = 'QUIZ',
  LIVE_COACH = 'LIVE_COACH',
  PROFILE = 'PROFILE'
}

export type QuizLevel = 'Dasar' | 'Menengah' | 'Mahir';

export interface TajwidRule {
  id: string;
  name: string;
  category: string;
  description: string;
  explanation: string;
  letters: string[];
  howToRead: string;
  commonMistakes: string;
  examples: TajwidExample[];
  imageUrl?: string; // Menampung URL diagram visual
}

export interface TajwidExample {
  arabic: string;
  transliteration: string;
  translation: string;
  rule_applied: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
