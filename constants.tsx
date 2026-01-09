
import React from 'react';
import { PrizeConfig } from './types';

export const PRIZES: PrizeConfig[] = [
  { label: '3 dés identiques', amount: 500, combination: [2, 2, 2] },
  { label: '4, 5 et 6 combinés', amount: 1000, combination: [4, 5, 6] },
  { label: '3 dés avec six points', amount: 1500, combination: [6, 6, 6] },
];

// Fix: Making children optional to avoid 'missing property' errors in some environments
const DiceWrapper = ({ children }: { children?: React.ReactNode }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
    <defs>
      <linearGradient id="diceBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#e2e8f0', stopOpacity: 1 }} />
      </linearGradient>
      <radialGradient id="dotShadow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#333333', stopOpacity: 1 }} />
      </radialGradient>
    </defs>
    <rect x="5" y="5" width="90" height="90" rx="18" fill="url(#diceBody)" stroke="#cbd5e1" strokeWidth="1" />
    <rect x="8" y="8" width="84" height="84" rx="15" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
    {children}
  </svg>
);

export const DICE_RESOURCES: Record<number, React.ReactNode> = {
  1: (
    <DiceWrapper>
      <circle cx="50" cy="50" r="10" fill="url(#dotShadow)" />
    </DiceWrapper>
  ),
  2: (
    <DiceWrapper>
      <circle cx="28" cy="28" r="8" fill="url(#dotShadow)" />
      <circle cx="72" cy="72" r="8" fill="url(#dotShadow)" />
    </DiceWrapper>
  ),
  3: (
    <DiceWrapper>
      <circle cx="25" cy="25" r="8" fill="url(#dotShadow)" />
      <circle cx="50" cy="50" r="8" fill="url(#dotShadow)" />
      <circle cx="75" cy="75" r="8" fill="url(#dotShadow)" />
    </DiceWrapper>
  ),
  4: (
    <DiceWrapper>
      <circle cx="30" cy="30" r="8" fill="url(#dotShadow)" />
      <circle cx="70" cy="30" r="8" fill="url(#dotShadow)" />
      <circle cx="30" cy="70" r="8" fill="url(#dotShadow)" />
      <circle cx="70" cy="70" r="8" fill="url(#dotShadow)" />
    </DiceWrapper>
  ),
  5: (
    <DiceWrapper>
      <circle cx="28" cy="28" r="8" fill="url(#dotShadow)" />
      <circle cx="72" cy="28" r="8" fill="url(#dotShadow)" />
      <circle cx="50" cy="50" r="8" fill="url(#dotShadow)" />
      <circle cx="28" cy="72" r="8" fill="url(#dotShadow)" />
      <circle cx="72" cy="72" r="8" fill="url(#dotShadow)" />
    </DiceWrapper>
  ),
  6: (
    <DiceWrapper>
      <circle cx="30" cy="25" r="8" fill="url(#dotShadow)" />
      <circle cx="70" cy="25" r="8" fill="url(#dotShadow)" />
      <circle cx="30" cy="50" r="8" fill="url(#dotShadow)" />
      <circle cx="70" cy="50" r="8" fill="url(#dotShadow)" />
      <circle cx="30" cy="75" r="8" fill="url(#dotShadow)" />
      <circle cx="70" cy="75" r="8" fill="url(#dotShadow)" />
    </DiceWrapper>
  ),
};
