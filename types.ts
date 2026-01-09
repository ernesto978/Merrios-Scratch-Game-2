
export type GameState = 'playing' | 'won' | 'claimed';
export type AppPath = 'game' | 'page2' | 'page3';

export interface DiceSet {
  values: number[];
  revealed: boolean;
}

export interface PrizeConfig {
  label: string;
  amount: number;
  combination: number[];
}
